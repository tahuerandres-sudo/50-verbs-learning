import { VerbQuestionBank } from '../../types';

export const VERBS_01_10_QUESTIONS: VerbQuestionBank[] = [
  // 1. BE
  {
    verbId: 1,
    questions: [
      // 10 Multiple Choice
      {
        id: 'be-mc-1',
        type: 'multiple-choice',
        question: 'She ___ a dedicated biology researcher at the university.',
        options: ['is', 'are', 'be', 'am'],
        correctAnswer: 'is',
        explanationEn: 'Use "is" for third-person singular subjects (he, she, it) in the present simple.',
        explanationEs: 'Se usa "is" para la tercera persona del singular (he, she, it) en presente simple.'
      },
      {
        id: 'be-mc-2',
        type: 'multiple-choice',
        question: 'What is the past participle form of the verb "be"?',
        options: ['been', 'was', 'were', 'being'],
        correctAnswer: 'been',
        explanationEn: 'The past participle of "be" is "been", used in perfect tenses (e.g., have been).',
        explanationEs: 'El participio pasado de "be" es "been", utilizado en tiempos perfectos.'
      },
      {
        id: 'be-mc-3',
        type: 'multiple-choice',
        question: 'Choose the correct sentence:',
        options: ['They was present at the international conference.', 'They were present at the international conference.', 'They is present at the international conference.', 'They been present at the international conference.'],
        correctAnswer: 'They were present at the international conference.',
        explanationEn: '"They" is plural, so it requires "were" in the past simple tense.',
        explanationEs: '"They" es plural, por lo que requiere "were" en pasado simple.'
      },
      {
        id: 'be-mc-4',
        type: 'multiple-choice',
        question: 'What is the Spanish translation of the verb "be"?',
        options: ['Ser o Estar', 'Tener o Haber', 'Hacer o Fabricar', 'Ir o Venir'],
        correctAnswer: 'Ser o Estar',
        explanationEn: 'The verb "be" translates to "ser" or "estar" in Spanish depending on the context.',
        explanationEs: 'El verbo "be" traduce "ser" o "estar" según el contexto.'
      },
      {
        id: 'be-mc-5',
        type: 'multiple-choice',
        question: 'We ___ optimistic about the results of the ICFES exam.',
        options: ['are', 'is', 'am', 'was'],
        correctAnswer: 'are',
        explanationEn: 'The plural subject "we" takes the present tense verb "are".',
        explanationEs: 'El sujeto plural "we" utiliza "are" en el presente simple.'
      },
      {
        id: 'be-mc-6',
        type: 'multiple-choice',
        question: 'If I ___ you, I would register for the IELTS preparatory course.',
        options: ['were', 'was', 'am', 'be'],
        correctAnswer: 'were',
        explanationEn: 'In standard formal English and second conditionals, "were" is used with "I" (If I were you).',
        explanationEs: 'En el segundo condicional formal se usa "were" con "I" (If I were you).'
      },
      {
        id: 'be-mc-7',
        type: 'multiple-choice',
        question: 'Renewable energy ___ becoming more affordable each year.',
        options: ['is', 'are', 'were', 'am'],
        correctAnswer: 'is',
        explanationEn: 'Singular uncountable nouns like "energy" take the singular verb "is".',
        explanationEs: '"Energy" es un sustantivo singular no contable, por lo que lleva "is".'
      },
      {
        id: 'be-mc-8',
        type: 'multiple-choice',
        question: 'Which sentence is grammatically correct?',
        options: ['English is spoken by millions around the globe.', 'English are spoken by millions around the globe.', 'English were spoke by millions around the globe.', 'English be spoken by millions around the globe.'],
        correctAnswer: 'English is spoken by millions around the globe.',
        explanationEn: 'Passive voice with singular subject "English" requires "is" + past participle "spoken".',
        explanationEs: 'Voz pasiva con sujeto singular requiere "is" + participio "spoken".'
      },
      {
        id: 'be-mc-9',
        type: 'multiple-choice',
        question: 'The students ___ very excited about their graduation ceremony.',
        options: ['were', 'was', 'is', 'be'],
        correctAnswer: 'were',
        explanationEn: '"The students" is a plural subject requiring the plural past form "were".',
        explanationEs: '"The students" es plural y requiere la forma pasada "were".'
      },
      {
        id: 'be-mc-10',
        type: 'multiple-choice',
        question: 'I ___ thoroughly prepared for the academic interview.',
        options: ['am', 'is', 'are', 'be'],
        correctAnswer: 'am',
        explanationEn: 'The first person singular pronoun "I" requires "am" in present simple.',
        explanationEs: 'El pronombre "I" siempre se combina con "am" en presente simple.'
      },
      // 10 Sentence Builders
      {
        id: 'be-sb-1',
        type: 'sentence-builder',
        spanishPrompt: 'Ella es una excelente estudiante de inglés.',
        correctSentence: 'She is an excellent English student.',
        tokens: ['She', 'is', 'an', 'excellent', 'English', 'student.'],
        explanationEn: 'Subject (She) + verb (is) + article (an) + adjective (excellent) + noun modifier (English) + noun (student).',
        explanationEs: 'Estructura básica: Sujeto + verbo to be + artículo + adjetivo + sustantivo.'
      },
      {
        id: 'be-sb-2',
        type: 'sentence-builder',
        spanishPrompt: 'Nosotros estamos listos para el examen.',
        correctSentence: 'We are ready for the exam.',
        tokens: ['We', 'are', 'ready', 'for', 'the', 'exam.'],
        explanationEn: 'Subject (We) + verb (are) + adjective (ready) + prepositional phrase (for the exam).',
        explanationEs: '"We are ready" expresa el estado de preparación con la preposición "for".'
      },
      {
        id: 'be-sb-3',
        type: 'sentence-builder',
        spanishPrompt: 'El examen fue muy difícil ayer.',
        correctSentence: 'The exam was very difficult yesterday.',
        tokens: ['The', 'exam', 'was', 'very', 'difficult', 'yesterday.'],
        explanationEn: 'Past simple of "be" for singular subject (The exam) is "was".',
        explanationEs: 'En pasado simple, el sujeto singular "The exam" lleva "was".'
      },
      {
        id: 'be-sb-4',
        type: 'sentence-builder',
        spanishPrompt: 'Ellos han estado en la biblioteca toda la tarde.',
        correctSentence: 'They have been in the library all afternoon.',
        tokens: ['They', 'have', 'been', 'in', 'the', 'library', 'all', 'afternoon.'],
        explanationEn: 'Present perfect uses "have" + past participle "been".',
        explanationEs: 'El presente perfecto se forma con "have" + participio "been".'
      },
      {
        id: 'be-sb-5',
        type: 'sentence-builder',
        spanishPrompt: 'La educación es la clave del éxito.',
        correctSentence: 'Education is the key to success.',
        tokens: ['Education', 'is', 'the', 'key', 'to', 'success.'],
        explanationEn: 'Abstract singular noun "Education" takes the singular verb "is".',
        explanationEs: 'El sustantivo abstracto "Education" concuerda con "is".'
      },
      {
        id: 'be-sb-6',
        type: 'sentence-builder',
        spanishPrompt: 'Yo seré un profesional exitoso.',
        correctSentence: 'I will be a successful professional.',
        tokens: ['I', 'will', 'be', 'a', 'successful', 'professional.'],
        explanationEn: 'Future tense is formed with modal auxiliary "will" + base verb "be".',
        explanationEs: 'El futuro simple se construye con "will" + verbo base "be".'
      },
      {
        id: 'be-sb-7',
        type: 'sentence-builder',
        spanishPrompt: 'Mis profesores son muy comprensivos y pacientes.',
        correctSentence: 'My teachers are very understanding and patient.',
        tokens: ['My', 'teachers', 'are', 'very', 'understanding', 'and', 'patient.'],
        explanationEn: 'Plural subject "My teachers" takes "are" followed by coordinate adjectives.',
        explanationEs: 'Sujeto plural "My teachers" requiere "are".'
      },
      {
        id: 'be-sb-8',
        type: 'sentence-builder',
        spanishPrompt: 'La biblioteca estaba cerrada el domingo.',
        correctSentence: 'The library was closed on Sunday.',
        tokens: ['The', 'library', 'was', 'closed', 'on', 'Sunday.'],
        explanationEn: '"The library" is singular past: "was closed" with preposition "on" for days.',
        explanationEs: '"The library was closed on Sunday" utiliza "on" para días de la semana.'
      },
      {
        id: 'be-sb-9',
        type: 'sentence-builder',
        spanishPrompt: 'Tú eres capaz de lograr tus metas.',
        correctSentence: 'You are capable of achieving your goals.',
        tokens: ['You', 'are', 'capable', 'of', 'achieving', 'your', 'goals.'],
        explanationEn: '"Capable of" takes a gerund (-ing) verb form "achieving".',
        explanationEs: 'El adjetivo "capable of" siempre va seguido de gerundio (-ing).'
      },
      {
        id: 'be-sb-10',
        type: 'sentence-builder',
        spanishPrompt: 'El informe debe ser claro y conciso.',
        correctSentence: 'The report must be clear and concise.',
        tokens: ['The', 'report', 'must', 'be', 'clear', 'and', 'concise.'],
        explanationEn: 'Modal auxiliary "must" is followed directly by base form "be".',
        explanationEs: 'El modal "must" se acompaña de la forma base "be".'
      }
    ]
  },

  // 2. HAVE
  {
    verbId: 2,
    questions: [
      {
        id: 'have-mc-1',
        type: 'multiple-choice',
        question: 'Carlos ___ two sisters who study medicine in Bogotá.',
        options: ['has', 'have', 'having', 'had'],
        correctAnswer: 'has',
        explanationEn: 'Third person singular (Carlos / He) takes "has" in present simple.',
        explanationEs: 'La tercera persona singular (Carlos) requiere "has" en presente simple.'
      },
      {
        id: 'have-mc-2',
        type: 'multiple-choice',
        question: 'What is the past tense and past participle of the verb "have"?',
        options: ['had', 'haved', 'has', 'having'],
        correctAnswer: 'had',
        explanationEn: 'The irregular verb "have" has the past simple and past participle form "had".',
        explanationEs: 'El verbo irregular "have" tiene como pasado y participio la forma "had".'
      },
      {
        id: 'have-mc-3',
        type: 'multiple-choice',
        question: 'Choose the correct sentence:',
        options: ['She have a new computer.', 'She has a new computer.', 'She having a new computer.', 'She haves a new computer.'],
        correctAnswer: 'She has a new computer.',
        explanationEn: 'In present simple with "she", the correct form is "has".',
        explanationEs: 'En presente simple con "she", la conjugación correcta es "has".'
      },
      {
        id: 'have-mc-4',
        type: 'multiple-choice',
        question: 'Students ___ to submit their academic essays by Friday afternoon.',
        options: ['have', 'has', 'having', 'had to'],
        correctAnswer: 'have',
        explanationEn: 'Plural subject "Students" uses "have to" to express obligation.',
        explanationEs: '"Students" es plural y utiliza "have to" para expresar deber u obligación.'
      },
      {
        id: 'have-mc-5',
        type: 'multiple-choice',
        question: 'We ___ already finished the preliminary research proposal.',
        options: ['have', 'has', 'is', 'did'],
        correctAnswer: 'have',
        explanationEn: 'Present perfect with "we" requires auxiliary "have" + past participle "finished".',
        explanationEs: 'El presente perfecto con "we" requiere el auxiliar "have".'
      },
      {
        id: 'have-mc-6',
        type: 'multiple-choice',
        question: 'Does your university ___ modern science laboratories?',
        options: ['have', 'has', 'had', 'having'],
        correctAnswer: 'have',
        explanationEn: 'In questions with auxiliary "Does", the main verb reverts to base form "have".',
        explanationEs: 'En preguntas con el auxiliar "Does", el verbo principal vuelve a su forma base "have".'
      },
      {
        id: 'have-mc-7',
        type: 'multiple-choice',
        question: 'I ___ an inspiring conversation with my academic advisor yesterday.',
        options: ['had', 'have', 'has', 'having'],
        correctAnswer: 'had',
        explanationEn: 'The time marker "yesterday" dictates the simple past form "had".',
        explanationEs: 'El marcador de tiempo "yesterday" exige el tiempo pasado simple "had".'
      },
      {
        id: 'have-mc-8',
        type: 'multiple-choice',
        question: 'What is the primary Spanish translation of "have"?',
        options: ['Tener / Haber', 'Hacer / Construir', 'Saber / Conocer', 'Dar / Ofrecer'],
        correctAnswer: 'Tener / Haber',
        explanationEn: '"Have" means to possess (tener) and functions as an auxiliary (haber).',
        explanationEs: '"Have" significa poseer (tener) y actúa como auxiliar (haber).'
      },
      {
        id: 'have-mc-9',
        type: 'multiple-choice',
        question: 'They ___ great respect for environmental conservation initiatives.',
        options: ['have', 'has', 'are', 'had to'],
        correctAnswer: 'have',
        explanationEn: 'Third person plural "They" uses "have" in present simple.',
        explanationEs: '"They" concuerda con "have" en el presente simple.'
      },
      {
        id: 'have-mc-10',
        type: 'multiple-choice',
        question: 'He doesn’t ___ enough time to attend the optional workshop.',
        options: ['have', 'has', 'had', 'having'],
        correctAnswer: 'have',
        explanationEn: 'After the negative auxiliary "doesn’t", use the base verb "have".',
        explanationEs: 'Tras el auxiliar negativo "doesn’t", el verbo va en forma base "have".'
      },
      // 10 Sentence Builders
      {
        id: 'have-sb-1',
        type: 'sentence-builder',
        spanishPrompt: 'Ella tiene un perro.',
        correctSentence: 'She has a dog.',
        tokens: ['dog.', 'has', 'a', 'She'],
        explanationEn: 'Third-person singular "She" + "has" + object "a dog".',
        explanationEs: '"She" se conjuga con "has" en presente simple.'
      },
      {
        id: 'have-sb-2',
        type: 'sentence-builder',
        spanishPrompt: 'Nosotros tenemos una gran oportunidad de estudiar.',
        correctSentence: 'We have a great opportunity to study.',
        tokens: ['We', 'have', 'a', 'great', 'opportunity', 'to', 'study.'],
        explanationEn: 'Subject (We) + verb (have) + noun phrase + infinitive complement.',
        explanationEs: 'Sujeto "We" con "have" seguido del complemento.'
      },
      {
        id: 'have-sb-3',
        type: 'sentence-builder',
        spanishPrompt: 'Los estudiantes tienen que practicar todos los días.',
        correctSentence: 'Students have to practice every day.',
        tokens: ['Students', 'have', 'to', 'practice', 'every', 'day.'],
        explanationEn: 'Semi-modal "have to" expresses necessity and obligation.',
        explanationEs: '"Have to" expresa obligación o necesidad.'
      },
      {
        id: 'have-sb-4',
        type: 'sentence-builder',
        spanishPrompt: 'Yo he vivido en esta ciudad por tres años.',
        correctSentence: 'I have lived in this city for three years.',
        tokens: ['I', 'have', 'lived', 'in', 'this', 'city', 'for', 'three', 'years.'],
        explanationEn: 'Present perfect structure: I + have + past participle (lived).',
        explanationEs: 'Presente perfecto: I + have + participio pasado.'
      },
      {
        id: 'have-sb-5',
        type: 'sentence-builder',
        spanishPrompt: 'Ella tuvo una reunión importante esta mañana.',
        correctSentence: 'She had an important meeting this morning.',
        tokens: ['She', 'had', 'an', 'important', 'meeting', 'this', 'morning.'],
        explanationEn: 'Past simple uses "had" for all persons.',
        explanationEs: 'En pasado simple se usa "had" para todas las personas.'
      },
      {
        id: 'have-sb-6',
        type: 'sentence-builder',
        spanishPrompt: 'Ellos no tienen suficiente información sobre el tema.',
        correctSentence: 'They do not have enough information about the topic.',
        tokens: ['They', 'do', 'not', 'have', 'enough', 'information', 'about', 'the', 'topic.'],
        explanationEn: 'Negative present: They + do not + have + object.',
        explanationEs: 'Negación en presente: They + do not + have.'
      },
      {
        id: 'have-sb-7',
        type: 'sentence-builder',
        spanishPrompt: 'Tendremos una respuesta oficial la próxima semana.',
        correctSentence: 'We will have an official answer next week.',
        tokens: ['We', 'will', 'have', 'an', 'official', 'answer', 'next', 'week.'],
        explanationEn: 'Future simple: will + have.',
        explanationEs: 'Futuro simple con "will have".'
      },
      {
        id: 'have-sb-8',
        type: 'sentence-builder',
        spanishPrompt: 'El profesor tiene mucha experiencia en investigación.',
        correctSentence: 'The professor has a lot of experience in research.',
        tokens: ['The', 'professor', 'has', 'a', 'lot', 'of', 'experience', 'in', 'research.'],
        explanationEn: 'Singular subject "The professor" takes "has".',
        explanationEs: '"The professor" lleva "has" en presente simple.'
      },
      {
        id: 'have-sb-9',
        type: 'sentence-builder',
        spanishPrompt: '¿Tienes alguna pregunta sobre la lección?',
        correctSentence: 'Do you have any questions about the lesson?',
        tokens: ['Do', 'you', 'have', 'any', 'questions', 'about', 'the', 'lesson?'],
        explanationEn: 'Interrogative present: Do + you + have + any questions.',
        explanationEs: 'Pregunta en presente con auxiliar "Do you have...?"'
      },
      {
        id: 'have-sb-10',
        type: 'sentence-builder',
        spanishPrompt: 'Ella ha demostrado un progreso extraordinario.',
        correctSentence: 'She has shown extraordinary progress.',
        tokens: ['She', 'has', 'shown', 'extraordinary', 'progress.'],
        explanationEn: 'Present perfect with third person: She + has + shown.',
        explanationEs: 'Presente perfecto con tercera persona: She + has + participio.'
      }
    ]
  },

  // 3. DO
  {
    verbId: 3,
    questions: [
      {
        id: 'do-mc-1',
        type: 'multiple-choice',
        question: 'Scientists must ___ rigorous experiments before publishing conclusions.',
        options: ['do', 'make', 'does', 'doing'],
        correctAnswer: 'do',
        explanationEn: 'We use the collocation "do experiments" and "do research" in academic English.',
        explanationEs: 'En inglés académico se usa la colocación "do experiments" o "do research".'
      },
      {
        id: 'do-mc-2',
        type: 'multiple-choice',
        question: 'What is the past simple of "do"?',
        options: ['did', 'done', 'does', 'doed'],
        correctAnswer: 'did',
        explanationEn: 'The past simple form of "do" is "did", while "done" is the past participle.',
        explanationEs: 'El pasado simple de "do" es "did", mientras que "done" es el participio.'
      },
      {
        id: 'do-mc-3',
        type: 'multiple-choice',
        question: 'Maria always ___ her homework before watching television.',
        options: ['does', 'do', 'did', 'doing'],
        correctAnswer: 'does',
        explanationEn: 'Third person singular "Maria" takes "does" in present simple.',
        explanationEs: 'Tercera persona singular "Maria" requiere "does" en presente simple.'
      },
      {
        id: 'do-mc-4',
        type: 'multiple-choice',
        question: 'Choose the correct question format:',
        options: ['Do you understand the instructions?', 'Does you understand the instructions?', 'Are you understand the instructions?', 'Did you understood the instructions?'],
        correctAnswer: 'Do you understand the instructions?',
        explanationEn: 'With "you" in present simple questions, use the auxiliary "Do" + base verb.',
        explanationEs: 'Con el pronombre "you" se utiliza el auxiliar "Do".'
      },
      {
        id: 'do-mc-5',
        type: 'multiple-choice',
        question: 'Regular physical exercise can ___ wonders for your mental health.',
        options: ['do', 'make', 'have', 'take'],
        correctAnswer: 'do',
        explanationEn: 'The fixed English idiom is "do wonders for" (hacer maravillas por).',
        explanationEs: 'El modismo en inglés es "do wonders for" (hacer maravillas por).'
      },
      {
        id: 'do-mc-6',
        type: 'multiple-choice',
        question: 'What has the government ___ to solve traffic congestion?',
        options: ['done', 'did', 'do', 'doing'],
        correctAnswer: 'done',
        explanationEn: 'Present perfect questions require auxiliary "has" + past participle "done".',
        explanationEs: 'El presente perfecto requiere el participio "done".'
      },
      {
        id: 'do-mc-7',
        type: 'multiple-choice',
        question: 'Smoking can ___ serious damage to cardiovascular health.',
        options: ['do', 'make', 'does', 'done'],
        correctAnswer: 'do',
        explanationEn: 'Collocation: "do damage" (not make damage).',
        explanationEs: 'La colocación correcta es "do damage" (causar daño).'
      },
      {
        id: 'do-mc-8',
        type: 'multiple-choice',
        question: 'I ___ my best on the examination yesterday.',
        options: ['did', 'do', 'done', 'does'],
        correctAnswer: 'did',
        explanationEn: 'Past simple for "I" is "did": "I did my best".',
        explanationEs: '"I did my best" expresa que di lo mejor de mí en pasado.'
      },
      {
        id: 'do-mc-9',
        type: 'multiple-choice',
        question: '___ your friend study engineering or business administration?',
        options: ['Does', 'Do', 'Is', 'Are'],
        correctAnswer: 'Does',
        explanationEn: '"Your friend" is third person singular (he/she), so we use "Does".',
        explanationEs: '"Your friend" es tercera persona del singular, por lo que usa "Does".'
      },
      {
        id: 'do-mc-10',
        type: 'multiple-choice',
        question: 'What is the Spanish translation of the verb "do"?',
        options: ['Hacer', 'Dar', 'Tener', 'Saber'],
        correctAnswer: 'Hacer',
        explanationEn: '"Do" translates to "hacer" in Spanish, primarily used for tasks and actions.',
        explanationEs: '"Do" traduce "hacer" en español, enfocado en actividades y deberes.'
      },
      // 10 Sentence Builders
      {
        id: 'do-sb-1',
        type: 'sentence-builder',
        spanishPrompt: 'Los estudiantes hacen su tarea todas las tardes.',
        correctSentence: 'Students do their homework every afternoon.',
        tokens: ['Students', 'do', 'their', 'homework', 'every', 'afternoon.'],
        explanationEn: 'Subject + verb (do) + possessive (their) + noun + time expression.',
        explanationEs: 'Colocación estándar: "do homework".'
      },
      {
        id: 'do-sb-2',
        type: 'sentence-builder',
        spanishPrompt: 'Ella hace ejercicio en el gimnasio temprano.',
        correctSentence: 'She does exercise at the gym early.',
        tokens: ['She', 'does', 'exercise', 'at', 'the', 'gym', 'early.'],
        explanationEn: 'Third-person singular "She" + "does exercise".',
        explanationEs: '"She" concuerda con "does".'
      },
      {
        id: 'do-sb-3',
        type: 'sentence-builder',
        spanishPrompt: '¿Qué hiciste el fin de semana pasado?',
        correctSentence: 'What did you do last weekend?',
        tokens: ['What', 'did', 'you', 'do', 'last', 'weekend?'],
        explanationEn: 'Wh-question in past: What + did (aux) + you + do (base) + time.',
        explanationEs: 'Pregunta en pasado: What + did + sujeto + do en infinitivo.'
      },
      {
        id: 'do-sb-4',
        type: 'sentence-builder',
        spanishPrompt: 'Nosotros hicimos un gran esfuerzo para ganar.',
        correctSentence: 'We did our best to win.',
        tokens: ['We', 'did', 'our', 'best', 'to', 'win.'],
        explanationEn: 'Idiomatic expression: "do one’s best" in past simple: "did our best".',
        explanationEs: 'Expresión "did our best" (hicimos nuestro mayor esfuerzo).'
      },
      {
        id: 'do-sb-5',
        type: 'sentence-builder',
        spanishPrompt: 'Él no hace preguntas durante la clase.',
        correctSentence: 'He does not do that often.',
        tokens: ['He', 'does', 'not', 'do', 'that', 'often.'],
        explanationEn: 'Negative present: He + does not (aux) + do (main verb) + object.',
        explanationEs: 'Negación: He + does not + do.'
      },
      {
        id: 'do-sb-6',
        type: 'sentence-builder',
        spanishPrompt: 'Los científicos hicieron una investigación profunda.',
        correctSentence: 'Scientists did thorough research on the subject.',
        tokens: ['Scientists', 'did', 'thorough', 'research', 'on', 'the', 'subject.'],
        explanationEn: 'Collocation in past simple: "did research".',
        explanationEs: 'Colocación en pasado: "did research" (hicieron investigación).'
      },
      {
        id: 'do-sb-7',
        type: 'sentence-builder',
        spanishPrompt: '¿Ellos hacen voluntariado en su comunidad?',
        correctSentence: 'Do they do volunteer work in their community?',
        tokens: ['Do', 'they', 'do', 'volunteer', 'work', 'in', 'their', 'community?'],
        explanationEn: 'Interrogative: Do (aux) + they + do (verb) + volunteer work.',
        explanationEs: 'Pregunta en presente: Do they do volunteer work...?'
      },
      {
        id: 'do-sb-8',
        type: 'sentence-builder',
        spanishPrompt: 'Hemos hecho todo lo posible para ayudar.',
        correctSentence: 'We have done everything possible to help.',
        tokens: ['We', 'have', 'done', 'everything', 'possible', 'to', 'help.'],
        explanationEn: 'Present perfect: We + have + done (past participle).',
        explanationEs: 'Presente perfecto con participio "done".'
      },
      {
        id: 'do-sb-9',
        type: 'sentence-builder',
        spanishPrompt: 'Ella hace un trabajo excelente todos los días.',
        correctSentence: 'She does an excellent job every day.',
        tokens: ['She', 'does', 'an', 'excellent', 'job', 'every', 'day.'],
        explanationEn: 'Singular third person: She + does + noun phrase.',
        explanationEs: 'She does an excellent job.'
      },
      {
        id: 'do-sb-10',
        type: 'sentence-builder',
        spanishPrompt: '¿Qué puedes hacer para mejorar tu inglés?',
        correctSentence: 'What can you do to improve your English?',
        tokens: ['What', 'can', 'you', 'do', 'to', 'improve', 'your', 'English?'],
        explanationEn: 'Modal structure: Wh-word + can + subject + base verb (do) + infinitive.',
        explanationEs: 'Estructura con modal: What can you do...?'
      }
    ]
  },

  // 4. GO
  {
    verbId: 4,
    questions: [
      {
        id: 'go-mc-1',
        type: 'multiple-choice',
        question: 'Many students ___ to the university library after classes.',
        options: ['go', 'goes', 'went', 'gone'],
        correctAnswer: 'go',
        explanationEn: 'Plural subject "Many students" takes the base form "go" in present simple.',
        explanationEs: '"Many students" es plural y concuerda con "go".'
      },
      {
        id: 'go-mc-2',
        type: 'multiple-choice',
        question: 'What is the past simple form of "go"?',
        options: ['went', 'gone', 'goed', 'goes'],
        correctAnswer: 'went',
        explanationEn: 'The past simple of the irregular verb "go" is "went".',
        explanationEs: 'El pasado simple del verbo irregular "go" es "went".'
      },
      {
        id: 'go-mc-3',
        type: 'multiple-choice',
        question: 'My family ___ to Cartagena on vacation last summer.',
        options: ['went', 'go', 'gone', 'goes'],
        correctAnswer: 'went',
        explanationEn: 'The past time marker "last summer" requires the past tense "went".',
        explanationEs: '"Last summer" indica que la acción ocurrió en el pasado simple ("went").'
      },
      {
        id: 'go-mc-4',
        type: 'multiple-choice',
        question: 'She has already ___ to the scholarship office to submit her forms.',
        options: ['gone', 'went', 'go', 'goes'],
        correctAnswer: 'gone',
        explanationEn: 'Present perfect uses auxiliary "has" + past participle "gone".',
        explanationEs: 'El presente perfecto se forma con "has" + participio "gone".'
      },
      {
        id: 'go-mc-5',
        type: 'multiple-choice',
        question: 'He ___ to work by bicycle every morning to protect the environment.',
        options: ['goes', 'go', 'went', 'going'],
        correctAnswer: 'goes',
        explanationEn: 'Third-person singular "He" takes "goes" with -es suffix in present simple.',
        explanationEs: 'Con "He" se añade la terminación -es: "goes".'
      },
      {
        id: 'go-mc-6',
        type: 'multiple-choice',
        question: 'What is the meaning of the phrasal verb "go on"?',
        options: ['Continuar', 'Detenerse', 'Retroceder', 'Desaparecer'],
        correctAnswer: 'Continuar',
        explanationEn: '"Go on" commonly means to continue or proceed.',
        explanationEs: '"Go on" significa continuar o seguir adelante.'
      },
      {
        id: 'go-mc-7',
        type: 'multiple-choice',
        question: 'Are you planning to ___ abroad for your postgraduate studies?',
        options: ['go', 'goes', 'went', 'gone'],
        correctAnswer: 'go',
        explanationEn: 'After the infinitive marker "to", use the base form "go".',
        explanationEs: 'Después de "to", el verbo se mantiene en su forma base "go".'
      },
      {
        id: 'go-mc-8',
        type: 'multiple-choice',
        question: 'The alarm didn’t ___ off this morning, so I arrived late.',
        options: ['go', 'goes', 'went', 'gone'],
        correctAnswer: 'go',
        explanationEn: 'After the negative past auxiliary "didn’t", use the base verb "go".',
        explanationEs: 'Tras el auxiliar "didn’t", el verbo va en forma base "go".'
      },
      {
        id: 'go-mc-9',
        type: 'multiple-choice',
        question: 'Prices of raw materials continue to ___ up globally.',
        options: ['go', 'goes', 'went', 'gone'],
        correctAnswer: 'go',
        explanationEn: 'Infinitive "to go up" means to increase or rise.',
        explanationEs: '"To go up" significa subir o incrementarse.'
      },
      {
        id: 'go-mc-10',
        type: 'multiple-choice',
        question: 'What is the Spanish translation of the verb "go"?',
        options: ['Ir', 'Venir', 'Llegar', 'Buscar'],
        correctAnswer: 'Ir',
        explanationEn: 'The primary Spanish translation of "go" is "ir".',
        explanationEs: 'La traducción principal de "go" es "ir".'
      },
      // 10 Sentence Builders
      {
        id: 'go-sb-1',
        type: 'sentence-builder',
        spanishPrompt: 'Nosotros vamos a la universidad en autobús.',
        correctSentence: 'We go to the university by bus.',
        tokens: ['We', 'go', 'to', 'the', 'university', 'by', 'bus.'],
        explanationEn: 'Subject + verb (go) + destination (to the university) + means of transport (by bus).',
        explanationEs: 'Sujeto + verbo go + destino + medio de transporte con "by".'
      },
      {
        id: 'go-sb-2',
        type: 'sentence-builder',
        spanishPrompt: 'Ella fue a Londres para mejorar su inglés.',
        correctSentence: 'She went to London to improve her English.',
        tokens: ['She', 'went', 'to', 'London', 'to', 'improve', 'her', 'English.'],
        explanationEn: 'Past simple "went" + purpose infinitive "to improve".',
        explanationEs: 'Pasado simple "went" seguido del infinitivo de propósito "to improve".'
      },
      {
        id: 'go-sb-3',
        type: 'sentence-builder',
        spanishPrompt: 'Ellos van a presentar el examen mañana.',
        correctSentence: 'They are going to take the exam tomorrow.',
        tokens: ['They', 'are', 'going', 'to', 'take', 'the', 'exam', 'tomorrow.'],
        explanationEn: 'Future with "be going to" expressing planned future action.',
        explanationEs: 'Futuro con "be going to" para planes futuros.'
      },
      {
        id: 'go-sb-4',
        type: 'sentence-builder',
        spanishPrompt: 'Él va al gimnasio tres veces por semana.',
        correctSentence: 'He goes to the gym three times a week.',
        tokens: ['He', 'goes', 'to', 'the', 'gym', 'three', 'times', 'a', 'week.'],
        explanationEn: 'Third person "goes" + frequency expression "three times a week".',
        explanationEs: 'Tercera persona singular "goes" con expresión de frecuencia.'
      },
      {
        id: 'go-sb-5',
        type: 'sentence-builder',
        spanishPrompt: '¿Quieres ir al cine con nosotros esta noche?',
        correctSentence: 'Do you want to go to the movies with us tonight?',
        tokens: ['Do', 'you', 'want', 'to', 'go', 'to', 'the', 'movies', 'with', 'us', 'tonight?'],
        explanationEn: 'Question structure: Do you want + to go + destination + prepositional phrase.',
        explanationEs: 'Pregunta en presente simple con "want to go".'
      },
      {
        id: 'go-sb-6',
        type: 'sentence-builder',
        spanishPrompt: 'Mis amigos han ido a varios países europeos.',
        correctSentence: 'My friends have gone to several European countries.',
        tokens: ['My', 'friends', 'have', 'gone', 'to', 'several', 'European', 'countries.'],
        explanationEn: 'Present perfect: have + gone to describe travel experience.',
        explanationEs: 'Presente perfecto con "have gone".'
      },
      {
        id: 'go-sb-7',
        type: 'sentence-builder',
        spanishPrompt: 'Debemos seguir adelante a pesar de los desafíos.',
        correctSentence: 'We must go on despite the challenges.',
        tokens: ['We', 'must', 'go', 'on', 'despite', 'the', 'challenges.'],
        explanationEn: 'Modal "must" + phrasal verb "go on" (continue) + preposition "despite".',
        explanationEs: 'Modal "must" con el phrasal verb "go on" (continuar).'
      },
      {
        id: 'go-sb-8',
        type: 'sentence-builder',
        spanishPrompt: 'El tren sale a las ocho en punto.',
        correctSentence: 'The train goes at eight o’clock.',
        tokens: ['The', 'train', 'goes', 'at', 'eight', 'o’clock.'],
        explanationEn: 'Present simple for scheduled events with time preposition "at".',
        explanationEs: 'Presente simple para horarios establecidos con la preposición "at".'
      },
      {
        id: 'go-sb-9',
        type: 'sentence-builder',
        spanishPrompt: 'Ella no fue a la fiesta porque estaba enferma.',
        correctSentence: 'She did not go to the party because she was sick.',
        tokens: ['She', 'did', 'not', 'go', 'to', 'the', 'party', 'because', 'she', 'was', 'sick.'],
        explanationEn: 'Negative past: did not go + causal clause with "because".',
        explanationEs: 'Negación en pasado con "did not go" y cláusula causal con "because".'
      },
      {
        id: 'go-sb-10',
        type: 'sentence-builder',
        spanishPrompt: 'Vamos a comenzar la reunión ahora mismo.',
        correctSentence: 'Let us go and start the meeting right now.',
        tokens: ['Let', 'us', 'go', 'and', 'start', 'the', 'meeting', 'right', 'now.'],
        explanationEn: 'Collaborative imperative "Let us go and start...".',
        explanationEs: 'Estructura colaborativa: "Let us go and start...".'
      }
    ]
  },

  // 5. GET
  {
    verbId: 5,
    questions: [
      {
        id: 'get-mc-1',
        type: 'multiple-choice',
        question: 'Applicants must ___ a minimum score of 6.5 on the IELTS test.',
        options: ['get', 'gets', 'getting', 'got'],
        correctAnswer: 'get',
        explanationEn: 'Modal auxiliary "must" is followed by the base verb "get".',
        explanationEs: 'El modal "must" va seguido de la forma base "get".'
      },
      {
        id: 'get-mc-2',
        type: 'multiple-choice',
        question: 'What is the past tense of the verb "get"?',
        options: ['got', 'gotten', 'getted', 'gets'],
        correctAnswer: 'got',
        explanationEn: 'The past simple of "get" is "got".',
        explanationEs: 'El pasado simple de "get" es "got".'
      },
      {
        id: 'get-mc-3',
        type: 'multiple-choice',
        question: 'She ___ a prestigious scholarship to study abroad last year.',
        options: ['got', 'get', 'gets', 'getting'],
        correctAnswer: 'got',
        explanationEn: '"Last year" requires the past simple tense "got".',
        explanationEs: 'El marcador temporal "last year" requiere el pasado "got".'
      },
      {
        id: 'get-mc-4',
        type: 'multiple-choice',
        question: 'What does the phrasal verb "get along with" mean?',
        options: ['Tener una buena relación con alguien', 'Llegar tarde a un lugar', 'Escapar de un peligro', 'Comprar un artículo'],
        correctAnswer: 'Tener una buena relación con alguien',
        explanationEn: '"Get along with" means to have a harmonious or friendly relationship with someone.',
        explanationEs: '"Get along with" significa llevarse bien con alguien.'
      },
      {
        id: 'get-mc-5',
        type: 'multiple-choice',
        question: 'I usually ___ to the university campus at 8:00 AM.',
        options: ['get', 'gets', 'got', 'getting'],
        correctAnswer: 'get',
        explanationEn: '"Get to" means to arrive at a destination. With "I", use "get".',
        explanationEs: '"Get to" significa llegar a un destino. Con "I" se usa "get".'
      },
      {
        id: 'get-mc-6',
        type: 'multiple-choice',
        question: 'It is starting to ___ dark outside; we should head back.',
        options: ['get', 'gets', 'got', 'gotten'],
        correctAnswer: 'get',
        explanationEn: '"Get + adjective" expresses a change of state (get dark = oscurecer).',
        explanationEs: '"Get + adjetivo" indica cambio de estado (get dark = oscurecerse).'
      },
      {
        id: 'get-mc-7',
        type: 'multiple-choice',
        question: 'Did you ___ my email regarding the group project assignment?',
        options: ['get', 'got', 'gets', 'getting'],
        correctAnswer: 'get',
        explanationEn: 'In past questions with "Did", the verb stays in base form "get".',
        explanationEs: 'En preguntas con el auxiliar "Did", el verbo se mantiene en su forma base "get".'
      },
      {
        id: 'get-mc-8',
        type: 'multiple-choice',
        question: 'He has ___ better at speaking English after months of intensive practice.',
        options: ['gotten', 'get', 'gets', 'getting'],
        correctAnswer: 'gotten',
        explanationEn: 'In American and International English, "gotten" is commonly used as the past participle of "get" (have gotten better).',
        explanationEs: '"Gotten" es el participio pasado frecuente en inglés internacional.'
      },
      {
        id: 'get-mc-9',
        type: 'multiple-choice',
        question: 'What is the Spanish translation of "get"?',
        options: ['Obtener / Conseguir / Llegar', 'Fabricar / Producir', 'Pensar / Razonar', 'Perder / Extraviar'],
        correctAnswer: 'Obtener / Conseguir / Llegar',
        explanationEn: '"Get" is a versatile verb meaning to obtain, receive, arrive, or become.',
        explanationEs: '"Get" es un verbo polivalente que significa obtener, conseguir, llegar o volverse.'
      },
      {
        id: 'get-mc-10',
        type: 'multiple-choice',
        question: 'Students can ___ confused when complex grammar rules are introduced too fast.',
        options: ['get', 'gets', 'got', 'getting'],
        correctAnswer: 'get',
        explanationEn: 'Modal "can" is followed by base verb "get": "get confused" (confundirse).',
        explanationEs: '"Can" va seguido de la forma base "get".'
      },
      // 10 Sentence Builders
      {
        id: 'get-sb-1',
        type: 'sentence-builder',
        spanishPrompt: 'Ella obtuvo una excelente calificación en el examen.',
        correctSentence: 'She got an excellent grade on the exam.',
        tokens: ['She', 'got', 'an', 'excellent', 'grade', 'on', 'the', 'exam.'],
        explanationEn: 'Past simple "got" + object noun phrase + preposition "on".',
        explanationEs: 'Pasado simple "got" para expresar obtención de una nota.'
      },
      {
        id: 'get-sb-2',
        type: 'sentence-builder',
        spanishPrompt: '¿A qué hora llegas a la universidad?',
        correctSentence: 'What time do you get to the university?',
        tokens: ['What', 'time', 'do', 'you', 'get', 'to', 'the', 'university?'],
        explanationEn: '"Get to" means to arrive at. Question with "do you get to...".',
        explanationEs: '"Get to" significa llegar a un lugar.'
      },
      {
        id: 'get-sb-3',
        type: 'sentence-builder',
        spanishPrompt: 'Necesitamos conseguir más información sobre el curso.',
        correctSentence: 'We need to get more information about the course.',
        tokens: ['We', 'need', 'to', 'get', 'more', 'information', 'about', 'the', 'course.'],
        explanationEn: 'Infinitive after need: need + to get + object.',
        explanationEs: '"Need to get" significa necesitar conseguir.'
      },
      {
        id: 'get-sb-4',
        type: 'sentence-builder',
        spanishPrompt: 'Me llevo muy bien con mis compañeros de clase.',
        correctSentence: 'I get along very well with my classmates.',
        tokens: ['I', 'get', 'along', 'very', 'well', 'with', 'my', 'classmates.'],
        explanationEn: 'Phrasal verb "get along with" expresses good interpersonal relationships.',
        explanationEs: 'Phrasal verb "get along with" (llevarse bien con).'
      },
      {
        id: 'get-sb-5',
        type: 'sentence-builder',
        spanishPrompt: 'El clima se está poniendo frío esta noche.',
        correctSentence: 'The weather is getting cold tonight.',
        tokens: ['The', 'weather', 'is', 'getting', 'cold', 'tonight.'],
        explanationEn: 'Present continuous "is getting + adjective" for progressive change.',
        explanationEs: '"Is getting cold" expresa un cambio gradual de temperatura.'
      },
      {
        id: 'get-sb-6',
        type: 'sentence-builder',
        spanishPrompt: 'Ellos consiguieron un nuevo trabajo en una empresa internacional.',
        correctSentence: 'They got a new job at an international company.',
        tokens: ['They', 'got', 'a', 'new', 'job', 'at', 'an', 'international', 'company.'],
        explanationEn: 'Past simple "got" with prepositions "at an international company".',
        explanationEs: 'Pasado simple "got a job".'
      },
      {
        id: 'get-sb-7',
        type: 'sentence-builder',
        spanishPrompt: 'Debes levantarte temprano para la entrevista.',
        correctSentence: 'You must get up early for the interview.',
        tokens: ['You', 'must', 'get', 'up', 'early', 'for', 'the', 'interview.'],
        explanationEn: 'Modal "must" + phrasal verb "get up" (despertar/levantarse).',
        explanationEs: '"Get up" significa levantarse.'
      },
      {
        id: 'get-sb-8',
        type: 'sentence-builder',
        spanishPrompt: '¿Recibiste mi mensaje de texto anoche?',
        correctSentence: 'Did you get my text message last night?',
        tokens: ['Did', 'you', 'get', 'my', 'text', 'message', 'last', 'night?'],
        explanationEn: 'Past question: Did + subject + get (receive) + object.',
        explanationEs: 'Pregunta en pasado con "get" en sentido de recibir.'
      },
      {
        id: 'get-sb-9',
        type: 'sentence-builder',
        spanishPrompt: 'Ella se pone nerviosa antes de hablar en público.',
        correctSentence: 'She gets nervous before speaking in public.',
        tokens: ['She', 'gets', 'nervous', 'before', 'speaking', 'in', 'public.'],
        explanationEn: 'Third person "gets" + adjective "nervous" + preposition with gerund "speaking".',
        explanationEs: '"Gets nervous" seguido de preposición con gerundio "before speaking".'
      },
      {
        id: 'get-sb-10',
        type: 'sentence-builder',
        spanishPrompt: 'Podemos superar cualquier obstáculo con dedicación.',
        correctSentence: 'We can get over any obstacle with dedication.',
        tokens: ['We', 'can', 'get', 'over', 'any', 'obstacle', 'with', 'dedication.'],
        explanationEn: 'Phrasal verb "get over" means to overcome challenges.',
        explanationEs: '"Get over" significa superar o sobreponerse a un obstáculo.'
      }
    ]
  },

  // 6. MAKE
  {
    verbId: 6,
    questions: [
      {
        id: 'make-mc-1',
        type: 'multiple-choice',
        question: 'Students need to ___ a realistic study schedule for the exam.',
        options: ['make', 'do', 'makes', 'making'],
        correctAnswer: 'make',
        explanationEn: 'Collocation: "make a schedule" or "make a plan" (not do a schedule).',
        explanationEs: 'Colocación estándar: "make a schedule / plan".'
      },
      {
        id: 'make-mc-2',
        type: 'multiple-choice',
        question: 'What is the past simple and past participle of "make"?',
        options: ['made', 'maked', 'makes', 'making'],
        correctAnswer: 'made',
        explanationEn: 'The irregular verb "make" has the past and participle form "made".',
        explanationEs: 'El pasado y participio de "make" es "made".'
      },
      {
        id: 'make-mc-3',
        type: 'multiple-choice',
        question: 'Smart investments can ___ a significant difference in education.',
        options: ['make', 'do', 'take', 'have'],
        correctAnswer: 'make',
        explanationEn: 'The academic collocation is "make a difference" (marcar la diferencia).',
        explanationEs: 'La colocación correcta es "make a difference" (marcar una diferencia).'
      },
      {
        id: 'make-mc-4',
        type: 'multiple-choice',
        question: 'She ___ an important decision about her professional career.',
        options: ['made', 'did', 'maked', 'making'],
        correctAnswer: 'made',
        explanationEn: 'Collocation in past simple: "made a decision".',
        explanationEs: 'Colocación en pasado: "made a decision" (tomó una decisión).'
      },
      {
        id: 'make-mc-5',
        type: 'multiple-choice',
        question: 'Good teachers ___ learning interesting and engaging.',
        options: ['make', 'makes', 'do', 'does'],
        correctAnswer: 'make',
        explanationEn: 'Causative structure: Subject (plural) + make + object + adjective.',
        explanationEs: 'Estructura causativa: make + objeto + adjetivo.'
      },
      {
        id: 'make-mc-6',
        type: 'multiple-choice',
        question: 'Don’t worry if you ___ mistakes; they are part of learning.',
        options: ['make', 'do', 'have', 'take'],
        correctAnswer: 'make',
        explanationEn: 'The standard collocation is "make mistakes" (cometer errores).',
        explanationEs: 'La colocación correcta es "make mistakes" (cometer errores).'
      },
      {
        id: 'make-mc-7',
        type: 'multiple-choice',
        question: 'The committee has ___ steady progress on the environmental policy.',
        options: ['made', 'done', 'make', 'did'],
        correctAnswer: 'made',
        explanationEn: 'Present perfect with "made progress" (avanzar).',
        explanationEs: 'La colocación es "make progress", en participio "made progress".'
      },
      {
        id: 'make-mc-8',
        type: 'multiple-choice',
        question: 'What is the Spanish translation of "make"?',
        options: ['Hacer / Fabricar', 'Decir / Contar', 'Ver / Observar', 'Tomar / Llevar'],
        correctAnswer: 'Hacer / Fabricar',
        explanationEn: '"Make" translates to "hacer/fabricar/crear" in Spanish.',
        explanationEs: '"Make" traduce hacer, fabricar o crear en español.'
      },
      {
        id: 'make-mc-9',
        type: 'multiple-choice',
        question: 'This documentary will ___ you think about climate change.',
        options: ['make', 'makes', 'made', 'to make'],
        correctAnswer: 'make',
        explanationEn: 'Modal "will" is followed by bare infinitive "make".',
        explanationEs: '"Will" va seguido de la forma base "make".'
      },
      {
        id: 'make-mc-10',
        type: 'multiple-choice',
        question: 'He ___ an impressive presentation at the conference yesterday.',
        options: ['made', 'did', 'make', 'done'],
        correctAnswer: 'made',
        explanationEn: 'Collocation in past: "made a presentation" or "gave a presentation".',
        explanationEs: 'En pasado se utiliza "made a presentation".'
      },
      // 10 Sentence Builders
      {
        id: 'make-sb-1',
        type: 'sentence-builder',
        spanishPrompt: 'Ella tomó una decisión importante hoy.',
        correctSentence: 'She made an important decision today.',
        tokens: ['She', 'made', 'an', 'important', 'decision', 'today.'],
        explanationEn: 'Collocation "make a decision" conjugated in past simple: "made".',
        explanationEs: 'Colocación "make a decision" en pasado simple.'
      },
      {
        id: 'make-sb-2',
        type: 'sentence-builder',
        spanishPrompt: 'La tecnología hace la comunicación más rápida.',
        correctSentence: 'Technology makes communication much faster.',
        tokens: ['Technology', 'makes', 'communication', 'much', 'faster.'],
        explanationEn: 'Causative structure: Technology (singular) + makes + object + adjective.',
        explanationEs: 'Estructura causativa con sujeto singular.'
      },
      {
        id: 'make-sb-3',
        type: 'sentence-builder',
        spanishPrompt: 'Los estudiantes están haciendo un gran progreso.',
        correctSentence: 'Students are making great progress in English.',
        tokens: ['Students', 'are', 'making', 'great', 'progress', 'in', 'English.'],
        explanationEn: 'Present continuous: are making + progress.',
        explanationEs: 'Presente continuo con "making progress".'
      },
      {
        id: 'make-sb-4',
        type: 'sentence-builder',
        spanishPrompt: 'No tengas miedo de cometer errores.',
        correctSentence: 'Do not be afraid to make mistakes.',
        tokens: ['Do', 'not', 'be', 'afraid', 'to', 'make', 'mistakes.'],
        explanationEn: 'Collocation: "make mistakes" preceded by infinitive "to".',
        explanationEs: 'Colocación "make mistakes" (cometer errores).'
      },
      {
        id: 'make-sb-5',
        type: 'sentence-builder',
        spanishPrompt: 'Él hizo una llamada telefónica a su supervisor.',
        correctSentence: 'He made a phone call to his supervisor.',
        tokens: ['He', 'made', 'a', 'phone', 'call', 'to', 'his', 'supervisor.'],
        explanationEn: 'Collocation: "make a phone call" in past simple.',
        explanationEs: 'Colocación "make a phone call" en pasado.'
      },
      {
        id: 'make-sb-6',
        type: 'sentence-builder',
        spanishPrompt: 'El nuevo método hace que el aprendizaje sea fácil.',
        correctSentence: 'The new method makes learning easy and fun.',
        tokens: ['The', 'new', 'method', 'makes', 'learning', 'easy', 'and', 'fun.'],
        explanationEn: 'Singular subject "The new method" takes "makes".',
        explanationEs: 'Sujeto singular concuerda con "makes".'
      },
      {
        id: 'make-sb-7',
        type: 'sentence-builder',
        spanishPrompt: 'Podemos hacer una contribución positiva a la sociedad.',
        correctSentence: 'We can make a positive contribution to society.',
        tokens: ['We', 'can', 'make', 'a', 'positive', 'contribution', 'to', 'society.'],
        explanationEn: 'Academic collocation: "make a contribution to".',
        explanationEs: 'Colocación académica: "make a contribution to".'
      },
      {
        id: 'make-sb-8',
        type: 'sentence-builder',
        spanishPrompt: '¿Hiciste una reservación para el hotel?',
        correctSentence: 'Did you make a reservation for the hotel?',
        tokens: ['Did', 'you', 'make', 'a', 'reservation', 'for', 'the', 'hotel?'],
        explanationEn: 'Interrogative: Did + you + make a reservation.',
        explanationEs: 'Pregunta en pasado: "make a reservation".'
      },
      {
        id: 'make-sb-9',
        type: 'sentence-builder',
        spanishPrompt: 'Esta película me hace sentir muy inspirado.',
        correctSentence: 'This movie makes me feel very inspired.',
        tokens: ['This', 'movie', 'makes', 'me', 'feel', 'very', 'inspired.'],
        explanationEn: 'Causative structure: make + person + bare infinitive (feel).',
        explanationEs: 'Estructura: make + persona + verbo base (feel).'
      },
      {
        id: 'make-sb-10',
        type: 'sentence-builder',
        spanishPrompt: 'Ellos hicieron un esfuerzo extraordinario para terminar a tiempo.',
        correctSentence: 'They made an extraordinary effort to finish on time.',
        tokens: ['They', 'made', 'an', 'extraordinary', 'effort', 'to', 'finish', 'on', 'time.'],
        explanationEn: 'Collocation "make an effort" in past simple: "made an effort".',
        explanationEs: 'Colocación en pasado: "made an effort" (hicieron un esfuerzo).'
      }
    ]
  },

  // 7. KNOW
  {
    verbId: 7,
    questions: [
      {
        id: 'know-mc-1',
        type: 'multiple-choice',
        question: 'Do you ___ the correct answer to this grammar question?',
        options: ['know', 'knows', 'knew', 'known'],
        correctAnswer: 'know',
        explanationEn: 'After auxiliary "Do", the verb remains in base form "know".',
        explanationEs: 'Tras el auxiliar "Do", el verbo se mantiene en forma base "know".'
      },
      {
        id: 'know-mc-2',
        type: 'multiple-choice',
        question: 'What is the past simple form of "know"?',
        options: ['knew', 'known', 'knowed', 'knows'],
        correctAnswer: 'knew',
        explanationEn: 'The past simple of "know" is "knew" /njuː/.',
        explanationEs: 'El pasado simple de "know" es "knew".'
      },
      {
        id: 'know-mc-3',
        type: 'multiple-choice',
        question: 'What is the past participle of "know"?',
        options: ['known', 'knew', 'knowed', 'knowing'],
        correctAnswer: 'known',
        explanationEn: 'The past participle of "know" is "known" (e.g., well-known, has known).',
        explanationEs: 'El participio pasado de "know" es "known".'
      },
      {
        id: 'know-mc-4',
        type: 'multiple-choice',
        question: 'I have ___ Dr. Ramirez since we worked together in 2020.',
        options: ['known', 'knew', 'know', 'knowing'],
        correctAnswer: 'known',
        explanationEn: 'Present perfect uses auxiliary "have" + past participle "known".',
        explanationEs: 'El presente perfecto con "since" requiere el participio "known".'
      },
      {
        id: 'know-mc-5',
        type: 'multiple-choice',
        question: 'Scientists ___ that carbon emissions accelerate global warming.',
        options: ['know', 'knows', 'knew', 'knowing'],
        correctAnswer: 'know',
        explanationEn: 'Plural subject "Scientists" takes the present simple base form "know".',
        explanationEs: 'Sujeto plural "Scientists" concuerda con "know".'
      },
      {
        id: 'know-mc-6',
        type: 'multiple-choice',
        question: 'What is the Spanish translation of "know"?',
        options: ['Saber / Conocer', 'Pensar / Creer', 'Ver / Mirar', 'Buscar / Hallar'],
        correctAnswer: 'Saber / Conocer',
        explanationEn: '"Know" translates to both "saber" (information) and "conocer" (people/places).',
        explanationEs: '"Know" traduce tanto saber (conocimiento) como conocer (personas o lugares).'
      },
      {
        id: 'know-mc-7',
        type: 'multiple-choice',
        question: 'She ___ how to speak three foreign languages fluently.',
        options: ['knows', 'know', 'knew', 'knowing'],
        correctAnswer: 'knows',
        explanationEn: 'Third-person singular "She" takes "knows" in present simple.',
        explanationEs: 'Tercera persona singular "She" requiere "knows".'
      },
      {
        id: 'know-mc-8',
        type: 'multiple-choice',
        question: 'As far as I ___, the examination results will be published on Monday.',
        options: ['know', 'knows', 'knew', 'known'],
        correctAnswer: 'know',
        explanationEn: 'Idiomatic expression: "As far as I know" (Por lo que sé / Hasta donde sé).',
        explanationEs: 'Expresión idiomática: "As far as I know" (Hasta donde sé).'
      },
      {
        id: 'know-mc-9',
        type: 'multiple-choice',
        question: 'Nobody ___ what the future of artificial intelligence will hold.',
        options: ['knows', 'know', 'knew', 'knowing'],
        correctAnswer: 'knows',
        explanationEn: 'Indefinite pronoun "Nobody" is grammatically singular and takes "knows".',
        explanationEs: 'El pronombre indefinido "Nobody" es singular y lleva "knows".'
      },
      {
        id: 'know-mc-10',
        type: 'multiple-choice',
        question: 'He ___ the answer immediately when the professor asked.',
        options: ['knew', 'knows', 'known', 'know'],
        correctAnswer: 'knew',
        explanationEn: 'Past simple action: "He knew the answer immediately".',
        explanationEs: 'Acción en pasado simple: "He knew the answer".'
      },
      // 10 Sentence Builders
      {
        id: 'know-sb-1',
        type: 'sentence-builder',
        spanishPrompt: 'Yo sé cómo resolver este problema matemático.',
        correctSentence: 'I know how to solve this math problem.',
        tokens: ['I', 'know', 'how', 'to', 'solve', 'this', 'math', 'problem.'],
        explanationEn: 'Structure: know + how to + infinitive verb.',
        explanationEs: 'Estructura: know how to + verbo en infinitivo.'
      },
      {
        id: 'know-sb-2',
        type: 'sentence-builder',
        spanishPrompt: 'Ella conoce muy bien la ciudad.',
        correctSentence: 'She knows the city very well.',
        tokens: ['She', 'knows', 'the', 'city', 'very', 'well.'],
        explanationEn: 'Third person "knows" expressing familiarity with a place.',
        explanationEs: '"She knows" expresa conocimiento o familiaridad con un lugar.'
      },
      {
        id: 'know-sb-3',
        type: 'sentence-builder',
        spanishPrompt: 'Nosotros sabíamos la verdad desde el principio.',
        correctSentence: 'We knew the truth from the beginning.',
        tokens: ['We', 'knew', 'the', 'truth', 'from', 'the', 'beginning.'],
        explanationEn: 'Past simple "knew" + noun phrase + prepositional phrase.',
        explanationEs: 'Pasado simple "knew" (sabíamos).'
      },
      {
        id: 'know-sb-4',
        type: 'sentence-builder',
        spanishPrompt: 'Ellos han conocido a muchas personas interesantes.',
        correctSentence: 'They have known many interesting people.',
        tokens: ['They', 'have', 'known', 'many', 'interesting', 'people.'],
        explanationEn: 'Present perfect: have + known (past participle).',
        explanationEs: 'Presente perfecto con el participio "known".'
      },
      {
        id: 'know-sb-5',
        type: 'sentence-builder',
        spanishPrompt: '¿Sabes dónde está la estación central?',
        correctSentence: 'Do you know where the central station is?',
        tokens: ['Do', 'you', 'know', 'where', 'the', 'central', 'station', 'is?'],
        explanationEn: 'Embedded question: Do you know + where + subject + verb (is).',
        explanationEs: 'Pregunta indirecta: Do you know where the central station is?'
      },
      {
        id: 'know-sb-6',
        type: 'sentence-builder',
        spanishPrompt: 'Todos los estudiantes deben saber las reglas.',
        correctSentence: 'All students must know the exam rules.',
        tokens: ['All', 'students', 'must', 'know', 'the', 'exam', 'rules.'],
        explanationEn: 'Modal "must" + base verb "know".',
        explanationEs: 'Modal "must" con verbo base "know".'
      },
      {
        id: 'know-sb-7',
        type: 'sentence-builder',
        spanishPrompt: 'Ella no sabe la respuesta correcta.',
        correctSentence: 'She does not know the correct answer.',
        tokens: ['She', 'does', 'not', 'know', 'the', 'correct', 'answer.'],
        explanationEn: 'Negative present: She + does not + know.',
        explanationEs: 'Negación: She does not know.'
      },
      {
        id: 'know-sb-8',
        type: 'sentence-builder',
        spanishPrompt: 'Es importante conocer tus derechos y deberes.',
        correctSentence: 'It is important to know your rights and duties.',
        tokens: ['It', 'is', 'important', 'to', 'know', 'your', 'rights', 'and', 'duties.'],
        explanationEn: 'Dummy subject "It is important" + infinitive "to know".',
        explanationEs: '"It is important to know..." introduce una recomendación formal.'
      },
      {
        id: 'know-sb-9',
        type: 'sentence-builder',
        spanishPrompt: 'Hasta donde yo sé, la prueba comienza a las nueve.',
        correctSentence: 'As far as I know the test starts at nine.',
        tokens: ['As', 'far', 'as', 'I', 'know', 'the', 'test', 'starts', 'at', 'nine.'],
        explanationEn: 'Discourse marker: "As far as I know...".',
        explanationEs: 'Conector: "As far as I know..." (Hasta donde sé).'
      },
      {
        id: 'know-sb-10',
        type: 'sentence-builder',
        spanishPrompt: 'Él sabe hablar inglés y francés con fluidez.',
        correctSentence: 'He knows how to speak English and French fluently.',
        tokens: ['He', 'knows', 'how', 'to', 'speak', 'English', 'and', 'French', 'fluently.'],
        explanationEn: 'Structure: He knows how to speak + languages + adverb.',
        explanationEs: 'Estructura de habilidad lingüística: "He knows how to speak...".'
      }
    ]
  },

  // 8. THINK
  {
    verbId: 8,
    questions: [
      {
        id: 'think-mc-1',
        type: 'multiple-choice',
        question: 'Many educational researchers ___ that critical thinking is essential.',
        options: ['think', 'thinks', 'thought', 'thinking'],
        correctAnswer: 'think',
        explanationEn: 'Plural subject "Many educational researchers" takes the base verb "think".',
        explanationEs: 'Sujeto plural requiere "think" en presente simple.'
      },
      {
        id: 'think-mc-2',
        type: 'multiple-choice',
        question: 'What is the past simple and past participle of "think"?',
        options: ['thought', 'thinked', 'thinks', 'thinking'],
        correctAnswer: 'thought',
        explanationEn: 'The irregular verb "think" has the past simple and participle form "thought".',
        explanationEs: 'El pasado y participio de "think" es "thought".'
      },
      {
        id: 'think-mc-3',
        type: 'multiple-choice',
        question: 'I ___ about your proposal all evening yesterday.',
        options: ['thought', 'think', 'thinks', 'thinking'],
        correctAnswer: 'thought',
        explanationEn: 'Past simple action with time indicator "yesterday" takes "thought".',
        explanationEs: 'Acción en pasado indicada por "yesterday" requiere "thought".'
      },
      {
        id: 'think-mc-4',
        type: 'multiple-choice',
        question: 'What is the Spanish translation of the verb "think"?',
        options: ['Pensar / Opinar', 'Saber / Conocer', 'Comenzar / Iniciar', 'Mirar / Observar'],
        correctAnswer: 'Pensar / Opinar',
        explanationEn: '"Think" translates to "pensar" or "opinar/creer" in Spanish.',
        explanationEs: '"Think" traduce pensar u opinar.'
      },
      {
        id: 'think-mc-5',
        type: 'multiple-choice',
        question: 'What do you ___ of the new environmental regulation?',
        options: ['think', 'thinks', 'thought', 'thinking'],
        correctAnswer: 'think',
        explanationEn: 'Expression "What do you think of..." asks for someone’s opinion.',
        explanationEs: '"What do you think of..." indaga sobre la opinión de alguien.'
      },
      {
        id: 'think-mc-6',
        type: 'multiple-choice',
        question: 'She ___ that online learning provides greater flexibility.',
        options: ['thinks', 'think', 'thought', 'thinking'],
        correctAnswer: 'thinks',
        explanationEn: 'Third-person singular "She" takes "thinks" with -s in present simple.',
        explanationEs: 'Tercera persona singular "She" lleva "thinks".'
      },
      {
        id: 'think-mc-7',
        type: 'multiple-choice',
        question: 'We need to ___ twice before making a hasty decision.',
        options: ['think', 'thinks', 'thought', 'thinking'],
        correctAnswer: 'think',
        explanationEn: 'Idiom: "think twice" (pensarlo dos veces) after infinitive "to".',
        explanationEs: 'Modismo: "think twice" (pensarlo dos veces).'
      },
      {
        id: 'think-mc-8',
        type: 'multiple-choice',
        question: 'I never ___ that learning English could be so engaging.',
        options: ['thought', 'think', 'thinks', 'thinking'],
        correctAnswer: 'thought',
        explanationEn: 'Past reflection: "I never thought that...".',
        explanationEs: 'Reflexión en pasado: "I never thought that...".'
      },
      {
        id: 'think-mc-9',
        type: 'multiple-choice',
        question: 'Are you ___ of applying for the international exchange program?',
        options: ['thinking', 'think', 'thinks', 'thought'],
        correctAnswer: 'thinking',
        explanationEn: 'Present continuous: "Are you thinking of..." (¿Estás pensando en...?).',
        explanationEs: 'Presente continuo con la preposición "of": "thinking of".'
      },
      {
        id: 'think-mc-10',
        type: 'multiple-choice',
        question: 'Experts ___ that renewable energy will dominate the next century.',
        options: ['think', 'thinks', 'thought', 'to think'],
        correctAnswer: 'think',
        explanationEn: 'Plural subject "Experts" takes "think" in academic opinion statements.',
        explanationEs: 'Sujeto plural "Experts" concuerda con "think".'
      },
      // 10 Sentence Builders
      {
        id: 'think-sb-1',
        type: 'sentence-builder',
        spanishPrompt: 'Pienso que este examen es muy importante.',
        correctSentence: 'I think that this exam is very important.',
        tokens: ['I', 'think', 'that', 'this', 'exam', 'is', 'very', 'important.'],
        explanationEn: 'Opinion structure: I think that + clause.',
        explanationEs: 'Estructura de opinión: I think that + oración.'
      },
      {
        id: 'think-sb-2',
        type: 'sentence-builder',
        spanishPrompt: 'Ella piensa que la educación cambia vidas.',
        correctSentence: 'She thinks that education changes lives.',
        tokens: ['She', 'thinks', 'that', 'education', 'changes', 'lives.'],
        explanationEn: 'Third person "thinks" + general truth clause.',
        explanationEs: 'Tercera persona singular "thinks".'
      },
      {
        id: 'think-sb-3',
        type: 'sentence-builder',
        spanishPrompt: 'Nosotros pensamos en viajar el próximo mes.',
        correctSentence: 'We are thinking about traveling next month.',
        tokens: ['We', 'are', 'thinking', 'about', 'traveling', 'next', 'month.'],
        explanationEn: 'Present continuous with "thinking about" + gerund "traveling".',
        explanationEs: '"Thinking about" seguido de gerundio para planes futuros.'
      },
      {
        id: 'think-sb-4',
        type: 'sentence-builder',
        spanishPrompt: 'Él pensó en una solución creativa para el problema.',
        correctSentence: 'He thought of a creative solution to the problem.',
        tokens: ['He', 'thought', 'of', 'a', 'creative', 'solution', 'to', 'the', 'problem.'],
        explanationEn: 'Past simple "thought of" (se le ocurrió / ideó).',
        explanationEs: '"Thought of" expresa que ideó una solución en pasado.'
      },
      {
        id: 'think-sb-5',
        type: 'sentence-builder',
        spanishPrompt: '¿Qué opinas sobre el nuevo proyecto de investigación?',
        correctSentence: 'What do you think about the new research project?',
        tokens: ['What', 'do', 'you', 'think', 'about', 'the', 'new', 'research', 'project?'],
        explanationEn: 'Interrogative asking for opinion: What do you think about...?',
        explanationEs: 'Pregunta de opinión: What do you think about...?'
      },
      {
        id: 'think-sb-6',
        type: 'sentence-builder',
        spanishPrompt: 'Debes pensar antes de responder la pregunta.',
        correctSentence: 'You must think before answering the question.',
        tokens: ['You', 'must', 'think', 'before', 'answering', 'the', 'question.'],
        explanationEn: 'Modal "must" + "think" + preposition "before" + gerund.',
        explanationEs: 'Modal "must think" seguido de "before" con gerundio.'
      },
      {
        id: 'think-sb-7',
        type: 'sentence-builder',
        spanishPrompt: 'Ellos no pensaron que el examen fuera tan largo.',
        correctSentence: 'They did not think the test was so long.',
        tokens: ['They', 'did', 'not', 'think', 'the', 'test', 'was', 'so', 'long.'],
        explanationEn: 'Negative past: They + did not think + subordinate clause.',
        explanationEs: 'Negación en pasado: They did not think...'
      },
      {
        id: 'think-sb-8',
        type: 'sentence-builder',
        spanishPrompt: 'Muchos científicos piensan que el clima está cambiando rápidamente.',
        correctSentence: 'Many scientists think that the climate is changing rapidly.',
        tokens: ['Many', 'scientists', 'think', 'that', 'the', 'climate', 'is', 'changing', 'rapidly.'],
        explanationEn: 'Plural subject "Many scientists" takes "think".',
        explanationEs: 'Sujeto plural con "think" en oraciones académicas.'
      },
      {
        id: 'think-sb-9',
        type: 'sentence-builder',
        spanishPrompt: 'Yo nunca pensé que ganaría el primer lugar.',
        correctSentence: 'I never thought I would win first place.',
        tokens: ['I', 'never', 'thought', 'I', 'would', 'win', 'first', 'place.'],
        explanationEn: 'Past thought with conditional: thought + would + win.',
        explanationEs: 'Pensamiento en pasado combinado con condicional "would win".'
      },
      {
        id: 'think-sb-10',
        type: 'sentence-builder',
        spanishPrompt: 'Es hora de pensar en nuestro futuro profesional.',
        correctSentence: 'It is time to think about our professional future.',
        tokens: ['It', 'is', 'time', 'to', 'think', 'about', 'our', 'professional', 'future.'],
        explanationEn: 'Phrase: "It is time to think about...".',
        explanationEs: 'Expresión: "It is time to think about...".'
      }
    ]
  },

  // 9. TAKE
  {
    verbId: 9,
    questions: [
      {
        id: 'take-mc-1',
        type: 'multiple-choice',
        question: 'Candidates will ___ the official IELTS exam on Saturday.',
        options: ['take', 'takes', 'took', 'taken'],
        correctAnswer: 'take',
        explanationEn: 'Modal "will" is followed by the base verb "take" (take an exam).',
        explanationEs: '"Will" va seguido de la forma base "take" (presentar un examen).'
      },
      {
        id: 'take-mc-2',
        type: 'multiple-choice',
        question: 'What is the past simple of "take"?',
        options: ['took', 'taken', 'taked', 'takes'],
        correctAnswer: 'took',
        explanationEn: 'The past simple form of "take" is "took".',
        explanationEs: 'El pasado simple de "take" es "took".'
      },
      {
        id: 'take-mc-3',
        type: 'multiple-choice',
        question: 'What is the past participle of "take"?',
        options: ['taken', 'took', 'taked', 'taking'],
        correctAnswer: 'taken',
        explanationEn: 'The past participle of "take" is "taken" (e.g., have taken measures).',
        explanationEs: 'El participio pasado de "take" es "taken".'
      },
      {
        id: 'take-mc-4',
        type: 'multiple-choice',
        question: 'Authorities must ___ immediate action to protect endangered species.',
        options: ['take', 'make', 'do', 'have'],
        correctAnswer: 'take',
        explanationEn: 'The essential academic collocation is "take action" (tomar acción/medidas).',
        explanationEs: 'La colocación formal es "take action" (tomar medidas o acción).'
      },
      {
        id: 'take-mc-5',
        type: 'multiple-choice',
        question: 'She ___ detailed notes during the biology lecture yesterday.',
        options: ['took', 'take', 'taken', 'takes'],
        correctAnswer: 'took',
        explanationEn: 'Collocation in past simple: "took notes" (tomó apuntes).',
        explanationEs: 'Colocación en pasado: "took notes" (tomó apuntes).'
      },
      {
        id: 'take-mc-6',
        type: 'multiple-choice',
        question: 'What does the phrasal verb "take off" mean when referring to an airplane?',
        options: ['Despegar', 'Aterrizar', 'Acelerar', 'Estacionar'],
        correctAnswer: 'Despegar',
        explanationEn: '"Take off" refers to an aircraft leaving the ground to start flying.',
        explanationEs: '"Take off" significa despegar cuando se refiere a un avión.'
      },
      {
        id: 'take-mc-7',
        type: 'multiple-choice',
        question: 'How long does it ___ to drive from Bogotá to Medellín?',
        options: ['take', 'takes', 'took', 'taken'],
        correctAnswer: 'take',
        explanationEn: 'Structure for duration: "How long does it take...".',
        explanationEs: 'Estructura para duración: "How long does it take...?".'
      },
      {
        id: 'take-mc-8',
        type: 'multiple-choice',
        question: 'You shouldn’t ___ things for granted in life.',
        options: ['take', 'make', 'have', 'give'],
        correctAnswer: 'take',
        explanationEn: 'Fixed idiom: "take for granted" (dar por sentado).',
        explanationEs: 'Modismo fijo: "take for granted" (dar por sentado).'
      },
      {
        id: 'take-mc-9',
        type: 'multiple-choice',
        question: 'What is the Spanish translation of the verb "take"?',
        options: ['Tomar / Llevar', 'Dar / Proporcionar', 'Buscar / Encontrar', 'Comenzar / Iniciar'],
        correctAnswer: 'Tomar / Llevar',
        explanationEn: '"Take" translates to "tomar", "llevar", or "tardar" in Spanish.',
        explanationEs: '"Take" traduce tomar, llevar o tardar en español.'
      },
      {
        id: 'take-mc-10',
        type: 'multiple-choice',
        question: 'The students have ___ advantage of the free online tutoring sessions.',
        options: ['taken', 'took', 'take', 'taking'],
        correctAnswer: 'taken',
        explanationEn: 'Collocation in present perfect: "have taken advantage of" (han aprovechado).',
        explanationEs: 'Colocación en presente perfecto: "have taken advantage of".'
      },
      // 10 Sentence Builders
      {
        id: 'take-sb-1',
        type: 'sentence-builder',
        spanishPrompt: 'Voy a tomar el examen de inglés mañana.',
        correctSentence: 'I am going to take the English exam tomorrow.',
        tokens: ['I', 'am', 'going', 'to', 'take', 'the', 'English', 'exam', 'tomorrow.'],
        explanationEn: 'Future with "be going to" + collocation "take the exam".',
        explanationEs: 'Futuro próximo con "be going to take the exam".'
      },
      {
        id: 'take-sb-2',
        type: 'sentence-builder',
        spanishPrompt: 'Ella tomó notas detalladas durante la clase.',
        correctSentence: 'She took detailed notes during the class.',
        tokens: ['She', 'took', 'detailed', 'notes', 'during', 'the', 'class.'],
        explanationEn: 'Past simple "took" + collocation "detailed notes".',
        explanationEs: 'Pasado simple "took detailed notes" (tomó apuntes detallados).'
      },
      {
        id: 'take-sb-3',
        type: 'sentence-builder',
        spanishPrompt: 'Tarda dos horas llegar al aeropuerto.',
        correctSentence: 'It takes two hours to reach the airport.',
        tokens: ['It', 'takes', 'two', 'hours', 'to', 'reach', 'the', 'airport.'],
        explanationEn: 'Impersonal time structure: It takes + duration + infinitive.',
        explanationEs: 'Estructura impersonal de tiempo: "It takes two hours...".'
      },
      {
        id: 'take-sb-4',
        type: 'sentence-builder',
        spanishPrompt: 'Debemos tomar medidas para proteger el medio ambiente.',
        correctSentence: 'We must take measures to protect the environment.',
        tokens: ['We', 'must', 'take', 'measures', 'to', 'protect', 'the', 'environment.'],
        explanationEn: 'Academic collocation: "take measures to do something".',
        explanationEs: 'Colocación académica: "take measures" (tomar medidas).'
      },
      {
        id: 'take-sb-5',
        type: 'sentence-builder',
        spanishPrompt: 'Toma tu tiempo para responder las preguntas.',
        correctSentence: 'Take your time to answer the questions.',
        tokens: ['Take', 'your', 'time', 'to', 'answer', 'the', 'questions.'],
        explanationEn: 'Imperative idiom: "Take your time" (tómate tu tiempo).',
        explanationEs: 'Expresión imperativa: "Take your time" (tómate tu tiempo).'
      },
      {
        id: 'take-sb-6',
        type: 'sentence-builder',
        spanishPrompt: 'Él cuidará a su hermano menor esta tarde.',
        correctSentence: 'He will take care of his younger brother this afternoon.',
        tokens: ['He', 'will', 'take', 'care', 'of', 'his', 'younger', 'brother', 'this', 'afternoon.'],
        explanationEn: 'Phrasal collocation: "take care of" (cuidar a).',
        explanationEs: 'Colocación "take care of" (cuidar de alguien).'
      },
      {
        id: 'take-sb-7',
        type: 'sentence-builder',
        spanishPrompt: 'El avión despegó a tiempo esta mañana.',
        correctSentence: 'The airplane took off on time this morning.',
        tokens: ['The', 'airplane', 'took', 'off', 'on', 'time', 'this', 'morning.'],
        explanationEn: 'Past simple of phrasal verb: "took off" (despegó).',
        explanationEs: 'Pasado del phrasal verb: "took off" (despegó).'
      },
      {
        id: 'take-sb-8',
        type: 'sentence-builder',
        spanishPrompt: 'Ellos han aprovechado todas las oportunidades.',
        correctSentence: 'They have taken advantage of all the opportunities.',
        tokens: ['They', 'have', 'taken', 'advantage', 'of', 'all', 'the', 'opportunities.'],
        explanationEn: 'Present perfect idiom: "have taken advantage of".',
        explanationEs: '"Have taken advantage of" (han aprovechado).'
      },
      {
        id: 'take-sb-9',
        type: 'sentence-builder',
        spanishPrompt: '¿Cuánto tiempo te lleva estudiar cada día?',
        correctSentence: 'How long does it take you to study every day?',
        tokens: ['How', 'long', 'does', 'it', 'take', 'you', 'to', 'study', 'every', 'day?'],
        explanationEn: 'Question structure for personal duration: How long does it take you...?',
        explanationEs: 'Pregunta de duración personal: "How long does it take you...?".'
      },
      {
        id: 'take-sb-10',
        type: 'sentence-builder',
        spanishPrompt: 'No des por sentada tu salud.',
        correctSentence: 'Do not take your health for granted.',
        tokens: ['Do', 'not', 'take', 'your', 'health', 'for', 'granted.'],
        explanationEn: 'Negative imperative idiom: "Do not take ... for granted".',
        explanationEs: 'Expresión negativa: "Do not take your health for granted".'
      }
    ]
  },

  // 10. SEE
  {
    verbId: 10,
    questions: [
      {
        id: 'see-mc-1',
        type: 'multiple-choice',
        question: 'As can be ___ from the graph, sales increased significantly in 2023.',
        options: ['seen', 'saw', 'see', 'seeing'],
        correctAnswer: 'seen',
        explanationEn: 'Essential IELTS Academic phrase: "As can be seen from the graph..." (passive participle).',
        explanationEs: 'Frase clave de IELTS Académico: "As can be seen..." requiere el participio "seen".'
      },
      {
        id: 'see-mc-2',
        type: 'multiple-choice',
        question: 'What is the past simple of the verb "see"?',
        options: ['saw', 'seen', 'seed', 'sees'],
        correctAnswer: 'saw',
        explanationEn: 'The past simple form of "see" is "saw".',
        explanationEs: 'El pasado simple de "see" es "saw".'
      },
      {
        id: 'see-mc-3',
        type: 'multiple-choice',
        question: 'I ___ an intriguing documentary about ocean conservation last night.',
        options: ['saw', 'see', 'seen', 'sees'],
        correctAnswer: 'saw',
        explanationEn: 'Time marker "last night" requires the past simple form "saw".',
        explanationEs: '"Last night" exige el tiempo pasado simple "saw".'
      },
      {
        id: 'see-mc-4',
        type: 'multiple-choice',
        question: 'Have you ___ my English textbook anywhere in the classroom?',
        options: ['seen', 'saw', 'see', 'seeing'],
        correctAnswer: 'seen',
        explanationEn: 'Present perfect question: Have you + past participle "seen".',
        explanationEs: 'Pregunta en presente perfecto: Have you + participio "seen".'
      },
      {
        id: 'see-mc-5',
        type: 'multiple-choice',
        question: 'What is the Spanish translation of the verb "see"?',
        options: ['Ver / Comprender', 'Oír / Escuchar', 'Hablar / Conversar', 'Buscar / Hallar'],
        correctAnswer: 'Ver / Comprender',
        explanationEn: '"See" translates to "ver" or "comprender" (e.g. "I see what you mean").',
        explanationEs: '"See" traduce ver y también comprender ("I see").'
      },
      {
        id: 'see-mc-6',
        type: 'multiple-choice',
        question: 'I ___ what you mean, but I still have a different perspective.',
        options: ['see', 'saw', 'seen', 'sees'],
        correctAnswer: 'see',
        explanationEn: 'Idiom: "I see what you mean" (Entiendo lo que quieres decir).',
        explanationEs: 'Expresión: "I see what you mean" (Entiendo tu punto).'
      },
      {
        id: 'see-mc-7',
        type: 'multiple-choice',
        question: 'She was excited to ___ her old classmates at the university reunion.',
        options: ['see', 'saw', 'seen', 'seeing'],
        correctAnswer: 'see',
        explanationEn: 'After the infinitive marker "to", use base form "see".',
        explanationEs: 'Tras el marcador de infinitivo "to", se usa la forma base "see".'
      },
      {
        id: 'see-mc-8',
        type: 'multiple-choice',
        question: 'We can clearly ___ the impact of modern technology on communication.',
        options: ['see', 'saw', 'seen', 'sees'],
        correctAnswer: 'see',
        explanationEn: 'Modal "can" is followed by base verb "see".',
        explanationEs: 'El modal "can" va seguido de la forma base "see".'
      },
      {
        id: 'see-mc-9',
        type: 'multiple-choice',
        question: 'The doctor wants to ___ the patient for a follow-up consultation.',
        options: ['see', 'saw', 'seen', 'seeing'],
        correctAnswer: 'see',
        explanationEn: '"See a patient" means to examine or consult with a patient.',
        explanationEs: '"See a patient" significa atender o examinar a un paciente.'
      },
      {
        id: 'see-mc-10',
        type: 'multiple-choice',
        question: 'Let’s wait and ___ what happens before taking further measures.',
        options: ['see', 'saw', 'seen', 'seeing'],
        correctAnswer: 'see',
        explanationEn: 'Fixed phrase: "wait and see" (esperar a ver).',
        explanationEs: 'Expresión fija: "wait and see" (esperar y ver qué sucede).'
      },
      // 10 Sentence Builders
      {
        id: 'see-sb-1',
        type: 'sentence-builder',
        spanishPrompt: 'Como se puede ver en el gráfico, los resultados mejoraron.',
        correctSentence: 'As can be seen in the chart the results improved.',
        tokens: ['As', 'can', 'be', 'seen', 'in', 'the', 'chart', 'the', 'results', 'improved.'],
        explanationEn: 'IELTS Academic reporting structure: "As can be seen in the chart...".',
        explanationEs: 'Estructura académica para gráficos: "As can be seen in the chart...".'
      },
      {
        id: 'see-sb-2',
        type: 'sentence-builder',
        spanishPrompt: 'Ayer vi a mi profesor en la biblioteca.',
        correctSentence: 'Yesterday I saw my professor in the library.',
        tokens: ['Yesterday', 'I', 'saw', 'my', 'professor', 'in', 'the', 'library.'],
        explanationEn: 'Past simple "saw" with time indicator "Yesterday".',
        explanationEs: 'Pasado simple "saw" con indicador de tiempo.'
      },
      {
        id: 'see-sb-3',
        type: 'sentence-builder',
        spanishPrompt: '¿Has visto esta película documental antes?',
        correctSentence: 'Have you seen this documentary movie before?',
        tokens: ['Have', 'you', 'seen', 'this', 'documentary', 'movie', 'before?'],
        explanationEn: 'Present perfect question: Have you seen + object + before.',
        explanationEs: 'Pregunta en presente perfecto: "Have you seen...?".'
      },
      {
        id: 'see-sb-4',
        type: 'sentence-builder',
        spanishPrompt: 'Entiendo tu punto de vista perfectamente.',
        correctSentence: 'I see your point of view perfectly.',
        tokens: ['I', 'see', 'your', 'point', 'of', 'view', 'perfectly.'],
        explanationEn: '"I see" in the sense of understanding: "I see your point of view".',
        explanationEs: '"I see your point of view" (Entiendo tu punto de vista).'
      },
      {
        id: 'see-sb-5',
        type: 'sentence-builder',
        spanishPrompt: 'Podemos ver las estrellas claramente esta noche.',
        correctSentence: 'We can see the stars clearly tonight.',
        tokens: ['We', 'can', 'see', 'the', 'stars', 'clearly', 'tonight.'],
        explanationEn: 'Modal "can see" + direct object + adverb "clearly".',
        explanationEs: 'Estructura modal: "can see" con adverbio de modo.'
      },
      {
        id: 'see-sb-6',
        type: 'sentence-builder',
        spanishPrompt: 'Ella fue al médico para ver los resultados.',
        correctSentence: 'She went to the doctor to see the results.',
        tokens: ['She', 'went', 'to', 'the', 'doctor', 'to', 'see', 'the', 'results.'],
        explanationEn: 'Infinitive of purpose: "to see the results".',
        explanationEs: 'Infinitivo de propósito: "to see the results".'
      },
      {
        id: 'see-sb-7',
        type: 'sentence-builder',
        spanishPrompt: 'Esperemos y veamos qué decide el comité.',
        correctSentence: 'Let us wait and see what the committee decides.',
        tokens: ['Let', 'us', 'wait', 'and', 'see', 'what', 'the', 'committee', 'decides.'],
        explanationEn: 'Idiomatic expression: "wait and see what...".',
        explanationEs: 'Expresión: "wait and see what the committee decides".'
      },
      {
        id: 'see-sb-8',
        type: 'sentence-builder',
        spanishPrompt: 'Ellos no vieron las señales de advertencia a tiempo.',
        correctSentence: 'They did not see the warning signs in time.',
        tokens: ['They', 'did', 'not', 'see', 'the', 'warning', 'signs', 'in', 'time.'],
        explanationEn: 'Negative past: did not see + noun phrase.',
        explanationEs: 'Negación en pasado con "did not see".'
      },
      {
        id: 'see-sb-9',
        type: 'sentence-builder',
        spanishPrompt: 'Me alegra verte después de tanto tiempo.',
        correctSentence: 'I am glad to see you after so long.',
        tokens: ['I', 'am', 'glad', 'to', 'see', 'you', 'after', 'so', 'long.'],
        explanationEn: 'Adjective + infinitive: "glad to see you".',
        explanationEs: 'Expresión: "glad to see you" (contento de verte).'
      },
      {
        id: 'see-sb-10',
        type: 'sentence-builder',
        spanishPrompt: 'Los investigadores quieren ver el impacto a largo plazo.',
        correctSentence: 'Researchers want to see the long term impact.',
        tokens: ['Researchers', 'want', 'to', 'see', 'the', 'long', 'term', 'impact.'],
        explanationEn: 'Verb + infinitive: want to see + academic compound noun phrase.',
        explanationEs: 'Estructura: want to see + objeto directo.'
      }
    ]
  }
];
