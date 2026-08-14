import { VerbQuestionBank } from '../../types';

export const VERBS_11_20_QUESTIONS: VerbQuestionBank[] = [
  // 11. COME
  {
    verbId: 11,
    questions: [
      {
        id: 'come-mc-1',
        type: 'multiple-choice',
        question: 'Many international students ___ from Latin America to study in Canada.',
        options: ['come', 'comes', 'came', 'coming'],
        correctAnswer: 'come',
        explanationEn: 'Plural subject "Many international students" takes the base form "come".',
        explanationEs: 'Sujeto plural concuerda con la forma base "come".'
      },
      {
        id: 'come-mc-2',
        type: 'multiple-choice',
        question: 'What is the past simple of the verb "come"?',
        options: ['came', 'come', 'comed', 'comes'],
        correctAnswer: 'came',
        explanationEn: 'The past simple of "come" is "came", while the past participle is "come".',
        explanationEs: 'El pasado simple de "come" es "came", y su participio vuelve a ser "come".'
      },
      {
        id: 'come-mc-3',
        type: 'multiple-choice',
        question: 'What does the phrasal verb "come across" mean?',
        options: ['Encontrar por casualidad', 'Llegar tarde', 'Cruzar un río', 'Regresar'],
        correctAnswer: 'Encontrar por casualidad',
        explanationEn: '"Come across" means to discover or find something/someone by chance.',
        explanationEs: '"Come across" significa toparse o encontrar por casualidad.'
      },
      {
        id: 'come-mc-4',
        type: 'multiple-choice',
        question: 'The guest lecturer ___ to our university yesterday afternoon.',
        options: ['came', 'come', 'comes', 'comed'],
        correctAnswer: 'came',
        explanationEn: '"Yesterday afternoon" requires the past simple "came".',
        explanationEs: '"Yesterday afternoon" exige el pasado simple "came".'
      },
      {
        id: 'come-mc-5',
        type: 'multiple-choice',
        question: 'Scientists have ___ up with an innovative water filtration system.',
        options: ['come', 'came', 'comes', 'coming'],
        correctAnswer: 'come',
        explanationEn: 'Phrasal verb in present perfect: "have come up with" (han ideado).',
        explanationEs: '"Have come up with" significa haber ideado o propuesto una solución.'
      },
      {
        id: 'come-mc-6',
        type: 'multiple-choice',
        question: 'What is the Spanish translation of the verb "come"?',
        options: ['Venir / Proceder', 'Ir / Partir', 'Llevar / Traer', 'Correr / Andar'],
        correctAnswer: 'Venir / Proceder',
        explanationEn: '"Come" translates to "venir" or "proceder/llegar".',
        explanationEs: '"Come" traduce venir o proceder de.'
      },
      {
        id: 'come-mc-7',
        type: 'multiple-choice',
        question: 'Winter ___ every year with colder temperatures and shorter days.',
        questionEs: 'El invierno llega cada año con temperaturas más frías y días más cortos.',
        options: ['comes', 'come', 'came', 'coming'],
        correctAnswer: 'comes',
        explanationEn: 'Singular third-person subject "Winter" takes "comes" in present simple.',
        explanationEs: 'Sujeto singular "Winter" lleva "comes" en presente simple.'
      },
      {
        id: 'come-mc-8',
        type: 'multiple-choice',
        question: 'Success does not ___ easily; it requires continuous dedication.',
        options: ['come', 'comes', 'came', 'coming'],
        correctAnswer: 'come',
        explanationEn: 'Negative present with "does not" takes base verb "come".',
        explanationEs: 'Tras el auxiliar "does not", se usa la forma base "come".'
      },
      {
        id: 'come-mc-9',
        type: 'multiple-choice',
        question: 'Please ___ in and take a seat before the lecture starts.',
        options: ['come', 'came', 'comes', 'to come'],
        correctAnswer: 'come',
        explanationEn: 'Imperative form uses the base verb: "Please come in".',
        explanationEs: 'El modo imperativo utiliza la forma base: "Please come in".'
      },
      {
        id: 'come-mc-10',
        type: 'multiple-choice',
        question: 'The opportunity has finally ___ for us to study overseas.',
        options: ['come', 'came', 'comes', 'coming'],
        correctAnswer: 'come',
        explanationEn: 'Past participle of "come" is "come" (has come).',
        explanationEs: 'El participio pasado de "come" es "come" (has come).'
      },
      // 10 Sentence Builders
      {
        id: 'come-sb-1',
        type: 'sentence-builder',
        spanishPrompt: 'Ella viene a clase todos los lunes.',
        correctSentence: 'She comes to class every Monday.',
        tokens: ['She', 'comes', 'to', 'class', 'every', 'Monday.'],
        explanationEn: 'Third-person singular "She" + "comes to class".',
        explanationEs: 'Tercera persona singular "comes to class".'
      },
      {
        id: 'come-sb-2',
        type: 'sentence-builder',
        spanishPrompt: 'Muchos turistas vienen a Colombia cada año.',
        correctSentence: 'Many tourists come to Colombia each year.',
        tokens: ['Many', 'tourists', 'come', 'to', 'Colombia', 'each', 'year.'],
        explanationEn: 'Plural subject "Many tourists" + "come to Colombia".',
        explanationEs: 'Sujeto plural con "come to Colombia".'
      },
      {
        id: 'come-sb-3',
        type: 'sentence-builder',
        spanishPrompt: 'Él vino a la reunión muy temprano.',
        correctSentence: 'He came to the meeting very early.',
        tokens: ['He', 'came', 'to', 'the', 'meeting', 'very', 'early.'],
        explanationEn: 'Past simple "came" + prepositional destination.',
        explanationEs: 'Pasado simple "came to the meeting".'
      },
      {
        id: 'come-sb-4',
        type: 'sentence-builder',
        spanishPrompt: 'Los científicos idearon una excelente solución.',
        correctSentence: 'Scientists came up with an excellent solution.',
        tokens: ['Scientists', 'came', 'up', 'with', 'an', 'excellent', 'solution.'],
        explanationEn: 'Phrasal verb "came up with" (idearon).',
        explanationEs: 'Phrasal verb en pasado: "came up with" (idearon).'
      },
      {
        id: 'come-sb-5',
        type: 'sentence-builder',
        spanishPrompt: 'Me topé con un artículo fascinante ayer.',
        correctSentence: 'I came across a fascinating article yesterday.',
        tokens: ['I', 'came', 'across', 'a', 'fascinating', 'article', 'yesterday.'],
        explanationEn: 'Phrasal verb "came across" (encontré por casualidad).',
        explanationEs: '"Came across" significa encontrarse con algo por casualidad.'
      },
      {
        id: 'come-sb-6',
        type: 'sentence-builder',
        spanishPrompt: 'El momento adecuado ha llegado finalmente.',
        correctSentence: 'The right moment has finally come.',
        tokens: ['The', 'right', 'moment', 'has', 'finally', 'come.'],
        explanationEn: 'Present perfect: has finally come.',
        explanationEs: 'Presente perfecto con adverbio: "has finally come".'
      },
      {
        id: 'come-sb-7',
        type: 'sentence-builder',
        spanishPrompt: '¿Vendrás a la ceremonia de graduación?',
        correctSentence: 'Will you come to the graduation ceremony?',
        tokens: ['Will', 'you', 'come', 'to', 'the', 'graduation', 'ceremony?'],
        explanationEn: 'Future question: Will + you + come + destination.',
        explanationEs: 'Pregunta en futuro simple: Will you come to...?'
      },
      {
        id: 'come-sb-8',
        type: 'sentence-builder',
        spanishPrompt: 'El éxito viene con disciplina y perseverancia.',
        correctSentence: 'Success comes with discipline and perseverance.',
        tokens: ['Success', 'comes', 'with', 'discipline', 'and', 'perseverance.'],
        explanationEn: 'Singular abstract noun "Success" + "comes with".',
        explanationEs: 'Sujeto singular abstracto "Success comes with...".'
      },
      {
        id: 'come-sb-9',
        type: 'sentence-builder',
        spanishPrompt: 'Ellos no vinieron porque el vuelo fue cancelado.',
        correctSentence: 'They did not come because the flight was cancelled.',
        tokens: ['They', 'did', 'not', 'come', 'because', 'the', 'flight', 'was', 'cancelled.'],
        explanationEn: 'Past negative: did not come + causal subordinate clause.',
        explanationEs: 'Negación en pasado: "did not come".'
      },
      {
        id: 'come-sb-10',
        type: 'sentence-builder',
        spanishPrompt: 'Bienvenido, nos alegra que pudieras venir.',
        correctSentence: 'Welcome we are glad you could come.',
        tokens: ['Welcome', 'we', 'are', 'glad', 'you', 'could', 'come.'],
        explanationEn: 'Modal complement: could + base verb "come".',
        explanationEs: 'Modal de habilidad/posibilidad: "could come".'
      }
    ]
  },

  // 12. WANT
  {
    verbId: 12,
    questions: [
      {
        id: 'want-mc-1',
        type: 'multiple-choice',
        question: 'Many young professionals ___ to work in sustainable technology sectors.',
        options: ['want', 'wants', 'wanted', 'wanting'],
        correctAnswer: 'want',
        explanationEn: 'Plural subject "Many young professionals" takes the base form "want".',
        explanationEs: 'Sujeto plural en presente simple concuerda con "want".'
      },
      {
        id: 'want-mc-2',
        type: 'multiple-choice',
        question: 'What is the past simple of the regular verb "want"?',
        options: ['wanted', 'want', 'wanten', 'wanting'],
        correctAnswer: 'wanted',
        explanationEn: '"Want" is a regular verb; its past tense is formed by adding -ed ("wanted").',
        explanationEs: '"Want" es un verbo regular, su pasado se forma agregando -ed ("wanted").'
      },
      {
        id: 'want-mc-3',
        type: 'multiple-choice',
        question: 'She ___ to improve her English vocabulary before taking the ICFES test.',
        options: ['wants', 'want', 'wanted', 'wanting'],
        correctAnswer: 'wants',
        explanationEn: 'Third-person singular "She" takes "wants" in present simple.',
        explanationEs: 'Tercera persona singular "She" requiere "wants".'
      },
      {
        id: 'want-mc-4',
        type: 'multiple-choice',
        question: 'The professor wants the students ___ their reports on time.',
        options: ['to submit', 'submit', 'submitting', 'submitted'],
        correctAnswer: 'to submit',
        explanationEn: 'Structure: want + object + to-infinitive ("wants the students to submit").',
        explanationEs: 'Estructura: want + objeto + to + infinitivo ("wants them to submit").'
      },
      {
        id: 'want-mc-5',
        type: 'multiple-choice',
        question: 'What is the Spanish translation of the verb "want"?',
        options: ['Querer / Desear', 'Poder / Saber', 'Dar / Entregar', 'Sentir / Percibir'],
        correctAnswer: 'Querer / Desear',
        explanationEn: '"Want" translates to "querer" or "desear" in Spanish.',
        explanationEs: '"Want" traduce querer o desear.'
      },
      {
        id: 'want-mc-6',
        type: 'multiple-choice',
        question: 'Do you ___ to practice another set of grammar questions?',
        options: ['want', 'wants', 'wanted', 'wanting'],
        correctAnswer: 'want',
        explanationEn: 'After auxiliary "Do", the verb remains in its base form "want".',
        explanationEs: 'Tras el auxiliar "Do", se usa la forma base "want".'
      },
      {
        id: 'want-mc-7',
        type: 'multiple-choice',
        question: 'They ___ to visit the scientific museum last Saturday.',
        options: ['wanted', 'want', 'wants', 'wanting'],
        correctAnswer: 'wanted',
        explanationEn: '"Last Saturday" signals past simple "wanted".',
        explanationEs: '"Last Saturday" requiere el tiempo pasado simple "wanted".'
      },
      {
        id: 'want-mc-8',
        type: 'multiple-choice',
        question: 'He doesn’t ___ to make the same mistake twice.',
        options: ['want', 'wants', 'wanted', 'wanting'],
        correctAnswer: 'want',
        explanationEn: 'Negative present with "doesn’t" takes the base form "want".',
        explanationEs: 'Con el auxiliar negativo "doesn’t", el verbo va en forma base "want".'
      },
      {
        id: 'want-mc-9',
        type: 'multiple-choice',
        question: 'What do you ___ to achieve in your academic career?',
        options: ['want', 'wants', 'wanted', 'wanting'],
        correctAnswer: 'want',
        explanationEn: 'Wh-question: What + do + you + want + to achieve.',
        explanationEs: 'Pregunta en presente simple: What do you want to achieve?'
      },
      {
        id: 'want-mc-10',
        type: 'multiple-choice',
        question: 'We all ___ a clean, safe, and prosperous world for future generations.',
        options: ['want', 'wants', 'wanted', 'to want'],
        correctAnswer: 'want',
        explanationEn: 'Subject "We all" is plural and takes "want".',
        explanationEs: '"We all" es plural y concuerda con "want".'
      },
      // 10 Sentence Builders
      {
        id: 'want-sb-1',
        type: 'sentence-builder',
        spanishPrompt: 'Quiero aprender inglés para viajar por el mundo.',
        correctSentence: 'I want to learn English to travel the world.',
        tokens: ['I', 'want', 'to', 'learn', 'English', 'to', 'travel', 'the', 'world.'],
        explanationEn: 'Structure: want + to learn + purpose infinitive to travel.',
        explanationEs: 'Estructura: want + to-infinitive con infinitivo de propósito.'
      },
      {
        id: 'want-sb-2',
        type: 'sentence-builder',
        spanishPrompt: 'Ella quiere estudiar medicina en la universidad.',
        correctSentence: 'She wants to study medicine at the university.',
        tokens: ['She', 'wants', 'to', 'study', 'medicine', 'at', 'the', 'university.'],
        explanationEn: 'Third-person singular "She" + "wants to study".',
        explanationEs: 'Tercera persona singular: "She wants to study".'
      },
      {
        id: 'want-sb-3',
        type: 'sentence-builder',
        spanishPrompt: '¿Quieres repasar las notas conmigo hoy?',
        correctSentence: 'Do you want to review the notes with me today?',
        tokens: ['Do', 'you', 'want', 'to', 'review', 'the', 'notes', 'with', 'me', 'today?'],
        explanationEn: 'Question: Do you want + to review + complement.',
        explanationEs: 'Pregunta en presente: "Do you want to review...?"'
      },
      {
        id: 'want-sb-4',
        type: 'sentence-builder',
        spanishPrompt: 'Ellos querían participar en el concurso internacional.',
        correctSentence: 'They wanted to participate in the international contest.',
        tokens: ['They', 'wanted', 'to', 'participate', 'in', 'the', 'international', 'contest.'],
        explanationEn: 'Past simple regular verb "wanted to participate".',
        explanationEs: 'Pasado simple: "wanted to participate".'
      },
      {
        id: 'want-sb-5',
        type: 'sentence-builder',
        spanishPrompt: 'El profesor quiere que practiquemos todos los días.',
        correctSentence: 'The teacher wants us to practice every day.',
        tokens: ['The', 'teacher', 'wants', 'us', 'to', 'practice', 'every', 'day.'],
        explanationEn: 'Structure: wants + object pronoun (us) + to practice.',
        explanationEs: 'Estructura: wants + pronombre objeto (us) + to practice.'
      },
      {
        id: 'want-sb-6',
        type: 'sentence-builder',
        spanishPrompt: 'No queremos perder esta gran oportunidad.',
        correctSentence: 'We do not want to lose this great opportunity.',
        tokens: ['We', 'do', 'not', 'want', 'to', 'lose', 'this', 'great', 'opportunity.'],
        explanationEn: 'Negative present: We do not want to lose...',
        explanationEs: 'Negación: "We do not want to lose...".'
      },
      {
        id: 'want-sb-7',
        type: 'sentence-builder',
        spanishPrompt: 'Él siempre quiso ser un gran ingeniero de software.',
        correctSentence: 'He always wanted to be a great software engineer.',
        tokens: ['He', 'always', 'wanted', 'to', 'be', 'a', 'great', 'software', 'engineer.'],
        explanationEn: 'Adverb of frequency + past simple: always wanted to be.',
        explanationEs: 'Adverbio + pasado simple: "always wanted to be".'
      },
      {
        id: 'want-sb-8',
        type: 'sentence-builder',
        spanishPrompt: '¿Qué quieres hacer después de graduarte?',
        correctSentence: 'What do you want to do after graduating?',
        tokens: ['What', 'do', 'you', 'want', 'to', 'do', 'after', 'graduating?'],
        explanationEn: 'Wh-question + preposition with gerund "after graduating".',
        explanationEs: 'Pregunta: "What do you want to do after graduating?".'
      },
      {
        id: 'want-sb-9',
        type: 'sentence-builder',
        spanishPrompt: 'Muchos ciudadanos quieren ciudades más limpias y seguras.',
        correctSentence: 'Many citizens want cleaner and safer cities.',
        tokens: ['Many', 'citizens', 'want', 'cleaner', 'and', 'safer', 'cities.'],
        explanationEn: 'Plural subject + want + comparative adjectives.',
        explanationEs: 'Sujeto plural con adjetivos comparativos.'
      },
      {
        id: 'want-sb-10',
        type: 'sentence-builder',
        spanishPrompt: 'Ella no quiere llegar tarde a la presentación.',
        correctSentence: 'She does not want to arrive late to the presentation.',
        tokens: ['She', 'does', 'not', 'want', 'to', 'arrive', 'late', 'to', 'the', 'presentation.'],
        explanationEn: 'Third person negative: She does not want to arrive late.',
        explanationEs: 'Negación en tercera persona: "She does not want to arrive late".'
      }
    ]
  },

  // 13. LOOK
  {
    verbId: 13,
    questions: [
      {
        id: 'look-mc-1',
        type: 'multiple-choice',
        question: 'Researchers need to ___ into the underlying causes of climate change.',
        options: ['look', 'looks', 'looked', 'looking'],
        correctAnswer: 'look',
        explanationEn: 'Phrasal verb "look into" means to investigate or examine closely.',
        explanationEs: 'El phrasal verb "look into" significa investigar o examinar a fondo.'
      },
      {
        id: 'look-mc-2',
        type: 'multiple-choice',
        question: 'What is the past simple of the regular verb "look"?',
        options: ['looked', 'look', 'lookt', 'looking'],
        correctAnswer: 'looked',
        explanationEn: '"Look" is a regular verb; its past simple form is "looked".',
        explanationEs: '"Look" es un verbo regular cuyo pasado simple es "looked".'
      },
      {
        id: 'look-mc-3',
        type: 'multiple-choice',
        question: 'I am really ___ forward to hearing your presentation.',
        options: ['looking', 'look', 'looked', 'looks'],
        correctAnswer: 'looking',
        explanationEn: 'Idiom: "look forward to + gerund" in continuous tense (looking forward to).',
        explanationEs: '"Look forward to" (esperar con ansias) se usa con frecuencia en presente continuo.'
      },
      {
        id: 'look-mc-4',
        type: 'multiple-choice',
        question: 'What does the phrasal verb "look after" mean?',
        options: ['Cuidar a alguien o algo', 'Buscar en el diccionario', 'Investigar un caso', 'Parecerse a alguien'],
        correctAnswer: 'Cuidar a alguien o algo',
        explanationEn: '"Look after" means to take care of someone or something.',
        explanationEs: '"Look after" significa cuidar o atender a alguien/algo.'
      },
      {
        id: 'look-mc-5',
        type: 'multiple-choice',
        question: 'This statistical data ___ very promising for our environmental study.',
        options: ['looks', 'look', 'looked', 'looking'],
        correctAnswer: 'looks',
        explanationEn: 'Linking verb: "looks + adjective" (parece muy prometedor).',
        explanationEs: '"Looks very promising" expresa apariencia con adjetivo.'
      },
      {
        id: 'look-mc-6',
        type: 'multiple-choice',
        question: 'What is the Spanish translation of the verb "look"?',
        options: ['Mirar / Parecer', 'Tocar / Jugar', 'Hablar / Decir', 'Mover / Trasladar'],
        correctAnswer: 'Mirar / Parecer',
        explanationEn: '"Look" means "mirar" (gaze) and also "parecer" (appear).',
        explanationEs: '"Look" traduce mirar y también parecer/lucir.'
      },
      {
        id: 'look-mc-7',
        type: 'multiple-choice',
        question: 'You can ___ up unknown words in the dictionary during study sessions.',
        options: ['look', 'looks', 'looked', 'looking'],
        correctAnswer: 'look',
        explanationEn: 'Phrasal verb: "look up" (consultar o buscar una palabra en un diccionario/fuente).',
        explanationEs: '"Look up" significa buscar información en un diccionario o índice.'
      },
      {
        id: 'look-mc-8',
        type: 'multiple-choice',
        question: 'She ___ at the architectural diagrams with great attention.',
        options: ['looked', 'look', 'looks', 'looking'],
        correctAnswer: 'looked',
        explanationEn: 'Past simple action with preposition "at": "looked at the diagrams".',
        explanationEs: 'Pasado simple con preposición "at": "looked at".'
      },
      {
        id: 'look-mc-9',
        type: 'multiple-choice',
        question: 'Please ___ at the whiteboard while I explain the mathematical formula.',
        options: ['look', 'looked', 'looks', 'to look'],
        correctAnswer: 'look',
        explanationEn: 'Imperative uses base verb: "Please look at...".',
        explanationEs: 'Modo imperativo con "Please look at...".'
      },
      {
        id: 'look-mc-10',
        type: 'multiple-choice',
        question: 'The future of clean energy ___ bright according to modern analysts.',
        options: ['looks', 'look', 'looked', 'looking'],
        correctAnswer: 'looks',
        explanationEn: 'Singular subject "The future" takes "looks bright".',
        explanationEs: 'Sujeto singular "The future" concuerda con "looks".'
      },
      // 10 Sentence Builders
      {
        id: 'look-sb-1',
        type: 'sentence-builder',
        spanishPrompt: 'Mira este gráfico antes de responder.',
        correctSentence: 'Look at this chart before answering.',
        tokens: ['Look', 'at', 'this', 'chart', 'before', 'answering.'],
        explanationEn: 'Imperative: Look at + object + preposition with gerund.',
        explanationEs: 'Imperativo: "Look at this chart before answering".'
      },
      {
        id: 'look-sb-2',
        type: 'sentence-builder',
        spanishPrompt: 'Ella cuidó a sus hermanos menores ayer.',
        correctSentence: 'She looked after her younger brothers yesterday.',
        tokens: ['She', 'looked', 'after', 'her', 'younger', 'brothers', 'yesterday.'],
        explanationEn: 'Phrasal verb in past: "looked after" (cuidó).',
        explanationEs: 'Phrasal verb en pasado: "looked after" (cuidó de).'
      },
      {
        id: 'look-sb-3',
        type: 'sentence-builder',
        spanishPrompt: 'Espero con ansias verte en la conferencia.',
        correctSentence: 'I look forward to seeing you at the conference.',
        tokens: ['I', 'look', 'forward', 'to', 'seeing', 'you', 'at', 'the', 'conference.'],
        explanationEn: 'Fixed idiom: look forward to + gerund "seeing".',
        explanationEs: '"Look forward to" siempre va seguido de gerundio (-ing).'
      },
      {
        id: 'look-sb-4',
        type: 'sentence-builder',
        spanishPrompt: 'La policía investigará el incidente detenidamente.',
        correctSentence: 'The police will look into the incident thoroughly.',
        tokens: ['The', 'police', 'will', 'look', 'into', 'the', 'incident', 'thoroughly.'],
        explanationEn: 'Future modal "will look into" (investigará).',
        explanationEs: '"Will look into" significa investigará a fondo.'
      },
      {
        id: 'look-sb-5',
        type: 'sentence-builder',
        spanishPrompt: 'Puedes buscar el significado en el diccionario.',
        correctSentence: 'You can look up the meaning in the dictionary.',
        tokens: ['You', 'can', 'look', 'up', 'the', 'meaning', 'in', 'the', 'dictionary.'],
        explanationEn: 'Phrasal verb "look up" (buscar en un texto de referencia).',
        explanationEs: '"Look up" significa buscar información en una referencia.'
      },
      {
        id: 'look-sb-6',
        type: 'sentence-builder',
        spanishPrompt: 'Este informe parece muy completo y detallado.',
        correctSentence: 'This report looks very complete and detailed.',
        tokens: ['This', 'report', 'looks', 'very', 'complete', 'and', 'detailed.'],
        explanationEn: 'Linking verb "looks" + coordinate adjectives.',
        explanationEs: 'Verbo copulativo "looks" seguido de adjetivos.'
      },
      {
        id: 'look-sb-7',
        type: 'sentence-builder',
        spanishPrompt: 'Ellos están buscando una nueva casa en la ciudad.',
        correctSentence: 'They are looking for a new house in the city.',
        tokens: ['They', 'are', 'looking', 'for', 'a', 'new', 'house', 'in', 'the', 'city.'],
        explanationEn: 'Phrasal verb in continuous tense: "looking for" (buscando).',
        explanationEs: '"Looking for" significa buscando.'
      },
      {
        id: 'look-sb-8',
        type: 'sentence-builder',
        spanishPrompt: 'Él miró a su alrededor con curiosidad.',
        correctSentence: 'He looked around with great curiosity.',
        tokens: ['He', 'looked', 'around', 'with', 'great', 'curiosity.'],
        explanationEn: 'Past simple "looked around" (miró a su alrededor).',
        explanationEs: 'Pasado simple: "looked around".'
      },
      {
        id: 'look-sb-9',
        type: 'sentence-builder',
        spanishPrompt: 'El futuro luce muy prometedor para los graduados.',
        correctSentence: 'The future looks very promising for the graduates.',
        tokens: ['The', 'future', 'looks', 'very', 'promising', 'for', 'the', 'graduates.'],
        explanationEn: 'Subject + looks + adjective + prepositional phrase.',
        explanationEs: '"The future looks very promising...".'
      },
      {
        id: 'look-sb-10',
        type: 'sentence-builder',
        spanishPrompt: 'No juzgues a un libro por su portada.',
        correctSentence: 'Do not look only at the surface of things.',
        tokens: ['Do', 'not', 'look', 'only', 'at', 'the', 'surface', 'of', 'things.'],
        explanationEn: 'Negative imperative: Do not look only at...',
        explanationEs: 'Imperativo negativo: "Do not look only at...".'
      }
    ]
  },

  // 14. USE
  {
    verbId: 14,
    questions: [
      {
        id: 'use-mc-1',
        type: 'multiple-choice',
        question: 'Modern institutions ___ digital platforms to facilitate distance education.',
        options: ['use', 'uses', 'used', 'using'],
        correctAnswer: 'use',
        explanationEn: 'Plural subject "Modern institutions" takes the base form "use".',
        explanationEs: 'Sujeto plural requiere la forma base "use" en presente simple.'
      },
      {
        id: 'use-mc-2',
        type: 'multiple-choice',
        question: 'What is the past simple of the regular verb "use"?',
        options: ['used', 'use', 'usen', 'using'],
        correctAnswer: 'used',
        explanationEn: '"Use" is a regular verb; its past form is "used".',
        explanationEs: '"Use" es un verbo regular, su pasado simple es "used".'
      },
      {
        id: 'use-mc-3',
        type: 'multiple-choice',
        question: 'I ___ to live in Medellín when I was a child.',
        options: ['used', 'use', 'uses', 'using'],
        correctAnswer: 'used',
        explanationEn: 'Structure for past habitual states/actions: "used to + infinitive".',
        explanationEs: '"Used to + infinitivo" se usa para hábitos o estados en el pasado (solía vivir).'
      },
      {
        id: 'use-mc-4',
        type: 'multiple-choice',
        question: 'Solar energy can be ___ to generate electricity cleanly.',
        options: ['used', 'use', 'uses', 'using'],
        correctAnswer: 'used',
        explanationEn: 'Passive voice with modal: can be + past participle "used".',
        explanationEs: 'Voz pasiva modal: "can be used" (puede ser usada).'
      },
      {
        id: 'use-mc-5',
        type: 'multiple-choice',
        question: 'What is the Spanish translation of the verb "use"?',
        options: ['Usar / Utilizar', 'Tener / Poseer', 'Dar / Entregar', 'Comenzar / Iniciar'],
        correctAnswer: 'Usar / Utilizar',
        explanationEn: '"Use" translates to "usar" or "utilizar" in Spanish.',
        explanationEs: '"Use" traduce usar o utilizar.'
      },
      {
        id: 'use-mc-6',
        type: 'multiple-choice',
        question: 'He ___ modern software to edit the documentary video.',
        options: ['uses', 'use', 'using', 'used to'],
        correctAnswer: 'uses',
        explanationEn: 'Third-person singular "He" takes "uses" with -s in present simple.',
        explanationEs: 'Tercera persona singular "He" requiere "uses".'
      },
      {
        id: 'use-mc-7',
        type: 'multiple-choice',
        question: 'We should ___ our resources wisely to preserve the ecosystem.',
        options: ['use', 'uses', 'used', 'using'],
        correctAnswer: 'use',
        explanationEn: 'Modal auxiliary "should" is followed by the base verb "use".',
        explanationEs: 'El modal "should" va acompañado de la forma base "use".'
      },
      {
        id: 'use-mc-8',
        type: 'multiple-choice',
        question: 'Are you ___ to waking up early in the morning?',
        options: ['used', 'use', 'uses', 'using'],
        correctAnswer: 'used',
        explanationEn: 'Idiom: "be used to + gerund" (estar acostumbrado a).',
        explanationEs: '"Be used to + gerundio" significa estar acostumbrado a algo.'
      },
      {
        id: 'use-mc-9',
        type: 'multiple-choice',
        question: 'Scientists ___ advanced algorithms to analyze the climate data.',
        options: ['used', 'use', 'using', 'uses'],
        correctAnswer: 'used',
        explanationEn: 'Past simple action describing research methodology: "Scientists used...".',
        explanationEs: 'Descripción de metodología en pasado: "Scientists used...".'
      },
      {
        id: 'use-mc-10',
        type: 'multiple-choice',
        question: 'How do you ___ this electronic device safely?',
        options: ['use', 'uses', 'used', 'using'],
        correctAnswer: 'use',
        explanationEn: 'Question with auxiliary "do" uses base verb "use".',
        explanationEs: 'Pregunta con el auxiliar "do" requiere la forma base "use".'
      },
      // 10 Sentence Builders
      {
        id: 'use-sb-1',
        type: 'sentence-builder',
        spanishPrompt: 'Los estudiantes usan computadoras para investigar.',
        correctSentence: 'Students use computers to conduct research.',
        tokens: ['Students', 'use', 'computers', 'to', 'conduct', 'research.'],
        explanationEn: 'Subject + verb (use) + object + purpose infinitive.',
        explanationEs: 'Sujeto + use + objeto + infinitivo de propósito.'
      },
      {
        id: 'use-sb-2',
        type: 'sentence-builder',
        spanishPrompt: 'Ella solía vivir en una ciudad pequeña.',
        correctSentence: 'She used to live in a small city.',
        tokens: ['She', 'used', 'to', 'live', 'in', 'a', 'small', 'city.'],
        explanationEn: 'Habitual past structure: used to + live.',
        explanationEs: 'Estructura de hábito pasado: "used to live" (solía vivir).'
      },
      {
        id: 'use-sb-3',
        type: 'sentence-builder',
        spanishPrompt: 'Debemos usar menos plástico para proteger el océano.',
        correctSentence: 'We must use less plastic to protect the ocean.',
        tokens: ['We', 'must', 'use', 'less', 'plastic', 'to', 'protect', 'the', 'ocean.'],
        explanationEn: 'Modal "must use" + uncountable quantifier "less" + noun.',
        explanationEs: 'Modal "must use" con cuantificador "less".'
      },
      {
        id: 'use-sb-4',
        type: 'sentence-builder',
        spanishPrompt: 'Él utilizó un método innovador en su experimento.',
        correctSentence: 'He used an innovative method in his experiment.',
        tokens: ['He', 'used', 'an', 'innovative', 'method', 'in', 'his', 'experiment.'],
        explanationEn: 'Past simple "used" + descriptive noun phrase.',
        explanationEs: 'Pasado simple "used" con complemento descriptivo.'
      },
      {
        id: 'use-sb-5',
        type: 'sentence-builder',
        spanishPrompt: 'Estoy acostumbrado a estudiar por la noche.',
        correctSentence: 'I am used to studying late at night.',
        tokens: ['I', 'am', 'used', 'to', 'studying', 'late', 'at', 'night.'],
        explanationEn: 'Expression "be used to + gerund" (studying).',
        explanationEs: '"Am used to studying" expresa estar acostumbrado a estudiar.'
      },
      {
        id: 'use-sb-6',
        type: 'sentence-builder',
        spanishPrompt: 'La energía solar se usa en muchos países.',
        correctSentence: 'Solar energy is used in many modern countries.',
        tokens: ['Solar', 'energy', 'is', 'used', 'in', 'many', 'modern', 'countries.'],
        explanationEn: 'Passive voice: is used in + countries.',
        explanationEs: 'Voz pasiva: "is used in" (se utiliza en).'
      },
      {
        id: 'use-sb-7',
        type: 'sentence-builder',
        spanishPrompt: '¿Cómo usas esta aplicación en tu teléfono?',
        correctSentence: 'How do you use this application on your phone?',
        tokens: ['How', 'do', 'you', 'use', 'this', 'application', 'on', 'your', 'phone?'],
        explanationEn: 'Wh-question: How do you use + object + prepositional phrase.',
        explanationEs: 'Pregunta en presente simple: How do you use...?'
      },
      {
        id: 'use-sb-8',
        type: 'sentence-builder',
        spanishPrompt: 'Los profesores usan herramientas interactivas en el aula.',
        correctSentence: 'Teachers use interactive tools in the modern classroom.',
        tokens: ['Teachers', 'use', 'interactive', 'tools', 'in', 'the', 'modern', 'classroom.'],
        explanationEn: 'Plural subject + use + adjective + noun + location.',
        explanationEs: 'Sujeto plural con "use interactive tools".'
      },
      {
        id: 'use-sb-9',
        type: 'sentence-builder',
        spanishPrompt: 'No uses tu teléfono durante el examen.',
        correctSentence: 'Do not use your mobile phone during the exam.',
        tokens: ['Do', 'not', 'use', 'your', 'mobile', 'phone', 'during', 'the', 'exam.'],
        explanationEn: 'Negative imperative: Do not use + object + preposition "during".',
        explanationEs: 'Imperativo negativo: "Do not use...".'
      },
      {
        id: 'use-sb-10',
        type: 'sentence-builder',
        spanishPrompt: 'Hemos utilizado todos los recursos disponibles.',
        correctSentence: 'We have used all the available resources wisely.',
        tokens: ['We', 'have', 'used', 'all', 'the', 'available', 'resources', 'wisely.'],
        explanationEn: 'Present perfect: have used + object + adverb.',
        explanationEs: 'Presente perfecto con participio "used" y adverbio "wisely".'
      }
    ]
  },

  // 15. FIND
  {
    verbId: 15,
    questions: [
      {
        id: 'find-mc-1',
        type: 'multiple-choice',
        question: 'Researchers hope to ___ effective treatments for rare diseases.',
        options: ['find', 'finds', 'found', 'finding'],
        correctAnswer: 'find',
        explanationEn: 'After the infinitive marker "to", use base form "find".',
        explanationEs: 'Tras el marcador de infinitivo "to", se usa la forma base "find".'
      },
      {
        id: 'find-mc-2',
        type: 'multiple-choice',
        question: 'What is the past simple and past participle of "find"?',
        options: ['found', 'finded', 'finds', 'founden'],
        correctAnswer: 'found',
        explanationEn: 'The irregular verb "find" has the past and participle form "found".',
        explanationEs: 'El pasado y participio de "find" es "found".'
      },
      {
        id: 'find-mc-3',
        type: 'multiple-choice',
        question: 'She ___ a valuable historical document in the university archives.',
        options: ['found', 'find', 'finds', 'finding'],
        correctAnswer: 'found',
        explanationEn: 'Completed past action: "She found a valuable historical document".',
        explanationEs: 'Acción completada en pasado: "She found".'
      },
      {
        id: 'find-mc-4',
        type: 'multiple-choice',
        question: 'What does the phrasal verb "find out" mean?',
        options: ['Descubrir / Enterarse de información', 'Perder la calma', 'Buscar en el mapa', 'Regalar algo'],
        correctAnswer: 'Descubrir / Enterarse de información',
        explanationEn: '"Find out" means to discover a fact or gain knowledge about something.',
        explanationEs: '"Find out" significa descubrir o enterarse de información.'
      },
      {
        id: 'find-mc-5',
        type: 'multiple-choice',
        question: 'Many students ___ English grammar challenging at first.',
        options: ['find', 'finds', 'found', 'finding'],
        correctAnswer: 'find',
        explanationEn: 'Structure: find + noun + adjective (find English grammar challenging = considerar desafiante).',
        explanationEs: 'Estructura: find + sustantivo + adjetivo (encontrar/considerar desafiante).'
      },
      {
        id: 'find-mc-6',
        type: 'multiple-choice',
        question: 'What is the Spanish translation of the verb "find"?',
        options: ['Encontrar / Descubrir', 'Perder / Extraviar', 'Pagar / Cancelar', 'Sentar / Ubicar'],
        correctAnswer: 'Encontrar / Descubrir',
        explanationEn: '"Find" translates to "encontrar" or "descubrir".',
        explanationEs: '"Find" traduce encontrar o descubrir.'
      },
      {
        id: 'find-mc-7',
        type: 'multiple-choice',
        question: 'Have you ___ the keys to the laboratory yet?',
        options: ['found', 'find', 'finds', 'finding'],
        correctAnswer: 'found',
        explanationEn: 'Present perfect with "yet": Have you + past participle "found".',
        explanationEs: 'Presente perfecto: Have you + participio "found".'
      },
      {
        id: 'find-mc-8',
        type: 'multiple-choice',
        question: 'I couldn’t ___ the exact reference in the bibliography.',
        options: ['find', 'found', 'finds', 'finding'],
        correctAnswer: 'find',
        explanationEn: 'After modal auxiliary "couldn’t", use base verb "find".',
        explanationEs: 'Tras el modal "couldn’t", el verbo va en forma base "find".'
      },
      {
        id: 'find-mc-9',
        type: 'multiple-choice',
        question: 'Recent scientific surveys ___ that biodiversity is declining rapidly.',
        options: ['find', 'finds', 'found', 'to find'],
        correctAnswer: 'find',
        explanationEn: 'Reporting verb with plural subject "Recent scientific surveys find that...".',
        explanationEs: 'Verbo de reporte con sujeto plural: "surveys find that...".'
      },
      {
        id: 'find-mc-10',
        type: 'multiple-choice',
        question: 'We need to ___ a practical solution to this urban transit problem.',
        options: ['find', 'finds', 'found', 'finding'],
        correctAnswer: 'find',
        explanationEn: 'Infinitive after need: "need to find a solution".',
        explanationEs: '"Need to find" (necesitar encontrar).'
      },
      // 10 Sentence Builders
      {
        id: 'find-sb-1',
        type: 'sentence-builder',
        spanishPrompt: 'Encontré información muy útil en internet.',
        correctSentence: 'I found very useful information on the internet.',
        tokens: ['I', 'found', 'very', 'useful', 'information', 'on', 'the', 'internet.'],
        explanationEn: 'Past simple "found" + adjective phrase + preposition "on the internet".',
        explanationEs: 'Pasado simple "found" con preposición "on the internet".'
      },
      {
        id: 'find-sb-2',
        type: 'sentence-builder',
        spanishPrompt: 'Ella descubrió la verdad sobre el experimento.',
        correctSentence: 'She found out the truth about the experiment.',
        tokens: ['She', 'found', 'out', 'the', 'truth', 'about', 'the', 'experiment.'],
        explanationEn: 'Phrasal verb in past: "found out" (descubrió/se enteró).',
        explanationEs: 'Phrasal verb en pasado: "found out" (descubrió).'
      },
      {
        id: 'find-sb-3',
        type: 'sentence-builder',
        spanishPrompt: 'Los estudiantes encuentran este tema muy interesante.',
        correctSentence: 'Students find this topic very interesting and relevant.',
        tokens: ['Students', 'find', 'this', 'topic', 'very', 'interesting', 'and', 'relevant.'],
        explanationEn: 'Structure: find + object + predicate adjectives.',
        explanationEs: 'Estructura: find + objeto + adjetivos predicativos.'
      },
      {
        id: 'find-sb-4',
        type: 'sentence-builder',
        spanishPrompt: 'Debemos encontrar una manera de reducir los costos.',
        correctSentence: 'We must find a way to reduce costs.',
        tokens: ['We', 'must', 'find', 'a', 'way', 'to', 'reduce', 'costs.'],
        explanationEn: 'Modal "must find" + collocation "a way to reduce".',
        explanationEs: 'Modal con colocación: "find a way to reduce".'
      },
      {
        id: 'find-sb-5',
        type: 'sentence-builder',
        spanishPrompt: '¿Pudiste encontrar tus documentos importantes ayer?',
        correctSentence: 'Could you find your important documents yesterday?',
        tokens: ['Could', 'you', 'find', 'your', 'important', 'documents', 'yesterday?'],
        explanationEn: 'Modal past question: Could you find + object + time.',
        explanationEs: 'Pregunta en pasado modal: "Could you find...?"'
      },
      {
        id: 'find-sb-6',
        type: 'sentence-builder',
        spanishPrompt: 'Ellos no pudieron encontrar un lugar para estacionar.',
        correctSentence: 'They could not find a place to park.',
        tokens: ['They', 'could', 'not', 'find', 'a', 'place', 'to', 'park.'],
        explanationEn: 'Negative modal: could not find + noun phrase + infinitive.',
        explanationEs: 'Modal negativo: "could not find".'
      },
      {
        id: 'find-sb-7',
        type: 'sentence-builder',
        spanishPrompt: 'Científicos encontraron nuevas especies en la selva.',
        correctSentence: 'Scientists found new species in the rainforest.',
        tokens: ['Scientists', 'found', 'new', 'species', 'in', 'the', 'rainforest.'],
        explanationEn: 'Past simple reporting: Scientists found + object + location.',
        explanationEs: 'Reporte científico en pasado simple: "Scientists found...".'
      },
      {
        id: 'find-sb-8',
        type: 'sentence-builder',
        spanishPrompt: 'Es difícil encontrar tiempo libre durante los exámenes.',
        correctSentence: 'It is hard to find free time during exams.',
        tokens: ['It', 'is', 'hard', 'to', 'find', 'free', 'time', 'during', 'exams.'],
        explanationEn: 'Dummy subject: "It is hard to find..." + preposition "during".',
        explanationEs: 'Estructura impersonal: "It is hard to find...".'
      },
      {
        id: 'find-sb-9',
        type: 'sentence-builder',
        spanishPrompt: '¿Has encontrado una solución al problema?',
        correctSentence: 'Have you found a solution to the problem?',
        tokens: ['Have', 'you', 'found', 'a', 'solution', 'to', 'the', 'problem?'],
        explanationEn: 'Present perfect: Have you found + noun + preposition "to".',
        explanationEs: 'Presente perfecto: "Have you found a solution to...?"'
      },
      {
        id: 'find-sb-10',
        type: 'sentence-builder',
        spanishPrompt: 'Ella siempre encuentra formas de motivar a su equipo.',
        correctSentence: 'She always finds ways to motivate her team.',
        tokens: ['She', 'always', 'finds', 'ways', 'to', 'motivate', 'her', 'team.'],
        explanationEn: 'Third person singular "finds" + frequency adverb "always".',
        explanationEs: 'Tercera persona singular: "She always finds...".'
      }
    ]
  },

  // 16. GIVE
  {
    verbId: 16,
    questions: [
      {
        id: 'give-mc-1',
        type: 'multiple-choice',
        question: 'Mentors ___ constructive feedback to help students improve.',
        options: ['give', 'gives', 'gave', 'given'],
        correctAnswer: 'give',
        explanationEn: 'Plural subject "Mentors" takes base form "give" in present simple.',
        explanationEs: 'Sujeto plural concuerda con la forma base "give".'
      },
      {
        id: 'give-mc-2',
        type: 'multiple-choice',
        question: 'What is the past simple of the verb "give"?',
        options: ['gave', 'given', 'gived', 'gives'],
        correctAnswer: 'gave',
        explanationEn: 'The past simple of "give" is "gave".',
        explanationEs: 'El pasado simple de "give" es "gave".'
      },
      {
        id: 'give-mc-3',
        type: 'multiple-choice',
        question: 'What is the past participle of the verb "give"?',
        options: ['given', 'gave', 'gived', 'giving'],
        correctAnswer: 'given',
        explanationEn: 'The past participle of "give" is "given" (e.g., have given an overview).',
        explanationEs: 'El participio pasado de "give" es "given".'
      },
      {
        id: 'give-mc-4',
        type: 'multiple-choice',
        question: 'The professor ___ an inspiring speech during the opening ceremony.',
        options: ['gave', 'give', 'given', 'gives'],
        correctAnswer: 'gave',
        explanationEn: 'Past simple collocation: "gave a speech" (dio un discurso).',
        explanationEs: 'Colocación en pasado: "gave a speech" (pronunció un discurso).'
      },
      {
        id: 'give-mc-5',
        type: 'multiple-choice',
        question: 'Never ___ up on your academic and career aspirations.',
        options: ['give', 'gave', 'given', 'gives'],
        correctAnswer: 'give',
        explanationEn: 'Imperative idiom: "give up" (rendirse/abandonar).',
        explanationEs: 'Modismo imperativo: "give up" (rendirse).'
      },
      {
        id: 'give-mc-6',
        type: 'multiple-choice',
        question: 'What is the Spanish translation of "give"?',
        options: ['Dar / Proporcionar', 'Tomar / Llevar', 'Ver / Observar', 'Estar / Ser'],
        correctAnswer: 'Dar / Proporcionar',
        explanationEn: '"Give" translates to "dar" or "proporcionar".',
        explanationEs: '"Give" traduce dar o proporcionar.'
      },
      {
        id: 'give-mc-7',
        type: 'multiple-choice',
        question: 'This chart ___ a clear summary of renewable energy consumption.',
        options: ['gives', 'give', 'gave', 'given'],
        correctAnswer: 'gives',
        explanationEn: 'IELTS Academic reporting: "This chart gives a clear summary..." (singular subject).',
        explanationEs: 'Estructura de reporte para IELTS: "This chart gives a summary...".'
      },
      {
        id: 'give-mc-8',
        type: 'multiple-choice',
        question: 'They have ___ substantial financial support to the local hospital.',
        options: ['given', 'gave', 'give', 'giving'],
        correctAnswer: 'given',
        explanationEn: 'Present perfect: have + past participle "given".',
        explanationEs: 'Presente perfecto: have + participio "given".'
      },
      {
        id: 'give-mc-9',
        type: 'multiple-choice',
        question: 'Can you ___ me a concrete example to illustrate your argument?',
        options: ['give', 'gave', 'given', 'gives'],
        correctAnswer: 'give',
        explanationEn: 'Modal "Can" takes the base verb "give" (give someone an example).',
        explanationEs: 'El modal "Can" va seguido de la forma base "give".'
      },
      {
        id: 'give-mc-10',
        type: 'multiple-choice',
        question: 'Technological innovations ___ rise to new economic sectors.',
        options: ['give', 'gives', 'gave', 'giving'],
        correctAnswer: 'give',
        explanationEn: 'Idiom: "give rise to" (dar lugar a / originar).',
        explanationEs: 'Expresión académica: "give rise to" (dar origen a).'
      },
      // 10 Sentence Builders
      {
        id: 'give-sb-1',
        type: 'sentence-builder',
        spanishPrompt: 'El profesor nos dio instrucciones claras.',
        correctSentence: 'The teacher gave us clear instructions.',
        tokens: ['The', 'teacher', 'gave', 'us', 'clear', 'instructions.'],
        explanationEn: 'Past simple "gave" + indirect object (us) + direct object.',
        explanationEs: 'Pasado simple "gave" con objeto indirecto y directo.'
      },
      {
        id: 'give-sb-2',
        type: 'sentence-builder',
        spanishPrompt: 'Nunca te rindas en la búsqueda de tus sueños.',
        correctSentence: 'Never give up on pursuing your dreams.',
        tokens: ['Never', 'give', 'up', 'on', 'pursuing', 'your', 'dreams.'],
        explanationEn: 'Imperative with "give up on" + gerund "pursuing".',
        explanationEs: 'Imperativo con "give up on" seguido de gerundio.'
      },
      {
        id: 'give-sb-3',
        type: 'sentence-builder',
        spanishPrompt: 'El gráfico da una visión general de la población.',
        correctSentence: 'The graph gives an overview of the population.',
        tokens: ['The', 'graph', 'gives', 'an', 'overview', 'of', 'the', 'population.'],
        explanationEn: 'IELTS Academic phrasing: "The graph gives an overview of...".',
        explanationEs: 'Frase académica para IELTS: "The graph gives an overview of...".'
      },
      {
        id: 'give-sb-4',
        type: 'sentence-builder',
        spanishPrompt: '¿Puedes darme un ejemplo para entender mejor?',
        correctSentence: 'Can you give me an example to understand better?',
        tokens: ['Can', 'you', 'give', 'me', 'an', 'example', 'to', 'understand', 'better?'],
        explanationEn: 'Modal request: Can you give me + noun + infinitive.',
        explanationEs: 'Petición con modal: "Can you give me an example...?"'
      },
      {
        id: 'give-sb-5',
        type: 'sentence-builder',
        spanishPrompt: 'Ellos han dado su apoyo a la iniciativa verde.',
        correctSentence: 'They have given their support to the green initiative.',
        tokens: ['They', 'have', 'given', 'their', 'support', 'to', 'the', 'green', 'initiative.'],
        explanationEn: 'Present perfect: have given + object + preposition "to".',
        explanationEs: 'Presente perfecto con el participio "given".'
      },
      {
        id: 'give-sb-6',
        type: 'sentence-builder',
        spanishPrompt: 'Ella siempre da lo mejor de sí en cada prueba.',
        correctSentence: 'She always gives her best in every test.',
        tokens: ['She', 'always', 'gives', 'her', 'best', 'in', 'every', 'test.'],
        explanationEn: 'Third person "gives her best" + frequency adverb.',
        explanationEs: 'Tercera persona singular "gives her best".'
      },
      {
        id: 'give-sb-7',
        type: 'sentence-builder',
        spanishPrompt: 'Esta situación da lugar a nuevas oportunidades.',
        correctSentence: 'This situation gives rise to new opportunities.',
        tokens: ['This', 'situation', 'gives', 'rise', 'to', 'new', 'opportunities.'],
        explanationEn: 'Academic collocation: "gives rise to" (origina/da paso a).',
        explanationEs: 'Colocación académica: "gives rise to".'
      },
      {
        id: 'give-sb-8',
        type: 'sentence-builder',
        spanishPrompt: 'Debemos dar prioridad a la educación pública.',
        correctSentence: 'We must give priority to public education.',
        tokens: ['We', 'must', 'give', 'priority', 'to', 'public', 'education.'],
        explanationEn: 'Collocation: "give priority to" + noun.',
        explanationEs: 'Colocación formal: "give priority to" (dar prioridad a).'
      },
      {
        id: 'give-sb-9',
        type: 'sentence-builder',
        spanishPrompt: 'El tutor le dio consejos valiosos para su carrera.',
        correctSentence: 'The tutor gave him valuable advice for his career.',
        tokens: ['The', 'tutor', 'gave', 'him', 'valuable', 'advice', 'for', 'his', 'career.'],
        explanationEn: 'Note: "advice" is uncountable (valuable advice, not an advice).',
        explanationEs: '"Advice" es incontable: "gave him valuable advice".'
      },
      {
        id: 'give-sb-10',
        type: 'sentence-builder',
        spanishPrompt: 'Ella dio un discurso excelente en la ceremonia.',
        correctSentence: 'She gave an excellent speech at the ceremony.',
        tokens: ['She', 'gave', 'an', 'excellent', 'speech', 'at', 'the', 'ceremony.'],
        explanationEn: 'Past simple collocation: "gave a speech at the ceremony".',
        explanationEs: 'Colocación en pasado: "gave a speech".'
      }
    ]
  },

  // 17. TELL
  {
    verbId: 17,
    questions: [
      {
        id: 'tell-mc-1',
        type: 'multiple-choice',
        question: 'The professor ___ us that the midterm exam would be rescheduled.',
        options: ['told', 'said', 'spoke', 'talked'],
        correctAnswer: 'told',
        explanationEn: 'Use "tell" (past "told") when there is an indirect personal object ("told us").',
        explanationEs: 'Se usa "tell/told" cuando hay un objeto indirecto personal ("told us").'
      },
      {
        id: 'tell-mc-2',
        type: 'multiple-choice',
        question: 'What is the past simple and past participle of "tell"?',
        options: ['told', 'telled', 'tolds', 'telling'],
        correctAnswer: 'told',
        explanationEn: 'The irregular verb "tell" has the past simple and participle form "told".',
        explanationEs: 'El pasado y participio de "tell" es "told".'
      },
      {
        id: 'tell-mc-3',
        type: 'multiple-choice',
        question: 'It is always best to ___ the truth during formal interviews.',
        options: ['tell', 'say', 'speak', 'talk'],
        correctAnswer: 'tell',
        explanationEn: 'Fixed collocation: "tell the truth" (decir la verdad).',
        explanationEs: 'Colocación fija: "tell the truth" (decir la verdad).'
      },
      {
        id: 'tell-mc-4',
        type: 'multiple-choice',
        question: 'Can you ___ the difference between these two scientific concepts?',
        options: ['tell', 'say', 'speak', 'talk'],
        correctAnswer: 'tell',
        explanationEn: 'Idiom: "tell the difference" (distinguir la diferencia).',
        explanationEs: 'Modismo: "tell the difference" (notar o distinguir la diferencia).'
      },
      {
        id: 'tell-mc-5',
        type: 'multiple-choice',
        question: 'What is the Spanish translation of the verb "tell"?',
        options: ['Decir / Contar / Informar', 'Pensar / Razonar', 'Mirar / Ver', 'Traer / Generar'],
        correctAnswer: 'Decir / Contar / Informar',
        explanationEn: '"Tell" translates to "decir", "contar" o "informar".',
        explanationEs: '"Tell" traduce decir, contar o relatar.'
      },
      {
        id: 'tell-mc-6',
        type: 'multiple-choice',
        question: 'She ___ me about her exciting experience studying in Germany.',
        options: ['told', 'said', 'spoke', 'telling'],
        correctAnswer: 'told',
        explanationEn: 'Structure: tell + person + about something ("told me about").',
        explanationEs: 'Estructura: told + persona + about algo.'
      },
      {
        id: 'tell-mc-7',
        type: 'multiple-choice',
        question: 'Please ___ him to submit the assignment before midnight.',
        options: ['tell', 'say', 'told', 'to tell'],
        correctAnswer: 'tell',
        explanationEn: 'Imperative structure: tell + person + to-infinitive.',
        explanationEs: 'Imperativo: tell + persona + to-infinitivo.'
      },
      {
        id: 'tell-mc-8',
        type: 'multiple-choice',
        question: 'Only time will ___ whether the economic strategy succeeds.',
        options: ['tell', 'say', 'speak', 'talk'],
        correctAnswer: 'tell',
        explanationEn: 'Idiomatic expression: "Only time will tell" (Solo el tiempo lo dirá).',
        explanationEs: 'Expresión idiomática: "Only time will tell" (Solo el tiempo dirá).'
      },
      {
        id: 'tell-mc-9',
        type: 'multiple-choice',
        question: 'He ___ an engaging story about his travels across the Andes.',
        options: ['told', 'said', 'spoke', 'tells'],
        correctAnswer: 'told',
        explanationEn: 'Collocation: "tell a story" (past: told a story).',
        explanationEs: 'Colocación: "tell a story" (contar una historia).'
      },
      {
        id: 'tell-mc-10',
        type: 'multiple-choice',
        question: 'Have you ___ your parents about the scholarship award?',
        options: ['told', 'said', 'tell', 'speaking'],
        correctAnswer: 'told',
        explanationEn: 'Present perfect with direct listener: Have you told your parents...',
        explanationEs: 'Presente perfecto con interlocutor directo: "Have you told...?".'
      },
      // 10 Sentence Builders
      {
        id: 'tell-sb-1',
        type: 'sentence-builder',
        spanishPrompt: 'Ella me dijo la verdad sobre el proyecto.',
        correctSentence: 'She told me the truth about the project.',
        tokens: ['She', 'told', 'me', 'the', 'truth', 'about', 'the', 'project.'],
        explanationEn: 'Past simple "told" + pronoun "me" + collocation "the truth".',
        explanationEs: 'Pasado simple "told me the truth".'
      },
      {
        id: 'tell-sb-2',
        type: 'sentence-builder',
        spanishPrompt: '¿Puedes notar la diferencia entre estos dos colores?',
        correctSentence: 'Can you tell the difference between these two colors?',
        tokens: ['Can', 'you', 'tell', 'the', 'difference', 'between', 'these', 'two', 'colors?'],
        explanationEn: 'Idiom: "tell the difference between...".',
        explanationEs: 'Modismo: "tell the difference between" (distinguir la diferencia).'
      },
      {
        id: 'tell-sb-3',
        type: 'sentence-builder',
        spanishPrompt: 'El profesor nos dijo que estudiáramos para el examen.',
        correctSentence: 'The teacher told us to study for the exam.',
        tokens: ['The', 'teacher', 'told', 'us', 'to', 'study', 'for', 'the', 'exam.'],
        explanationEn: 'Reported imperative: told + object (us) + to study.',
        explanationEs: 'Estilo indirecto: "told us to study".'
      },
      {
        id: 'tell-sb-4',
        type: 'sentence-builder',
        spanishPrompt: 'Él me contó una historia muy inspiradora ayer.',
        correctSentence: 'He told me a very inspiring story yesterday.',
        tokens: ['He', 'told', 'me', 'a', 'very', 'inspiring', 'story', 'yesterday.'],
        explanationEn: 'Collocation "tell a story" in past simple: "told me a story".',
        explanationEs: 'Colocación: "told me an inspiring story".'
      },
      {
        id: 'tell-sb-5',
        type: 'sentence-builder',
        spanishPrompt: 'Diles que la reunión comenzará a las diez.',
        correctSentence: 'Tell them that the meeting will start at ten.',
        tokens: ['Tell', 'them', 'that', 'the', 'meeting', 'will', 'start', 'at', 'ten.'],
        explanationEn: 'Imperative: Tell + them + that-clause.',
        explanationEs: 'Imperativo: "Tell them that...".'
      },
      {
        id: 'tell-sb-6',
        type: 'sentence-builder',
        spanishPrompt: 'Solo el tiempo dirá el resultado final.',
        correctSentence: 'Only time will tell the final outcome.',
        tokens: ['Only', 'time', 'will', 'tell', 'the', 'final', 'outcome.'],
        explanationEn: 'Idiomatic expression: "Only time will tell...".',
        explanationEs: 'Expresión idiomática: "Only time will tell".'
      },
      {
        id: 'tell-sb-7',
        type: 'sentence-builder',
        spanishPrompt: 'No le digas a nadie sobre esta sorpresa.',
        correctSentence: 'Do not tell anyone about this surprise.',
        tokens: ['Do', 'not', 'tell', 'anyone', 'about', 'this', 'surprise.'],
        explanationEn: 'Negative imperative: Do not tell + anyone + about.',
        explanationEs: 'Imperativo negativo: "Do not tell anyone about...".'
      },
      {
        id: 'tell-sb-8',
        type: 'sentence-builder',
        spanishPrompt: 'Ella siempre dice lo que piensa con respeto.',
        correctSentence: 'She always tells what she thinks with respect.',
        tokens: ['She', 'always', 'tells', 'what', 'she', 'thinks', 'with', 'respect.'],
        explanationEn: 'Third person "tells" + subordinate clause + adverbial phrase.',
        explanationEs: 'Tercera persona singular "tells".'
      },
      {
        id: 'tell-sb-9',
        type: 'sentence-builder',
        spanishPrompt: '¿Le has contado a tu supervisor sobre los resultados?',
        correctSentence: 'Have you told your supervisor about the results?',
        tokens: ['Have', 'you', 'told', 'your', 'supervisor', 'about', 'the', 'results?'],
        explanationEn: 'Present perfect question: Have you told + person + about.',
        explanationEs: 'Pregunta en presente perfecto: "Have you told your supervisor...?"'
      },
      {
        id: 'tell-sb-10',
        type: 'sentence-builder',
        spanishPrompt: 'Las estadísticas nos dicen mucho sobre las tendencias actuales.',
        correctSentence: 'Statistics tell us a lot about current trends.',
        tokens: ['Statistics', 'tell', 'us', 'a', 'lot', 'about', 'current', 'trends.'],
        explanationEn: 'Academic subject "Statistics" + tell us + preposition "about".',
        explanationEs: 'Sujeto académico: "Statistics tell us a lot about...".'
      }
    ]
  },

  // 18. WORK
  {
    verbId: 18,
    questions: [
      {
        id: 'work-mc-1',
        type: 'multiple-choice',
        question: 'Environmental engineers ___ diligently to create sustainable solutions.',
        options: ['work', 'works', 'worked', 'working'],
        correctAnswer: 'work',
        explanationEn: 'Plural subject "Environmental engineers" takes base form "work".',
        explanationEs: 'Sujeto plural concuerda con "work" en presente simple.'
      },
      {
        id: 'work-mc-2',
        type: 'multiple-choice',
        question: 'What is the past simple of the regular verb "work"?',
        options: ['worked', 'work', 'worken', 'working'],
        correctAnswer: 'worked',
        explanationEn: '"Work" is a regular verb; its past simple form is "worked" /wɜːrkt/.',
        explanationEs: '"Work" es regular y su pasado se escribe "worked".'
      },
      {
        id: 'work-mc-3',
        type: 'multiple-choice',
        question: 'She ___ as a senior researcher at the pharmaceutical laboratory.',
        options: ['works', 'work', 'working', 'worked to'],
        correctAnswer: 'works',
        explanationEn: 'Third-person singular "She" takes "works" in present simple.',
        explanationEs: 'Tercera persona singular "She" requiere "works".'
      },
      {
        id: 'work-mc-4',
        type: 'multiple-choice',
        question: 'What does the phrasal verb "work out" mean in an academic/problem context?',
        options: ['Resolver o solucionar un problema', 'Trabajar horas extras', 'Abandonar una tarea', 'Firmar un contrato'],
        correctAnswer: 'Resolver o solucionar un problema',
        explanationEn: '"Work out" can mean to calculate, solve, or resolve a complex issue.',
        explanationEs: '"Work out" significa solucionar o calcular un problema (también hacer ejercicio físico).'
      },
      {
        id: 'work-mc-5',
        type: 'multiple-choice',
        question: 'The new experimental strategy ___ exceptionally well in clinical trials.',
        options: ['worked', 'work', 'works', 'working'],
        correctAnswer: 'worked',
        explanationEn: '"Work" also means to function effectively (worked well = funcionó bien).',
        explanationEs: '"Work" también significa funcionar con éxito (worked well).'
      },
      {
        id: 'work-mc-6',
        type: 'multiple-choice',
        question: 'What is the Spanish translation of the verb "work"?',
        options: ['Trabajar / Funcionar', 'Caminar / Moverse', 'Llamar / Convocar', 'Decir / Explicar'],
        correctAnswer: 'Trabajar / Funcionar',
        explanationEn: '"Work" translates to "trabajar" and "funcionar" in Spanish.',
        explanationEs: '"Work" traduce tanto trabajar como funcionar.'
      },
      {
        id: 'work-mc-7',
        type: 'multiple-choice',
        question: 'Students have ___ together on the community development project.',
        options: ['worked', 'work', 'works', 'working'],
        correctAnswer: 'worked',
        explanationEn: 'Present perfect: have + past participle "worked".',
        explanationEs: 'Presente perfecto con el participio regular "worked".'
      },
      {
        id: 'work-mc-8',
        type: 'multiple-choice',
        question: 'Does this laboratory equipment ___ properly?',
        options: ['work', 'works', 'worked', 'working'],
        correctAnswer: 'work',
        explanationEn: 'In questions with auxiliary "Does", the main verb returns to base form "work".',
        explanationEs: 'Con el auxiliar "Does", el verbo vuelve a su forma base "work".'
      },
      {
        id: 'work-mc-9',
        type: 'multiple-choice',
        question: 'We need to ___ hard to achieve a high band score on IELTS.',
        options: ['work', 'works', 'worked', 'working'],
        correctAnswer: 'work',
        explanationEn: 'Infinitive after need: "need to work hard".',
        explanationEs: '"Need to work" (necesitamos trabajar duro).'
      },
      {
        id: 'work-mc-10',
        type: 'multiple-choice',
        question: 'He ___ remotely for an international software consultancy.',
        options: ['works', 'work', 'working', 'to work'],
        correctAnswer: 'works',
        explanationEn: 'Third-person singular "He works remotely".',
        explanationEs: '"He works remotely" (trabaja de forma remota).'
      },
      // 10 Sentence Builders
      {
        id: 'work-sb-1',
        type: 'sentence-builder',
        spanishPrompt: 'Ella trabaja como ingeniera en una empresa internacional.',
        correctSentence: 'She works as an engineer at an international company.',
        tokens: ['She', 'works', 'as', 'an', 'engineer', 'at', 'an', 'international', 'company.'],
        explanationEn: 'Profession structure: works as an engineer at + place.',
        explanationEs: 'Estructura para profesiones: "works as an engineer at...".'
      },
      {
        id: 'work-sb-2',
        type: 'sentence-builder',
        spanishPrompt: 'Nosotros trabajamos duro para aprobar el examen.',
        correctSentence: 'We worked hard to pass the exam.',
        tokens: ['We', 'worked', 'hard', 'to', 'pass', 'the', 'exam.'],
        explanationEn: 'Collocation in past: "worked hard to pass".',
        explanationEs: 'Colocación en pasado: "worked hard to pass".'
      },
      {
        id: 'work-sb-3',
        type: 'sentence-builder',
        spanishPrompt: 'Esta solución innovadora funcionó perfectamente.',
        correctSentence: 'This innovative solution worked perfectly.',
        tokens: ['This', 'innovative', 'solution', 'worked', 'perfectly.'],
        explanationEn: '"Work" in the sense of function: "worked perfectly".',
        explanationEs: '"Worked perfectly" en sentido de funcionar con éxito.'
      },
      {
        id: 'work-sb-4',
        type: 'sentence-builder',
        spanishPrompt: 'Podemos resolver este problema complejo juntos.',
        correctSentence: 'We can work out this complex problem together.',
        tokens: ['We', 'can', 'work', 'out', 'this', 'complex', 'problem', 'together.'],
        explanationEn: 'Phrasal verb "work out" (resolver).',
        explanationEs: 'Phrasal verb "work out" (resolver un problema complejo).'
      },
      {
        id: 'work-sb-5',
        type: 'sentence-builder',
        spanishPrompt: 'Él ha trabajado en esta universidad durante diez años.',
        correctSentence: 'He has worked at this university for ten years.',
        tokens: ['He', 'has', 'worked', 'at', 'this', 'university', 'for', 'ten', 'years.'],
        explanationEn: 'Present perfect with duration preposition "for ten years".',
        explanationEs: 'Presente perfecto con preposición de duración "for".'
      },
      {
        id: 'work-sb-6',
        type: 'sentence-builder',
        spanishPrompt: 'Muchos profesionales prefieren trabajar de forma remota hoy.',
        correctSentence: 'Many professionals prefer to work remotely today.',
        tokens: ['Many', 'professionals', 'prefer', 'to', 'work', 'remotely', 'today.'],
        explanationEn: 'Prefer + infinitive: prefer to work remotely.',
        explanationEs: 'Estructura: "prefer to work remotely".'
      },
      {
        id: 'work-sb-7',
        type: 'sentence-builder',
        spanishPrompt: 'El equipo está trabajando en un nuevo proyecto.',
        correctSentence: 'The team is working on a new project.',
        tokens: ['The', 'team', 'is', 'working', 'on', 'a', 'new', 'project.'],
        explanationEn: 'Continuous aspect with preposition "on": working on a project.',
        explanationEs: 'Presente continuo con la preposición "on": "working on".'
      },
      {
        id: 'work-sb-8',
        type: 'sentence-builder',
        spanishPrompt: 'La computadora no está funcionando correctamente hoy.',
        correctSentence: 'The computer is not working properly today.',
        tokens: ['The', 'computer', 'is', 'not', 'working', 'properly', 'today.'],
        explanationEn: 'Negative continuous: is not working properly.',
        explanationEs: 'Sentido de funcionamiento: "is not working properly".'
      },
      {
        id: 'work-sb-9',
        type: 'sentence-builder',
        spanishPrompt: 'Ellos trabajan en equipo para lograr sus metas.',
        correctSentence: 'They work in teams to achieve their goals.',
        tokens: ['They', 'work', 'in', 'teams', 'to', 'achieve', 'their', 'goals.'],
        explanationEn: 'Subject + work in teams + purpose infinitive.',
        explanationEs: 'Sujeto + "work in teams to achieve...".'
      },
      {
        id: 'work-sb-10',
        type: 'sentence-builder',
        spanishPrompt: 'Ella hace ejercicio en el gimnasio todas las mañanas.',
        correctSentence: 'She works out at the gym every morning.',
        tokens: ['She', 'works', 'out', 'at', 'the', 'gym', 'every', 'morning.'],
        explanationEn: 'Phrasal verb "works out" (hace ejercicio físico).',
        explanationEs: '"Works out" significa hacer ejercicio físico.'
      }
    ]
  },

  // 19. CALL
  {
    verbId: 19,
    questions: [
      {
        id: 'call-mc-1',
        type: 'multiple-choice',
        question: 'Environmental activists ___ for urgent climate legislation.',
        options: ['call', 'calls', 'called', 'calling'],
        correctAnswer: 'call',
        explanationEn: 'Academic collocation: "call for" (demand/require). Plural subject takes "call".',
        explanationEs: '"Call for" significa exigir o demandar formalmente. Con sujeto plural lleva "call".'
      },
      {
        id: 'call-mc-2',
        type: 'multiple-choice',
        question: 'What is the past simple of the regular verb "call"?',
        options: ['called', 'call', 'calt', 'calling'],
        correctAnswer: 'called',
        explanationEn: '"Call" is regular; its past form is "called".',
        explanationEs: '"Call" es un verbo regular, su pasado es "called".'
      },
      {
        id: 'call-mc-3',
        type: 'multiple-choice',
        question: 'The committee decided to ___ off the meeting due to heavy snow.',
        options: ['call', 'called', 'calls', 'calling'],
        correctAnswer: 'call',
        explanationEn: 'Phrasal verb: "call off" means to cancel an event.',
        explanationEs: '"Call off" significa cancelar un evento o reunión.'
      },
      {
        id: 'call-mc-4',
        type: 'multiple-choice',
        question: 'I will ___ you as soon as the test scores are released.',
        options: ['call', 'called', 'calls', 'calling'],
        correctAnswer: 'call',
        explanationEn: 'Future with "will" is followed by base verb "call".',
        explanationEs: 'El futuro con "will" va seguido del verbo base "call".'
      },
      {
        id: 'call-mc-5',
        type: 'multiple-choice',
        question: 'What is the Spanish translation of the verb "call"?',
        options: ['Llamar / Convocar', 'Decir / Hablar', 'Escribir / Redactar', 'Probar / Intentar'],
        correctAnswer: 'Llamar / Convocar',
        explanationEn: '"Call" translates to "llamar", "denominar" o "convocar".',
        explanationEs: '"Call" traduce llamar, denominar o convocar.'
      },
      {
        id: 'call-mc-6',
        type: 'multiple-choice',
        question: 'This phenomenon is ___ the greenhouse effect by scientists.',
        options: ['called', 'call', 'calling', 'calls'],
        correctAnswer: 'called',
        explanationEn: 'Passive voice: is + past participle "called" (es llamado/denominado).',
        explanationEs: 'Voz pasiva: "is called" (es llamado o denominado).'
      },
      {
        id: 'call-mc-7',
        type: 'multiple-choice',
        question: 'She ___ her academic advisor to request a recommendation letter.',
        options: ['called', 'call', 'calls', 'calling'],
        correctAnswer: 'called',
        explanationEn: 'Past simple action: "She called her academic advisor".',
        explanationEs: 'Acción en pasado simple: "She called her advisor".'
      },
      {
        id: 'call-mc-8',
        type: 'multiple-choice',
        question: 'The situation ___ for immediate diplomatic intervention.',
        options: ['calls', 'call', 'called', 'calling'],
        correctAnswer: 'calls',
        explanationEn: 'Singular subject "The situation" takes "calls for" in present simple.',
        explanationEs: 'Sujeto singular "The situation" concuerda con "calls for".'
      },
      {
        id: 'call-mc-9',
        type: 'multiple-choice',
        question: 'Can I ___ you back in ten minutes after my class finishes?',
        options: ['call', 'called', 'calls', 'calling'],
        correctAnswer: 'call',
        explanationEn: 'Phrasal verb: "call back" (devolver la llamada). Modal "Can" takes base verb.',
        explanationEs: '"Call back" significa devolver la llamada.'
      },
      {
        id: 'call-mc-10',
        type: 'multiple-choice',
        question: 'They have ___ a general assembly to discuss university tuition.',
        options: ['called', 'call', 'calls', 'calling'],
        correctAnswer: 'called',
        explanationEn: 'Present perfect collocation: "have called an assembly" (han convocado).',
        explanationEs: 'Presente perfecto: "have called an assembly" (han convocado una asamblea).'
      },
      // 10 Sentence Builders
      {
        id: 'call-sb-1',
        type: 'sentence-builder',
        spanishPrompt: 'Te llamaré tan pronto como llegue a casa.',
        correctSentence: 'I will call you as soon as I arrive home.',
        tokens: ['I', 'will', 'call', 'you', 'as', 'soon', 'as', 'I', 'arrive', 'home.'],
        explanationEn: 'Future with time clause: will call you + as soon as + present simple.',
        explanationEs: 'Futuro con "will call you" y conector temporal "as soon as".'
      },
      {
        id: 'call-sb-2',
        type: 'sentence-builder',
        spanishPrompt: 'Tuvieron que cancelar el evento por la lluvia.',
        correctSentence: 'They had to call off the event due to rain.',
        tokens: ['They', 'had', 'to', 'call', 'off', 'the', 'event', 'due', 'to', 'rain.'],
        explanationEn: 'Phrasal verb "call off" (cancelar) + "due to".',
        explanationEs: 'Phrasal verb "call off" (cancelar) con conector causal "due to".'
      },
      {
        id: 'call-sb-3',
        type: 'sentence-builder',
        spanishPrompt: 'Este proceso se llama fotosíntesis en biología.',
        correctSentence: 'This process is called photosynthesis in biology.',
        tokens: ['This', 'process', 'is', 'called', 'photosynthesis', 'in', 'biology.'],
        explanationEn: 'Passive voice: is called + scientific term.',
        explanationEs: 'Voz pasiva científica: "is called photosynthesis".'
      },
      {
        id: 'call-sb-4',
        type: 'sentence-builder',
        spanishPrompt: 'La situación exige una acción inmediata.',
        correctSentence: 'The urgent situation calls for immediate action.',
        tokens: ['The', 'urgent', 'situation', 'calls', 'for', 'immediate', 'action.'],
        explanationEn: 'Academic collocation: "calls for immediate action".',
        explanationEs: 'Colocación formal: "calls for immediate action" (exige acción inmediata).'
      },
      {
        id: 'call-sb-5',
        type: 'sentence-builder',
        spanishPrompt: 'Ella me llamó anoche para darme las buenas noticias.',
        correctSentence: 'She called me last night to give me the good news.',
        tokens: ['She', 'called', 'me', 'last', 'night', 'to', 'give', 'me', 'the', 'good', 'news.'],
        explanationEn: 'Past simple "called" + time marker + purpose infinitive.',
        explanationEs: 'Pasado simple "called me last night".'
      },
      {
        id: 'call-sb-6',
        type: 'sentence-builder',
        spanishPrompt: '¿Puedes devolverme la llamada más tarde, por favor?',
        correctSentence: 'Can you call me back later please?',
        tokens: ['Can', 'you', 'call', 'me', 'back', 'later', 'please?'],
        explanationEn: 'Phrasal request: Can you call me back later?',
        explanationEs: 'Petición con phrasal verb: "call me back" (devolverme la llamada).'
      },
      {
        id: 'call-sb-7',
        type: 'sentence-builder',
        spanishPrompt: 'El decano convocó a una reunión de emergencia.',
        correctSentence: 'The dean called an emergency meeting yesterday.',
        tokens: ['The', 'dean', 'called', 'an', 'emergency', 'meeting', 'yesterday.'],
        explanationEn: 'Collocation in past: "called an emergency meeting" (convocó).',
        explanationEs: 'Colocación formal: "called a meeting" (convocó a una reunión).'
      },
      {
        id: 'call-sb-8',
        type: 'sentence-builder',
        spanishPrompt: 'No olvides llamarme cuando termines tu examen.',
        correctSentence: 'Do not forget to call me when you finish your exam.',
        tokens: ['Do', 'not', 'forget', 'to', 'call', 'me', 'when', 'you', 'finish', 'your', 'exam.'],
        explanationEn: 'Imperative: Do not forget to call me + time clause.',
        explanationEs: 'Imperativo: "Do not forget to call me...".'
      },
      {
        id: 'call-sb-9',
        type: 'sentence-builder',
        spanishPrompt: 'Los expertos piden más inversión en energía limpia.',
        correctSentence: 'Experts call for more investment in clean energy.',
        tokens: ['Experts', 'call', 'for', 'more', 'investment', 'in', 'clean', 'energy.'],
        explanationEn: 'Subject + call for + noun phrase + prepositional modifier.',
        explanationEs: 'Estructura formal: "call for more investment in...".'
      },
      {
        id: 'call-sb-10',
        type: 'sentence-builder',
        spanishPrompt: 'Ellos lo llamaron por su primer nombre.',
        correctSentence: 'They called him by his first name.',
        tokens: ['They', 'called', 'him', 'by', 'his', 'first', 'name.'],
        explanationEn: 'Structure: called + pronoun + by + noun phrase.',
        explanationEs: 'Estructura: "called him by his first name".'
      }
    ]
  },

  // 20. TRY
  {
    verbId: 20,
    questions: [
      {
        id: 'try-mc-1',
        type: 'multiple-choice',
        question: 'Students must ___ their best on every section of the examination.',
        options: ['try', 'tries', 'tried', 'trying'],
        correctAnswer: 'try',
        explanationEn: 'Modal "must" takes the base verb "try": "try one’s best".',
        explanationEs: 'El modal "must" se acompaña de la forma base "try".'
      },
      {
        id: 'try-mc-2',
        type: 'multiple-choice',
        question: 'What is the past simple of the regular verb "try"?',
        options: ['tried', 'tryed', 'try', 'trying'],
        correctAnswer: 'tried',
        explanationEn: 'Verbs ending in consonant + y change "y" to "i" and add -ed: "tried".',
        explanationEs: 'Los verbos terminados en consonante + y cambian a -ied en pasado: "tried".'
      },
      {
        id: 'try-mc-3',
        type: 'multiple-choice',
        question: 'She ___ to solve the complex algebraic equation for twenty minutes.',
        options: ['tried', 'try', 'tries', 'trying'],
        correctAnswer: 'tried',
        explanationEn: 'Completed past attempt: "She tried to solve...".',
        explanationEs: 'Intento en el pasado: "She tried to solve...".'
      },
      {
        id: 'try-mc-4',
        type: 'multiple-choice',
        question: 'What does "try on" mean when shopping for clothes?',
        options: ['Probarse una prenda de vestir', 'Comprar con descuento', 'Devolver un producto', 'Pagar en efectivo'],
        correctAnswer: 'Probarse una prenda de vestir',
        explanationEn: '"Try on" means to put on clothes to see if they fit.',
        explanationEs: '"Try on" significa probarse ropa.'
      },
      {
        id: 'try-mc-5',
        type: 'multiple-choice',
        question: 'What is the difference between "try to do" and "try doing"?',
        options: ['"Try to do" is making an effort; "try doing" is experimenting with an approach.', '"Try to do" is in the past; "try doing" is in the future.', 'There is no grammatical difference.', '"Try to do" is only for sports.'],
        correctAnswer: '"Try to do" is making an effort; "try doing" is experimenting with an approach.',
        explanationEn: '"Try to + inf" means to make an attempt/effort; "try + gerund" means to test/experiment.',
        explanationEs: '"Try to do" es esforzarse por lograr algo; "try doing" es experimentar como método.'
      },
      {
        id: 'try-mc-6',
        type: 'multiple-choice',
        question: 'What is the Spanish translation of the verb "try"?',
        options: ['Intentar / Probar', 'Dejar / Salir', 'Poner / Colocar', 'Creer / Pensar'],
        correctAnswer: 'Intentar / Probar',
        explanationEn: '"Try" translates to "intentar", "probar" o "tratar de".',
        explanationEs: '"Try" traduce intentar, probar o tratar de.'
      },
      {
        id: 'try-mc-7',
        type: 'multiple-choice',
        question: 'He ___ to maintain a balanced lifestyle despite his busy schedule.',
        options: ['tries', 'try', 'tried', 'trying'],
        correctAnswer: 'tries',
        explanationEn: 'Third-person singular in present simple changes -y to -ies: "tries".',
        explanationEs: 'En tercera persona singular del presente simple, "try" cambia a "tries".'
      },
      {
        id: 'try-mc-8',
        type: 'multiple-choice',
        question: 'If you have insomnia, ___ drinking chamomile tea before bed.',
        options: ['try', 'tries', 'tried', 'to try'],
        correctAnswer: 'try',
        explanationEn: 'Imperative recommendation: "try + gerund" (try drinking).',
        explanationEs: 'Recomendación imperativa: "try drinking" (prueba beber té).'
      },
      {
        id: 'try-mc-9',
        type: 'multiple-choice',
        question: 'We have ___ multiple methods, but none produced the desired result.',
        options: ['tried', 'try', 'tries', 'trying'],
        correctAnswer: 'tried',
        explanationEn: 'Present perfect: have + past participle "tried".',
        explanationEs: 'Presente perfecto con el participio "tried".'
      },
      {
        id: 'try-mc-10',
        type: 'multiple-choice',
        question: 'Always ___ to be punctual for academic appointments.',
        options: ['try', 'tries', 'tried', 'to try'],
        correctAnswer: 'try',
        explanationEn: 'Adverb + imperative: "Always try to be punctual".',
        explanationEs: 'Imperativo general: "Always try to be punctual".'
      },
      // 10 Sentence Builders
      {
        id: 'try-sb-1',
        type: 'sentence-builder',
        spanishPrompt: 'Siempre intento dar lo mejor de mí.',
        correctSentence: 'I always try to do my best.',
        tokens: ['I', 'always', 'try', 'to', 'do', 'my', 'best.'],
        explanationEn: 'Subject + adverb + try + to do my best.',
        explanationEs: 'Estructura habitual: "I always try to do my best".'
      },
      {
        id: 'try-sb-2',
        type: 'sentence-builder',
        spanishPrompt: 'Ella intentó comunicarse con el profesor esta mañana.',
        correctSentence: 'She tried to contact the professor this morning.',
        tokens: ['She', 'tried', 'to', 'contact', 'the', 'professor', 'this', 'morning.'],
        explanationEn: 'Past simple "tried to contact" + object + time.',
        explanationEs: 'Pasado simple: "She tried to contact...".'
      },
      {
        id: 'try-sb-3',
        type: 'sentence-builder',
        spanishPrompt: 'Debes intentar hablar inglés todos los días.',
        correctSentence: 'You should try to speak English every day.',
        tokens: ['You', 'should', 'try', 'to', 'speak', 'English', 'every', 'day.'],
        explanationEn: 'Modal advice: should try to speak.',
        explanationEs: 'Consejo con modal: "You should try to speak...".'
      },
      {
        id: 'try-sb-4',
        type: 'sentence-builder',
        spanishPrompt: '¿Puedo probarme esta chaqueta en la tienda?',
        correctSentence: 'Can I try on this jacket in the store?',
        tokens: ['Can', 'I', 'try', 'on', 'this', 'jacket', 'in', 'the', 'store?'],
        explanationEn: 'Phrasal verb "try on" (probarse ropa).',
        explanationEs: 'Phrasal verb para ropa: "try on this jacket".'
      },
      {
        id: 'try-sb-5',
        type: 'sentence-builder',
        spanishPrompt: 'Ellos intentaron terminar el proyecto antes de la fecha límite.',
        correctSentence: 'They tried to finish the project before the deadline.',
        tokens: ['They', 'tried', 'to', 'finish', 'the', 'project', 'before', 'the', 'deadline.'],
        explanationEn: 'Past attempt: tried to finish + object + time preposition.',
        explanationEs: 'Intento en pasado: "tried to finish before the deadline".'
      },
      {
        id: 'try-sb-6',
        type: 'sentence-builder',
        spanishPrompt: 'Él intenta mantener una actitud positiva siempre.',
        correctSentence: 'He tries to maintain a positive attitude always.',
        tokens: ['He', 'tries', 'to', 'maintain', 'a', 'positive', 'attitude', 'always.'],
        explanationEn: 'Third person singular "tries to maintain".',
        explanationEs: 'Tercera persona singular: "He tries to maintain...".'
      },
      {
        id: 'try-sb-7',
        type: 'sentence-builder',
        spanishPrompt: 'Prueba usar una aplicación para aprender nuevo vocabulario.',
        correctSentence: 'Try using an application to learn new vocabulary.',
        tokens: ['Try', 'using', 'an', 'application', 'to', 'learn', 'new', 'vocabulary.'],
        explanationEn: 'Experimentation: Try + gerund "using".',
        explanationEs: 'Experimentación / sugerencia: "Try using...".'
      },
      {
        id: 'try-sb-8',
        type: 'sentence-builder',
        spanishPrompt: 'Nosotros intentamos encontrar una solución pacífica al conflicto.',
        correctSentence: 'We tried to find a peaceful solution to the conflict.',
        tokens: ['We', 'tried', 'to', 'find', 'a', 'peaceful', 'solution', 'to', 'the', 'conflict.'],
        explanationEn: 'Past simple "tried to find" + academic phrase.',
        explanationEs: 'Pasado simple con colocación académica: "tried to find a solution".'
      },
      {
        id: 'try-sb-9',
        type: 'sentence-builder',
        spanishPrompt: 'No te rindas sin intentar primero.',
        correctSentence: 'Do not give up without trying first.',
        tokens: ['Do', 'not', 'give', 'up', 'without', 'trying', 'first.'],
        explanationEn: 'Preposition "without" followed by gerund "trying".',
        explanationEs: 'La preposición "without" va seguida del gerundio "trying".'
      },
      {
        id: 'try-sb-10',
        type: 'sentence-builder',
        spanishPrompt: 'Ella ha intentado varias estrategias de estudio efectivas.',
        correctSentence: 'She has tried several effective study strategies.',
        tokens: ['She', 'has', 'tried', 'several', 'effective', 'study', 'strategies.'],
        explanationEn: 'Present perfect: has tried + descriptive noun phrase.',
        explanationEs: 'Presente perfecto con el participio "tried".'
      }
    ]
  }
];
