import React, { useState } from 'react';
import { StudentProfile } from '../types';
import { BookOpen, Sparkles, CheckCircle2, Clock, Flame, Award, ArrowRight } from 'lucide-react';
import { soundManager } from '../utils/audio';

interface WelcomeScreenProps {
  onStart: (profile: StudentProfile) => void;
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onStart }) => {
  const today = new Date().toISOString().split('T')[0];

  const [name, setName] = useState('');
  const [trainingProgram, setTrainingProgram] = useState('');
  const [startDate, setStartDate] = useState(today);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setError('Por favor ingresa tu nombre completo.');
      return;
    }
    if (!trainingProgram.trim()) {
      setError('Por favor indica tu programa de formación o curso.');
      return;
    }

    soundManager.playClick();
    onStart({
      name: name.trim(),
      trainingProgram: trainingProgram.trim(),
      startDate: startDate || today
    });
  };

  return (
    <div className="min-h-[calc(100vh-5rem)] flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-4xl bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
        
        <div className="grid grid-cols-1 lg:grid-cols-12">
          
          {/* Left Hero & Rules Bento Column */}
          <div className="lg:col-span-5 bg-slate-900 p-6 sm:p-8 text-white flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-slate-800">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xl bg-blue-600/30 border border-blue-500/40 text-[11px] font-black uppercase tracking-wider text-blue-200 mb-6">
                <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                <span>ICFES & IELTS Prep</span>
              </div>

              <h1 className="text-2xl sm:text-3xl font-black tracking-tight leading-tight mb-3 uppercase">
                English Verb Challenge
              </h1>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6 font-medium">
                Master 50 essential English verbs through interactive practice, sentence building, and gamified mastery.
              </p>

              {/* Challenge Rules Checklist */}
              <div className="space-y-3 text-xs text-slate-300 pt-4 border-t border-slate-800">
                <div className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5 font-black text-xs">
                    ✓
                  </div>
                  <div>
                    <span className="font-bold text-white">50 Verbos Desbloqueados:</span> Todos los verbos disponibles desde el inicio.
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 mt-0.5 font-black text-xs">
                    10
                  </div>
                  <div>
                    <span className="font-bold text-white">10 Retos por Verbo:</span> Incluye forma en pasado simple, participio pasado, gramática y construcción de frases.
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-lg bg-rose-500/20 text-rose-400 flex items-center justify-center shrink-0 mt-0.5 font-black text-xs">
                    ⏱
                  </div>
                  <div>
                    <span className="font-bold text-white">Temporizador de 30s:</span> Si te equivocas o se agota el tiempo, el verbo se reinicia.
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 mt-0.5 font-black text-xs">
                    🏆
                  </div>
                  <div>
                    <span className="font-bold text-white">Certificado Oficial:</span> Completa los 50 verbos para generar tu diploma.
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400 font-medium">
              <span>Guardado automático local</span>
              <span>Sin registros externos</span>
            </div>
          </div>

          {/* Right Registration Form Column */}
          <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-center bg-white">
            <div className="mb-6">
              <h2 className="text-xl font-black text-slate-900 tracking-tight uppercase">
                Registro del Estudiante
              </h2>
              <p className="text-slate-500 text-xs sm:text-sm mt-1">
                Ingresa tus datos para personalizar tu progreso y tu certificado final.
              </p>
            </div>

            {error && (
              <div className="mb-5 p-3.5 rounded-2xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-bold flex items-center gap-2 animate-shake">
                <span>⚠️</span>
                <span>{error}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Full Name Field */}
              <div>
                <label htmlFor="student-name" className="block text-[11px] font-black uppercase tracking-wider text-slate-700 mb-1.5">
                  Student Name / Nombre Completo <span className="text-rose-500">*</span>
                </label>
                <input
                  id="student-name"
                  type="text"
                  required
                  placeholder="Ej. María Fernanda Gómez"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    if (error) setError('');
                  }}
                  className="w-full px-4 py-3 rounded-2xl border border-slate-200 bg-slate-50 text-slate-900 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all placeholder:text-slate-400 font-medium"
                />
              </div>

              {/* Training Program Field */}
              <div>
                <label htmlFor="training-program" className="block text-[11px] font-black uppercase tracking-wider text-slate-700 mb-1.5">
                  Training Program / Programa de Formación <span className="text-rose-500">*</span>
                </label>
                <input
                  id="training-program"
                  type="text"
                  required
                  placeholder="Ej. Preparación Saber 11 / IELTS Academic / ADSO"
                  value={trainingProgram}
                  onChange={(e) => {
                    setTrainingProgram(e.target.value);
                    if (error) setError('');
                  }}
                  className="w-full px-4 py-3 rounded-2xl border border-slate-200 bg-slate-50 text-slate-900 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all placeholder:text-slate-400 font-medium"
                />
              </div>

              {/* Date Field */}
              <div>
                <label htmlFor="start-date" className="block text-[11px] font-black uppercase tracking-wider text-slate-700 mb-1.5">
                  Start Date / Fecha
                </label>
                <input
                  id="start-date"
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="w-full px-4 py-3 rounded-2xl border border-slate-200 bg-slate-50 text-slate-900 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all font-medium"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-3">
                <button
                  id="btn-start-challenge"
                  type="submit"
                  className="w-full py-4 px-6 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-black text-xs uppercase tracking-wider shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2 transition-all active:scale-[0.99] cursor-pointer"
                >
                  <span>Comenzar el Desafío</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </form>

          </div>

        </div>

      </div>
    </div>
  );
};
