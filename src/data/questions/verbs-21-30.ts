import { VerbQuestionBank } from '../../types';

export const VERBS_21_30_QUESTIONS: VerbQuestionBank[] = [
  // 21. ASK
  {
    verbId: 21,
    questions: [
      {
        id: 'ask-mc-1',
        type: 'multiple-choice',
        question: 'Students are encouraged to ___ questions whenever concepts are unclear.',
        options: ['ask', 'asks', 'asked', 'asking'],
        correctAnswer: 'ask',
        explanationEn: 'Passive infinitive complement: "encouraged to ask questions".',
        explanationEs: 'Colocación estándar: "ask questions" (hacer preguntas).'
      },
      {
        id: 'ask-mc-2',
        type: 'multiple-choice',
        question: 'What is the past simple of the regular verb "ask"?',
        options: ['asked', 'ask', 'asken', 'asking'],
        correctAnswer: 'asked',
        explanationEn: '"Ask" is a regular verb; its past simple form is "asked" /æskt/.',
        explanationEs: '"Ask" es regular, su pasado simple es "asked".'
      },
      {
        id: 'ask-mc-3',
        type: 'multiple-choice',
        question: 'What does the phrasal verb "ask for" mean?',
        options: ['Solicitar o pedir algo', 'Hacer una pregunta difícil', 'Responder con calma', 'Despedirse'],
        correctAnswer: 'Solicitar o pedir algo',
        explanationEn: '"Ask for" means to request something (e.g., ask for help/information).',
        explanationEs: '"Ask for" significa pedir o solicitar algo.'
      },
      {
        id: 'ask-mc-4',
        type: 'multiple-choice',
        question: 'The interviewer ___ the candidate about her professional achievements.',
        options: ['asked', 'ask', 'asks', 'asking'],
        correctAnswer: 'asked',
        explanationEn: 'Past simple action: "The interviewer asked the candidate about...".',
        explanationEs: 'Acción en pasado: "The interviewer asked...".'
      },
      {
        id: 'ask-mc-5',
        type: 'multiple-choice',
        question: 'What is the Spanish translation of the verb "ask"?',
        options: ['Preguntar / Pedir', 'Sentir / Opinar', 'Poner / Colocar', 'Salir / Dejar'],
        correctAnswer: 'Preguntar / Pedir',
        explanationEn: '"Ask" translates to "preguntar" (questions) or "pedir" (requests).',
        explanationEs: '"Ask" traduce preguntar o pedir/solicitar.'
      },
      {
        id: 'ask-mc-6',
        type: 'multiple-choice',
        question: 'She ___ her professor for constructive advice on the thesis proposal.',
        options: ['asked', 'asks', 'asking', 'ask'],
        correctAnswer: 'asked',
        explanationEn: 'Past simple request: "asked her professor for advice".',
        explanationEs: 'Petición en pasado: "asked her professor for advice".'
      },
      {
        id: 'ask-mc-7',
        type: 'multiple-choice',
        question: 'If you don’t understand, please feel free to ___ for clarification.',
        options: ['ask', 'asked', 'asks', 'asking'],
        correctAnswer: 'ask',
        explanationEn: 'Infinitive after "feel free to": base form "ask".',
        explanationEs: 'Tras la expresión "feel free to", se usa la forma base "ask".'
      },
      {
        id: 'ask-mc-8',
        type: 'multiple-choice',
        question: 'He ___ where the international student orientation would take place.',
        options: ['asked', 'ask', 'asking', 'asks'],
        correctAnswer: 'asked',
        explanationEn: 'Indirect question reporting in past: "He asked where...".',
        explanationEs: 'Pregunta indirecta en estilo pasado: "He asked where...".'
      },
      {
        id: 'ask-mc-9',
        type: 'multiple-choice',
        question: 'Participants were ___ to complete an anonymous feedback survey.',
        options: ['asked', 'ask', 'asking', 'asks'],
        correctAnswer: 'asked',
        explanationEn: 'Passive voice: were + past participle "asked to complete".',
        explanationEs: 'Voz pasiva: "were asked to complete" (se les pidió que completaran).'
      },
      {
        id: 'ask-mc-10',
        type: 'multiple-choice',
        question: 'May I ___ a personal favor, if you have a moment?',
        options: ['ask', 'asks', 'asked', 'asking'],
        correctAnswer: 'ask',
        explanationEn: 'Polite modal "May I" takes base form "ask": "ask a favor".',
        explanationEs: 'Modal formal "May I ask a favor...".'
      },
      // 10 Sentence Builders
      {
        id: 'ask-sb-1',
        type: 'sentence-builder',
        spanishPrompt: 'No dudes en hacer preguntas en clase.',
        correctSentence: 'Do not hesitate to ask questions in class.',
        tokens: ['Do', 'not', 'hesitate', 'to', 'ask', 'questions', 'in', 'class.'],
        explanationEn: 'Structure: Do not hesitate + to ask questions.',
        explanationEs: 'Estructura: "Do not hesitate to ask questions in class".'
      },
      {
        id: 'ask-sb-2',
        type: 'sentence-builder',
        spanishPrompt: 'Ella le pidió ayuda a su profesor.',
        correctSentence: 'She asked her teacher for help.',
        tokens: ['She', 'asked', 'her', 'teacher', 'for', 'help.'],
        explanationEn: 'Structure: ask + person + for help.',
        explanationEs: 'Estructura: "asked her teacher for help".'
      },
      {
        id: 'ask-sb-3',
        type: 'sentence-builder',
        spanishPrompt: 'Él me preguntó cómo llegar a la biblioteca.',
        correctSentence: 'He asked me how to get to the library.',
        tokens: ['He', 'asked', 'me', 'how', 'to', 'get', 'to', 'the', 'library.'],
        explanationEn: 'Indirect question: asked me + how to get to...',
        explanationEs: 'Pregunta indirecta: "asked me how to get to...".'
      },
      {
        id: 'ask-sb-4',
        type: 'sentence-builder',
        spanishPrompt: '¿Puedo hacerte una pregunta sobre la tarea?',
        correctSentence: 'Can I ask you a question about the homework?',
        tokens: ['Can', 'I', 'ask', 'you', 'a', 'question', 'about', 'the', 'homework?'],
        explanationEn: 'Polite question: Can I ask you a question about...?',
        explanationEs: 'Pregunta cortés: "Can I ask you a question...?"'
      },
      {
        id: 'ask-sb-5',
        type: 'sentence-builder',
        spanishPrompt: 'Se pidió a los estudiantes que guardaran silencio.',
        correctSentence: 'Students were asked to remain silent.',
        tokens: ['Students', 'were', 'asked', 'to', 'remain', 'silent.'],
        explanationEn: 'Passive voice: were asked to + base verb.',
        explanationEs: 'Voz pasiva: "were asked to remain silent".'
      },
      {
        id: 'ask-sb-6',
        type: 'sentence-builder',
        spanishPrompt: 'Siempre debes pedir permiso antes de entrar.',
        correctSentence: 'You should always ask for permission before entering.',
        tokens: ['You', 'should', 'always', 'ask', 'for', 'permission', 'before', 'entering.'],
        explanationEn: 'Collocation: "ask for permission" + preposition with gerund.',
        explanationEs: 'Colocación: "ask for permission before entering".'
      },
      {
        id: 'ask-sb-7',
        type: 'sentence-builder',
        spanishPrompt: 'Ellos preguntaron por el precio del curso intensivo.',
        correctSentence: 'They asked about the price of the intensive course.',
        tokens: ['They', 'asked', 'about', 'the', 'price', 'of', 'the', 'intensive', 'course.'],
        explanationEn: 'Past simple with "asked about" + noun phrase.',
        explanationEs: 'Pasado simple: "asked about the price".'
      },
      {
        id: 'ask-sb-8',
        type: 'sentence-builder',
        spanishPrompt: 'Ella nunca tiene miedo de pedir ayuda cuando es necesario.',
        correctSentence: 'She is never afraid to ask for help when necessary.',
        tokens: ['She', 'is', 'never', 'afraid', 'to', 'ask', 'for', 'help', 'when', 'necessary.'],
        explanationEn: 'Adjective complement: "afraid to ask for help".',
        explanationEs: '"Afraid to ask for help when necessary".'
      },
      {
        id: 'ask-sb-9',
        type: 'sentence-builder',
        spanishPrompt: 'El entrevistador hizo preguntas muy interesantes y desafiantes.',
        correctSentence: 'The interviewer asked very interesting and challenging questions.',
        tokens: ['The', 'interviewer', 'asked', 'very', 'interesting', 'and', 'challenging', 'questions.'],
        explanationEn: 'Subject + asked + coordinate adjectives + noun.',
        explanationEs: 'Sujeto + "asked very interesting questions".'
      },
      {
        id: 'ask-sb-10',
        type: 'sentence-builder',
        spanishPrompt: 'Preguntemos al guía turístico para no perdernos.',
        correctSentence: 'Let us ask the tour guide so we do not get lost.',
        tokens: ['Let', 'us', 'ask', 'the', 'tour', 'guide', 'so', 'we', 'do', 'not', 'get', 'lost.'],
        explanationEn: 'Collaborative imperative: Let us ask + purpose clause.',
        explanationEs: 'Imperativo colaborativo: "Let us ask the guide...".'
      }
    ]
  },

  // 22. NEED
  {
    verbId: 22,
    questions: [
      {
        id: 'need-mc-1',
        type: 'multiple-choice',
        question: 'Developing countries ___ significant investments in public healthcare.',
        options: ['need', 'needs', 'needed', 'needing'],
        correctAnswer: 'need',
        explanationEn: 'Plural subject "Developing countries" takes base verb "need".',
        explanationEs: 'Sujeto plural requiere la forma base "need" en presente simple.'
      },
      {
        id: 'need-mc-2',
        type: 'multiple-choice',
        question: 'What is the past simple of the regular verb "need"?',
        options: ['needed', 'need', 'needen', 'needing'],
        correctAnswer: 'needed',
        explanationEn: '"Need" is a regular verb; its past form is "needed" /ˈniːdɪd/.',
        explanationEs: '"Need" es regular, su forma pasada es "needed".'
      },
      {
        id: 'need-mc-3',
        type: 'multiple-choice',
        question: 'She ___ to renew her passport before traveling to the UK.',
        options: ['needs', 'need', 'needed', 'needing'],
        correctAnswer: 'needs',
        explanationEn: 'Third-person singular "She" takes "needs" in present simple.',
        explanationEs: 'Tercera persona singular "She" requiere "needs".'
      },
      {
        id: 'need-mc-4',
        type: 'multiple-choice',
        question: 'You ___ not worry about the minor details right now.',
        options: ['need', 'needs', 'needed', 'needing'],
        correctAnswer: 'need',
        explanationEn: 'Modal use: "need not" (no tener necesidad de / no tener que).',
        explanationEs: 'Uso modal: "need not" equivale a no tener por qué.'
      },
      {
        id: 'need-mc-5',
        type: 'multiple-choice',
        question: 'What is the Spanish translation of the verb "need"?',
        options: ['Necesitar / Requerir', 'Permitir / Dejar', 'Creer / Considerar', 'Traer / Aportar'],
        correctAnswer: 'Necesitar / Requerir',
        explanationEn: '"Need" translates to "necesitar" or "requerir" in Spanish.',
        explanationEs: '"Need" traduce necesitar o requerir.'
      },
      {
        id: 'need-mc-6',
        type: 'multiple-choice',
        question: 'We ___ more empirical data to validate the scientific model.',
        options: ['need', 'needs', 'needed', 'needing'],
        correctAnswer: 'need',
        explanationEn: 'Subject "We" takes "need" with direct object "more data".',
        explanationEs: '"We" concuerda con "need" en presente simple.'
      },
      {
        id: 'need-mc-7',
        type: 'multiple-choice',
        question: 'He realized he ___ urgent medical attention after the accident.',
        options: ['needed', 'need', 'needs', 'needing'],
        correctAnswer: 'needed',
        explanationEn: 'Past tense sequence: "He realized he needed...".',
        explanationEs: 'Secuencia de tiempos en pasado: "He realized he needed...".'
      },
      {
        id: 'need-mc-8',
        type: 'multiple-choice',
        question: 'Do you ___ any assistance with your university application?',
        options: ['need', 'needs', 'needed', 'needing'],
        correctAnswer: 'need',
        explanationEn: 'Present simple question with "Do" uses base verb "need".',
        explanationEs: 'Pregunta con "Do" requiere la forma base "need".'
      },
      {
        id: 'need-mc-9',
        type: 'multiple-choice',
        question: 'This complex issue ___ immediate attention from policymakers.',
        options: ['needs', 'need', 'needed', 'to need'],
        correctAnswer: 'needs',
        explanationEn: 'Singular subject "This complex issue" takes "needs".',
        explanationEs: 'Sujeto singular "This complex issue" lleva "needs".'
      },
      {
        id: 'need-mc-10',
        type: 'multiple-choice',
        question: 'Students ___ to practice writing essays under strict timed conditions.',
        options: ['need', 'needs', 'needed', 'needing'],
        correctAnswer: 'need',
        explanationEn: 'Plural subject "Students" takes "need to practice".',
        explanationEs: 'Sujeto plural con "need to practice".'
      },
      // 10 Sentence Builders
      {
        id: 'need-sb-1',
        type: 'sentence-builder',
        spanishPrompt: 'Necesitamos practicar inglés todos los días.',
        correctSentence: 'We need to practice English every day.',
        tokens: ['We', 'need', 'to', 'practice', 'English', 'every', 'day.'],
        explanationEn: 'Structure: need + to practice + object + frequency.',
        explanationEs: 'Estructura: "We need to practice English every day".'
      },
      {
        id: 'need-sb-2',
        type: 'sentence-builder',
        spanishPrompt: 'Ella necesita más tiempo para completar su tesis.',
        correctSentence: 'She needs more time to complete her thesis.',
        tokens: ['She', 'needs', 'more', 'time', 'to', 'complete', 'her', 'thesis.'],
        explanationEn: 'Third person "needs" + noun phrase + purpose infinitive.',
        explanationEs: 'Tercera persona singular "needs more time".'
      },
      {
        id: 'need-sb-3',
        type: 'sentence-builder',
        spanishPrompt: 'El hospital necesita nuevo equipamiento médico urgentemente.',
        correctSentence: 'The hospital needs new medical equipment urgently.',
        tokens: ['The', 'hospital', 'needs', 'new', 'medical', 'equipment', 'urgently.'],
        explanationEn: 'Singular subject "The hospital" + needs + adverb.',
        explanationEs: 'Sujeto singular con adverbio modal "urgently".'
      },
      {
        id: 'need-sb-4',
        type: 'sentence-builder',
        spanishPrompt: 'Ellos necesitaban ayuda financiera para sus estudios.',
        correctSentence: 'They needed financial aid for their studies.',
        tokens: ['They', 'needed', 'financial', 'aid', 'for', 'their', 'studies.'],
        explanationEn: 'Past simple "needed" + academic noun phrase.',
        explanationEs: 'Pasado simple: "needed financial aid".'
      },
      {
        id: 'need-sb-5',
        type: 'sentence-builder',
        spanishPrompt: '¿Necesitas ayuda con este ejercicio de gramática?',
        correctSentence: 'Do you need help with this grammar exercise?',
        tokens: ['Do', 'you', 'need', 'help', 'with', 'this', 'grammar', 'exercise?'],
        explanationEn: 'Question: Do you need help with + noun phrase.',
        explanationEs: 'Pregunta: "Do you need help with...?"'
      },
      {
        id: 'need-sb-6',
        type: 'sentence-builder',
        spanishPrompt: 'No necesitas preocuparte por los resultados todavía.',
        correctSentence: 'You do not need to worry about the results yet.',
        tokens: ['You', 'do', 'not', 'need', 'to', 'worry', 'about', 'the', 'results', 'yet.'],
        explanationEn: 'Negative present: do not need to worry about...',
        explanationEs: 'Negación: "do not need to worry about".'
      },
      {
        id: 'need-sb-7',
        type: 'sentence-builder',
        spanishPrompt: 'Las ciudades necesitan mejores sistemas de transporte público.',
        correctSentence: 'Cities need better public transportation systems.',
        tokens: ['Cities', 'need', 'better', 'public', 'transportation', 'systems.'],
        explanationEn: 'Plural subject "Cities" + need + comparative noun phrase.',
        explanationEs: 'Sujeto plural con "need better public transportation systems".'
      },
      {
        id: 'need-sb-8',
        type: 'sentence-builder',
        spanishPrompt: 'Todo lo que necesitas es dedicación y paciencia.',
        correctSentence: 'All you need is dedication and patience.',
        tokens: ['All', 'you', 'need', 'is', 'dedication', 'and', 'patience.'],
        explanationEn: 'Focus structure: "All you need is...".',
        explanationEs: 'Estructura enfática: "All you need is dedication and patience".'
      },
      {
        id: 'need-sb-9',
        type: 'sentence-builder',
        spanishPrompt: 'Los investigadores necesitan verificar los resultados del laboratorio.',
        correctSentence: 'Researchers need to verify the laboratory results.',
        tokens: ['Researchers', 'need', 'to', 'verify', 'the', 'laboratory', 'results.'],
        explanationEn: 'Academic sentence: need to verify + object.',
        explanationEs: 'Oración académica: "need to verify the results".'
      },
      {
        id: 'need-sb-10',
        type: 'sentence-builder',
        spanishPrompt: 'Ella no necesita ninguna ayuda adicional.',
        correctSentence: 'She does not need any additional assistance.',
        tokens: ['She', 'does', 'not', 'need', 'any', 'additional', 'assistance.'],
        explanationEn: 'Negative third-person: She does not need + any.',
        explanationEs: 'Negación en tercera persona: "She does not need any...".'
      }
    ]
  },

  // 23. FEEL
  {
    verbId: 23,
    questions: [
      {
        id: 'feel-mc-1',
        type: 'multiple-choice',
        question: 'Many students ___ confident after completing extensive mock exams.',
        options: ['feel', 'feels', 'felt', 'feeling'],
        correctAnswer: 'feel',
        explanationEn: 'Plural subject "Many students" takes base form "feel" in present simple.',
        explanationEs: 'Sujeto plural concuerda con "feel" en presente simple.'
      },
      {
        id: 'feel-mc-2',
        type: 'multiple-choice',
        question: 'What is the past simple and past participle of the irregular verb "feel"?',
        options: ['felt', 'feeled', 'feels', 'feeling'],
        correctAnswer: 'felt',
        explanationEn: 'The irregular verb "feel" has the past simple and participle form "felt".',
        explanationEs: 'El pasado y participio de "feel" es "felt".'
      },
      {
        id: 'feel-mc-3',
        type: 'multiple-choice',
        question: 'She ___ optimistic about her chances of winning the scholarship.',
        options: ['feels', 'feel', 'felt', 'feeling'],
        correctAnswer: 'feels',
        explanationEn: 'Linking verb with third-person singular "She feels optimistic".',
        explanationEs: 'Tercera persona singular "She feels optimistic".'
      },
      {
        id: 'feel-mc-4',
        type: 'multiple-choice',
        question: 'I ___ much better after taking a short break from studying.',
        options: ['felt', 'feel', 'feels', 'feeling'],
        correctAnswer: 'felt',
        explanationEn: 'Past simple state: "I felt much better".',
        explanationEs: 'Estado en pasado simple: "I felt much better".'
      },
      {
        id: 'feel-mc-5',
        type: 'multiple-choice',
        question: 'What does "feel like doing something" mean?',
        options: ['Tener ganas o apetecer hacer algo', 'Sentirse enfermo', 'Tocar una superficie', 'Parecerse a un objeto'],
        correctAnswer: 'Tener ganas o apetecer hacer algo',
        explanationEn: '"Feel like + gerund" expresses a desire or inclination to do an activity.',
        explanationEs: '"Feel like + gerundio" significa tener ganas o apetecer hacer algo.'
      },
      {
        id: 'feel-mc-6',
        type: 'multiple-choice',
        question: 'What is the Spanish translation of the verb "feel"?',
        options: ['Sentir / Opinar', 'Saber / Conocer', 'Comenzar / Iniciar', 'Llamar / Convocar'],
        correctAnswer: 'Sentir / Opinar',
        explanationEn: '"Feel" translates to "sentir" (emotions/physical) or "opinar/creer".',
        explanationEs: '"Feel" traduce sentir u opinar.'
      },
      {
        id: 'feel-mc-7',
        type: 'multiple-choice',
        question: 'Do you ___ comfortable speaking English in front of an audience?',
        options: ['feel', 'feels', 'felt', 'feeling'],
        correctAnswer: 'feel',
        explanationEn: 'Linking verb in question: Do you feel + adjective.',
        explanationEs: 'Pregunta con verbo copulativo: "Do you feel comfortable...?".'
      },
      {
        id: 'feel-mc-8',
        type: 'multiple-choice',
        question: 'Many citizens ___ that environmental policies should be stricter.',
        options: ['feel', 'feels', 'felt', 'to feel'],
        correctAnswer: 'feel',
        explanationEn: '"Feel that" is commonly used as an academic opinion verb (believe/perceive).',
        explanationEs: '"Feel that" se usa para expresar una opinión o creencia razonada.'
      },
      {
        id: 'feel-mc-9',
        type: 'multiple-choice',
        question: 'She was ___ overwhelmed by the amount of academic reading.',
        options: ['feeling', 'feel', 'felt', 'feels'],
        correctAnswer: 'feeling',
        explanationEn: 'Past continuous: was + feeling + adjective.',
        explanationEs: 'Pasado continuo: "was feeling overwhelmed".'
      },
      {
        id: 'feel-mc-10',
        type: 'multiple-choice',
        question: 'He has always ___ a deep passion for biomedical research.',
        options: ['felt', 'feel', 'feels', 'feeling'],
        correctAnswer: 'felt',
        explanationEn: 'Present perfect: has + past participle "felt".',
        explanationEs: 'Presente perfecto con participio "felt".'
      },
      // 10 Sentence Builders
      {
        id: 'feel-sb-1',
        type: 'sentence-builder',
        spanishPrompt: 'Me siento muy orgulloso de tus logros académicos.',
        correctSentence: 'I feel very proud of your academic achievements.',
        tokens: ['I', 'feel', 'very', 'proud', 'of', 'your', 'academic', 'achievements.'],
        explanationEn: 'Linking verb "feel" + adjective phrase "proud of".',
        explanationEs: 'Verbo copulativo "feel" con "proud of".'
      },
      {
        id: 'feel-sb-2',
        type: 'sentence-builder',
        spanishPrompt: 'Ella se sintió aliviada después de entregar el examen.',
        correctSentence: 'She felt relieved after handing in the exam.',
        tokens: ['She', 'felt', 'relieved', 'after', 'handing', 'in', 'the', 'exam.'],
        explanationEn: 'Past simple "felt relieved" + preposition with gerund.',
        explanationEs: 'Pasado simple "felt relieved" (se sintió aliviada).'
      },
      {
        id: 'feel-sb-3',
        type: 'sentence-builder',
        spanishPrompt: '¿Tienes ganas de estudiar en la biblioteca hoy?',
        correctSentence: 'Do you feel like studying in the library today?',
        tokens: ['Do', 'you', 'feel', 'like', 'studying', 'in', 'the', 'library', 'today?'],
        explanationEn: 'Expression: feel like + gerund "studying".',
        explanationEs: 'Expresión: "feel like + gerundio" (tener ganas de).'
      },
      {
        id: 'feel-sb-4',
        type: 'sentence-builder',
        spanishPrompt: 'Muchos estudiantes se sienten motivados con este nuevo programa.',
        correctSentence: 'Many students feel motivated by this new program.',
        tokens: ['Many', 'students', 'feel', 'motivated', 'by', 'this', 'new', 'program.'],
        explanationEn: 'Plural subject + feel + participle adjective + agent phrase.',
        explanationEs: 'Sujeto plural con "feel motivated by".'
      },
      {
        id: 'feel-sb-5',
        type: 'sentence-builder',
        spanishPrompt: 'No me siento bien esta mañana; creo que descansaré.',
        correctSentence: 'I do not feel well this morning.',
        tokens: ['I', 'do', 'not', 'feel', 'well', 'this', 'morning.'],
        explanationEn: 'Negative present: do not feel well.',
        explanationEs: 'Negación de estado físico: "I do not feel well".'
      },
      {
        id: 'feel-sb-6',
        type: 'sentence-builder',
        spanishPrompt: 'Él sintió una gran satisfacción al recibir su diploma.',
        correctSentence: 'He felt great satisfaction upon receiving his diploma.',
        tokens: ['He', 'felt', 'great', 'satisfaction', 'upon', 'receiving', 'his', 'diploma.'],
        explanationEn: 'Past simple "felt" + direct object + prepositional time phrase.',
        explanationEs: 'Pasado simple "felt great satisfaction".'
      },
      {
        id: 'feel-sb-7',
        type: 'sentence-builder',
        spanishPrompt: 'Ellos opinan que la educación es un derecho fundamental.',
        correctSentence: 'They feel that education is a fundamental right.',
        tokens: ['They', 'feel', 'that', 'education', 'is', 'a', 'fundamental', 'right.'],
        explanationEn: 'Academic opinion: They feel that + clause.',
        explanationEs: 'Opinión formal: "They feel that...".'
      },
      {
        id: 'feel-sb-8',
        type: 'sentence-builder',
        spanishPrompt: '¿Cómo te sientes acerca de la próxima entrevista?',
        correctSentence: 'How do you feel about the upcoming interview?',
        tokens: ['How', 'do', 'you', 'feel', 'about', 'the', 'upcoming', 'interview?'],
        explanationEn: 'Wh-question: How do you feel about + noun phrase.',
        explanationEs: 'Pregunta de sentimiento: "How do you feel about...?"'
      },
      {
        id: 'feel-sb-9',
        type: 'sentence-builder',
        spanishPrompt: 'Siempre me he sentido bienvenido en esta comunidad.',
        correctSentence: 'I have always felt welcome in this community.',
        tokens: ['I', 'have', 'always', 'felt', 'welcome', 'in', 'this', 'community.'],
        explanationEn: 'Present perfect with adverb: have always felt welcome.',
        explanationEs: 'Presente perfecto con adverbio: "have always felt welcome".'
      },
      {
        id: 'feel-sb-10',
        type: 'sentence-builder',
        spanishPrompt: 'Ella se siente completamente preparada para el desafío.',
        correctSentence: 'She feels completely prepared for the challenge.',
        tokens: ['She', 'feels', 'completely', 'prepared', 'for', 'the', 'challenge.'],
        explanationEn: 'Third person singular "feels" + adverb + participle adjective.',
        explanationEs: 'Tercera persona singular: "She feels completely prepared".'
      }
    ]
  },

  // 24. BECOME
  {
    verbId: 24,
    questions: [
      {
        id: 'become-mc-1',
        type: 'multiple-choice',
        question: 'Renewable energy has ___ increasingly important in global policy.',
        options: ['become', 'became', 'becoming', 'becomes'],
        correctAnswer: 'become',
        explanationEn: 'Present perfect with auxiliary "has" takes the past participle "become".',
        explanationEs: 'El presente perfecto con "has" requiere el participio "become".'
      },
      {
        id: 'become-mc-2',
        type: 'multiple-choice',
        question: 'What is the past simple of the irregular verb "become"?',
        options: ['became', 'become', 'becomed', 'becoming'],
        correctAnswer: 'became',
        explanationEn: 'The past simple of "become" is "became", while the past participle is "become".',
        explanationEs: 'El pasado simple de "become" es "became", y el participio es "become".'
      },
      {
        id: 'become-mc-3',
        type: 'multiple-choice',
        question: 'She ___ a licensed medical doctor after seven years of rigorous study.',
        options: ['became', 'become', 'becomes', 'becoming'],
        correctAnswer: 'became',
        explanationEn: 'Completed past transformation: "She became a licensed medical doctor".',
        explanationEs: 'Transformación completada en pasado: "She became...".'
      },
      {
        id: 'become-mc-4',
        type: 'multiple-choice',
        question: 'What is the Spanish translation of the verb "become"?',
        options: ['Convertirse en / Llegar a ser', 'Dar / Entregar', 'Saber / Conocer', 'Comenzar / Iniciar'],
        correctAnswer: 'Convertirse en / Llegar a ser',
        explanationEn: '"Become" translates to "convertirse en", "llegar a ser" o "hacerse".',
        explanationEs: '"Become" traduce convertirse en, llegar a ser o volverse.'
      },
      {
        id: 'become-mc-5',
        type: 'multiple-choice',
        question: 'Online education is ___ the preferred choice for many working adults.',
        options: ['becoming', 'become', 'became', 'becomes'],
        correctAnswer: 'becoming',
        explanationEn: 'Present continuous for developing trend: "is becoming the preferred choice".',
        explanationEs: 'Presente continuo para tendencias: "is becoming".'
      },
      {
        id: 'become-mc-6',
        type: 'multiple-choice',
        question: 'With dedication, you can ___ a fluent and persuasive speaker.',
        options: ['become', 'became', 'becoming', 'becomes'],
        correctAnswer: 'become',
        explanationEn: 'Modal "can" takes the base verb "become".',
        explanationEs: 'El modal "can" va acompañado del verbo base "become".'
      },
      {
        id: 'become-mc-7',
        type: 'multiple-choice',
        question: 'The situation ___ critical when the storm damaged electrical infrastructure.',
        options: ['became', 'become', 'becomes', 'becoming'],
        correctAnswer: 'became',
        explanationEn: 'Past simple linking verb: "The situation became critical".',
        explanationEs: 'Verbo copulativo en pasado: "became critical".'
      },
      {
        id: 'become-mc-8',
        type: 'multiple-choice',
        question: 'He hopes to ___ an influential environmental researcher.',
        options: ['become', 'became', 'becomes', 'becoming'],
        correctAnswer: 'become',
        explanationEn: 'Infinitive after hope: "hopes to become".',
        explanationEs: 'Infinitivo tras hope: "to become".'
      },
      {
        id: 'become-mc-9',
        type: 'multiple-choice',
        question: 'Cities are ___ more densely populated due to rural migration.',
        options: ['becoming', 'became', 'become', 'becomes'],
        correctAnswer: 'becoming',
        explanationEn: 'IELTS trend reporting: are + becoming + comparative adjective.',
        explanationEs: 'Tendencia para IELTS: "are becoming more populated".'
      },
      {
        id: 'become-mc-10',
        type: 'multiple-choice',
        question: 'It has ___ clear that immediate environmental action is required.',
        options: ['become', 'became', 'becoming', 'becomes'],
        correctAnswer: 'become',
        explanationEn: 'Formal idiom: "It has become clear that..." (Se ha vuelto evidente que...).',
        explanationEs: 'Expresión formal: "It has become clear that...".'
      },
      // 10 Sentence Builders
      {
        id: 'become-sb-1',
        type: 'sentence-builder',
        spanishPrompt: 'Ella se convirtió en una abogada exitosa.',
        correctSentence: 'She became a very successful lawyer.',
        tokens: ['She', 'became', 'a', 'very', 'successful', 'lawyer.'],
        explanationEn: 'Past simple "became" + adjective phrase + noun.',
        explanationEs: 'Pasado simple: "She became a successful lawyer".'
      },
      {
        id: 'become-sb-2',
        type: 'sentence-builder',
        spanishPrompt: 'El inglés se ha convertido en el idioma global.',
        correctSentence: 'English has become the global language.',
        tokens: ['English', 'has', 'become', 'the', 'global', 'language.'],
        explanationEn: 'Present perfect with participle "become": has become.',
        explanationEs: 'Presente perfecto con participio "become".'
      },
      {
        id: 'become-sb-3',
        type: 'sentence-builder',
        spanishPrompt: 'La tecnología se está volviendo más accesible cada año.',
        correctSentence: 'Technology is becoming more accessible each year.',
        tokens: ['Technology', 'is', 'becoming', 'more', 'accessible', 'each', 'year.'],
        explanationEn: 'Present continuous trend: is becoming more accessible.',
        explanationEs: 'Tendencia en presente continuo: "is becoming more accessible".'
      },
      {
        id: 'become-sb-4',
        type: 'sentence-builder',
        spanishPrompt: 'Quiero convertirme en un experto en inteligencia artificial.',
        correctSentence: 'I want to become an expert in artificial intelligence.',
        tokens: ['I', 'want', 'to', 'become', 'an', 'expert', 'in', 'artificial', 'intelligence.'],
        explanationEn: 'Infinitive after want: want to become an expert in...',
        explanationEs: 'Estructura: "want to become an expert in...".'
      },
      {
        id: 'become-sb-5',
        type: 'sentence-builder',
        spanishPrompt: 'Se hizo evidente que necesitábamos un nuevo plan.',
        correctSentence: 'It became evident that we needed a new plan.',
        tokens: ['It', 'became', 'evident', 'that', 'we', 'needed', 'a', 'new', 'plan.'],
        explanationEn: 'Formal past structure: It became evident that...',
        explanationEs: 'Estructura formal en pasado: "It became evident that...".'
      },
      {
        id: 'become-sb-6',
        type: 'sentence-builder',
        spanishPrompt: 'Él se convirtió en el líder del equipo de investigación.',
        correctSentence: 'He became the leader of the research team.',
        tokens: ['He', 'became', 'the', 'leader', 'of', 'the', 'research', 'team.'],
        explanationEn: 'Past simple "became" + noun phrase + prepositional modifier.',
        explanationEs: 'Pasado simple: "He became the leader of...".'
      },
      {
        id: 'become-sb-7',
        type: 'sentence-builder',
        spanishPrompt: 'El problema se volvió más complicado con el tiempo.',
        correctSentence: 'The problem became more complicated over time.',
        tokens: ['The', 'problem', 'became', 'more', 'complicated', 'over', 'time.'],
        explanationEn: 'Subject + became + comparative adjective + time idiom.',
        explanationEs: '"The problem became more complicated over time".'
      },
      {
        id: 'become-sb-8',
        type: 'sentence-builder',
        spanishPrompt: 'Con práctica constante, puedes volverte muy fluido.',
        correctSentence: 'With consistent practice you can become very fluent.',
        tokens: ['With', 'consistent', 'practice', 'you', 'can', 'become', 'very', 'fluent.'],
        explanationEn: 'Prepositional condition + modal + base verb "become".',
        explanationEs: 'Condición + modal con verbo base: "can become very fluent".'
      },
      {
        id: 'become-sb-9',
        type: 'sentence-builder',
        spanishPrompt: 'Las redes sociales se han convertido en parte de la vida diaria.',
        correctSentence: 'Social media has become part of daily life.',
        tokens: ['Social', 'media', 'has', 'become', 'part', 'of', 'daily', 'life.'],
        explanationEn: 'Present perfect: has become + part of daily life.',
        explanationEs: 'Presente perfecto: "has become part of daily life".'
      },
      {
        id: 'become-sb-10',
        type: 'sentence-builder',
        spanishPrompt: 'Ella se convirtió en una ciudadana ejemplar y comprometida.',
        correctSentence: 'She became an exemplary and committed citizen.',
        tokens: ['She', 'became', 'an', 'exemplary', 'and', 'committed', 'citizen.'],
        explanationEn: 'Past simple "became" + coordinate descriptive adjectives.',
        explanationEs: 'Pasado simple con adjetivos coordinados.'
      }
    ]
  },

  // 25. LEAVE
  {
    verbId: 25,
    questions: [
      {
        id: 'leave-mc-1',
        type: 'multiple-choice',
        question: 'Many university graduates ___ rural communities to seek urban opportunities.',
        options: ['leave', 'leaves', 'left', 'leaving'],
        correctAnswer: 'leave',
        explanationEn: 'Plural subject "Many university graduates" takes base form "leave".',
        explanationEs: 'Sujeto plural concuerda con "leave" en presente simple.'
      },
      {
        id: 'leave-mc-2',
        type: 'multiple-choice',
        question: 'What is the past simple and past participle of the irregular verb "leave"?',
        options: ['left', 'leaved', 'leaves', 'leaving'],
        correctAnswer: 'left',
        explanationEn: 'The irregular verb "leave" has the past and participle form "left".',
        explanationEs: 'El pasado y participio de "leave" es "left".'
      },
      {
        id: 'leave-mc-3',
        type: 'multiple-choice',
        question: 'She ___ her laptop in the library yesterday by mistake.',
        options: ['left', 'leave', 'leaves', 'leaving'],
        correctAnswer: 'left',
        explanationEn: '"Yesterday" specifies past simple "left" (olvidó/dejó).',
        explanationEs: '"Yesterday" requiere el tiempo pasado simple "left".'
      },
      {
        id: 'leave-mc-4',
        type: 'multiple-choice',
        question: 'What does the phrasal verb "leave out" mean?',
        options: ['Omitir o excluir algo', 'Abandonar una casa', 'Dejar encendida una luz', 'Comenzar un viaje'],
        correctAnswer: 'Omitir o excluir algo',
        explanationEn: '"Leave out" means to omit or exclude information/someone.',
        explanationEs: '"Leave out" significa omitir o excluir información.'
      },
      {
        id: 'leave-mc-5',
        type: 'multiple-choice',
        question: 'What is the Spanish translation of the verb "leave"?',
        options: ['Salir / Dejar / Abandonar', 'Poner / Colocar', 'Creer / Pensar', 'Pagar / Cancelar'],
        correctAnswer: 'Salir / Dejar / Abandonar',
        explanationEn: '"Leave" translates to "salir de", "irse" o "dejar/abandonar".',
        explanationEs: '"Leave" traduce salir, dejar o marcharse.'
      },
      {
        id: 'leave-mc-6',
        type: 'multiple-choice',
        question: 'The morning train ___ at exactly 7:30 AM every weekday.',
        options: ['leaves', 'leave', 'left', 'leaving'],
        correctAnswer: 'leaves',
        explanationEn: 'Present simple for timetable: singular subject "The morning train leaves".',
        explanationEs: 'Horarios programados con tercera persona singular: "The train leaves".'
      },
      {
        id: 'leave-mc-7',
        type: 'multiple-choice',
        question: 'He has already ___ the building after finishing his shift.',
        options: ['left', 'leave', 'leaves', 'leaving'],
        correctAnswer: 'left',
        explanationEn: 'Present perfect with "already": has + past participle "left".',
        explanationEs: 'Presente perfecto con el participio "left".'
      },
      {
        id: 'leave-mc-8',
        type: 'multiple-choice',
        question: 'Don’t ___ your valuable personal items unattended in public.',
        options: ['leave', 'left', 'leaves', 'leaving'],
        correctAnswer: 'leave',
        explanationEn: 'Negative imperative: Don’t + base verb "leave".',
        explanationEs: 'Imperativo negativo con la forma base "leave".'
      },
      {
        id: 'leave-mc-9',
        type: 'multiple-choice',
        question: 'We should ___ early to avoid heavy morning traffic.',
        options: ['leave', 'left', 'leaves', 'leaving'],
        correctAnswer: 'leave',
        explanationEn: 'Modal "should" is followed by base form "leave".',
        explanationEs: 'El modal "should" va acompañado de la forma base "leave".'
      },
      {
        id: 'leave-mc-10',
        type: 'multiple-choice',
        question: 'Make sure not to ___ any crucial details out of the academic report.',
        options: ['leave', 'left', 'leaves', 'leaving'],
        correctAnswer: 'leave',
        explanationEn: 'Infinitive phrase: not to + base verb "leave" + details out.',
        explanationEs: 'Infinitivo con phrasal verb: "leave details out".'
      },
      // 10 Sentence Builders
      {
        id: 'leave-sb-1',
        type: 'sentence-builder',
        spanishPrompt: 'El tren sale a las siete de la mañana.',
        correctSentence: 'The train leaves at seven in the morning.',
        tokens: ['The', 'train', 'leaves', 'at', 'seven', 'in', 'the', 'morning.'],
        explanationEn: 'Timetable present simple: The train leaves at + time.',
        explanationEs: 'Presente de horario: "The train leaves at seven...".'
      },
      {
        id: 'leave-sb-2',
        type: 'sentence-builder',
        spanishPrompt: 'Ella dejó sus llaves en el escritorio.',
        correctSentence: 'She left her keys on the desk.',
        tokens: ['She', 'left', 'her', 'keys', 'on', 'the', 'desk.'],
        explanationEn: 'Past simple "left" + object + location.',
        explanationEs: 'Pasado simple: "She left her keys on the desk".'
      },
      {
        id: 'leave-sb-3',
        type: 'sentence-builder',
        spanishPrompt: 'Debemos salir temprano para evitar el tráfico pesado.',
        correctSentence: 'We must leave early to avoid heavy traffic.',
        tokens: ['We', 'must', 'leave', 'early', 'to', 'avoid', 'heavy', 'traffic.'],
        explanationEn: 'Modal "must leave early" + purpose infinitive.',
        explanationEs: 'Modal con propósito: "must leave early to avoid traffic".'
      },
      {
        id: 'leave-sb-4',
        type: 'sentence-builder',
        spanishPrompt: 'No omitas ninguna información importante en el informe.',
        correctSentence: 'Do not leave out any important information in the report.',
        tokens: ['Do', 'not', 'leave', 'out', 'any', 'important', 'information', 'in', 'the', 'report.'],
        explanationEn: 'Phrasal verb "leave out" (omitir) in negative imperative.',
        explanationEs: 'Phrasal verb "leave out" (omitir) en imperativo negativo.'
      },
      {
        id: 'leave-sb-5',
        type: 'sentence-builder',
        spanishPrompt: 'Ellos ya han salido de la sala de conferencias.',
        correctSentence: 'They have already left the conference room.',
        tokens: ['They', 'have', 'already', 'left', 'the', 'conference', 'room.'],
        explanationEn: 'Present perfect: have already left + noun phrase.',
        explanationEs: 'Presente perfecto: "have already left".'
      },
      {
        id: 'leave-sb-6',
        type: 'sentence-builder',
        spanishPrompt: 'Él salió del país para continuar sus estudios de posgrado.',
        correctSentence: 'He left the country to pursue his postgraduate studies.',
        tokens: ['He', 'left', 'the', 'country', 'to', 'pursue', 'his', 'postgraduate', 'studies.'],
        explanationEn: 'Past simple "left the country" + academic purpose infinitive.',
        explanationEs: 'Pasado simple con propósito académico: "left the country to pursue...".'
      },
      {
        id: 'leave-sb-7',
        type: 'sentence-builder',
        spanishPrompt: 'No dejes tus pertenencias desatendidas en el aeropuerto.',
        correctSentence: 'Do not leave your belongings unattended at the airport.',
        tokens: ['Do', 'not', 'leave', 'your', 'belongings', 'unattended', 'at', 'the', 'airport.'],
        explanationEn: 'Formal security warning: Do not leave + object + unattended.',
        explanationEs: 'Aviso formal: "Do not leave your belongings unattended...".'
      },
      {
        id: 'leave-sb-8',
        type: 'sentence-builder',
        spanishPrompt: '¿A qué hora vas a salir de la oficina hoy?',
        correctSentence: 'What time are you going to leave the office today?',
        tokens: ['What', 'time', 'are', 'you', 'going', 'to', 'leave', 'the', 'office', 'today?'],
        explanationEn: 'Future question with "going to leave".',
        explanationEs: 'Pregunta de futuro: "What time are you going to leave...?".'
      },
      {
        id: 'leave-sb-9',
        type: 'sentence-builder',
        spanishPrompt: 'La decisión no deja espacio para dudas.',
        correctSentence: 'The decision leaves no room for doubt.',
        tokens: ['The', 'decision', 'leaves', 'no', 'room', 'for', 'doubt.'],
        explanationEn: 'Idiomatic expression: "leaves no room for doubt" (no deja lugar a dudas).',
        explanationEs: 'Expresión idiomática: "leaves no room for doubt".'
      },
      {
        id: 'leave-sb-10',
        type: 'sentence-builder',
        spanishPrompt: 'Ella se fue sin decir una sola palabra.',
        correctSentence: 'She left without saying a single word.',
        tokens: ['She', 'left', 'without', 'saying', 'a', 'single', 'word.'],
        explanationEn: 'Past simple + preposition "without" + gerund "saying".',
        explanationEs: 'Pasado simple seguido de "without" con gerundio.'
      }
    ]
  },

  // 26. PUT
  {
    verbId: 26,
    questions: [
      {
        id: 'put-mc-1',
        type: 'multiple-choice',
        question: 'Universities must ___ emphasis on critical thinking and research skills.',
        options: ['put', 'puts', 'putting', 'putted'],
        correctAnswer: 'put',
        explanationEn: 'Academic collocation: "put emphasis on" (hacer énfasis en). Base form after modal.',
        explanationEs: 'Colocación académica: "put emphasis on" (hacer énfasis en).'
      },
      {
        id: 'put-mc-2',
        type: 'multiple-choice',
        question: 'What is the past simple and past participle of the irregular verb "put"?',
        options: ['put', 'putted', 'puts', 'putten'],
        correctAnswer: 'put',
        explanationEn: '"Put" is an invariant irregular verb: base, past, and participle are all "put".',
        explanationEs: '"Put" es un verbo invariable: presente, pasado y participio son "put".'
      },
      {
        id: 'put-mc-3',
        type: 'multiple-choice',
        question: 'What does the phrasal verb "put off" mean?',
        options: ['Posponer o aplazar una actividad', 'Encender una luz', 'Comenzar un proyecto', 'Disculparse'],
        correctAnswer: 'Posponer o aplazar una actividad',
        explanationEn: '"Put off" means to postpone or delay doing something.',
        explanationEs: '"Put off" significa posponer o aplazar.'
      },
      {
        id: 'put-mc-4',
        type: 'multiple-choice',
        question: 'She ___ the official certificates into the folder yesterday.',
        options: ['put', 'puts', 'putted', 'putting'],
        correctAnswer: 'put',
        explanationEn: 'Past simple of "put" is "put".',
        explanationEs: 'El pasado simple de "put" es "put".'
      },
      {
        id: 'put-mc-5',
        type: 'multiple-choice',
        question: 'What is the Spanish translation of the verb "put"?',
        options: ['Poner / Colocar', 'Tomar / Llevar', 'Ver / Mirar', 'Hablar / Decir'],
        correctAnswer: 'Poner / Colocar',
        explanationEn: '"Put" translates to "poner", "colocar" o "ubicar".',
        explanationEs: '"Put" traduce poner o colocar.'
      },
      {
        id: 'put-mc-6',
        type: 'multiple-choice',
        question: 'Do not ___ off until tomorrow what you can do today.',
        options: ['put', 'puts', 'putting', 'putted'],
        correctAnswer: 'put',
        explanationEn: 'Famous English proverb: "Do not put off until tomorrow...".',
        explanationEs: 'Refrán en inglés: "Do not put off until tomorrow...".'
      },
      {
        id: 'put-mc-7',
        type: 'multiple-choice',
        question: 'The committee decided to ___ forward a new proposal for renewable energy.',
        options: ['put', 'puts', 'putting', 'putted'],
        correctAnswer: 'put',
        explanationEn: 'Phrasal verb: "put forward" (proponer/plantear una propuesta).',
        explanationEs: '"Put forward" significa proponer o presentar una moción.'
      },
      {
        id: 'put-mc-8',
        type: 'multiple-choice',
        question: 'He ___ on his winter coat because it was freezing outside.',
        options: ['put', 'puts', 'putting', 'putted'],
        correctAnswer: 'put',
        explanationEn: 'Past simple phrasal verb: "put on his coat" (se puso el abrigo).',
        explanationEs: 'Pasado simple: "put on" (se puso la ropa).'
      },
      {
        id: 'put-mc-9',
        type: 'multiple-choice',
        question: 'We need to ___ these theoretical ideas into practice.',
        options: ['put', 'puts', 'putting', 'putted'],
        correctAnswer: 'put',
        explanationEn: 'Collocation: "put into practice" (poner en práctica).',
        explanationEs: 'Colocación: "put into practice" (poner en práctica).'
      },
      {
        id: 'put-mc-10',
        type: 'multiple-choice',
        question: 'She has ___ an incredible amount of effort into mastering English.',
        options: ['put', 'putted', 'puts', 'putting'],
        correctAnswer: 'put',
        explanationEn: 'Present perfect: has + past participle "put effort into".',
        explanationEs: 'Presente perfecto con participio "put".'
      },
      // 10 Sentence Builders
      {
        id: 'put-sb-1',
        type: 'sentence-builder',
        spanishPrompt: 'No pospongas tus sesiones de estudio.',
        correctSentence: 'Do not put off your study sessions.',
        tokens: ['Do', 'not', 'put', 'off', 'your', 'study', 'sessions.'],
        explanationEn: 'Negative imperative with phrasal verb: "put off".',
        explanationEs: 'Imperativo negativo con "put off" (posponer).'
      },
      {
        id: 'put-sb-2',
        type: 'sentence-builder',
        spanishPrompt: 'Debemos poner estas ideas en práctica pronto.',
        correctSentence: 'We must put these ideas into practice soon.',
        tokens: ['We', 'must', 'put', 'these', 'ideas', 'into', 'practice', 'soon.'],
        explanationEn: 'Modal "must put" + collocation "into practice".',
        explanationEs: 'Colocación modal: "put ideas into practice".'
      },
      {
        id: 'put-sb-3',
        type: 'sentence-builder',
        spanishPrompt: 'Ella puso los libros sobre la mesa de estudio.',
        correctSentence: 'She put the books on the study table.',
        tokens: ['She', 'put', 'the', 'books', 'on', 'the', 'study', 'table.'],
        explanationEn: 'Past simple "put" + object + preposition "on".',
        explanationEs: 'Pasado simple "put" con preposición de lugar.'
      },
      {
        id: 'put-sb-4',
        type: 'sentence-builder',
        spanishPrompt: 'Él se puso el abrigo antes de salir.',
        correctSentence: 'He put on his coat before going out.',
        tokens: ['He', 'put', 'on', 'his', 'coat', 'before', 'going', 'out.'],
        explanationEn: 'Past simple phrasal verb "put on" + preposition with gerund.',
        explanationEs: 'Phrasal verb en pasado: "put on his coat".'
      },
      {
        id: 'put-sb-5',
        type: 'sentence-builder',
        spanishPrompt: 'El informe pone énfasis en la sostenibilidad ambiental.',
        correctSentence: 'The report puts emphasis on environmental sustainability.',
        tokens: ['The', 'report', 'puts', 'emphasis', 'on', 'environmental', 'sustainability.'],
        explanationEn: 'Academic collocation: puts emphasis on + noun phrase.',
        explanationEs: 'Colocación académica: "puts emphasis on".'
      },
      {
        id: 'put-sb-6',
        type: 'sentence-builder',
        spanishPrompt: 'Los investigadores presentaron una nueva hipótesis.',
        correctSentence: 'Researchers put forward a new scientific hypothesis.',
        tokens: ['Researchers', 'put', 'forward', 'a', 'new', 'scientific', 'hypothesis.'],
        explanationEn: 'Past simple phrasal verb: "put forward" (propusieron/plantearon).',
        explanationEs: 'Phrasal verb en pasado: "put forward" (plantearon).'
      },
      {
        id: 'put-sb-7',
        type: 'sentence-builder',
        spanishPrompt: 'Ellos han puesto mucho esfuerzo en este proyecto.',
        correctSentence: 'They have put a lot of effort into this project.',
        tokens: ['They', 'have', 'put', 'a', 'lot', 'of', 'effort', 'into', 'this', 'project.'],
        explanationEn: 'Present perfect collocation: "have put effort into".',
        explanationEs: 'Presente perfecto: "have put effort into".'
      },
      {
        id: 'put-sb-8',
        type: 'sentence-builder',
        spanishPrompt: 'Por favor pon tu teléfono en modo silencioso.',
        correctSentence: 'Please put your mobile phone on silent mode.',
        tokens: ['Please', 'put', 'your', 'mobile', 'phone', 'on', 'silent', 'mode.'],
        explanationEn: 'Polite imperative: Please put + object + on silent mode.',
        explanationEs: 'Imperativo cortés: "Please put your phone on silent mode".'
      },
      {
        id: 'put-sb-9',
        type: 'sentence-builder',
        spanishPrompt: 'No podemos tolerar este comportamiento inapropiado.',
        correctSentence: 'We cannot put up with this inappropriate behavior.',
        tokens: ['We', 'cannot', 'put', 'up', 'with', 'this', 'inappropriate', 'behavior.'],
        explanationEn: 'Three-part phrasal verb: "put up with" (tolerar/soportar).',
        explanationEs: 'Phrasal verb de tres partes: "put up with" (tolerar).'
      },
      {
        id: 'put-sb-10',
        type: 'sentence-builder',
        spanishPrompt: 'Ella apagó el fuego rápidamente con agua.',
        correctSentence: 'She put out the fire quickly with water.',
        tokens: ['She', 'put', 'out', 'the', 'fire', 'quickly', 'with', 'water.'],
        explanationEn: 'Phrasal verb in past: "put out" (extinguir/apagar el fuego).',
        explanationEs: 'Phrasal verb: "put out the fire" (apagar el fuego).'
      }
    ]
  },

  // 27. MEAN
  {
    verbId: 27,
    questions: [
      {
        id: 'mean-mc-1',
        type: 'multiple-choice',
        question: 'What does this technical term ___ in modern computer science?',
        options: ['mean', 'means', 'meant', 'meaning'],
        correctAnswer: 'mean',
        explanationEn: 'After auxiliary "does", the verb remains in base form "mean".',
        explanationEs: 'Tras el auxiliar "does", el verbo va en su forma base "mean".'
      },
      {
        id: 'mean-mc-2',
        type: 'multiple-choice',
        question: 'What is the past simple and past participle of the irregular verb "mean"?',
        options: ['meant', 'meaned', 'means', 'meaning'],
        correctAnswer: 'meant',
        explanationEn: 'The irregular verb "mean" has the past and participle form "meant" /ment/.',
        explanationEs: 'El pasado y participio de "mean" es "meant".'
      },
      {
        id: 'mean-mc-3',
        type: 'multiple-choice',
        question: 'A decline in birth rates ___ an aging workforce in several countries.',
        options: ['means', 'mean', 'meant', 'meaning'],
        correctAnswer: 'means',
        explanationEn: 'Singular subject "A decline" takes "means" in present simple.',
        explanationEs: 'Sujeto singular "A decline" lleva "means".'
      },
      {
        id: 'mean-mc-4',
        type: 'multiple-choice',
        question: 'I didn’t ___ to offend anyone with my critical remarks.',
        options: ['mean', 'meant', 'means', 'meaning'],
        correctAnswer: 'mean',
        explanationEn: 'Idiom: "not mean to + infinitive" (no tener la intención de). Base form after didn’t.',
        explanationEs: '"Not mean to" significa no tener la intención de.'
      },
      {
        id: 'mean-mc-5',
        type: 'multiple-choice',
        question: 'What is the Spanish translation of the verb "mean"?',
        options: ['Significar / Querer decir', 'Mostrar / Demostrar', 'Oír / Escuchar', 'Dejar / Salir'],
        correctAnswer: 'Significar / Querer decir',
        explanationEn: '"Mean" translates to "significar", "querer decir" o "tener la intención".',
        explanationEs: '"Mean" traduce significar o tener la intención de.'
      },
      {
        id: 'mean-mc-6',
        type: 'multiple-choice',
        question: 'What do you ___ by that statement?',
        options: ['mean', 'means', 'meant', 'meaning'],
        correctAnswer: 'mean',
        explanationEn: 'Standard clarifying question: "What do you mean by...?".',
        explanationEs: 'Pregunta de aclaración: "What do you mean by...?".'
      },
      {
        id: 'mean-mc-7',
        type: 'multiple-choice',
        question: 'He ___ every word he said during the solemn graduation speech.',
        options: ['meant', 'mean', 'means', 'meaning'],
        correctAnswer: 'meant',
        explanationEn: 'Past simple conviction: "He meant every word he said".',
        explanationEs: 'Pasado simple: "He meant every word" (dijo de corazón).'
      },
      {
        id: 'mean-mc-8',
        type: 'multiple-choice',
        question: 'Success in IELTS ___ practicing all four communication skills consistently.',
        options: ['means', 'mean', 'meant', 'to mean'],
        correctAnswer: 'means',
        explanationEn: 'Singular abstract subject "Success" takes "means" in present simple.',
        explanationEs: 'Sujeto singular abstracto "Success" concuerda con "means".'
      },
      {
        id: 'mean-mc-9',
        type: 'multiple-choice',
        question: 'These environmental changes ___ that immediate action is indispensable.',
        options: ['mean', 'means', 'meant', 'meaning'],
        correctAnswer: 'mean',
        explanationEn: 'Plural subject "These environmental changes" takes base verb "mean".',
        explanationEs: 'Sujeto plural requiere la forma base "mean".'
      },
      {
        id: 'mean-mc-10',
        type: 'multiple-choice',
        question: 'She is very kind and never ___ to cause any inconvenience.',
        options: ['means', 'mean', 'meant', 'meaning'],
        correctAnswer: 'means',
        explanationEn: 'Third-person singular with frequency adverb: "never means to cause".',
        explanationEs: 'Tercera persona singular con "never means to".'
      },
      // 10 Sentence Builders
      {
        id: 'mean-sb-1',
        type: 'sentence-builder',
        spanishPrompt: '¿Qué significa esta palabra en español?',
        correctSentence: 'What does this word mean in Spanish?',
        tokens: ['What', 'does', 'this', 'word', 'mean', 'in', 'Spanish?'],
        explanationEn: 'Wh-question: What does this word mean in Spanish?',
        explanationEs: 'Pregunta de significado: "What does this word mean in Spanish?".'
      },
      {
        id: 'mean-sb-2',
        type: 'sentence-builder',
        spanishPrompt: 'No tuve la intención de lastimar tus sentimientos.',
        correctSentence: 'I did not mean to hurt your feelings.',
        tokens: ['I', 'did', 'not', 'mean', 'to', 'hurt', 'your', 'feelings.'],
        explanationEn: 'Structure: did not mean to + base verb (hurt).',
        explanationEs: 'Estructura de intención: "did not mean to hurt".'
      },
      {
        id: 'mean-sb-3',
        type: 'sentence-builder',
        spanishPrompt: 'Un mayor presupuesto significa mejores recursos educativos.',
        correctSentence: 'A higher budget means better educational resources.',
        tokens: ['A', 'higher', 'budget', 'means', 'better', 'educational', 'resources.'],
        explanationEn: 'Subject + means + comparative noun phrase.',
        explanationEs: 'Sujeto singular con "means better resources".'
      },
      {
        id: 'mean-sb-4',
        type: 'sentence-builder',
        spanishPrompt: '¿Qué quieres decir con esa explicación?',
        correctSentence: 'What do you mean by that explanation?',
        tokens: ['What', 'do', 'you', 'mean', 'by', 'that', 'explanation?'],
        explanationEn: 'Clarification question: What do you mean by...?',
        explanationEs: 'Pregunta de aclaración: "What do you mean by...?".'
      },
      {
        id: 'mean-sb-5',
        type: 'sentence-builder',
        spanishPrompt: 'Él quiso decir exactamente lo que expresó.',
        correctSentence: 'He meant exactly what he expressed.',
        tokens: ['He', 'meant', 'exactly', 'what', 'he', 'expressed.'],
        explanationEn: 'Past simple "meant" + adverb + subordinate clause.',
        explanationEs: 'Pasado simple "meant" con adverbio de precisión.'
      },
      {
        id: 'mean-sb-6',
        type: 'sentence-builder',
        spanishPrompt: 'Aprobar el examen significa muchas oportunidades nuevas.',
        correctSentence: 'Passing the exam means many new opportunities.',
        tokens: ['Passing', 'the', 'exam', 'means', 'many', 'new', 'opportunities.'],
        explanationEn: 'Gerund subject "Passing the exam" is singular and takes "means".',
        explanationEs: 'El gerundio como sujeto ("Passing the exam") es singular y lleva "means".'
      },
      {
        id: 'mean-sb-7',
        type: 'sentence-builder',
        spanishPrompt: 'Estas estadísticas significan que la economía está creciendo.',
        correctSentence: 'These statistics mean that the economy is growing.',
        tokens: ['These', 'statistics', 'mean', 'that', 'the', 'economy', 'is', 'growing.'],
        explanationEn: 'Plural subject "statistics" takes "mean that + clause".',
        explanationEs: 'Sujeto plural con "mean that the economy is growing".'
      },
      {
        id: 'mean-sb-8',
        type: 'sentence-builder',
        spanishPrompt: 'Ella no quiso decir nada negativo sobre el proyecto.',
        correctSentence: 'She did not mean anything negative about the project.',
        tokens: ['She', 'did', 'not', 'mean', 'anything', 'negative', 'about', 'the', 'project.'],
        explanationEn: 'Negative past: did not mean + indefinite pronoun + adjective.',
        explanationEs: 'Negación en pasado con "did not mean anything negative".'
      },
      {
        id: 'mean-sb-9',
        type: 'sentence-builder',
        spanishPrompt: 'Tus palabras significan mucho para mí.',
        correctSentence: 'Your words mean a lot to me.',
        tokens: ['Your', 'words', 'mean', 'a', 'lot', 'to', 'me.'],
        explanationEn: 'Plural subject "Your words" + mean a lot to me.',
        explanationEs: 'Sujeto plural: "Your words mean a lot to me".'
      },
      {
        id: 'mean-sb-10',
        type: 'sentence-builder',
        spanishPrompt: 'El calentamiento global significa consecuencias graves para el planeta.',
        correctSentence: 'Global warming means severe consequences for the planet.',
        tokens: ['Global', 'warming', 'means', 'severe', 'consequences', 'for', 'the', 'planet.'],
        explanationEn: 'Academic sentence: Global warming means + noun phrase.',
        explanationEs: 'Oración formal: "Global warming means severe consequences...".'
      }
    ]
  },

  // 28. KEEP
  {
    verbId: 28,
    questions: [
      {
        id: 'keep-mc-1',
        type: 'multiple-choice',
        question: 'Students should ___ practicing English speaking every single day.',
        options: ['keep', 'keeps', 'kept', 'keeping'],
        correctAnswer: 'keep',
        explanationEn: 'Pattern: modal "should" + base verb "keep" + gerund "practicing".',
        explanationEs: 'Estructura: should + keep + gerundio (seguir practicando).'
      },
      {
        id: 'keep-mc-2',
        type: 'multiple-choice',
        question: 'What is the past simple and past participle of the irregular verb "keep"?',
        options: ['kept', 'keeped', 'keeps', 'keeping'],
        correctAnswer: 'kept',
        explanationEn: 'The irregular verb "keep" has the past and participle form "kept".',
        explanationEs: 'El pasado y participio de "keep" es "kept".'
      },
      {
        id: 'keep-mc-3',
        type: 'multiple-choice',
        question: 'Always ___ in mind that consistent effort yields the best results.',
        options: ['keep', 'keeps', 'kept', 'keeping'],
        correctAnswer: 'keep',
        explanationEn: 'Collocation: "keep in mind" (tener en cuenta / recordar).',
        explanationEs: 'Colocación fija: "keep in mind" (tener presente).'
      },
      {
        id: 'keep-mc-4',
        type: 'multiple-choice',
        question: 'She ___ a detailed research journal throughout her scientific expedition.',
        options: ['kept', 'keep', 'keeps', 'keeping'],
        correctAnswer: 'kept',
        explanationEn: 'Collocation in past simple: "kept a journal" (llevó un diario).',
        explanationEs: 'Colocación en pasado: "kept a journal".'
      },
      {
        id: 'keep-mc-5',
        type: 'multiple-choice',
        question: 'What does the phrasal verb "keep up with" mean?',
        options: ['Mantenerse al día o al mismo ritmo', 'Guardar bajo llave', 'Olvidar un compromiso', 'Cancelar una suscripción'],
        correctAnswer: 'Mantenerse al día o al mismo ritmo',
        explanationEn: '"Keep up with" means to stay informed or maintain the same pace as something/someone.',
        explanationEs: '"Keep up with" significa mantenerse al día o al ritmo de algo.'
      },
      {
        id: 'keep-mc-6',
        type: 'multiple-choice',
        question: 'What is the Spanish translation of the verb "keep"?',
        options: ['Mantener / Guardar / Continuar', 'Permitir / Dejar', 'Sentar / Ubicar', 'Perder / Extraviar'],
        correctAnswer: 'Mantener / Guardar / Continuar',
        explanationEn: '"Keep" translates to "mantener", "guardar" o "seguir/continuar".',
        explanationEs: '"Keep" traduce mantener, guardar o continuar.'
      },
      {
        id: 'keep-mc-7',
        type: 'multiple-choice',
        question: 'He ___ calm and focused during the intense examination.',
        options: ['kept', 'keep', 'keeps', 'keeping'],
        correctAnswer: 'kept',
        explanationEn: 'Collocation in past simple: "kept calm" (se mantuvo tranquilo).',
        explanationEs: 'Colocación en pasado: "kept calm" (mantuvo la calma).'
      },
      {
        id: 'keep-mc-8',
        type: 'multiple-choice',
        question: 'Please ___ your receipts for reimbursement purposes.',
        options: ['keep', 'kept', 'keeps', 'keeping'],
        correctAnswer: 'keep',
        explanationEn: 'Imperative uses base verb "keep" (guardar/conservar).',
        explanationEs: 'Modo imperativo con "keep" en sentido de guardar.'
      },
      {
        id: 'keep-mc-9',
        type: 'multiple-choice',
        question: 'Organizations must ___ track of their carbon emissions accurately.',
        options: ['keep', 'keeps', 'kept', 'keeping'],
        correctAnswer: 'keep',
        explanationEn: 'Academic collocation: "keep track of" (llevar el registro/seguimiento de).',
        explanationEs: 'Colocación: "keep track of" (llevar el registro o control).'
      },
      {
        id: 'keep-mc-10',
        type: 'multiple-choice',
        question: 'She has ___ her promise to support community education initiatives.',
        options: ['kept', 'keep', 'keeps', 'keeping'],
        correctAnswer: 'kept',
        explanationEn: 'Collocation in present perfect: "has kept her promise" (ha cumplido su promesa).',
        explanationEs: 'Presente perfecto con colocación: "has kept her promise".'
      },
      // 10 Sentence Builders
      {
        id: 'keep-sb-1',
        type: 'sentence-builder',
        spanishPrompt: 'Sigue practicando y mejorarás rápidamente.',
        correctSentence: 'Keep practicing and you will improve quickly.',
        tokens: ['Keep', 'practicing', 'and', 'you', 'will', 'improve', 'quickly.'],
        explanationEn: 'Imperative keep + gerund "practicing" + compound future clause.',
        explanationEs: 'Estructura: Keep + gerundio ("Keep practicing").'
      },
      {
        id: 'keep-sb-2',
        type: 'sentence-builder',
        spanishPrompt: 'Ten en cuenta que la puntualidad es esencial.',
        correctSentence: 'Keep in mind that punctuality is essential.',
        tokens: ['Keep', 'in', 'mind', 'that', 'punctuality', 'is', 'essential.'],
        explanationEn: 'Collocation: "Keep in mind that...".',
        explanationEs: 'Colocación fija: "Keep in mind that..." (ten presente que).'
      },
      {
        id: 'keep-sb-3',
        type: 'sentence-builder',
        spanishPrompt: 'Ella mantuvo la calma durante la emergencia.',
        correctSentence: 'She kept calm during the emergency situation.',
        tokens: ['She', 'kept', 'calm', 'during', 'the', 'emergency', 'situation.'],
        explanationEn: 'Past simple "kept calm" + preposition "during".',
        explanationEs: 'Pasado simple: "kept calm during the emergency".'
      },
      {
        id: 'keep-sb-4',
        type: 'sentence-builder',
        spanishPrompt: 'Debemos mantenernos al día con las nuevas tecnologías.',
        correctSentence: 'We must keep up with new technologies.',
        tokens: ['We', 'must', 'keep', 'up', 'with', 'new', 'technologies.'],
        explanationEn: 'Phrasal verb "keep up with" (mantenerse al día).',
        explanationEs: 'Phrasal verb: "keep up with" (mantenerse al día con).'
      },
      {
        id: 'keep-sb-5',
        type: 'sentence-builder',
        spanishPrompt: 'Él guardó todos los documentos importantes en un lugar seguro.',
        correctSentence: 'He kept all important documents in a safe place.',
        tokens: ['He', 'kept', 'all', 'important', 'documents', 'in', 'a', 'safe', 'place.'],
        explanationEn: 'Past simple "kept" + object + location.',
        explanationEs: 'Pasado simple con sentido de guardar: "kept all documents in a safe place".'
      },
      {
        id: 'keep-sb-6',
        type: 'sentence-builder',
        spanishPrompt: 'Los científicos llevan un registro de los cambios climáticos.',
        correctSentence: 'Scientists keep track of climate changes carefully.',
        tokens: ['Scientists', 'keep', 'track', 'of', 'climate', 'changes', 'carefully.'],
        explanationEn: 'Collocation: "keep track of" + noun phrase + adverb.',
        explanationEs: 'Colocación: "keep track of" (hacer seguimiento a).'
      },
      {
        id: 'keep-sb-7',
        type: 'sentence-builder',
        spanishPrompt: 'Ella siempre cumple sus promesas a sus amigos.',
        correctSentence: 'She always keeps her promises to her friends.',
        tokens: ['She', 'always', 'keeps', 'her', 'promises', 'to', 'her', 'friends.'],
        explanationEn: 'Third person "keeps her promises".',
        explanationEs: 'Colocación: "keeps her promises" (cumple sus promesas).'
      },
      {
        id: 'keep-sb-8',
        type: 'sentence-builder',
        spanishPrompt: 'Por favor guarda silencio en la sala de lectura.',
        correctSentence: 'Please keep quiet in the reading room.',
        tokens: ['Please', 'keep', 'quiet', 'in', 'the', 'reading', 'room.'],
        explanationEn: 'Polite imperative: "Please keep quiet".',
        explanationEs: 'Imperativo cortés: "Please keep quiet" (guarda silencio).'
      },
      {
        id: 'keep-sb-9',
        type: 'sentence-builder',
        spanishPrompt: 'Ellos continuaron trabajando a pesar de las dificultades.',
        correctSentence: 'They kept on working despite the difficulties.',
        tokens: ['They', 'kept', 'on', 'working', 'despite', 'the', 'difficulties.'],
        explanationEn: 'Phrasal verb in past: "kept on working" + preposition "despite".',
        explanationEs: 'Phrasal verb en pasado: "kept on working" (continuaron trabajando).'
      },
      {
        id: 'keep-sb-10',
        type: 'sentence-builder',
        spanishPrompt: 'Mantén una actitud positiva hacia tu aprendizaje.',
        correctSentence: 'Keep a positive attitude toward your learning.',
        tokens: ['Keep', 'a', 'positive', 'attitude', 'toward', 'your', 'learning.'],
        explanationEn: 'Imperative: Keep + adjective + noun + preposition "toward".',
        explanationEs: 'Imperativo: "Keep a positive attitude toward...".'
      }
    ]
  },

  // 29. LET
  {
    verbId: 29,
    questions: [
      {
        id: 'let-mc-1',
        type: 'multiple-choice',
        question: 'Digital platforms ___ students collaborate from anywhere in the world.',
        options: ['let', 'lets', 'letted', 'letting'],
        correctAnswer: 'let',
        explanationEn: 'Plural subject "Digital platforms" takes base verb "let". Followed by bare infinitive "collaborate".',
        explanationEs: 'Sujeto plural con "let". Va seguido de infinitivo sin "to" ("collaborate").'
      },
      {
        id: 'let-mc-2',
        type: 'multiple-choice',
        question: 'What is the past simple and past participle of the irregular verb "let"?',
        options: ['let', 'letted', 'lets', 'letting'],
        correctAnswer: 'let',
        explanationEn: '"Let" is an invariant irregular verb: base, past, and participle are all "let".',
        explanationEs: '"Let" es invariable: presente, pasado y participio son "let".'
      },
      {
        id: 'let-mc-3',
        type: 'multiple-choice',
        question: 'Choose the grammatically correct sentence:',
        options: ['The teacher let us use our dictionaries.', 'The teacher let us to use our dictionaries.', 'The teacher let us using our dictionaries.', 'The teacher letted us use our dictionaries.'],
        correctAnswer: 'The teacher let us use our dictionaries.',
        explanationEn: 'Grammar rule: let + object + bare infinitive (WITHOUT "to").',
        explanationEs: 'Regla gramatical: let + objeto + verbo base SIN "to".'
      },
      {
        id: 'let-mc-4',
        type: 'multiple-choice',
        question: 'What does the phrasal verb "let down" mean?',
        options: ['Decepcionar a alguien', 'Dejar entrar a un lugar', 'Permitir salir', 'Bajar el volumen'],
        correctAnswer: 'Decepcionar a alguien',
        explanationEn: '"Let down" means to disappoint someone by failing to keep a promise or meet expectations.',
        explanationEs: '"Let down" significa decepcionar a alguien.'
      },
      {
        id: 'let-mc-5',
        type: 'multiple-choice',
        question: 'What is the Spanish translation of the verb "let"?',
        options: ['Permitir / Dejar', 'Poner / Colocar', 'Comenzar / Iniciar', 'Estar de pie'],
        correctAnswer: 'Permitir / Dejar',
        explanationEn: '"Let" translates to "permitir" or "dejar" (allow).',
        explanationEs: '"Let" traduce permitir o dejar.'
      },
      {
        id: 'let-mc-6',
        type: 'multiple-choice',
        question: 'Please ___ me know if you have any questions regarding the schedule.',
        options: ['let', 'lets', 'letted', 'letting'],
        correctAnswer: 'let',
        explanationEn: 'Standard polite expression: "let me know" (hazme saber / avísame).',
        explanationEs: 'Expresión estándar: "let me know" (avísame / déjame saber).'
      },
      {
        id: 'let-mc-7',
        type: 'multiple-choice',
        question: 'She didn’t ___ fear stop her from applying for the scholarship.',
        options: ['let', 'lets', 'letted', 'letting'],
        correctAnswer: 'let',
        explanationEn: 'Negative structure: didn’t + base form "let" + object + bare verb "stop".',
        explanationEs: 'Estructura negativa con "didn’t let fear stop her".'
      },
      {
        id: 'let-mc-8',
        type: 'multiple-choice',
        question: '___ begin our presentation on international environmental treaties.',
        options: ['Let’s', 'Lets', 'Let', 'Let us to'],
        correctAnswer: 'Let’s',
        explanationEn: 'Contraction "Let’s" (Let us) introduces a first-person plural proposal/imperative.',
        explanationEs: '"Let’s" introduce una propuesta colectiva (vamos a / empecemos).'
      },
      {
        id: 'let-mc-9',
        type: 'multiple-choice',
        question: 'The security guard ___ the visitors enter the auditorium.',
        options: ['let', 'lets', 'letted', 'letting'],
        correctAnswer: 'let',
        explanationEn: 'Past simple of "let" is "let" (let the visitors enter).',
        explanationEs: 'Pasado simple de "let" es "let".'
      },
      {
        id: 'let-mc-10',
        type: 'multiple-choice',
        question: 'I promise I will not ___ you down in this project.',
        options: ['let', 'lets', 'letted', 'letting'],
        correctAnswer: 'let',
        explanationEn: 'Phrasal idiom: "will not let you down" (no te decepcionaré).',
        explanationEs: '"Will not let you down" significa no te decepcionaré.'
      },
      // 10 Sentence Builders
      {
        id: 'let-sb-1',
        type: 'sentence-builder',
        spanishPrompt: 'Avísame si necesitas alguna aclaración.',
        correctSentence: 'Let me know if you need any clarification.',
        tokens: ['Let', 'me', 'know', 'if', 'you', 'need', 'any', 'clarification.'],
        explanationEn: 'Imperative idiom: "Let me know if...".',
        explanationEs: 'Expresión clave: "Let me know if you need...".'
      },
      {
        id: 'let-sb-2',
        type: 'sentence-builder',
        spanishPrompt: 'El profesor nos dejó salir diez minutos temprano.',
        correctSentence: 'The teacher let us leave ten minutes early.',
        tokens: ['The', 'teacher', 'let', 'us', 'leave', 'ten', 'minutes', 'early.'],
        explanationEn: 'Past simple "let" + object pronoun (us) + bare infinitive (leave).',
        explanationEs: 'Estructura causativa: let + objeto + verbo base (sin "to").'
      },
      {
        id: 'let-sb-3',
        type: 'sentence-builder',
        spanishPrompt: 'No dejaré que este obstáculo me detenga.',
        correctSentence: 'I will not let this obstacle stop me.',
        tokens: ['I', 'will', 'not', 'let', 'this', 'obstacle', 'stop', 'me.'],
        explanationEn: 'Future negative: will not let + noun + bare verb.',
        explanationEs: 'Futuro: "will not let this obstacle stop me".'
      },
      {
        id: 'let-sb-4',
        type: 'sentence-builder',
        spanishPrompt: 'Comencemos la lección de gramática ahora.',
        correctSentence: 'Let us start the grammar lesson now.',
        tokens: ['Let', 'us', 'start', 'the', 'grammar', 'lesson', 'now.'],
        explanationEn: 'Formal collective proposal: Let us start + object + time.',
        explanationEs: 'Propuesta formal: "Let us start the lesson now".'
      },
      {
        id: 'let-sb-5',
        type: 'sentence-builder',
        spanishPrompt: 'Ella nunca decepciona a su equipo de trabajo.',
        correctSentence: 'She never lets her work team down.',
        tokens: ['She', 'never', 'lets', 'her', 'work', 'team', 'down.'],
        explanationEn: 'Phrasal verb: lets + object + down.',
        explanationEs: 'Phrasal verb: "lets her team down" (decepciona a su equipo).'
      },
      {
        id: 'let-sb-6',
        type: 'sentence-builder',
        spanishPrompt: 'El guardia de seguridad no les permitió entrar sin identificación.',
        correctSentence: 'The security guard did not let them enter without identification.',
        tokens: ['The', 'security', 'guard', 'did', 'not', 'let', 'them', 'enter', 'without', 'identification.'],
        explanationEn: 'Past negative: did not let them enter + preposition.',
        explanationEs: 'Negación en pasado: "did not let them enter without identification".'
      },
      {
        id: 'let-sb-7',
        type: 'sentence-builder',
        spanishPrompt: 'Deja que los estudiantes expresen sus propias opiniones.',
        correctSentence: 'Let the students express their own opinions freely.',
        tokens: ['Let', 'the', 'students', 'express', 'their', 'own', 'opinions', 'freely.'],
        explanationEn: 'Imperative: Let + noun phrase + bare verb (express) + adverb.',
        explanationEs: 'Imperativo: "Let the students express their opinions...".'
      },
      {
        id: 'let-sb-8',
        type: 'sentence-builder',
        spanishPrompt: 'No te desanimes por un resultado temporal.',
        correctSentence: 'Do not let a temporary result discourage you.',
        tokens: ['Do', 'not', 'let', 'a', 'temporary', 'result', 'discourage', 'you.'],
        explanationEn: 'Negative imperative: Do not let + noun + bare verb + object.',
        explanationEs: 'Imperativo negativo: "Do not let a result discourage you".'
      },
      {
        id: 'let-sb-9',
        type: 'sentence-builder',
        spanishPrompt: 'Dejemos las cosas claras desde el principio.',
        correctSentence: 'Let us make things clear from the beginning.',
        tokens: ['Let', 'us', 'make', 'things', 'clear', 'from', 'the', 'beginning.'],
        explanationEn: 'Collocation: "make things clear" preceded by "Let us".',
        explanationEs: 'Expresión: "Let us make things clear from the beginning".'
      },
      {
        id: 'let-sb-10',
        type: 'sentence-builder',
        spanishPrompt: 'Ella no dejó que nadie viera sus notas privadas.',
        correctSentence: 'She did not let anyone see her private notes.',
        tokens: ['She', 'did', 'not', 'let', 'anyone', 'see', 'her', 'private', 'notes.'],
        explanationEn: 'Structure: did not let + anyone + bare verb (see).',
        explanationEs: 'Estructura: "did not let anyone see".'
      }
    ]
  },

  // 30. BEGIN
  {
    verbId: 30,
    questions: [
      {
        id: 'begin-mc-1',
        type: 'multiple-choice',
        question: 'The examination will ___ promptly at 8:00 AM in Hall B.',
        options: ['begin', 'begins', 'began', 'begun'],
        correctAnswer: 'begin',
        explanationEn: 'Modal "will" is followed by the base verb "begin".',
        explanationEs: 'El modal "will" va seguido de la forma base "begin".'
      },
      {
        id: 'begin-mc-2',
        type: 'multiple-choice',
        question: 'What is the past simple of the irregular verb "begin"?',
        options: ['began', 'begun', 'beginned', 'begins'],
        correctAnswer: 'began',
        explanationEn: 'The past simple of "begin" is "began" /bɪˈɡæn/.',
        explanationEs: 'El pasado simple de "begin" es "began".'
      },
      {
        id: 'begin-mc-3',
        type: 'multiple-choice',
        question: 'What is the past participle of the verb "begin"?',
        options: ['begun', 'began', 'beginned', 'beginning'],
        correctAnswer: 'begun',
        explanationEn: 'The past participle of "begin" is "begun" (e.g., has begun).',
        explanationEs: 'El participio pasado de "begin" es "begun".'
      },
      {
        id: 'begin-mc-4',
        type: 'multiple-choice',
        question: 'The Industrial Revolution ___ a new era of global manufacturing.',
        options: ['began', 'begun', 'begin', 'begins'],
        correctAnswer: 'began',
        explanationEn: 'Historical completed event in past simple: "The Industrial Revolution began...".',
        explanationEs: 'Evento histórico en pasado simple: "began".'
      },
      {
        id: 'begin-mc-5',
        type: 'multiple-choice',
        question: 'What is the Spanish translation of the verb "begin"?',
        options: ['Comenzar / Iniciar', 'Terminar / Concluir', 'Sostener / Mantener', 'Parecer / Aparentar'],
        correctAnswer: 'Comenzar / Iniciar',
        explanationEn: '"Begin" translates to "comenzar" or "iniciar".',
        explanationEs: '"Begin" traduce comenzar o iniciar.'
      },
      {
        id: 'begin-mc-6',
        type: 'multiple-choice',
        question: 'Classes ___ in February and conclude in late November.',
        options: ['begin', 'begins', 'began', 'begun'],
        correctAnswer: 'begin',
        explanationEn: 'Plural subject "Classes" takes base form "begin" in present simple.',
        explanationEs: 'Sujeto plural "Classes" concuerda con "begin".'
      },
      {
        id: 'begin-mc-7',
        type: 'multiple-choice',
        question: 'The research team has already ___ the preliminary clinical phase.',
        options: ['begun', 'began', 'begin', 'beginning'],
        correctAnswer: 'begun',
        explanationEn: 'Present perfect: has already + past participle "begun".',
        explanationEs: 'Presente perfecto: has already + participio "begun".'
      },
      {
        id: 'begin-mc-8',
        type: 'multiple-choice',
        question: 'To ___ with, we must define the primary objectives of the study.',
        options: ['begin', 'began', 'begun', 'begins'],
        correctAnswer: 'begin',
        explanationEn: 'Discourse connector: "To begin with" (Para empezar / En primer lugar).',
        explanationEs: 'Conector discursivo para IELTS: "To begin with" (Para empezar).'
      },
      {
        id: 'begin-mc-9',
        type: 'multiple-choice',
        question: 'She ___ to realize the true value of daily language immersion.',
        options: ['began', 'begun', 'begins', 'beginning'],
        correctAnswer: 'began',
        explanationEn: 'Past simple action: "She began to realize...".',
        explanationEs: 'Acción en pasado simple: "began to realize".'
      },
      {
        id: 'begin-mc-10',
        type: 'multiple-choice',
        question: 'When does the official registration period ___ for next semester?',
        options: ['begin', 'begins', 'began', 'begun'],
        correctAnswer: 'begin',
        explanationEn: 'Question with auxiliary "does" uses base verb "begin".',
        explanationEs: 'Pregunta con "does" requiere la forma base "begin".'
      },
      // 10 Sentence Builders
      {
        id: 'begin-sb-1',
        type: 'sentence-builder',
        spanishPrompt: 'La conferencia comenzará a las nueve en punto.',
        correctSentence: 'The conference will begin at nine o’clock.',
        tokens: ['The', 'conference', 'will', 'begin', 'at', 'nine', 'o’clock.'],
        explanationEn: 'Future simple: will begin at + time expression.',
        explanationEs: 'Futuro simple: "will begin at nine o’clock".'
      },
      {
        id: 'begin-sb-2',
        type: 'sentence-builder',
        spanishPrompt: 'Para empezar, debemos analizar los datos cuidadosamente.',
        correctSentence: 'To begin with we must analyze the data carefully.',
        tokens: ['To', 'begin', 'with', 'we', 'must', 'analyze', 'the', 'data', 'carefully.'],
        explanationEn: 'IELTS discourse marker: "To begin with" + main clause.',
        explanationEs: 'Conector para ensayos: "To begin with we must analyze...".'
      },
      {
        id: 'begin-sb-3',
        type: 'sentence-builder',
        spanishPrompt: 'El semestre académico comenzó la semana pasada.',
        correctSentence: 'The academic semester began last week.',
        tokens: ['The', 'academic', 'semester', 'began', 'last', 'week.'],
        explanationEn: 'Past simple "began" + time expression "last week".',
        explanationEs: 'Pasado simple "began" con indicador temporal.'
      },
      {
        id: 'begin-sb-4',
        type: 'sentence-builder',
        spanishPrompt: 'Los científicos han comenzado una nueva investigación.',
        correctSentence: 'Scientists have begun a new scientific investigation.',
        tokens: ['Scientists', 'have', 'begun', 'a', 'new', 'scientific', 'investigation.'],
        explanationEn: 'Present perfect: have begun (past participle).',
        explanationEs: 'Presente perfecto con el participio "begun".'
      },
      {
        id: 'begin-sb-5',
        type: 'sentence-builder',
        spanishPrompt: 'Ella comenzó a estudiar inglés a una edad temprana.',
        correctSentence: 'She began to study English at an early age.',
        tokens: ['She', 'began', 'to', 'study', 'English', 'at', 'an', 'early', 'age.'],
        explanationEn: 'Past simple "began" + infinitive "to study" + time phrase.',
        explanationEs: 'Pasado simple: "began to study English at an early age".'
      },
      {
        id: 'begin-sb-6',
        type: 'sentence-builder',
        spanishPrompt: '¿A qué hora comienza el examen mañana?',
        correctSentence: 'What time does the exam begin tomorrow?',
        tokens: ['What', 'time', 'does', 'the', 'exam', 'begin', 'tomorrow?'],
        explanationEn: 'Question: What time does + subject + begin + time?',
        explanationEs: 'Pregunta en presente simple: "What time does the exam begin...?".'
      },
      {
        id: 'begin-sb-7',
        type: 'sentence-builder',
        spanishPrompt: 'Un nuevo capítulo en su carrera ha comenzado.',
        correctSentence: 'A new chapter in her career has begun.',
        tokens: ['A', 'new', 'chapter', 'in', 'her', 'career', 'has', 'begun.'],
        explanationEn: 'Subject + has begun (present perfect).',
        explanationEs: 'Presente perfecto: "has begun".'
      },
      {
        id: 'begin-sb-8',
        type: 'sentence-builder',
        spanishPrompt: 'Comencemos repasando el vocabulario esencial.',
        correctSentence: 'Let us begin by reviewing the essential vocabulary.',
        tokens: ['Let', 'us', 'begin', 'by', 'reviewing', 'the', 'essential', 'vocabulary.'],
        explanationEn: 'Structure: begin by + gerund "reviewing".',
        explanationEs: 'Estructura: "begin by + gerundio" (comenzar repasando).'
      },
      {
        id: 'begin-sb-9',
        type: 'sentence-builder',
        spanishPrompt: 'El concierto comenzó tan pronto como llegó el público.',
        correctSentence: 'The concert began as soon as the audience arrived.',
        tokens: ['The', 'concert', 'began', 'as', 'soon', 'as', 'the', 'audience', 'arrived.'],
        explanationEn: 'Past time clause with "as soon as".',
        explanationEs: 'Cláusula temporal de pasado con "as soon as".'
      },
      {
        id: 'begin-sb-10',
        type: 'sentence-builder',
        spanishPrompt: 'Las negociaciones diplomáticas comenzaron esta mañana.',
        correctSentence: 'Diplomatic negotiations began this morning in Geneva.',
        tokens: ['Diplomatic', 'negotiations', 'began', 'this', 'morning', 'in', 'Geneva.'],
        explanationEn: 'Plural formal subject + began + time + location.',
        explanationEs: 'Sujeto formal con pasado simple: "negotiations began this morning".'
      }
    ]
  }
];
