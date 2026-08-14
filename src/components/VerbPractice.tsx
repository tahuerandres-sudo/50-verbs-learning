import React, { useState, useEffect, useRef, useCallback } from 'react';
import { VerbDefinition, Question, UserProgress, UserStats, Achievement } from '../types';
import { generateVerbQuiz } from '../data/questions';
import { soundManager } from '../utils/audio';
import { fireVerbMasteredConfetti } from '../utils/confetti';
import { 
  Clock, 
  ArrowLeft, 
  RotateCcw, 
  CheckCircle2, 
  XCircle, 
  Sparkles, 
  ArrowRight, 
  AlertTriangle,
  HelpCircle,
  Trophy,
  Volume2,
  Undo2,
  Trash2
} from 'lucide-react';

interface VerbPracticeProps {
  verb: VerbDefinition;
  onBack: () => void;
  onVerbMastered: (verbId: number, attempts: number) => void;
  onRecordAnswer: (isCorrect: boolean, isSentenceBuilder: boolean, timeRemaining: number) => void;
  onNextVerb?: () => void;
}

const QUESTION_TIME_LIMIT = 30; // 30 seconds per question

export const VerbPractice: React.FC<VerbPracticeProps> = ({
  verb,
  onBack,
  onVerbMastered,
  onRecordAnswer,
  onNextVerb
}) => {
  // Quiz state
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [attempts, setAttempts] = useState(1);
  const [score, setScore] = useState(0);

  // Timer state
  const [timeLeft, setTimeLeft] = useState(QUESTION_TIME_LIMIT);
  const [timerActive, setTimerActive] = useState(true);
  const timerRef = useRef<number | null>(null);

  // Interaction state
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [selectedTokens, setSelectedTokens] = useState<string[]>([]);
  const [availableTokens, setAvailableTokens] = useState<string[]>([]);
  
  // Feedback state
  const [answerState, setAnswerState] = useState<'unanswered' | 'correct' | 'incorrect' | 'timeout'>('unanswered');
  const [quizCompleted, setQuizCompleted] = useState(false);

  // Initialize or reset questions
  const initQuiz = useCallback(() => {
    const newQuestions = generateVerbQuiz(verb.id);
    setQuestions(newQuestions);
    setCurrentIndex(0);
    setScore(0);
    setSelectedOption(null);
    setSelectedTokens([]);
    setAnswerState('unanswered');
    setQuizCompleted(false);
    setTimeLeft(QUESTION_TIME_LIMIT);
    setTimerActive(true);

    const firstQ = newQuestions[0];
    if (firstQ && firstQ.type === 'sentence-builder' && firstQ.tokens) {
      setAvailableTokens([...firstQ.tokens]);
    } else {
      setAvailableTokens([]);
    }
  }, [verb.id]);

  useEffect(() => {
    initQuiz();
  }, [initQuiz]);

  const currentQuestion = questions[currentIndex];

  // Set up tokens when moving to a new sentence-builder question
  useEffect(() => {
    if (currentQuestion && currentQuestion.type === 'sentence-builder' && currentQuestion.tokens) {
      setAvailableTokens([...currentQuestion.tokens]);
      setSelectedTokens([]);
    }
    setSelectedOption(null);
    setAnswerState('unanswered');
    setTimeLeft(QUESTION_TIME_LIMIT);
    setTimerActive(true);
  }, [currentIndex, currentQuestion]);

  // Timer Countdown logic
  useEffect(() => {
    if (!timerActive || answerState !== 'unanswered' || quizCompleted) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = window.setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timerRef.current!);
          handleTimeOut();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [timerActive, answerState, quizCompleted]);

  // Handle Timeout (Strict fail)
  const handleTimeOut = () => {
    setTimerActive(false);
    setAnswerState('timeout');
    soundManager.playIncorrect();
    onRecordAnswer(false, currentQuestion?.type === 'sentence-builder', 0);
  };

  // Handle Multiple Choice Selection
  const handleSelectOption = (option: string) => {
    if (answerState !== 'unanswered' || !timerActive) return;

    soundManager.playClick();
    setSelectedOption(option);
    setTimerActive(false);

    const isCorrect = option.trim().toLowerCase() === currentQuestion.correctAnswer?.trim().toLowerCase();

    if (isCorrect) {
      soundManager.playCorrect();
      setAnswerState('correct');
      setScore(prev => prev + 1);
      onRecordAnswer(true, false, timeLeft);
    } else {
      soundManager.playIncorrect();
      setAnswerState('incorrect');
      onRecordAnswer(false, false, timeLeft);
    }
  };

  // Sentence Builder Token Interactions
  const handleTokenClick = (token: string, index: number) => {
    if (answerState !== 'unanswered') return;
    soundManager.playClick();
    
    // Move from available to selected
    setSelectedTokens(prev => [...prev, token]);
    setAvailableTokens(prev => prev.filter((_, i) => i !== index));
  };

  const handleRemoveToken = (token: string, index: number) => {
    if (answerState !== 'unanswered') return;
    soundManager.playClick();

    // Move from selected back to available
    setAvailableTokens(prev => [...prev, token]);
    setSelectedTokens(prev => prev.filter((_, i) => i !== index));
  };

  const handleResetTokens = () => {
    if (answerState !== 'unanswered' || !currentQuestion || currentQuestion.type !== 'sentence-builder' || !currentQuestion.tokens) return;
    soundManager.playClick();
    setSelectedTokens([]);
    setAvailableTokens([...currentQuestion.tokens]);
  };

  const handleCheckSentence = () => {
    if (answerState !== 'unanswered' || selectedTokens.length === 0) return;
    setTimerActive(false);

    const constructed = selectedTokens.join(' ').trim().replace(/\s+([.,!?:;])/g, '$1');
    const target = currentQuestion.correctSentence?.trim().replace(/\s+([.,!?:;])/g, '$1');

    // Clean comparisons (case-insensitive & normalize punctuation)
    const normalize = (str: string = '') => str.toLowerCase().replace(/[.,!?:;]/g, '').trim();
    const isCorrect = normalize(constructed) === normalize(target);

    if (isCorrect) {
      soundManager.playCorrect();
      setAnswerState('correct');
      setScore(prev => prev + 1);
      onRecordAnswer(true, true, timeLeft);
    } else {
      soundManager.playIncorrect();
      setAnswerState('incorrect');
      onRecordAnswer(false, true, timeLeft);
    }
  };

  // Proceed to Next Question or Complete
  const handleNextQuestion = () => {
    soundManager.playClick();
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex(prev => prev + 1);
    } else {
      // Finished all 10 questions with 10/10!
      setQuizCompleted(true);
      soundManager.playVictory();
      fireVerbMasteredConfetti();
      onVerbMastered(verb.id, attempts);
    }
  };

  // Restart verb challenge upon mistake or timeout
  const handleRestartChallenge = () => {
    soundManager.playClick();
    setAttempts(prev => prev + 1);
    initQuiz();
  };

  if (!currentQuestion && !quizCompleted) {
    return (
      <div className="flex items-center justify-center min-h-[50vh]">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  // Timer color calculation
  const timerPercentage = (timeLeft / QUESTION_TIME_LIMIT) * 100;
  const isTimeUrgent = timeLeft <= 5;
  const isTimeWarning = timeLeft <= 12 && timeLeft > 5;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
      
      {/* Top Navigation & Status Bar */}
      <div className="bg-white border border-slate-200 p-2 sm:p-3 rounded-2xl flex items-center justify-between shadow-xs">
        <button
          id="btn-back-to-dashboard"
          onClick={() => {
            soundManager.playClick();
            onBack();
          }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs sm:text-sm font-bold transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Volver al Tablero</span>
        </button>

        {/* Verb Identification Bento Pill */}
        <div className="flex items-center gap-2">
          <span className={`px-2.5 py-1 rounded-xl text-xs font-black uppercase tracking-wider ${
            verb.type === 'irregular' 
              ? 'bg-purple-100 text-purple-800 border border-purple-200' 
              : 'bg-blue-100 text-blue-800 border border-blue-200'
          }`}>
            {verb.type}
          </span>
          <span className="px-2.5 py-1 rounded-xl bg-slate-900 text-white text-xs font-black">
            Intento #{attempts}
          </span>
        </div>
      </div>

      {/* QUIZ COMPLETED (10/10 MASTERED) SCREEN */}
      {quizCompleted ? (
        <div id="verb-mastered-celebration" className="bg-white rounded-3xl p-6 sm:p-12 border border-slate-200 shadow-xl text-center space-y-6 animate-scaleIn">
          <div className="w-20 h-20 rounded-2xl bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center shadow-lg shadow-emerald-500/20">
            <Trophy className="w-10 h-10 animate-bounce" />
          </div>

          <div className="space-y-2">
            <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 font-black text-xs tracking-wider uppercase">
              10/10 Puntuación Perfecta Aprobada
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight uppercase">
              ¡{verb.verb} Dominado con Éxito!
            </h2>
            <p className="text-slate-600 text-sm sm:text-base max-w-md mx-auto font-medium">
              Completaste los 10 retos de <span className="font-black text-slate-900">{verb.verb.toUpperCase()}</span> ({verb.spanish}) sin errores. Tu dominio ha sido acreditado en tu perfil.
            </p>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
            <button
              id="btn-return-dashboard-mastered"
              onClick={() => {
                soundManager.playClick();
                onBack();
              }}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-900 text-xs sm:text-sm font-black uppercase tracking-wider transition-colors cursor-pointer"
            >
              Ver Tablero Principal
            </button>

            {onNextVerb && (
              <button
                id="btn-continue-next-verb-mastered"
                onClick={() => {
                  soundManager.playClick();
                  onNextVerb();
                }}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs sm:text-sm font-black uppercase tracking-wider shadow-lg shadow-blue-500/30 flex items-center justify-center gap-2 transition-transform active:scale-95 cursor-pointer"
              >
                <span>Siguiente Verbo</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      ) : (
        /* ACTIVE QUESTION WORKSPACE IN BENTO CARD */
        <div className="bg-slate-900 rounded-3xl sm:rounded-[2.5rem] p-6 sm:p-8 text-white shadow-2xl relative overflow-hidden border border-slate-800 space-y-6">
          
          {/* Header & Live Timer in Bento Container */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-blue-400 font-mono">VERBO #{verb.id < 10 ? `0${verb.id}` : verb.id}</span>
                <span className="text-slate-600">•</span>
                <span className="text-xs text-slate-300 font-medium">{verb.spanish}</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-white uppercase mt-0.5">
                {verb.verb}
              </h1>
            </div>

            {/* Circular or Pill Timer */}
            <div 
              id="live-countdown-timer"
              className={`flex items-center gap-3 px-5 py-2.5 rounded-2xl font-mono text-base font-black self-start sm:self-auto transition-colors shadow-inner ${
                isTimeUrgent 
                  ? 'bg-rose-500 text-white animate-pulse' 
                  : isTimeWarning 
                  ? 'bg-amber-500 text-slate-950' 
                  : 'bg-slate-800 text-emerald-400 border border-slate-700'
              }`}
            >
              <Clock className="w-5 h-5 shrink-0" />
              <span>00:{timeLeft < 10 ? `0${timeLeft}` : timeLeft}</span>
              <span className="text-[10px] uppercase font-sans tracking-widest font-black opacity-80">seg</span>
            </div>
          </div>

          {/* Question Indicator & Step Bar */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs text-slate-400 font-bold">
              <span>Reto {currentIndex + 1} de 10</span>
              <span className="text-blue-400">
                {currentQuestion.type === 'multiple-choice' ? 'Selección Múltiple' : 'Construcción de Frase'}
              </span>
            </div>
            
            <div className="grid grid-cols-10 gap-1.5">
              {questions.map((_, idx) => (
                <div
                  key={idx}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx < currentIndex
                      ? 'bg-emerald-400'
                      : idx === currentIndex
                      ? 'bg-blue-500 ring-2 ring-blue-400/50'
                      : 'bg-slate-800'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* QUESTION BODY */}
          <div className="space-y-6 pt-2">
            
            {/* MODE 1: MULTIPLE CHOICE */}
            {currentQuestion.type === 'multiple-choice' && (
              <div className="space-y-6">
                
                {/* Question Sentence Prompt (Bilingual: English + Spanish below) */}
                <div className="p-5 sm:p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80 space-y-3.5">
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-blue-400 block mb-1.5 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                      <span>Pregunta en Inglés (Question):</span>
                    </span>
                    <p className="text-xl sm:text-2xl font-bold text-white leading-relaxed">
                      {currentQuestion.question}
                    </p>
                  </div>

                  {/* Spanish Translation below */}
                  {currentQuestion.questionEs && (
                    <div className="pt-3 border-t border-slate-700/60">
                      <span className="text-[10px] font-black uppercase tracking-widest text-emerald-400 block mb-1 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                        <span>Traducción al Español:</span>
                      </span>
                      <p className="text-sm sm:text-base font-medium italic text-slate-300">
                        "{currentQuestion.questionEs}"
                      </p>
                    </div>
                  )}
                </div>

                {/* 4 Interactive Options */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {currentQuestion.options?.map((option, idx) => {
                    const isSelected = selectedOption === option;
                    const isCorrect = option.trim().toLowerCase() === currentQuestion.correctAnswer?.trim().toLowerCase();
                    const isAnswered = answerState !== 'unanswered';

                    let buttonStyle = 'bg-slate-800/80 hover:bg-slate-750 text-white border-slate-700 hover:border-blue-400';

                    if (isAnswered) {
                      if (isCorrect) {
                        buttonStyle = 'bg-emerald-600 text-white border-emerald-500 ring-2 ring-emerald-400/40 font-bold';
                      } else if (isSelected && !isCorrect) {
                        buttonStyle = 'bg-rose-600 text-white border-rose-500 font-bold';
                      } else {
                        buttonStyle = 'bg-slate-800/40 text-slate-500 border-slate-800 opacity-40';
                      }
                    }

                    return (
                      <button
                        key={idx}
                        id={`mc-option-${idx}`}
                        disabled={isAnswered}
                        onClick={() => handleSelectOption(option)}
                        className={`p-4 sm:p-5 rounded-2xl border text-left text-sm sm:text-base font-bold transition-all flex items-center justify-between gap-3 cursor-pointer ${buttonStyle}`}
                      >
                        <div className="flex items-center gap-3">
                          <span className="w-7 h-7 rounded-xl bg-slate-700 text-white text-xs font-black flex items-center justify-center shrink-0">
                            {String.fromCharCode(65 + idx)}
                          </span>
                          <span>{option}</span>
                        </div>
                        {isAnswered && isCorrect && <CheckCircle2 className="w-5 h-5 text-white shrink-0" />}
                        {isAnswered && isSelected && !isCorrect && <XCircle className="w-5 h-5 text-white shrink-0" />}
                      </button>
                    );
                  })}
                </div>

              </div>
            )}

            {/* MODE 2: SENTENCE BUILDER */}
            {currentQuestion.type === 'sentence-builder' && (
              <div className="space-y-6">
                
                {/* Spanish Prompt */}
                <div className="p-5 sm:p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80">
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-1.5">
                    Frase a traducir al inglés:
                  </span>
                  <p className="text-xl sm:text-2xl font-serif italic text-white leading-relaxed">
                    "{currentQuestion.spanishPrompt}"
                  </p>
                </div>

                {/* Active Sentence Workspace Drop Area */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs text-slate-400 font-bold">
                    <span>Tu Frase Construida:</span>
                    {selectedTokens.length > 0 && answerState === 'unanswered' && (
                      <button
                        onClick={handleResetTokens}
                        className="text-slate-400 hover:text-white flex items-center gap-1 cursor-pointer font-bold"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                        <span>Limpiar</span>
                      </button>
                    )}
                  </div>

                  <div className={`min-h-[84px] p-4 sm:p-5 rounded-2xl border-2 border-dashed transition-all flex flex-wrap items-center gap-2.5 ${
                    answerState === 'correct'
                      ? 'bg-emerald-950/40 border-emerald-500'
                      : answerState === 'incorrect' || answerState === 'timeout'
                      ? 'bg-rose-950/40 border-rose-500'
                      : selectedTokens.length > 0
                      ? 'bg-slate-800/80 border-blue-400'
                      : 'bg-slate-800/40 border-slate-700'
                  }`}>
                    {selectedTokens.length === 0 ? (
                      <span className="text-xs sm:text-sm text-slate-500 italic">
                        Toca las palabras de abajo en el orden correcto para formar la frase...
                      </span>
                    ) : (
                      selectedTokens.map((token, idx) => (
                        <button
                          key={idx}
                          disabled={answerState !== 'unanswered'}
                          onClick={() => handleRemoveToken(token, idx)}
                          className={`px-4 sm:px-5 py-2.5 rounded-xl font-black text-xs sm:text-sm shadow-md transition-all flex items-center gap-1.5 cursor-pointer ${
                            answerState === 'correct'
                              ? 'bg-emerald-500 text-white'
                              : answerState === 'incorrect' || answerState === 'timeout'
                              ? 'bg-rose-500 text-white'
                              : 'bg-white text-slate-900 hover:bg-rose-50 hover:text-rose-600'
                          }`}
                        >
                          <span>{token}</span>
                          {answerState === 'unanswered' && <Undo2 className="w-3 h-3 opacity-60" />}
                        </button>
                      ))
                    )}
                  </div>
                </div>

                {/* Available Token Bank */}
                {answerState === 'unanswered' && (
                  <div className="space-y-2">
                    <span className="text-xs font-bold text-slate-400">
                      Banco de Palabras (Toca para agregar):
                    </span>
                    <div className="flex flex-wrap gap-2.5 p-4 bg-slate-800/60 rounded-2xl border border-slate-700/80">
                      {availableTokens.map((token, idx) => (
                        <button
                          key={idx}
                          id={`token-btn-${idx}`}
                          onClick={() => handleTokenClick(token, idx)}
                          className="px-4 sm:px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white hover:text-white text-xs sm:text-sm font-bold shadow-xs transition-all active:scale-95 cursor-pointer"
                        >
                          {token}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Submit Sentence Button */}
                {answerState === 'unanswered' && (
                  <button
                    id="btn-check-sentence"
                    disabled={selectedTokens.length === 0}
                    onClick={handleCheckSentence}
                    className="w-full py-4 px-6 rounded-2xl bg-blue-600 hover:bg-blue-500 disabled:bg-slate-800 disabled:text-slate-600 text-white font-black text-sm uppercase tracking-wider shadow-lg shadow-blue-500/25 transition-all active:scale-[0.99] cursor-pointer"
                  >
                    Comprobar Oración
                  </button>
                )}

              </div>
            )}

            {/* INSTANT FEEDBACK & GRAMMAR EXPLANATION BANNERS */}
            
            {/* SUCCESS BANNER */}
            {answerState === 'correct' && (
              <div className="p-5 sm:p-6 rounded-2xl bg-emerald-950/90 border border-emerald-500/80 space-y-3 animate-fadeIn">
                <div className="flex items-center gap-2.5 text-emerald-300 font-black text-base sm:text-lg">
                  <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0" />
                  <span>¡Excelente! Respuesta Correcta (+1 punto)</span>
                </div>

                {currentQuestion.type === 'sentence-builder' && (
                  <div className="p-3.5 bg-emerald-900/60 rounded-xl text-xs sm:text-sm text-emerald-100 font-medium">
                    <span className="font-black text-emerald-300">Frase correcta: </span>
                    {currentQuestion.correctSentence}
                  </div>
                )}

                <div className="space-y-1 text-xs sm:text-sm text-emerald-200">
                  <p><span className="font-bold text-white">Explicación (EN):</span> {currentQuestion.explanationEn}</p>
                  <p><span className="font-bold text-white">Explicación (ES):</span> {currentQuestion.explanationEs}</p>
                </div>

                <div className="pt-2">
                  <button
                    id="btn-next-question"
                    onClick={handleNextQuestion}
                    className="w-full py-3.5 px-6 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs sm:text-sm uppercase tracking-wider shadow-lg shadow-emerald-500/25 flex items-center justify-center gap-2 transition-transform active:scale-95 cursor-pointer"
                  >
                    <span>Siguiente Pregunta</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* FAILURE / TIMEOUT BANNER (STRICT 10/10 RULE TRIGGERED) */}
            {(answerState === 'incorrect' || answerState === 'timeout') && (
              <div className="p-5 sm:p-6 rounded-2xl bg-rose-950/90 border border-rose-500/80 space-y-4 animate-shake">
                <div className="flex items-center gap-2.5 text-rose-300 font-black text-base sm:text-lg">
                  <AlertTriangle className="w-6 h-6 text-rose-400 shrink-0" />
                  <span>
                    {answerState === 'timeout' 
                      ? '¡Se agotó el tiempo! (30s)' 
                      : 'Respuesta Incorrecta'}
                  </span>
                </div>

                {/* Correct Answer Display */}
                <div className="p-3.5 bg-rose-900/60 rounded-xl text-xs sm:text-sm text-rose-100">
                  <span className="font-bold text-rose-300">Respuesta Correcta: </span>
                  <span className="font-black text-white">
                    {currentQuestion.type === 'multiple-choice'
                      ? currentQuestion.correctAnswer
                      : currentQuestion.correctSentence}
                  </span>
                </div>

                {/* Grammatical Explanation */}
                <div className="space-y-1 text-xs sm:text-sm text-rose-200">
                  <p><span className="font-bold text-white">Explicación (EN):</span> {currentQuestion.explanationEn}</p>
                  <p><span className="font-bold text-white">Explicación (ES):</span> {currentQuestion.explanationEs}</p>
                </div>

                {/* Strict Rule Notice */}
                <div className="p-3 rounded-xl bg-slate-950 text-slate-300 text-xs space-y-1 border border-slate-800">
                  <p className="font-bold text-amber-300">Regla del Desafío 10/10:</p>
                  <p>
                    Para dominar este verbo y asegurar la máxima preparación para el ICFES/IELTS, debes responder las 10 preguntas correctamente sin errores.
                  </p>
                </div>

                {/* Restart Button */}
                <div>
                  <button
                    id="btn-restart-verb-challenge"
                    onClick={handleRestartChallenge}
                    className="w-full py-3.5 px-6 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-black text-xs sm:text-sm uppercase tracking-wider shadow-lg shadow-rose-600/25 flex items-center justify-center gap-2 transition-transform active:scale-95 cursor-pointer"
                  >
                    <RotateCcw className="w-4 h-4" />
                    <span>Reiniciar Reto del Verbo (Intento #{attempts + 1})</span>
                  </button>
                </div>

              </div>
            )}

          </div>

        </div>
      )}

    </div>
  );
};
