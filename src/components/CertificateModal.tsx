import React, { useState, useRef } from 'react';
import { StudentProfile, UserStats, UserProgress } from '../types';
import { 
  Award, 
  Printer, 
  X, 
  ShieldCheck, 
  Sparkles, 
  Search, 
  CheckCircle,
  AlertCircle,
  FileText,
  Download,
  Image as ImageIcon,
  CheckCircle2,
  XCircle,
  Loader2,
  Calendar,
  Layers,
  GraduationCap
} from 'lucide-react';
import { soundManager } from '../utils/audio';
import { ALL_VERBS } from '../data/verbs';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

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
  const [includeTranscriptInExport, setIncludeTranscriptInExport] = useState(true);
  const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);
  const [isGeneratingPng, setIsGeneratingPng] = useState(false);
  const [downloadSuccessMessage, setDownloadSuccessMessage] = useState<string | null>(null);

  const certificateRef = useRef<HTMLDivElement>(null);
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

  const notifySuccess = (msg: string) => {
    setDownloadSuccessMessage(msg);
    setTimeout(() => {
      setDownloadSuccessMessage(null);
    }, 4000);
  };

  // 1. Browser Native Print / Save to PDF
  const handlePrint = () => {
    soundManager.playClick();
    window.print();
  };

  // 2. Direct PDF File Download using html2canvas and jsPDF
  const handleDownloadPdf = async () => {
    if (!certificateRef.current) return;
    soundManager.playClick();
    setIsGeneratingPdf(true);

    try {
      // Temporarily expand transcript if needed
      const element = certificateRef.current;
      
      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: '#ffffff',
        windowWidth: 1200
      });

      const imgData = canvas.toDataURL('image/jpeg', 0.95);
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4'
      });

      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = pageWidth - 20; // 10mm margins
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      // Handle multi-page or single page
      let heightLeft = imgHeight;
      let position = 10; // top margin

      pdf.addImage(imgData, 'JPEG', 10, position, imgWidth, imgHeight);
      heightLeft -= (pageHeight - 20);

      while (heightLeft > 0) {
        position = heightLeft - imgHeight + 10;
        pdf.addPage();
        pdf.addImage(imgData, 'JPEG', 10, position, imgWidth, imgHeight);
        heightLeft -= (pageHeight - 20);
      }

      const fileName = `Certificado_English_Verb_Challenge_${student.name.replace(/[^a-zA-Z0-9]/g, '_')}.pdf`;
      pdf.save(fileName);
      soundManager.playVictory();
      notifySuccess('¡PDF descargado con éxito!');
    } catch (err) {
      console.error('Error generating PDF:', err);
      // Fallback to print
      window.print();
    } finally {
      setIsGeneratingPdf(false);
    }
  };

  // 3. Direct PNG Image File Download
  const handleDownloadPng = async () => {
    if (!certificateRef.current) return;
    soundManager.playClick();
    setIsGeneratingPng(true);

    try {
      const element = certificateRef.current;
      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: '#ffffff',
        windowWidth: 1200
      });

      const imgUrl = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.href = imgUrl;
      link.download = `Certificado_English_Verb_Challenge_${student.name.replace(/[^a-zA-Z0-9]/g, '_')}.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      soundManager.playVictory();
      notifySuccess('¡Imagen de certificado descargada con éxito!');
    } catch (err) {
      console.error('Error generating PNG image:', err);
    } finally {
      setIsGeneratingPng(false);
    }
  };

  // Filter verbs based on search & tab selection for on-screen inspection
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
        <div className="print:hidden flex flex-wrap items-center justify-between px-4 sm:px-6 py-4 border-b border-slate-200 bg-slate-50 gap-3">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-amber-500 to-yellow-400 text-white flex items-center justify-center shadow-xs">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <span className="font-black text-slate-900 text-sm sm:text-base tracking-tight uppercase block leading-tight">
                Certificado Oficial de Desempeño y Dominio Verbal
              </span>
              <span className="text-[11px] text-slate-500 font-medium flex items-center gap-1.5">
                <span>Acreditación English Verb Challenge</span>
                <span>&bull;</span>
                <span className="text-blue-700 font-bold">50 Verbos Esenciales</span>
              </span>
            </div>
          </div>

          {/* Action Buttons: PDF, Image, Print, Close */}
          <div className="flex flex-wrap items-center gap-2">
            
            {/* Include Transcript Checkbox Toggle */}
            <label className="hidden md:flex items-center gap-2 text-xs font-bold text-slate-700 mr-1 cursor-pointer select-none bg-white px-3 py-1.5 rounded-xl border border-slate-200">
              <input 
                type="checkbox" 
                checked={includeTranscriptInExport} 
                onChange={(e) => setIncludeTranscriptInExport(e.target.checked)}
                className="w-4 h-4 rounded text-blue-600 focus:ring-blue-500 border-slate-300 cursor-pointer"
              />
              <span>Incluir Desglose Completo de 50 Verbos</span>
            </label>

            {/* Download PDF Button */}
            <button
              id="btn-download-pdf-certificate"
              onClick={handleDownloadPdf}
              disabled={isGeneratingPdf || isGeneratingPng}
              className="px-3.5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-black uppercase tracking-wider flex items-center gap-1.5 shadow-md shadow-blue-500/20 transition-all cursor-pointer active:scale-95 disabled:opacity-50"
              title="Descargar archivo PDF oficial del certificado"
            >
              {isGeneratingPdf ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Generando PDF...</span>
                </>
              ) : (
                <>
                  <Download className="w-4 h-4" />
                  <span>Descargar PDF</span>
                </>
              )}
            </button>

            {/* Download PNG Image Button */}
            <button
              id="btn-download-png-certificate"
              onClick={handleDownloadPng}
              disabled={isGeneratingPdf || isGeneratingPng}
              className="px-3 py-2 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-xs font-black uppercase tracking-wider flex items-center gap-1.5 shadow-md shadow-purple-500/20 transition-all cursor-pointer active:scale-95 disabled:opacity-50"
              title="Descargar imagen PNG de alta resolución"
            >
              {isGeneratingPng ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Generando...</span>
                </>
              ) : (
                <>
                  <ImageIcon className="w-4 h-4" />
                  <span>Descargar Imagen</span>
                </>
              )}
            </button>

            {/* Print / Save with Browser */}
            <button
              id="btn-print-certificate"
              onClick={handlePrint}
              className="px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-900 text-white text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer active:scale-95"
              title="Imprimir o guardar como PDF desde el navegador"
            >
              <Printer className="w-4 h-4" />
              <span className="hidden sm:inline">Imprimir</span>
            </button>

            {/* Close Button */}
            <button
              id="btn-close-certificate-modal"
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition-colors cursor-pointer"
              title="Cerrar ventana"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Success toast notification */}
        {downloadSuccessMessage && (
          <div className="print:hidden p-3 bg-emerald-600 text-white text-xs font-bold px-6 flex items-center justify-between shadow-inner animate-fadeIn">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              <span>{downloadSuccessMessage}</span>
            </div>
            <button onClick={() => setDownloadSuccessMessage(null)} className="text-white/80 hover:text-white font-bold">&times;</button>
          </div>
        )}

        {/* Informational Status Banner on screen */}
        <div className="print:hidden p-3.5 bg-blue-50/80 border-b border-blue-200 text-blue-950 text-xs font-medium px-4 sm:px-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-blue-600 shrink-0" />
            <span>
              <strong>Estado de Certificación:</strong> Has completado <strong className="text-emerald-700 font-bold">{approvedCount} de 50 verbos</strong> ({masteryPercentage}%). Tienes <strong className="text-rose-700 font-bold">{notApprovedCount} verbos pendientes</strong>.
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase ${
              isComplete 
                ? 'bg-emerald-100 text-emerald-900 border border-emerald-300' 
                : 'bg-blue-100 text-blue-900 border border-blue-300'
            }`}>
              {isComplete ? 'Acreditación 100% Completada' : 'Certificado de Avance Disponible'}
            </span>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* SCROLLABLE DOCUMENT BODY & EXPORTABLE CANVAS                              */}
        {/* ========================================================================= */}
        <div 
          id="certificate-document-to-export"
          ref={certificateRef}
          className="p-4 sm:p-8 md:p-10 space-y-8 bg-slate-50/50 print:p-0 print:space-y-6 print:bg-white"
        >
          
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
                  {isComplete 
                    ? 'Certificate of Academic Proficiency & Full Verb Mastery' 
                    : 'Official Academic Evaluation Certificate & Progress Record'}
                </p>
                
                <h1 className="text-2xl sm:text-4xl font-serif font-black text-slate-900 tracking-tight uppercase">
                  English Verb Challenge
                </h1>

                <p className="text-xs text-slate-500 italic font-medium">
                  Standardized Language Evaluation &bull; ICFES Saber 11 & IELTS Prep Curriculum
                </p>
              </div>

              {/* Recipient Notice */}
              <div className="my-6 sm:my-8 space-y-2">
                <p className="text-[11px] sm:text-xs text-slate-500 uppercase tracking-widest font-black">
                  Se certifica que el estudiante / This certificate is awarded to:
                </p>

                <h2 className="text-2xl sm:text-4xl font-extrabold text-blue-900 tracking-tight underline decoration-amber-400 decoration-2 underline-offset-8">
                  {student.name}
                </h2>

                <p className="text-xs sm:text-sm text-slate-600 font-medium pt-2">
                  Programa de Formación: <strong className="text-slate-900">{student.trainingProgram}</strong>
                </p>
              </div>

              {/* Achievement description */}
              <div className="max-w-2xl mx-auto text-xs sm:text-sm text-slate-700 leading-relaxed space-y-2">
                <p>
                  Por su participación y evaluación en el plan curricular de <strong className="text-slate-900 font-black">50 Verbos Esenciales en Inglés</strong>, acreditando competencias en conjugaciones verbales, preguntas de opción múltiple contextuales y comprensión estructural.
                </p>
              </div>

              {/* ========================================================================= */}
              {/* COMPREHENSIVE VERBS APPROVAL SUMMARY BOX                                  */}
              {/* ========================================================================= */}
              <div className="max-w-2xl mx-auto my-6 p-4 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200/90 text-slate-800 shadow-xs print:bg-slate-50 print:border-slate-300">
                <div className="flex items-center justify-between mb-3 border-b border-slate-200 pb-2">
                  <p className="text-[11px] font-black uppercase tracking-wider text-slate-600 flex items-center gap-1.5">
                    <GraduationCap className="w-4 h-4 text-blue-600" />
                    <span>Resumen Oficial de Rendimiento / Performance Summary</span>
                  </p>
                  <span className="text-[10px] font-bold text-slate-400">Total: 50 Verbos</span>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-left">
                  
                  {/* Approved Verbs Metric */}
                  <div className="p-3 rounded-xl bg-white border border-emerald-300 shadow-xs">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-black uppercase text-emerald-800 flex items-center gap-1">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-600" /> Verbos Completados
                      </span>
                    </div>
                    <div className="flex items-baseline gap-1 mt-1">
                      <p className="text-2xl font-black text-emerald-700">
                        {approvedCount}
                      </p>
                      <span className="text-xs font-bold text-slate-500">/ 50 aprobados</span>
                    </div>
                    <p className="text-[10px] text-emerald-700 font-medium mt-0.5">
                      Regla 10/10 superada
                    </p>
                  </div>

                  {/* Non-Approved Verbs Metric */}
                  <div className="p-3 rounded-xl bg-white border border-rose-300 shadow-xs">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-black uppercase text-rose-800 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 text-rose-600" /> No Completados
                      </span>
                    </div>
                    <div className="flex items-baseline gap-1 mt-1">
                      <p className="text-2xl font-black text-rose-700">
                        {notApprovedCount}
                      </p>
                      <span className="text-xs font-bold text-slate-500">/ 50 pendientes</span>
                    </div>
                    <p className="text-[10px] text-rose-700 font-medium mt-0.5">
                      Por dominar
                    </p>
                  </div>

                  {/* Total Mastery Percentage */}
                  <div className="p-3 rounded-xl bg-white border border-blue-300 shadow-xs">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-black uppercase text-blue-800 flex items-center gap-1">
                        <Sparkles className="w-3.5 h-3.5 text-blue-600" /> Calificación Global
                      </span>
                    </div>
                    <div className="flex items-baseline gap-1 mt-1">
                      <p className="text-2xl font-black text-blue-700">
                        {masteryPercentage}%
                      </p>
                      <span className="text-xs font-bold text-slate-500">de avance</span>
                    </div>
                    <p className="text-[10px] text-blue-700 font-medium mt-0.5">
                      {isComplete ? 'Dominio Pleno' : 'En Evaluación'}
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
                  <p className="text-[10px] text-slate-400 font-medium">Registro de inicio: {student.startDate}</p>
                </div>

                {/* Center: Official Verified Seal */}
                <div className="flex flex-col items-center justify-center">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 border-dashed border-amber-600/60 p-1 flex items-center justify-center text-amber-700">
                    <div className="w-full h-full rounded-full bg-amber-50 flex flex-col items-center justify-center text-[7px] font-black uppercase tracking-tighter">
                      <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-amber-600" />
                      <span>{isComplete ? 'ACREDITADO' : 'CERTIFICADO'}</span>
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
          <div className={`${includeTranscriptInExport ? '' : 'print:hidden'} bg-white rounded-3xl p-5 sm:p-8 border border-slate-200 shadow-sm print:shadow-none print:border print:border-slate-300 print:rounded-xl print-avoid-break`}>
            
            {/* Transcript Section Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-5 border-b border-slate-200">
              <div>
                <div className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-blue-600" />
                  <h3 className="font-black text-slate-900 text-base sm:text-lg uppercase tracking-tight">
                    Anexo Oficial: Desglose de Verbos Completados y No Completados
                  </h3>
                </div>
                <p className="text-xs text-slate-500 font-medium mt-1">
                  Registro completo de los 50 verbos &bull; Verbos con <span className="text-emerald-700 font-bold">10/10 superados</span> vs <span className="text-rose-700 font-bold">pendientes</span>
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
                    placeholder="Buscar verbo..."
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
                    Completados ({approvedCount})
                  </button>
                  <button
                    onClick={() => setFilterView('not-approved')}
                    className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
                      filterView === 'not-approved' ? 'bg-rose-600 text-white shadow-xs' : 'text-rose-700 hover:text-rose-900'
                    }`}
                  >
                    No Completados ({notApprovedCount})
                  </button>
                </div>
              </div>
            </div>

            {/* Quick Summary Pill Row for Print and Screen */}
            <div className="my-4 p-3 bg-slate-50 rounded-xl border border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block"></span>
                  <span className="font-bold text-slate-700">Completados: <strong className="text-emerald-700">{approvedCount}</strong></span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-rose-500 inline-block"></span>
                  <span className="font-bold text-slate-700">No Completados: <strong className="text-rose-700">{notApprovedCount}</strong></span>
                </div>
              </div>
              <div className="text-[11px] text-slate-500 font-medium">
                Criterio de aprobación: 10 respuestas consecutivas sin error (10/10)
              </div>
            </div>

            {/* HIGH-DENSITY PRINTABLE & SCREEN GRID OF ALL 50 VERBS */}
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-3">
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
                        ? 'bg-emerald-50/70 border-emerald-300'
                        : 'bg-rose-50/40 border-slate-200'
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
                      <p className="text-[11px] text-slate-600 truncate font-medium mt-0.5">
                        {verb.spanish}
                      </p>
                    </div>

                    {/* Status Badge */}
                    <div className="shrink-0 text-right">
                      {isMastered ? (
                        <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-emerald-100 text-emerald-800 font-black text-[10px] uppercase border border-emerald-300 shadow-2xs">
                          <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span>COMPLETADO</span>
                        </div>
                      ) : (
                        <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-rose-100/90 text-rose-800 font-black text-[10px] uppercase border border-rose-200">
                          <AlertCircle className="w-3.5 h-3.5 text-rose-600 shrink-0" />
                          <span>NO COMPLETADO</span>
                        </div>
                      )}
                      <p className="text-[9px] text-slate-500 font-mono mt-0.5 font-bold">
                        {isMastered ? 'Puntaje: 10/10' : attempts > 0 ? `Mejor: ${bestScore}/10` : 'Sin Intentos'}
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
            <div className="mt-6 pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between text-[10px] text-slate-500 gap-2 font-medium">
              <span>Acreditación válida bajo la evaluación continua de 10 retos sin error (10/10).</span>
              <span className="font-bold text-slate-700">English Verb Challenge &bull; Reporte Oficial de Competencia</span>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

