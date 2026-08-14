import React, { useState, useEffect, useCallback } from 'react';
import { 
  StudentProfile, 
  UserProgress, 
  UserStats, 
  Achievement, 
  VerbDefinition 
} from './types';
import { 
  loadStudentProfile, 
  saveStudentProfile, 
  loadUserProgress, 
  saveUserProgress, 
  loadUserStats, 
  saveUserStats, 
  loadAchievements, 
  saveAchievements, 
  loadSoundSetting, 
  saveSoundSetting, 
  clearAllStudentData,
  INITIAL_STATS
} from './utils/storage';
import { soundManager } from './utils/audio';
import { fireGrandChampionConfetti } from './utils/confetti';
import { ALL_VERBS } from './data/verbs';

// Components
import { Navbar } from './components/Navbar';
import { WelcomeScreen } from './components/WelcomeScreen';
import { Dashboard } from './components/Dashboard';
import { VerbPractice } from './components/VerbPractice';
import { CertificateModal } from './components/CertificateModal';
import { AchievementsModal } from './components/AchievementsModal';
import { ProfileModal } from './components/ProfileModal';

export default function App() {
  // Global App States
  const [student, setStudent] = useState<StudentProfile | null>(null);
  const [progress, setProgress] = useState<UserProgress>({});
  const [stats, setStats] = useState<UserStats>(INITIAL_STATS);
  const [achievements, setAchievements] = useState<Achievement[]>([]);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);
  
  // Navigation & Modals State
  const [selectedVerb, setSelectedVerb] = useState<VerbDefinition | null>(null);
  const [showCertificate, setShowCertificate] = useState<boolean>(false);
  const [showAchievements, setShowAchievements] = useState<boolean>(false);
  const [showProfile, setShowProfile] = useState<boolean>(false);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  // Load persistent data from LocalStorage on mount
  useEffect(() => {
    const savedStudent = loadStudentProfile();
    const savedProgress = loadUserProgress();
    const savedStats = loadUserStats();
    const savedAchievements = loadAchievements();
    const savedSound = loadSoundSetting();

    setStudent(savedStudent);
    setProgress(savedProgress);
    setStats(savedStats);
    setAchievements(savedAchievements);
    setSoundEnabled(savedSound);
    soundManager.setSoundEnabled(savedSound);
    setIsLoaded(true);
  }, []);

  // Helper to check and unlock achievements
  const checkAchievements = useCallback((
    updatedStats: UserStats,
    currentAchievements: Achievement[]
  ): Achievement[] => {
    let changed = false;
    const now = new Date().toISOString();

    const updated = currentAchievements.map(ach => {
      if (ach.unlockedAt !== null) return ach; // Already unlocked

      let shouldUnlock = false;
      if (ach.id === 'first-verb' && updatedStats.masteredVerbsCount >= 1) shouldUnlock = true;
      if (ach.id === 'five-verbs' && updatedStats.masteredVerbsCount >= 5) shouldUnlock = true;
      if (ach.id === 'ten-verbs' && updatedStats.masteredVerbsCount >= 10) shouldUnlock = true;
      if (ach.id === 'twenty-five-verbs' && updatedStats.masteredVerbsCount >= 25) shouldUnlock = true;
      if (ach.id === 'all-fifty-verbs' && updatedStats.masteredVerbsCount >= 50) shouldUnlock = true;
      if (ach.id === 'streak-master' && updatedStats.currentStreak >= 3) shouldUnlock = true;
      if (ach.id === 'sentence-expert' && updatedStats.sentenceBuilderCorrectCount >= 25) shouldUnlock = true;
      if (ach.id === 'quick-thinker' && updatedStats.swiftAnswersCount >= 10) shouldUnlock = true;

      if (shouldUnlock) {
        changed = true;
        return { ...ach, unlockedAt: now };
      }
      return ach;
    });

    if (changed) {
      saveAchievements(updated);
    }
    return updated;
  }, []);

  // Handle student registration
  const handleStartStudent = (newProfile: StudentProfile) => {
    setStudent(newProfile);
    saveStudentProfile(newProfile);
  };

  // Sound toggle handler
  const handleToggleSound = () => {
    const next = !soundEnabled;
    setSoundEnabled(next);
    soundManager.setSoundEnabled(next);
    saveSoundSetting(next);
  };

  // Track answer performance
  const handleRecordAnswer = (isCorrect: boolean, isSentenceBuilder: boolean, timeRemaining: number) => {
    setStats(prev => {
      const nextStats: UserStats = {
        ...prev,
        totalQuestionsAnswered: prev.totalQuestionsAnswered + 1,
        totalCorrectAnswers: isCorrect ? prev.totalCorrectAnswers + 1 : prev.totalCorrectAnswers,
        sentenceBuilderCorrectCount: (isCorrect && isSentenceBuilder)
          ? prev.sentenceBuilderCorrectCount + 1
          : prev.sentenceBuilderCorrectCount,
        swiftAnswersCount: (isCorrect && timeRemaining >= 15)
          ? prev.swiftAnswersCount + 1
          : prev.swiftAnswersCount
      };

      saveUserStats(nextStats);
      setAchievements(prevAch => checkAchievements(nextStats, prevAch));
      return nextStats;
    });
  };

  // Handle Verb Mastery (10/10 Score Achieved)
  const handleVerbMastered = (verbId: number, attemptCount: number) => {
    const now = new Date().toISOString();
    const previouslyMastered = !!progress[verbId]?.mastered;

    // Update Verb Progress
    const updatedProgress: UserProgress = {
      ...progress,
      [verbId]: {
        verbId,
        mastered: true,
        attempts: (progress[verbId]?.attempts || 0) + attemptCount,
        bestScore: 10,
        currentScore: 10,
        lastAttemptAt: now,
        completedAt: progress[verbId]?.completedAt || now
      }
    };
    setProgress(updatedProgress);
    saveUserProgress(updatedProgress);

    // Update Stats & Streak
    setStats(prev => {
      const newMasteredCount = Object.values(updatedProgress).filter(p => p.mastered).length;
      const newStreak = prev.currentStreak + 1;
      const newBestStreak = Math.max(prev.bestStreak, newStreak);

      const nextStats: UserStats = {
        ...prev,
        masteredVerbsCount: newMasteredCount,
        currentStreak: newStreak,
        bestStreak: newBestStreak
      };

      saveUserStats(nextStats);
      setAchievements(prevAch => checkAchievements(nextStats, prevAch));

      // If just unlocked all 50 verbs, celebrate with grand finale confetti!
      if (newMasteredCount === 50 && !previouslyMastered) {
        setTimeout(() => {
          fireGrandChampionConfetti();
          setShowCertificate(true);
        }, 1500);
      }

      return nextStats;
    });
  };

  // Navigate to Next Verb in Sequence
  const handleNextVerb = () => {
    if (!selectedVerb) return;
    const nextIndex = ALL_VERBS.findIndex(v => v.id === selectedVerb.id) + 1;
    if (nextIndex < ALL_VERBS.length) {
      setSelectedVerb(ALL_VERBS[nextIndex]);
    } else {
      setSelectedVerb(null);
    }
  };

  // Update Student Profile
  const handleUpdateProfile = (updatedProfile: StudentProfile) => {
    setStudent(updatedProfile);
    saveStudentProfile(updatedProfile);
  };

  // Reset Progress Data
  const handleResetAllData = () => {
    clearAllStudentData();
    setProgress({});
    setStats(INITIAL_STATS);
    setAchievements(loadAchievements());
    setSelectedVerb(null);
  };

  if (!isLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-900 text-white">
        <div className="animate-pulse font-bold text-lg">Cargando English Verb Challenge...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-blue-500 selection:text-white">
      
      {/* Top Navigation */}
      <Navbar
        student={student}
        stats={stats}
        soundEnabled={soundEnabled}
        onToggleSound={handleToggleSound}
        onOpenProfile={() => setShowProfile(true)}
        onOpenAchievements={() => setShowAchievements(true)}
        onOpenCertificate={() => setShowCertificate(true)}
        onResetProgress={handleResetAllData}
        onGoHome={() => setSelectedVerb(null)}
        currentView={selectedVerb ? 'practice' : 'dashboard'}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {!student ? (
          <WelcomeScreen onStart={handleStartStudent} />
        ) : selectedVerb ? (
          <VerbPractice
            verb={selectedVerb}
            onBack={() => setSelectedVerb(null)}
            onVerbMastered={handleVerbMastered}
            onRecordAnswer={handleRecordAnswer}
            onNextVerb={handleNextVerb}
          />
        ) : (
          <Dashboard
            student={student}
            progress={progress}
            stats={stats}
            onSelectVerb={(v) => setSelectedVerb(v)}
            onOpenCertificate={() => setShowCertificate(true)}
            onOpenAchievements={() => setShowAchievements(true)}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="py-6 border-t border-slate-200 bg-white text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-semibold text-slate-700">
            English Verb Challenge &bull; 50 Essential Verbs
          </p>
          <p className="text-slate-400">
            Preparación especializada para exámenes Saber 11 (ICFES) y IELTS Academic / General
          </p>
        </div>
      </footer>

      {/* Modals */}
      {student && showCertificate && (
        <CertificateModal
          student={student}
          stats={stats}
          progress={progress}
          onClose={() => setShowCertificate(false)}
        />
      )}

      {showAchievements && (
        <AchievementsModal
          achievements={achievements}
          onClose={() => setShowAchievements(false)}
        />
      )}

      {student && showProfile && (
        <ProfileModal
          student={student}
          stats={stats}
          onUpdateProfile={handleUpdateProfile}
          onResetAllData={handleResetAllData}
          onClose={() => setShowProfile(false)}
        />
      )}

    </div>
  );
}
