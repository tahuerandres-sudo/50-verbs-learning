import { Question, VerbQuestionBank } from '../../types';
import { VERBS_01_10_QUESTIONS } from './verbs-01-10';
import { VERBS_11_20_QUESTIONS } from './verbs-11-20';
import { VERBS_21_30_QUESTIONS } from './verbs-21-30';
import { VERBS_31_40_QUESTIONS } from './verbs-31-40';
import { VERBS_41_50_QUESTIONS } from './verbs-41-50';
import { getPastSimpleQuestion, getPastParticipleQuestion } from './verbForms';
import { CONCISE_SENTENCE_BUILDERS } from './conciseSentenceBuilders';
import { VERBS_LIST } from '../verbs';
import { getQuestionSpanishTranslation } from '../translations/mcTranslations';

export const ALL_VERB_QUESTIONS: VerbQuestionBank[] = [
  ...VERBS_01_10_QUESTIONS,
  ...VERBS_11_20_QUESTIONS,
  ...VERBS_21_30_QUESTIONS,
  ...VERBS_31_40_QUESTIONS,
  ...VERBS_41_50_QUESTIONS
];

/**
 * Shuffles an array using Fisher-Yates algorithm
 */
export function shuffleArray<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/**
 * Generates a 10-question practice set for a specific verb:
 * - 1 Guaranteed Past Simple question (in English with Spanish translation below)
 * - 1 Guaranteed Past Participle question (in English with Spanish translation below)
 * - 3 Additional Multiple Choice questions from the curriculum bank (shuffled options with Spanish translations)
 * - 5 Sentence Builder questions with STRICTLY MAX 6 WORDS/TOKENS (shuffled tokens)
 * - All 10 questions combined to provide complete 10/10 mastery evaluation
 */
export function generateVerbQuiz(verbId: number): Question[] {
  const bank = ALL_VERB_QUESTIONS.find(b => b.verbId === verbId);
  if (!bank) return [];
  const verbDef = VERBS_LIST.find(v => v.id === verbId);

  // 1. Mandatory Past Simple & Past Participle questions
  const pastSimpleQ = getPastSimpleQuestion(verbId);
  const pastParticipleQ = getPastParticipleQuestion(verbId);

  const preparedPastSimple: Question = {
    ...pastSimpleQ,
    questionEs: pastSimpleQ.questionEs || getQuestionSpanishTranslation(pastSimpleQ.id, pastSimpleQ.question || '', verbDef?.verb, verbDef?.spanish),
    options: pastSimpleQ.options ? shuffleArray(pastSimpleQ.options) : []
  };

  const preparedPastParticiple: Question = {
    ...pastParticipleQ,
    questionEs: pastParticipleQ.questionEs || getQuestionSpanishTranslation(pastParticipleQ.id, pastParticipleQ.question || '', verbDef?.verb, verbDef?.spanish),
    options: pastParticipleQ.options ? shuffleArray(pastParticipleQ.options) : []
  };

  // 2. Select 3 additional Multiple Choice questions (avoiding duplicate basic form queries)
  const otherMCQuestions = bank.questions.filter(q => {
    if (q.type !== 'multiple-choice') return false;
    const lowerQ = (q.question || '').toLowerCase();
    // Exclude redundant questions if the bank had generic past form questions
    if (lowerQ.includes('past participle form of') || lowerQ.includes('past simple form of')) {
      return false;
    }
    return true;
  });

  const selectedAdditionalMC = shuffleArray(otherMCQuestions)
    .slice(0, 3)
    .map(q => ({
      ...q,
      questionEs: q.questionEs || getQuestionSpanishTranslation(q.id, q.question || '', verbDef?.verb, verbDef?.spanish),
      options: q.options ? shuffleArray(q.options) : []
    }));

  // 3. Select 5 Sentence Builder questions with STRICTLY MAX 6 WORDS
  const conciseList = CONCISE_SENTENCE_BUILDERS[verbId] || [];
  const bankSB = bank.questions.filter(q => q.type === 'sentence-builder' && (q.tokens?.length ?? 0) <= 6);
  
  const allEligibleSB = [...conciseList, ...bankSB];
  // Deduplicate by ID
  const uniqueSBMap = new Map<string, Question>();
  allEligibleSB.forEach(q => {
    if ((q.tokens?.length ?? 0) <= 6 && !uniqueSBMap.has(q.id)) {
      uniqueSBMap.set(q.id, q);
    }
  });

  const eligibleSBList = Array.from(uniqueSBMap.values());
  const selectedSB = shuffleArray(eligibleSBList)
    .slice(0, 5)
    .map(q => ({
      ...q,
      tokens: q.tokens ? shuffleArray(q.tokens) : []
    }));

  // Total: [Past Simple, Past Participle, 3 MC, 5 Sentence Builder] = 10 Questions
  const all10Questions: Question[] = [
    preparedPastSimple,
    preparedPastParticiple,
    ...selectedAdditionalMC,
    ...selectedSB
  ];

  return shuffleArray(all10Questions);
}

