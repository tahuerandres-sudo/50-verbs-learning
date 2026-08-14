import React from 'react';
import { Achievement } from '../types';
import { Award, Flame, Zap, Sparkles, Trophy, CheckCircle2, Timer, TrendingUp, X, Lock } from 'lucide-react';
import { soundManager } from '../utils/audio';

interface AchievementsModalProps {
  achievements: Achievement[];
  onClose: () => void;
}

const ICON_MAP: Record<string, React.ReactNode> = {
  Award: <Award className="w-6 h-6" />,
  Flame: <Flame className="w-6 h-6" />,
  Zap: <Zap className="w-6 h-6" />,
  Sparkles: <Sparkles className="w-6 h-6" />,
  Trophy: <Trophy className="w-6 h-6" />,
  TrendingUp: <TrendingUp className="w-6 h-6" />,
  CheckCircle2: <CheckCircle2 className="w-6 h-6" />,
  Timer: <Timer className="w-6 h-6" />
};

export const AchievementsModal: React.FC<AchievementsModalProps> = ({
  achievements,
  onClose
}) => {
  const unlockedCount = achievements.filter(a => a.unlockedAt !== null).length;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-xs overflow-y-auto">
      <div className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-8 animate-scaleIn">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-200 bg-slate-50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-900">Logros y Medallas</h2>
              <p className="text-xs text-slate-500">
                Has desbloqueado {unlockedCount} de {achievements.length} insignias
              </p>
            </div>
          </div>

          <button
            id="btn-close-achievements"
            onClick={() => {
              soundManager.playClick();
              onClose();
            }}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-200 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* List of achievements */}
        <div className="p-6 max-h-[70vh] overflow-y-auto space-y-3">
          {achievements.map(ach => {
            const isUnlocked = ach.unlockedAt !== null;

            return (
              <div
                key={ach.id}
                id={`achievement-${ach.id}`}
                className={`p-4 rounded-2xl border transition-all flex items-start gap-4 ${
                  isUnlocked
                    ? 'bg-purple-50/50 border-purple-200'
                    : 'bg-slate-50 border-slate-200 opacity-60'
                }`}
              >
                {/* Badge Icon */}
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 shadow-xs ${
                  isUnlocked
                    ? 'bg-gradient-to-tr from-purple-600 to-indigo-600 text-white shadow-purple-500/20'
                    : 'bg-slate-200 text-slate-400'
                }`}>
                  {isUnlocked ? (
                    ICON_MAP[ach.icon] || <Award className="w-6 h-6" />
                  ) : (
                    <Lock className="w-5 h-5" />
                  )}
                </div>

                {/* Badge Details */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-sm font-bold text-slate-900">
                      {ach.titleEs} <span className="text-xs font-normal text-slate-400">({ach.title})</span>
                    </h3>

                    {isUnlocked && (
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800">
                        ¡Desbloqueado!
                      </span>
                    )}
                  </div>

                  <p className="text-xs text-slate-600 mt-1">
                    {ach.descriptionEs}
                  </p>

                  {isUnlocked && ach.unlockedAt && (
                    <p className="text-[10px] text-purple-700 font-medium mt-1.5">
                      Obtenido el {new Date(ach.unlockedAt).toLocaleDateString()}
                    </p>
                  )}
                </div>

              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 text-center">
          <button
            onClick={() => {
              soundManager.playClick();
              onClose();
            }}
            className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-colors cursor-pointer"
          >
            Cerrar Ventana
          </button>
        </div>

      </div>
    </div>
  );
};
