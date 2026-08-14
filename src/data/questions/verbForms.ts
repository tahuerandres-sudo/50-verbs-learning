import { Question } from '../../types';
import { VERBS_LIST } from '../verbs';

interface VerbFormsMap {
  [verbId: number]: {
    pastOptions: string[];
    participleOptions: string[];
  };
}

/**
 * Custom curated plausible distractors for Past Simple & Past Participle for all 50 verbs.
 */
const VERB_FORM_DISTRACTORS: VerbFormsMap = {
  1: { // Be
    pastOptions: ['was / were', 'been', 'is / are', 'being'],
    participleOptions: ['been', 'was / were', 'being', 'beed']
  },
  2: { // Have
    pastOptions: ['had', 'has', 'having', 'haved'],
    participleOptions: ['had', 'has', 'having', 'haved']
  },
  3: { // Do
    pastOptions: ['did', 'done', 'does', 'doing'],
    participleOptions: ['done', 'did', 'does', 'doed']
  },
  4: { // Go
    pastOptions: ['went', 'gone', 'goed', 'going'],
    participleOptions: ['gone', 'went', 'goed', 'going']
  },
  5: { // Get
    pastOptions: ['got', 'gotten', 'getted', 'getting'],
    participleOptions: ['got / gotten', 'got', 'getted', 'getting']
  },
  6: { // Make
    pastOptions: ['made', 'maked', 'make', 'making'],
    participleOptions: ['made', 'maked', 'maken', 'making']
  },
  7: { // Know
    pastOptions: ['knew', 'known', 'knowed', 'knowing'],
    participleOptions: ['known', 'knew', 'knowed', 'knowing']
  },
  8: { // Think
    pastOptions: ['thought', 'thinked', 'thunk', 'thinking'],
    participleOptions: ['thought', 'thinked', 'thunk', 'thinking']
  },
  9: { // Take
    pastOptions: ['took', 'taken', 'taked', 'taking'],
    participleOptions: ['taken', 'took', 'taked', 'taking']
  },
  10: { // See
    pastOptions: ['saw', 'seen', 'seed', 'seeing'],
    participleOptions: ['seen', 'saw', 'seed', 'seeing']
  },
  11: { // Come
    pastOptions: ['came', 'come', 'comed', 'coming'],
    participleOptions: ['come', 'came', 'comed', 'coming']
  },
  12: { // Want (Regular)
    pastOptions: ['wanted', 'want', 'wanten', 'wanting'],
    participleOptions: ['wanted', 'want', 'wanten', 'wanting']
  },
  13: { // Look (Regular)
    pastOptions: ['looked', 'look', 'lookt', 'looking'],
    participleOptions: ['looked', 'look', 'lookt', 'looking']
  },
  14: { // Use (Regular)
    pastOptions: ['used', 'use', 'useed', 'using'],
    participleOptions: ['used', 'use', 'useed', 'using']
  },
  15: { // Find
    pastOptions: ['found', 'finded', 'founden', 'finding'],
    participleOptions: ['found', 'finded', 'founden', 'finding']
  },
  16: { // Give
    pastOptions: ['gave', 'given', 'gived', 'giving'],
    participleOptions: ['given', 'gave', 'gived', 'giving']
  },
  17: { // Tell
    pastOptions: ['told', 'telled', 'tolen', 'telling'],
    participleOptions: ['told', 'telled', 'tolen', 'telling']
  },
  18: { // Work (Regular)
    pastOptions: ['worked', 'work', 'workt', 'working'],
    participleOptions: ['worked', 'work', 'workt', 'working']
  },
  19: { // Call (Regular)
    pastOptions: ['called', 'call', 'calld', 'calling'],
    participleOptions: ['called', 'call', 'calld', 'calling']
  },
  20: { // Try (Regular - y to ied)
    pastOptions: ['tried', 'tryed', 'try', 'trying'],
    participleOptions: ['tried', 'tryed', 'try', 'trying']
  },
  21: { // Ask (Regular)
    pastOptions: ['asked', 'ask', 'askt', 'asking'],
    participleOptions: ['asked', 'ask', 'askt', 'asking']
  },
  22: { // Need (Regular)
    pastOptions: ['needed', 'need', 'needen', 'needing'],
    participleOptions: ['needed', 'need', 'needen', 'needing']
  },
  23: { // Feel
    pastOptions: ['felt', 'feeled', 'feel', 'feeling'],
    participleOptions: ['felt', 'feeled', 'feel', 'feeling']
  },
  24: { // Become
    pastOptions: ['became', 'become', 'becomed', 'becoming'],
    participleOptions: ['become', 'became', 'becomed', 'becoming']
  },
  25: { // Leave
    pastOptions: ['left', 'leaved', 'leafed', 'leaving'],
    participleOptions: ['left', 'leaved', 'leafed', 'leaving']
  },
  26: { // Put (Irregular invariant)
    pastOptions: ['put', 'putted', 'poot', 'putting'],
    participleOptions: ['put', 'putted', 'poot', 'putting']
  },
  27: { // Mean
    pastOptions: ['meant', 'meaned', 'ment', 'meaning'],
    participleOptions: ['meant', 'meaned', 'ment', 'meaning']
  },
  28: { // Keep
    pastOptions: ['kept', 'keeped', 'keep', 'keeping'],
    participleOptions: ['kept', 'keeped', 'keep', 'keeping']
  },
  29: { // Let (Irregular invariant)
    pastOptions: ['let', 'letted', 'late', 'letting'],
    participleOptions: ['let', 'letted', 'late', 'letting']
  },
  30: { // Begin
    pastOptions: ['began', 'begun', 'begined', 'beginning'],
    participleOptions: ['begun', 'began', 'begined', 'beginning']
  },
  31: { // Seem (Regular)
    pastOptions: ['seemed', 'seem', 'seemt', 'seeming'],
    participleOptions: ['seemed', 'seem', 'seemt', 'seeming']
  },
  32: { // Help (Regular)
    pastOptions: ['helped', 'help', 'helpt', 'helping'],
    participleOptions: ['helped', 'help', 'helpt', 'helping']
  },
  33: { // Talk (Regular)
    pastOptions: ['talked', 'talk', 'talkt', 'talking'],
    participleOptions: ['talked', 'talk', 'talkt', 'talking']
  },
  34: { // Turn (Regular)
    pastOptions: ['turned', 'turn', 'turnd', 'turning'],
    participleOptions: ['turned', 'turn', 'turnd', 'turning']
  },
  35: { // Start (Regular)
    pastOptions: ['started', 'start', 'starten', 'starting'],
    participleOptions: ['started', 'start', 'starten', 'starting']
  },
  36: { // Show (Irregular)
    pastOptions: ['showed', 'shown', 'shew', 'showing'],
    participleOptions: ['shown', 'showed', 'shew', 'showing']
  },
  37: { // Hear
    pastOptions: ['heard', 'heared', 'heart', 'hearing'],
    participleOptions: ['heard', 'heared', 'heart', 'hearing']
  },
  38: { // Play (Regular)
    pastOptions: ['played', 'play', 'plaied', 'playing'],
    participleOptions: ['played', 'play', 'plaied', 'playing']
  },
  39: { // Run
    pastOptions: ['ran', 'run', 'runned', 'running'],
    participleOptions: ['run', 'ran', 'runned', 'running']
  },
  40: { // Move (Regular)
    pastOptions: ['moved', 'move', 'moveed', 'moving'],
    participleOptions: ['moved', 'move', 'moveed', 'moving']
  },
  41: { // Like (Regular)
    pastOptions: ['liked', 'like', 'likeed', 'liking'],
    participleOptions: ['liked', 'like', 'likeed', 'liking']
  },
  42: { // Live (Regular)
    pastOptions: ['lived', 'live', 'liveed', 'living'],
    participleOptions: ['lived', 'live', 'liveed', 'living']
  },
  43: { // Believe (Regular)
    pastOptions: ['believed', 'believe', 'believd', 'believing'],
    participleOptions: ['believed', 'believe', 'believd', 'believing']
  },
  44: { // Hold
    pastOptions: ['held', 'holded', 'hold', 'holding'],
    participleOptions: ['held', 'holded', 'hold', 'holding']
  },
  45: { // Bring
    pastOptions: ['brought', 'bringed', 'brang', 'bringing'],
    participleOptions: ['brought', 'bringed', 'brang', 'bringing']
  },
  46: { // Happen (Regular)
    pastOptions: ['happened', 'happen', 'happend', 'happening'],
    participleOptions: ['happened', 'happen', 'happend', 'happening']
  },
  47: { // Must (Modal)
    pastOptions: ['had to', 'musted', 'must', 'must have'],
    participleOptions: ['had to', 'musted', 'must', 'must have']
  },
  48: { // Write
    pastOptions: ['wrote', 'written', 'writed', 'writing'],
    participleOptions: ['written', 'wrote', 'writed', 'writing']
  },
  49: { // Provide (Regular)
    pastOptions: ['provided', 'provide', 'provideed', 'providing'],
    participleOptions: ['provided', 'provide', 'provideed', 'providing']
  },
  50: { // Sit
    pastOptions: ['sat', 'sitted', 'sit', 'sitting'],
    participleOptions: ['sat', 'sitted', 'sit', 'sitting']
  }
};

/**
 * Returns a guaranteed Past Simple question for a given verb.
 */
export function getPastSimpleQuestion(verbId: number): Question {
  const verbDef = VERBS_LIST.find(v => v.id === verbId);
  if (!verbDef) {
    throw new Error(`Verb with id ${verbId} not found`);
  }

  const custom = VERB_FORM_DISTRACTORS[verbId];
  const correctAnswer = verbDef.pastSimple;
  const rawOptions = custom?.pastOptions || [
    correctAnswer,
    verbDef.type === 'regular' ? `${verbDef.verb.toLowerCase()}` : `${verbDef.verb.toLowerCase()}ed`,
    `${verbDef.verb.toLowerCase()}ing`,
    verbDef.pastParticiple !== correctAnswer ? verbDef.pastParticiple : `${verbDef.verb.toLowerCase()}s`
  ];

  // Remove duplicates and ensure correct answer is included
  const uniqueOptions = Array.from(new Set([correctAnswer, ...rawOptions])).slice(0, 4);

  const isRegular = verbDef.type === 'regular';

  return {
    id: `verb-${verbDef.id}-past-simple-core`,
    type: 'multiple-choice',
    question: `What is the Past Simple form of the verb "${verbDef.verb}"?`,
    questionEs: `¿Cuál es la forma en Pasado Simple del verbo "${verbDef.verb}" (${verbDef.spanish})?`,
    options: uniqueOptions,
    correctAnswer,
    explanationEn: isRegular
      ? `"${verbDef.verb}" is a regular verb, so its past simple is formed by adding -ed ("${correctAnswer}").`
      : `"${verbDef.verb}" is an irregular verb. Its past simple form is "${correctAnswer}".`,
    explanationEs: isRegular
      ? `"${verbDef.verb}" es un verbo regular, por lo que su pasado simple se forma agregando -ed ("${correctAnswer}").`
      : `"${verbDef.verb}" es un verbo irregular. Su forma correcta en pasado simple es "${correctAnswer}".`
  };
}

/**
 * Returns a guaranteed Past Participle question for a given verb.
 */
export function getPastParticipleQuestion(verbId: number): Question {
  const verbDef = VERBS_LIST.find(v => v.id === verbId);
  if (!verbDef) {
    throw new Error(`Verb with id ${verbId} not found`);
  }

  const custom = VERB_FORM_DISTRACTORS[verbId];
  const correctAnswer = verbDef.pastParticiple;
  const rawOptions = custom?.participleOptions || [
    correctAnswer,
    verbDef.pastSimple !== correctAnswer ? verbDef.pastSimple : `${verbDef.verb.toLowerCase()}`,
    `${verbDef.verb.toLowerCase()}ing`,
    `${verbDef.verb.toLowerCase()}en`
  ];

  // Remove duplicates and ensure correct answer is included
  const uniqueOptions = Array.from(new Set([correctAnswer, ...rawOptions])).slice(0, 4);

  const isRegular = verbDef.type === 'regular';

  return {
    id: `verb-${verbDef.id}-past-participle-core`,
    type: 'multiple-choice',
    question: `What is the Past Participle of the verb "${verbDef.verb}"?`,
    questionEs: `¿Cuál es el Participio Pasado del verbo "${verbDef.verb}" (${verbDef.spanish})?`,
    options: uniqueOptions,
    correctAnswer,
    explanationEn: isRegular
      ? `"${verbDef.verb}" is a regular verb, so its past participle is identical to its past simple: "${correctAnswer}" (used with have/has/had in perfect tenses).`
      : `The past participle of "${verbDef.verb}" is "${correctAnswer}", used in perfect tenses and passive constructions.`,
    explanationEs: isRegular
      ? `"${verbDef.verb}" es un verbo regular, por lo que su participio pasado es idéntico a su pasado simple: "${correctAnswer}" (usado con have/has/had).`
      : `El participio pasado de "${verbDef.verb}" es "${correctAnswer}", fundamental para tiempos perfectos y voz pasiva en ICFES/IELTS.`
  };
}
