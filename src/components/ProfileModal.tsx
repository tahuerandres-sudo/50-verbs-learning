import React, { useState } from 'react';
import { StudentProfile, UserStats } from '../types';
import { User, X, Check, RotateCcw, AlertTriangle, BookOpen, Clock, Flame, Zap } from 'lucide-react';
import { soundManager } from '../utils/audio';

interface ProfileModalProps {
  student: StudentProfile;
  stats: UserStats;
  onUpdateProfile: (profile: StudentProfile) => void;
  onResetAllData: () => void;
  onClose: () => void;
}

export const ProfileModal: React.FC<ProfileModalProps> = ({
  student,
  stats,
  onUpdateProfile,
  onResetAllData,
  onClose
}) => {
  const [name, setName] = useState(student.name);
  const [trainingProgram, setTrainingProgram] = useState(student.trainingProgram);
  const [showResetConfirm, setShowResetConfirm] = useState(false);
  const [savedSuccess, setSavedSuccess] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !trainingProgram.trim()) return;

    soundManager.playClick();
    onUpdateProfile({
      ...student,
      name: name.trim(),
      trainingProgram: trainingProgram.trim()
    });
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 2000);
  };

  const handleConfirmReset = () => {
    soundManager.playClick();
    onResetAllData();
    setShowResetConfirm(false);
    onClose();
  };

  const accuracy = stats.totalQuestionsAnswered > 0
    ? Math.round((stats.totalCorrectAnswers / stats.totalQuestionsAnswered) * 100)
    : 0;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-xs overflow-y-auto">
      <div className="bg-white w-full max-w-xl rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-8 animate-scaleIn">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-200 bg-slate-50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
              <User className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-900">Perfil del Estudiante</h2>
              <p className="text-xs text-slate-500">Administra tus datos y estadísticas de estudio</p>
            </div>
          </div>

          <button
            id="btn-close-profile"
            onClick={() => {
              soundManager.playClick();
              onClose();
            }}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-200 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
          
          {/* Edit Form */}
          <form onSubmit={handleSave} className="space-y-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                Nombre Completo
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                Programa de Formación
              </label>
              <input
                type="text"
                required
                value={trainingProgram}
                onChange={(e) => setTrainingProgram(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <div className="flex items-center justify-between pt-2">
              <span className="text-xs text-slate-400">Fecha de inicio: {student.startDate}</span>
              
              <button
                type="submit"
                className="px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                {savedSuccess ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>¡Guardado!</span>
                  </>
                ) : (
                  <span>Guardar Cambios</span>
                )}
              </button>
            </div>
          </form>

          {/* Performance Statistics */}
          <div className="pt-4 border-t border-slate-200 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Estadísticas Globales de Aprendizaje
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-center">
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                <p className="text-xl font-bold text-slate-900">{stats.masteredVerbsCount}/50</p>
                <p className="text-[11px] text-slate-500">Verbos Dominados</p>
              </div>

              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                <p className="text-xl font-bold text-slate-900">{stats.totalQuestionsAnswered}</p>
                <p className="text-[11px] text-slate-500">Preguntas Respondidas</p>
              </div>

              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                <p className="text-xl font-bold text-emerald-600">{accuracy}%</p>
                <p className="text-[11px] text-slate-500">Tasa de Acierto</p>
              </div>

              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                <p className="text-xl font-bold text-amber-600">{stats.bestStreak}</p>
                <p className="text-[11px] text-slate-500">Mejor Racha</p>
              </div>

              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                <p className="text-xl font-bold text-blue-600">{stats.sentenceBuilderCorrectCount}</p>
                <p className="text-[11px] text-slate-500">Frases Construidas</p>
              </div>

              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                <p className="text-xl font-bold text-purple-600">{stats.swiftAnswersCount}</p>
                <p className="text-[11px] text-slate-500">Respuestas Rápidas</p>
              </div>
            </div>
          </div>

          {/* Danger Zone: Reset Progress */}
          <div className="pt-4 border-t border-slate-200">
            {!showResetConfirm ? (
              <button
                id="btn-trigger-reset-confirm"
                onClick={() => setShowResetConfirm(true)}
                className="w-full py-2.5 px-4 rounded-xl border border-rose-200 text-rose-600 hover:bg-rose-50 text-xs font-bold flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reiniciar Progreso de Aprendizaje</span>
              </button>
            ) : (
              <div className="p-4 rounded-2xl bg-rose-50 border border-rose-300 space-y-3 animate-fadeIn">
                <div className="flex items-start gap-2.5 text-rose-800">
                  <AlertTriangle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold">¿Estás seguro de reiniciar tu progreso?</h4>
                    <p className="text-[11px] text-rose-700 mt-0.5">
                      Esta acción restablecerá a cero los 50 verbos, puntuaciones y rachas.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 pt-1">
                  <button
                    id="btn-confirm-reset"
                    onClick={handleConfirmReset}
                    className="flex-1 py-2 px-3 bg-rose-600 hover:bg-rose-700 text-white rounded-lg text-xs font-bold transition-colors cursor-pointer"
                  >
                    Sí, Reiniciar Todo
                  </button>
                  <button
                    onClick={() => setShowResetConfirm(false)}
                    className="flex-1 py-2 px-3 bg-slate-200 hover:bg-slate-300 text-slate-800 rounded-lg text-xs font-bold transition-colors cursor-pointer"
                  >
                    Cancelar
                  </button>
                </div>
              </div>
            )}
          </div>

        </div>

      </div>
    </div>
  );
};
