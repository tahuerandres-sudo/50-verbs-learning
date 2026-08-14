import { VerbQuestionBank } from '../../types';

export const VERBS_31_40_QUESTIONS: VerbQuestionBank[] = [
  // 31. SEEM
  {
    verbId: 31,
    questions: [
      {
        id: 'seem-mc-1',
        type: 'multiple-choice',
        question: 'The proposed environmental solution ___ very promising and cost-effective.',
        options: ['seems', 'seem', 'seeming', 'seemed'],
        correctAnswer: 'seems',
        explanationEn: 'Singular subject "The proposed environmental solution" takes "seems" in present simple.',
        explanationEs: 'Sujeto singular concuerda con "seems" en presente simple.'
      },
      {
        id: 'seem-mc-2',
        type: 'multiple-choice',
        question: 'What is the past simple of the regular verb "seem"?',
        options: ['seemed', 'seem', 'seemen', 'seeming'],
        correctAnswer: 'seemed',
        explanationEn: '"Seem" is regular; its past form is "seemed" /siːmd/.',
        explanationEs: '"Seem" es regular, su pasado es "seemed".'
      },
      {
        id: 'seem-mc-3',
        type: 'multiple-choice',
        question: 'It ___ that global temperatures are rising at an alarming rate.',
        options: ['seems', 'seem', 'seemed', 'seeming'],
        correctAnswer: 'seems',
        explanationEn: 'Academic hedging structure: "It seems that..." (Parece que...).',
        explanationEs: 'Estructura formal de atenuación: "It seems that...".'
      },
      {
        id: 'seem-mc-4',
        type: 'multiple-choice',
        question: 'What is the Spanish translation of the verb "seem"?',
        options: ['Parecer / Aparentar', 'Permitir / Tolerar', 'Buscar / Encontrar', 'Comenzar / Empezar'],
        correctAnswer: 'Parecer / Aparentar',
        explanationEn: '"Seem" translates to "parecer" or "aparentar".',
        explanationEs: '"Seem" traduce parecer o aparentar.'
      },
      {
        id: 'seem-mc-5',
        type: 'multiple-choice',
        question: 'They ___ to understand the primary principles of linguistics.',
        options: ['seem', 'seems', 'seemed', 'seeming'],
        correctAnswer: 'seem',
        explanationEn: 'Plural subject "They" takes base form "seem to + verb".',
        explanationEs: 'Sujeto plural con "seem to understand".'
      },
      {
        id: 'seem-mc-6',
        type: 'multiple-choice',
        question: 'The candidate ___ nervous during the first few minutes of the interview.',
        options: ['seemed', 'seem', 'seems', 'seeming'],
        correctAnswer: 'seemed',
        explanationEn: 'Past simple observation: "The candidate seemed nervous...".',
        explanationEs: 'Observación en pasado simple: "seemed nervous".'
      },
      {
        id: 'seem-mc-7',
        type: 'multiple-choice',
        question: 'There ___ to be some confusion regarding the new timetable.',
        options: ['seems', 'seem', 'seemed', 'seeming'],
        correctAnswer: 'seems',
        explanationEn: 'Existential phrase: "There seems to be..." with singular uncountable "confusion".',
        explanationEs: 'Expresión existencial: "There seems to be...".'
      },
      {
        id: 'seem-mc-8',
        type: 'multiple-choice',
        question: 'The statistical results ___ consistent with previous research findings.',
        options: ['seem', 'seems', 'seemed', 'to seem'],
        correctAnswer: 'seem',
        explanationEn: 'Plural subject "The statistical results" takes base form "seem".',
        explanationEs: 'Sujeto plural "The results" concuerda con "seem".'
      },
      {
        id: 'seem-mc-9',
        type: 'multiple-choice',
        question: 'Does it ___ reasonable to implement these changes immediately?',
        options: ['seem', 'seems', 'seemed', 'seeming'],
        correctAnswer: 'seem',
        explanationEn: 'Question with "Does" takes base form "seem".',
        explanationEs: 'Pregunta con "Does" requiere la forma base "seem".'
      },
      {
        id: 'seem-mc-10',
        type: 'multiple-choice',
        question: 'He ___ unlikely to accept the international assignment.',
        options: ['seems', 'seem', 'seemed', 'seeming'],
        correctAnswer: 'seems',
        explanationEn: 'Pattern: seems + adjective (unlikely) + to-infinitive.',
        explanationEs: 'Patrón: "seems unlikely to accept".'
      },
      // 10 Sentence Builders
      {
        id: 'seem-sb-1',
        type: 'sentence-builder',
        spanishPrompt: 'Parece que va a llover esta tarde.',
        correctSentence: 'It seems that it is going to rain this afternoon.',
        tokens: ['It', 'seems', 'that', 'it', 'is', 'going', 'to', 'rain', 'this', 'afternoon.'],
        explanationEn: 'Hedging structure: It seems that + future clause.',
        explanationEs: 'Estructura impersonal: "It seems that it is going to rain...".'
      },
      {
        id: 'seem-sb-2',
        type: 'sentence-builder',
        spanishPrompt: 'Los estudiantes parecen muy motivados con el curso.',
        correctSentence: 'The students seem very motivated with the course.',
        tokens: ['The', 'students', 'seem', 'very', 'motivated', 'with', 'the', 'course.'],
        explanationEn: 'Plural subject + seem + adjective phrase.',
        explanationEs: 'Sujeto plural con "seem very motivated".'
      },
      {
        id: 'seem-sb-3',
        type: 'sentence-builder',
        spanishPrompt: 'Él parecía cansado después del largo examen de inglés.',
        correctSentence: 'He seemed tired after the long English exam.',
        tokens: ['He', 'seemed', 'tired', 'after', 'the', 'long', 'English', 'exam.'],
        explanationEn: 'Past simple "seemed tired" + prepositional time phrase.',
        explanationEs: 'Pasado simple: "He seemed tired after the exam".'
      },
      {
        id: 'seem-sb-4',
        type: 'sentence-builder',
        spanishPrompt: 'Parece haber un malentendido entre ambas partes.',
        correctSentence: 'There seems to be a misunderstanding between both parties.',
        tokens: ['There', 'seems', 'to', 'be', 'a', 'misunderstanding', 'between', 'both', 'parties.'],
        explanationEn: 'Academic structure: There seems to be + noun phrase.',
        explanationEs: 'Estructura formal: "There seems to be a misunderstanding...".'
      },
      {
        id: 'seem-sb-5',
        type: 'sentence-builder',
        spanishPrompt: 'La solución parecía imposible al principio.',
        correctSentence: 'The solution seemed impossible at the beginning.',
        tokens: ['The', 'solution', 'seemed', 'impossible', 'at', 'the', 'beginning.'],
        explanationEn: 'Past simple "seemed impossible" + time phrase.',
        explanationEs: 'Pasado simple con adjetivo: "seemed impossible".'
      },
      {
        id: 'seem-sb-6',
        type: 'sentence-builder',
        spanishPrompt: 'Ella parece ser la candidata más calificada para el puesto.',
        correctSentence: 'She seems to be the most qualified candidate for the job.',
        tokens: ['She', 'seems', 'to', 'be', 'the', 'most', 'qualified', 'candidate', 'for', 'the', 'job.'],
        explanationEn: 'Structure: seems to be + superlative noun phrase.',
        explanationEs: 'Estructura: "She seems to be the most qualified candidate".'
      },
      {
        id: 'seem-sb-7',
        type: 'sentence-builder',
        spanishPrompt: 'No parece justo juzgar sin conocer todos los hechos.',
        correctSentence: 'It does not seem fair to judge without knowing all facts.',
        tokens: ['It', 'does', 'not', 'seem', 'fair', 'to', 'judge', 'without', 'knowing', 'all', 'facts.'],
        explanationEn: 'Negative structure: It does not seem fair to + infinitive.',
        explanationEs: 'Estructura negativa: "It does not seem fair to judge...".'
      },
      {
        id: 'seem-sb-8',
        type: 'sentence-builder',
        spanishPrompt: 'Los resultados parecen indicar una tendencia positiva.',
        correctSentence: 'The results seem to indicate a positive trend.',
        tokens: ['The', 'results', 'seem', 'to', 'indicate', 'a', 'positive', 'trend.'],
        explanationEn: 'Academic reporting: The results seem to indicate + object.',
        explanationEs: 'Redacción académica para IELTS: "seem to indicate a positive trend".'
      },
      {
        id: 'seem-sb-9',
        type: 'sentence-builder',
        spanishPrompt: 'Todo parecía tranquilo antes de que comenzara el evento.',
        correctSentence: 'Everything seemed calm before the event started.',
        tokens: ['Everything', 'seemed', 'calm', 'before', 'the', 'event', 'started.'],
        explanationEn: 'Indefinite pronoun "Everything" + seemed calm + past clause.',
        explanationEs: '"Everything seemed calm before the event started".'
      },
      {
        id: 'seem-sb-10',
        type: 'sentence-builder',
        spanishPrompt: '¿Te parece razonable esta nueva propuesta académica?',
        correctSentence: 'Does this new academic proposal seem reasonable to you?',
        tokens: ['Does', 'this', 'new', 'academic', 'proposal', 'seem', 'reasonable', 'to', 'you?'],
        explanationEn: 'Question: Does + subject + seem reasonable to you?',
        explanationEs: 'Pregunta: "Does this proposal seem reasonable to you?".'
      }
    ]
  },

  // 32. HELP
  {
    verbId: 32,
    questions: [
      {
        id: 'help-mc-1',
        type: 'multiple-choice',
        question: 'Regular reading practice can ___ students expand their academic vocabulary.',
        options: ['help', 'helps', 'helped', 'helping'],
        correctAnswer: 'help',
        explanationEn: 'Modal "can" takes the base form "help". Can be followed by bare or to-infinitive.',
        explanationEs: 'El modal "can" va seguido de "help".'
      },
      {
        id: 'help-mc-2',
        type: 'multiple-choice',
        question: 'What is the past simple of the regular verb "help"?',
        options: ['helped', 'help', 'holp', 'helping'],
        correctAnswer: 'helped',
        explanationEn: '"Help" is a regular verb; its past form is "helped" /helpt/.',
        explanationEs: '"Help" es regular, su forma pasada es "helped".'
      },
      {
        id: 'help-mc-3',
        type: 'multiple-choice',
        question: 'What does the idiom "cannot help doing something" mean?',
        options: ['No poder evitar hacer algo', 'Negarse a prestar ayuda', 'Pedir socorro a gritos', 'Terminar un trabajo'],
        correctAnswer: 'No poder evitar hacer algo',
        explanationEn: '"Cannot help + gerund" means unable to stop oneself from doing something.',
        explanationEs: '"Cannot help + gerundio" significa no poder evitar hacer algo.'
      },
      {
        id: 'help-mc-4',
        type: 'multiple-choice',
        question: 'She ___ her classmate solve the complex calculus equation.',
        options: ['helped', 'help', 'helps', 'helping'],
        correctAnswer: 'helped',
        explanationEn: 'Past simple action: "She helped her classmate solve...".',
        explanationEs: 'Acción en pasado: "helped her classmate solve...".'
      },
      {
        id: 'help-mc-5',
        type: 'multiple-choice',
        question: 'What is the Spanish translation of the verb "help"?',
        options: ['Ayudar / Auxiliar', 'Hablar / Conversar', 'Jugar / Tocar', 'Mantener / Guardar'],
        correctAnswer: 'Ayudar / Auxiliar',
        explanationEn: '"Help" translates to "ayudar" or "auxiliar".',
        explanationEs: '"Help" traduce ayudar o auxiliar.'
      },
      {
        id: 'help-mc-6',
        type: 'multiple-choice',
        question: 'What does the phrasal verb "help out" mean?',
        options: ['Prestar ayuda en una situación puntual', 'Salir de una habitación', 'Gritar por ayuda', 'Pagar una deuda'],
        correctAnswer: 'Prestar ayuda en una situación puntual',
        explanationEn: '"Help out" means to assist someone, especially in a busy or difficult situation.',
        explanationEs: '"Help out" significa colaborar o echar una mano en una situación.'
      },
      {
        id: 'help-mc-7',
        type: 'multiple-choice',
        question: 'He is always willing to ___ anyone in need of academic support.',
        options: ['help', 'helped', 'helps', 'helping'],
        correctAnswer: 'help',
        explanationEn: 'Infinitive after "willing to": base form "help".',
        explanationEs: 'Infinitivo tras "willing to": forma base "help".'
      },
      {
        id: 'help-mc-8',
        type: 'multiple-choice',
        question: 'Modern educational software ___ teachers monitor student progress efficiently.',
        options: ['helps', 'help', 'helped', 'to help'],
        correctAnswer: 'helps',
        explanationEn: 'Singular subject "Modern educational software" takes "helps" in present simple.',
        explanationEs: 'Sujeto singular incontable "software" concuerda con "helps".'
      },
      {
        id: 'help-mc-9',
        type: 'multiple-choice',
        question: 'Thank you very much for your ___ during the international conference.',
        options: ['help', 'helped', 'helps', 'helping'],
        correctAnswer: 'help',
        explanationEn: '"Help" functions as a noun here: "for your help".',
        explanationEs: '"Help" funciona como sustantivo: "for your help" (por tu ayuda).'
      },
      {
        id: 'help-mc-10',
        type: 'multiple-choice',
        question: 'She could not help ___ when she heard the funny joke.',
        options: ['laughing', 'laugh', 'laughed', 'to laugh'],
        correctAnswer: 'laughing',
        explanationEn: 'Expression: could not help + gerund "laughing".',
        explanationEs: 'Expresión: "could not help laughing" (no pudo evitar reírse).'
      },
      // 10 Sentence Builders
      {
        id: 'help-sb-1',
        type: 'sentence-builder',
        spanishPrompt: '¿Puedes ayudarme con este ejercicio de inglés?',
        correctSentence: 'Can you help me with this English exercise?',
        tokens: ['Can', 'you', 'help', 'me', 'with', 'this', 'English', 'exercise?'],
        explanationEn: 'Polite request: Can you help me with + noun phrase.',
        explanationEs: 'Petición cortés: "Can you help me with...?".'
      },
      {
        id: 'help-sb-2',
        type: 'sentence-builder',
        spanishPrompt: 'La tecnología ayuda a los estudiantes a aprender más rápido.',
        correctSentence: 'Technology helps students learn much faster.',
        tokens: ['Technology', 'helps', 'students', 'learn', 'much', 'faster.'],
        explanationEn: 'Structure: Subject + helps + object + bare verb (learn) + comparative adverb.',
        explanationEs: 'Estructura: "helps students learn faster".'
      },
      {
        id: 'help-sb-3',
        type: 'sentence-builder',
        spanishPrompt: 'Ella me ayudó a preparar mi presentación para el examen.',
        correctSentence: 'She helped me prepare my presentation for the exam.',
        tokens: ['She', 'helped', 'me', 'prepare', 'my', 'presentation', 'for', 'the', 'exam.'],
        explanationEn: 'Past simple: helped me prepare + object phrase.',
        explanationEs: 'Pasado simple: "helped me prepare my presentation".'
      },
      {
        id: 'help-sb-4',
        type: 'sentence-builder',
        spanishPrompt: 'No pude evitar sonreír al escuchar las buenas noticias.',
        correctSentence: 'I could not help smiling when I heard the good news.',
        tokens: ['I', 'could', 'not', 'help', 'smiling', 'when', 'I', 'heard', 'the', 'good', 'news.'],
        explanationEn: 'Idiom: could not help + gerund "smiling" + past clause.',
        explanationEs: 'Expresión idiomática: "could not help smiling".'
      },
      {
        id: 'help-sb-5',
        type: 'sentence-builder',
        spanishPrompt: 'Muchas gracias por ayudarnos con el proyecto.',
        correctSentence: 'Thank you very much for helping us with the project.',
        tokens: ['Thank', 'you', 'very', 'much', 'for', 'helping', 'us', 'with', 'the', 'project.'],
        explanationEn: 'Preposition "for" takes gerund "helping".',
        explanationEs: 'Preposición "for" rige gerundio: "for helping us".'
      },
      {
        id: 'help-sb-6',
        type: 'sentence-builder',
        spanishPrompt: 'Los voluntarios ayudaron a limpiar el parque comunitario.',
        correctSentence: 'Volunteers helped clean the local community park.',
        tokens: ['Volunteers', 'helped', 'clean', 'the', 'local', 'community', 'park.'],
        explanationEn: 'Past simple "helped clean" + noun phrase.',
        explanationEs: 'Pasado simple: "helped clean the park".'
      },
      {
        id: 'help-sb-7',
        type: 'sentence-builder',
        spanishPrompt: 'Este diccionario te ayudará a mejorar tu vocabulario.',
        correctSentence: 'This dictionary will help you improve your vocabulary.',
        tokens: ['This', 'dictionary', 'will', 'help', 'you', 'improve', 'your', 'vocabulary.'],
        explanationEn: 'Future simple: will help you improve + noun phrase.',
        explanationEs: 'Futuro: "will help you improve your vocabulary".'
      },
      {
        id: 'help-sb-8',
        type: 'sentence-builder',
        spanishPrompt: 'Él siempre está dispuesto a ayudar a sus compañeros.',
        correctSentence: 'He is always ready to help his classmates.',
        tokens: ['He', 'is', 'always', 'ready', 'to', 'help', 'his', 'classmates.'],
        explanationEn: 'Adjective complement: ready to help + object.',
        explanationEs: '"Ready to help his classmates".'
      },
      {
        id: 'help-sb-9',
        type: 'sentence-builder',
        spanishPrompt: 'Debemos ayudarnos mutuamente para alcanzar nuestras metas.',
        correctSentence: 'We must help each other to achieve our goals.',
        tokens: ['We', 'must', 'help', 'each', 'other', 'to', 'achieve', 'our', 'goals.'],
        explanationEn: 'Reciprocal pronoun "each other" after modal "must help".',
        explanationEs: 'Pronombre recíproco: "help each other to achieve our goals".'
      },
      {
        id: 'help-sb-10',
        type: 'sentence-builder',
        spanishPrompt: '¿Podrías echarme una mano con estas cajas pesadas?',
        correctSentence: 'Could you help me out with these heavy boxes?',
        tokens: ['Could', 'you', 'help', 'me', 'out', 'with', 'these', 'heavy', 'boxes?'],
        explanationEn: 'Polite phrasal request: Could you help me out with...?',
        explanationEs: 'Petición cortés con phrasal verb: "Could you help me out with...?".'
      }
    ]
  },

  // 33. TALK
  {
    verbId: 33,
    questions: [
      {
        id: 'talk-mc-1',
        type: 'multiple-choice',
        question: 'In the IELTS speaking test, candidates must ___ about familiar and abstract topics.',
        options: ['talk', 'talks', 'talked', 'talking'],
        correctAnswer: 'talk',
        explanationEn: 'Modal "must" is followed by base form "talk".',
        explanationEs: 'El modal "must" rige la forma base "talk".'
      },
      {
        id: 'talk-mc-2',
        type: 'multiple-choice',
        question: 'What is the past simple of the regular verb "talk"?',
        options: ['talked', 'talk', 'talken', 'talking'],
        correctAnswer: 'talked',
        explanationEn: '"Talk" is regular; its past simple is "talked" /tɔːkt/.',
        explanationEs: '"Talk" es regular, su forma pasada es "talked".'
      },
      {
        id: 'talk-mc-3',
        type: 'multiple-choice',
        question: 'Which preposition correctly follows "talk" when discussing a topic?',
        options: ['about', 'on', 'at', 'into'],
        correctAnswer: 'about',
        explanationEn: 'The standard collocation is "talk about [a topic]".',
        explanationEs: 'La preposición habitual es "talk about" (hablar sobre).'
      },
      {
        id: 'talk-mc-4',
        type: 'multiple-choice',
        question: 'What does the phrasal verb "talk into" mean?',
        options: ['Convencer o persuadir a alguien de hacer algo', 'Hablar en voz baja', 'Interrumpir una conversación', 'Aprender un idioma'],
        correctAnswer: 'Convencer o persuadir a alguien de hacer algo',
        explanationEn: '"Talk someone into doing something" means to persuade them to do it.',
        explanationEs: '"Talk into" significa persuadir o convencer a alguien de hacer algo.'
      },
      {
        id: 'talk-mc-5',
        type: 'multiple-choice',
        question: 'What is the Spanish translation of the verb "talk"?',
        options: ['Hablar / Conversar', 'Escuchar / Oír', 'Mover / Trasladar', 'Correr / Administrar'],
        correctAnswer: 'Hablar / Conversar',
        explanationEn: '"Talk" translates to "hablar" or "conversar".',
        explanationEs: '"Talk" traduce hablar o conversar.'
      },
      {
        id: 'talk-mc-6',
        type: 'multiple-choice',
        question: 'We ___ to the professor about extending the project deadline.',
        options: ['talked', 'talk', 'talks', 'talking'],
        correctAnswer: 'talked',
        explanationEn: 'Past simple interaction: "We talked to the professor...".',
        explanationEs: 'Interacción en pasado: "We talked to the professor".'
      },
      {
        id: 'talk-mc-7',
        type: 'multiple-choice',
        question: 'She is very confident when ___ in front of large academic audiences.',
        options: ['talking', 'talk', 'talked', 'talks'],
        correctAnswer: 'talking',
        explanationEn: 'Preposition "when" with participle: "when talking in front of".',
        explanationEs: 'Gerundio tras conector temporal: "when talking in front of".'
      },
      {
        id: 'talk-mc-8',
        type: 'multiple-choice',
        question: 'They were ___ about the socioeconomic implications of renewable energy.',
        options: ['talking', 'talked', 'talk', 'talks'],
        correctAnswer: 'talking',
        explanationEn: 'Past continuous: were + talking about.',
        explanationEs: 'Pasado continuo: "were talking about".'
      },
      {
        id: 'talk-mc-9',
        type: 'multiple-choice',
        question: 'Can I ___ to you privately for five minutes?',
        options: ['talk', 'talks', 'talked', 'talking'],
        correctAnswer: 'talk',
        explanationEn: 'Modal "Can I" takes base form "talk to you".',
        explanationEs: 'Modal formal "Can I talk to you...".'
      },
      {
        id: 'talk-mc-10',
        type: 'multiple-choice',
        question: 'His persuasive arguments ___ the board into approving the new budget.',
        options: ['talked', 'talk', 'talks', 'talking'],
        correctAnswer: 'talked',
        explanationEn: 'Past simple phrasal: "talked the board into approving".',
        explanationEs: 'Phrasal verb en pasado: "talked into approving" (convenció de aprobar).'
      },
      // 10 Sentence Builders
      {
        id: 'talk-sb-1',
        type: 'sentence-builder',
        spanishPrompt: 'Hablemos sobre tus metas para el próximo año.',
        correctSentence: 'Let us talk about your goals for next year.',
        tokens: ['Let', 'us', 'talk', 'about', 'your', 'goals', 'for', 'next', 'year.'],
        explanationEn: 'Proposal: Let us talk about + noun phrase + time.',
        explanationEs: 'Propuesta: "Let us talk about your goals...".'
      },
      {
        id: 'talk-sb-2',
        type: 'sentence-builder',
        spanishPrompt: 'Hablé con el profesor después de la clase de inglés.',
        correctSentence: 'I talked to the professor after English class.',
        tokens: ['I', 'talked', 'to', 'the', 'professor', 'after', 'English', 'class.'],
        explanationEn: 'Past simple: talked to + person + time phrase.',
        explanationEs: 'Pasado simple: "talked to the professor".'
      },
      {
        id: 'talk-sb-3',
        type: 'sentence-builder',
        spanishPrompt: '¿Puedo hablar contigo en privado por un momento?',
        correctSentence: 'Can I talk to you in private for a moment?',
        tokens: ['Can', 'I', 'talk', 'to', 'you', 'in', 'private', 'for', 'a', 'moment?'],
        explanationEn: 'Polite request: Can I talk to you in private...?',
        explanationEs: 'Petición: "Can I talk to you in private...?".'
      },
      {
        id: 'talk-sb-4',
        type: 'sentence-builder',
        spanishPrompt: 'Ellos estuvieron conversando durante más de dos horas.',
        correctSentence: 'They were talking for more than two hours.',
        tokens: ['They', 'were', 'talking', 'for', 'more', 'than', 'two', 'hours.'],
        explanationEn: 'Past continuous: were talking + duration.',
        explanationEs: 'Pasado continuo: "were talking for more than two hours".'
      },
      {
        id: 'talk-sb-5',
        type: 'sentence-builder',
        spanishPrompt: 'Ella lo convenció de unirse al club de debate.',
        correctSentence: 'She talked him into joining the debate club.',
        tokens: ['She', 'talked', 'him', 'into', 'joining', 'the', 'debate', 'club.'],
        explanationEn: 'Phrasal verb: talked + person + into + gerund (joining).',
        explanationEs: 'Phrasal verb: "talked him into joining" (lo convenció de unirse).'
      },
      {
        id: 'talk-sb-6',
        type: 'sentence-builder',
        spanishPrompt: 'En el examen debes hablar con claridad y fluidez.',
        correctSentence: 'In the exam you must talk clearly and fluently.',
        tokens: ['In', 'the', 'exam', 'you', 'must', 'talk', 'clearly', 'and', 'fluently.'],
        explanationEn: 'Modal must + base verb talk + coordinate adverbs.',
        explanationEs: 'Modal con adverbios de modo: "must talk clearly and fluently".'
      },
      {
        id: 'talk-sb-7',
        type: 'sentence-builder',
        spanishPrompt: 'No me gusta hablar en público cuando no estoy preparado.',
        correctSentence: 'I do not like to talk in public when unprepared.',
        tokens: ['I', 'do', 'not', 'like', 'to', 'talk', 'in', 'public', 'when', 'unprepared.'],
        explanationEn: 'Negative preference: do not like to talk in public + condition.',
        explanationEs: 'Preferencia negativa: "do not like to talk in public".'
      },
      {
        id: 'talk-sb-8',
        type: 'sentence-builder',
        spanishPrompt: 'Los líderes discutieron sobre el cambio climático global.',
        correctSentence: 'The leaders talked about global climate change.',
        tokens: ['The', 'leaders', 'talked', 'about', 'global', 'climate', 'change.'],
        explanationEn: 'Past simple: talked about + academic topic.',
        explanationEs: 'Pasado simple con tema formal: "talked about global climate change".'
      },
      {
        id: 'talk-sb-9',
        type: 'sentence-builder',
        spanishPrompt: 'Ella habla con mucha pasión sobre su profesión médica.',
        correctSentence: 'She talks with great passion about her medical profession.',
        tokens: ['She', 'talks', 'with', 'great', 'passion', 'about', 'her', 'medical', 'profession.'],
        explanationEn: 'Third person "talks with passion about...".',
        explanationEs: 'Tercera persona singular: "She talks with great passion".'
      },
      {
        id: 'talk-sb-10',
        type: 'sentence-builder',
        spanishPrompt: '¿De qué estaban hablando cuando entré al aula?',
        correctSentence: 'What were you talking about when I entered the classroom?',
        tokens: ['What', 'were', 'you', 'talking', 'about', 'when', 'I', 'entered', 'the', 'classroom?'],
        explanationEn: 'Past continuous question with terminal preposition: What were you talking about...?',
        explanationEs: 'Pregunta en pasado continuo con preposición al final.'
      }
    ]
  },

  // 34. TURN
  {
    verbId: 34,
    questions: [
      {
        id: 'turn-mc-1',
        type: 'multiple-choice',
        question: 'Remember to ___ off electronic equipment before leaving the computer lab.',
        options: ['turn', 'turns', 'turned', 'turning'],
        correctAnswer: 'turn',
        explanationEn: 'Infinitive after "Remember to": base form "turn off" (apagar).',
        explanationEs: 'Infinitivo con phrasal verb: "turn off" (apagar).'
      },
      {
        id: 'turn-mc-2',
        type: 'multiple-choice',
        question: 'What is the past simple of the regular verb "turn"?',
        options: ['turned', 'turn', 'turnen', 'turning'],
        correctAnswer: 'turned',
        explanationEn: '"Turn" is a regular verb; its past form is "turned" /tɜːnd/.',
        explanationEs: '"Turn" es regular, su forma pasada es "turned".'
      },
      {
        id: 'turn-mc-3',
        type: 'multiple-choice',
        question: 'What does the phrasal verb "turn down" mean in a job application context?',
        options: ['Rechazar una oferta', 'Bajar el volumen', 'Aceptar con entusiasmo', 'Aplazar la entrevista'],
        correctAnswer: 'Rechazar una oferta',
        explanationEn: '"Turn down" means to reject or refuse an offer or invitation.',
        explanationEs: '"Turn down" significa rechazar una oferta o solicitud.'
      },
      {
        id: 'turn-mc-4',
        type: 'multiple-choice',
        question: 'What does the phrasal verb "turn out" mean in "it turned out to be true"?',
        options: ['Resultar ser de una manera determinada', 'Apagar una lámpara', 'Salirse del camino', 'Girar en redondo'],
        correctAnswer: 'Resultar ser de una manera determinada',
        explanationEn: '"Turn out" means to happen or prove to be in the end.',
        explanationEs: '"Turn out" significa resultar ser o terminar siendo de cierta manera.'
      },
      {
        id: 'turn-mc-5',
        type: 'multiple-choice',
        question: 'What is the Spanish translation of the verb "turn"?',
        options: ['Girar / Convertir / Turno', 'Escribir / Redactar', 'Permitir / Tolerar', 'Buscar / Hallar'],
        correctAnswer: 'Girar / Convertir / Turno',
        explanationEn: '"Turn" translates to "girar", "volverse" o "turno".',
        explanationEs: '"Turn" traduce girar, volverse o turno.'
      },
      {
        id: 'turn-mc-6',
        type: 'multiple-choice',
        question: 'Leaves ___ yellow and orange during autumn.',
        options: ['turn', 'turns', 'turned', 'turning'],
        correctAnswer: 'turn',
        explanationEn: 'Plural subject "Leaves" + linking verb "turn" (become).',
        explanationEs: 'Verbo de cambio con sujeto plural: "Leaves turn yellow".'
      },
      {
        id: 'turn-mc-7',
        type: 'multiple-choice',
        question: 'He ___ down the prestigious job offer to pursue doctoral studies.',
        options: ['turned', 'turn', 'turns', 'turning'],
        correctAnswer: 'turned',
        explanationEn: 'Past simple phrasal verb: "turned down the offer" (rechazó la oferta).',
        explanationEs: 'Phrasal verb en pasado: "turned down the offer".'
      },
      {
        id: 'turn-mc-8',
        type: 'multiple-choice',
        question: 'The experiment ___ out to be an extraordinary scientific breakthrough.',
        options: ['turned', 'turn', 'turns', 'turning'],
        correctAnswer: 'turned',
        explanationEn: 'Past simple idiom: "turned out to be" (resultó ser).',
        explanationEs: 'Pasado simple idiomático: "turned out to be".'
      },
      {
        id: 'turn-mc-9',
        type: 'multiple-choice',
        question: 'It is now your ___ to deliver the prepared oral presentation.',
        options: ['turn', 'turned', 'turns', 'turning'],
        correctAnswer: 'turn',
        explanationEn: 'Noun usage: "your turn" (tu turno).',
        explanationEs: 'Uso sustantivo: "your turn" (tu turno).'
      },
      {
        id: 'turn-mc-10',
        type: 'multiple-choice',
        question: 'Please ___ to page 45 in your English preparation workbook.',
        options: ['turn', 'turned', 'turns', 'turning'],
        correctAnswer: 'turn',
        explanationEn: 'Imperative instruction: "turn to page X".',
        explanationEs: 'Instrucción imperativa: "turn to page 45".'
      },
      // 10 Sentence Builders
      {
        id: 'turn-sb-1',
        type: 'sentence-builder',
        spanishPrompt: 'Por favor apaga las luces antes de salir.',
        correctSentence: 'Please turn off the lights before leaving.',
        tokens: ['Please', 'turn', 'off', 'the', 'lights', 'before', 'leaving.'],
        explanationEn: 'Polite imperative with phrasal verb: turn off + preposition with gerund.',
        explanationEs: 'Imperativo cortés con phrasal verb: "turn off the lights before leaving".'
      },
      {
        id: 'turn-sb-2',
        type: 'sentence-builder',
        spanishPrompt: 'Ahora es tu turno de responder la pregunta.',
        correctSentence: 'Now it is your turn to answer the question.',
        tokens: ['Now', 'it', 'is', 'your', 'turn', 'to', 'answer', 'the', 'question.'],
        explanationEn: 'Pattern: It is your turn + to-infinitive.',
        explanationEs: 'Patrón: "It is your turn to answer...".'
      },
      {
        id: 'turn-sb-3',
        type: 'sentence-builder',
        spanishPrompt: 'Él rechazó la oferta de trabajo por razones personales.',
        correctSentence: 'He turned down the job offer for personal reasons.',
        tokens: ['He', 'turned', 'down', 'the', 'job', 'offer', 'for', 'personal', 'reasons.'],
        explanationEn: 'Past simple phrasal verb "turned down" (rechazó).',
        explanationEs: 'Phrasal verb en pasado: "turned down the offer".'
      },
      {
        id: 'turn-sb-4',
        type: 'sentence-builder',
        spanishPrompt: 'El examen resultó ser más fácil de lo esperado.',
        correctSentence: 'The exam turned out to be easier than expected.',
        tokens: ['The', 'exam', 'turned', 'out', 'to', 'be', 'easier', 'than', 'expected.'],
        explanationEn: 'Idiom: turned out to be + comparative adjective + than expected.',
        explanationEs: 'Expresión: "turned out to be easier than expected".'
      },
      {
        id: 'turn-sb-5',
        type: 'sentence-builder',
        spanishPrompt: 'Gira a la izquierda en la próxima intersección.',
        correctSentence: 'Turn left at the next street intersection.',
        tokens: ['Turn', 'left', 'at', 'the', 'next', 'street', 'intersection.'],
        explanationEn: 'Direction imperative: Turn left at + location.',
        explanationEs: 'Dirección: "Turn left at the next intersection".'
      },
      {
        id: 'turn-sb-6',
        type: 'sentence-builder',
        spanishPrompt: 'Ella encendió su computadora para comenzar a trabajar.',
        correctSentence: 'She turned on her computer to begin working.',
        tokens: ['She', 'turned', 'on', 'her', 'computer', 'to', 'begin', 'working.'],
        explanationEn: 'Past simple phrasal verb "turned on" (encendió) + purpose clause.',
        explanationEs: 'Phrasal verb en pasado: "turned on her computer".'
      },
      {
        id: 'turn-sb-7',
        type: 'sentence-builder',
        spanishPrompt: 'Las hojas cambian de color durante el otoño.',
        correctSentence: 'The leaves turn red and gold during autumn.',
        tokens: ['The', 'leaves', 'turn', 'red', 'and', 'gold', 'during', 'autumn.'],
        explanationEn: 'Linking verb "turn" indicating change of state.',
        explanationEs: 'Verbo de cambio: "The leaves turn red...".'
      },
      {
        id: 'turn-sb-8',
        type: 'sentence-builder',
        spanishPrompt: 'Cientos de personas asistieron al evento comunitario.',
        correctSentence: 'Hundreds of people turned up for the community event.',
        tokens: ['Hundreds', 'of', 'people', 'turned', 'up', 'for', 'the', 'community', 'event.'],
        explanationEn: 'Phrasal verb "turned up" (aparecieron / asistieron).',
        explanationEs: 'Phrasal verb: "turned up" (asistieron/llegaron).'
      },
      {
        id: 'turn-sb-9',
        type: 'sentence-builder',
        spanishPrompt: 'Abran sus libros en la página cincuenta.',
        correctSentence: 'Turn to page fifty in your textbooks.',
        tokens: ['Turn', 'to', 'page', 'fifty', 'in', 'your', 'textbooks.'],
        explanationEn: 'Instructional imperative: Turn to page + number.',
        explanationEs: 'Instrucción académica: "Turn to page fifty...".'
      },
      {
        id: 'turn-sb-10',
        type: 'sentence-builder',
        spanishPrompt: 'La pequeña discusión se convirtió en un gran debate.',
        correctSentence: 'The small discussion turned into a major debate.',
        tokens: ['The', 'small', 'discussion', 'turned', 'into', 'a', 'major', 'debate.'],
        explanationEn: 'Phrasal verb: "turned into" (se transformó en).',
        explanationEs: 'Phrasal verb: "turned into a major debate" (se convirtió en).'
      }
    ]
  },

  // 35. START
  {
    verbId: 35,
    questions: [
      {
        id: 'start-mc-1',
        type: 'multiple-choice',
        question: 'Candidates should ___ preparing for their exams months in advance.',
        options: ['start', 'starts', 'started', 'starting'],
        correctAnswer: 'start',
        explanationEn: 'Modal "should" takes the base form "start". Followed by gerund or infinitive.',
        explanationEs: 'El modal "should" va seguido de la forma base "start".'
      },
      {
        id: 'start-mc-2',
        type: 'multiple-choice',
        question: 'What is the past simple of the regular verb "start"?',
        options: ['started', 'start', 'starten', 'starting'],
        correctAnswer: 'started',
        explanationEn: '"Start" is a regular verb; its past form is "started" /ˈstɑːtɪd/.',
        explanationEs: '"Start" es regular, su pasado es "started".'
      },
      {
        id: 'start-mc-3',
        type: 'multiple-choice',
        question: 'What does the phrasal verb "start over" mean?',
        options: ['Comenzar de nuevo desde el principio', 'Superar un problema', 'Terminar un ciclo', 'Pausar temporalmente'],
        correctAnswer: 'Comenzar de nuevo desde el principio',
        explanationEn: '"Start over" means to begin again from the beginning.',
        explanationEs: '"Start over" significa empezar de cero o reiniciar.'
      },
      {
        id: 'start-mc-4',
        type: 'multiple-choice',
        question: 'The academic semester ___ on the first Monday of August.',
        options: ['starts', 'start', 'started', 'starting'],
        correctAnswer: 'starts',
        explanationEn: 'Scheduled timetable present simple with singular subject: "starts".',
        explanationEs: 'Presente simple de calendario con tercera persona singular: "starts".'
      },
      {
        id: 'start-mc-5',
        type: 'multiple-choice',
        question: 'What is the Spanish translation of the verb "start"?',
        options: ['Empezar / Iniciar', 'Terminar / Finalizar', 'Guardar / Retener', 'Mostrar / Evidenciar'],
        correctAnswer: 'Empezar / Iniciar',
        explanationEn: '"Start" translates to "empezar" or "iniciar".',
        explanationEs: '"Start" traduce empezar o iniciar.'
      },
      {
        id: 'start-mc-6',
        type: 'multiple-choice',
        question: 'She ___ learning English when she was only six years old.',
        options: ['started', 'start', 'starts', 'starting'],
        correctAnswer: 'started',
        explanationEn: 'Past simple action with age indicator: "started learning English".',
        explanationEs: 'Acción en pasado simple: "started learning English".'
      },
      {
        id: 'start-mc-7',
        type: 'multiple-choice',
        question: 'What does the phrasal verb "start up" mean in business?',
        options: ['Fundar o crear una nueva empresa', 'Cerrar una tienda', 'Vender acciones', 'Contratar personal'],
        correctAnswer: 'Fundar o crear una nueva empresa',
        explanationEn: '"Start up" means to initiate or create a new business or enterprise.',
        explanationEs: '"Start up" significa poner en marcha o fundar un negocio.'
      },
      {
        id: 'start-mc-8',
        type: 'multiple-choice',
        question: 'If you make a mistake, do not worry; you can always ___ over.',
        options: ['start', 'started', 'starts', 'starting'],
        correctAnswer: 'start',
        explanationEn: 'Modal "can" takes base verb "start over".',
        explanationEs: 'Modal "can" seguido de "start over".'
      },
      {
        id: 'start-mc-9',
        type: 'multiple-choice',
        question: 'The engine failed to ___ despite several attempts.',
        options: ['start', 'starts', 'started', 'starting'],
        correctAnswer: 'start',
        explanationEn: 'Infinitive after failed to: "failed to start".',
        explanationEs: 'Infinitivo tras "failed to": "start".'
      },
      {
        id: 'start-mc-10',
        type: 'multiple-choice',
        question: 'They have already ___ working on the new research proposal.',
        options: ['started', 'start', 'starts', 'starting'],
        correctAnswer: 'started',
        explanationEn: 'Present perfect: have already + past participle "started".',
        explanationEs: 'Presente perfecto con participio regular "started".'
      },
      // 10 Sentence Builders
      {
        id: 'start-sb-1',
        type: 'sentence-builder',
        spanishPrompt: 'Empecemos a practicar inglés ahora mismo.',
        correctSentence: 'Let us start practicing English right now.',
        tokens: ['Let', 'us', 'start', 'practicing', 'English', 'right', 'now.'],
        explanationEn: 'Proposal: Let us start + gerund (practicing) + time.',
        explanationEs: 'Propuesta: "Let us start practicing English right now".'
      },
      {
        id: 'start-sb-2',
        type: 'sentence-builder',
        spanishPrompt: 'El examen comienza en cinco minutos.',
        correctSentence: 'The exam starts in five minutes.',
        tokens: ['The', 'exam', 'starts', 'in', 'five', 'minutes.'],
        explanationEn: 'Present simple timetable: The exam starts in + duration.',
        explanationEs: 'Presente de horario: "The exam starts in five minutes".'
      },
      {
        id: 'start-sb-3',
        type: 'sentence-builder',
        spanishPrompt: 'Ella comenzó a estudiar para el examen IELTS el mes pasado.',
        correctSentence: 'She started studying for the IELTS exam last month.',
        tokens: ['She', 'started', 'studying', 'for', 'the', 'IELTS', 'exam', 'last', 'month.'],
        explanationEn: 'Past simple: started studying + for exam + time phrase.',
        explanationEs: 'Pasado simple: "started studying for the exam".'
      },
      {
        id: 'start-sb-4',
        type: 'sentence-builder',
        spanishPrompt: 'Nunca es demasiado tarde para empezar de nuevo.',
        correctSentence: 'It is never too late to start over.',
        tokens: ['It', 'is', 'never', 'too', 'late', 'to', 'start', 'over.'],
        explanationEn: 'Common English idiom: "It is never too late to start over".',
        explanationEs: 'Expresión común: "It is never too late to start over".'
      },
      {
        id: 'start-sb-5',
        type: 'sentence-builder',
        spanishPrompt: 'Ellos fundaron una empresa de tecnología el año pasado.',
        correctSentence: 'They started up a technology company last year.',
        tokens: ['They', 'started', 'up', 'a', 'technology', 'company', 'last', 'year.'],
        explanationEn: 'Business phrasal verb in past: "started up a company".',
        explanationEs: 'Phrasal verb en pasado: "started up a company".'
      },
      {
        id: 'start-sb-6',
        type: 'sentence-builder',
        spanishPrompt: '¿A qué hora comienza la reunión de investigación mañana?',
        correctSentence: 'What time does the research meeting start tomorrow?',
        tokens: ['What', 'time', 'does', 'the', 'research', 'meeting', 'start', 'tomorrow?'],
        explanationEn: 'Present simple question with "does" and base verb "start".',
        explanationEs: 'Pregunta en presente: "What time does the meeting start...?".'
      },
      {
        id: 'start-sb-7',
        type: 'sentence-builder',
        spanishPrompt: 'La lluvia comenzó tan pronto como salimos del edificio.',
        correctSentence: 'The rain started as soon as we left the building.',
        tokens: ['The', 'rain', 'started', 'as', 'soon', 'as', 'we', 'left', 'the', 'building.'],
        explanationEn: 'Past time clause: The rain started as soon as + past action.',
        explanationEs: 'Cláusula temporal: "The rain started as soon as we left...".'
      },
      {
        id: 'start-sb-8',
        type: 'sentence-builder',
        spanishPrompt: 'Debes comenzar temprano para completar la tarea a tiempo.',
        correctSentence: 'You must start early to complete the task on time.',
        tokens: ['You', 'must', 'start', 'early', 'to', 'complete', 'the', 'task', 'on', 'time.'],
        explanationEn: 'Modal must + start early + purpose infinitive.',
        explanationEs: 'Modal: "must start early to complete the task on time".'
      },
      {
        id: 'start-sb-9',
        type: 'sentence-builder',
        spanishPrompt: 'Ella comenzó su propio canal educativo de YouTube.',
        correctSentence: 'She started her own educational YouTube channel.',
        tokens: ['She', 'started', 'her', 'own', 'educational', 'YouTube', 'channel.'],
        explanationEn: 'Past simple: started + possessive + adjective + noun.',
        explanationEs: 'Pasado simple: "started her own educational channel".'
      },
      {
        id: 'start-sb-10',
        type: 'sentence-builder',
        spanishPrompt: 'Comencemos revisando los conceptos clave de la lección.',
        correctSentence: 'Let us start by reviewing key concepts of the lesson.',
        tokens: ['Let', 'us', 'start', 'by', 'reviewing', 'key', 'concepts', 'of', 'the', 'lesson.'],
        explanationEn: 'Academic introduction: Let us start by + gerund.',
        explanationEs: 'Estructura introductoria: "Let us start by reviewing...".'
      }
    ]
  },

  // 36. SHOW
  {
    verbId: 36,
    questions: [
      {
        id: 'show-mc-1',
        type: 'multiple-choice',
        question: 'The statistical graph ___ a significant increase in renewable energy adoption.',
        options: ['shows', 'show', 'showed', 'shown'],
        correctAnswer: 'shows',
        explanationEn: 'IELTS Academic Writing Task 1: Singular subject "The graph" takes "shows".',
        explanationEs: 'Redacción académica para IELTS: "The graph shows...".'
      },
      {
        id: 'show-mc-2',
        type: 'multiple-choice',
        question: 'What is the past simple and past participle of the irregular verb "show"?',
        options: ['showed / shown', 'showed / showed', 'shown / showed', 'shew / shown'],
        correctAnswer: 'showed / shown',
        explanationEn: '"Show" has the regular past simple "showed" and the irregular participle "shown".',
        explanationEs: '"Show" tiene pasado "showed" y participio irregular "shown".'
      },
      {
        id: 'show-mc-3',
        type: 'multiple-choice',
        question: 'What does the phrasal verb "show off" mean?',
        options: ['Presumir o alardear de habilidades o posesiones', 'Mostrar el camino a un visitante', 'Apagar una pantalla', 'Llegar a una cita'],
        correctAnswer: 'Presumir o alardear de habilidades o posesiones',
        explanationEn: '"Show off" means to display one\'s abilities or possessions proudly/arrogantly.',
        explanationEs: '"Show off" significa presumir o alardear.'
      },
      {
        id: 'show-mc-4',
        type: 'multiple-choice',
        question: 'What does the phrasal verb "show up" mean?',
        options: ['Llegar o presentarse en un lugar', 'Apagar una luz', 'Mostrar respeto', 'Rechazar una invitación'],
        correctAnswer: 'Llegar o presentarse en un lugar',
        explanationEn: '"Show up" means to arrive or appear at an appointed place.',
        explanationEs: '"Show up" significa presentarse o llegar a un sitio.'
      },
      {
        id: 'show-mc-5',
        type: 'multiple-choice',
        question: 'What is the Spanish translation of the verb "show"?',
        options: ['Mostrar / Enseñar / Demostrar', 'Guardar / Conservar', 'Mover / Trasladar', 'Comenzar / Iniciar'],
        correctAnswer: 'Mostrar / Enseñar / Demostrar',
        explanationEn: '"Show" translates to "mostrar", "enseñar" o "demostrar".',
        explanationEs: '"Show" traduce mostrar, evidenciar o enseñar.'
      },
      {
        id: 'show-mc-6',
        type: 'multiple-choice',
        question: 'Recent scientific studies have ___ a direct link between diet and health.',
        options: ['shown', 'show', 'showed', 'shows'],
        correctAnswer: 'shown',
        explanationEn: 'Present perfect with irregular past participle: "have shown a link".',
        explanationEs: 'Presente perfecto con participio irregular: "have shown".'
      },
      {
        id: 'show-mc-7',
        type: 'multiple-choice',
        question: 'Could you please ___ me how to access the online library catalog?',
        options: ['show', 'shows', 'showed', 'shown'],
        correctAnswer: 'show',
        explanationEn: 'Polite modal request "Could you please show me...".',
        explanationEs: 'Petición cortés con modal: "Could you please show me...".'
      },
      {
        id: 'show-mc-8',
        type: 'multiple-choice',
        question: 'The experimental results clearly ___ the validity of the hypothesis.',
        options: ['showed', 'show', 'shows', 'shown'],
        correctAnswer: 'showed',
        explanationEn: 'Past simple demonstration: "The results clearly showed...".',
        explanationEs: 'Demostración en pasado: "clearly showed".'
      },
      {
        id: 'show-mc-9',
        type: 'multiple-choice',
        question: 'He failed to ___ up for the interview at the scheduled time.',
        options: ['show', 'shows', 'showed', 'shown'],
        correctAnswer: 'show',
        explanationEn: 'Infinitive after "failed to": "failed to show up".',
        explanationEs: 'Infinitivo con phrasal verb: "failed to show up" (no se presentó).'
      },
      {
        id: 'show-mc-10',
        type: 'multiple-choice',
        question: 'These figures ___ that literacy rates have improved across the region.',
        options: ['show', 'shows', 'showed', 'shown'],
        correctAnswer: 'show',
        explanationEn: 'Plural subject "These figures" takes base form "show that".',
        explanationEs: 'Sujeto plural concuerda con "show that".'
      },
      // 10 Sentence Builders
      {
        id: 'show-sb-1',
        type: 'sentence-builder',
        spanishPrompt: 'El gráfico muestra un aumento constante en las ventas.',
        correctSentence: 'The chart shows a steady increase in sales.',
        tokens: ['The', 'chart', 'shows', 'a', 'steady', 'increase', 'in', 'sales.'],
        explanationEn: 'IELTS Academic phrase: The chart shows a steady increase in...',
        explanationEs: 'Frase clave de IELTS: "The chart shows a steady increase in sales".'
      },
      {
        id: 'show-sb-2',
        type: 'sentence-builder',
        spanishPrompt: '¿Podrías mostrarme cómo resolver este problema?',
        correctSentence: 'Could you show me how to solve this problem?',
        tokens: ['Could', 'you', 'show', 'me', 'how', 'to', 'solve', 'this', 'problem?'],
        explanationEn: 'Polite question: Could you show me how to + base verb?',
        explanationEs: 'Petición cortés: "Could you show me how to solve this problem?".'
      },
      {
        id: 'show-sb-3',
        type: 'sentence-builder',
        spanishPrompt: 'Los estudios han demostrado la importancia del sueño.',
        correctSentence: 'Studies have shown the importance of proper sleep.',
        tokens: ['Studies', 'have', 'shown', 'the', 'importance', 'of', 'proper', 'sleep.'],
        explanationEn: 'Present perfect with participle "shown": have shown.',
        explanationEs: 'Presente perfecto con el participio irregular "shown".'
      },
      {
        id: 'show-sb-4',
        type: 'sentence-builder',
        spanishPrompt: 'Ella no se presentó a la reunión de la mañana.',
        correctSentence: 'She did not show up for the morning meeting.',
        tokens: ['She', 'did', 'not', 'show', 'up', 'for', 'the', 'morning', 'meeting.'],
        explanationEn: 'Negative past with phrasal verb: did not show up for...',
        explanationEs: 'Phrasal verb en negativo: "did not show up for the meeting".'
      },
      {
        id: 'show-sb-5',
        type: 'sentence-builder',
        spanishPrompt: 'A él no le gusta presumir de sus logros.',
        correctSentence: 'He does not like to show off his achievements.',
        tokens: ['He', 'does', 'not', 'like', 'to', 'show', 'off', 'his', 'achievements.'],
        explanationEn: 'Negative preference with phrasal verb: "show off" (presumir).',
        explanationEs: 'Phrasal verb: "show off his achievements" (alardear de sus logros).'
      },
      {
        id: 'show-sb-6',
        type: 'sentence-builder',
        spanishPrompt: 'Los datos muestran una clara correlación entre ambas variables.',
        correctSentence: 'The data show a clear correlation between both variables.',
        tokens: ['The', 'data', 'show', 'a', 'clear', 'correlation', 'between', 'both', 'variables.'],
        explanationEn: 'Academic sentence: The data show a clear correlation between...',
        explanationEs: 'Redacción académica: "The data show a clear correlation between...".'
      },
      {
        id: 'show-sb-7',
        type: 'sentence-builder',
        spanishPrompt: 'Él mostró un gran coraje durante la crisis médica.',
        correctSentence: 'He showed great courage during the medical crisis.',
        tokens: ['He', 'showed', 'great', 'courage', 'during', 'the', 'medical', 'crisis.'],
        explanationEn: 'Past simple "showed" + abstract noun + preposition "during".',
        explanationEs: 'Pasado simple: "showed great courage during the crisis".'
      },
      {
        id: 'show-sb-8',
        type: 'sentence-builder',
        spanishPrompt: 'Déjame mostrarte la biblioteca y los laboratorios del campus.',
        correctSentence: 'Let me show you the campus library and laboratories.',
        tokens: ['Let', 'me', 'show', 'you', 'the', 'campus', 'library', 'and', 'laboratories.'],
        explanationEn: 'Imperative: Let me show you + coordinate nouns.',
        explanationEs: 'Estructura: "Let me show you the library and laboratories".'
      },
      {
        id: 'show-sb-9',
        type: 'sentence-builder',
        spanishPrompt: 'Los resultados mostraron que el método fue efectivo.',
        correctSentence: 'The results showed that the method was very effective.',
        tokens: ['The', 'results', 'showed', 'that', 'the', 'method', 'was', 'very', 'effective.'],
        explanationEn: 'Past simple reporting: showed that + clause.',
        explanationEs: 'Reporte en pasado: "The results showed that the method was effective".'
      },
      {
        id: 'show-sb-10',
        type: 'sentence-builder',
        spanishPrompt: 'Ella siempre muestra un profundo respeto por sus profesores.',
        correctSentence: 'She always shows deep respect for her professors.',
        tokens: ['She', 'always', 'shows', 'deep', 'respect', 'for', 'her', 'professors.'],
        explanationEn: 'Third person "shows deep respect for...".',
        explanationEs: 'Tercera persona singular: "shows deep respect for".'
      }
    ]
  },

  // 37. HEAR
  {
    verbId: 37,
    questions: [
      {
        id: 'hear-mc-1',
        type: 'multiple-choice',
        question: 'I can barely ___ the audio recording due to background noise.',
        options: ['hear', 'hears', 'heard', 'hearing'],
        correctAnswer: 'hear',
        explanationEn: 'Modal "can" takes the base form "hear".',
        explanationEs: 'El modal "can" va seguido de la forma base "hear".'
      },
      {
        id: 'hear-mc-2',
        type: 'multiple-choice',
        question: 'What is the past simple and past participle of the irregular verb "hear"?',
        options: ['heard', 'heared', 'hears', 'hearing'],
        correctAnswer: 'heard',
        explanationEn: 'The irregular verb "hear" has past and participle form "heard" /hɜːd/.',
        explanationEs: 'El pasado y participio de "hear" es "heard".'
      },
      {
        id: 'hear-mc-3',
        type: 'multiple-choice',
        question: 'What does the phrasal verb "hear from" mean in "I look forward to hearing from you"?',
        options: ['Recibir noticias o comunicación de alguien', 'Escuchar un ruido lejano', 'Ignorar a una persona', 'Interrumpir una conversación'],
        correctAnswer: 'Recibir noticias o comunicación de alguien',
        explanationEn: '"Hear from someone" means to receive a letter, email, call, or news from them.',
        explanationEs: '"Hear from" significa recibir noticias o comunicación de alguien.'
      },
      {
        id: 'hear-mc-4',
        type: 'multiple-choice',
        question: 'What does the phrasal verb "hear of" mean in "I have never heard of that theory"?',
        options: ['Tener conocimiento o haber oído hablar de algo', 'Escuchar atentamente', 'Aceptar un consejo', 'Perdonar una falta'],
        correctAnswer: 'Tener conocimiento o haber oído hablar de algo',
        explanationEn: '"Hear of" means to know about something or someone\'s existence.',
        explanationEs: '"Hear of" significa tener conocimiento o haber oído hablar de algo.'
      },
      {
        id: 'hear-mc-5',
        type: 'multiple-choice',
        question: 'What is the Spanish translation of the verb "hear"?',
        options: ['Oír / Escuchar', 'Mirar / Observar', 'Hablar / Decir', 'Mover / Empujar'],
        correctAnswer: 'Oír / Escuchar',
        explanationEn: '"Hear" translates to "oír" or "enterarse de".',
        explanationEs: '"Hear" traduce oír o percibir sonidos.'
      },
      {
        id: 'hear-mc-6',
        type: 'multiple-choice',
        question: 'She ___ the breaking news on the international radio station.',
        options: ['heard', 'hear', 'hears', 'hearing'],
        correctAnswer: 'heard',
        explanationEn: 'Past simple perception: "She heard the breaking news...".',
        explanationEs: 'Percepción en pasado simple: "She heard the news".'
      },
      {
        id: 'hear-mc-7',
        type: 'multiple-choice',
        question: 'Have you ___ from the university admissions office yet?',
        options: ['heard', 'hear', 'hears', 'hearing'],
        correctAnswer: 'heard',
        explanationEn: 'Present perfect: Have you + past participle "heard from".',
        explanationEs: 'Presente perfecto: "Have you heard from...?".'
      },
      {
        id: 'hear-mc-8',
        type: 'multiple-choice',
        question: 'I look forward to ___ from you soon.',
        options: ['hearing', 'hear', 'heard', 'hears'],
        correctAnswer: 'hearing',
        explanationEn: 'Formal letter closing: "look forward to + gerund (hearing)".',
        explanationEs: 'Cierre de carta formal: "look forward to hearing from you".'
      },
      {
        id: 'hear-mc-9',
        type: 'multiple-choice',
        question: 'Did you ___ the professor’s concluding remarks?',
        options: ['hear', 'heard', 'hears', 'hearing'],
        correctAnswer: 'hear',
        explanationEn: 'Question with auxiliary "Did" takes base form "hear".',
        explanationEs: 'Pregunta con el auxiliar "Did" requiere la forma base "hear".'
      },
      {
        id: 'hear-mc-10',
        type: 'multiple-choice',
        question: 'We were delighted to ___ about your outstanding academic scholarship.',
        options: ['hear', 'heard', 'hears', 'hearing'],
        correctAnswer: 'hear',
        explanationEn: 'Adjective complement: "delighted to hear about...".',
        explanationEs: 'Infinitivo tras adjetivo: "delighted to hear about...".'
      },
      // 10 Sentence Builders
      {
        id: 'hear-sb-1',
        type: 'sentence-builder',
        spanishPrompt: 'Espero tener noticias tuyas pronto.',
        correctSentence: 'I look forward to hearing from you soon.',
        tokens: ['I', 'look', 'forward', 'to', 'hearing', 'from', 'you', 'soon.'],
        explanationEn: 'Formal English closing: look forward to + gerund "hearing from".',
        explanationEs: 'Fórmula epistolar clave: "I look forward to hearing from you soon".'
      },
      {
        id: 'hear-sb-2',
        type: 'sentence-builder',
        spanishPrompt: '¿Escuchaste las noticias esta mañana en la radio?',
        correctSentence: 'Did you hear the news on the radio this morning?',
        tokens: ['Did', 'you', 'hear', 'the', 'news', 'on', 'the', 'radio', 'this', 'morning?'],
        explanationEn: 'Past question: Did you hear + object + on the radio + time.',
        explanationEs: 'Pregunta en pasado: "Did you hear the news on the radio...?"'
      },
      {
        id: 'hear-sb-3',
        type: 'sentence-builder',
        spanishPrompt: 'Ella escuchó un sonido extraño fuera de la casa.',
        correctSentence: 'She heard a strange sound outside the house.',
        tokens: ['She', 'heard', 'a', 'strange', 'sound', 'outside', 'the', 'house.'],
        explanationEn: 'Past simple "heard" + noun phrase + location.',
        explanationEs: 'Pasado simple: "She heard a strange sound...".'
      },
      {
        id: 'hear-sb-4',
        type: 'sentence-builder',
        spanishPrompt: 'Nunca había oído hablar de este autor antes.',
        correctSentence: 'I had never heard of this author before.',
        tokens: ['I', 'had', 'never', 'heard', 'of', 'this', 'author', 'before.'],
        explanationEn: 'Past perfect: had never heard of + person + time.',
        explanationEs: 'Pasado perfecto con "heard of" (oído hablar de).'
      },
      {
        id: 'hear-sb-5',
        type: 'sentence-builder',
        spanishPrompt: 'Apenas puedo escucharte debido a la mala conexión.',
        correctSentence: 'I can barely hear you due to poor connection.',
        tokens: ['I', 'can', 'barely', 'hear', 'you', 'due', 'to', 'poor', 'connection.'],
        explanationEn: 'Modal + adverb "barely hear you" + cause connector.',
        explanationEs: 'Modal con adverbio: "can barely hear you due to...".'
      },
      {
        id: 'hear-sb-6',
        type: 'sentence-builder',
        spanishPrompt: 'Nos alegramos mucho de escuchar sobre tu éxito.',
        correctSentence: 'We were very glad to hear about your success.',
        tokens: ['We', 'were', 'very', 'glad', 'to', 'hear', 'about', 'your', 'success.'],
        explanationEn: 'Adjective complement: glad to hear about + noun phrase.',
        explanationEs: 'Estructura: "glad to hear about your success".'
      },
      {
        id: 'hear-sb-7',
        type: 'sentence-builder',
        spanishPrompt: '¿Has recibido noticias de la embajada todavía?',
        correctSentence: 'Have you heard from the embassy yet?',
        tokens: ['Have', 'you', 'heard', 'from', 'the', 'embassy', 'yet?'],
        explanationEn: 'Present perfect question: Have you heard from + yet?',
        explanationEs: 'Pregunta en presente perfecto: "Have you heard from... yet?".'
      },
      {
        id: 'hear-sb-8',
        type: 'sentence-builder',
        spanishPrompt: 'Todos se sorprendieron al escuchar la decisión final.',
        correctSentence: 'Everyone was surprised to hear the final decision.',
        tokens: ['Everyone', 'was', 'surprised', 'to', 'hear', 'the', 'final', 'decision.'],
        explanationEn: 'Adjective pattern: surprised to hear + object.',
        explanationEs: '"Everyone was surprised to hear the final decision".'
      },
      {
        id: 'hear-sb-9',
        type: 'sentence-builder',
        spanishPrompt: 'Él no escuchó sonar la campana de alarma.',
        correctSentence: 'He did not hear the alarm bell ring.',
        tokens: ['He', 'did', 'not', 'hear', 'the', 'alarm', 'bell', 'ring.'],
        explanationEn: 'Verb of perception: hear + object + bare infinitive (ring).',
        explanationEs: 'Verbo de percepción: "hear the bell ring".'
      },
      {
        id: 'hear-sb-10',
        type: 'sentence-builder',
        spanishPrompt: 'Es maravilloso escuchar tu voz después de tanto tiempo.',
        correctSentence: 'It is wonderful to hear your voice after so long.',
        tokens: ['It', 'is', 'wonderful', 'to', 'hear', 'your', 'voice', 'after', 'so', 'long.'],
        explanationEn: 'Introductory "It is wonderful to hear..." + time idiom.',
        explanationEs: '"It is wonderful to hear your voice after so long".'
      }
    ]
  },

  // 38. PLAY
  {
    verbId: 38,
    questions: [
      {
        id: 'play-mc-1',
        type: 'multiple-choice',
        question: 'Education ___ a crucial role in reducing socioeconomic inequality.',
        options: ['plays', 'play', 'played', 'playing'],
        correctAnswer: 'plays',
        explanationEn: 'Academic collocation: "play a role in" (desempeñar un papel en). Singular subject takes "plays".',
        explanationEs: 'Colocación académica: "plays a crucial role in...".'
      },
      {
        id: 'play-mc-2',
        type: 'multiple-choice',
        question: 'What is the past simple of the regular verb "play"?',
        options: ['played', 'play', 'playen', 'playing'],
        correctAnswer: 'played',
        explanationEn: '"Play" is a regular verb; its past form is "played" /pleɪd/.',
        explanationEs: '"Play" es regular, su forma pasada es "played".'
      },
      {
        id: 'play-mc-3',
        type: 'multiple-choice',
        question: 'What does the phrasal verb "play down" mean?',
        options: ['Minimizar o restarle importancia a un problema', 'Bajar el volumen de la música', 'Comenzar un partido', 'Perder una partida'],
        correctAnswer: 'Minimizar o restarle importancia a un problema',
        explanationEn: '"Play down" means to minimize or diminish the perceived importance of something.',
        explanationEs: '"Play down" significa minimizar o restarle importancia a algo.'
      },
      {
        id: 'play-mc-4',
        type: 'multiple-choice',
        question: 'What is the Spanish translation of the verb "play"?',
        options: ['Jugar / Tocar (instrumento) / Desempeñar', 'Poner / Colocar', 'Oír / Escuchar', 'Llamar / Convocar'],
        correctAnswer: 'Jugar / Tocar (instrumento) / Desempeñar',
        explanationEn: '"Play" translates to "jugar", "tocar un instrumento" o "desempeñar un rol".',
        explanationEs: '"Play" traduce jugar, tocar un instrumento o desempeñar un rol.'
      },
      {
        id: 'play-mc-5',
        type: 'multiple-choice',
        question: 'She has been ___ the violin since she was five years old.',
        options: ['playing', 'play', 'played', 'plays'],
        correctAnswer: 'playing',
        explanationEn: 'Present perfect continuous: has been + playing + instrument with "the".',
        explanationEs: 'Presente perfecto continuo: "has been playing the violin".'
      },
      {
        id: 'play-mc-6',
        type: 'multiple-choice',
        question: 'Sports and physical exercise ___ an essential part in mental health.',
        options: ['play', 'plays', 'played', 'playing'],
        correctAnswer: 'play',
        explanationEn: 'Compound plural subject "Sports and exercise" takes "play a part in".',
        explanationEs: 'Sujeto plural compuesto concuerda con "play a part in".'
      },
      {
        id: 'play-mc-7',
        type: 'multiple-choice',
        question: 'The government attempted to ___ down the seriousness of the economic downturn.',
        options: ['play', 'played', 'plays', 'playing'],
        correctAnswer: 'play',
        explanationEn: 'Infinitive after "attempted to": "play down" (minimizar).',
        explanationEs: 'Infinitivo con phrasal verb: "attempted to play down".'
      },
      {
        id: 'play-mc-8',
        type: 'multiple-choice',
        question: 'They ___ football every Saturday afternoon at the community center.',
        options: ['play', 'plays', 'played', 'playing'],
        correctAnswer: 'play',
        explanationEn: 'Habitual present action: "They play football" (no article before sports).',
        explanationEs: 'Hábito en presente simple: "They play football" (sin artículo antes de deportes).'
      },
      {
        id: 'play-mc-9',
        type: 'multiple-choice',
        question: 'Technology has ___ a transformative role in contemporary linguistics.',
        options: ['played', 'play', 'plays', 'playing'],
        correctAnswer: 'played',
        explanationEn: 'Present perfect: has + past participle "played a role".',
        explanationEs: 'Presente perfecto con colocación: "has played a role".'
      },
      {
        id: 'play-mc-10',
        type: 'multiple-choice',
        question: 'Children learn important social skills while ___ together.',
        options: ['playing', 'play', 'played', 'plays'],
        correctAnswer: 'playing',
        explanationEn: 'Conjunction "while" with participle: "while playing together".',
        explanationEs: 'Gerundio tras conector temporal: "while playing together".'
      },
      // 10 Sentence Builders
      {
        id: 'play-sb-1',
        type: 'sentence-builder',
        spanishPrompt: 'La educación juega un papel vital en la sociedad.',
        correctSentence: 'Education plays a vital role in society.',
        tokens: ['Education', 'plays', 'a', 'vital', 'role', 'in', 'society.'],
        explanationEn: 'Essential academic collocation: "plays a vital role in society".',
        explanationEs: 'Colocación clave para IELTS/ICFES: "plays a vital role in society".'
      },
      {
        id: 'play-sb-2',
        type: 'sentence-builder',
        spanishPrompt: 'Ella toca el piano maravillosamente bien.',
        correctSentence: 'She plays the piano wonderfully well.',
        tokens: ['She', 'plays', 'the', 'piano', 'wonderfully', 'well.'],
        explanationEn: 'Musical instrument rule: play + THE + instrument + adverbs.',
        explanationEs: 'Regla de instrumentos musicales: "play the piano".'
      },
      {
        id: 'play-sb-3',
        type: 'sentence-builder',
        spanishPrompt: 'Los niños jugaban en el parque durante la tarde.',
        correctSentence: 'The children played in the park during the afternoon.',
        tokens: ['The', 'children', 'played', 'in', 'the', 'park', 'during', 'the', 'afternoon.'],
        explanationEn: 'Past simple "played" + location + time phrase.',
        explanationEs: 'Pasado simple: "The children played in the park".'
      },
      {
        id: 'play-sb-4',
        type: 'sentence-builder',
        spanishPrompt: 'La motivación juega un papel clave en el aprendizaje de idiomas.',
        correctSentence: 'Motivation plays a key role in language learning.',
        tokens: ['Motivation', 'plays', 'a', 'key', 'role', 'in', 'language', 'learning.'],
        explanationEn: 'Academic collocation: "plays a key role in language learning".',
        explanationEs: 'Colocación académica: "plays a key role in language learning".'
      },
      {
        id: 'play-sb-5',
        type: 'sentence-builder',
        spanishPrompt: 'El ministro intentó restarle importancia a la crisis.',
        correctSentence: 'The minister tried to play down the crisis.',
        tokens: ['The', 'minister', 'tried', 'to', 'play', 'down', 'the', 'crisis.'],
        explanationEn: 'Phrasal verb: "play down" (minimizar / restar importancia).',
        explanationEs: 'Phrasal verb: "tried to play down the crisis".'
      },
      {
        id: 'play-sb-6',
        type: 'sentence-builder',
        spanishPrompt: 'Ellos juegan al ajedrez todos los fines de semana.',
        correctSentence: 'They play chess every single weekend.',
        tokens: ['They', 'play', 'chess', 'every', 'single', 'weekend.'],
        explanationEn: 'Board game collocation: play chess (no article).',
        explanationEs: 'Juego de mesa: "play chess" (sin artículo).'
      },
      {
        id: 'play-sb-7',
        type: 'sentence-builder',
        spanishPrompt: 'Ella ha tocado la guitarra desde su infancia.',
        correctSentence: 'She has played the guitar since her childhood.',
        tokens: ['She', 'has', 'played', 'the', 'guitar', 'since', 'her', 'childhood.'],
        explanationEn: 'Present perfect: has played the guitar + since.',
        explanationEs: 'Presente perfecto con instrumento: "has played the guitar since...".'
      },
      {
        id: 'play-sb-8',
        type: 'sentence-builder',
        spanishPrompt: 'Debemos jugar bajo las reglas oficiales del juego.',
        correctSentence: 'We must play by the official rules of the game.',
        tokens: ['We', 'must', 'play', 'by', 'the', 'official', 'rules', 'of', 'the', 'game.'],
        explanationEn: 'Idiom: "play by the rules" (jugar según las reglas).',
        explanationEs: 'Expresión idiomática: "play by the rules".'
      },
      {
        id: 'play-sb-9',
        type: 'sentence-builder',
        spanishPrompt: 'La tecnología jugará una parte importante en el futuro.',
        correctSentence: 'Technology will play an important part in the future.',
        tokens: ['Technology', 'will', 'play', 'an', 'important', 'part', 'in', 'the', 'future.'],
        explanationEn: 'Future simple collocation: will play an important part in...',
        explanationEs: 'Colocación en futuro: "will play an important part in...".'
      },
      {
        id: 'play-sb-10',
        type: 'sentence-builder',
        spanishPrompt: '¿Te gustaría jugar un partido de tenis este sábado?',
        correctSentence: 'Would you like to play a match of tennis this Saturday?',
        tokens: ['Would', 'you', 'like', 'to', 'play', 'a', 'match', 'of', 'tennis', 'this', 'Saturday?'],
        explanationEn: 'Polite invitation: Would you like to play + noun phrase?',
        explanationEs: 'Invitación cortés: "Would you like to play a match...?".'
      }
    ]
  },

  // 39. RUN
  {
    verbId: 39,
    questions: [
      {
        id: 'run-mc-1',
        type: 'multiple-choice',
        question: 'She has ___ a successful non-profit educational foundation for ten years.',
        options: ['run', 'ran', 'running', 'runs'],
        correctAnswer: 'run',
        explanationEn: 'Present perfect: has + past participle "run" (meaning manage/direct).',
        explanationEs: 'Presente perfecto con participio "run" (en sentido de administrar/dirigir).'
      },
      {
        id: 'run-mc-2',
        type: 'multiple-choice',
        question: 'What is the past simple of the irregular verb "run"?',
        options: ['ran', 'run', 'runned', 'running'],
        correctAnswer: 'ran',
        explanationEn: 'The past simple of "run" is "ran" /ræn/, while the past participle is "run".',
        explanationEs: 'El pasado simple de "run" es "ran", y el participio es "run".'
      },
      {
        id: 'run-mc-3',
        type: 'multiple-choice',
        question: 'What does the phrasal verb "run out of" mean?',
        options: ['Agotar o quedarse sin algo', 'Huir de un peligro', 'Correr hacia afuera', 'Competir en una carrera'],
        correctAnswer: 'Agotar o quedarse sin algo',
        explanationEn: '"Run out of" means to deplete the entire supply of something (e.g., time, money, battery).',
        explanationEs: '"Run out of" significa quedarse sin existencias o agotar algo.'
      },
      {
        id: 'run-mc-4',
        type: 'multiple-choice',
        question: 'What does the phrasal verb "run into" mean in "I ran into my former professor"?',
        options: ['Encontrarse a alguien por casualidad', 'Chocar un vehículo intencionalmente', 'Hacer una pregunta rápida', 'Correr muy rápido'],
        correctAnswer: 'Encontrarse a alguien por casualidad',
        explanationEn: '"Run into someone" means to meet someone unexpectedly.',
        explanationEs: '"Run into" significa toparse o encontrarse por casualidad con alguien.'
      },
      {
        id: 'run-mc-5',
        type: 'multiple-choice',
        question: 'What is the Spanish translation of the verb "run"?',
        options: ['Correr / Dirigir / Gestionar', 'Poner / Ubicar', 'Mostrar / Evidenciar', 'Mantener / Conservar'],
        correctAnswer: 'Correr / Dirigir / Gestionar',
        explanationEn: '"Run" translates to "correr" (physically) or "dirigir/administrar" (a company/program).',
        explanationEs: '"Run" traduce correr o dirigir/administrar un negocio.'
      },
      {
        id: 'run-mc-6',
        type: 'multiple-choice',
        question: 'He ___ five kilometers every morning before going to work.',
        options: ['runs', 'run', 'ran', 'running'],
        correctAnswer: 'runs',
        explanationEn: 'Habitual present routine: Third-person singular "He runs".',
        explanationEs: 'Rutina en presente simple con tercera persona: "He runs".'
      },
      {
        id: 'run-mc-7',
        type: 'multiple-choice',
        question: 'We are ___ out of time, so please conclude your presentation.',
        options: ['running', 'run', 'ran', 'runs'],
        correctAnswer: 'running',
        explanationEn: 'Present continuous phrasal: "are running out of time".',
        explanationEs: 'Presente continuo con phrasal verb: "running out of time" (quedándonos sin tiempo).'
      },
      {
        id: 'run-mc-8',
        type: 'multiple-choice',
        question: 'Yesterday, she ___ into her high school English teacher at the bookstore.',
        options: ['ran', 'run', 'runs', 'running'],
        correctAnswer: 'ran',
        explanationEn: 'Past simple phrasal verb: "ran into" (se encontró por casualidad).',
        explanationEs: 'Pasado simple de phrasal verb: "ran into".'
      },
      {
        id: 'run-mc-9',
        type: 'multiple-choice',
        question: 'The laboratory ___ several simulation tests on the new compound.',
        options: ['ran', 'run', 'running', 'runs'],
        correctAnswer: 'ran',
        explanationEn: 'Past simple academic collocation: "ran several tests" (ejecutó varias pruebas).',
        explanationEs: 'Colocación académica en pasado: "ran tests" (hizo pruebas).'
      },
      {
        id: 'run-mc-10',
        type: 'multiple-choice',
        question: 'In the long ___, investing in education brings the highest return.',
        options: ['run', 'ran', 'running', 'runs'],
        correctAnswer: 'run',
        explanationEn: 'Idiomatic expression: "In the long run" (A largo plazo).',
        explanationEs: 'Expresión idiomática clave: "In the long run" (a largo plazo).'
      },
      // 10 Sentence Builders
      {
        id: 'run-sb-1',
        type: 'sentence-builder',
        spanishPrompt: 'Nos estamos quedando sin tiempo para el examen.',
        correctSentence: 'We are running out of time for the exam.',
        tokens: ['We', 'are', 'running', 'out', 'of', 'time', 'for', 'the', 'exam.'],
        explanationEn: 'Phrasal verb: "running out of time for...".',
        explanationEs: 'Phrasal verb continuo: "running out of time for the exam".'
      },
      {
        id: 'run-sb-2',
        type: 'sentence-builder',
        spanishPrompt: 'Ella dirige un equipo de investigación muy talentoso.',
        correctSentence: 'She runs a very talented research team.',
        tokens: ['She', 'runs', 'a', 'very', 'talented', 'research', 'team.'],
        explanationEn: 'Third person "runs" in the sense of managing/leading.',
        explanationEs: '"Runs" en sentido de dirigir o liderar: "She runs a research team".'
      },
      {
        id: 'run-sb-3',
        type: 'sentence-builder',
        spanishPrompt: 'Él corrió cinco kilómetros esta mañana en el parque.',
        correctSentence: 'He ran five kilometers this morning in the park.',
        tokens: ['He', 'ran', 'five', 'kilometers', 'this', 'morning', 'in', 'the', 'park.'],
        explanationEn: 'Past simple "ran" + distance + time + location.',
        explanationEs: 'Pasado simple: "He ran five kilometers...".'
      },
      {
        id: 'run-sb-4',
        type: 'sentence-builder',
        spanishPrompt: 'A largo plazo la dedicación siempre da buenos resultados.',
        correctSentence: 'In the long run dedication always pays off.',
        tokens: ['In', 'the', 'long', 'run', 'dedication', 'always', 'pays', 'off.'],
        explanationEn: 'Idiom: "In the long run" (a largo plazo).',
        explanationEs: 'Expresión idiomática: "In the long run dedication always pays off".'
      },
      {
        id: 'run-sb-5',
        type: 'sentence-builder',
        spanishPrompt: 'Me encontré por casualidad con un viejo amigo en la biblioteca.',
        correctSentence: 'I ran into an old friend at the library yesterday.',
        tokens: ['I', 'ran', 'into', 'an', 'old', 'friend', 'at', 'the', 'library', 'yesterday.'],
        explanationEn: 'Past simple phrasal: "ran into" (encontrarse por casualidad).',
        explanationEs: 'Phrasal verb en pasado: "ran into an old friend".'
      },
      {
        id: 'run-sb-6',
        type: 'sentence-builder',
        spanishPrompt: 'Los científicos realizaron múltiples simulaciones computacionales.',
        correctSentence: 'Scientists ran multiple computer simulations for the study.',
        tokens: ['Scientists', 'ran', 'multiple', 'computer', 'simulations', 'for', 'the', 'study.'],
        explanationEn: 'Academic collocation: "ran computer simulations".',
        explanationEs: 'Colocación formal: "ran computer simulations".'
      },
      {
        id: 'run-sb-7',
        type: 'sentence-builder',
        spanishPrompt: 'La batería de mi teléfono se agotó por completo.',
        correctSentence: 'My phone battery ran out completely during class.',
        tokens: ['My', 'phone', 'battery', 'ran', 'out', 'completely', 'during', 'class.'],
        explanationEn: 'Past simple phrasal verb: "ran out completely".',
        explanationEs: 'Phrasal verb en pasado: "ran out completely".'
      },
      {
        id: 'run-sb-8',
        type: 'sentence-builder',
        spanishPrompt: 'Ellos han dirigido esta organización durante veinte años.',
        correctSentence: 'They have run this organization for twenty years.',
        tokens: ['They', 'have', 'run', 'this', 'organization', 'for', 'twenty', 'years.'],
        explanationEn: 'Present perfect with participle "run": have run + duration.',
        explanationEs: 'Presente perfecto con participio "run": "have run this organization".'
      },
      {
        id: 'run-sb-9',
        type: 'sentence-builder',
        spanishPrompt: 'No corras riesgos innecesarios durante el experimento.',
        correctSentence: 'Do not run unnecessary risks during the experiment.',
        tokens: ['Do', 'not', 'run', 'unnecessary', 'risks', 'during', 'the', 'experiment.'],
        explanationEn: 'Collocation: "run risks" (correr riesgos) in negative imperative.',
        explanationEs: 'Colocación: "run risks" (correr riesgos).'
      },
      {
        id: 'run-sb-10',
        type: 'sentence-builder',
        spanishPrompt: 'El programa de computadora se ejecuta de manera muy eficiente.',
        correctSentence: 'The computer software runs very efficiently on this laptop.',
        tokens: ['The', 'computer', 'software', 'runs', 'very', 'efficiently', 'on', 'this', 'laptop.'],
        explanationEn: 'Technology context: software runs + adverb.',
        explanationEs: 'Contexto tecnológico: "software runs very efficiently".'
      }
    ]
  },

  // 40. MOVE
  {
    verbId: 40,
    questions: [
      {
        id: 'move-mc-1',
        type: 'multiple-choice',
        question: 'Many young professionals ___ to metropolitan areas to advance their careers.',
        options: ['move', 'moves', 'moved', 'moving'],
        correctAnswer: 'move',
        explanationEn: 'Plural subject "Many young professionals" takes base form "move".',
        explanationEs: 'Sujeto plural concuerda con "move" en presente simple.'
      },
      {
        id: 'move-mc-2',
        type: 'multiple-choice',
        question: 'What is the past simple of the regular verb "move"?',
        options: ['moved', 'move', 'moven', 'moving'],
        correctAnswer: 'moved',
        explanationEn: '"Move" is regular; its past simple is "moved" /muːvd/.',
        explanationEs: '"Move" es regular, su forma pasada es "moved".'
      },
      {
        id: 'move-mc-3',
        type: 'multiple-choice',
        question: 'What does the phrasal verb "move on" mean?',
        options: ['Avanzar a una nueva etapa o tema', 'Quedarse en el mismo sitio', 'Regresar al inicio', 'Mover un mueble'],
        correctAnswer: 'Avanzar a una nueva etapa o tema',
        explanationEn: '"Move on" means to progress or transition to the next topic or stage in life.',
        explanationEs: '"Move on" significa pasar a la siguiente etapa o tema.'
      },
      {
        id: 'move-mc-4',
        type: 'multiple-choice',
        question: 'What is the Spanish translation of the verb "move"?',
        options: ['Mover / Mudarse / Trasladarse / Conmover', 'Correr / Gestionar', 'Jugar / Tocar', 'Oír / Escuchar'],
        correctAnswer: 'Mover / Mudarse / Trasladarse / Conmover',
        explanationEn: '"Move" translates to "mover", "mudarse" o "conmover" (emocionalmente).',
        explanationEs: '"Move" traduce mover, mudarse o conmover.'
      },
      {
        id: 'move-mc-5',
        type: 'multiple-choice',
        question: 'She was deeply ___ by the speaker’s inspiring story of resilience.',
        options: ['moved', 'move', 'moves', 'moving'],
        correctAnswer: 'moved',
        explanationEn: 'Passive emotional state: "was deeply moved" (estaba profundamente conmovida).',
        explanationEs: 'Sentido emocional pasivo: "was deeply moved" (conmovida).'
      },
      {
        id: 'move-mc-6',
        type: 'multiple-choice',
        question: 'Let’s ___ on to the next section of the exam preparation guide.',
        options: ['move', 'moved', 'moves', 'moving'],
        correctAnswer: 'move',
        explanationEn: 'Proposal with Let’s: "Let’s move on to...".',
        explanationEs: 'Propuesta: "Let’s move on to..." (pasemos al siguiente).'
      },
      {
        id: 'move-mc-7',
        type: 'multiple-choice',
        question: 'They ___ to London last year to study international relations.',
        options: ['moved', 'move', 'moves', 'moving'],
        correctAnswer: 'moved',
        explanationEn: 'Past simple relocation: "They moved to London last year".',
        explanationEs: 'Mudanza en pasado simple: "moved to London last year".'
      },
      {
        id: 'move-mc-8',
        type: 'multiple-choice',
        question: 'What does the phrasal verb "move in" mean?',
        options: ['Instalarse en una nueva vivienda', 'Salir de viaje', 'Mover un objeto pesado', 'Cancelar un contrato'],
        correctAnswer: 'Instalarse en una nueva vivienda',
        explanationEn: '"Move in" means to start living in a new house or apartment.',
        explanationEs: '"Move in" significa mudarse a o instalarse en una nueva vivienda.'
      },
      {
        id: 'move-mc-9',
        type: 'multiple-choice',
        question: 'We need to make a bold ___ to secure our competitive advantage.',
        options: ['move', 'moved', 'moves', 'moving'],
        correctAnswer: 'move',
        explanationEn: 'Noun usage: "make a move" (dar un paso / tomar una medida).',
        explanationEs: 'Uso sustantivo: "make a move" (dar un paso estratégico).'
      },
      {
        id: 'move-mc-10',
        type: 'multiple-choice',
        question: 'Technology is ___ at an astonishingly rapid pace.',
        options: ['moving', 'moved', 'move', 'moves'],
        correctAnswer: 'moving',
        explanationEn: 'Present continuous development: "is moving at a rapid pace".',
        explanationEs: 'Presente continuo de progreso: "is moving at a rapid pace".'
      },
      // 10 Sentence Builders
      {
        id: 'move-sb-1',
        type: 'sentence-builder',
        spanishPrompt: 'Pasemos al siguiente tema de la presentación.',
        correctSentence: 'Let us move on to the next topic of the presentation.',
        tokens: ['Let', 'us', 'move', 'on', 'to', 'the', 'next', 'topic', 'of', 'the', 'presentation.'],
        explanationEn: 'Transition expression: Let us move on to + noun phrase.',
        explanationEs: 'Transición clave: "Let us move on to the next topic...".'
      },
      {
        id: 'move-sb-2',
        type: 'sentence-builder',
        spanishPrompt: 'Ella se mudó a Canadá para estudiar su maestría.',
        correctSentence: 'She moved to Canada to study her master’s degree.',
        tokens: ['She', 'moved', 'to', 'Canada', 'to', 'study', 'her', 'master’s', 'degree.'],
        explanationEn: 'Past simple "moved to" + destination + purpose infinitive.',
        explanationEs: 'Pasado simple: "moved to Canada to study...".'
      },
      {
        id: 'move-sb-3',
        type: 'sentence-builder',
        spanishPrompt: 'Todos se sintieron profundamente conmovidos por su emotivo discurso.',
        correctSentence: 'Everyone was deeply moved by his emotional speech.',
        tokens: ['Everyone', 'was', 'deeply', 'moved', 'by', 'his', 'emotional', 'speech.'],
        explanationEn: 'Passive emotion: was deeply moved by + agent.',
        explanationEs: 'Voz pasiva emotiva: "deeply moved by his speech".'
      },
      {
        id: 'move-sb-4',
        type: 'sentence-builder',
        spanishPrompt: 'Ellos se mudaron a su nuevo apartamento la semana pasada.',
        correctSentence: 'They moved into their new apartment last week.',
        tokens: ['They', 'moved', 'into', 'their', 'new', 'apartment', 'last', 'week.'],
        explanationEn: 'Phrasal verb in past: "moved into their new apartment".',
        explanationEs: 'Phrasal verb: "moved into their new apartment".'
      },
      {
        id: 'move-sb-5',
        type: 'sentence-builder',
        spanishPrompt: 'La tecnología avanza a un ritmo increíblemente rápido.',
        correctSentence: 'Technology is moving at an incredibly fast pace.',
        tokens: ['Technology', 'is', 'moving', 'at', 'an', 'incredibly', 'fast', 'pace.'],
        explanationEn: 'Present continuous: moving at + pace.',
        explanationEs: 'Presente continuo: "moving at an incredibly fast pace".'
      },
      {
        id: 'move-sb-6',
        type: 'sentence-builder',
        spanishPrompt: 'Es hora de dar el siguiente paso en tu carrera profesional.',
        correctSentence: 'It is time to make the next move in your career.',
        tokens: ['It', 'is', 'time', 'to', 'make', 'the', 'next', 'move', 'in', 'your', 'career.'],
        explanationEn: 'Idiom: "make the next move" (dar el siguiente paso).',
        explanationEs: 'Expresión: "make the next move in your career".'
      },
      {
        id: 'move-sb-7',
        type: 'sentence-builder',
        spanishPrompt: 'No muevas la cámara mientras grabas el video.',
        correctSentence: 'Do not move the camera while recording the video.',
        tokens: ['Do', 'not', 'move', 'the', 'camera', 'while', 'recording', 'the', 'video.'],
        explanationEn: 'Negative imperative + while + gerund.',
        explanationEs: 'Imperativo negativo: "Do not move the camera...".'
      },
      {
        id: 'move-sb-8',
        type: 'sentence-builder',
        spanishPrompt: 'Debemos avanzar hacia un modelo económico más sostenible.',
        correctSentence: 'We must move toward a more sustainable economic model.',
        tokens: ['We', 'must', 'move', 'toward', 'a', 'more', 'sustainable', 'economic', 'model.'],
        explanationEn: 'Academic sentence: must move toward + comparative noun phrase.',
        explanationEs: 'Oración académica: "move toward a more sustainable model".'
      },
      {
        id: 'move-sb-9',
        type: 'sentence-builder',
        spanishPrompt: 'Ella decidió dejar atrás el pasado y seguir adelante.',
        correctSentence: 'She decided to leave the past behind and move on.',
        tokens: ['She', 'decided', 'to', 'leave', 'the', 'past', 'behind', 'and', 'move', 'on.'],
        explanationEn: 'Coordinate infinitives: leave behind and move on.',
        explanationEs: 'Estructura: "leave the past behind and move on".'
      },
      {
        id: 'move-sb-10',
        type: 'sentence-builder',
        spanishPrompt: '¿Cuándo piensas mudarte a tu nueva casa?',
        correctSentence: 'When do you plan to move to your new house?',
        tokens: ['When', 'do', 'you', 'plan', 'to', 'move', 'to', 'your', 'new', 'house?'],
        explanationEn: 'Question: When do you plan to move to...?',
        explanationEs: 'Pregunta: "When do you plan to move to your new house?".'
      }
    ]
  }
];
