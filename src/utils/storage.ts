import { StudentProfile, UserProgress, UserStats, Achievement } from '../types';
import { ACHIEVEMENTS_LIST } from '../data/achievements';

const STORAGE_KEYS = {
  STUDENT: 'evc_student_profile',
  PROGRESS: 'evc_user_progress',
  STATS: 'evc_user_stats',
  ACHIEVEMENTS: 'evc_user_achievements',
  SOUND: 'evc_sound_enabled'
};

export const INITIAL_STATS: UserStats = {
  totalQuestionsAnswered: 0,
  totalCorrectAnswers: 0,
  masteredVerbsCount: 0,
  currentStreak: 0,
  bestStreak: 0,
  sentenceBuilderCorrectCount: 0,
  swiftAnswersCount: 0,
  totalTimeSpentSeconds: 0
};

export function loadStudentProfile(): StudentProfile | null {
  try {
    const data = localStorage.getItem(STORAGE_KEYS.STUDENT);
    return data ? JSON.parse(data) : null;
  } catch {
    return null;
  }
}

export function saveStudentProfile(profile: StudentProfile): void {
  try {
    localStorage.setItem(STORAGE_KEYS.STUDENT, JSON.stringify(profile));
  } catch {
    // Ignore storage quota errors
  }
}

export function loadUserProgress(): UserProgress {
  try {
    const data = localStorage.getItem(STORAGE_KEYS.PROGRESS);
    return data ? JSON.parse(data) : {};
  } catch {
    return {};
  }
}

export function saveUserProgress(progress: UserProgress): void {
  try {
    localStorage.setItem(STORAGE_KEYS.PROGRESS, JSON.stringify(progress));
  } catch {
    // Ignore
  }
}

export function loadUserStats(): UserStats {
  try {
    const data = localStorage.getItem(STORAGE_KEYS.STATS);
    return data ? { ...INITIAL_STATS, ...JSON.parse(data) } : INITIAL_STATS;
  } catch {
    return INITIAL_STATS;
  }
}

export function saveUserStats(stats: UserStats): void {
  try {
    localStorage.setItem(STORAGE_KEYS.STATS, JSON.stringify(stats));
  } catch {
    // Ignore
  }
}

export function loadAchievements(): Achievement[] {
  try {
    const data = localStorage.getItem(STORAGE_KEYS.ACHIEVEMENTS);
    if (!data) return ACHIEVEMENTS_LIST;
    const saved: Achievement[] = JSON.parse(data);
    // Merge in case we added new achievements
    return ACHIEVEMENTS_LIST.map(base => {
      const existing = saved.find(s => s.id === base.id);
      return existing ? { ...base, unlockedAt: existing.unlockedAt } : base;
    });
  } catch {
    return ACHIEVEMENTS_LIST;
  }
}

export function saveAchievements(achievements: Achievement[]): void {
  try {
    localStorage.setItem(STORAGE_KEYS.ACHIEVEMENTS, JSON.stringify(achievements));
  } catch {
    // Ignore
  }
}

export function loadSoundSetting(): boolean {
  try {
    const data = localStorage.getItem(STORAGE_KEYS.SOUND);
    return data !== null ? JSON.parse(data) : true;
  } catch {
    return true;
  }
}

export function saveSoundSetting(enabled: boolean): void {
  try {
    localStorage.setItem(STORAGE_KEYS.SOUND, JSON.stringify(enabled));
  } catch {
    // Ignore
  }
}

export function clearAllStudentData(): void {
  try {
    localStorage.removeItem(STORAGE_KEYS.STUDENT);
    localStorage.removeItem(STORAGE_KEYS.PROGRESS);
    localStorage.removeItem(STORAGE_KEYS.STATS);
    localStorage.removeItem(STORAGE_KEYS.ACHIEVEMENTS);
  } catch {
    // Ignore
  }
}
