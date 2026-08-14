import { Question } from '../../types';

/**
 * Curated concise sentence builder questions for all 50 verbs.
 * EVERY question has STRICTLY MAX 6 WORDS/TOKENS (between 4 and 6 words).
 */
export const CONCISE_SENTENCE_BUILDERS: Record<number, Question[]> = {
  // 1. BE
  1: [
    {
      id: 'be-sb-c1',
      type: 'sentence-builder',
      spanishPrompt: 'Ella es una gran doctora.',
      correctSentence: 'She is a great doctor.',
      tokens: ['She', 'is', 'a', 'great', 'doctor.'],
      explanationEn: 'Subject (She) + verb (is) + complement (a great doctor).',
      explanationEs: 'Sujeto + verbo to be + complemento (5 palabras).'
    },
    {
      id: 'be-sb-c2',
      type: 'sentence-builder',
      spanishPrompt: 'Nosotros estamos listos ahora.',
      correctSentence: 'We are ready now.',
      tokens: ['We', 'are', 'ready', 'now.'],
      explanationEn: 'Subject (We) + verb (are) + adjective (ready) + adverb (now).',
      explanationEs: 'Sujeto + are + adjetivo + adverbio (4 palabras).'
    },
    {
      id: 'be-sb-c3',
      type: 'sentence-builder',
      spanishPrompt: 'El examen fue muy difícil.',
      correctSentence: 'The exam was very difficult.',
      tokens: ['The', 'exam', 'was', 'very', 'difficult.'],
      explanationEn: 'Past tense of "be" for singular noun is "was".',
      explanationEs: 'Pasado simple con was (5 palabras).'
    },
    {
      id: 'be-sb-c4',
      type: 'sentence-builder',
      spanishPrompt: 'Ellos fueron muy amables ayer.',
      correctSentence: 'They were very kind yesterday.',
      tokens: ['They', 'were', 'very', 'kind', 'yesterday.'],
      explanationEn: 'Plural subject "They" takes past tense "were".',
      explanationEs: 'Sujeto plural con were (5 palabras).'
    },
    {
      id: 'be-sb-c5',
      type: 'sentence-builder',
      spanishPrompt: 'La educación es muy importante.',
      correctSentence: 'Education is very important.',
      tokens: ['Education', 'is', 'very', 'important.'],
      explanationEn: 'Abstract noun "Education" takes singular "is".',
      explanationEs: 'Sujeto singular + is + complemento (4 palabras).'
    },
    {
      id: 'be-sb-c6',
      type: 'sentence-builder',
      spanishPrompt: 'Yo estaré allí pronto.',
      correctSentence: 'I will be there soon.',
      tokens: ['I', 'will', 'be', 'there', 'soon.'],
      explanationEn: 'Future tense uses "will be".',
      explanationEs: 'Futuro simple con will be (5 palabras).'
    }
  ],

  // 2. HAVE
  2: [
    {
      id: 'have-sb-c1',
      type: 'sentence-builder',
      spanishPrompt: 'Ella tiene un auto nuevo.',
      correctSentence: 'She has a new car.',
      tokens: ['She', 'has', 'a', 'new', 'car.'],
      explanationEn: 'Third-person singular subject (She) takes "has".',
      explanationEs: 'Tercera persona singular usa has (5 palabras).'
    },
    {
      id: 'have-sb-c2',
      type: 'sentence-builder',
      spanishPrompt: 'Tuvimos un gran día ayer.',
      correctSentence: 'We had a great day.',
      tokens: ['We', 'had', 'a', 'great', 'day.'],
      explanationEn: 'Past simple of "have" is "had".',
      explanationEs: 'Pasado simple con had (5 palabras).'
    },
    {
      id: 'have-sb-c3',
      type: 'sentence-builder',
      spanishPrompt: 'Ellos tienen muchas buenas ideas.',
      correctSentence: 'They have many good ideas.',
      tokens: ['They', 'have', 'many', 'good', 'ideas.'],
      explanationEn: 'Plural subject (They) takes "have".',
      explanationEs: 'Sujeto plural con have (5 palabras).'
    },
    {
      id: 'have-sb-c4',
      type: 'sentence-builder',
      spanishPrompt: 'Tengo una pregunta importante.',
      correctSentence: 'I have an important question.',
      tokens: ['I', 'have', 'an', 'important', 'question.'],
      explanationEn: '"I have" followed by indefinite article "an".',
      explanationEs: 'I have + an important question (5 palabras).'
    },
    {
      id: 'have-sb-c5',
      type: 'sentence-builder',
      spanishPrompt: 'Él tiene suficiente tiempo libre.',
      correctSentence: 'He has enough free time.',
      tokens: ['He', 'has', 'enough', 'free', 'time.'],
      explanationEn: 'Third person takes "has".',
      explanationEs: 'He has + cuantificador + complemento (5 palabras).'
    },
    {
      id: 'have-sb-c6',
      type: 'sentence-builder',
      spanishPrompt: 'Hemos terminado nuestra tarea.',
      correctSentence: 'We have finished our homework.',
      tokens: ['We', 'have', 'finished', 'our', 'homework.'],
      explanationEn: 'Present perfect uses "have" + past participle.',
      explanationEs: 'Presente perfecto con have finished (5 palabras).'
    }
  ],

  // 3. DO
  3: [
    {
      id: 'do-sb-c1',
      type: 'sentence-builder',
      spanishPrompt: 'Ella hace su trabajo diario.',
      correctSentence: 'She does her daily work.',
      tokens: ['She', 'does', 'her', 'daily', 'work.'],
      explanationEn: 'Third person takes "does".',
      explanationEs: 'Tercera persona singular usa does (5 palabras).'
    },
    {
      id: 'do-sb-c2',
      type: 'sentence-builder',
      spanishPrompt: 'Hice lo mejor posible hoy.',
      correctSentence: 'I did my best today.',
      tokens: ['I', 'did', 'my', 'best', 'today.'],
      explanationEn: 'Past simple of "do" is "did".',
      explanationEs: 'Pasado simple con did (5 palabras).'
    },
    {
      id: 'do-sb-c3',
      type: 'sentence-builder',
      spanishPrompt: 'Ellos hacen ejercicio cada mañana.',
      correctSentence: 'They do exercise every morning.',
      tokens: ['They', 'do', 'exercise', 'every', 'morning.'],
      explanationEn: 'Collocation: do exercise.',
      explanationEs: 'They do exercise every morning (5 palabras).'
    },
    {
      id: 'do-sb-c4',
      type: 'sentence-builder',
      spanishPrompt: '¿Hiciste tu tarea anoche?',
      correctSentence: 'Did you do your homework?',
      tokens: ['Did', 'you', 'do', 'your', 'homework?'],
      explanationEn: 'Auxiliary "Did" + base verb "do".',
      explanationEs: 'Pregunta en pasado con did (5 palabras).'
    },
    {
      id: 'do-sb-c5',
      type: 'sentence-builder',
      spanishPrompt: 'Nosotros hacemos negocios juntos.',
      correctSentence: 'We do business together.',
      tokens: ['We', 'do', 'business', 'together.'],
      explanationEn: 'Collocation: do business.',
      explanationEs: 'We do business together (4 palabras).'
    },
    {
      id: 'do-sb-c6',
      type: 'sentence-builder',
      spanishPrompt: 'Él hizo una buena investigación.',
      correctSentence: 'He did good research.',
      tokens: ['He', 'did', 'good', 'research.'],
      explanationEn: 'Past tense of do is did.',
      explanationEs: 'He did good research (4 palabras).'
    }
  ],

  // 4. GO
  4: [
    {
      id: 'go-sb-c1',
      type: 'sentence-builder',
      spanishPrompt: 'Él fue a la escuela.',
      correctSentence: 'He went to school early.',
      tokens: ['He', 'went', 'to', 'school', 'early.'],
      explanationEn: 'Past simple of "go" is "went".',
      explanationEs: 'Pasado irregular went (5 palabras).'
    },
    {
      id: 'go-sb-c2',
      type: 'sentence-builder',
      spanishPrompt: 'Vamos a casa ahora.',
      correctSentence: 'We go home now.',
      tokens: ['We', 'go', 'home', 'now.'],
      explanationEn: 'Base verb "go" with "home" (no preposition).',
      explanationEs: 'We go home now (4 palabras).'
    },
    {
      id: 'go-sb-c3',
      type: 'sentence-builder',
      spanishPrompt: 'Ella va al gimnasio diariamente.',
      correctSentence: 'She goes to the gym.',
      tokens: ['She', 'goes', 'to', 'the', 'gym.'],
      explanationEn: 'Third person singular "goes".',
      explanationEs: 'She goes to the gym (5 palabras).'
    },
    {
      id: 'go-sb-c4',
      type: 'sentence-builder',
      spanishPrompt: 'Ellos han ido a Londres.',
      correctSentence: 'They have gone to London.',
      tokens: ['They', 'have', 'gone', 'to', 'London.'],
      explanationEn: 'Present perfect uses past participle "gone".',
      explanationEs: 'Participio gone con have (5 palabras).'
    },
    {
      id: 'go-sb-c5',
      type: 'sentence-builder',
      spanishPrompt: 'Iremos juntos al cine.',
      correctSentence: 'We will go together soon.',
      tokens: ['We', 'will', 'go', 'together', 'soon.'],
      explanationEn: 'Future tense: will go.',
      explanationEs: 'We will go together soon (5 palabras).'
    },
    {
      id: 'go-sb-c6',
      type: 'sentence-builder',
      spanishPrompt: 'Yo voy a pie siempre.',
      correctSentence: 'I always go on foot.',
      tokens: ['I', 'always', 'go', 'on', 'foot.'],
      explanationEn: 'Adverb of frequency before main verb.',
      explanationEs: 'I always go on foot (5 palabras).'
    }
  ],

  // 5. GET
  5: [
    {
      id: 'get-sb-c1',
      type: 'sentence-builder',
      spanishPrompt: 'Recibimos buenas noticias hoy.',
      correctSentence: 'We got good news today.',
      tokens: ['We', 'got', 'good', 'news', 'today.'],
      explanationEn: 'Past simple of "get" is "got".',
      explanationEs: 'Pasado simple got (5 palabras).'
    },
    {
      id: 'get-sb-c2',
      type: 'sentence-builder',
      spanishPrompt: 'Ella obtiene excelentes calificaciones siempre.',
      correctSentence: 'She gets top grades always.',
      tokens: ['She', 'gets', 'top', 'grades', 'always.'],
      explanationEn: 'Third person singular "gets".',
      explanationEs: 'She gets top grades always (5 palabras).'
    },
    {
      id: 'get-sb-c3',
      type: 'sentence-builder',
      spanishPrompt: 'Llegué a casa muy tarde.',
      correctSentence: 'I got home very late.',
      tokens: ['I', 'got', 'home', 'very', 'late.'],
      explanationEn: '"Get home" means arrive home.',
      explanationEs: 'I got home very late (5 palabras).'
    },
    {
      id: 'get-sb-c4',
      type: 'sentence-builder',
      spanishPrompt: 'Ellos consiguieron un nuevo trabajo.',
      correctSentence: 'They got a new job.',
      tokens: ['They', 'got', 'a', 'new', 'job.'],
      explanationEn: 'Past simple "got" + object.',
      explanationEs: 'They got a new job (5 palabras).'
    },
    {
      id: 'get-sb-c5',
      type: 'sentence-builder',
      spanishPrompt: 'Se está haciendo tarde ahora.',
      correctSentence: 'It is getting late now.',
      tokens: ['It', 'is', 'getting', 'late', 'now.'],
      explanationEn: 'Continuous form "getting" shows transition.',
      explanationEs: 'It is getting late now (5 palabras).'
    },
    {
      id: 'get-sb-c6',
      type: 'sentence-builder',
      spanishPrompt: 'Por favor consigue más información.',
      correctSentence: 'Please get more information.',
      tokens: ['Please', 'get', 'more', 'information.'],
      explanationEn: 'Imperative form with "get".',
      explanationEs: 'Please get more information (4 palabras).'
    }
  ],

  // 6. MAKE
  6: [
    {
      id: 'make-sb-c1',
      type: 'sentence-builder',
      spanishPrompt: 'Ella prepara un café delicioso.',
      correctSentence: 'She makes delicious coffee daily.',
      tokens: ['She', 'makes', 'delicious', 'coffee', 'daily.'],
      explanationEn: 'Third person singular "makes".',
      explanationEs: 'She makes delicious coffee daily (5 palabras).'
    },
    {
      id: 'make-sb-c2',
      type: 'sentence-builder',
      spanishPrompt: 'Tomamos una decisión importante.',
      correctSentence: 'We made an important decision.',
      tokens: ['We', 'made', 'an', 'important', 'decision.'],
      explanationEn: 'Collocation: make a decision -> past: made.',
      explanationEs: 'We made an important decision (5 palabras).'
    },
    {
      id: 'make-sb-c3',
      type: 'sentence-builder',
      spanishPrompt: 'Ellos cometen errores a veces.',
      correctSentence: 'They make mistakes sometimes.',
      tokens: ['They', 'make', 'mistakes', 'sometimes.'],
      explanationEn: 'Collocation: make mistakes.',
      explanationEs: 'They make mistakes sometimes (4 palabras).'
    },
    {
      id: 'make-sb-c4',
      type: 'sentence-builder',
      spanishPrompt: 'Hice nuevos amigos ayer.',
      correctSentence: 'I made new friends yesterday.',
      tokens: ['I', 'made', 'new', 'friends', 'yesterday.'],
      explanationEn: 'Past simple "made" + new friends.',
      explanationEs: 'I made new friends yesterday (5 palabras).'
    },
    {
      id: 'make-sb-c5',
      type: 'sentence-builder',
      spanishPrompt: 'La práctica hace la perfección.',
      correctSentence: 'Practice makes perfect always.',
      tokens: ['Practice', 'makes', 'perfect', 'always.'],
      explanationEn: 'Proverb with singular noun.',
      explanationEs: 'Practice makes perfect always (4 palabras).'
    },
    {
      id: 'make-sb-c6',
      type: 'sentence-builder',
      spanishPrompt: 'Él hizo una promesa sincera.',
      correctSentence: 'He made a sincere promise.',
      tokens: ['He', 'made', 'a', 'sincere', 'promise.'],
      explanationEn: 'Past simple "made".',
      explanationEs: 'He made a sincere promise (5 palabras).'
    }
  ],

  // 7. KNOW
  7: [
    {
      id: 'know-sb-c1',
      type: 'sentence-builder',
      spanishPrompt: 'Yo sabía la respuesta correcta.',
      correctSentence: 'I knew the right answer.',
      tokens: ['I', 'knew', 'the', 'right', 'answer.'],
      explanationEn: 'Past simple of "know" is "knew".',
      explanationEs: 'Pasado simple knew (5 palabras).'
    },
    {
      id: 'know-sb-c2',
      type: 'sentence-builder',
      spanishPrompt: 'Ella conoce bien esta ciudad.',
      correctSentence: 'She knows this city well.',
      tokens: ['She', 'knows', 'this', 'city', 'well.'],
      explanationEn: 'Third person singular "knows".',
      explanationEs: 'She knows this city well (5 palabras).'
    },
    {
      id: 'know-sb-c3',
      type: 'sentence-builder',
      spanishPrompt: 'Ellos saben la verdad completa.',
      correctSentence: 'They know the whole truth.',
      tokens: ['They', 'know', 'the', 'whole', 'truth.'],
      explanationEn: 'Present simple "know" with plural subject.',
      explanationEs: 'They know the whole truth (5 palabras).'
    },
    {
      id: 'know-sb-c4',
      type: 'sentence-builder',
      spanishPrompt: 'Lo hemos conocido por años.',
      correctSentence: 'We have known him years.',
      tokens: ['We', 'have', 'known', 'him', 'years.'],
      explanationEn: 'Past participle "known" with present perfect.',
      explanationEs: 'Participio known con have (5 palabras).'
    },
    {
      id: 'know-sb-c5',
      type: 'sentence-builder',
      spanishPrompt: 'Él sabe cómo resolver problemas.',
      correctSentence: 'He knows how to help.',
      tokens: ['He', 'knows', 'how', 'to', 'help.'],
      explanationEn: '"Know how to" indicates ability.',
      explanationEs: 'He knows how to help (5 palabras).'
    },
    {
      id: 'know-sb-c6',
      type: 'sentence-builder',
      spanishPrompt: 'Todos conocen las reglas básicas.',
      correctSentence: 'Everyone knows the basic rules.',
      tokens: ['Everyone', 'knows', 'the', 'basic', 'rules.'],
      explanationEn: '"Everyone" is grammatically singular.',
      explanationEs: 'Everyone takes knows (5 palabras).'
    }
  ],

  // 8. THINK
  8: [
    {
      id: 'think-sb-c1',
      type: 'sentence-builder',
      spanishPrompt: 'Pienso que es una idea.',
      correctSentence: 'I think it is great.',
      tokens: ['I', 'think', 'it', 'is', 'great.'],
      explanationEn: '"I think" expresses opinion.',
      explanationEs: 'I think it is great (5 palabras).'
    },
    {
      id: 'think-sb-c2',
      type: 'sentence-builder',
      spanishPrompt: 'Él pensó en esa solución.',
      correctSentence: 'He thought about that solution.',
      tokens: ['He', 'thought', 'about', 'that', 'solution.'],
      explanationEn: 'Past simple of "think" is "thought".',
      explanationEs: 'Pasado simple thought (5 palabras).'
    },
    {
      id: 'think-sb-c3',
      type: 'sentence-builder',
      spanishPrompt: 'Ella piensa muy rápido siempre.',
      correctSentence: 'She thinks very fast always.',
      tokens: ['She', 'thinks', 'very', 'fast', 'always.'],
      explanationEn: 'Third person singular "thinks".',
      explanationEs: 'She thinks very fast always (5 palabras).'
    },
    {
      id: 'think-sb-c4',
      type: 'sentence-builder',
      spanishPrompt: 'Pensamos en ti ayer.',
      correctSentence: 'We thought of you yesterday.',
      tokens: ['We', 'thought', 'of', 'you', 'yesterday.'],
      explanationEn: 'Past tense "thought" + preposition of.',
      explanationEs: 'We thought of you yesterday (5 palabras).'
    },
    {
      id: 'think-sb-c5',
      type: 'sentence-builder',
      spanishPrompt: 'Ellos piensan antes de hablar.',
      correctSentence: 'They think before speaking now.',
      tokens: ['They', 'think', 'before', 'speaking', 'now.'],
      explanationEn: 'Present simple plural.',
      explanationEs: 'They think before speaking now (5 palabras).'
    },
    {
      id: 'think-sb-c6',
      type: 'sentence-builder',
      spanishPrompt: 'Siempre piensa de manera positiva.',
      correctSentence: 'Always think positively in life.',
      tokens: ['Always', 'think', 'positively', 'in', 'life.'],
      explanationEn: 'Imperative sentence.',
      explanationEs: 'Always think positively in life (5 palabras).'
    }
  ],

  // 9. TAKE
  9: [
    {
      id: 'take-sb-c1',
      type: 'sentence-builder',
      spanishPrompt: 'Ella tomó el autobús temprano.',
      correctSentence: 'She took the early bus.',
      tokens: ['She', 'took', 'the', 'early', 'bus.'],
      explanationEn: 'Past simple of "take" is "took".',
      explanationEs: 'Pasado irregular took (5 palabras).'
    },
    {
      id: 'take-sb-c2',
      type: 'sentence-builder',
      spanishPrompt: 'Tomamos notas durante la clase.',
      correctSentence: 'We take notes during class.',
      tokens: ['We', 'take', 'notes', 'during', 'class.'],
      explanationEn: 'Collocation: take notes.',
      explanationEs: 'We take notes during class (5 palabras).'
    },
    {
      id: 'take-sb-c3',
      type: 'sentence-builder',
      spanishPrompt: 'Él ha tomado su medicina.',
      correctSentence: 'He has taken his medicine.',
      tokens: ['He', 'has', 'taken', 'his', 'medicine.'],
      explanationEn: 'Past participle "taken" with has.',
      explanationEs: 'Participio taken (5 palabras).'
    },
    {
      id: 'take-sb-c4',
      type: 'sentence-builder',
      spanishPrompt: 'Toma tu tiempo por favor.',
      correctSentence: 'Take your time please now.',
      tokens: ['Take', 'your', 'time', 'please', 'now.'],
      explanationEn: 'Idiomatic: take your time.',
      explanationEs: 'Take your time please now (5 palabras).'
    },
    {
      id: 'take-sb-c5',
      type: 'sentence-builder',
      spanishPrompt: 'Ellos tomaron un descanso corto.',
      correctSentence: 'They took a short break.',
      tokens: ['They', 'took', 'a', 'short', 'break.'],
      explanationEn: 'Past simple "took a break".',
      explanationEs: 'They took a short break (5 palabras).'
    },
    {
      id: 'take-sb-c6',
      type: 'sentence-builder',
      spanishPrompt: 'Tomaré el examen mañana.',
      correctSentence: 'I will take the exam.',
      tokens: ['I', 'will', 'take', 'the', 'exam.'],
      explanationEn: 'Future with "will take".',
      explanationEs: 'I will take the exam (5 palabras).'
    }
  ],

  // 10. SEE
  10: [
    {
      id: 'see-sb-c1',
      type: 'sentence-builder',
      spanishPrompt: 'Vimos una gran película ayer.',
      correctSentence: 'We saw a great movie.',
      tokens: ['We', 'saw', 'a', 'great', 'movie.'],
      explanationEn: 'Past simple of "see" is "saw".',
      explanationEs: 'Pasado irregular saw (5 palabras).'
    },
    {
      id: 'see-sb-c2',
      type: 'sentence-builder',
      spanishPrompt: 'Veo la diferencia muy claramente.',
      correctSentence: 'I see the difference clearly.',
      tokens: ['I', 'see', 'the', 'difference', 'clearly.'],
      explanationEn: 'Present simple "see".',
      explanationEs: 'I see the difference clearly (5 palabras).'
    },
    {
      id: 'see-sb-c3',
      type: 'sentence-builder',
      spanishPrompt: 'Ella ha visto ese documental.',
      correctSentence: 'She has seen that documentary.',
      tokens: ['She', 'has', 'seen', 'that', 'documentary.'],
      explanationEn: 'Past participle "seen" with present perfect.',
      explanationEs: 'Participio seen con has (5 palabras).'
    },
    {
      id: 'see-sb-c4',
      type: 'sentence-builder',
      spanishPrompt: 'Ellos ven resultados positivos ahora.',
      correctSentence: 'They see positive results now.',
      tokens: ['They', 'see', 'positive', 'results', 'now.'],
      explanationEn: 'Present simple plural.',
      explanationEs: 'They see positive results now (5 palabras).'
    },
    {
      id: 'see-sb-c5',
      type: 'sentence-builder',
      spanishPrompt: 'Te veré muy pronto.',
      correctSentence: 'I will see you soon.',
      tokens: ['I', 'will', 'see', 'you', 'soon.'],
      explanationEn: 'Future: will see you soon.',
      explanationEs: 'I will see you soon (5 palabras).'
    },
    {
      id: 'see-sb-c6',
      type: 'sentence-builder',
      spanishPrompt: '¿Viste las nuevas noticias?',
      correctSentence: 'Did you see the news?',
      tokens: ['Did', 'you', 'see', 'the', 'news?'],
      explanationEn: 'Past question: Did you see.',
      explanationEs: 'Did you see the news (5 palabras).'
    }
  ],

  // 11. COME
  11: [
    {
      id: 'come-sb-c1',
      type: 'sentence-builder',
      spanishPrompt: 'Ella vino a la reunión.',
      correctSentence: 'She came to the meeting.',
      tokens: ['She', 'came', 'to', 'the', 'meeting.'],
      explanationEn: 'Past simple of "come" is "came".',
      explanationEs: 'Pasado irregular came (5 palabras).'
    },
    {
      id: 'come-sb-c2',
      type: 'sentence-builder',
      spanishPrompt: 'Ven aquí ahora mismo por favor.',
      correctSentence: 'Please come here right now.',
      tokens: ['Please', 'come', 'here', 'right', 'now.'],
      explanationEn: 'Imperative with "come here".',
      explanationEs: 'Please come here right now (5 palabras).'
    },
    {
      id: 'come-sb-c3',
      type: 'sentence-builder',
      spanishPrompt: 'Ellos han venido desde lejos.',
      correctSentence: 'They have come from afar.',
      tokens: ['They', 'have', 'come', 'from', 'afar.'],
      explanationEn: 'Past participle is "come".',
      explanationEs: 'Participio come con have (5 palabras).'
    },
    {
      id: 'come-sb-c4',
      type: 'sentence-builder',
      spanishPrompt: 'El éxito viene con esfuerzo.',
      correctSentence: 'Success comes with hard work.',
      tokens: ['Success', 'comes', 'with', 'hard', 'work.'],
      explanationEn: 'Singular noun takes "comes".',
      explanationEs: 'Success comes with hard work (5 palabras).'
    },
    {
      id: 'come-sb-c5',
      type: 'sentence-builder',
      spanishPrompt: 'Vendremos mañana por la mañana.',
      correctSentence: 'We will come tomorrow morning.',
      tokens: ['We', 'will', 'come', 'tomorrow', 'morning.'],
      explanationEn: 'Future with will come.',
      explanationEs: 'We will come tomorrow morning (5 palabras).'
    }
  ],

  // 12. WANT
  12: [
    {
      id: 'want-sb-c1',
      type: 'sentence-builder',
      spanishPrompt: 'Ella quiere aprender inglés rápido.',
      correctSentence: 'She wants to learn English.',
      tokens: ['She', 'wants', 'to', 'learn', 'English.'],
      explanationEn: '"Want to" followed by base infinitive.',
      explanationEs: 'She wants to learn English (5 palabras).'
    },
    {
      id: 'want-sb-c2',
      type: 'sentence-builder',
      spanishPrompt: 'Queríamos ayudar a todos ayer.',
      correctSentence: 'We wanted to help everyone.',
      tokens: ['We', 'wanted', 'to', 'help', 'everyone.'],
      explanationEn: 'Regular past simple "wanted".',
      explanationEs: 'We wanted to help everyone (5 palabras).'
    },
    {
      id: 'want-sb-c3',
      type: 'sentence-builder',
      spanishPrompt: 'Ellos quieren mejores oportunidades laborales.',
      correctSentence: 'They want better job opportunities.',
      tokens: ['They', 'want', 'better', 'job', 'opportunities.'],
      explanationEn: 'Present simple plural.',
      explanationEs: 'They want better job opportunities (5 palabras).'
    },
    {
      id: 'want-sb-c4',
      type: 'sentence-builder',
      spanishPrompt: 'Quiero una taza de té.',
      correctSentence: 'I want a cup tea.',
      tokens: ['I', 'want', 'a', 'cup', 'tea.'],
      explanationEn: 'Simple present want.',
      explanationEs: 'I want a cup tea (5 palabras).'
    },
    {
      id: 'want-sb-c5',
      type: 'sentence-builder',
      spanishPrompt: '¿Quieres venir con nosotros?',
      correctSentence: 'Do you want to come?',
      tokens: ['Do', 'you', 'want', 'to', 'come?'],
      explanationEn: 'Question form: Do you want to come.',
      explanationEs: 'Do you want to come (5 palabras).'
    }
  ],

  // 13. LOOK
  13: [
    {
      id: 'look-sb-c1',
      type: 'sentence-builder',
      spanishPrompt: 'Ella miró las hermosas estrellas.',
      correctSentence: 'She looked at the stars.',
      tokens: ['She', 'looked', 'at', 'the', 'stars.'],
      explanationEn: 'Collocation: look at.',
      explanationEs: 'She looked at the stars (5 palabras).'
    },
    {
      id: 'look-sb-c2',
      type: 'sentence-builder',
      spanishPrompt: 'Te ves muy feliz hoy.',
      correctSentence: 'You look very happy today.',
      tokens: ['You', 'look', 'very', 'happy', 'today.'],
      explanationEn: 'Linking verb: look + adjective.',
      explanationEs: 'You look very happy today (5 palabras).'
    },
    {
      id: 'look-sb-c3',
      type: 'sentence-builder',
      spanishPrompt: 'Estamos buscando nuevas opciones.',
      correctSentence: 'We are looking for options.',
      tokens: ['We', 'are', 'looking', 'for', 'options.'],
      explanationEn: 'Phrasal verb: look for (buscar).',
      explanationEs: 'We are looking for options (5 palabras).'
    },
    {
      id: 'look-sb-c4',
      type: 'sentence-builder',
      spanishPrompt: 'Mira este interesante libro ahora.',
      correctSentence: 'Look at this interesting book.',
      tokens: ['Look', 'at', 'this', 'interesting', 'book.'],
      explanationEn: 'Imperative: Look at.',
      explanationEs: 'Look at this interesting book (5 palabras).'
    },
    {
      id: 'look-sb-c5',
      type: 'sentence-builder',
      spanishPrompt: 'Ellos miraron hacia el futuro.',
      correctSentence: 'They looked to the future.',
      tokens: ['They', 'looked', 'to', 'the', 'future.'],
      explanationEn: 'Past simple regular: looked.',
      explanationEs: 'They looked to the future (5 palabras).'
    }
  ],

  // 14. USE
  14: [
    {
      id: 'use-sb-c1',
      type: 'sentence-builder',
      spanishPrompt: 'Ella usa la computadora diariamente.',
      correctSentence: 'She uses the computer daily.',
      tokens: ['She', 'uses', 'the', 'computer', 'daily.'],
      explanationEn: 'Third person singular "uses".',
      explanationEs: 'She uses the computer daily (5 palabras).'
    },
    {
      id: 'use-sb-c2',
      type: 'sentence-builder',
      spanishPrompt: 'Usamos internet para investigar.',
      correctSentence: 'We use the internet daily.',
      tokens: ['We', 'use', 'the', 'internet', 'daily.'],
      explanationEn: 'Present simple: use.',
      explanationEs: 'We use the internet daily (5 palabras).'
    },
    {
      id: 'use-sb-c3',
      type: 'sentence-builder',
      spanishPrompt: 'Él usó su teléfono ayer.',
      correctSentence: 'He used his phone yesterday.',
      tokens: ['He', 'used', 'his', 'phone', 'yesterday.'],
      explanationEn: 'Past simple regular "used".',
      explanationEs: 'He used his phone yesterday (5 palabras).'
    },
    {
      id: 'use-sb-c4',
      type: 'sentence-builder',
      spanishPrompt: 'Ellos han usado este método.',
      correctSentence: 'They have used this method.',
      tokens: ['They', 'have', 'used', 'this', 'method.'],
      explanationEn: 'Present perfect: have used.',
      explanationEs: 'They have used this method (5 palabras).'
    },
    {
      id: 'use-sb-c5',
      type: 'sentence-builder',
      spanishPrompt: 'Usa tu tiempo con sabiduría.',
      correctSentence: 'Use your time very wisely.',
      tokens: ['Use', 'your', 'time', 'very', 'wisely.'],
      explanationEn: 'Imperative form.',
      explanationEs: 'Use your time very wisely (5 palabras).'
    }
  ],

  // 15. FIND
  15: [
    {
      id: 'find-sb-c1',
      type: 'sentence-builder',
      spanishPrompt: 'Encontré mis llaves perdidas ayer.',
      correctSentence: 'I found my lost keys.',
      tokens: ['I', 'found', 'my', 'lost', 'keys.'],
      explanationEn: 'Past simple of "find" is "found".',
      explanationEs: 'Pasado irregular found (5 palabras).'
    },
    {
      id: 'find-sb-c2',
      type: 'sentence-builder',
      spanishPrompt: 'Ella encuentra soluciones muy creativas.',
      correctSentence: 'She finds very creative solutions.',
      tokens: ['She', 'finds', 'very', 'creative', 'solutions.'],
      explanationEn: 'Third person singular "finds".',
      explanationEs: 'She finds very creative solutions (5 palabras).'
    },
    {
      id: 'find-sb-c3',
      type: 'sentence-builder',
      spanishPrompt: 'Encontraremos la respuesta correcta pronto.',
      correctSentence: 'We will find the answer.',
      tokens: ['We', 'will', 'find', 'the', 'answer.'],
      explanationEn: 'Future with will find.',
      explanationEs: 'We will find the answer (5 palabras).'
    },
    {
      id: 'find-sb-c4',
      type: 'sentence-builder',
      spanishPrompt: 'Ellos han encontrado nueva evidencia.',
      correctSentence: 'They have found new evidence.',
      tokens: ['They', 'have', 'found', 'new', 'evidence.'],
      explanationEn: 'Past participle "found".',
      explanationEs: 'They have found new evidence (5 palabras).'
    },
    {
      id: 'find-sb-c5',
      type: 'sentence-builder',
      spanishPrompt: '¿Encontraste tu libro favorito?',
      correctSentence: 'Did you find your book?',
      tokens: ['Did', 'you', 'find', 'your', 'book?'],
      explanationEn: 'Past question: Did you find.',
      explanationEs: 'Did you find your book (5 palabras).'
    }
  ],

  // 16. GIVE
  16: [
    {
      id: 'give-sb-c1',
      type: 'sentence-builder',
      spanishPrompt: 'Ella me dio un regalo.',
      correctSentence: 'She gave me a gift.',
      tokens: ['She', 'gave', 'me', 'a', 'gift.'],
      explanationEn: 'Past simple of "give" is "gave".',
      explanationEs: 'Pasado irregular gave (5 palabras).'
    },
    {
      id: 'give-sb-c2',
      type: 'sentence-builder',
      spanishPrompt: 'Nosotros damos nuestro mejor esfuerzo.',
      correctSentence: 'We give our best effort.',
      tokens: ['We', 'give', 'our', 'best', 'effort.'],
      explanationEn: 'Present simple "give".',
      explanationEs: 'We give our best effort (5 palabras).'
    },
    {
      id: 'give-sb-c3',
      type: 'sentence-builder',
      spanishPrompt: 'Él ha dado buenos consejos.',
      correctSentence: 'He has given good advice.',
      tokens: ['He', 'has', 'given', 'good', 'advice.'],
      explanationEn: 'Past participle "given" with has.',
      explanationEs: 'Participio given (5 palabras).'
    },
    {
      id: 'give-sb-c4',
      type: 'sentence-builder',
      spanishPrompt: 'Por favor dame tu opinión.',
      correctSentence: 'Please give me your opinion.',
      tokens: ['Please', 'give', 'me', 'your', 'opinion.'],
      explanationEn: 'Imperative give.',
      explanationEs: 'Please give me your opinion (5 palabras).'
    },
    {
      id: 'give-sb-c5',
      type: 'sentence-builder',
      spanishPrompt: 'Ellos dieron una gran presentación.',
      correctSentence: 'They gave a great presentation.',
      tokens: ['They', 'gave', 'a', 'great', 'presentation.'],
      explanationEn: 'Past simple "gave".',
      explanationEs: 'They gave a great presentation (5 palabras).'
    }
  ],

  // 17. TELL
  17: [
    {
      id: 'tell-sb-c1',
      type: 'sentence-builder',
      spanishPrompt: 'Él me dijo la verdad.',
      correctSentence: 'He told me the truth.',
      tokens: ['He', 'told', 'me', 'the', 'truth.'],
      explanationEn: 'Past simple of "tell" is "told".',
      explanationEs: 'Pasado irregular told (5 palabras).'
    },
    {
      id: 'tell-sb-c2',
      type: 'sentence-builder',
      spanishPrompt: 'Ella cuenta historias muy divertidas.',
      correctSentence: 'She tells very funny stories.',
      tokens: ['She', 'tells', 'very', 'funny', 'stories.'],
      explanationEn: 'Third person singular "tells".',
      explanationEs: 'She tells very funny stories (5 palabras).'
    },
    {
      id: 'tell-sb-c3',
      type: 'sentence-builder',
      spanishPrompt: 'Dime tu nombre por favor.',
      correctSentence: 'Tell me your full name.',
      tokens: ['Tell', 'me', 'your', 'full', 'name.'],
      explanationEn: 'Imperative: Tell me.',
      explanationEs: 'Tell me your full name (5 palabras).'
    },
    {
      id: 'tell-sb-c4',
      type: 'sentence-builder',
      spanishPrompt: 'Nosotros les dijimos las noticias.',
      correctSentence: 'We told them the news.',
      tokens: ['We', 'told', 'them', 'the', 'news.'],
      explanationEn: 'Past tense told + object pronoun.',
      explanationEs: 'We told them the news (5 palabras).'
    },
    {
      id: 'tell-sb-c5',
      type: 'sentence-builder',
      spanishPrompt: 'Ellos han dicho todo claramente.',
      correctSentence: 'They have told us everything.',
      tokens: ['They', 'have', 'told', 'us', 'everything.'],
      explanationEn: 'Past participle "told".',
      explanationEs: 'They have told us everything (5 palabras).'
    }
  ],

  // 18. WORK
  18: [
    {
      id: 'work-sb-c1',
      type: 'sentence-builder',
      spanishPrompt: 'Ella trabaja duro cada día.',
      correctSentence: 'She works hard every day.',
      tokens: ['She', 'works', 'hard', 'every', 'day.'],
      explanationEn: 'Third person singular "works".',
      explanationEs: 'She works hard every day (5 palabras).'
    },
    {
      id: 'work-sb-c2',
      type: 'sentence-builder',
      spanishPrompt: 'Trabajamos juntos en el proyecto.',
      correctSentence: 'We worked together on it.',
      tokens: ['We', 'worked', 'together', 'on', 'it.'],
      explanationEn: 'Past simple regular "worked".',
      explanationEs: 'We worked together on it (5 palabras).'
    },
    {
      id: 'work-sb-c3',
      type: 'sentence-builder',
      spanishPrompt: 'Este plan funciona muy bien.',
      correctSentence: 'This plan works very well.',
      tokens: ['This', 'plan', 'works', 'very', 'well.'],
      explanationEn: 'Singular subject "This plan" takes "works".',
      explanationEs: 'This plan works very well (5 palabras).'
    },
    {
      id: 'work-sb-c4',
      type: 'sentence-builder',
      spanishPrompt: 'Ellos han trabajado aquí años.',
      correctSentence: 'They have worked here years.',
      tokens: ['They', 'have', 'worked', 'here', 'years.'],
      explanationEn: 'Present perfect: have worked.',
      explanationEs: 'They have worked here years (5 palabras).'
    },
    {
      id: 'work-sb-c5',
      type: 'sentence-builder',
      spanishPrompt: 'Trabajaré desde casa mañana.',
      correctSentence: 'I will work from home.',
      tokens: ['I', 'will', 'work', 'from', 'home.'],
      explanationEn: 'Future with will work.',
      explanationEs: 'I will work from home (5 palabras).'
    }
  ],

  // 19. CALL
  19: [
    {
      id: 'call-sb-c1',
      type: 'sentence-builder',
      spanishPrompt: 'Ella me llamó ayer tarde.',
      correctSentence: 'She called me yesterday afternoon.',
      tokens: ['She', 'called', 'me', 'yesterday', 'afternoon.'],
      explanationEn: 'Past simple regular "called".',
      explanationEs: 'She called me yesterday afternoon (5 palabras).'
    },
    {
      id: 'call-sb-c2',
      type: 'sentence-builder',
      spanishPrompt: 'Te llamaré más tarde hoy.',
      correctSentence: 'I will call you later.',
      tokens: ['I', 'will', 'call', 'you', 'later.'],
      explanationEn: 'Future with will call.',
      explanationEs: 'I will call you later (5 palabras).'
    },
    {
      id: 'call-sb-c3',
      type: 'sentence-builder',
      spanishPrompt: 'Ellos llaman a sus padres.',
      correctSentence: 'They call their parents often.',
      tokens: ['They', 'call', 'their', 'parents', 'often.'],
      explanationEn: 'Present simple "call".',
      explanationEs: 'They call their parents often (5 palabras).'
    },
    {
      id: 'call-sb-c4',
      type: 'sentence-builder',
      spanishPrompt: 'Por favor llámame si necesitas.',
      correctSentence: 'Please call me right away.',
      tokens: ['Please', 'call', 'me', 'right', 'away.'],
      explanationEn: 'Imperative call.',
      explanationEs: 'Please call me right away (5 palabras).'
    },
    {
      id: 'call-sb-c5',
      type: 'sentence-builder',
      spanishPrompt: 'Lo llamamos por su apodo.',
      correctSentence: 'We call him by name.',
      tokens: ['We', 'call', 'him', 'by', 'name.'],
      explanationEn: 'Present simple: call him.',
      explanationEs: 'We call him by name (5 palabras).'
    }
  ],

  // 20. TRY
  20: [
    {
      id: 'try-sb-c1',
      type: 'sentence-builder',
      spanishPrompt: 'Ella intentó hacer lo mejor.',
      correctSentence: 'She tried her absolute best.',
      tokens: ['She', 'tried', 'her', 'absolute', 'best.'],
      explanationEn: 'Past simple of "try" changes y to ied ("tried").',
      explanationEs: 'Pasado regular tried (5 palabras).'
    },
    {
      id: 'try-sb-c2',
      type: 'sentence-builder',
      spanishPrompt: 'Intentamos aprender cosas nuevas siempre.',
      correctSentence: 'We try to learn daily.',
      tokens: ['We', 'try', 'to', 'learn', 'daily.'],
      explanationEn: '"Try to" + infinitive.',
      explanationEs: 'We try to learn daily (5 palabras).'
    },
    {
      id: 'try-sb-c3',
      type: 'sentence-builder',
      spanishPrompt: 'Inténtalo una vez más ahora.',
      correctSentence: 'Try it one more time.',
      tokens: ['Try', 'it', 'one', 'more', 'time.'],
      explanationEn: 'Imperative sentence: Try it.',
      explanationEs: 'Try it one more time (5 palabras).'
    },
    {
      id: 'try-sb-c4',
      type: 'sentence-builder',
      spanishPrompt: 'Ellos intentaron resolver el enigma.',
      correctSentence: 'They tried to solve it.',
      tokens: ['They', 'tried', 'to', 'solve', 'it.'],
      explanationEn: 'Past tense: tried to solve it.',
      explanationEs: 'They tried to solve it (5 palabras).'
    },
    {
      id: 'try-sb-c5',
      type: 'sentence-builder',
      spanishPrompt: 'Siempre intenta ser muy amable.',
      correctSentence: 'Always try to be kind.',
      tokens: ['Always', 'try', 'to', 'be', 'kind.'],
      explanationEn: 'Imperative with frequency adverb.',
      explanationEs: 'Always try to be kind (5 palabras).'
    }
  ],

  // 21. ASK
  21: [
    {
      id: 'ask-sb-c1',
      type: 'sentence-builder',
      spanishPrompt: 'Ella hizo una pregunta importante.',
      correctSentence: 'She asked an important question.',
      tokens: ['She', 'asked', 'an', 'important', 'question.'],
      explanationEn: 'Past simple regular "asked".',
      explanationEs: 'She asked an important question (5 palabras).'
    },
    {
      id: 'ask-sb-c2',
      type: 'sentence-builder',
      spanishPrompt: 'Siempre pide ayuda si necesitas.',
      correctSentence: 'Always ask for help kindly.',
      tokens: ['Always', 'ask', 'for', 'help', 'kindly.'],
      explanationEn: 'Phrasal verb: ask for.',
      explanationEs: 'Always ask for help kindly (5 palabras).'
    },
    {
      id: 'ask-sb-c3',
      type: 'sentence-builder',
      spanishPrompt: 'Le pregunté sobre sus planes.',
      correctSentence: 'I asked about his plans.',
      tokens: ['I', 'asked', 'about', 'his', 'plans.'],
      explanationEn: 'Past tense: asked about.',
      explanationEs: 'I asked about his plans (5 palabras).'
    },
    {
      id: 'ask-sb-c4',
      type: 'sentence-builder',
      spanishPrompt: 'Ellos preguntan por el precio.',
      correctSentence: 'They ask for the price.',
      tokens: ['They', 'ask', 'for', 'the', 'price.'],
      explanationEn: 'Present simple "ask for".',
      explanationEs: 'They ask for the price (5 palabras).'
    },
    {
      id: 'ask-sb-c5',
      type: 'sentence-builder',
      spanishPrompt: 'Nosotros preguntamos la dirección correcta.',
      correctSentence: 'We asked for directions today.',
      tokens: ['We', 'asked', 'for', 'directions', 'today.'],
      explanationEn: 'Past simple "asked for directions".',
      explanationEs: 'We asked for directions today (5 palabras).'
    }
  ],

  // 22. NEED
  22: [
    {
      id: 'need-sb-c1',
      type: 'sentence-builder',
      spanishPrompt: 'Necesito más tiempo para estudiar.',
      correctSentence: 'I need more study time.',
      tokens: ['I', 'need', 'more', 'study', 'time.'],
      explanationEn: 'Present simple "need".',
      explanationEs: 'I need more study time (5 palabras).'
    },
    {
      id: 'need-sb-c2',
      type: 'sentence-builder',
      spanishPrompt: 'Ella necesita descansar un poco.',
      correctSentence: 'She needs to rest now.',
      tokens: ['She', 'needs', 'to', 'rest', 'now.'],
      explanationEn: 'Third person singular "needs".',
      explanationEs: 'She needs to rest now (5 palabras).'
    },
    {
      id: 'need-sb-c3',
      type: 'sentence-builder',
      spanishPrompt: 'Necesitamos su ayuda urgente hoy.',
      correctSentence: 'We need your help today.',
      tokens: ['We', 'need', 'your', 'help', 'today.'],
      explanationEn: 'Present simple "We need".',
      explanationEs: 'We need your help today (5 palabras).'
    },
    {
      id: 'need-sb-c4',
      type: 'sentence-builder',
      spanishPrompt: 'Ellos necesitaron más recursos ayer.',
      correctSentence: 'They needed more resources yesterday.',
      tokens: ['They', 'needed', 'more', 'resources', 'yesterday.'],
      explanationEn: 'Past simple regular "needed".',
      explanationEs: 'They needed more resources yesterday (5 palabras).'
    },
    {
      id: 'need-sb-c5',
      type: 'sentence-builder',
      spanishPrompt: 'Todos necesitan amor y respeto.',
      correctSentence: 'Everyone needs love and respect.',
      tokens: ['Everyone', 'needs', 'love', 'and', 'respect.'],
      explanationEn: 'Everyone takes singular "needs".',
      explanationEs: 'Everyone needs love and respect (5 palabras).'
    }
  ],

  // 23. FEEL
  23: [
    {
      id: 'feel-sb-c1',
      type: 'sentence-builder',
      spanishPrompt: 'Me siento muy confiado hoy.',
      correctSentence: 'I feel very confident today.',
      tokens: ['I', 'feel', 'very', 'confident', 'today.'],
      explanationEn: 'Linking verb feel + adjective.',
      explanationEs: 'I feel very confident today (5 palabras).'
    },
    {
      id: 'feel-sb-c2',
      type: 'sentence-builder',
      spanishPrompt: 'Ella se sintió muy feliz.',
      correctSentence: 'She felt very happy yesterday.',
      tokens: ['She', 'felt', 'very', 'happy', 'yesterday.'],
      explanationEn: 'Past simple of "feel" is "felt".',
      explanationEs: 'Pasado irregular felt (5 palabras).'
    },
    {
      id: 'feel-sb-c3',
      type: 'sentence-builder',
      spanishPrompt: 'Nos sentimos orgullosos de ti.',
      correctSentence: 'We feel proud of you.',
      tokens: ['We', 'feel', 'proud', 'of', 'you.'],
      explanationEn: 'Adjective phrase: proud of you.',
      explanationEs: 'We feel proud of you (5 palabras).'
    },
    {
      id: 'feel-sb-c4',
      type: 'sentence-builder',
      spanishPrompt: 'Ellos se sienten mucho mejor.',
      correctSentence: 'They feel much better now.',
      tokens: ['They', 'feel', 'much', 'better', 'now.'],
      explanationEn: 'Comparative adjective after feel.',
      explanationEs: 'They feel much better now (5 palabras).'
    },
    {
      id: 'feel-sb-c5',
      type: 'sentence-builder',
      spanishPrompt: 'Él sintió la cálida brisa.',
      correctSentence: 'He felt the warm breeze.',
      tokens: ['He', 'felt', 'the', 'warm', 'breeze.'],
      explanationEn: 'Past simple "felt".',
      explanationEs: 'He felt the warm breeze (5 palabras).'
    }
  ],

  // 24. BECOME
  24: [
    {
      id: 'become-sb-c1',
      type: 'sentence-builder',
      spanishPrompt: 'Ella se convirtió en doctora.',
      correctSentence: 'She became a great doctor.',
      tokens: ['She', 'became', 'a', 'great', 'doctor.'],
      explanationEn: 'Past simple of "become" is "became".',
      explanationEs: 'Pasado irregular became (5 palabras).'
    },
    {
      id: 'become-sb-c2',
      type: 'sentence-builder',
      spanishPrompt: 'Él se convirtió en líder.',
      correctSentence: 'He became an inspiring leader.',
      tokens: ['He', 'became', 'an', 'inspiring', 'leader.'],
      explanationEn: 'Past simple "became".',
      explanationEs: 'He became an inspiring leader (5 palabras).'
    },
    {
      id: 'become-sb-c3',
      type: 'sentence-builder',
      spanishPrompt: 'El clima se volvió frío.',
      correctSentence: 'The weather became very cold.',
      tokens: ['The', 'weather', 'became', 'very', 'cold.'],
      explanationEn: 'Past tense linking verb.',
      explanationEs: 'The weather became very cold (5 palabras).'
    },
    {
      id: 'become-sb-c4',
      type: 'sentence-builder',
      spanishPrompt: 'Ellos se han vuelto amigos.',
      correctSentence: 'They have become good friends.',
      tokens: ['They', 'have', 'become', 'good', 'friends.'],
      explanationEn: 'Past participle is "become".',
      explanationEs: 'Participio become (5 palabras).'
    },
    {
      id: 'become-sb-c5',
      type: 'sentence-builder',
      spanishPrompt: 'El inglés se vuelve fácil.',
      correctSentence: 'English becomes easier with practice.',
      tokens: ['English', 'becomes', 'easier', 'with', 'practice.'],
      explanationEn: 'Singular noun takes "becomes".',
      explanationEs: 'English becomes easier with practice (5 palabras).'
    }
  ],

  // 25. LEAVE
  25: [
    {
      id: 'leave-sb-c1',
      type: 'sentence-builder',
      spanishPrompt: 'Ella salió temprano de casa.',
      correctSentence: 'She left home very early.',
      tokens: ['She', 'left', 'home', 'very', 'early.'],
      explanationEn: 'Past simple of "leave" is "left".',
      explanationEs: 'Pasado irregular left (5 palabras).'
    },
    {
      id: 'leave-sb-c2',
      type: 'sentence-builder',
      spanishPrompt: 'Nos vamos ahora mismo juntos.',
      correctSentence: 'We leave right now together.',
      tokens: ['We', 'leave', 'right', 'now', 'together.'],
      explanationEn: 'Present simple "leave".',
      explanationEs: 'We leave right now together (5 palabras).'
    },
    {
      id: 'leave-sb-c3',
      type: 'sentence-builder',
      spanishPrompt: 'Él dejó sus llaves aquí.',
      correctSentence: 'He left his keys here.',
      tokens: ['He', 'left', 'his', 'keys', 'here.'],
      explanationEn: 'Past simple "left".',
      explanationEs: 'He left his keys here (5 palabras).'
    },
    {
      id: 'leave-sb-c4',
      type: 'sentence-builder',
      spanishPrompt: 'El tren sale a mediodía.',
      correctSentence: 'The train leaves at noon.',
      tokens: ['The', 'train', 'leaves', 'at', 'noon.'],
      explanationEn: 'Scheduled future with present simple.',
      explanationEs: 'The train leaves at noon (5 palabras).'
    },
    {
      id: 'leave-sb-c5',
      type: 'sentence-builder',
      spanishPrompt: 'No dejes basura aquí.',
      correctSentence: 'Do not leave trash here.',
      tokens: ['Do', 'not', 'leave', 'trash', 'here.'],
      explanationEn: 'Negative imperative.',
      explanationEs: 'Do not leave trash here (5 palabras).'
    }
  ],

  // 26. PUT
  26: [
    {
      id: 'put-sb-c1',
      type: 'sentence-builder',
      spanishPrompt: 'Ella puso el libro allí.',
      correctSentence: 'She put the book there.',
      tokens: ['She', 'put', 'the', 'book', 'there.'],
      explanationEn: 'Invariable past: put -> put.',
      explanationEs: 'Verbo invariable put (5 palabras).'
    },
    {
      id: 'put-sb-c2',
      type: 'sentence-builder',
      spanishPrompt: 'Por favor ponlo en orden.',
      correctSentence: 'Please put it in order.',
      tokens: ['Please', 'put', 'it', 'in', 'order.'],
      explanationEn: 'Imperative phrase.',
      explanationEs: 'Please put it in order (5 palabras).'
    },
    {
      id: 'put-sb-c3',
      type: 'sentence-builder',
      spanishPrompt: 'Pusimos todo nuestro empeño.',
      correctSentence: 'We put in great effort.',
      tokens: ['We', 'put', 'in', 'great', 'effort.'],
      explanationEn: 'Past tense "put in effort".',
      explanationEs: 'We put in great effort (5 palabras).'
    },
    {
      id: 'put-sb-c4',
      type: 'sentence-builder',
      spanishPrompt: 'Él pone las llaves aquí.',
      correctSentence: 'He puts his keys here.',
      tokens: ['He', 'puts', 'his', 'keys', 'here.'],
      explanationEn: 'Third person singular "puts".',
      explanationEs: 'He puts his keys here (5 palabras).'
    },
    {
      id: 'put-sb-c5',
      type: 'sentence-builder',
      spanishPrompt: 'Ellos han puesto nuevas reglas.',
      correctSentence: 'They have put new rules.',
      tokens: ['They', 'have', 'put', 'new', 'rules.'],
      explanationEn: 'Past participle is "put".',
      explanationEs: 'Participio invariable put (5 palabras).'
    }
  ],

  // 27. MEAN
  27: [
    {
      id: 'mean-sb-c1',
      type: 'sentence-builder',
      spanishPrompt: '¿Qué significa esta palabra nueva?',
      correctSentence: 'What does this word mean?',
      tokens: ['What', 'does', 'this', 'word', 'mean?'],
      explanationEn: 'Question form with auxiliary "does".',
      explanationEs: 'What does this word mean (5 palabras).'
    },
    {
      id: 'mean-sb-c2',
      type: 'sentence-builder',
      spanishPrompt: 'Quise decir exactamente eso ayer.',
      correctSentence: 'I meant that yesterday clearly.',
      tokens: ['I', 'meant', 'that', 'yesterday', 'clearly.'],
      explanationEn: 'Past simple of "mean" is "meant".',
      explanationEs: 'Pasado irregular meant (5 palabras).'
    },
    {
      id: 'mean-sb-c3',
      type: 'sentence-builder',
      spanishPrompt: 'Ella quiso decir algo diferente.',
      correctSentence: 'She meant something quite different.',
      tokens: ['She', 'meant', 'something', 'quite', 'different.'],
      explanationEn: 'Past tense: meant.',
      explanationEs: 'She meant something quite different (5 palabras).'
    },
    {
      id: 'mean-sb-c4',
      type: 'sentence-builder',
      spanishPrompt: 'Ellos significan mucho para mí.',
      correctSentence: 'They mean a lot to me.',
      tokens: ['They', 'mean', 'a', 'lot', 'to', 'me.'],
      explanationEn: 'Idiomatic expression: mean a lot to.',
      explanationEs: 'They mean a lot to me (6 palabras).'
    },
    {
      id: 'mean-sb-c5',
      type: 'sentence-builder',
      spanishPrompt: 'Esto significa un gran cambio.',
      correctSentence: 'This means a big change.',
      tokens: ['This', 'means', 'a', 'big', 'change.'],
      explanationEn: 'Singular pronoun "This" takes "means".',
      explanationEs: 'This means a big change (5 palabras).'
    }
  ],

  // 28. KEEP
  28: [
    {
      id: 'keep-sb-c1',
      type: 'sentence-builder',
      spanishPrompt: 'Mantén la calma siempre hoy.',
      correctSentence: 'Keep calm and carry on.',
      tokens: ['Keep', 'calm', 'and', 'carry', 'on.'],
      explanationEn: 'Imperative: keep calm.',
      explanationEs: 'Keep calm and carry on (5 palabras).'
    },
    {
      id: 'keep-sb-c2',
      type: 'sentence-builder',
      spanishPrompt: 'Ella mantuvo su promesa sincera.',
      correctSentence: 'She kept her promise always.',
      tokens: ['She', 'kept', 'her', 'promise', 'always.'],
      explanationEn: 'Past simple of "keep" is "kept".',
      explanationEs: 'Pasado irregular kept (5 palabras).'
    },
    {
      id: 'keep-sb-c3',
      type: 'sentence-builder',
      spanishPrompt: 'Sigue practicando tu inglés diario.',
      correctSentence: 'Keep practicing your English daily.',
      tokens: ['Keep', 'practicing', 'your', 'English', 'daily.'],
      explanationEn: '"Keep" + gerund indicates continuation.',
      explanationEs: 'Keep + gerundio (5 palabras).'
    },
    {
      id: 'keep-sb-c4',
      type: 'sentence-builder',
      spanishPrompt: 'Nosotros guardamos el secreto bien.',
      correctSentence: 'We kept the secret well.',
      tokens: ['We', 'kept', 'the', 'secret', 'well.'],
      explanationEn: 'Past simple "kept".',
      explanationEs: 'We kept the secret well (5 palabras).'
    },
    {
      id: 'keep-sb-c5',
      type: 'sentence-builder',
      spanishPrompt: 'Él guarda su dinero seguro.',
      correctSentence: 'He keeps his money safe.',
      tokens: ['He', 'keeps', 'his', 'money', 'safe.'],
      explanationEn: 'Third person singular "keeps".',
      explanationEs: 'He keeps his money safe (5 palabras).'
    }
  ],

  // 29. LET
  29: [
    {
      id: 'let-sb-c1',
      type: 'sentence-builder',
      spanishPrompt: 'Déjame saber si necesitas algo.',
      correctSentence: 'Please let me know soon.',
      tokens: ['Please', 'let', 'me', 'know', 'soon.'],
      explanationEn: 'Collocation: let me know.',
      explanationEs: 'Please let me know soon (5 palabras).'
    },
    {
      id: 'let-sb-c2',
      type: 'sentence-builder',
      spanishPrompt: 'Ella lo dejó ir libre.',
      correctSentence: 'She let him go free.',
      tokens: ['She', 'let', 'him', 'go', 'free.'],
      explanationEn: 'Invariable past "let".',
      explanationEs: 'Pasado invariable let (5 palabras).'
    },
    {
      id: 'let-sb-c3',
      type: 'sentence-builder',
      spanishPrompt: 'Vamos a empezar ahora mismo.',
      correctSentence: 'Let us begin right now.',
      tokens: ['Let', 'us', 'begin', 'right', 'now.'],
      explanationEn: 'Cohortative invitation: Let us begin.',
      explanationEs: 'Let us begin right now (5 palabras).'
    },
    {
      id: 'let-sb-c4',
      type: 'sentence-builder',
      spanishPrompt: 'Ellos nos permitieron entrar primero.',
      correctSentence: 'They let us in first.',
      tokens: ['They', 'let', 'us', 'in', 'first.'],
      explanationEn: 'Past simple: let us in.',
      explanationEs: 'They let us in first (5 palabras).'
    },
    {
      id: 'let-sb-c5',
      type: 'sentence-builder',
      spanishPrompt: 'No te des por vencido.',
      correctSentence: 'Never let yourself down now.',
      tokens: ['Never', 'let', 'yourself', 'down', 'now.'],
      explanationEn: 'Imperative with let.',
      explanationEs: 'Never let yourself down now (5 palabras).'
    }
  ],

  // 30. BEGIN
  30: [
    {
      id: 'begin-sb-c1',
      type: 'sentence-builder',
      spanishPrompt: 'La clase comenzó a tiempo.',
      correctSentence: 'The class began on time.',
      tokens: ['The', 'class', 'began', 'on', 'time.'],
      explanationEn: 'Past simple of "begin" is "began".',
      explanationEs: 'Pasado irregular began (5 palabras).'
    },
    {
      id: 'begin-sb-c2',
      type: 'sentence-builder',
      spanishPrompt: 'Comencemos nuestro trabajo hoy temprano.',
      correctSentence: 'Let us begin our work.',
      tokens: ['Let', 'us', 'begin', 'our', 'work.'],
      explanationEn: 'Infinitive with let: begin.',
      explanationEs: 'Let us begin our work (5 palabras).'
    },
    {
      id: 'begin-sb-c3',
      type: 'sentence-builder',
      spanishPrompt: 'El concierto ha comenzado ya.',
      correctSentence: 'The concert has begun already.',
      tokens: ['The', 'concert', 'has', 'begun', 'already.'],
      explanationEn: 'Past participle is "begun".',
      explanationEs: 'Participio begun con has (5 palabras).'
    },
    {
      id: 'begin-sb-c4',
      type: 'sentence-builder',
      spanishPrompt: 'Ellos comienzan temprano cada día.',
      correctSentence: 'They begin early every day.',
      tokens: ['They', 'begin', 'early', 'every', 'day.'],
      explanationEn: 'Present simple "begin".',
      explanationEs: 'They begin early every day (5 palabras).'
    },
    {
      id: 'begin-sb-c5',
      type: 'sentence-builder',
      spanishPrompt: 'Un nuevo viaje comienza hoy.',
      correctSentence: 'A new journey begins today.',
      tokens: ['A', 'new', 'journey', 'begins', 'today.'],
      explanationEn: 'Singular subject takes "begins".',
      explanationEs: 'A new journey begins today (5 palabras).'
    }
  ],

  // 31. SEEM
  31: [
    {
      id: 'seem-sb-c1',
      type: 'sentence-builder',
      spanishPrompt: 'Ella parece muy feliz hoy.',
      correctSentence: 'She seems very happy today.',
      tokens: ['She', 'seems', 'very', 'happy', 'today.'],
      explanationEn: 'Third person singular "seems".',
      explanationEs: 'She seems very happy today (5 palabras).'
    },
    {
      id: 'seem-sb-c2',
      type: 'sentence-builder',
      spanishPrompt: 'Parecía una buena idea ayer.',
      correctSentence: 'It seemed a good idea.',
      tokens: ['It', 'seemed', 'a', 'good', 'idea.'],
      explanationEn: 'Past simple regular "seemed".',
      explanationEs: 'It seemed a good idea (5 palabras).'
    },
    {
      id: 'seem-sb-c3',
      type: 'sentence-builder',
      spanishPrompt: 'Ellos parecen estar muy listos.',
      correctSentence: 'They seem ready for it.',
      tokens: ['They', 'seem', 'ready', 'for', 'it.'],
      explanationEn: 'Linking verb seem.',
      explanationEs: 'They seem ready for it (5 palabras).'
    },
    {
      id: 'seem-sb-c4',
      type: 'sentence-builder',
      spanishPrompt: 'Todo parece estar en orden.',
      correctSentence: 'Everything seems fine right now.',
      tokens: ['Everything', 'seems', 'fine', 'right', 'now.'],
      explanationEn: 'Indefinite pronoun takes singular "seems".',
      explanationEs: 'Everything seems fine right now (5 palabras).'
    },
    {
      id: 'seem-sb-c5',
      type: 'sentence-builder',
      spanishPrompt: 'Parecías cansado anoche.',
      correctSentence: 'You seemed tired last night.',
      tokens: ['You', 'seemed', 'tired', 'last', 'night.'],
      explanationEn: 'Past simple: seemed.',
      explanationEs: 'You seemed tired last night (5 palabras).'
    }
  ],

  // 32. HELP
  32: [
    {
      id: 'help-sb-c1',
      type: 'sentence-builder',
      spanishPrompt: 'Ella ayudó a su hermano.',
      correctSentence: 'She helped her younger brother.',
      tokens: ['She', 'helped', 'her', 'younger', 'brother.'],
      explanationEn: 'Past simple regular "helped".',
      explanationEs: 'She helped her younger brother (5 palabras).'
    },
    {
      id: 'help-sb-c2',
      type: 'sentence-builder',
      spanishPrompt: 'Nos ayudamos mutuamente cada día.',
      correctSentence: 'We help each other daily.',
      tokens: ['We', 'help', 'each', 'other', 'daily.'],
      explanationEn: 'Reciprocal pronoun "each other".',
      explanationEs: 'We help each other daily (5 palabras).'
    },
    {
      id: 'help-sb-c3',
      type: 'sentence-builder',
      spanishPrompt: 'Por favor ayúdame con esto.',
      correctSentence: 'Please help me with this.',
      tokens: ['Please', 'help', 'me', 'with', 'this.'],
      explanationEn: 'Imperative with "help me".',
      explanationEs: 'Please help me with this (5 palabras).'
    },
    {
      id: 'help-sb-c4',
      type: 'sentence-builder',
      spanishPrompt: 'Ellos han ayudado a muchos.',
      correctSentence: 'They have helped many people.',
      tokens: ['They', 'have', 'helped', 'many', 'people.'],
      explanationEn: 'Present perfect: have helped.',
      explanationEs: 'They have helped many people (5 palabras).'
    },
    {
      id: 'help-sb-c5',
      type: 'sentence-builder',
      spanishPrompt: 'Te ayudaré con mucho gusto.',
      correctSentence: 'I will help you gladly.',
      tokens: ['I', 'will', 'help', 'you', 'gladly.'],
      explanationEn: 'Future with will help.',
      explanationEs: 'I will help you gladly (5 palabras).'
    }
  ],

  // 33. TALK
  33: [
    {
      id: 'talk-sb-c1',
      type: 'sentence-builder',
      spanishPrompt: 'Hablamos sobre el examen ayer.',
      correctSentence: 'We talked about the exam.',
      tokens: ['We', 'talked', 'about', 'the', 'exam.'],
      explanationEn: 'Past simple regular "talked".',
      explanationEs: 'We talked about the exam (5 palabras).'
    },
    {
      id: 'talk-sb-c2',
      type: 'sentence-builder',
      spanishPrompt: 'Ella habla con mucha confianza.',
      correctSentence: 'She talks with great confidence.',
      tokens: ['She', 'talks', 'with', 'great', 'confidence.'],
      explanationEn: 'Third person singular "talks".',
      explanationEs: 'She talks with great confidence (5 palabras).'
    },
    {
      id: 'talk-sb-c3',
      type: 'sentence-builder',
      spanishPrompt: 'Hablaremos de esto más tarde.',
      correctSentence: 'We will talk later today.',
      tokens: ['We', 'will', 'talk', 'later', 'today.'],
      explanationEn: 'Future with will talk.',
      explanationEs: 'We will talk later today (5 palabras).'
    },
    {
      id: 'talk-sb-c4',
      type: 'sentence-builder',
      spanishPrompt: 'Ellos hablaron con el profesor.',
      correctSentence: 'They talked to the teacher.',
      tokens: ['They', 'talked', 'to', 'the', 'teacher.'],
      explanationEn: 'Collocation: talk to.',
      explanationEs: 'They talked to the teacher (5 palabras).'
    },
    {
      id: 'talk-sb-c5',
      type: 'sentence-builder',
      spanishPrompt: 'Por favor habla más despacio.',
      correctSentence: 'Please talk a bit slower.',
      tokens: ['Please', 'talk', 'a', 'bit', 'slower.'],
      explanationEn: 'Imperative talk.',
      explanationEs: 'Please talk a bit slower (5 palabras).'
    }
  ],

  // 34. TURN
  34: [
    {
      id: 'turn-sb-c1',
      type: 'sentence-builder',
      spanishPrompt: 'Gira a la derecha aquí.',
      correctSentence: 'Turn right at this corner.',
      tokens: ['Turn', 'right', 'at', 'this', 'corner.'],
      explanationEn: 'Direction imperative: Turn right.',
      explanationEs: 'Turn right at this corner (5 palabras).'
    },
    {
      id: 'turn-sb-c2',
      type: 'sentence-builder',
      spanishPrompt: 'Ella apagó la luz anoche.',
      correctSentence: 'She turned off the light.',
      tokens: ['She', 'turned', 'off', 'the', 'light.'],
      explanationEn: 'Phrasal verb: turn off.',
      explanationEs: 'She turned off the light (5 palabras).'
    },
    {
      id: 'turn-sb-c3',
      type: 'sentence-builder',
      spanishPrompt: 'Enciende la música por favor.',
      correctSentence: 'Please turn on the music.',
      tokens: ['Please', 'turn', 'on', 'the', 'music.'],
      explanationEn: 'Phrasal verb: turn on.',
      explanationEs: 'Please turn on the music (5 palabras).'
    },
    {
      id: 'turn-sb-c4',
      type: 'sentence-builder',
      spanishPrompt: 'Las hojas cambiaron a amarillo.',
      correctSentence: 'Leaves turned yellow in autumn.',
      tokens: ['Leaves', 'turned', 'yellow', 'in', 'autumn.'],
      explanationEn: 'Linking verb turn.',
      explanationEs: 'Leaves turned yellow in autumn (5 palabras).'
    },
    {
      id: 'turn-sb-c5',
      type: 'sentence-builder',
      spanishPrompt: 'Es tu turno de jugar.',
      correctSentence: 'It is your turn now.',
      tokens: ['It', 'is', 'your', 'turn', 'now.'],
      explanationEn: 'Noun phrase with turn.',
      explanationEs: 'It is your turn now (5 palabras).'
    }
  ],

  // 35. START
  35: [
    {
      id: 'start-sb-c1',
      type: 'sentence-builder',
      spanishPrompt: 'Comenzamos la lección temprano hoy.',
      correctSentence: 'We started the lesson early.',
      tokens: ['We', 'started', 'the', 'lesson', 'early.'],
      explanationEn: 'Past simple regular "started".',
      explanationEs: 'We started the lesson early (5 palabras).'
    },
    {
      id: 'start-sb-c2',
      type: 'sentence-builder',
      spanishPrompt: 'Ella comienza un nuevo curso.',
      correctSentence: 'She starts a new course.',
      tokens: ['She', 'starts', 'a', 'new', 'course.'],
      explanationEn: 'Third person singular "starts".',
      explanationEs: 'She starts a new course (5 palabras).'
    },
    {
      id: 'start-sb-c3',
      type: 'sentence-builder',
      spanishPrompt: 'Comencemos ahora mismo todos juntos.',
      correctSentence: 'Let us start right now.',
      tokens: ['Let', 'us', 'start', 'right', 'now.'],
      explanationEn: 'Cohortative invitation: Let us start.',
      explanationEs: 'Let us start right now (5 palabras).'
    },
    {
      id: 'start-sb-c4',
      type: 'sentence-builder',
      spanishPrompt: 'Empezó a llover muy fuerte.',
      correctSentence: 'It started raining very hard.',
      tokens: ['It', 'started', 'raining', 'very', 'hard.'],
      explanationEn: '"Start" + gerund.',
      explanationEs: 'It started raining very hard (5 palabras).'
    },
    {
      id: 'start-sb-c5',
      type: 'sentence-builder',
      spanishPrompt: 'Comenzaré mi proyecto mañana temprano.',
      correctSentence: 'I will start my project.',
      tokens: ['I', 'will', 'start', 'my', 'project.'],
      explanationEn: 'Future with will start.',
      explanationEs: 'I will start my project (5 palabras).'
    }
  ],

  // 36. SHOW
  36: [
    {
      id: 'show-sb-c1',
      type: 'sentence-builder',
      spanishPrompt: 'Ella me mostró sus fotos.',
      correctSentence: 'She showed me her pictures.',
      tokens: ['She', 'showed', 'me', 'her', 'pictures.'],
      explanationEn: 'Past simple regular form "showed".',
      explanationEs: 'She showed me her pictures (5 palabras).'
    },
    {
      id: 'show-sb-c2',
      type: 'sentence-builder',
      spanishPrompt: 'Te mostraré el camino correcto.',
      correctSentence: 'I will show you around.',
      tokens: ['I', 'will', 'show', 'you', 'around.'],
      explanationEn: 'Future with will show.',
      explanationEs: 'I will show you around (5 palabras).'
    },
    {
      id: 'show-sb-c3',
      type: 'sentence-builder',
      spanishPrompt: 'Los datos han mostrado mejoras.',
      correctSentence: 'Data has shown clear progress.',
      tokens: ['Data', 'has', 'shown', 'clear', 'progress.'],
      explanationEn: 'Past participle "shown" with has.',
      explanationEs: 'Participio irregular shown (5 palabras).'
    },
    {
      id: 'show-sb-c4',
      type: 'sentence-builder',
      spanishPrompt: 'Por favor muéstrame tu identificación.',
      correctSentence: 'Please show your official ID.',
      tokens: ['Please', 'show', 'your', 'official', 'ID.'],
      explanationEn: 'Imperative: show.',
      explanationEs: 'Please show your official ID (5 palabras).'
    },
    {
      id: 'show-sb-c5',
      type: 'sentence-builder',
      spanishPrompt: 'Ellos muestran gran respeto siempre.',
      correctSentence: 'They show great respect always.',
      tokens: ['They', 'show', 'great', 'respect', 'always.'],
      explanationEn: 'Present simple "show".',
      explanationEs: 'They show great respect always (5 palabras).'
    }
  ],

  // 37. HEAR
  37: [
    {
      id: 'hear-sb-c1',
      type: 'sentence-builder',
      spanishPrompt: 'Escuché las buenas noticias hoy.',
      correctSentence: 'I heard the good news.',
      tokens: ['I', 'heard', 'the', 'good', 'news.'],
      explanationEn: 'Past simple of "hear" is "heard".',
      explanationEs: 'Pasado irregular heard (5 palabras).'
    },
    {
      id: 'hear-sb-c2',
      type: 'sentence-builder',
      spanishPrompt: 'Ella escuchó un sonido extraño.',
      correctSentence: 'She heard a strange noise.',
      tokens: ['She', 'heard', 'a', 'strange', 'noise.'],
      explanationEn: 'Past simple "heard".',
      explanationEs: 'She heard a strange noise (5 palabras).'
    },
    {
      id: 'hear-sb-c3',
      type: 'sentence-builder',
      spanishPrompt: '¿Puedes escucharme con claridad?',
      correctSentence: 'Can you hear me clearly?',
      tokens: ['Can', 'you', 'hear', 'me', 'clearly?'],
      explanationEn: 'Modal "Can" + base verb "hear".',
      explanationEs: 'Can you hear me clearly (5 palabras).'
    },
    {
      id: 'hear-sb-c4',
      type: 'sentence-builder',
      spanishPrompt: 'Hemos escuchado sobre este proyecto.',
      correctSentence: 'We have heard about it.',
      tokens: ['We', 'have', 'heard', 'about', 'it.'],
      explanationEn: 'Past participle "heard".',
      explanationEs: 'Participio heard con have (5 palabras).'
    },
    {
      id: 'hear-sb-c5',
      type: 'sentence-builder',
      spanishPrompt: 'Ellos escuchan música todos los días.',
      correctSentence: 'They hear great music daily.',
      tokens: ['They', 'hear', 'great', 'music', 'daily.'],
      explanationEn: 'Present simple "hear".',
      explanationEs: 'They hear great music daily (5 palabras).'
    }
  ],

  // 38. PLAY
  38: [
    {
      id: 'play-sb-c1',
      type: 'sentence-builder',
      spanishPrompt: 'Ellos jugaron fútbol muy bien.',
      correctSentence: 'They played soccer very well.',
      tokens: ['They', 'played', 'soccer', 'very', 'well.'],
      explanationEn: 'Past simple regular "played".',
      explanationEs: 'They played soccer very well (5 palabras).'
    },
    {
      id: 'play-sb-c2',
      type: 'sentence-builder',
      spanishPrompt: 'Ella toca la guitarra hermosamente.',
      correctSentence: 'She plays the guitar beautifully.',
      tokens: ['She', 'plays', 'the', 'guitar', 'beautifully.'],
      explanationEn: 'Third person singular "plays" + instrument with "the".',
      explanationEs: 'She plays the guitar beautifully (5 palabras).'
    },
    {
      id: 'play-sb-c3',
      type: 'sentence-builder',
      spanishPrompt: 'Nosotros jugamos juntos los fines.',
      correctSentence: 'We play games on weekends.',
      tokens: ['We', 'play', 'games', 'on', 'weekends.'],
      explanationEn: 'Present simple "play".',
      explanationEs: 'We play games on weekends (5 palabras).'
    },
    {
      id: 'play-sb-c4',
      type: 'sentence-builder',
      spanishPrompt: 'Él juega un rol importante.',
      correctSentence: 'He plays an important role.',
      tokens: ['He', 'plays', 'an', 'important', 'role.'],
      explanationEn: 'Collocation: play a role.',
      explanationEs: 'He plays an important role (5 palabras).'
    },
    {
      id: 'play-sb-c5',
      type: 'sentence-builder',
      spanishPrompt: 'Juguemos un partido ahora mismo.',
      correctSentence: 'Let us play a match.',
      tokens: ['Let', 'us', 'play', 'a', 'match.'],
      explanationEn: 'Invitation: Let us play.',
      explanationEs: 'Let us play a match (5 palabras).'
    }
  ],

  // 39. RUN
  39: [
    {
      id: 'run-sb-c1',
      type: 'sentence-builder',
      spanishPrompt: 'Él corrió muy rápido ayer.',
      correctSentence: 'He ran very fast yesterday.',
      tokens: ['He', 'ran', 'very', 'fast', 'yesterday.'],
      explanationEn: 'Past simple of "run" is "ran".',
      explanationEs: 'Pasado irregular ran (5 palabras).'
    },
    {
      id: 'run-sb-c2',
      type: 'sentence-builder',
      spanishPrompt: 'Ella corre en el parque.',
      correctSentence: 'She runs in the park.',
      tokens: ['She', 'runs', 'in', 'the', 'park.'],
      explanationEn: 'Third person singular "runs".',
      explanationEs: 'She runs in the park (5 palabras).'
    },
    {
      id: 'run-sb-c3',
      type: 'sentence-builder',
      spanishPrompt: 'Ellos han corrido diez kilómetros.',
      correctSentence: 'They have run ten kilometers.',
      tokens: ['They', 'have', 'run', 'ten', 'kilometers.'],
      explanationEn: 'Past participle is "run".',
      explanationEs: 'Participio run con have (5 palabras).'
    },
    {
      id: 'run-sb-c4',
      type: 'sentence-builder',
      spanishPrompt: 'Corremos juntos cada mañana temprano.',
      correctSentence: 'We run together every morning.',
      tokens: ['We', 'run', 'together', 'every', 'morning.'],
      explanationEn: 'Present simple "run".',
      explanationEs: 'We run together every morning (5 palabras).'
    },
    {
      id: 'run-sb-c5',
      type: 'sentence-builder',
      spanishPrompt: 'El tiempo se acaba rápido.',
      correctSentence: 'Time runs out very quickly.',
      tokens: ['Time', 'runs', 'out', 'very', 'quickly.'],
      explanationEn: 'Phrasal verb: run out.',
      explanationEs: 'Time runs out very quickly (5 palabras).'
    }
  ],

  // 40. MOVE
  40: [
    {
      id: 'move-sb-c1',
      type: 'sentence-builder',
      spanishPrompt: 'Nos mudamos a una casa.',
      correctSentence: 'We moved to a house.',
      tokens: ['We', 'moved', 'to', 'a', 'house.'],
      explanationEn: 'Past simple regular "moved".',
      explanationEs: 'We moved to a house (5 palabras).'
    },
    {
      id: 'move-sb-c2',
      type: 'sentence-builder',
      spanishPrompt: 'Ella se mueve con elegancia.',
      correctSentence: 'She moves with great grace.',
      tokens: ['She', 'moves', 'with', 'great', 'grace.'],
      explanationEn: 'Third person singular "moves".',
      explanationEs: 'She moves with great grace (5 palabras).'
    },
    {
      id: 'move-sb-c3',
      type: 'sentence-builder',
      spanishPrompt: 'Avancemos hacia adelante con optimismo.',
      correctSentence: 'Let us move forward now.',
      tokens: ['Let', 'us', 'move', 'forward', 'now.'],
      explanationEn: 'Phrasal: move forward.',
      explanationEs: 'Let us move forward now (5 palabras).'
    },
    {
      id: 'move-sb-c4',
      type: 'sentence-builder',
      spanishPrompt: 'Por favor muévete un poco.',
      correctSentence: 'Please move over a little.',
      tokens: ['Please', 'move', 'over', 'a', 'little.'],
      explanationEn: 'Imperative: move over.',
      explanationEs: 'Please move over a little (5 palabras).'
    },
    {
      id: 'move-sb-c5',
      type: 'sentence-builder',
      spanishPrompt: 'Ellos han movido el horario.',
      correctSentence: 'They moved the meeting time.',
      tokens: ['They', 'moved', 'the', 'meeting', 'time.'],
      explanationEn: 'Past simple "moved".',
      explanationEs: 'They moved the meeting time (5 palabras).'
    }
  ],

  // 41. LIKE
  41: [
    {
      id: 'like-sb-c1',
      type: 'sentence-builder',
      spanishPrompt: 'A ella le gusta la música.',
      correctSentence: 'She likes classical music very much.',
      tokens: ['She', 'likes', 'classical', 'music', 'very', 'much.'],
      explanationEn: 'Third person singular "likes".',
      explanationEs: 'She likes classical music very much (6 palabras).'
    },
    {
      id: 'like-sb-c2',
      type: 'sentence-builder',
      spanishPrompt: 'Nos gustó mucho la película.',
      correctSentence: 'We liked the movie yesterday.',
      tokens: ['We', 'liked', 'the', 'movie', 'yesterday.'],
      explanationEn: 'Past simple regular "liked".',
      explanationEs: 'We liked the movie yesterday (5 palabras).'
    },
    {
      id: 'like-sb-c3',
      type: 'sentence-builder',
      spanishPrompt: 'Me gusta aprender idiomas nuevos.',
      correctSentence: 'I like learning new languages.',
      tokens: ['I', 'like', 'learning', 'new', 'languages.'],
      explanationEn: '"Like" + gerund.',
      explanationEs: 'I like learning new languages (5 palabras).'
    },
    {
      id: 'like-sb-c4',
      type: 'sentence-builder',
      spanishPrompt: 'A ellos les gusta viajar.',
      correctSentence: 'They like to travel abroad.',
      tokens: ['They', 'like', 'to', 'travel', 'abroad.'],
      explanationEn: '"Like to" + infinitive.',
      explanationEs: 'They like to travel abroad (5 palabras).'
    },
    {
      id: 'like-sb-c5',
      type: 'sentence-builder',
      spanishPrompt: '¿Te gusta este nuevo diseño?',
      correctSentence: 'Do you like this design?',
      tokens: ['Do', 'you', 'like', 'this', 'design?'],
      explanationEn: 'Question form: Do you like.',
      explanationEs: 'Do you like this design (5 palabras).'
    }
  ],

  // 42. LIVE
  42: [
    {
      id: 'live-sb-c1',
      type: 'sentence-builder',
      spanishPrompt: 'Ella vive en una ciudad.',
      correctSentence: 'She lives in a city.',
      tokens: ['She', 'lives', 'in', 'a', 'city.'],
      explanationEn: 'Third person singular "lives".',
      explanationEs: 'She lives in a city (5 palabras).'
    },
    {
      id: 'live-sb-c2',
      type: 'sentence-builder',
      spanishPrompt: 'Vivimos en Bogotá por años.',
      correctSentence: 'We lived in Bogotá years.',
      tokens: ['We', 'lived', 'in', 'Bogotá', 'years.'],
      explanationEn: 'Past simple regular "lived".',
      explanationEs: 'We lived in Bogotá years (5 palabras).'
    },
    {
      id: 'live-sb-c3',
      type: 'sentence-builder',
      spanishPrompt: 'Ellos viven muy felices juntos.',
      correctSentence: 'They live happily together now.',
      tokens: ['They', 'live', 'happily', 'together', 'now.'],
      explanationEn: 'Present simple "live".',
      explanationEs: 'They live happily together now (5 palabras).'
    },
    {
      id: 'live-sb-c4',
      type: 'sentence-builder',
      spanishPrompt: 'He vivido aquí toda mi vida.',
      correctSentence: 'I have lived here always.',
      tokens: ['I', 'have', 'lived', 'here', 'always.'],
      explanationEn: 'Present perfect: have lived.',
      explanationEs: 'I have lived here always (5 palabras).'
    },
    {
      id: 'live-sb-c5',
      type: 'sentence-builder',
      spanishPrompt: 'Vive tu vida al máximo.',
      correctSentence: 'Live your life to maximum.',
      tokens: ['Live', 'your', 'life', 'to', 'maximum.'],
      explanationEn: 'Imperative: Live your life.',
      explanationEs: 'Live your life to maximum (5 palabras).'
    }
  ],

  // 43. BELIEVE
  43: [
    {
      id: 'believe-sb-c1',
      type: 'sentence-builder',
      spanishPrompt: 'Yo creo en tu potencial.',
      correctSentence: 'I believe in your potential.',
      tokens: ['I', 'believe', 'in', 'your', 'potential.'],
      explanationEn: 'Preposition "in" with "believe".',
      explanationEs: 'I believe in your potential (5 palabras).'
    },
    {
      id: 'believe-sb-c2',
      type: 'sentence-builder',
      spanishPrompt: 'Ella creyó en su sueño.',
      correctSentence: 'She believed in her dream.',
      tokens: ['She', 'believed', 'in', 'her', 'dream.'],
      explanationEn: 'Past simple regular "believed".',
      explanationEs: 'She believed in her dream (5 palabras).'
    },
    {
      id: 'believe-sb-c3',
      type: 'sentence-builder',
      spanishPrompt: 'Nosotros creemos en el cambio.',
      correctSentence: 'We believe in positive change.',
      tokens: ['We', 'believe', 'in', 'positive', 'change.'],
      explanationEn: 'Present simple "believe in".',
      explanationEs: 'We believe in positive change (5 palabras).'
    },
    {
      id: 'believe-sb-c4',
      type: 'sentence-builder',
      spanishPrompt: 'Ellos creen la noticia completamente.',
      correctSentence: 'They believe the news completely.',
      tokens: ['They', 'believe', 'the', 'news', 'completely.'],
      explanationEn: 'Present simple "believe".',
      explanationEs: 'They believe the news completely (5 palabras).'
    },
    {
      id: 'believe-sb-c5',
      type: 'sentence-builder',
      spanishPrompt: 'Siempre cree en ti mismo.',
      correctSentence: 'Always believe in yourself now.',
      tokens: ['Always', 'believe', 'in', 'yourself', 'now.'],
      explanationEn: 'Imperative with reflexive pronoun.',
      explanationEs: 'Always believe in yourself now (5 palabras).'
    }
  ],

  // 44. HOLD
  44: [
    {
      id: 'hold-sb-c1',
      type: 'sentence-builder',
      spanishPrompt: 'Ella sostuvo el paraguas firmemente.',
      correctSentence: 'She held the umbrella firmly.',
      tokens: ['She', 'held', 'the', 'umbrella', 'firmly.'],
      explanationEn: 'Past simple of "hold" is "held".',
      explanationEs: 'Pasado irregular held (5 palabras).'
    },
    {
      id: 'hold-sb-c2',
      type: 'sentence-builder',
      spanishPrompt: 'Por favor sostén esto un momento.',
      correctSentence: 'Please hold this a moment.',
      tokens: ['Please', 'hold', 'this', 'a', 'moment.'],
      explanationEn: 'Imperative: hold this.',
      explanationEs: 'Please hold this a moment (5 palabras).'
    },
    {
      id: 'hold-sb-c3',
      type: 'sentence-builder',
      spanishPrompt: 'Celebramos una reunión importante ayer.',
      correctSentence: 'We held an important meeting.',
      tokens: ['We', 'held', 'an', 'important', 'meeting.'],
      explanationEn: 'Past simple: held a meeting.',
      explanationEs: 'We held an important meeting (5 palabras).'
    },
    {
      id: 'hold-sb-c4',
      type: 'sentence-builder',
      spanishPrompt: 'Él sostiene una posición destacada.',
      correctSentence: 'He holds a key position.',
      tokens: ['He', 'holds', 'a', 'key', 'position.'],
      explanationEn: 'Third person singular "holds".',
      explanationEs: 'He holds a key position (5 palabras).'
    },
    {
      id: 'hold-sb-c5',
      type: 'sentence-builder',
      spanishPrompt: 'Ellos sostienen sus valores fuertemente.',
      correctSentence: 'They hold strong moral values.',
      tokens: ['They', 'hold', 'strong', 'moral', 'values.'],
      explanationEn: 'Present simple "hold values".',
      explanationEs: 'They hold strong moral values (5 palabras).'
    }
  ],

  // 45. BRING
  45: [
    {
      id: 'bring-sb-c1',
      type: 'sentence-builder',
      spanishPrompt: 'Ella trajo comida deliciosa hoy.',
      correctSentence: 'She brought delicious food today.',
      tokens: ['She', 'brought', 'delicious', 'food', 'today.'],
      explanationEn: 'Past simple of "bring" is "brought".',
      explanationEs: 'Pasado irregular brought (5 palabras).'
    },
    {
      id: 'bring-sb-c2',
      type: 'sentence-builder',
      spanishPrompt: 'Trae tu cuaderno a clase.',
      correctSentence: 'Bring your notebook to class.',
      tokens: ['Bring', 'your', 'notebook', 'to', 'class.'],
      explanationEn: 'Imperative: Bring.',
      explanationEs: 'Bring your notebook to class (5 palabras).'
    },
    {
      id: 'bring-sb-c3',
      type: 'sentence-builder',
      spanishPrompt: 'Nosotros trajimos buenas noticias ayer.',
      correctSentence: 'We brought good news yesterday.',
      tokens: ['We', 'brought', 'good', 'news', 'yesterday.'],
      explanationEn: 'Past simple: brought good news.',
      explanationEs: 'We brought good news yesterday (5 palabras).'
    },
    {
      id: 'bring-sb-c4',
      type: 'sentence-builder',
      spanishPrompt: 'Él ha traído su experiencia.',
      correctSentence: 'He has brought great experience.',
      tokens: ['He', 'has', 'brought', 'great', 'experience.'],
      explanationEn: 'Past participle "brought" with has.',
      explanationEs: 'Participio brought (5 palabras).'
    },
    {
      id: 'bring-sb-c5',
      type: 'sentence-builder',
      spanishPrompt: 'Traeré más información mañana temprano.',
      correctSentence: 'I will bring more information.',
      tokens: ['I', 'will', 'bring', 'more', 'information.'],
      explanationEn: 'Future with will bring.',
      explanationEs: 'I will bring more information (5 palabras).'
    }
  ],

  // 46. HAPPEN
  46: [
    {
      id: 'happen-sb-c1',
      type: 'sentence-builder',
      spanishPrompt: 'Algo maravilloso sucedió ayer tarde.',
      correctSentence: 'Something wonderful happened yesterday.',
      tokens: ['Something', 'wonderful', 'happened', 'yesterday.'],
      explanationEn: 'Past simple regular "happened".',
      explanationEs: 'Something wonderful happened yesterday (4 palabras).'
    },
    {
      id: 'happen-sb-c2',
      type: 'sentence-builder',
      spanishPrompt: '¿Qué pasó aquí anoche?',
      correctSentence: 'What happened here last night?',
      tokens: ['What', 'happened', 'here', 'last', 'night?'],
      explanationEn: 'Question form: What happened.',
      explanationEs: 'What happened here last night (5 palabras).'
    },
    {
      id: 'happen-sb-c3',
      type: 'sentence-builder',
      spanishPrompt: 'Los accidentes ocurren a veces.',
      correctSentence: 'Accidents happen sometimes in life.',
      tokens: ['Accidents', 'happen', 'sometimes', 'in', 'life.'],
      explanationEn: 'Plural noun takes base verb "happen".',
      explanationEs: 'Accidents happen sometimes in life (5 palabras).'
    },
    {
      id: 'happen-sb-c4',
      type: 'sentence-builder',
      spanishPrompt: 'Esto sucede con frecuencia aquí.',
      correctSentence: 'This happens very frequently here.',
      tokens: ['This', 'happens', 'very', 'frequently', 'here.'],
      explanationEn: 'Singular subject "This" takes "happens".',
      explanationEs: 'This happens very frequently here (5 palabras).'
    },
    {
      id: 'happen-sb-c5',
      type: 'sentence-builder',
      spanishPrompt: 'Nada malo va a suceder.',
      correctSentence: 'Nothing bad will happen now.',
      tokens: ['Nothing', 'bad', 'will', 'happen', 'now.'],
      explanationEn: 'Future with modal "will happen".',
      explanationEs: 'Nothing bad will happen now (5 palabras).'
    }
  ],

  // 47. MUST
  47: [
    {
      id: 'must-sb-c1',
      type: 'sentence-builder',
      spanishPrompt: 'Debemos estudiar para el examen.',
      correctSentence: 'We must study for exams.',
      tokens: ['We', 'must', 'study', 'for', 'exams.'],
      explanationEn: 'Modal "must" + base verb "study".',
      explanationEs: 'We must study for exams (5 palabras).'
    },
    {
      id: 'must-sb-c2',
      type: 'sentence-builder',
      spanishPrompt: 'Debes ser muy cuidadoso siempre.',
      correctSentence: 'You must be very careful.',
      tokens: ['You', 'must', 'be', 'very', 'careful.'],
      explanationEn: 'Modal "must" + base "be".',
      explanationEs: 'You must be very careful (5 palabras).'
    },
    {
      id: 'must-sb-c3',
      type: 'sentence-builder',
      spanishPrompt: 'Ella debe llegar a tiempo.',
      correctSentence: 'She must arrive on time.',
      tokens: ['She', 'must', 'arrive', 'on', 'time.'],
      explanationEn: 'Modal "must" without -s on main verb.',
      explanationEs: 'She must arrive on time (5 palabras).'
    },
    {
      id: 'must-sb-c4',
      type: 'sentence-builder',
      spanishPrompt: 'Ellos tuvieron que salir temprano.',
      correctSentence: 'They had to leave early.',
      tokens: ['They', 'had', 'to', 'leave', 'early.'],
      explanationEn: 'Past of "must" is "had to".',
      explanationEs: 'Pasado de must es had to (5 palabras).'
    },
    {
      id: 'must-sb-c5',
      type: 'sentence-builder',
      spanishPrompt: 'Tuvimos que esperar una hora.',
      correctSentence: 'We had to wait long.',
      tokens: ['We', 'had', 'to', 'wait', 'long.'],
      explanationEn: 'Past obligation: had to wait.',
      explanationEs: 'We had to wait long (5 palabras).'
    }
  ],

  // 48. WRITE
  48: [
    {
      id: 'write-sb-c1',
      type: 'sentence-builder',
      spanishPrompt: 'Ella escribió un excelente ensayo.',
      correctSentence: 'She wrote an excellent essay.',
      tokens: ['She', 'wrote', 'an', 'excellent', 'essay.'],
      explanationEn: 'Past simple of "write" is "wrote".',
      explanationEs: 'Pasado irregular wrote (5 palabras).'
    },
    {
      id: 'write-sb-c2',
      type: 'sentence-builder',
      spanishPrompt: 'Escribo en mi diario diariamente.',
      correctSentence: 'I write in my journal.',
      tokens: ['I', 'write', 'in', 'my', 'journal.'],
      explanationEn: 'Present simple "write".',
      explanationEs: 'I write in my journal (5 palabras).'
    },
    {
      id: 'write-sb-c3',
      type: 'sentence-builder',
      spanishPrompt: 'Él ha escrito tres libros.',
      correctSentence: 'He has written three books.',
      tokens: ['He', 'has', 'written', 'three', 'books.'],
      explanationEn: 'Past participle "written" with has.',
      explanationEs: 'Participio written con has (5 palabras).'
    },
    {
      id: 'write-sb-c4',
      type: 'sentence-builder',
      spanishPrompt: 'Por favor escribe tu nombre.',
      correctSentence: 'Please write your name clearly.',
      tokens: ['Please', 'write', 'your', 'name', 'clearly.'],
      explanationEn: 'Imperative: write.',
      explanationEs: 'Please write your name clearly (5 palabras).'
    },
    {
      id: 'write-sb-c5',
      type: 'sentence-builder',
      spanishPrompt: 'Nosotros escribimos un reporte completo.',
      correctSentence: 'We wrote a full report.',
      tokens: ['We', 'wrote', 'a', 'full', 'report.'],
      explanationEn: 'Past simple "wrote".',
      explanationEs: 'We wrote a full report (5 palabras).'
    }
  ],

  // 49. PROVIDE
  49: [
    {
      id: 'provide-sb-c1',
      type: 'sentence-builder',
      spanishPrompt: 'Ella proporcionó información muy útil.',
      correctSentence: 'She provided very useful information.',
      tokens: ['She', 'provided', 'very', 'useful', 'information.'],
      explanationEn: 'Past simple regular "provided".',
      explanationEs: 'She provided very useful information (5 palabras).'
    },
    {
      id: 'provide-sb-c2',
      type: 'sentence-builder',
      spanishPrompt: 'Brindamos apoyo a los estudiantes.',
      correctSentence: 'We provide support to students.',
      tokens: ['We', 'provide', 'support', 'to', 'students.'],
      explanationEn: 'Present simple "provide".',
      explanationEs: 'We provide support to students (5 palabras).'
    },
    {
      id: 'provide-sb-c3',
      type: 'sentence-builder',
      spanishPrompt: 'Este curso provee grandes recursos.',
      correctSentence: 'This course provides great resources.',
      tokens: ['This', 'course', 'provides', 'great', 'resources.'],
      explanationEn: 'Third person singular "provides".',
      explanationEs: 'This course provides great resources (5 palabras).'
    },
    {
      id: 'provide-sb-c4',
      type: 'sentence-builder',
      spanishPrompt: 'Ellos han provisto excelentes soluciones.',
      correctSentence: 'They provided great solutions yesterday.',
      tokens: ['They', 'provided', 'great', 'solutions', 'yesterday.'],
      explanationEn: 'Past tense "provided".',
      explanationEs: 'They provided great solutions yesterday (5 palabras).'
    },
    {
      id: 'provide-sb-c5',
      type: 'sentence-builder',
      spanishPrompt: 'Proveeremos ayuda cuando sea necesario.',
      correctSentence: 'We will provide help soon.',
      tokens: ['We', 'will', 'provide', 'help', 'soon.'],
      explanationEn: 'Future with will provide.',
      explanationEs: 'We will provide help soon (5 palabras).'
    }
  ],

  // 50. SIT
  50: [
    {
      id: 'sit-sb-c1',
      type: 'sentence-builder',
      spanishPrompt: 'Él se sentó en la silla.',
      correctSentence: 'He sat in the chair.',
      tokens: ['He', 'sat', 'in', 'the', 'chair.'],
      explanationEn: 'Past simple of "sit" is "sat".',
      explanationEs: 'Pasado irregular sat (5 palabras).'
    },
    {
      id: 'sit-sb-c2',
      type: 'sentence-builder',
      spanishPrompt: 'Por favor siéntate aquí conmigo.',
      correctSentence: 'Please sit here with me.',
      tokens: ['Please', 'sit', 'here', 'with', 'me.'],
      explanationEn: 'Imperative: Please sit here.',
      explanationEs: 'Please sit here with me (5 palabras).'
    },
    {
      id: 'sit-sb-c3',
      type: 'sentence-builder',
      spanishPrompt: 'Nos sentamos en primera fila.',
      correctSentence: 'We sat in the front.',
      tokens: ['We', 'sat', 'in', 'the', 'front.'],
      explanationEn: 'Past simple "sat in".',
      explanationEs: 'We sat in the front (5 palabras).'
    },
    {
      id: 'sit-sb-c4',
      type: 'sentence-builder',
      spanishPrompt: 'Ella se sienta junto a mí.',
      correctSentence: 'She sits next to me.',
      tokens: ['She', 'sits', 'next', 'to', 'me.'],
      explanationEn: 'Third person singular "sits".',
      explanationEs: 'She sits next to me (5 palabras).'
    },
    {
      id: 'sit-sb-c5',
      type: 'sentence-builder',
      spanishPrompt: 'Ellos se han sentado juntos.',
      correctSentence: 'They have sat together always.',
      tokens: ['They', 'have', 'sat', 'together', 'always.'],
      explanationEn: 'Past participle is "sat".',
      explanationEs: 'Participio sat con have (5 palabras).'
    }
  ]
};
