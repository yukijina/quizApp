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
  answer: 'london'
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
        //text color green if the answe is correct
        questionSpot.style.color = "rgb(13, 180, 54)";

    } else {
        //update class on questionSport
        questionSpot.className = 'incorrect';
        //add one to incorrect
        incorrect++;
        //text color red if the answe is correct
        questionSpot.style.color = "red";
    };

  }; //end of loop
  //update correct and incorrect value
  document.getElementById('correct').textContent = correct;
  document.getElementById('incorrect').textContent = incorrect;

  if (correct >= 1) {
    //create div and span for particle
    var parDiv = document.createElement('div');
    parDiv.id = 'particles-js';

    var parDiv2 = document.createElement('div');
    parDiv2.className = 'count-particles';

    var parSpan = document.createElement('span');
    parSpan.className = 'js-count-particles';

    var footer = document.getElementsByTagName('footer')[0];
    footer.appendChild(parDiv);
    footer.appendChild(parDiv2);
    parDiv2.appendChild(parSpan);


// https://codepen.io/pen/
  particlesJS("particles-js",
  {"particles":
  {"number":
   {"value":100,"density":
   {"enable":false,"value_area":800}},
  "color":{"value":"#ffffff"},
  "shape":{"type":"star","stroke":{"width":0,"color":"#000000"},
  "polygon":{"nb_sides":5},
  "image":{"src":"http://wiki.lexisnexis.com/academic/images/f/fb/Itunes_podcast_icon_300.jpg","width":100,"height":100}},
  "opacity":{"value":0.5,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},
  "size":{"value":4,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},
  "line_linked":{"enable":false,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},
  "move":{"enable":true,"speed":14,"direction":"left","random":false,"straight":true,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},
  "interactivity":{
    "detect_on":"canvas",
    "events":{"onhover":{"enable":false,"mode":"grab"},"onclick":{"enable":true,"mode":"repulse"},"resize":true},
    "modes":{"grab":{"distance":200,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});


    var count_particles, stats, update; stats = new Stats; stats.setMode(0); stats.domElement.style.position = 'absolute'; stats.domElement.style.left = '0px'; stats.domElement.style.top = '0px'; document.body.appendChild(stats.domElement); count_particles = document.querySelector('.js-count-particles');


  update = function() { stats.begin(); stats.end(); if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; } requestAnimationFrame(update); }; requestAnimationFrame(update);;

} //end of if





} //end of function
