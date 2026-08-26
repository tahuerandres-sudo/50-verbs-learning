import React from 'react';
import { StudentProfile, UserStats } from '../types';
import { Award, Flame, Volume2, VolumeX, BookOpen, Trophy, Sparkles } from 'lucide-react';
import { soundManager } from '../utils/audio';

interface NavbarProps {
  student: StudentProfile | null;
  stats: UserStats;
  soundEnabled: boolean;
  onToggleSound: () => void;
  onOpenProfile: () => void;
  onOpenAchievements: () => void;
  onOpenCertificate: () => void;
  onResetProgress: () => void;
  onGoHome: () => void;
  currentView: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  student,
  stats,
  soundEnabled,
  onToggleSound,
  onOpenProfile,
  onOpenAchievements,
  onOpenCertificate,
  onGoHome,
  currentView
}) => {
  const percentage = Math.round((stats.masteredVerbsCount / 50) * 100);
  const initials = student?.name
    ? student.name
        .split(' ')
        .filter(Boolean)
        .slice(0, 2)
        .map(n => n[0].toUpperCase())
        .join('')
    : 'EV';

  return (
    <header id="main-header" className="sticky top-0 z-40 bg-slate-50/90 backdrop-blur-md pt-3 pb-2 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white border border-slate-200 p-2 sm:p-2.5 rounded-2xl flex items-center justify-between shadow-xs">
          
          {/* Brand & Logo Bento Capsule */}
          <div 
            id="brand-logo-container"
            onClick={onGoHome}
            className="flex items-center gap-3 cursor-pointer group select-none pl-2"
          >
            <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold shadow-md shadow-blue-200 group-hover:scale-105 transition-transform duration-200">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-black text-slate-900 text-sm sm:text-base tracking-tight leading-none group-hover:text-blue-600 transition-colors uppercase">
                  English Verb Challenge
                </span>
                <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-black uppercase tracking-wider bg-blue-50 text-blue-600 border border-blue-100">
                  50 Verbs
                </span>
              </div>
              <p className="text-[11px] text-slate-400 font-medium hidden md:block">
                Master 50 Essential English Verbs &bull; ICFES & IELTS
              </p>
            </div>
          </div>

          {/* Right Navigation & Status Controls */}
          {student ? (
            <div className="flex items-center gap-1.5 sm:gap-2">
              
              {/* Streak Counter Bento Tag */}
              <div 
                id="streak-indicator"
                title={`Racha actual: ${stats.currentStreak} verbos seguidos`}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-50 border border-amber-200/80 text-amber-800 text-xs font-black"
              >
                <Flame className={`w-3.5 h-3.5 text-amber-500 ${stats.currentStreak > 0 ? 'animate-bounce' : ''}`} />
                <span>{stats.currentStreak}</span>
                <span className="hidden lg:inline text-amber-700/80 font-bold uppercase text-[10px] tracking-wider">racha</span>
              </div>

              {/* Mastered Progress Capsule */}
              <div 
                id="header-progress-indicator"
                onClick={onGoHome}
                title={`${stats.masteredVerbsCount} de 50 verbos dominados (${percentage}%)`}
                className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-black cursor-pointer transition-colors"
              >
                <div className="w-14 h-2 bg-slate-200 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-blue-600 rounded-full transition-all duration-500" 
                    style={{ width: `${percentage}%` }}
                  />
                </div>
                <span>{stats.masteredVerbsCount}/50</span>
              </div>

              {/* Certificate Quick Button */}
              <button
                id="btn-certificate-header"
                onClick={() => {
                  soundManager.playClick();
                  onOpenCertificate();
                }}
                title="Descargar Certificado Académico con desglose de verbos"
                className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                  stats.masteredVerbsCount === 50 
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-200 hover:bg-indigo-700'
                    : 'bg-slate-50 text-slate-700 border border-slate-200 hover:bg-slate-100 hover:border-slate-300'
                }`}
              >
                <Trophy className="w-3.5 h-3.5 text-amber-500" />
                <span className="hidden sm:inline">
                  {stats.masteredVerbsCount === 50 ? 'Certificado 100%' : 'Certificado'}
                </span>
                <span className="text-[10px] font-black px-1.5 py-0.2 rounded-md bg-slate-200/80 text-slate-700">
                  {stats.masteredVerbsCount}/50
                </span>
              </button>

              {/* Achievements Modal Trigger */}
              <button
                id="btn-achievements-header"
                onClick={() => {
                  soundManager.playClick();
                  onOpenAchievements();
                }}
                title="Ver Medallas y Logros"
                className="p-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
              >
                <Award className="w-4 h-4 text-purple-600" />
              </button>

              {/* Sound Toggle */}
              <button
                id="btn-sound-toggle"
                onClick={onToggleSound}
                title={soundEnabled ? 'Desactivar Sonido' : 'Activar Sonido'}
                className="p-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer"
              >
                {soundEnabled ? <Volume2 className="w-4 h-4 text-blue-600" /> : <VolumeX className="w-4 h-4 text-slate-400" />}
              </button>

              {/* Bento Student Profile Tile */}
              <button
                id="btn-profile-header"
                onClick={() => {
                  soundManager.playClick();
                  onOpenProfile();
                }}
                title="Perfil del Estudiante"
                className="flex items-center gap-2 pl-2 pr-3 py-1 rounded-xl bg-slate-900 text-white text-xs font-bold hover:bg-slate-800 transition-colors shadow-xs cursor-pointer"
              >
                <div className="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center text-white text-xs font-black uppercase shadow-xs">
                  {initials}
                </div>
                <div className="text-left hidden sm:block">
                  <p className="max-w-[100px] truncate leading-none text-white text-xs font-bold">{student.name.split(' ')[0]}</p>
                  <p className="text-[9px] text-slate-400 leading-none mt-0.5">Perfil</p>
                </div>
              </button>

            </div>
          ) : (
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-slate-500">Bienvenido al Reto</span>
            </div>
          )}

        </div>
      </div>
    </header>
  );
};

