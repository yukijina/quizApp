var quiz = [
{
  question: 'What is 5 + 5?',
  answer: 10
},
{
  question: 'What is 50/5?',
  answer: 10
},
{
  question: 'What is the capital of UK?',
  answer: 'London'
},
{
  question: 'How many Toy Story films have there been so far?',
  answer: 3
},
{
  question: 'What is the second letter of the alphabet?',
  answer: 'b'
},
{
  question: 'What is the third planet from the sun?',
  answer: 'earth'
},
{
  question: 'Where is gotham city?',
  answer: 'new jersey'
}
];

//loop through each questions
for (var i = 0; i < quiz.length; i++) {
   //store each question value
   var question = quiz[i].question;
   //store each element to add question too
   var element = document.getElementById('question' + [i]);

   // check what question and element is being selected
	 console.log(question, element);

   //update text content of each element
   element.textContent = question;
};

//check result qhen the user submits Quiz
function myClick () {
  //store variables to update correct and inpccrect totals
  var correct = 0;
  var incorrect = 0;

  //loop through question array
  for (var i = 0; i < quiz.length; i++) {
    // store each correct answer
    var answer = quiz[i].answer;
    // store each user answer
    var userAnswer = document.getElementById('answer' + [i]).value;
    // store element to add a class if correct or incorrect
    var questionSpot = document.getElementById('question' + [i]);

    //check if the user answe matches the correct answer
    if (answer == userAnswer) {
        //update class on questionSpot
        questionSpot.className = 'correct';
        //add one to incorrect
        correct++;
    } else {
        //update class on questionSport
        questionSpot.className = 'incorrect';
        //add one to incorrect
        incorrect++;
    };

  };
  //update correct and incorrect value
  document.getElementById('correct').textContent = correct;
  document.getElementById('incorrect').textContent = incorrect;
}
