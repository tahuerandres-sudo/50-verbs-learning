import { VerbQuestionBank } from '../../types';

export const VERBS_41_50_QUESTIONS: VerbQuestionBank[] = [
  // 41. LIKE
  {
    verbId: 41,
    questions: [
      {
        id: 'like-mc-1',
        type: 'multiple-choice',
        question: 'Many students ___ studying in quiet library cubicles.',
        options: ['like', 'likes', 'liked', 'liking'],
        correctAnswer: 'like',
        explanationEn: 'Plural subject "Many students" takes base form "like". Followed by gerund or infinitive.',
        explanationEs: 'Sujeto plural concuerda con "like" en presente simple.'
      },
      {
        id: 'like-mc-2',
        type: 'multiple-choice',
        question: 'What is the past simple of the regular verb "like"?',
        options: ['liked', 'like', 'liken', 'liking'],
        correctAnswer: 'liked',
        explanationEn: '"Like" is a regular verb; its past form is "liked" /laɪkt/.',
        explanationEs: '"Like" es regular, su forma pasada es "liked".'
      },
      {
        id: 'like-mc-3',
        type: 'multiple-choice',
        question: 'What does "would like" mean in polite English?',
        options: ['Gustaría / Querría (forma cortés de desear algo)', 'Gustaba en el pasado', 'Parecerse a algo', 'Hacer una comparación'],
        correctAnswer: 'Gustaría / Querría (forma cortés de desear algo)',
        explanationEn: '"Would like" is a polite equivalent of "want" (e.g., I would like to register).',
        explanationEs: '"Would like" es la fórmula cortés para expresar deseo (me gustaría).'
      },
      {
        id: 'like-mc-4',
        type: 'multiple-choice',
        question: 'She ___ reading historical fiction during her leisure hours.',
        options: ['likes', 'like', 'liked', 'liking'],
        correctAnswer: 'likes',
        explanationEn: 'Third-person singular subject "She" takes "likes" in present simple.',
        explanationEs: 'Tercera persona singular "She" concuerda con "likes".'
      },
      {
        id: 'like-mc-5',
        type: 'multiple-choice',
        question: 'What is the Spanish translation of the verb "like"?',
        options: ['Gustar / Agradar / Querer', 'Vivir / Habitar', 'Creer / Confiar', 'Escribir / Redactar'],
        correctAnswer: 'Gustar / Agradar / Querer',
        explanationEn: '"Like" translates to "gustar" or "agradar".',
        explanationEs: '"Like" traduce gustar o agradar.'
      },
      {
        id: 'like-mc-6',
        type: 'multiple-choice',
        question: 'What does the preposition/conjunction "like" mean in "act like a professional"?',
        options: ['Como / De la misma manera que', 'Gustar', 'Querer', 'Debido a'],
        correctAnswer: 'Como / De la misma manera que',
        explanationEn: '"Like" also functions as a preposition meaning "similar to" or "in the manner of".',
        explanationEs: '"Like" también funciona como preposición comparativa ("como").'
      },
      {
        id: 'like-mc-7',
        type: 'multiple-choice',
        question: 'I would ___ to schedule an appointment with the academic advisor.',
        options: ['like', 'liked', 'likes', 'liking'],
        correctAnswer: 'like',
        explanationEn: 'Polite expression: would + base verb "like to schedule".',
        explanationEs: 'Estructura cortés: "would like to schedule".'
      },
      {
        id: 'like-mc-8',
        type: 'multiple-choice',
        question: 'Do you ___ participating in collaborative group discussions?',
        options: ['like', 'likes', 'liked', 'liking'],
        correctAnswer: 'like',
        explanationEn: 'Present simple question with "Do" uses base form "like".',
        explanationEs: 'Pregunta con auxiliar "Do" lleva la forma base "like".'
      },
      {
        id: 'like-mc-9',
        type: 'multiple-choice',
        question: 'He really ___ the keynote presentation delivered at the summit.',
        options: ['liked', 'like', 'likes', 'liking'],
        correctAnswer: 'liked',
        explanationEn: 'Past simple action: "He really liked the keynote...".',
        explanationEs: 'Aprobación en pasado simple: "He really liked...".'
      },
      {
        id: 'like-mc-10',
        type: 'multiple-choice',
        question: 'Renewable energy sources ___ solar and wind power are vital.',
        options: ['like', 'likes', 'liked', 'liking'],
        correctAnswer: 'like',
        explanationEn: 'Exemplification preposition: "sources like solar and wind".',
        explanationEs: 'Preposición ejemplificativa: "sources like solar and wind" (tales como).'
      },
      // 10 Sentence Builders
      {
        id: 'like-sb-1',
        type: 'sentence-builder',
        spanishPrompt: 'Me gustaría hacer una pregunta sobre el examen.',
        correctSentence: 'I would like to ask a question about the exam.',
        tokens: ['I', 'would', 'like', 'to', 'ask', 'a', 'question', 'about', 'the', 'exam.'],
        explanationEn: 'Polite structure: I would like to + base verb (ask).',
        explanationEs: 'Estructura cortés: "I would like to ask a question...".'
      },
      {
        id: 'like-sb-2',
        type: 'sentence-builder',
        spanishPrompt: 'A ella le gusta aprender nuevos idiomas extranjeros.',
        correctSentence: 'She likes learning new foreign languages.',
        tokens: ['She', 'likes', 'learning', 'new', 'foreign', 'languages.'],
        explanationEn: 'Third person "likes" + gerund "learning" + noun phrase.',
        explanationEs: 'Tercera persona: "She likes learning new foreign languages".'
      },
      {
        id: 'like-sb-3',
        type: 'sentence-builder',
        spanishPrompt: '¿Te gustaría unirte a nuestro grupo de estudio de inglés?',
        correctSentence: 'Would you like to join our English study group?',
        tokens: ['Would', 'you', 'like', 'to', 'join', 'our', 'English', 'study', 'group?'],
        explanationEn: 'Polite invitation: Would you like to join + object?',
        explanationEs: 'Invitación cortés: "Would you like to join our study group?".'
      },
      {
        id: 'like-sb-4',
        type: 'sentence-builder',
        spanishPrompt: 'Nos gustó mucho la conferencia sobre inteligencia artificial.',
        correctSentence: 'We really liked the conference on artificial intelligence.',
        tokens: ['We', 'really', 'liked', 'the', 'conference', 'on', 'artificial', 'intelligence.'],
        explanationEn: 'Past simple "liked" + adverb "really" + preposition "on".',
        explanationEs: 'Pasado simple: "We really liked the conference on...".'
      },
      {
        id: 'like-sb-5',
        type: 'sentence-builder',
        spanishPrompt: 'Fuentes de energía limpia como la solar son muy necesarias.',
        correctSentence: 'Clean energy sources like solar are very necessary.',
        tokens: ['Clean', 'energy', 'sources', 'like', 'solar', 'are', 'very', 'necessary.'],
        explanationEn: 'Prepositional example: "sources like solar are...".',
        explanationEs: 'Uso como preposición ejemplificadora: "sources like solar".'
      },
      {
        id: 'like-sb-6',
        type: 'sentence-builder',
        spanishPrompt: 'A él no le gusta estudiar a altas horas de la noche.',
        correctSentence: 'He does not like to study late at night.',
        tokens: ['He', 'does', 'not', 'like', 'to', 'study', 'late', 'at', 'night.'],
        explanationEn: 'Negative present: does not like to study + time idiom.',
        explanationEs: 'Negación en presente: "He does not like to study late at night".'
      },
      {
        id: 'like-sb-7',
        type: 'sentence-builder',
        spanishPrompt: '¿Qué tipo de libros te gusta leer en tu tiempo libre?',
        correctSentence: 'What kind of books do you like to read in your free time?',
        tokens: ['What', 'kind', 'of', 'books', 'do', 'you', 'like', 'to', 'read', 'in', 'your', 'free', 'time?'],
        explanationEn: 'IELTS Speaking Part 1 question pattern.',
        explanationEs: 'Patrón de pregunta para IELTS: "What kind of books do you like to read...?".'
      },
      {
        id: 'like-sb-8',
        type: 'sentence-builder',
        spanishPrompt: 'Ella actúa como una líder experimentada y responsable.',
        correctSentence: 'She acts like an experienced and responsible leader.',
        tokens: ['She', 'acts', 'like', 'an', 'experienced', 'and', 'responsible', 'leader.'],
        explanationEn: 'Preposition of comparison: acts like + noun phrase.',
        explanationEs: 'Preposición comparativa: "acts like an experienced leader".'
      },
      {
        id: 'like-sb-9',
        type: 'sentence-builder',
        spanishPrompt: 'Me gustaría agradecer a todos por su constante apoyo.',
        correctSentence: 'I would like to thank everyone for their constant support.',
        tokens: ['I', 'would', 'like', 'to', 'thank', 'everyone', 'for', 'their', 'constant', 'support.'],
        explanationEn: 'Formal speech opening: I would like to thank + object.',
        explanationEs: 'Apertura formal: "I would like to thank everyone for their support".'
      },
      {
        id: 'like-sb-10',
        type: 'sentence-builder',
        spanishPrompt: 'A los estudiantes les gustó el método interactivo de enseñanza.',
        correctSentence: 'The students liked the interactive method of teaching.',
        tokens: ['The', 'students', 'liked', 'the', 'interactive', 'method', 'of', 'teaching.'],
        explanationEn: 'Past simple "liked" + adjective + noun phrase.',
        explanationEs: 'Pasado simple: "The students liked the interactive method...".'
      }
    ]
  },

  // 42. LIVE
  {
    verbId: 42,
    questions: [
      {
        id: 'live-mc-1',
        type: 'multiple-choice',
        question: 'More than half of the world’s population ___ in urban centers.',
        options: ['lives', 'live', 'lived', 'living'],
        correctAnswer: 'lives',
        explanationEn: 'Singular collective subject "More than half of the population" takes "lives".',
        explanationEs: 'Sujeto colectivo singular con "lives".'
      },
      {
        id: 'live-mc-2',
        type: 'multiple-choice',
        question: 'What is the past simple of the regular verb "live"?',
        options: ['lived', 'live', 'liven', 'living'],
        correctAnswer: 'lived',
        explanationEn: '"Live" is a regular verb; its past form is "lived" /lɪvd/.',
        explanationEs: '"Live" es regular, su pasado es "lived".'
      },
      {
        id: 'live-mc-3',
        type: 'multiple-choice',
        question: 'What does the phrasal verb "live up to" mean in "live up to expectations"?',
        options: ['Cumplir o estar a la altura de las expectativas', 'Vivir en un piso alto', 'Sobrevivir a una crisis', 'Mudarse a otra ciudad'],
        correctAnswer: 'Cumplir o estar a la altura de las expectativas',
        explanationEn: '"Live up to" means to achieve what was expected or promised.',
        explanationEs: '"Live up to" significa estar a la altura o cumplir expectativas.'
      },
      {
        id: 'live-mc-4',
        type: 'multiple-choice',
        question: 'She has ___ in Oxford since she started her PhD program.',
        options: ['lived', 'live', 'lives', 'living'],
        correctAnswer: 'lived',
        explanationEn: 'Present perfect with "since": has + past participle "lived".',
        explanationEs: 'Presente perfecto con "since": "has lived in Oxford".'
      },
      {
        id: 'live-mc-5',
        type: 'multiple-choice',
        question: 'What is the Spanish translation of the verb "live"?',
        options: ['Vivir / Residir / Habitar', 'Dejar / Abandonar', 'Dar / Ofrecer', 'Tener / Poseer'],
        correctAnswer: 'Vivir / Residir / Habitar',
        explanationEn: '"Live" translates to "vivir" or "residir".',
        explanationEs: '"Live" traduce vivir o residir.'
      },
      {
        id: 'live-mc-6',
        type: 'multiple-choice',
        question: 'What is the correct pronunciation of the adjective in "a live broadcast"?',
        options: ['/laɪv/ (en vivo / directo)', '/lɪv/ (vivir)', '/lɪvd/ (vivido)', '/laɪvli/ (animado)'],
        correctAnswer: '/laɪv/ (en vivo / directo)',
        explanationEn: 'As an adjective/adverb meaning broadcast in real time, "live" is pronounced /laɪv/.',
        explanationEs: 'Como adjetivo (en directo), se pronuncia /laɪv/.'
      },
      {
        id: 'live-mc-7',
        type: 'multiple-choice',
        question: 'They ___ in a quiet suburban neighborhood near the university.',
        options: ['live', 'lives', 'lived', 'living'],
        correctAnswer: 'live',
        explanationEn: 'Plural subject "They" takes base form "live" in present simple.',
        explanationEs: 'Sujeto plural con "live" en presente simple.'
      },
      {
        id: 'live-mc-8',
        type: 'multiple-choice',
        question: 'The performance failed to ___ up to high critical expectations.',
        options: ['live', 'lived', 'lives', 'living'],
        correctAnswer: 'live',
        explanationEn: 'Infinitive complement: "failed to live up to".',
        explanationEs: 'Infinitivo con phrasal verb: "failed to live up to".'
      },
      {
        id: 'live-mc-9',
        type: 'multiple-choice',
        question: 'Where do you currently ___ while studying abroad?',
        options: ['live', 'lives', 'lived', 'living'],
        correctAnswer: 'live',
        explanationEn: 'Question with "do" takes base form "live".',
        explanationEs: 'Pregunta en presente con auxiliar "do" y verbo base "live".'
      },
      {
        id: 'live-mc-10',
        type: 'multiple-choice',
        question: 'He ___ abroad for five years before returning to his home country.',
        options: ['lived', 'live', 'lives', 'living'],
        correctAnswer: 'lived',
        explanationEn: 'Completed past residency: "He lived abroad for five years...".',
        explanationEs: 'Residencia en pasado completado: "lived abroad".'
      },
      // 10 Sentence Builders
      {
        id: 'live-sb-1',
        type: 'sentence-builder',
        spanishPrompt: 'Ella ha vivido en Londres durante tres años.',
        correctSentence: 'She has lived in London for three years.',
        tokens: ['She', 'has', 'lived', 'in', 'London', 'for', 'three', 'years.'],
        explanationEn: 'Present perfect with duration: has lived in + city + for + duration.',
        explanationEs: 'Presente perfecto con duración: "has lived in London for three years".'
      },
      {
        id: 'live-sb-2',
        type: 'sentence-builder',
        spanishPrompt: 'La película no cumplió con las grandes expectativas.',
        correctSentence: 'The movie did not live up to high expectations.',
        tokens: ['The', 'movie', 'did', 'not', 'live', 'up', 'to', 'high', 'expectations.'],
        explanationEn: 'Phrasal verb: "did not live up to expectations".',
        explanationEs: 'Phrasal verb en negativo: "did not live up to expectations".'
      },
      {
        id: 'live-sb-3',
        type: 'sentence-builder',
        spanishPrompt: '¿Dónde vives actualmente mientras estudias en la universidad?',
        correctSentence: 'Where do you live currently while studying at university?',
        tokens: ['Where', 'do', 'you', 'live', 'currently', 'while', 'studying', 'at', 'university?'],
        explanationEn: 'Wh-question: Where do you live currently while + gerund?',
        explanationEs: 'Pregunta de residencia: "Where do you live currently...?".'
      },
      {
        id: 'live-sb-4',
        type: 'sentence-builder',
        spanishPrompt: 'Muchas especies raras viven en la selva amazónica.',
        correctSentence: 'Many rare species live in the Amazon rainforest.',
        tokens: ['Many', 'rare', 'species', 'live', 'in', 'the', 'Amazon', 'rainforest.'],
        explanationEn: 'Plural subject "Many rare species" + live in + location.',
        explanationEs: 'Sujeto plural formal: "Many rare species live in...".'
      },
      {
        id: 'live-sb-5',
        type: 'sentence-builder',
        spanishPrompt: 'Ellos vivieron en el extranjero antes de regresar a casa.',
        correctSentence: 'They lived abroad before returning to their home country.',
        tokens: ['They', 'lived', 'abroad', 'before', 'returning', 'to', 'their', 'home', 'country.'],
        explanationEn: 'Past simple "lived abroad" + preposition with gerund.',
        explanationEs: 'Pasado simple: "They lived abroad before returning...".'
      },
      {
        id: 'live-sb-6',
        type: 'sentence-builder',
        spanishPrompt: 'Debemos aprender a vivir en armonía con la naturaleza.',
        correctSentence: 'We must learn to live in harmony with nature.',
        tokens: ['We', 'must', 'learn', 'to', 'live', 'in', 'harmony', 'with', 'nature.'],
        explanationEn: 'Modal + learn to live in harmony with + noun.',
        explanationEs: 'Oración formal: "learn to live in harmony with nature".'
      },
      {
        id: 'live-sb-7',
        type: 'sentence-builder',
        spanishPrompt: 'Él vive cerca del campus universitario con dos compañeros.',
        correctSentence: 'He lives near the university campus with two roommates.',
        tokens: ['He', 'lives', 'near', 'the', 'university', 'campus', 'with', 'two', 'roommates.'],
        explanationEn: 'Third person "lives near" + location + prepositional companion phrase.',
        explanationEs: 'Tercera persona singular: "He lives near the campus...".'
      },
      {
        id: 'live-sb-8',
        type: 'sentence-builder',
        spanishPrompt: 'El concierto se transmitirá en vivo a millones de espectadores.',
        correctSentence: 'The concert will be broadcast live to millions of viewers.',
        tokens: ['The', 'concert', 'will', 'be', 'broadcast', 'live', 'to', 'millions', 'of', 'viewers.'],
        explanationEn: 'Passive voice with adverb "live" /laɪv/.',
        explanationEs: 'Voz pasiva con adverbio "live" (en vivo).'
      },
      {
        id: 'live-sb-9',
        type: 'sentence-builder',
        spanishPrompt: 'Vivir en una gran ciudad tiene ventajas y desventajas.',
        correctSentence: 'Living in a big city has advantages and disadvantages.',
        tokens: ['Living', 'in', 'a', 'big', 'city', 'has', 'advantages', 'and', 'disadvantages.'],
        explanationEn: 'Gerund subject "Living in a big city" is singular and takes "has".',
        explanationEs: 'Gerundio como sujeto ("Living in a big city") lleva "has".'
      },
      {
        id: 'live-sb-10',
        type: 'sentence-builder',
        spanishPrompt: 'Ella siempre vivió de acuerdo con sus principios éticos.',
        correctSentence: 'She always lived according to her ethical principles.',
        tokens: ['She', 'always', 'lived', 'according', 'to', 'her', 'ethical', 'principles.'],
        explanationEn: 'Past simple with adverb: lived according to + noun phrase.',
        explanationEs: 'Pasado simple: "lived according to her ethical principles".'
      }
    ]
  },

  // 43. BELIEVE
  {
    verbId: 43,
    questions: [
      {
        id: 'believe-mc-1',
        type: 'multiple-choice',
        question: 'Many educational researchers ___ that early language acquisition is optimal.',
        options: ['believe', 'believes', 'believed', 'believing'],
        correctAnswer: 'believe',
        explanationEn: 'Plural subject "Many researchers" takes base verb "believe that".',
        explanationEs: 'Sujeto plural concuerda con "believe that" en presente simple.'
      },
      {
        id: 'believe-mc-2',
        type: 'multiple-choice',
        question: 'What is the past simple of the regular verb "believe"?',
        options: ['believed', 'believe', 'believen', 'believing'],
        correctAnswer: 'believed',
        explanationEn: '"Believe" is regular; its past form is "believed" /bɪˈliːvd/.',
        explanationEs: '"Believe" es regular, su forma pasada es "believed".'
      },
      {
        id: 'believe-mc-3',
        type: 'multiple-choice',
        question: 'Which preposition correctly follows "believe" when expressing faith/trust in something?',
        options: ['in', 'on', 'at', 'with'],
        correctAnswer: 'in',
        explanationEn: 'Collocation: "believe in" (creer en algo/alguien).',
        explanationEs: 'La preposición estándar es "believe in" (creer en).'
      },
      {
        id: 'believe-mc-4',
        type: 'multiple-choice',
        question: 'She firmly ___ in the power of education to transform lives.',
        options: ['believes', 'believe', 'believed', 'believing'],
        correctAnswer: 'believes',
        explanationEn: 'Third-person singular "She" takes "believes in".',
        explanationEs: 'Tercera persona singular "She" lleva "believes in".'
      },
      {
        id: 'believe-mc-5',
        type: 'multiple-choice',
        question: 'What is the Spanish translation of the verb "believe"?',
        options: ['Creer / Considerar / Opinar', 'Sostener / Mantener', 'Traer / Aportar', 'Sentar / Ubicar'],
        correctAnswer: 'Creer / Considerar / Opinar',
        explanationEn: '"Believe" translates to "creer" or "considerar".',
        explanationEs: '"Believe" traduce creer o considerar.'
      },
      {
        id: 'believe-mc-6',
        type: 'multiple-choice',
        question: 'It is widely ___ that climate change poses severe global risks.',
        options: ['believed', 'believe', 'believes', 'believing'],
        correctAnswer: 'believed',
        explanationEn: 'Academic passive voice: "It is widely believed that..." (Se cree ampliamente que...).',
        explanationEs: 'Estructura pasiva formal para IELTS: "It is widely believed that...".'
      },
      {
        id: 'believe-mc-7',
        type: 'multiple-choice',
        question: 'Do you ___ in your own potential to pass the exam?',
        options: ['believe', 'believes', 'believed', 'believing'],
        correctAnswer: 'believe',
        explanationEn: 'Question with "Do" uses base verb "believe in".',
        explanationEs: 'Pregunta con "Do" requiere la forma base "believe".'
      },
      {
        id: 'believe-mc-8',
        type: 'multiple-choice',
        question: 'He ___ that honesty is the cornerstone of professional ethics.',
        options: ['believes', 'believe', 'believed', 'believing'],
        correctAnswer: 'believes',
        explanationEn: 'Singular subject "He" takes "believes that".',
        explanationEs: 'Sujeto singular con "believes that".'
      },
      {
        id: 'believe-mc-9',
        type: 'multiple-choice',
        question: 'I could hardly ___ the incredible news when I received the acceptance letter.',
        options: ['believe', 'believed', 'believes', 'believing'],
        correctAnswer: 'believe',
        explanationEn: 'Modal phrase: "could hardly believe" (apenas podía creer).',
        explanationEs: 'Modal con adverbio: "could hardly believe".'
      },
      {
        id: 'believe-mc-10',
        type: 'multiple-choice',
        question: 'They have always ___ that collaboration leads to better innovation.',
        options: ['believed', 'believe', 'believes', 'believing'],
        correctAnswer: 'believed',
        explanationEn: 'Present perfect with adverb: have always believed.',
        explanationEs: 'Presente perfecto con participio regular "believed".'
      },
      // 10 Sentence Builders
      {
        id: 'believe-sb-1',
        type: 'sentence-builder',
        spanishPrompt: 'Creo firmemente que la educación transforma vidas.',
        correctSentence: 'I firmly believe that education transforms lives.',
        tokens: ['I', 'firmly', 'believe', 'that', 'education', 'transforms', 'lives.'],
        explanationEn: 'IELTS Academic stance: I firmly believe that + clause.',
        explanationEs: 'Postura formal para ensayos de IELTS: "I firmly believe that...".'
      },
      {
        id: 'believe-sb-2',
        type: 'sentence-builder',
        spanishPrompt: 'Debes creer en ti mismo para tener éxito.',
        correctSentence: 'You must believe in yourself to succeed.',
        tokens: ['You', 'must', 'believe', 'in', 'yourself', 'to', 'succeed.'],
        explanationEn: 'Collocation: believe in yourself + purpose infinitive.',
        explanationEs: 'Colocación: "believe in yourself to succeed".'
      },
      {
        id: 'believe-sb-3',
        type: 'sentence-builder',
        spanishPrompt: 'Se cree ampliamente que el ejercicio mejora la salud mental.',
        correctSentence: 'It is widely believed that exercise improves mental health.',
        tokens: ['It', 'is', 'widely', 'believed', 'that', 'exercise', 'improves', 'mental', 'health.'],
        explanationEn: 'Impersonal passive structure for academic writing.',
        explanationEs: 'Estructura pasiva impersonal para ensayos: "It is widely believed that...".'
      },
      {
        id: 'believe-sb-4',
        type: 'sentence-builder',
        spanishPrompt: 'Ella cree en el poder del trabajo en equipo.',
        correctSentence: 'She believes in the power of teamwork.',
        tokens: ['She', 'believes', 'in', 'the', 'power', 'of', 'teamwork.'],
        explanationEn: 'Third person "believes in" + noun phrase.',
        explanationEs: 'Tercera persona singular: "She believes in the power of teamwork".'
      },
      {
        id: 'believe-sb-5',
        type: 'sentence-builder',
        spanishPrompt: 'Apenas podía creer mis ojos cuando vi los resultados.',
        correctSentence: 'I could hardly believe my eyes when I saw the results.',
        tokens: ['I', 'could', 'hardly', 'believe', 'my', 'eyes', 'when', 'I', 'saw', 'the', 'results.'],
        explanationEn: 'Idiom: could hardly believe my eyes + past clause.',
        explanationEs: 'Expresión: "could hardly believe my eyes".'
      },
      {
        id: 'believe-sb-6',
        type: 'sentence-builder',
        spanishPrompt: 'Muchos expertos creen que la tecnología continuará avanzando.',
        correctSentence: 'Many experts believe that technology will continue to advance.',
        tokens: ['Many', 'experts', 'believe', 'that', 'technology', 'will', 'continue', 'to', 'advance.'],
        explanationEn: 'Academic reporting: Many experts believe that + future clause.',
        explanationEs: 'Cita de expertos: "Many experts believe that technology will continue...".'
      },
      {
        id: 'believe-sb-7',
        type: 'sentence-builder',
        spanishPrompt: 'Él nunca creyó en los atajos para alcanzar el éxito.',
        correctSentence: 'He never believed in shortcuts to achieve success.',
        tokens: ['He', 'never', 'believed', 'in', 'shortcuts', 'to', 'achieve', 'success.'],
        explanationEn: 'Past simple with adverb: never believed in + noun.',
        explanationEs: 'Pasado simple con preposición: "never believed in shortcuts".'
      },
      {
        id: 'believe-sb-8',
        type: 'sentence-builder',
        spanishPrompt: '¿Crees que es posible aprender inglés en un año?',
        correctSentence: 'Do you believe it is possible to learn English in one year?',
        tokens: ['Do', 'you', 'believe', 'it', 'is', 'possible', 'to', 'learn', 'English', 'in', 'one', 'year?'],
        explanationEn: 'Question: Do you believe it is possible to + verb?',
        explanationEs: 'Pregunta de opinión: "Do you believe it is possible to learn...?".'
      },
      {
        id: 'believe-sb-9',
        type: 'sentence-builder',
        spanishPrompt: 'Ellos siempre han creído en la justicia y la igualdad.',
        correctSentence: 'They have always believed in justice and equality.',
        tokens: ['They', 'have', 'always', 'believed', 'in', 'justice', 'and', 'equality.'],
        explanationEn: 'Present perfect: have always believed in + coordinate abstract nouns.',
        explanationEs: 'Presente perfecto: "have always believed in justice and equality".'
      },
      {
        id: 'believe-sb-10',
        type: 'sentence-builder',
        spanishPrompt: 'Hay razones para creer que la situación mejorará pronto.',
        correctSentence: 'There are reasons to believe that the situation will improve soon.',
        tokens: ['There', 'are', 'reasons', 'to', 'believe', 'that', 'the', 'situation', 'will', 'improve', 'soon.'],
        explanationEn: 'Academic structure: There are reasons to believe that + clause.',
        explanationEs: 'Estructura formal: "There are reasons to believe that...".'
      }
    ]
  },

  // 44. HOLD
  {
    verbId: 44,
    questions: [
      {
        id: 'hold-mc-1',
        type: 'multiple-choice',
        question: 'The international academic symposium will be ___ in Geneva next spring.',
        options: ['held', 'hold', 'holds', 'holding'],
        correctAnswer: 'held',
        explanationEn: 'Passive voice: will be + past participle "held" (celebrado/organizado).',
        explanationEs: 'Voz pasiva: "will be held" (se celebrará / se llevará a cabo).'
      },
      {
        id: 'hold-mc-2',
        type: 'multiple-choice',
        question: 'What is the past simple and past participle of the irregular verb "hold"?',
        options: ['held', 'holded', 'holds', 'holding'],
        correctAnswer: 'held',
        explanationEn: 'The irregular verb "hold" has the past and participle form "held" /held/.',
        explanationEs: 'El pasado y participio de "hold" es "held".'
      },
      {
        id: 'hold-mc-3',
        type: 'multiple-choice',
        question: 'What does the phrasal verb "hold on" mean on a telephone call?',
        options: ['Esperar un momento en la línea', 'Colgar la llamada', 'Marcar un número', 'Hablar más fuerte'],
        correctAnswer: 'Esperar un momento en la línea',
        explanationEn: '"Hold on" is a common expression meaning to wait briefly.',
        explanationEs: '"Hold on" significa esperar un momento.'
      },
      {
        id: 'hold-mc-4',
        type: 'multiple-choice',
        question: 'What does the phrasal verb "hold back" mean?',
        options: ['Contener o frenar emociones o progreso', 'Celebrar una reunión', 'Sostener con fuerza', 'Avanzar rápidamente'],
        correctAnswer: 'Contener o frenar emociones o progreso',
        explanationEn: '"Hold back" means to restrain, suppress emotions, or impede progress.',
        explanationEs: '"Hold back" significa contener, reprimir o frenar.'
      },
      {
        id: 'hold-mc-5',
        type: 'multiple-choice',
        question: 'What is the Spanish translation of the verb "hold"?',
        options: ['Sostener / Celebrar (evento) / Contener', 'Traer / Aportar', 'Escribir / Redactar', 'Permitir / Tolerar'],
        correctAnswer: 'Sostener / Celebrar (evento) / Contener',
        explanationEn: '"Hold" translates to "sostener", "celebrar/llevar a cabo" o "retener".',
        explanationEs: '"Hold" traduce sostener, celebrar (eventos) o contener.'
      },
      {
        id: 'hold-mc-6',
        type: 'multiple-choice',
        question: 'She ___ a master’s degree in applied linguistics from Cambridge.',
        options: ['holds', 'hold', 'held', 'holding'],
        correctAnswer: 'holds',
        explanationEn: 'Academic collocation: "holds a degree" (posee un título). Third-person "holds".',
        explanationEs: 'Colocación académica: "holds a degree" (posee un título).'
      },
      {
        id: 'hold-mc-7',
        type: 'multiple-choice',
        question: 'Please ___ the door open for the professor carrying books.',
        options: ['hold', 'held', 'holds', 'holding'],
        correctAnswer: 'hold',
        explanationEn: 'Imperative uses base verb "hold the door open".',
        explanationEs: 'Imperativo: "hold the door open" (mantén la puerta abierta).'
      },
      {
        id: 'hold-mc-8',
        type: 'multiple-choice',
        question: 'The committee ___ an emergency meeting to address the safety protocol.',
        options: ['held', 'hold', 'holds', 'holding'],
        correctAnswer: 'held',
        explanationEn: 'Past simple event: "The committee held an emergency meeting".',
        explanationEs: 'Evento en pasado simple: "held a meeting" (celebró una reunión).'
      },
      {
        id: 'hold-mc-9',
        type: 'multiple-choice',
        question: 'He could not ___ back his tears of joy during the graduation ceremony.',
        options: ['hold', 'held', 'holds', 'holding'],
        correctAnswer: 'hold',
        explanationEn: 'Modal phrase: could not + base form "hold back tears".',
        explanationEs: 'Modal con phrasal verb: "could not hold back tears".'
      },
      {
        id: 'hold-mc-10',
        type: 'multiple-choice',
        question: 'This auditorium can ___ up to five hundred participants.',
        options: ['hold', 'held', 'holds', 'holding'],
        correctAnswer: 'hold',
        explanationEn: 'Capacity meaning: modal "can hold up to" (puede albergar/contener).',
        explanationEs: 'Capacidad de aforo: "can hold up to 500 participants".'
      },
      // 10 Sentence Builders
      {
        id: 'hold-sb-1',
        type: 'sentence-builder',
        spanishPrompt: 'La conferencia se llevará a cabo en el auditorio principal.',
        correctSentence: 'The conference will be held in the main auditorium.',
        tokens: ['The', 'conference', 'will', 'be', 'held', 'in', 'the', 'main', 'auditorium.'],
        explanationEn: 'Passive voice with participle "held": will be held in + location.',
        explanationEs: 'Voz pasiva para eventos: "The conference will be held in...".'
      },
      {
        id: 'hold-sb-2',
        type: 'sentence-builder',
        spanishPrompt: 'Espera un momento por favor mientras busco tu expediente.',
        correctSentence: 'Hold on a moment please while I look for your file.',
        tokens: ['Hold', 'on', 'a', 'moment', 'please', 'while', 'I', 'look', 'for', 'your', 'file.'],
        explanationEn: 'Telephone/waiting idiom: Hold on a moment please + time clause.',
        explanationEs: 'Expresión para pedir espera: "Hold on a moment please...".'
      },
      {
        id: 'hold-sb-3',
        type: 'sentence-builder',
        spanishPrompt: 'El comité celebró una reunión extraordinaria ayer.',
        correctSentence: 'The committee held an extraordinary meeting yesterday.',
        tokens: ['The', 'committee', 'held', 'an', 'extraordinary', 'meeting', 'yesterday.'],
        explanationEn: 'Past simple "held a meeting" + time adverb.',
        explanationEs: 'Pasado simple: "held a meeting yesterday".'
      },
      {
        id: 'hold-sb-4',
        type: 'sentence-builder',
        spanishPrompt: 'Ella posee un doctorado en ingeniería ambiental.',
        correctSentence: 'She holds a doctorate in environmental engineering.',
        tokens: ['She', 'holds', 'a', 'doctorate', 'in', 'environmental', 'engineering.'],
        explanationEn: 'Academic collocation: holds a doctorate in + field.',
        explanationEs: 'Colocación académica: "holds a doctorate in...".'
      },
      {
        id: 'hold-sb-5',
        type: 'sentence-builder',
        spanishPrompt: 'No dejes que el miedo te frene de alcanzar tus sueños.',
        correctSentence: 'Do not let fear hold you back from achieving your dreams.',
        tokens: ['Do', 'not', 'let', 'fear', 'hold', 'you', 'back', 'from', 'achieving', 'your', 'dreams.'],
        explanationEn: 'Phrasal verb: hold you back from + gerund (achieving).',
        explanationEs: 'Phrasal verb: "hold you back from achieving your dreams".'
      },
      {
        id: 'hold-sb-6',
        type: 'sentence-builder',
        spanishPrompt: 'Por favor sostén la puerta abierta para los demás.',
        correctSentence: 'Please hold the door open for the others.',
        tokens: ['Please', 'hold', 'the', 'door', 'open', 'for', 'the', 'others.'],
        explanationEn: 'Polite imperative: Please hold + object + adjective (open).',
        explanationEs: 'Imperativo cortés: "Please hold the door open...".'
      },
      {
        id: 'hold-sb-7',
        type: 'sentence-builder',
        spanishPrompt: 'El nuevo estadio puede albergar a sesenta mil espectadores.',
        correctSentence: 'The new stadium can hold sixty thousand spectators.',
        tokens: ['The', 'new', 'stadium', 'can', 'hold', 'sixty', 'thousand', 'spectators.'],
        explanationEn: 'Capacity sense: modal can hold + number + noun.',
        explanationEs: 'Capacidad de aforo: "can hold sixty thousand spectators".'
      },
      {
        id: 'hold-sb-8',
        type: 'sentence-builder',
        spanishPrompt: 'Ella sostuvo el trofeo con mucho orgullo y alegría.',
        correctSentence: 'She held the trophy with great pride and joy.',
        tokens: ['She', 'held', 'the', 'trophy', 'with', 'great', 'pride', 'and', 'joy.'],
        explanationEn: 'Past simple physical holding: "held the trophy with pride".',
        explanationEs: 'Pasado simple físico: "held the trophy with pride and joy".'
      },
      {
        id: 'hold-sb-9',
        type: 'sentence-builder',
        spanishPrompt: 'Debemos mantenernos firmes en nuestras convicciones éticas.',
        correctSentence: 'We must hold firm to our ethical convictions.',
        tokens: ['We', 'must', 'hold', 'firm', 'to', 'our', 'ethical', 'convictions.'],
        explanationEn: 'Idiom: hold firm to + noun phrase.',
        explanationEs: 'Expresión idiomática: "hold firm to our convictions".'
      },
      {
        id: 'hold-sb-10',
        type: 'sentence-builder',
        spanishPrompt: '¿Quién tiene la responsabilidad de organizar el evento?',
        correctSentence: 'Who holds the responsibility of organizing the event?',
        tokens: ['Who', 'holds', 'the', 'responsibility', 'of', 'organizing', 'the', 'event?'],
        explanationEn: 'Collocation: holds the responsibility of + gerund.',
        explanationEs: 'Colocación: "holds the responsibility of organizing...".'
      }
    ]
  },

  // 45. BRING
  {
    verbId: 45,
    questions: [
      {
        id: 'bring-mc-1',
        type: 'multiple-choice',
        question: 'Please remember to ___ your official photo ID to the examination center.',
        options: ['bring', 'brings', 'brought', 'bringing'],
        correctAnswer: 'bring',
        explanationEn: 'Infinitive after "remember to": base form "bring".',
        explanationEs: 'Infinitivo tras "remember to": forma base "bring".'
      },
      {
        id: 'bring-mc-2',
        type: 'multiple-choice',
        question: 'What is the past simple and past participle of the irregular verb "bring"?',
        options: ['brought', 'brang', 'bringed', 'broughten'],
        correctAnswer: 'brought',
        explanationEn: 'The irregular verb "bring" has past and participle form "brought" /brɔːt/.',
        explanationEs: 'El pasado y participio de "bring" es "brought".'
      },
      {
        id: 'bring-mc-3',
        type: 'multiple-choice',
        question: 'What does the phrasal verb "bring about" mean?',
        options: ['Causar o provocar un cambio', 'Traer comida a la mesa', 'Cuidar y educar a un niño', 'Devolver un libro'],
        correctAnswer: 'Causar o provocar un cambio',
        explanationEn: '"Bring about" means to cause something to happen (e.g., bring about positive change).',
        explanationEs: '"Bring about" significa causar, provocar u originar un cambio.'
      },
      {
        id: 'bring-mc-4',
        type: 'multiple-choice',
        question: 'What does the phrasal verb "bring up" mean in a conversation or meeting?',
        options: ['Mencionar o introducir un tema', 'Vomitar', 'Subir escaleras', 'Traer regalos'],
        correctAnswer: 'Mencionar o introducir un tema',
        explanationEn: '"Bring up" means to mention or introduce a topic for discussion.',
        explanationEs: '"Bring up" significa mencionar o poner sobre la mesa un tema.'
      },
      {
        id: 'bring-mc-5',
        type: 'multiple-choice',
        question: 'What is the Spanish translation of the verb "bring"?',
        options: ['Traer / Aportar / Originar', 'Llevar / Tomar', 'Sentar / Ubicar', 'Escribir / Anotar'],
        correctAnswer: 'Traer / Aportar / Originar',
        explanationEn: '"Bring" translates to "traer" (toward the speaker) or "aportar".',
        explanationEs: '"Bring" traduce traer o aportar.'
      },
      {
        id: 'bring-mc-6',
        type: 'multiple-choice',
        question: 'Technological innovations have ___ about profound changes in education.',
        options: ['brought', 'bring', 'brings', 'bringing'],
        correctAnswer: 'brought',
        explanationEn: 'Present perfect phrasal: "have brought about profound changes".',
        explanationEs: 'Presente perfecto con phrasal verb: "have brought about".'
      },
      {
        id: 'bring-mc-7',
        type: 'multiple-choice',
        question: 'She ___ up an insightful question during the plenary debate.',
        options: ['brought', 'bring', 'brings', 'bringing'],
        correctAnswer: 'brought',
        explanationEn: 'Past simple phrasal: "brought up a question" (mencionó una pregunta).',
        explanationEs: 'Phrasal verb en pasado: "brought up a question".'
      },
      {
        id: 'bring-mc-8',
        type: 'multiple-choice',
        question: 'He was ___ up by his grandparents in a small coastal town.',
        options: ['brought', 'bring', 'brings', 'bringing'],
        correctAnswer: 'brought',
        explanationEn: 'Passive voice for upbringing: "was brought up" (fue criado).',
        explanationEs: 'Voz pasiva para crianza: "was brought up" (fue criado).'
      },
      {
        id: 'bring-mc-9',
        type: 'multiple-choice',
        question: 'International student diversity ___ rich cultural perspectives to our campus.',
        options: ['brings', 'bring', 'brought', 'bringing'],
        correctAnswer: 'brings',
        explanationEn: 'Singular subject "diversity" takes "brings" in present simple.',
        explanationEs: 'Sujeto singular "diversity" concuerda con "brings".'
      },
      {
        id: 'bring-mc-10',
        type: 'multiple-choice',
        question: 'Don’t forget to ___ your laptop charger tomorrow.',
        options: ['bring', 'brought', 'brings', 'bringing'],
        correctAnswer: 'bring',
        explanationEn: 'Infinitive after "Don’t forget to": base form "bring".',
        explanationEs: 'Infinitivo tras "forget to": forma base "bring".'
      },
      // 10 Sentence Builders
      {
        id: 'bring-sb-1',
        type: 'sentence-builder',
        spanishPrompt: 'Por favor trae tu identificación oficial al examen.',
        correctSentence: 'Please bring your official identification to the exam.',
        tokens: ['Please', 'bring', 'your', 'official', 'identification', 'to', 'the', 'exam.'],
        explanationEn: 'Polite imperative: Please bring + object + to the exam.',
        explanationEs: 'Imperativo cortés: "Please bring your identification to the exam".'
      },
      {
        id: 'bring-sb-2',
        type: 'sentence-builder',
        spanishPrompt: 'La nueva política provocó cambios muy positivos.',
        correctSentence: 'The new policy brought about very positive changes.',
        tokens: ['The', 'new', 'policy', 'brought', 'about', 'very', 'positive', 'changes.'],
        explanationEn: 'Phrasal verb in past: "brought about changes" (provocó cambios).',
        explanationEs: 'Phrasal verb en pasado: "brought about positive changes".'
      },
      {
        id: 'bring-sb-3',
        type: 'sentence-builder',
        spanishPrompt: 'Ella mencionó un punto muy importante en la reunión.',
        correctSentence: 'She brought up a very important point in the meeting.',
        tokens: ['She', 'brought', 'up', 'a', 'very', 'important', 'point', 'in', 'the', 'meeting.'],
        explanationEn: 'Phrasal verb: "brought up a point" (mencionó un punto).',
        explanationEs: 'Phrasal verb en pasado: "brought up an important point".'
      },
      {
        id: 'bring-sb-4',
        type: 'sentence-builder',
        spanishPrompt: 'Él fue criado en un ambiente bilingüe.',
        correctSentence: 'He was brought up in a bilingual environment.',
        tokens: ['He', 'was', 'brought', 'up', 'in', 'a', 'bilingual', 'environment.'],
        explanationEn: 'Passive voice: was brought up in + noun phrase.',
        explanationEs: 'Voz pasiva de crianza: "was brought up in a bilingual environment".'
      },
      {
        id: 'bring-sb-5',
        type: 'sentence-builder',
        spanishPrompt: 'La educación aporta enormes beneficios a la sociedad.',
        correctSentence: 'Education brings enormous benefits to society.',
        tokens: ['Education', 'brings', 'enormous', 'benefits', 'to', 'society.'],
        explanationEn: 'Singular subject "Education" + brings + object + to society.',
        explanationEs: 'Sujeto singular abstracto: "Education brings benefits to society".'
      },
      {
        id: 'bring-sb-6',
        type: 'sentence-builder',
        spanishPrompt: 'No olvides traer tu diccionario a clase mañana.',
        correctSentence: 'Do not forget to bring your dictionary to class tomorrow.',
        tokens: ['Do', 'not', 'forget', 'to', 'bring', 'your', 'dictionary', 'to', 'class', 'tomorrow.'],
        explanationEn: 'Negative reminder: Do not forget to bring + object + location + time.',
        explanationEs: 'Recordatorio: "Do not forget to bring your dictionary...".'
      },
      {
        id: 'bring-sb-7',
        type: 'sentence-builder',
        spanishPrompt: 'Los avances médicos han traído nuevas esperanzas a los pacientes.',
        correctSentence: 'Medical advances have brought new hope to patients.',
        tokens: ['Medical', 'advances', 'have', 'brought', 'new', 'hope', 'to', 'patients.'],
        explanationEn: 'Present perfect with participle "brought": have brought.',
        explanationEs: 'Presente perfecto: "Medical advances have brought new hope...".'
      },
      {
        id: 'bring-sb-8',
        type: 'sentence-builder',
        spanishPrompt: '¿Podrías traerme una copia del artículo de investigación?',
        correctSentence: 'Could you bring me a copy of the research article?',
        tokens: ['Could', 'you', 'bring', 'me', 'a', 'copy', 'of', 'the', 'research', 'article?'],
        explanationEn: 'Polite modal request: Could you bring me + object?',
        explanationEs: 'Petición cortés: "Could you bring me a copy of...?".'
      },
      {
        id: 'bring-sb-9',
        type: 'sentence-builder',
        spanishPrompt: 'Esta experiencia sacará a relucir lo mejor de ti.',
        correctSentence: 'This experience will bring out the best in you.',
        tokens: ['This', 'experience', 'will', 'bring', 'out', 'the', 'best', 'in', 'you.'],
        explanationEn: 'Idiomatic phrasal: "bring out the best in someone".',
        explanationEs: 'Phrasal verb idiomático: "bring out the best in you".'
      },
      {
        id: 'bring-sb-10',
        type: 'sentence-builder',
        spanishPrompt: 'Cada estudiante trajo un proyecto único e innovador.',
        correctSentence: 'Each student brought a unique and innovative project.',
        tokens: ['Each', 'student', 'brought', 'a', 'unique', 'and', 'innovative', 'project.'],
        explanationEn: 'Past simple: Each student brought + coordinate adjectives + noun.',
        explanationEs: 'Pasado simple: "Each student brought a unique project".'
      }
    ]
  },

  // 46. HAPPEN
  {
    verbId: 46,
    questions: [
      {
        id: 'happen-mc-1',
        type: 'multiple-choice',
        question: 'Accidents often ___ when drivers are distracted by mobile phones.',
        options: ['happen', 'happens', 'happened', 'happening'],
        correctAnswer: 'happen',
        explanationEn: 'Plural subject "Accidents" takes base form "happen" in present simple.',
        explanationEs: 'Sujeto plural concuerda con "happen" en presente simple.'
      },
      {
        id: 'happen-mc-2',
        type: 'multiple-choice',
        question: 'What is the past simple of the regular verb "happen"?',
        options: ['happened', 'happen', 'happent', 'happening'],
        correctAnswer: 'happened',
        explanationEn: '"Happen" is regular; its past form is "happened" /ˈhæpənd/.',
        explanationEs: '"Happen" es regular, su forma pasada es "happened".'
      },
      {
        id: 'happen-mc-3',
        type: 'multiple-choice',
        question: 'What does "happen to do something" mean in "I happened to see him yesterday"?',
        options: ['Ocurrir por casualidad o coincidencia', 'Suceder con frecuencia', 'Estar obligado a hacer algo', 'Tener miedo de hacer algo'],
        correctAnswer: 'Ocurrir por casualidad o coincidencia',
        explanationEn: '"Happen to + infinitive" expresses chance or coincidence (ocurrir de casualidad).',
        explanationEs: '"Happen to + infinitivo" expresa casualidad o coincidencia.'
      },
      {
        id: 'happen-mc-4',
        type: 'multiple-choice',
        question: 'What ___ at the end of the academic conference yesterday?',
        options: ['happened', 'happen', 'happens', 'happening'],
        correctAnswer: 'happened',
        explanationEn: 'Subject question in past: "What happened...?".',
        explanationEs: 'Pregunta de sujeto en pasado: "What happened...?".'
      },
      {
        id: 'happen-mc-5',
        type: 'multiple-choice',
        question: 'What is the Spanish translation of the verb "happen"?',
        options: ['Suceder / Ocurrir / Pasar', 'Escribir / Anotar', 'Proveer / Suministrar', 'Sentarse / Acomodarse'],
        correctAnswer: 'Suceder / Ocurrir / Pasar',
        explanationEn: '"Happen" translates to "suceder", "ocurrir" o "pasar".',
        explanationEs: '"Happen" traduce suceder, ocurrir o pasar.'
      },
      {
        id: 'happen-mc-6',
        type: 'multiple-choice',
        question: 'Whatever ___, we must remain composed and determined.',
        options: ['happens', 'happen', 'happened', 'happening'],
        correctAnswer: 'happens',
        explanationEn: 'Conditional clause with "Whatever": singular agreement "Whatever happens".',
        explanationEs: 'Cláusula con "Whatever" concuerda en tercera persona: "Whatever happens".'
      },
      {
        id: 'happen-mc-7',
        type: 'multiple-choice',
        question: 'Can you explain what is ___ in this chemical reaction?',
        options: ['happening', 'happen', 'happened', 'happens'],
        correctAnswer: 'happening',
        explanationEn: 'Present continuous: what is + happening.',
        explanationEs: 'Presente continuo: "what is happening".'
      },
      {
        id: 'happen-mc-8',
        type: 'multiple-choice',
        question: 'This unfortunate error will not ___ again under the new protocol.',
        options: ['happen', 'happens', 'happened', 'happening'],
        correctAnswer: 'happen',
        explanationEn: 'Future negative: will not + base form "happen".',
        explanationEs: 'Futuro negativo con la forma base "happen".'
      },
      {
        id: 'happen-mc-9',
        type: 'multiple-choice',
        question: 'If you ___ to find my notebook, please leave it at the front desk.',
        options: ['happen', 'happened', 'happens', 'happening'],
        correctAnswer: 'happen',
        explanationEn: 'Polite conditional: "If you happen to find..." (Si por casualidad encuentras...).',
        explanationEs: 'Condicional cortés: "If you happen to find...".'
      },
      {
        id: 'happen-mc-10',
        type: 'multiple-choice',
        question: 'Great scientific discoveries rarely ___ overnight.',
        options: ['happen', 'happens', 'happened', 'happening'],
        correctAnswer: 'happen',
        explanationEn: 'Plural subject "Great discoveries" + negative adverb "rarely" + base verb "happen".',
        explanationEs: 'Sujeto plural con adverbio: "discoveries rarely happen overnight".'
      },
      // 10 Sentence Builders
      {
        id: 'happen-sb-1',
        type: 'sentence-builder',
        spanishPrompt: '¿Qué sucedió durante la reunión de profesores?',
        correctSentence: 'What happened during the teachers’ meeting yesterday?',
        tokens: ['What', 'happened', 'during', 'the', 'teachers’', 'meeting', 'yesterday?'],
        explanationEn: 'Subject question in past: What happened during + event + time?',
        explanationEs: 'Pregunta en pasado: "What happened during the meeting...?".'
      },
      {
        id: 'happen-sb-2',
        type: 'sentence-builder',
        spanishPrompt: 'Pase lo que pase, debemos mantener la calma.',
        correctSentence: 'Whatever happens we must stay calm.',
        tokens: ['Whatever', 'happens', 'we', 'must', 'stay', 'calm.'],
        explanationEn: 'Idiom: "Whatever happens" + modal clause.',
        explanationEs: 'Expresión idiomática: "Whatever happens we must stay calm".'
      },
      {
        id: 'happen-sb-3',
        type: 'sentence-builder',
        spanishPrompt: 'Los cambios significativos no ocurren de la noche a la mañana.',
        correctSentence: 'Significant changes do not happen overnight.',
        tokens: ['Significant', 'changes', 'do', 'not', 'happen', 'overnight.'],
        explanationEn: 'Negative present: do not happen overnight (idiom).',
        explanationEs: 'Expresión: "do not happen overnight" (no ocurren de la noche a la mañana).'
      },
      {
        id: 'happen-sb-4',
        type: 'sentence-builder',
        spanishPrompt: '¿Qué está sucediendo en el laboratorio en este momento?',
        correctSentence: 'What is happening in the laboratory right now?',
        tokens: ['What', 'is', 'happening', 'in', 'the', 'laboratory', 'right', 'now?'],
        explanationEn: 'Present continuous question: What is happening in + location + time?',
        explanationEs: 'Pregunta en presente continuo: "What is happening in the laboratory...?".'
      },
      {
        id: 'happen-sb-5',
        type: 'sentence-builder',
        spanishPrompt: 'Si por casualidad ves al profesor, avísale por favor.',
        correctSentence: 'If you happen to see the professor please notify him.',
        tokens: ['If', 'you', 'happen', 'to', 'see', 'the', 'professor', 'please', 'notify', 'him.'],
        explanationEn: 'Conditional coincidence: "If you happen to see...".',
        explanationEs: 'Condicional de coincidencia: "If you happen to see the professor...".'
      },
      {
        id: 'happen-sb-6',
        type: 'sentence-builder',
        spanishPrompt: 'Nadie sabe con certeza lo que sucederá en el futuro.',
        correctSentence: 'Nobody knows for sure what will happen in the future.',
        tokens: ['Nobody', 'knows', 'for', 'sure', 'what', 'will', 'happen', 'in', 'the', 'future.'],
        explanationEn: 'Subject clause: what will happen in the future.',
        explanationEs: 'Cláusula sustantiva: "what will happen in the future".'
      },
      {
        id: 'happen-sb-7',
        type: 'sentence-builder',
        spanishPrompt: 'Este error no volverá a ocurrir nunca más.',
        correctSentence: 'This mistake will not happen ever again.',
        tokens: ['This', 'mistake', 'will', 'not', 'happen', 'ever', 'again.'],
        explanationEn: 'Future negative with emphatic time: will not happen ever again.',
        explanationEs: 'Futuro negativo enfático: "will not happen ever again".'
      },
      {
        id: 'happen-sb-8',
        type: 'sentence-builder',
        spanishPrompt: 'El accidente ocurrió debido al mal tiempo y la niebla.',
        correctSentence: 'The accident happened due to bad weather and fog.',
        tokens: ['The', 'accident', 'happened', 'due', 'to', 'bad', 'weather', 'and', 'fog.'],
        explanationEn: 'Past simple "happened" + connector of cause "due to".',
        explanationEs: 'Pasado simple con causa: "happened due to bad weather".'
      },
      {
        id: 'happen-sb-9',
        type: 'sentence-builder',
        spanishPrompt: 'Las mejores cosas de la vida suceden inesperadamente.',
        correctSentence: 'The best things in life happen unexpectedly.',
        tokens: ['The', 'best', 'things', 'in', 'life', 'happen', 'unexpectedly.'],
        explanationEn: 'Plural subject "The best things" + happen + adverb.',
        explanationEs: 'Sujeto plural con adverbio de modo: "happen unexpectedly".'
      },
      {
        id: 'happen-sb-10',
        type: 'sentence-builder',
        spanishPrompt: '¿Cómo ocurrió este asombroso descubrimiento científico?',
        correctSentence: 'How did this amazing scientific discovery happen?',
        tokens: ['How', 'did', 'this', 'amazing', 'scientific', 'discovery', 'happen?'],
        explanationEn: 'Past Wh-question: How did + subject + happen?',
        explanationEs: 'Pregunta en pasado: "How did this discovery happen?".'
      }
    ]
  },

  // 47. MUST
  {
    verbId: 47,
    questions: [
      {
        id: 'must-mc-1',
        type: 'multiple-choice',
        question: 'All test takers ___ present a valid passport before entering the test room.',
        options: ['must', 'musts', 'musted', 'musting'],
        correctAnswer: 'must',
        explanationEn: 'Modal auxiliary "must" has no "-s", "-ed", or "-ing" forms.',
        explanationEs: 'El modal "must" es invariable; no lleva "-s", "-ed" ni "-ing".'
      },
      {
        id: 'must-mc-2',
        type: 'multiple-choice',
        question: 'What does "must not" (mustn’t) express in English grammar?',
        options: ['Prohibición estricta', 'Falta de obligación o necesidad', 'Habilidad pasada', 'Recomendación suave'],
        correctAnswer: 'Prohibición estricta',
        explanationEn: '"Must not" expresses strict prohibition (it is forbidden).',
        explanationEs: '"Must not" expresa prohibición estricta (está prohibido).'
      },
      {
        id: 'must-mc-3',
        type: 'multiple-choice',
        question: 'What does "must" express in "He has worked 14 hours today; he must be exhausted"?',
        options: ['Deducción lógica o certeza casi total', 'Obligación impuesta', 'Permiso formal', 'Habilidad adquirida'],
        correctAnswer: 'Deducción lógica o certeza casi total',
        explanationEn: '"Must" expresses high logical deduction/probability based on evidence.',
        explanationEs: '"Must" expresa deducción lógica con alto grado de certeza.'
      },
      {
        id: 'must-mc-4',
        type: 'multiple-choice',
        question: 'How is the past obligation of "must" expressed in English?',
        options: ['had to', 'musted', 'have to', 'must have to'],
        correctAnswer: 'had to',
        explanationEn: 'Because "must" lacks a past form for obligation, "had to" is used (e.g., We had to leave).',
        explanationEs: 'Para expresar obligación en pasado se utiliza "had to".'
      },
      {
        id: 'must-mc-5',
        type: 'multiple-choice',
        question: 'What is the Spanish translation of the modal verb "must"?',
        options: ['Deber / Tener que (obligación / deducción)', 'Poder / Saber', 'Querer / Desear', 'Soler / Acostumbrar'],
        correctAnswer: 'Deber / Tener que (obligación / deducción)',
        explanationEn: '"Must" translates to "deber" o "tener que" (obligación o certeza lógica).',
        explanationEs: '"Must" traduce deber o tener que.'
      },
      {
        id: 'must-mc-6',
        type: 'multiple-choice',
        question: 'You ___ not use a mobile phone during the official exam.',
        options: ['must', 'musts', 'musted', 'must to'],
        correctAnswer: 'must',
        explanationEn: 'Prohibition: "must not use" (bare infinitive without "to").',
        explanationEs: 'Prohibición: "must not use" (sin "to").'
      },
      {
        id: 'must-mc-7',
        type: 'multiple-choice',
        question: 'Look at the heavy snow outside; it ___ be freezing cold.',
        options: ['must', 'can', 'should to', 'musts'],
        correctAnswer: 'must',
        explanationEn: 'Logical deduction: "it must be freezing".',
        explanationEs: 'Deducción lógica evidente: "it must be freezing".'
      },
      {
        id: 'must-mc-8',
        type: 'multiple-choice',
        question: 'Students ___ submit their assignments before the midnight deadline.',
        options: ['must', 'musts', 'must to', 'musting'],
        correctAnswer: 'must',
        explanationEn: 'Obligation: modal "must" + bare infinitive "submit".',
        explanationEs: 'Obligación: "must submit" (verbo base sin "to").'
      },
      {
        id: 'must-mc-9',
        type: 'multiple-choice',
        question: 'She ___ have left her umbrella at the office; it is not in her bag.',
        options: ['must', 'must to', 'had to', 'should to'],
        correctAnswer: 'must',
        explanationEn: 'Past logical deduction: must + have + past participle (must have left).',
        explanationEs: 'Deducción lógica de pasado: "must have left" (debe haber olvidado).'
      },
      {
        id: 'must-mc-10',
        type: 'multiple-choice',
        question: 'We ___ remember that consistent effort is essential for high scores.',
        options: ['must', 'musts', 'must to', 'musting'],
        correctAnswer: 'must',
        explanationEn: 'Self-reminder obligation: "We must remember that...".',
        explanationEs: 'Obligación interna: "We must remember that...".'
      },
      // 10 Sentence Builders
      {
        id: 'must-sb-1',
        type: 'sentence-builder',
        spanishPrompt: 'Debes presentar tu pasaporte antes del examen.',
        correctSentence: 'You must present your passport before the exam.',
        tokens: ['You', 'must', 'present', 'your', 'passport', 'before', 'the', 'exam.'],
        explanationEn: 'Modal obligation: must + bare verb (present) + object + prepositional time.',
        explanationEs: 'Obligación formal: "You must present your passport...".'
      },
      {
        id: 'must-sb-2',
        type: 'sentence-builder',
        spanishPrompt: 'No debes usar tu teléfono celular durante la prueba.',
        correctSentence: 'You must not use your mobile phone during the test.',
        tokens: ['You', 'must', 'not', 'use', 'your', 'mobile', 'phone', 'during', 'the', 'test.'],
        explanationEn: 'Strict prohibition: must not + bare verb + object + during.',
        explanationEs: 'Prohibición estricta: "You must not use your phone...".'
      },
      {
        id: 'must-sb-3',
        type: 'sentence-builder',
        spanishPrompt: 'Ella ha estudiado todo el día; debe estar muy cansada.',
        correctSentence: 'She has studied all day she must be very tired.',
        tokens: ['She', 'has', 'studied', 'all', 'day', 'she', 'must', 'be', 'very', 'tired.'],
        explanationEn: 'Logical deduction: she must be + adjective.',
        explanationEs: 'Deducción lógica: "she must be very tired".'
      },
      {
        id: 'must-sb-4',
        type: 'sentence-builder',
        spanishPrompt: 'Los estudiantes deben entregar su ensayo antes del viernes.',
        correctSentence: 'Students must submit their essay before Friday.',
        tokens: ['Students', 'must', 'submit', 'their', 'essay', 'before', 'Friday.'],
        explanationEn: 'Modal obligation: must submit + object + deadline.',
        explanationEs: 'Obligación académica: "Students must submit their essay...".'
      },
      {
        id: 'must-sb-5',
        type: 'sentence-builder',
        spanishPrompt: 'Debemos proteger el medio ambiente para las futuras generaciones.',
        correctSentence: 'We must protect the environment for future generations.',
        tokens: ['We', 'must', 'protect', 'the', 'environment', 'for', 'future', 'generations.'],
        explanationEn: 'Ethical obligation: must protect + object + beneficiary.',
        explanationEs: 'Obligación moral formal: "We must protect the environment...".'
      },
      {
        id: 'must-sb-6',
        type: 'sentence-builder',
        spanishPrompt: 'Él debe haber olvidado las llaves en su oficina.',
        correctSentence: 'He must have left the keys in his office.',
        tokens: ['He', 'must', 'have', 'left', 'the', 'keys', 'in', 'his', 'office.'],
        explanationEn: 'Past logical deduction: must have + past participle (left).',
        explanationEs: 'Deducción lógica en pasado: "must have left the keys".'
      },
      {
        id: 'must-sb-7',
        type: 'sentence-builder',
        spanishPrompt: 'Tuvimos que reprogramar la conferencia debido a la lluvia.',
        correctSentence: 'We had to reschedule the conference due to heavy rain.',
        tokens: ['We', 'had', 'to', 'reschedule', 'the', 'conference', 'due', 'to', 'heavy', 'rain.'],
        explanationEn: 'Past obligation equivalent for "must": had to + verb.',
        explanationEs: 'Obligación en pasado: "We had to reschedule...".'
      },
      {
        id: 'must-sb-8',
        type: 'sentence-builder',
        spanishPrompt: 'Todos los candidatos deben seguir las instrucciones cuidadosamente.',
        correctSentence: 'All candidates must follow the instructions carefully.',
        tokens: ['All', 'candidates', 'must', 'follow', 'the', 'instructions', 'carefully.'],
        explanationEn: 'Formal exam rule: must follow + object + adverb.',
        explanationEs: 'Regla de examen: "must follow the instructions carefully".'
      },
      {
        id: 'must-sb-9',
        type: 'sentence-builder',
        spanishPrompt: 'Debes tener mucho cuidado al manipular estos químicos.',
        correctSentence: 'You must be very careful when handling these chemicals.',
        tokens: ['You', 'must', 'be', 'very', 'careful', 'when', 'handling', 'these', 'chemicals.'],
        explanationEn: 'Safety rule: must be very careful when + gerund.',
        explanationEs: 'Norma de seguridad: "must be very careful when handling...".'
      },
      {
        id: 'must-sb-10',
        type: 'sentence-builder',
        spanishPrompt: 'Debemos recordar que la práctica constante garantiza el éxito.',
        correctSentence: 'We must remember that consistent practice guarantees success.',
        tokens: ['We', 'must', 'remember', 'that', 'consistent', 'practice', 'guarantees', 'success.'],
        explanationEn: 'Academic principle: must remember that + clause.',
        explanationEs: 'Principio formativo: "We must remember that consistent practice guarantees success".'
      }
    ]
  },

  // 48. WRITE
  {
    verbId: 48,
    questions: [
      {
        id: 'write-mc-1',
        type: 'multiple-choice',
        question: 'In IELTS Writing Task 2, candidates must ___ a well-structured discursive essay.',
        options: ['write', 'writes', 'wrote', 'written'],
        correctAnswer: 'write',
        explanationEn: 'Modal "must" is followed by the base form "write".',
        explanationEs: 'El modal "must" va acompañado de la forma base "write".'
      },
      {
        id: 'write-mc-2',
        type: 'multiple-choice',
        question: 'What is the past simple of the irregular verb "write"?',
        options: ['wrote', 'written', 'writed', 'writes'],
        correctAnswer: 'wrote',
        explanationEn: 'The past simple of "write" is "wrote" /roʊt/.',
        explanationEs: 'El pasado simple de "write" es "wrote".'
      },
      {
        id: 'write-mc-3',
        type: 'multiple-choice',
        question: 'What is the past participle of the irregular verb "write"?',
        options: ['written', 'wrote', 'writed', 'writing'],
        correctAnswer: 'written',
        explanationEn: 'The past participle of "write" is "written" /ˈrɪtn/ (e.g., has written).',
        explanationEs: 'El participio pasado de "write" es "written".'
      },
      {
        id: 'write-mc-4',
        type: 'multiple-choice',
        question: 'What does the phrasal verb "write down" mean?',
        options: ['Anotar o registrar información en papel o digital', 'Escribir una carta larga', 'Redactar un libro', 'Borrar un texto'],
        correctAnswer: 'Anotar o registrar información en papel o digital',
        explanationEn: '"Write down" means to record information on a piece of paper or device.',
        explanationEs: '"Write down" significa tomar nota o registrar por escrito.'
      },
      {
        id: 'write-mc-5',
        type: 'multiple-choice',
        question: 'What is the Spanish translation of the verb "write"?',
        options: ['Escribir / Redactar', 'Proveer / Facilitar', 'Sentar / Acomodar', 'Sostener / Mantener'],
        correctAnswer: 'Escribir / Redactar',
        explanationEn: '"Write" translates to "escribir" or "redactar".',
        explanationEs: '"Write" traduce escribir o redactar.'
      },
      {
        id: 'write-mc-6',
        type: 'multiple-choice',
        question: 'She ___ an outstanding thesis on renewable energy systems last year.',
        options: ['wrote', 'written', 'write', 'writes'],
        correctAnswer: 'wrote',
        explanationEn: 'Past simple action: "She wrote an outstanding thesis last year".',
        explanationEs: 'Acción en pasado simple: "wrote an outstanding thesis".'
      },
      {
        id: 'write-mc-7',
        type: 'multiple-choice',
        question: 'The academic report was ___ by a distinguished panel of climatologists.',
        options: ['written', 'wrote', 'write', 'writes'],
        correctAnswer: 'written',
        explanationEn: 'Passive voice: was + past participle "written by".',
        explanationEs: 'Voz pasiva: "was written by".'
      },
      {
        id: 'write-mc-8',
        type: 'multiple-choice',
        question: 'Please ___ down the instructions so that you do not forget them.',
        options: ['write', 'wrote', 'written', 'writing'],
        correctAnswer: 'write',
        explanationEn: 'Imperative uses base verb "write down".',
        explanationEs: 'Imperativo: "write down the instructions".'
      },
      {
        id: 'write-mc-9',
        type: 'multiple-choice',
        question: 'He has ___ numerous articles for prestigious international journals.',
        options: ['written', 'wrote', 'write', 'writes'],
        correctAnswer: 'written',
        explanationEn: 'Present perfect: has + past participle "written".',
        explanationEs: 'Presente perfecto con participio irregular "written".'
      },
      {
        id: 'write-mc-10',
        type: 'multiple-choice',
        question: 'Candidates are required to ___ at least 250 words for Task 2.',
        options: ['write', 'writes', 'wrote', 'written'],
        correctAnswer: 'write',
        explanationEn: 'Infinitive after "required to": base form "write".',
        explanationEs: 'Infinitivo tras "required to": forma base "write".'
      },
      // 10 Sentence Builders
      {
        id: 'write-sb-1',
        type: 'sentence-builder',
        spanishPrompt: 'Debes escribir al menos doscientas cincuenta palabras.',
        correctSentence: 'You must write at least two hundred and fifty words.',
        tokens: ['You', 'must', 'write', 'at', 'least', 'two', 'hundred', 'and', 'fifty', 'words.'],
        explanationEn: 'IELTS instruction: must write at least + number of words.',
        explanationEs: 'Instrucción clásica de IELTS: "must write at least 250 words".'
      },
      {
        id: 'write-sb-2',
        type: 'sentence-builder',
        spanishPrompt: 'Ella escribió un excelente ensayo sobre la tecnología.',
        correctSentence: 'She wrote an excellent essay on technology.',
        tokens: ['She', 'wrote', 'an', 'excellent', 'essay', 'on', 'technology.'],
        explanationEn: 'Past simple "wrote" + noun phrase + topic preposition "on".',
        explanationEs: 'Pasado simple: "She wrote an excellent essay on...".'
      },
      {
        id: 'write-sb-3',
        type: 'sentence-builder',
        spanishPrompt: 'Anota tu nombre y tu correo electrónico aquí por favor.',
        correctSentence: 'Write down your name and email address here please.',
        tokens: ['Write', 'down', 'your', 'name', 'and', 'email', 'address', 'here', 'please.'],
        explanationEn: 'Phrasal imperative: Write down + object + location.',
        explanationEs: 'Imperativo con phrasal verb: "Write down your name...".'
      },
      {
        id: 'write-sb-4',
        type: 'sentence-builder',
        spanishPrompt: 'El libro fue escrito por un autor muy famoso.',
        correctSentence: 'The book was written by a very famous author.',
        tokens: ['The', 'book', 'was', 'written', 'by', 'a', 'very', 'famous', 'author.'],
        explanationEn: 'Passive voice: was written by + agent.',
        explanationEs: 'Voz pasiva: "was written by a famous author".'
      },
      {
        id: 'write-sb-5',
        type: 'sentence-builder',
        spanishPrompt: 'Él ha escrito tres artículos de investigación este año.',
        correctSentence: 'He has written three scientific research articles this year.',
        tokens: ['He', 'has', 'written', 'three', 'scientific', 'research', 'articles', 'this', 'year.'],
        explanationEn: 'Present perfect with participle "written": has written.',
        explanationEs: 'Presente perfecto con participio irregular "written".'
      },
      {
        id: 'write-sb-6',
        type: 'sentence-builder',
        spanishPrompt: 'Escribo en mi diario personal todos los días.',
        correctSentence: 'I write in my personal journal every single day.',
        tokens: ['I', 'write', 'in', 'my', 'personal', 'journal', 'every', 'single', 'day.'],
        explanationEn: 'Habitual present: write in + journal + frequency.',
        explanationEs: 'Hábito en presente simple: "I write in my journal every day".'
      },
      {
        id: 'write-sb-7',
        type: 'sentence-builder',
        spanishPrompt: 'Ella le escribió una carta formal de recomendación académica.',
        correctSentence: 'She wrote him a formal letter of academic recommendation.',
        tokens: ['She', 'wrote', 'him', 'a', 'formal', 'letter', 'of', 'academic', 'recommendation.'],
        explanationEn: 'Ditransitive past simple: wrote + indirect object + direct object.',
        explanationEs: 'Estructura ditransitiva en pasado: "wrote him a formal letter".'
      },
      {
        id: 'write-sb-8',
        type: 'sentence-builder',
        spanishPrompt: 'Por favor escribe tus respuestas con claridad y precisión.',
        correctSentence: 'Please write your answers clearly and precisely.',
        tokens: ['Please', 'write', 'your', 'answers', 'clearly', 'and', 'precisely.'],
        explanationEn: 'Polite exam instruction with adverbs: write + object + adverbs.',
        explanationEs: 'Instrucción formal: "Please write your answers clearly and precisely".'
      },
      {
        id: 'write-sb-9',
        type: 'sentence-builder',
        spanishPrompt: 'El informe oficial está escrito en inglés británico estándar.',
        correctSentence: 'The official report is written in standard British English.',
        tokens: ['The', 'official', 'report', 'is', 'written', 'in', 'standard', 'British', 'English.'],
        explanationEn: 'Present passive: is written in + language variety.',
        explanationEs: 'Voz pasiva en presente: "is written in standard English".'
      },
      {
        id: 'write-sb-10',
        type: 'sentence-builder',
        spanishPrompt: 'Ellos están escribiendo una nueva propuesta de investigación.',
        correctSentence: 'They are writing a new collaborative research proposal.',
        tokens: ['They', 'are', 'writing', 'a', 'new', 'collaborative', 'research', 'proposal.'],
        explanationEn: 'Present continuous: are writing + noun phrase.',
        explanationEs: 'Presente continuo: "are writing a new research proposal".'
      }
    ]
  },

  // 49. PROVIDE
  {
    verbId: 49,
    questions: [
      {
        id: 'provide-mc-1',
        type: 'multiple-choice',
        question: 'Universities should ___ students with comprehensive career guidance.',
        options: ['provide', 'provides', 'provided', 'providing'],
        correctAnswer: 'provide',
        explanationEn: 'Collocation: modal "should" + base verb "provide someone with something".',
        explanationEs: 'Colocación académica: "provide someone with something".'
      },
      {
        id: 'provide-mc-2',
        type: 'multiple-choice',
        question: 'What is the past simple of the regular verb "provide"?',
        options: ['provided', 'provide', 'providen', 'providing'],
        correctAnswer: 'provided',
        explanationEn: '"Provide" is regular; its past form is "provided" /prəˈvaɪdɪd/.',
        explanationEs: '"Provide" es regular, su forma pasada es "provided".'
      },
      {
        id: 'provide-mc-3',
        type: 'multiple-choice',
        question: 'Which preposition is used in "The government provides subsidies ___ renewable energy"?',
        options: ['for', 'with', 'at', 'into'],
        correctAnswer: 'for',
        explanationEn: 'Pattern: provide something FOR someone/purpose (or provide someone WITH something).',
        explanationEs: 'Patrón: provide [cosa] for [destinatario/propósito].'
      },
      {
        id: 'provide-mc-4',
        type: 'multiple-choice',
        question: 'What does the conjunction "provided that" mean in academic English?',
        options: ['Siempre y cuando / Con la condición de que', 'Proporcionado por una empresa', 'Debido a que', 'A pesar de que'],
        correctAnswer: 'Siempre y cuando / Con la condición de que',
        explanationEn: '"Provided that" (or providing that) is a formal conditional meaning "only if" or "on condition that".',
        explanationEs: '"Provided that" es un conector condicional formal que significa "siempre y cuando".'
      },
      {
        id: 'provide-mc-5',
        type: 'multiple-choice',
        question: 'What is the Spanish translation of the verb "provide"?',
        options: ['Proveer / Proporcionar / Suministrar', 'Sentarse / Posicionarse', 'Dejar / Salir', 'Tomar / Agarrar'],
        correctAnswer: 'Proveer / Proporcionar / Suministrar',
        explanationEn: '"Provide" translates to "proveer", "proporcionar" o "suministrar".',
        explanationEs: '"Provide" traduce proveer o proporcionar.'
      },
      {
        id: 'provide-mc-6',
        type: 'multiple-choice',
        question: 'The research paper ___ a detailed analysis of economic trends.',
        options: ['provides', 'provide', 'provided', 'providing'],
        correctAnswer: 'provides',
        explanationEn: 'Academic reporting with singular subject "The research paper provides...".',
        explanationEs: 'Redacción académica: "The research paper provides...".'
      },
      {
        id: 'provide-mc-7',
        type: 'multiple-choice',
        question: 'Financial aid was ___ to underprivileged students during the crisis.',
        options: ['provided', 'provide', 'provides', 'providing'],
        correctAnswer: 'provided',
        explanationEn: 'Passive voice: was + past participle "provided to".',
        explanationEs: 'Voz pasiva: "was provided to".'
      },
      {
        id: 'provide-mc-8',
        type: 'multiple-choice',
        question: 'You can retake the examination, ___ that you register in advance.',
        options: ['provided', 'providing', 'provide', 'provides'],
        correctAnswer: 'provided',
        explanationEn: 'Conditional connector: "provided that you register".',
        explanationEs: 'Conector condicional formal: "provided that...".'
      },
      {
        id: 'provide-mc-9',
        type: 'multiple-choice',
        question: 'The online platform ___ users with instant feedback on practice tests.',
        options: ['provides', 'provide', 'provided', 'providing'],
        correctAnswer: 'provides',
        explanationEn: 'Singular subject "The online platform" takes "provides someone with...".',
        explanationEs: 'Sujeto singular concuerda con "provides someone with".'
      },
      {
        id: 'provide-mc-10',
        type: 'multiple-choice',
        question: 'The study ___ clear evidence supporting the new medical treatment.',
        options: ['provided', 'provide', 'provides', 'providing'],
        correctAnswer: 'provided',
        explanationEn: 'Past simple academic collocation: "The study provided clear evidence".',
        explanationEs: 'Colocación académica en pasado: "provided clear evidence".'
      },
      // 10 Sentence Builders
      {
        id: 'provide-sb-1',
        type: 'sentence-builder',
        spanishPrompt: 'La universidad ofrece a los estudiantes recursos modernos.',
        correctSentence: 'The university provides students with modern resources.',
        tokens: ['The', 'university', 'provides', 'students', 'with', 'modern', 'resources.'],
        explanationEn: 'Key academic collocation: provide + someone + WITH + something.',
        explanationEs: 'Colocación académica clave: "provides students with modern resources".'
      },
      {
        id: 'provide-sb-2',
        type: 'sentence-builder',
        spanishPrompt: 'El artículo proporciona una explicación clara del problema.',
        correctSentence: 'The article provides a clear explanation of the problem.',
        tokens: ['The', 'article', 'provides', 'a', 'clear', 'explanation', 'of', 'the', 'problem.'],
        explanationEn: 'Academic reporting: The article provides + object + modifier.',
        explanationEs: 'Redacción académica: "The article provides a clear explanation...".'
      },
      {
        id: 'provide-sb-3',
        type: 'sentence-builder',
        spanishPrompt: 'Puedes aprobar el examen siempre y cuando estudies constantemente.',
        correctSentence: 'You can pass the exam provided that you study consistently.',
        tokens: ['You', 'can', 'pass', 'the', 'exam', 'provided', 'that', 'you', 'study', 'consistently.'],
        explanationEn: 'IELTS conditional connector: "provided that" (siempre y cuando).',
        explanationEs: 'Conector condicional formal para ensayos: "provided that you study consistently".'
      },
      {
        id: 'provide-sb-4',
        type: 'sentence-builder',
        spanishPrompt: 'El gobierno proporcionó ayuda financiera a las familias.',
        correctSentence: 'The government provided financial aid to families in need.',
        tokens: ['The', 'government', 'provided', 'financial', 'aid', 'to', 'families', 'in', 'need.'],
        explanationEn: 'Past simple: provided + direct object + to + recipient.',
        explanationEs: 'Pasado simple: "provided financial aid to families".'
      },
      {
        id: 'provide-sb-5',
        type: 'sentence-builder',
        spanishPrompt: 'Esta aplicación proporciona retroalimentación instantánea a los alumnos.',
        correctSentence: 'This application provides instant feedback to the learners.',
        tokens: ['This', 'application', 'provides', 'instant', 'feedback', 'to', 'the', 'learners.'],
        explanationEn: 'Third person "provides" + noun phrase + to recipient.',
        explanationEs: 'Tercera persona singular: "provides instant feedback to learners".'
      },
      {
        id: 'provide-sb-6',
        type: 'sentence-builder',
        spanishPrompt: 'Los datos proporcionan evidencia sólida para la nueva teoría.',
        correctSentence: 'The data provide strong evidence for the new theory.',
        tokens: ['The', 'data', 'provide', 'strong', 'evidence', 'for', 'the', 'new', 'theory.'],
        explanationEn: 'Academic collocation: provide strong evidence for + noun phrase.',
        explanationEs: 'Colocación formal: "provide strong evidence for...".'
      },
      {
        id: 'provide-sb-7',
        type: 'sentence-builder',
        spanishPrompt: 'Debemos proporcionar igualdad de oportunidades para todos.',
        correctSentence: 'We must provide equal opportunities for everyone in society.',
        tokens: ['We', 'must', 'provide', 'equal', 'opportunities', 'for', 'everyone', 'in', 'society.'],
        explanationEn: 'Modal "must provide" + object + for everyone.',
        explanationEs: 'Oración formal: "must provide equal opportunities for everyone".'
      },
      {
        id: 'provide-sb-8',
        type: 'sentence-builder',
        spanishPrompt: 'Se proporcionó alojamiento gratuito a los participantes internacionales.',
        correctSentence: 'Free accommodation was provided to international participants.',
        tokens: ['Free', 'accommodation', 'was', 'provided', 'to', 'international', 'participants.'],
        explanationEn: 'Passive voice: was provided to + recipient.',
        explanationEs: 'Voz pasiva formal: "was provided to international participants".'
      },
      {
        id: 'provide-sb-9',
        type: 'sentence-builder',
        spanishPrompt: 'El mentor le proporcionó valiosos consejos profesionales.',
        correctSentence: 'The mentor provided him with valuable professional advice.',
        tokens: ['The', 'mentor', 'provided', 'him', 'with', 'valuable', 'professional', 'advice.'],
        explanationEn: 'Past simple collocation: provided someone with + uncountable noun "advice".',
        explanationEs: 'Colocación en pasado: "provided him with valuable advice".'
      },
      {
        id: 'provide-sb-10',
        type: 'sentence-builder',
        spanishPrompt: 'Los bosques proveen oxígeno esencial para el planeta entero.',
        correctSentence: 'Forests provide essential oxygen for the entire planet.',
        tokens: ['Forests', 'provide', 'essential', 'oxygen', 'for', 'the', 'entire', 'planet.'],
        explanationEn: 'Plural subject "Forests" + provide + object + beneficiary.',
        explanationEs: 'Sujeto plural: "Forests provide essential oxygen...".'
      }
    ]
  },

  // 50. SIT
  {
    verbId: 50,
    questions: [
      {
        id: 'sit-mc-1',
        type: 'multiple-choice',
        question: 'In British English, to ___ an examination means to take or write an exam.',
        options: ['sit', 'sits', 'sat', 'sitting'],
        correctAnswer: 'sit',
        explanationEn: 'Academic collocation in UK/IELTS English: "sit an exam" (presentar un examen).',
        explanationEs: 'Colocación estándar en inglés británico/IELTS: "sit an exam" (presentar un examen).'
      },
      {
        id: 'sit-mc-2',
        type: 'multiple-choice',
        question: 'What is the past simple and past participle of the irregular verb "sit"?',
        options: ['sat', 'sitted', 'sits', 'sitting'],
        correctAnswer: 'sat',
        explanationEn: 'The irregular verb "sit" has the past and participle form "sat" /sæt/.',
        explanationEs: 'El pasado y participio de "sit" es "sat".'
      },
      {
        id: 'sit-mc-3',
        type: 'multiple-choice',
        question: 'What does the phrasal verb "sit down" mean?',
        options: ['Tomar asiento / Sentarse', 'Ponerse de pie', 'Salirse del aula', 'Descansar acostado'],
        correctAnswer: 'Tomar asiento / Sentarse',
        explanationEn: '"Sit down" means to take a seat.',
        explanationEs: '"Sit down" significa sentarse o tomar asiento.'
      },
      {
        id: 'sit-mc-4',
        type: 'multiple-choice',
        question: 'What does the idiom "sit on the fence" mean?',
        options: ['Permanecer neutral o indeciso sin tomar partido', 'Sentarse en un muro alto', 'Descansar después del trabajo', 'Perder una oportunidad'],
        correctAnswer: 'Permanecer neutral o indeciso sin tomar partido',
        explanationEn: '"Sit on the fence" is an idiom meaning to delay making a decision or remain neutral.',
        explanationEs: '"Sit on the fence" significa mantenerse indeciso o neutral en una disputa.'
      },
      {
        id: 'sit-mc-5',
        type: 'multiple-choice',
        question: 'What is the Spanish translation of the verb "sit"?',
        options: ['Sentarse / Presentar (examen en UK)', 'Escribir / Anotar', 'Proveer / Facilitar', 'Llevar / Traer'],
        correctAnswer: 'Sentarse / Presentar (examen en UK)',
        explanationEn: '"Sit" translates to "sentarse", "estar sentado" o "presentar un examen" (sit an exam).',
        explanationEs: '"Sit" traduce sentarse o presentar un examen (en inglés británico).'
      },
      {
        id: 'sit-mc-6',
        type: 'multiple-choice',
        question: 'More than five thousand candidates ___ the IELTS exam last weekend.',
        options: ['sat', 'sit', 'sits', 'sitting'],
        correctAnswer: 'sat',
        explanationEn: 'Past simple academic collocation: "sat the IELTS exam last weekend".',
        explanationEs: 'Colocación en pasado simple: "sat the exam" (presentaron el examen).'
      },
      {
        id: 'sit-mc-7',
        type: 'multiple-choice',
        question: 'Please ___ down quietly as the test is about to begin.',
        options: ['sit', 'sat', 'sits', 'sitting'],
        correctAnswer: 'sit',
        explanationEn: 'Imperative uses base form "sit down quietly".',
        explanationEs: 'Imperativo cortés: "Please sit down quietly".'
      },
      {
        id: 'sit-mc-8',
        type: 'multiple-choice',
        question: 'He was ___ in the front row during the distinguished lecture.',
        options: ['sitting', 'sit', 'sat', 'sits'],
        correctAnswer: 'sitting',
        explanationEn: 'Past continuous: was + sitting (double "t" in spelling).',
        explanationEs: 'Pasado continuo con ortografía duplicada: "was sitting".'
      },
      {
        id: 'sit-mc-9',
        type: 'multiple-choice',
        question: 'She ___ next to her study partner during the chemistry workshop.',
        options: ['sat', 'sit', 'sits', 'sitting'],
        correctAnswer: 'sat',
        explanationEn: 'Past simple position: "She sat next to her partner".',
        explanationEs: 'Posición en pasado simple: "sat next to".'
      },
      {
        id: 'sit-mc-10',
        type: 'multiple-choice',
        question: 'Candidates must not ___ on the fence when arguing a viewpoint in Task 2.',
        options: ['sit', 'sat', 'sits', 'sitting'],
        correctAnswer: 'sit',
        explanationEn: 'Idiom after modal: must not + base verb "sit on the fence".',
        explanationEs: 'Expresión idiomática tras modal: "must not sit on the fence".'
      },
      // 10 Sentence Builders
      {
        id: 'sit-sb-1',
        type: 'sentence-builder',
        spanishPrompt: 'Voy a presentar el examen IELTS el próximo mes.',
        correctSentence: 'I am going to sit the IELTS exam next month.',
        tokens: ['I', 'am', 'going', 'to', 'sit', 'the', 'IELTS', 'exam', 'next', 'month.'],
        explanationEn: 'British/IELTS collocation: sit the exam + future time.',
        explanationEs: 'Colocación académica británica: "sit the IELTS exam next month".'
      },
      {
        id: 'sit-sb-2',
        type: 'sentence-builder',
        spanishPrompt: 'Por favor siéntense y abran sus cuadernillos de examen.',
        correctSentence: 'Please sit down and open your exam booklets.',
        tokens: ['Please', 'sit', 'down', 'and', 'open', 'your', 'exam', 'booklets.'],
        explanationEn: 'Exam room imperative: Please sit down and open + object.',
        explanationEs: 'Instrucción de examen: "Please sit down and open your exam booklets".'
      },
      {
        id: 'sit-sb-3',
        type: 'sentence-builder',
        spanishPrompt: 'Ella se sentó en la primera fila para escuchar mejor.',
        correctSentence: 'She sat in the front row to hear better.',
        tokens: ['She', 'sat', 'in', 'the', 'front', 'row', 'to', 'hear', 'better.'],
        explanationEn: 'Past simple "sat in the front row" + purpose infinitive.',
        explanationEs: 'Pasado simple: "sat in the front row to hear better".'
      },
      {
        id: 'sit-sb-4',
        type: 'sentence-builder',
        spanishPrompt: 'Los estudiantes estaban sentados en silencio antes de la prueba.',
        correctSentence: 'The students were sitting in silence before the test.',
        tokens: ['The', 'students', 'were', 'sitting', 'in', 'silence', 'before', 'the', 'test.'],
        explanationEn: 'Past continuous: were sitting in silence + time phrase.',
        explanationEs: 'Pasado continuo: "were sitting in silence before the test".'
      },
      {
        id: 'sit-sb-5',
        type: 'sentence-builder',
        spanishPrompt: 'No te quedes indeciso; toma una postura clara en tu ensayo.',
        correctSentence: 'Do not sit on the fence take a clear stance in your essay.',
        tokens: ['Do', 'not', 'sit', 'on', 'the', 'fence', 'take', 'a', 'clear', 'stance', 'in', 'your', 'essay.'],
        explanationEn: 'Idiomatic advice for IELTS: Do not sit on the fence + take a clear stance.',
        explanationEs: 'Consejo para ensayos de IELTS: "Do not sit on the fence, take a clear stance".'
      },
      {
        id: 'sit-sb-6',
        type: 'sentence-builder',
        spanishPrompt: 'Él presentó la prueba de inglés la semana pasada.',
        correctSentence: 'He sat the English proficiency test last week.',
        tokens: ['He', 'sat', 'the', 'English', 'proficiency', 'test', 'last', 'week.'],
        explanationEn: 'Past simple collocation: sat the proficiency test + time.',
        explanationEs: 'Colocación en pasado: "sat the proficiency test last week".'
      },
      {
        id: 'sit-sb-7',
        type: 'sentence-builder',
        spanishPrompt: 'Todos se sentaron alrededor de la mesa para discutir el proyecto.',
        correctSentence: 'Everyone sat around the table to discuss the project.',
        tokens: ['Everyone', 'sat', 'around', 'the', 'table', 'to', 'discuss', 'the', 'project.'],
        explanationEn: 'Past simple "sat around the table" + purpose infinitive.',
        explanationEs: '"Everyone sat around the table to discuss the project".'
      },
      {
        id: 'sit-sb-8',
        type: 'sentence-builder',
        spanishPrompt: 'Ella se sentó tranquilamente a leer un libro en la biblioteca.',
        correctSentence: 'She sat quietly reading a book in the library.',
        tokens: ['She', 'sat', 'quietly', 'reading', 'a', 'book', 'in', 'the', 'library.'],
        explanationEn: 'Past simple with participle clause: sat quietly reading + object + location.',
        explanationEs: 'Estructura: "sat quietly reading a book in the library".'
      },
      {
        id: 'sit-sb-9',
        type: 'sentence-builder',
        spanishPrompt: '¿Puedo sentarme aquí si este asiento está desocupado?',
        correctSentence: 'May I sit here if this seat is unoccupied?',
        tokens: ['May', 'I', 'sit', 'here', 'if', 'this', 'seat', 'is', 'unoccupied?'],
        explanationEn: 'Polite formal question: May I sit here if...?',
        explanationEs: 'Pregunta cortés formal: "May I sit here if this seat is unoccupied?".'
      },
      {
        id: 'sit-sb-10',
        type: 'sentence-builder',
        spanishPrompt: 'Nos sentamos juntos durante toda la ceremonia de graduación.',
        correctSentence: 'We sat together throughout the entire graduation ceremony.',
        tokens: ['We', 'sat', 'together', 'throughout', 'the', 'entire', 'graduation', 'ceremony.'],
        explanationEn: 'Past simple: sat together throughout + noun phrase.',
        explanationEs: 'Pasado simple con preposición de duración: "sat together throughout the ceremony".'
      }
    ]
  }
];
