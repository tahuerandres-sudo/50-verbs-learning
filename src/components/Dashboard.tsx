import React, { useState, useMemo } from 'react';
import { StudentProfile, UserProgress, VerbProgress, UserStats, VerbDefinition } from '../types';
import { ALL_VERBS } from '../data/verbs';
import { 
  CheckCircle2, 
  Flame, 
  Search, 
  Sparkles, 
  Award, 
  BookOpen, 
  Play, 
  Filter, 
  Zap, 
  Clock, 
  CheckCircle,
  Trophy,
  ArrowRight,
  TrendingUp,
  ShieldCheck
} from 'lucide-react';
import { soundManager } from '../utils/audio';

interface DashboardProps {
  student: StudentProfile;
  progress: UserProgress;
  stats: UserStats;
  onSelectVerb: (verb: VerbDefinition) => void;
  onOpenCertificate: () => void;
  onOpenAchievements: () => void;
}

export const Dashboard: React.FC<DashboardProps> = ({
  student,
  progress,
  stats,
  onSelectVerb,
  onOpenCertificate,
  onOpenAchievements
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState<'all' | 'regular' | 'irregular' | 'mastered' | 'pending'>('all');

  const masteredCount = useMemo(() => {
    return Object.values(progress).filter((p: VerbProgress) => p?.mastered).length;
  }, [progress]);

  const percentage = Math.round((masteredCount / 50) * 100);

  // Filter and search logic
  const filteredVerbs = useMemo(() => {
    return ALL_VERBS.filter(verb => {
      const verbProg = progress[verb.id];
      const isMastered = !!verbProg?.mastered;

      // Filter by category
      if (activeFilter === 'regular' && verb.type !== 'regular') return false;
      if (activeFilter === 'irregular' && verb.type !== 'irregular') return false;
      if (activeFilter === 'mastered' && !isMastered) return false;
      if (activeFilter === 'pending' && isMastered) return false;

      // Filter by search query (English, Spanish, or number)
      if (searchTerm.trim()) {
        const query = searchTerm.toLowerCase().trim();
        const matchesName = verb.verb.toLowerCase().includes(query);
        const matchesSpanish = verb.spanish.toLowerCase().includes(query);
        const matchesId = verb.id.toString() === query;
        return matchesName || matchesSpanish || matchesId;
      }

      return true;
    });
  }, [searchTerm, activeFilter, progress]);

  // Find the next recommended verb to practice
  const nextRecommendedVerb = useMemo(() => {
    return ALL_VERBS.find(v => !progress[v.id]?.mastered) || ALL_VERBS[0];
  }, [progress]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
      
      {/* ========================================================================= */}
      {/* BENTO GRID HEADER & METRICS ROW                                           */}
      {/* ========================================================================= */}
      <section id="bento-overview-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        
        {/* Bento Card 1: Overall Progress */}
        <div className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-200 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow">
          <div>
            <div className="flex justify-between items-start">
              <span className="p-2.5 bg-blue-50 text-blue-600 rounded-2xl">
                <TrendingUp className="w-5 h-5" />
              </span>
              <span className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                {percentage}%
              </span>
            </div>
            <p className="mt-4 font-black text-slate-800 text-base sm:text-lg tracking-tight uppercase">
              Progreso Global
            </p>
            <p className="text-slate-500 text-xs sm:text-sm font-medium">
              {masteredCount} de 50 Verbos Dominados
            </p>
          </div>

          <div className="mt-4 pt-2">
            <div className="w-full bg-slate-100 h-3 rounded-full overflow-hidden p-0.5 border border-slate-200/60">
              <div 
                className="bg-blue-600 h-full rounded-full transition-all duration-700 shadow-xs"
                style={{ width: `${percentage}%` }}
              />
            </div>
          </div>
        </div>

        {/* Bento Card 2: Current Score & Streak */}
        <div className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-200 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow">
          <div className="flex justify-between items-start">
            <span className="p-2.5 bg-amber-50 text-amber-600 rounded-2xl">
              <Flame className="w-5 h-5" />
            </span>
            <div className="text-right">
              <span className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                {stats.totalCorrectAnswers}
              </span>
              <p className="text-[10px] font-black uppercase tracking-wider text-slate-400">Aciertos</p>
            </div>
          </div>

          <div className="mt-4">
            <p className="font-black text-slate-800 text-base sm:text-lg uppercase tracking-tight">
              Racha de Estudio
            </p>
            <div className="flex items-center justify-between text-xs sm:text-sm text-slate-500 font-medium mt-1">
              <span>Actual: <strong className="text-amber-600 font-black">{stats.currentStreak}</strong> verbos</span>
              <span>Mejor: <strong className="text-slate-700 font-bold">{stats.bestStreak}</strong></span>
            </div>
          </div>
        </div>

        {/* Bento Card 3: Next Action / Practice Card */}
        <div className="bg-slate-900 rounded-3xl p-5 sm:p-6 text-white flex flex-col justify-between shadow-lg shadow-slate-900/10 relative overflow-hidden">
          <div className="flex justify-between items-start">
            <span className="text-[10px] font-black uppercase tracking-widest bg-blue-600 text-white px-2.5 py-1 rounded-lg">
              {masteredCount === 50 ? 'Reto Completado' : 'Siguiente Reto'}
            </span>
            <span className="text-xs text-slate-400 font-mono">#0{nextRecommendedVerb.id}</span>
          </div>

          <div className="my-3">
            <h2 className="text-xl sm:text-2xl font-black tracking-tight text-white uppercase leading-tight">
              {nextRecommendedVerb.verb}
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 italic">
              {nextRecommendedVerb.spanish}
            </p>
          </div>

          <button
            id="btn-continue-next-verb"
            onClick={() => {
              soundManager.playClick();
              onSelectVerb(nextRecommendedVerb);
            }}
            className="w-full py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all active:scale-95 shadow-md shadow-blue-600/30 cursor-pointer"
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            <span>Practicar Verbo #{nextRecommendedVerb.id}</span>
          </button>
        </div>

        {/* Bento Card 4: Final Target & Certificate Card */}
        <div className="bg-indigo-600 rounded-3xl p-5 sm:p-6 text-white flex flex-col justify-between shadow-lg shadow-indigo-200 relative overflow-hidden">
          <div className="flex justify-between items-start">
            <ShieldCheck className="w-6 h-6 text-indigo-200" />
            <span className="text-[10px] font-black uppercase tracking-widest bg-white/20 text-white px-2.5 py-1 rounded-lg backdrop-blur-xs">
              Meta Oficial
            </span>
          </div>

          <div className="my-3">
            <h2 className="font-bold text-sm sm:text-base leading-tight text-white">
              Certificado Oficial ICFES & IELTS
            </h2>
            <p className="text-xs text-indigo-200 mt-1">
              {masteredCount === 50 
                ? '¡Acreditación completada y lista para descargar!'
                : 'Domina los 50 verbos para desbloquear tu diploma.'}
            </p>
          </div>

          <button
            id="btn-claim-certificate-bento"
            onClick={() => {
              soundManager.playClick();
              onOpenCertificate();
            }}
            className="w-full py-2.5 bg-white hover:bg-indigo-50 text-indigo-700 rounded-xl font-black text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
          >
            <Trophy className="w-3.5 h-3.5 text-amber-500" />
            <span>{masteredCount === 50 ? 'Ver Diploma Oficial' : 'Vista Previa Diploma'}</span>
          </button>
        </div>

      </section>

      {/* ========================================================================= */}
      {/* BENTO VERB LIBRARY SECTION                                                */}
      {/* ========================================================================= */}
      <section id="verbs-library-container" className="bg-white rounded-3xl border border-slate-200 shadow-xs overflow-hidden">
        
        {/* Bento Header & Filter Bar */}
        <div className="p-4 sm:p-5 border-b border-slate-200 bg-slate-50/80 flex flex-col md:flex-row md:items-center justify-between gap-4">
          
          <div>
            <h3 className="font-black text-slate-900 text-base sm:text-lg uppercase tracking-tight">
              Librería de 50 Verbos Esenciales
            </h3>
            <p className="text-xs text-slate-500">
              Selecciona cualquier verbo para comenzar la prueba de 10 retos (Regla 10/10)
            </p>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              id="search-verb-input"
              type="text"
              placeholder="Buscar verbo (make, ir, 14)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl border border-slate-200 bg-white text-slate-900 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-xs"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 font-bold"
              >
                &times;
              </button>
            )}
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 text-xs font-bold select-none">
            <button
              onClick={() => { soundManager.playClick(); setActiveFilter('all'); }}
              className={`px-3 py-1.5 rounded-xl transition-all cursor-pointer text-xs ${
                activeFilter === 'all' 
                  ? 'bg-slate-900 text-white shadow-xs' 
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              Todos (50)
            </button>

            <button
              onClick={() => { soundManager.playClick(); setActiveFilter('pending'); }}
              className={`px-3 py-1.5 rounded-xl transition-all cursor-pointer text-xs ${
                activeFilter === 'pending' 
                  ? 'bg-blue-600 text-white shadow-xs' 
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              Por Dominar ({50 - masteredCount})
            </button>

            <button
              onClick={() => { soundManager.playClick(); setActiveFilter('mastered'); }}
              className={`px-3 py-1.5 rounded-xl transition-all cursor-pointer text-xs ${
                activeFilter === 'mastered' 
                  ? 'bg-emerald-600 text-white shadow-xs' 
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              Dominados ({masteredCount})
            </button>

            <button
              onClick={() => { soundManager.playClick(); setActiveFilter('irregular'); }}
              className={`px-3 py-1.5 rounded-xl transition-all cursor-pointer text-xs ${
                activeFilter === 'irregular' 
                  ? 'bg-purple-600 text-white shadow-xs' 
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              Irregulares (24)
            </button>

            <button
              onClick={() => { soundManager.playClick(); setActiveFilter('regular'); }}
              className={`px-3 py-1.5 rounded-xl transition-all cursor-pointer text-xs ${
                activeFilter === 'regular' 
                  ? 'bg-indigo-600 text-white shadow-xs' 
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              Regulares (26)
            </button>
          </div>

        </div>

        {/* Bento Grid of 50 Verbs */}
        <div className="p-4 sm:p-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4">
          {filteredVerbs.map(verb => {
            const verbProg = progress[verb.id];
            const isMastered = !!verbProg?.mastered;
            const attempts = verbProg?.attempts || 0;
            const bestScore = verbProg?.bestScore || 0;

            return (
              <div
                key={verb.id}
                id={`verb-card-${verb.id}`}
                onClick={() => {
                  soundManager.playClick();
                  onSelectVerb(verb);
                }}
                className={`min-h-[140px] rounded-2xl p-4 flex flex-col justify-between cursor-pointer group transition-all duration-200 select-none ${
                  isMastered
                    ? 'bg-emerald-50/70 border border-emerald-200/90 hover:border-emerald-400 hover:shadow-md'
                    : 'bg-white border border-slate-200 hover:border-blue-500 hover:shadow-md'
                }`}
              >
                {/* Card Top: Number & Type */}
                <div className="flex items-center justify-between gap-1">
                  <span className={`text-[10px] font-black ${
                    isMastered ? 'text-emerald-600' : 'text-slate-400'
                  }`}>
                    {verb.id < 10 ? `0${verb.id}` : verb.id}
                  </span>

                  <span className={`px-1.5 py-0.5 rounded text-[9px] font-black uppercase tracking-wider ${
                    verb.type === 'irregular'
                      ? 'bg-purple-100 text-purple-700'
                      : 'bg-blue-100 text-blue-700'
                  }`}>
                    {verb.type.slice(0, 4)}
                  </span>
                </div>

                {/* Card Center: English Verb & Spanish Translation */}
                <div className="my-2">
                  <h4 className={`text-lg sm:text-xl font-black uppercase tracking-tight leading-none group-hover:text-blue-600 transition-colors ${
                    isMastered ? 'text-slate-900' : 'text-slate-900'
                  }`}>
                    {verb.verb}
                  </h4>
                  <p className="text-[11px] text-slate-500 line-clamp-1 mt-1 font-medium">
                    {verb.spanish}
                  </p>
                </div>

                {/* Card Bottom: Status Pill */}
                <div className="flex items-center justify-between pt-2 border-t border-slate-100/80">
                  {isMastered ? (
                    <div className="flex items-center justify-between w-full">
                      <span className="text-[10px] font-black text-emerald-600 uppercase tracking-tight flex items-center gap-0.5">
                        <CheckCircle className="w-3 h-3 text-emerald-600 inline" /> Aprobado
                      </span>
                      <span className="text-[10px] font-black text-emerald-700 font-mono">10/10</span>
                    </div>
                  ) : (
                    <div className="flex items-center justify-between w-full">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tight">
                        {attempts > 0 ? `Retos (${bestScore}/10)` : '○ Sin Iniciar'}
                      </span>
                      <Play className="w-3 h-3 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  )}
                </div>

              </div>
            );
          })}
        </div>

        {/* Empty State */}
        {filteredVerbs.length === 0 && (
          <div className="text-center py-12 p-8 space-y-3">
            <BookOpen className="w-10 h-10 text-slate-300 mx-auto" />
            <h4 className="text-sm font-bold text-slate-800">No se encontraron verbos</h4>
            <p className="text-xs text-slate-500 max-w-sm mx-auto">
              No hay verbos que coincidan con la búsqueda o filtro seleccionado.
            </p>
            <button
              onClick={() => { setSearchTerm(''); setActiveFilter('all'); }}
              className="px-4 py-2 bg-slate-900 text-white text-xs font-bold rounded-xl"
            >
              Ver Todos los Verbos
            </button>
          </div>
        )}

      </section>

    </div>
  );
};
