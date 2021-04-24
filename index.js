const quizSourcePath = './QuizSource.json';
const readLineSync = require('readline-sync');

const getQuizSource = (path) => {
  try {
    const quizSource = require(path);
    return quizSource;
  } catch (err) {
    console.log('[ERROR] Missing Quiz Source JSON');
    process.exit(1)
  }
}

const showWelcomeMessage = (title, description) => {
  console.log('Welcome to the Quiz App !!\n');
  console.log(title);
  console.log(description);
}

const showInstructions = () => {
  console.log('\nEach question will have 4 options with exactly 1 correct answer.');
  console.log('Please input the correct option [1, 2, 3 or 4] when prompted.\n');
  readLineSync.question('Press enter key to continue...\n');
}

const showScore = (correctAnswers, totalQuestions) => {
  console.log(`\nYour Score: ${correctAnswers}/${totalQuestions}`);
  console.log('Thank you for participating !!');
}

const runQuiz = (questions) => {
  showInstructions();
  let correctAnswers = 0;
  let questionNumber = 1;
  for (const questionObj of questions) {
    const { question, options, answer: expectedAnswer } = questionObj;
    console.log(`\nQuestion ${questionNumber}`);
    console.log(question);
    for (const [optionKey, optionValue] of Object.entries(options)) {
      console.log(`${optionKey}:\t${optionValue}`);
    }
    const actualAnswer = readLineSync.question('Your answer: ');
    if (actualAnswer === expectedAnswer) {
      correctAnswers += 1;
      console.log('Correct answer!');
    } else {
      console.log('Incorrect answer. The correct option is:', expectedAnswer);
    }
    questionNumber += 1;
  }
  return correctAnswers;
}

const main = () => {
  const quizSource = getQuizSource(quizSourcePath);
  const { title, description, questions } = quizSource;
  showWelcomeMessage(title, description);
  const correctAnswers = runQuiz(questions);
  showScore(correctAnswers, questions.length);
}

main();
