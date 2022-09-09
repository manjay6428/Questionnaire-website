const quizDB = [
    {
       question: "Q1: What is the Full form of UPSC?",
       a: "Union private service commerce",
       b: "Union public selective commission",
       c: "Union public service commission",
       d: "Union private service commission",
       ans: "ans3"
    },
    {
        question: "Q2: National Income estimates in India are prepared by?",
       a: "Planning Commission",
       b: "Reserve Bank of India",
       c: "Indian statistical Institute",
       d: "Central statistical organisation",
       ans: "ans4"
    },
    {
        question: "Q3:The tropic of cancer does not pass through which of these Indian states ?",
       a: " Madhya Pradesh",
       b: "West Bengal",
       c: "Rajasthan",
       d: "Odisha",
       ans: "ans4"
    },
    {
        question: "Q4:when was the constitution of india adopted ?",
       a: " 26 Jan 1950",
       b: "24 Jan 1950",
       c: "12 Aug 1949",
       d: "26 Nov 1949",
       ans: "ans4"
    },
    {
        question: "Q5:When was the National Commission for Women was set up as statutory body in India ?",
       a: "1978",
       b: "1985",
       c: "1992",
       d: "2001",
       ans: "ans3"
    },
    {
        question: "Q6:What is the limit of FDI permitted in the Road and Highways Sector in India?",
       a: " 21%",
       b: "49%",
       c: "75%",
       d: "100%",
       ans: "ans4"
    },
    {
        question: "Q7:For the crop year 2021-22, what is the food grain production target fixed by the Government of India?",
       a: " 201.31 million tonnes",
       b: "307.31 million tonnes",
       c: "405.71 million tonnes",
       d: "500 million tonnes",
       ans: "ans2"
    },
    {
        question: "Q8:As per the new MSME rules, what documents are required for registration of MSMEs?",
       a: "  GSTIN, PAN and Aadhar",
       b: "PAN and Aadhar",
       c: "Udyog Aadhar",
       d: " Biometric Identification",
       ans: "ans2"
    },
    {
        question: "Q9:What is the name of the informational video series released in the Health Ministry’s social media platforms?",
       a: " COVID Warrior",
       b: " COVID GuruKool",
       c: "COVID DRONA",
       d: "COVID ASTRA",
       ans: "ans2"
    },
    {
        question: "Q10: Who is the author of the book 'Freedom Behind Bars '",
       a: "Kiran Bedi",
       b: "Jawaharlal Nehru",
       c: " Nelson Mandela",
       d: "Sheikh Abdullah",
       ans: "ans1"
    }
];
 const question = document.querySelector('.question');
 const option1 = document.querySelector('#option1');
 const option2 = document.querySelector('#option2');
 const option3 = document.querySelector('#option3');
 const option4 = document.querySelector('#option4');
 const submit = document.querySelector('#submit');
 const answers = document.querySelectorAll('.answer');
 const showScore = document.querySelector('#showScore');
 let questionCount = 0;
 let score=0;
 const loadQuestion= () => {
     const questionList = quizDB[questionCount];
     question.innerHTML= questionList.question;
     option1.innerText = questionList.a;
     option2.innerText = questionList.b;
     option3.innerText = questionList.c;
     option4.innerText = questionList.d;
 }
    
 loadQuestion();
 const getCheckAnswer= () =>{
      let answer;
      answers.forEach((curAnsElem) => {
          if(curAnsElem.checked){
              answer =  curAnsElem.id;
          }
      });
      return answer;

 }
//  correcrAnswer = ["","",""]
//  k=0;
  submit.addEventListener('click', () => {
      const checkedAnswer = getCheckAnswer();
      // userAnswer[k++] = checkAnswer;

      if(checkedAnswer === quizDB[questionCount].ans){
          score++;
              showScore.innerHTML=`
              
              <h3>  ${quizDB[questionCount].question}    </h3>
              <h3>  ${quizDB[questionCount].ans}    </h3>
              `;
        
      };
      questionCount++;
      if(questionCount<quizDB.length){
          loadQuestion();
      }
      else{
          
          showScore.innerHTML=`
          <h3> You scored ${score}/${quizDB.length} ✌ ✌  </h3>  
          <h3> Your correct answers </h3>
          <button class="btn" onclick="location.reload()">Play Again
            </button> 
            
            <h3>  ${quizDB[questionCount].question}    </h3>
              <h3>  ${quizDB[questionCount].ans}    </h3>
          `;

          showScore.classList.remove('scoreArea');
      }
  });
