export interface StudentProfile {
  name: string;
  trainingProgram: string;
  startDate: string;
}

export type QuestionType = 'multiple-choice' | 'sentence-builder';

export interface BaseQuestion {
  id: string;
  type: QuestionType;
  question?: string;
  questionEs?: string;
  options?: string[];
  correctAnswer?: string;
  spanishPrompt?: string;
  correctSentence?: string;
  tokens?: string[];
  explanationEn: string;
  explanationEs: string;
}

export interface MultipleChoiceQuestion extends BaseQuestion {
  type: 'multiple-choice';
  question: string;
  questionEs?: string;
  options: string[];
  correctAnswer: string;
}

export interface SentenceBuilderQuestion extends BaseQuestion {
  type: 'sentence-builder';
  spanishPrompt: string;
  correctSentence: string;
  tokens: string[];
}

export type Question = MultipleChoiceQuestion | SentenceBuilderQuestion;

export interface VerbDefinition {
  id: number;
  verb: string;
  spanish: string;
  translation?: string;
  type: 'regular' | 'irregular';
  pastSimple?: string;
  pastParticiple?: string;
  exampleSentence?: string;
  ieltsContext?: string;
}

export interface VerbQuestionBank {
  verbId: number;
  questions: Question[];
}

export interface VerbProgress {
  verbId: number;
  mastered: boolean;
  attempts: number;
  bestScore: number;
  currentScore: number;
  lastAttemptAt?: string;
  completedAt?: string;
}

export type UserProgress = Record<number, VerbProgress>;

export interface UserStats {
  totalQuestionsAnswered: number;
  totalCorrectAnswers: number;
  masteredVerbsCount: number;
  currentStreak: number;
  bestStreak: number;
  sentenceBuilderCorrectCount: number;
  swiftAnswersCount: number;
  totalTimeSpentSeconds: number;
}

export interface Achievement {
  id: string;
  title: string;
  titleEs: string;
  description: string;
  descriptionEs: string;
  icon: string;
  unlockedAt: string | null;
}
