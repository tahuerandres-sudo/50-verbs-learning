import React, { useState } from 'react';
import { StudentProfile, UserStats, UserProgress, VerbDefinition } from '../types';
import { 
  Award, 
  CheckCircle2, 
  XCircle, 
  Printer, 
  X, 
  ShieldCheck, 
  Sparkles, 
  Clock, 
  Search, 
  Filter, 
  BookOpen, 
  CheckCircle,
  AlertCircle,
  FileText,
  ListFilter
} from 'lucide-react';
import { soundManager } from '../utils/audio';
import { ALL_VERBS } from '../data/verbs';

interface CertificateModalProps {
  student: StudentProfile;
  stats: UserStats;
  progress?: UserProgress;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({
  student,
  stats,
  progress = {},
  onClose
}) => {
  const [filterView, setFilterView] = useState<'all' | 'approved' | 'not-approved'>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [includeTranscriptInPrint, setIncludeTranscriptInPrint] = useState(true);

  const totalVerbsCount = ALL_VERBS.length; // 50
  
  // Categorize verbs into approved (mastered 10/10) vs not approved (pending)
  const approvedVerbs = ALL_VERBS.filter(v => !!progress[v.id]?.mastered);
  const notApprovedVerbs = ALL_VERBS.filter(v => !progress[v.id]?.mastered);
  const approvedCount = approvedVerbs.length;
  const notApprovedCount = notApprovedVerbs.length;
  const isComplete = approvedCount === totalVerbsCount;
  const masteryPercentage = Math.round((approvedCount / totalVerbsCount) * 100);

  const certificateId = `EVC-${new Date().getFullYear()}-${Math.abs(
    student.name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) * 137
  ).toString().padStart(6, '0')}`;

  const currentDateFormatted = new Date().toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const handlePrint = () => {
    soundManager.playClick();
    window.print();
  };

  // Filter verbs based on search & tab selection
  const filteredVerbs = ALL_VERBS.filter(verb => {
    const isApproved = !!progress[verb.id]?.mastered;
    
    if (filterView === 'approved' && !isApproved) return false;
    if (filterView === 'not-approved' && isApproved) return false;
    
    if (searchTerm.trim()) {
      const q = searchTerm.toLowerCase().trim();
      const matchName = verb.verb.toLowerCase().includes(q);
      const matchSpanish = verb.spanish.toLowerCase().includes(q);
      const matchId = verb.id.toString() === q;
      return matchName || matchSpanish || matchId;
    }
    return true;
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/80 backdrop-blur-xs overflow-y-auto print:p-0 print:bg-white print:static">
      
      {/* Modal Container */}
      <div className="bg-white w-full max-w-5xl rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-4 sm:my-8 animate-scaleIn print:my-0 print:border-none print:shadow-none print:w-full print:max-w-none">
        
        {/* Modal Top Control Header (Hidden on print) */}
        <div className="print:hidden flex flex-wrap items-center justify-between px-4 sm:px-6 py-3.5 border-b border-slate-200 bg-slate-50 gap-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-amber-500 text-white flex items-center justify-center shadow-xs">
              <Award className="w-4 h-4" />
            </div>
            <div>
              <span className="font-black text-slate-900 text-sm sm:text-base tracking-tight uppercase block leading-none">
                Certificado Oficial de Competencia
              </span>
              <span className="text-[11px] text-slate-500 font-medium">
                English Verb Challenge &bull; Acreditación de 50 Verbos
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <label className="hidden md:flex items-center gap-2 text-xs font-semibold text-slate-700 mr-2 cursor-pointer select-none">
              <input 
                type="checkbox" 
                checked={includeTranscriptInPrint} 
                onChange={(e) => setIncludeTranscriptInPrint(e.target.checked)}
                className="w-4 h-4 rounded text-blue-600 focus:ring-blue-500 border-slate-300"
              />
              <span>Incluir Desglose en PDF</span>
            </label>

            <button
              id="btn-print-certificate"
              onClick={handlePrint}
              className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-black uppercase tracking-wider flex items-center gap-1.5 shadow-md shadow-blue-500/20 transition-all cursor-pointer active:scale-95"
            >
              <Printer className="w-4 h-4" />
              <span>Imprimir / Descargar PDF</span>
            </button>

            <button
              id="btn-close-certificate-modal"
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Informational Status Banner on screen */}
        {!isComplete && (
          <div className="print:hidden p-3.5 bg-amber-50 border-b border-amber-200 text-amber-900 text-xs font-medium px-4 sm:px-6 flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-600 shrink-0" />
              <span>
                <strong>Estado actual:</strong> Has aprobado <strong className="text-emerald-700 font-bold">{approvedCount} de 50 verbos</strong> ({masteryPercentage}%). Tienes <strong className="text-amber-800 font-bold">{notApprovedCount} pendientes</strong>.
              </span>
            </div>
            <span className="hidden sm:inline-block px-2.5 py-0.5 rounded-full bg-amber-200 text-amber-900 text-[10px] font-black uppercase">
              En Progreso
            </span>
          </div>
        )}

        {/* SCROLLABLE DOCUMENT BODY */}
        <div className="p-4 sm:p-8 md:p-10 space-y-8 bg-slate-50/50 print:p-0 print:space-y-6 print:bg-white">
          
          {/* ========================================================================= */}
          {/* 1. OFFICIAL DIPLOMA CANVAS                                                */}
          {/* ========================================================================= */}
          <div className="p-4 sm:p-8 md:p-12 bg-white rounded-3xl border border-slate-200 shadow-sm print:rounded-none print:border-8 print:border-double print:border-amber-600 print:shadow-none print:p-8">
            
            <div className="border-4 sm:border-8 border-double border-amber-600/80 rounded-2xl p-5 sm:p-10 text-center relative bg-white shadow-inner print:border-none print:p-0">
              
              {/* Corner Decorative Ornaments */}
              <div className="absolute top-3 left-3 w-8 h-8 border-t-2 border-l-2 border-amber-600"></div>
              <div className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-amber-600"></div>
              <div className="absolute bottom-3 left-3 w-8 h-8 border-b-2 border-l-2 border-amber-600"></div>
              <div className="absolute bottom-3 right-3 w-8 h-8 border-b-2 border-r-2 border-amber-600"></div>

              {/* Top Seal & Header */}
              <div className="space-y-2">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-tr from-amber-500 to-yellow-400 text-white mx-auto flex items-center justify-center shadow-md shadow-amber-500/20">
                  <Award className="w-7 h-7 sm:w-8 sm:h-8" />
                </div>

                <p className="text-[10px] sm:text-xs font-black tracking-[0.25em] text-amber-800 uppercase">
                  Certificate of Academic Proficiency & Verb Mastery
                </p>
                
                <h1 className="text-2xl sm:text-4xl font-serif font-black text-slate-900 tracking-tight uppercase">
                  English Verb Challenge
                </h1>

                <p className="text-xs text-slate-500 italic">
                  ICFES Saber 11 & IELTS Language Competence Standard
                </p>
              </div>

              {/* Recipient Notice */}
              <div className="my-6 sm:my-8 space-y-2">
                <p className="text-[11px] sm:text-xs text-slate-500 uppercase tracking-widest font-black">
                  This certificate is awarded to:
                </p>

                <h2 className="text-2xl sm:text-4xl font-extrabold text-blue-900 tracking-tight underline decoration-amber-400 decoration-2 underline-offset-8">
                  {student.name}
                </h2>

                <p className="text-xs sm:text-sm text-slate-600 font-medium pt-2">
                  Training Program: <strong className="text-slate-900">{student.trainingProgram}</strong>
                </p>
              </div>

              {/* Achievement description */}
              <div className="max-w-2xl mx-auto text-xs sm:text-sm text-slate-700 leading-relaxed space-y-2">
                <p>
                  For completing academic evaluation across the <strong className="text-slate-900 font-black">50 Essential English Verbs</strong> curriculum, demonstrating linguistic competence in verbal conjugations, multiple-choice grammar questions, and structural sentence translation.
                </p>
              </div>

              {/* COMPREHENSIVE VERBS APPROVAL SUMMARY BOX */}
              <div className="max-w-xl mx-auto my-6 p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200/90 text-slate-800 shadow-xs print:bg-slate-50 print:border-slate-300">
                <p className="text-[10px] font-black uppercase tracking-wider text-slate-400 mb-2">
                  Resumen Oficial de Verbos Evaluados / Academic Evaluation Summary
                </p>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-left">
                  {/* Approved Verbs Metric */}
                  <div className="p-2.5 rounded-xl bg-white border border-emerald-200">
                    <span className="text-[10px] font-black uppercase text-emerald-700 flex items-center gap-1">
                      <CheckCircle className="w-3 h-3 text-emerald-600" /> Aprobados
                    </span>
                    <p className="text-lg sm:text-xl font-black text-emerald-700 mt-0.5">
                      {approvedCount} <span className="text-xs font-normal text-slate-500">/ 50</span>
                    </p>
                  </div>

                  {/* Non-Approved Verbs Metric */}
                  <div className="p-2.5 rounded-xl bg-white border border-rose-200">
                    <span className="text-[10px] font-black uppercase text-rose-700 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3 text-rose-600" /> No Aprobados
                    </span>
                    <p className="text-lg sm:text-xl font-black text-rose-700 mt-0.5">
                      {notApprovedCount} <span className="text-xs font-normal text-slate-500">/ 50</span>
                    </p>
                  </div>

                  {/* Total Mastery Percentage */}
                  <div className="p-2.5 rounded-xl bg-white border border-blue-200 col-span-2 sm:col-span-1">
                    <span className="text-[10px] font-black uppercase text-blue-700 flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-blue-600" /> Calificación
                    </span>
                    <p className="text-lg sm:text-xl font-black text-blue-700 mt-0.5">
                      {masteryPercentage}% <span className="text-xs font-normal text-slate-500">Total</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Signatures & Verification Seal */}
              <div className="mt-8 pt-6 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-3 gap-6 items-end text-left sm:text-center text-xs">
                
                {/* Left: Issue & Start Date */}
                <div className="space-y-1">
                  <p className="text-slate-400 uppercase text-[10px] tracking-wider font-black">Fecha de Emisión</p>
                  <p className="font-black text-slate-800">{currentDateFormatted}</p>
                  <p className="text-[10px] text-slate-400 font-medium">Iniciado: {student.startDate}</p>
                </div>

                {/* Center: Official Verified Seal */}
                <div className="flex flex-col items-center justify-center">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 border-dashed border-amber-600/60 p-1 flex items-center justify-center text-amber-700">
                    <div className="w-full h-full rounded-full bg-amber-50 flex flex-col items-center justify-center text-[7px] font-black uppercase tracking-tighter">
                      <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-amber-600" />
                      <span>{isComplete ? 'ACCREDITED' : 'AUDITED'}</span>
                    </div>
                  </div>
                  <span className="text-[9px] text-slate-400 mt-1 font-mono">{certificateId}</span>
                </div>

                {/* Right: Academic Board Signature */}
                <div className="space-y-1 sm:text-right">
                  <div className="font-serif italic text-sm sm:text-base font-bold text-slate-800 border-b border-slate-300 pb-1">
                    Academic Evaluation Board
                  </div>
                  <p className="text-slate-600 font-bold text-[11px]">English Verb Challenge</p>
                  <p className="text-[10px] text-slate-400">ICFES & IELTS Department</p>
                </div>

              </div>

            </div>

          </div>

          {/* ========================================================================= */}
          {/* 2. OFFICIAL ACADEMIC TRANSCRIPT: APPROVED & NON-APPROVED VERBS BREAKDOWN   */}
          {/* ========================================================================= */}
          <div className={`${includeTranscriptInPrint ? '' : 'print:hidden'} bg-white rounded-3xl p-5 sm:p-8 border border-slate-200 shadow-sm print:shadow-none print:border print:border-slate-300 print:rounded-xl print-avoid-break`}>
            
            {/* Transcript Section Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-5 border-b border-slate-200">
              <div>
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-blue-600" />
                  <h3 className="font-black text-slate-900 text-base sm:text-lg uppercase tracking-tight">
                    Anexo Académico: Desglose de Verbos Aprobados y No Aprobados
                  </h3>
                </div>
                <p className="text-xs text-slate-500 font-medium mt-0.5">
                  Academic Record of 50 Essential English Verbs &bull; Dominio por Regla 10/10
                </p>
              </div>

              {/* On-Screen Search and Filter Tabs (Hidden on Print) */}
              <div className="print:hidden flex flex-wrap items-center gap-2">
                <div className="relative">
                  <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Filtrar verbo..."
                    className="pl-8 pr-3 py-1.5 rounded-xl border border-slate-200 text-xs bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 w-36 sm:w-44 font-medium"
                  />
                  {searchTerm && (
                    <button onClick={() => setSearchTerm('')} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-slate-400 font-bold">
                      &times;
                    </button>
                  )}
                </div>

                <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl text-xs font-black">
                  <button
                    onClick={() => setFilterView('all')}
                    className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
                      filterView === 'all' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    Todos (50)
                  </button>
                  <button
                    onClick={() => setFilterView('approved')}
                    className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
                      filterView === 'approved' ? 'bg-emerald-600 text-white shadow-xs' : 'text-emerald-700 hover:text-emerald-900'
                    }`}
                  >
                    Aprobados ({approvedCount})
                  </button>
                  <button
                    onClick={() => setFilterView('not-approved')}
                    className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
                      filterView === 'not-approved' ? 'bg-rose-600 text-white shadow-xs' : 'text-rose-700 hover:text-rose-900'
                    }`}
                  >
                    No Aprobados ({notApprovedCount})
                  </button>
                </div>
              </div>
            </div>

            {/* HIGH-DENSITY PRINTABLE & SCREEN GRID OF ALL 50 VERBS */}
            <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-3">
              {filteredVerbs.map(verb => {
                const verbProg = progress[verb.id];
                const isMastered = !!verbProg?.mastered;
                const attempts = verbProg?.attempts || 0;
                const bestScore = verbProg?.bestScore || 0;

                return (
                  <div
                    key={verb.id}
                    className={`p-3 rounded-2xl border transition-all flex items-center justify-between gap-3 text-xs ${
                      isMastered
                        ? 'bg-emerald-50/60 border-emerald-200/90'
                        : 'bg-slate-50/70 border-slate-200'
                    }`}
                  >
                    {/* Verb Details */}
                    <div className="min-w-0">
                      <div className="flex items-center gap-1.5">
                        <span className="text-[10px] font-black text-slate-400 font-mono">
                          #{verb.id < 10 ? `0${verb.id}` : verb.id}
                        </span>
                        <span className="font-black text-slate-900 uppercase tracking-tight text-sm truncate">
                          {verb.verb}
                        </span>
                        <span className="text-[9px] font-bold text-slate-400 uppercase">
                          ({verb.type.slice(0, 3)})
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-500 truncate font-medium mt-0.5">
                        {verb.spanish}
                      </p>
                    </div>

                    {/* Status Badge */}
                    <div className="shrink-0 text-right">
                      {isMastered ? (
                        <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-lg bg-emerald-100 text-emerald-800 font-black text-[10px] uppercase border border-emerald-200">
                          <CheckCircle className="w-3 h-3 text-emerald-600 shrink-0" />
                          <span>APROBADO</span>
                        </div>
                      ) : (
                        <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-lg bg-rose-50 text-rose-700 font-bold text-[10px] uppercase border border-rose-200">
                          <AlertCircle className="w-3 h-3 text-rose-500 shrink-0" />
                          <span>NO APROBADO</span>
                        </div>
                      )}
                      <p className="text-[9px] text-slate-400 font-mono mt-0.5">
                        {isMastered ? 'Nota: 10/10' : attempts > 0 ? `Mejor: ${bestScore}/10` : 'Sin intentos'}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Empty state inside filter */}
            {filteredVerbs.length === 0 && (
              <div className="text-center py-8 text-slate-400 text-xs">
                No se encontraron verbos con el filtro seleccionado.
              </div>
            )}

            {/* Transcript Footer Note */}
            <div className="mt-6 pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between text-[10px] text-slate-400 gap-2">
              <span>Acreditación válida bajo la evaluación continua de 10 retos sin error (10/10).</span>
              <span>English Verb Challenge &bull; Documento Oficial</span>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

