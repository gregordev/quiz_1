const questions = [
  {
    question: 'What is my name?',
    answers: ['Brad', 'Greg', 'Simon', 'Martin'],
    goodAnswer: 'Greg'
  },
  {
    question: 'What is my age?',
    answers: ['21', '12', '44', '24'],
    goodAnswer: '24'
  },
  {
    question: 'What is my passion?',
    answers: ['Webdev', 'Music', 'Chemistry', 'Hacking'],
    goodAnswer: 'Webdev'
  },
  {
    question: 'What is my moms name?',
    answers: ['Julia', 'Susanne', 'Margareth', 'Catherine'],
    goodAnswer: 'Catherine'
  },
  {
    question: 'My favorite football player?',
    answers: ['Ronaldinho', 'Ronaldo', 'Crespo', 'Lewandowski'],
    goodAnswer: 'Ronaldinho'
  }
];

const question = document.getElementById('question');
const questionNumber = document.getElementById('question-number');
const answers = document.querySelectorAll('.answer');
const questionContainer = document.getElementById('question-container');
const resultWindow = document.getElementById('result');

answers.forEach(answer => answer.addEventListener('click', loadQuestion));

let id = 0;
let result = 0;

function checkCorrect(obj) {
  console.log(`Good: ${questions[id-1].goodAnswer}`);
  console.log(`Clicked: ${obj.innerText}`);
  
  
  
  if (obj.innerText === questions[id-1].goodAnswer) {
    obj.classList = 'answer good';
    result++;
    console.log('Good answer!');
    setTimeout(function(){ obj.classList = 'answer'; }, 1000);
    
  } else {
    console.log('Bad answer');
    obj.classList = 'answer bad';
    setTimeout(function(){ obj.classList = 'answer'; }, 1000);
  }
}

function loadQuestion() {

  let that = this;
  
  if (id > 0)
    checkCorrect(this);
  

    setTimeout(function(){ 
      
      if (id < questions.length) {
    

        // Load question number
        questionNumber.innerText = `${id+1}`;
    
        // Load question body
        question.innerText=`${questions[id].question}`; 
        for (let y = 0; y < 4; y++) {
          // Load answers
          answers[y].innerText = questions[id].answers[y];
        }
        
      } else {
        console.log('End');
        console.log(result);
        questionContainer.style.display = "none";
        resultWindow.style.display = 'block';
        resultWindow.innerHTML = `Your result is: ${result}/5`;
      }
      id++;
     }, 1000);


}

loadQuestion();