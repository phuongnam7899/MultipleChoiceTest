const questionsBanks = [
  [
    {
      content: 'Vous (____) comment, Madame? - Marie LAPORTE.',
      answers: ['vous appelez ', 't’appelles ', 's’appelle', 'appelez'],
      correctAnswer: 0,
    },
    {
      content: 'Tu (____) anglaise? - Non, je (____) américaine.',
      answers: ['etes / as', 'as / ai', 'est / suis', 'es / suis'],
      correctAnswer: 3,
    },
    {
      content: 'Ton ami (____) à Paris? - Oui, dans la rue de Rivoli',
      answers: ['habite', 'habitez', 'habitons', 'habites'],
      correctAnswer: 0,
    },
    {
      content: 'Vous (____)  français ? - Oui, et je parle aussi italien',
      answers: ['parlons', 'parles', 'parlent', 'parlez'],
      correctAnswer: 3,
    },
    {
      content:
        'Ils aiment l"Italie ? - Oui, tous nos étudiants(____) bien l"Italie. ',
      answers: ['ainment', 'aimez', 'aime', 'aimons '],
      correctAnswer: 0,
    },
    {
      content: 'Ma soeur a (____) appartement à Rome?',
      answers: ['l’', 'une', 'des', 'un'],
      correctAnswer: 3,
    },
    {
      content: 'Mes voisins ont (_____) amis étrangers.',
      answers: ['des', 'un', 'l’', 'les '],
      correctAnswer: 0,
    },
    {
      content: 'Nous habitons maintenant (____) Amsterdam, (____) Hollande. ',
      answers: ['au / en', 'en / à', 'à / en', 'à / au'],
      correctAnswer: 2,
    },
    {
      content: 'Je travaille (____) restaurant de l’université?',
      answers: ['au', 'dans', 'à la ', 'chez'],
      correctAnswer: 0,
    },
    {
      content: 'Vous habitez où? - (___) mes parents',
      answers: ['au', 'dans', 'à la ', 'chez'],
      correctAnswer: 0,
    },
    {
      content: 'Nathalie et (____), nous allons au café ce soir',
      answers: ['moi', 'toi', 'lui', 'vous'],
      correctAnswer: 0,
    },
    {
      content: 'Il y a aussi les amis de Patrick. J"aime danser avec (____)',
      answers: ['toi', 'elles', 'nous', 'eux'],
      correctAnswer: 3,
    },
    {
      content: 'Tu aimes (____) maison? - Oui, c"est ma maison',
      answers: ['cet', 'ce', 'cette', 'ces'],
      correctAnswer: 2,
    },
    {
      content: 'Nous allons en Italie avec (____ )amies cette année',
      answers: ['nos', 'notre', 'mon', 'ta'],
      correctAnswer: 0,
    },
    {
      content: 'Sur la photo, l"homme juste devant moi, c"est (___) père ',
      answers: ['tes', 'ma', 'leurs', 'mon'],
      correctAnswer: 3,
    },
    {
      content: 'Ce sac est à toi? -  Non, il est à (____)',
      answers: ['ton', 'votre', 'ma', 'ses'],
      correctAnswer: 2,
    },
    {
      content: 'C"est votre chemise? - Oui, elle est à (____)',
      answers: ['moi', 'toi', 'vous', 'lui'],
      correctAnswer: 0,
    },
    {
      content: 'Paul et Marie, ce sont vos blousons? - Oui, ils sont à (____)',
      answers: ['vous', 'nous', 'leurs', 'eux'],
      correctAnswer: 1,
    },
    {
      content:
        'Ces fleurs sont à Hélène et à sa soeur? - Oui, elles sont à (___)',
      answers: ['eux', 'nous', 'elles', 'vous'],
      correctAnswer: 2,
    },
    {
      content: 'Dans (_____) immeuble, il y a mon appartement.',
      answers: ['ce', 'cette', 'ces', 'cet'],
      correctAnswer: 3,
    },
    {
      content: 'Ce garçon est ton fils et O fille, qui est-ce?',
      answers: ['cette', 'cet', 'ce', 'ces'],
      //TO-Do
      correctAnswer: 0,
    },
    {
      content: 'Sur (_____) etagère, il y a mes livres',
      answers: ['ce', 'cet', 'ces', 'cette'],
      correctAnswer: 3,
    },
    {
      content: '(_____) de ma table, il y a une fenêtre',
      answers: ['dans', 'sur', 'au-dessus', 'contre'],
      correctAnswer: 2,
    },
    {
      content: 'Ce week-end nous allons (____) Méxique',
      answers: ['au', 'en', 'à', 'aux'],
      correctAnswer: 0,
    },
    {
      content: 'J’habite (_____) une chambre (_____) l’hôtel Royal',
      answers: ['dans / à', 'à / dans', 'en / à', 'à / en'],
      correctAnswer: 0,
    },
    {
      content: 'J’ai un frère mais je n’ai pas (___) soeur',
      answers: ['de', 'une', 'des', 'un'],
      correctAnswer: 0,
    },
    {
      content:
        'C’est la voiture de Monsieur et de Madame Delvaux? - Oui, c’est (____) voiture',
      answers: ['votre', 'nos', 'ses', 'leur'],
      correctAnswer: 3,
    },
    {
      content: 'Sur (____) photo, c’est ma femme',
      answers: ['cette', 'ces', 'cet', 'ce'],
      correctAnswer: 0,
    },
    {
      content:
        'Julie aime beaucoup (___) danse, mais elle n’aime pas (____) sport',
      answers: ['le / la', 'le / le', ' la / la', 'la / le'],
      correctAnswer: 3,
    },
    {
      content: 'Dans ma chambre, il y a (____) tablet et (____) chaises',
      answers: ['une / les', 'une / des', 'un / des', 'la / les'],
      correctAnswer: 1,
    },
  ],
  [
    {
      content:
        'C’est (____) chapeau, monsieur? - Non, ce n’est pas (____) chapeau.',
      answers: ['ton/mon', 'votre/notre', 'mon/son', 'votre/mon'],
      correctAnswer: 3,
    },
    {
      content: 'Naoko est japonaise son père est (_____)',
      answers: ['polonaise', 'belge', 'japonaise', 'américaine'],
      correctAnswer: 1,
    },
    {
      content: '(____) est ton adresse e-mail? - C’est sandro@yahoo.fr',
      answers: ['quelle', 'quels', 'quelles', 'quel'],
      correctAnswer: 0,
    },
    {
      content:
        'Bonjour mes amis! Je suis vietnamien et (____) sont vos nationalités?',
      answers: ['quels', 'quelle', 'quelles', 'quel'],
      correctAnswer: 2,
    },
    {
      content: 'Salut Paul, ca va? - Oui, ca va bien, merci et (____)?',
      answers: ['vous', 'toi', 'moi', 'nous'],
      correctAnswer: 1,
    },
    {
      content: '591: (_____)',
      answers: [
        'Cinq cents quatre-vingt-onze',
        'Cinq cent quatre-vingt et onze',
        'Cinq cent quatre-vingts-onze',
        'Cinq cent quatre-vingt-onze',
      ],
      correctAnswer: 3,
    },
    {
      content:
        'Mon père est professeur et ma mère est (_____) dans un restaurant',
      answers: ['serveuse', 'dentiste', 'boulanger', 'voisine'],
      correctAnswer: 0,
    },
    {
      content:
        'Paola est (____), mais elle habite (____) Berlin, (____) Allemagne',
      answers: [
        'italien/en/à',
        'italienne/à/en',
        'italienne/à/au',
        'italien/à/en',
      ],
      correctAnswer: 1,
    },
    {
      content: 'Excusez-moi, vous (____) monsieur LAPORTE?',
      answers: ['avez', 'vous appelez', 'allex', 'êtes'],
      correctAnswer: 3,
    },
    {
      content: '(____) est-ce? C’est Anna, elle est polonaise',
      answers: ['Comment', 'Quelle', 'Où', 'Qui'],
      correctAnswer: 3,
    },
    {
      content: 'Je (____) canadien, je (____) Louis',
      answers: [
        'm’appelle/suis',
        'suis/t’appelles',
        'suis/m’appelle',
        'suit/m’appelle',
      ],
      correctAnswer: 2,
    },
    {
      content:
        'Quel est votre (____), mademoiselle? - Lervoy, je m’appelle Marie Lervoy',
      answers: ['nationalité', 'prénom', 'nom', 'profession'],
      correctAnswer: 2,
    },
    {
      content: ' Salut, Nicolas! Tu (___) bien? - Ca va bien, merci et toi?',
      answers: ['es', 'vas', 'as', 'aimes'],
      correctAnswer: 1,
    },
    {
      content:
        'Quelles langues est-ce que vous (____)? - Espagnol, anglais et italien',
      answers: ['parlez ', 'êtes', 'allez', 'prenez'],
      correctAnswer: 0,
    },
    {
      content: 'J’ai 20 ans et toi, tu as (____)?',
      answers: ['comment', 'qui', 'où', 'quel âge'],
      correctAnswer: 3,
    },
    {
      content: 'Quelle est ton (____)? - C’est: 19 rue Pasteur à Paris',
      answers: ['chambre', 'adresse', 'âge', 'numero de telephone'],
      correctAnswer: 1,
    },
    {
      content: 'Ma mère est chinoise et mon père est (____)',
      answers: ['suisse', 'vietnamienne', 'allemands', 'allemande'],
      correctAnswer: 0,
    },
    {
      content: '(_____) estudiante, c’est (____) amie?',
      answers: ['cet/ton', 'ce/ta', 'cette/ton', 'cette/ta'],
      correctAnswer: 2,
    },
    {
      content: 'Et ton mari, il s’appelle (____)? - Paul Martin',
      answers: ['quel nom', 'qui est-ce', 'comment', 'quel âge'],
      correctAnswer: 2,
    },
    {
      content: 'Quelle est la (____) de ton frère? - Il est boulanger',
      answers: ['nationalité', 'adresse', 'profession', 'nom '],
      correctAnswer: 2,
    },
    {
      content: ' La table est (____) le mur',
      answers: ['à côté de', 'contre', 'dans', 'au-dessus'],
      correctAnswer: 1,
    },
    {
      content: 'Les livres sont (____) l’étagère',
      answers: ['près', 'à gauche', 'sur', 'dans'],
      correctAnswer: 2,
    },
    {
      content: 'Le fauteuil est à (_____) de la porte et la chaise à droite',
      answers: ['contre', 'devant', 'derrière', 'gauche'],
      correctAnswer: 3,
    },
    {
      content: 'Les photos sont (____) mon sac',
      answers: ['à côté', 'dans', 'entre', 'à gauche'],
      correctAnswer: 1,
    },
    {
      content: ' La chaise est (____) la fenêtre et les étagères.',
      answers: ['dans', 'sur', 'entre', 'à côté'],
      correctAnswer: 2,
    },
    {
      content: 'Le chat est (____) la chaise',
      answers: ['dans', 'entre', 'au-dessous', 'sur'],
      correctAnswer: 3,
    },
    {
      content: 'Je n’aime pas les vêtements',
      answers: ['noires', 'noirs', 'blanches', 'blanc'],
      correctAnswer: 1,
    },
    {
      content: 'C’est une femme (____)',
      answers: ['blond', 'blonde', 'blondes', 'blonds'],
      correctAnswer: 1,
    },
    {
      content: ' Il a une chemise (_____)',
      answers: ['bleus', 'bleu', 'bleue', 'bleues'],
      correctAnswer: 2,
    },
    {
      content: 'Nous avons un chat (_____)',
      answers: [
        'blancs et gris',
        'blanche et grises',
        'blanc et gris',
        'blanches et grises',
      ],
      correctAnswer: 2,
    },
  ],
];

let questionsBankIndex = Number(localStorage.getItem('questionPack')) - 1;
const questionsBank = questionsBanks[questionsBankIndex];

const OneQuestion = (questionInfo, number, withAnswer) => {
  const { content, answers, correctAnswer, userAnswer } = questionInfo;
  if (withAnswer) {
    return `
            <div class="one-question" id="question-${number}">
                <div class="one-question__title">
                    <span class="one-question__title__number">${number}.</span>
                    <span class="one-question__title__content">${content}</span>
                </div>
                <div class='one-question__choices'>
                    ${answers.map((answer, index) => {
                      const isRed =
                        index === userAnswer && userAnswer !== correctAnswer;
                      const isGreen =
                        (index === userAnswer &&
                          userAnswer === correctAnswer) ||
                        index === correctAnswer;
                      return `
                      <div class='one-question__choices__one-choice disabled ${
                        isRed ? 'wrong-answer' : ''
                      } ${isGreen ? 'correct-answer' : ''}'>
                          ${['A', 'B', 'C', 'D'][index] + '. ' + answer}
                      </div>`;
                    })}
                </div>
            </div>
        `;
  } else {
    return `
    <div class="one-question" id="question-${number}">
    <div class="one-question__title">
        <span class="one-question__title__number">${number}.</span>
        <span class="one-question__title__content">${content}</span>
    </div>
    <div class='one-question__choices'>
        ${answers.map((answer, index) => {
          return `
          <div id=${
            (number - 1).toString() + '-' + index.toString()
          } class='one-question__choices__one-choice'>
          ${['A', 'B', 'C', 'D'][index] + '. ' + answer}
          </div>`;
        })}
    </div>
</div>
    `;
  }
};

const OneResultPreview = (number, isCorrect) => {
  const className = isCorrect ? 'correct-answer' : 'wrong-answer';
  return `<a href="#question-${number}" class="${className} one-result-preview">${number}</a>`;
};

const OneScoreRow = (dateString, score) => {
  if (score && dateString) {
    return `
   <div class="one-score-row">
      <span class="one-score-row__date">${dateString}</span>
      <span class="one-score-row__score">${score}</span>
   </div>`;
  } else return '';
};

const questionsZone = document.getElementById('questions-zone');
const resultsZone = document.getElementById('results-zone');
const submitBtn = document.getElementById('submit-btn');
const resultPreview = document.getElementById('result-preview');
const scoreListEl = document.getElementById('score-list');
const scoreZone = document.getElementById('score-zone');
const redoBtn = document.getElementById('redo-test-btn');
let score = 0;
let questionsShow = getRandomQuestions(10);

function getRandomQuestions(questionNumber) {
  const questionsBankCopy = [...questionsBank];

  const questions = [];
  for (let i = 0; i < questionNumber; i++) {
    let randomIndex = Math.floor(Math.random() * questionsBankCopy.length);
    questions.push(questionsBankCopy[randomIndex]);
    questionsBankCopy.splice(randomIndex, 1);
  }

  return questions;
}

function renderQuestions(questionsShow, showResult) {
  if (showResult) {
    resultsZone.innerHTML = '';
    questionsShow.forEach((question, index) => {
      resultsZone.innerHTML += OneQuestion(question, index + 1, showResult);
    });
  } else {
    questionsZone.innerHTML = '';
    questionsShow.forEach((question, index) => {
      questionsZone.innerHTML += OneQuestion(question, index + 1, showResult);
    });
    const questionAnswersEls = document.getElementsByClassName(
      'one-question__choices__one-choice',
    );
    for (let i = 0; i < questionAnswersEls.length; i++) {
      questionAnswersEls[i].onclick = (e) => {
        e.target.classList.add('selected-answer');
        questionsShow[
          Number(questionAnswersEls[i].id.split('-')[0])
        ].userAnswer = Number(questionAnswersEls[i].id.split('-')[1]);

        for (let i = 0; i < questionAnswersEls.length; i++) {
          if (
            questionAnswersEls[i].id.split('-')[0] ===
              e.target.id.split('-')[0] &&
            questionAnswersEls[i].id.split('-')[1] !== e.target.id.split('-')[1]
          ) {
            questionAnswersEls[i].classList.remove('selected-answer');
          }
        }
      };
    }
  }
}

function renderScoreList() {
  scoreListEl.innerHTML = '';
  const scoreListString = localStorage.getItem('score-list');
  const scoreStringArr = scoreListString ? scoreListString.split('|.|.|') : [];
  console.log(scoreStringArr);

  let scoreArr = scoreStringArr.map((scoreString) => {
    return scoreString.split('|.|');
  });
  console.log(scoreArr);

  scoreArr.forEach((score) => {
    console.log(score);
    scoreListEl.innerHTML += OneScoreRow(score[0], score[1]);
  });
}

const isCorrect = (question) => {
  return question.correctAnswer === question.userAnswer;
};

function renderOneResultPreview(questionsShow) {
  questionsShow.forEach((question, index) => {
    resultPreview.innerHTML += OneResultPreview(index + 1, isCorrect(question));
  });
}

const calcScore = (questionsShow) => {
  questionsShow.forEach((question) => {
    if (isCorrect(question)) score += 10 / questionsShow.length;
  });
  return score.toFixed(1);
};
const getCurrentTimeString = () => {
  let now = new Date();
  let nowString = `${now.getHours()}:${now.getMinutes()} ${now.getDate()}/${
    now.getMonth() + 1
  }/${now.getFullYear()}`;
  return nowString;
};

const saveScore = (questionsShow) => {
  console.log('saved');

  const newScore = calcScore(questionsShow);
  const timeString = getCurrentTimeString();
  const newScoreString = `${timeString}|.|${newScore}`;
  const scoreListString = localStorage.getItem('score-list') || '';
  const scoreStringList = scoreListString.split('|.|.|');
  if (scoreStringList.length >= 100)
    scoreStringList.splice(100, scoreStringList.length - 100);
  scoreStringList.unshift(newScoreString);
  let newScoreListString = scoreStringList.join('|.|.|');
  localStorage.setItem('score-list', newScoreListString);
};

const showResult = (questionsShow) => {
  questionsZone.innerHTML = '';
  resultPreview.innerHTML = '';
  submitBtn.style.display = 'none';
  resultPreview.style.display = 'flex';
  scoreZone.style.display = 'flex';
  renderQuestions(questionsShow, true);
  renderOneResultPreview(questionsShow);
  saveScore(questionsShow);
  renderScoreList();
};

const onSubmit = () => {
  showResult(questionsShow);
  window.scrollTop = 0;
  submitBtn.removeEventListener('click', onSubmit);
};

function restartTest() {
  score = 0;
  resultsZone.innerHTML = '';
  submitBtn.style.display = 'block';
  resultPreview.style.display = 'none';
  scoreZone.style.display = 'none';
  const questionsNumber = questionsBank.length < 20 ? questionsBank.length : 20;
  questionsShow = getRandomQuestions(questionsNumber);
  renderQuestions(questionsShow, false);
  submitBtn.addEventListener('click', onSubmit);
  window.scrollTo(0, 0);
}
restartTest();
redoBtn.addEventListener('click', restartTest);
