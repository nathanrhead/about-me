'use strict';

function getUserName (){
   var userName = prompt('Please enter your name to continue.').toLowerCase();
   if(userName === 'no' || userName === 'n' || userName === 'nope' || userName === "") {
       alert('No worries, we\'ll just call you Pat.');
       alert('Before we get started, let\'s see how much you already know about me.');
   } else if(typeof userName === "string" || typeof userName === !null) {
       alert('Welcome, ' + userName.toUpperCase() + ', to my about-me site.');
       alert('Before we get started, let\'s see how much you already know about me.');
    return userName;
    }
}

var answerCount = 0;

function questionOne(){
   var aboutMeQ1 = prompt('Here is the first of five yes-or-no questions: Do I have a twin brother?').toLowerCase();
   if(aboutMeQ1 === 'yes' || aboutMeQ1 === 'y' || aboutMeQ1 === 'yep') {
        answerCount++;
        alert('It\'s true, but we\'re dizygotic. That\'s ' + answerCount + ' correct and 5 to go.'); 
    } else if(aboutMeQ1 === 'no' || aboutMeQ1 === 'n' || aboutMeQ1 === 'nope') {
        answerCount = 0;
        alert('Actually, it\'s true, I do, but we\'re dizygotic. You\'re ' + answerCount + ' for 5.');
   } else if(aboutMeQ1 === null || aboutMeQ1 === '' || typeof aboutMeQ1 === 'string') {
        answerCount = 0;
        alert('I\'ll tell you anyway: I\'m a twin, but we\'re dizygotic. You\'re ' + answerCount + ' for 5.')
   }
}

function questionTwo(){
   var aboutMeQ2 = prompt('Is my favorite book *One Hundred Years of Solitude*, by Gabriel Garcia Marquez?').toLowerCase();
   if(aboutMeQ2 === 'yes' || aboutMeQ2 === 'y' || aboutMeQ2 === 'yep') {
        answerCount = 0;
        alert('Close! It\'s actually *Nine Stories*, by JD Salinger. Your score is currently ' + answerCount + ' out of 5.'); 
   } else if(aboutMeQ2 === 'no' || aboutMeQ2 === 'n' || aboutMeQ2 === 'nope') {
        answerCount++;
        alert('You\'re right, that\'s my second favorite book; my first is *Nine Stories*, by JD Salinger. Score is ' + answerCount + ' out of 5.');
   } else if(aboutMeQ2 === null || aboutMeQ2 === '' || typeof aboutMeQ2 === 'string') {
        answerCount = 0;
        alert('I\'ll tell you anyway: While I love *One Hundred*, *Nine Stories*, by JD Salinger, is my favorite. Your score is ' + answerCount +'. Three more to go.');
   }   
}

function questionThree(){
   var aboutMeQ3 = prompt('Did I live in St. Petersburg, Russia?').toLowerCase();
   if(aboutMeQ3 === 'yes' || aboutMeQ3 === 'y' || aboutMeQ3 === 'yep') {
        answerCount++;
        alert('I sure did, for ten years in total, making your score ' + answerCount + ' out of 5.'); 
   } else if(aboutMeQ3 === 'no' || aboutMeQ3 === 'n' || aboutMeQ3 === 'nope') {
        answerCount = 0;
        alert('Yup, for about a decade, in fact. Speaking of numbers, your score is ' + answerCount + ' out of 5.');
   } else if(aboutMeQ3 === null || aboutMeQ3 === '' || typeof aboutMeQ3 === 'string') {
        answerCount = 0; 
        alert('I\'ll tell you anyway: I lived there for just over a decade.');
   }   
}

function questionFour(){
   var aboutMeQ4 = prompt('Do I like football?').toLowerCase();
   if(aboutMeQ4 === 'yes' || aboutMeQ4 === 'y' || aboutMeQ4 === 'yep') {
        answerCount = 0;
        alert('It\'s all right, but I prefer racket sports. Advantage, author; Your score is ' + answerCount + ' of 5.'); 
   } else if(aboutMeQ4 === 'no' || aboutMeQ4 === 'n' || aboutMeQ4 === 'nope') {
        answerCount++;
        alert('You\'re right, I prefer racket sports. Advantage out! Your score is ' + answerCount + ' out of 5.');
   } else if(aboutMeQ4 === null || aboutMeQ4 === '' || typeof aboutMeQ4 === 'string') {
        answerCount = 0;
        alert('Not a football fan either, huh? I prefer racket sports. Add in: your score is' + answerCount + ' out of 5.');
   }   
}

function questionFive(){
   var aboutMeQ5 = prompt('Is my son\'s name Alex?').toLowerCase();
   if(aboutMeQ5 === 'yes' || aboutMeQ5 === 'y' || aboutMeQ5 === 'yep') {
        answerCount++;
        alert('Yes and no: his full name is Alexander, but he goes by Alex in first grade, and we call him Sasha at home. Another point for you, bring your total out of 5 to ' + answerCount + '.');
   } else if(aboutMeQ5 === 'no' || aboutMeQ5 === 'n' || aboutMeQ5 === 'nope') {
        answerCount++;
        alert('Yes and no: his full name is Alexander, but he goes by Alex in first grade, and we call him Sasha at home. Another point for you, bring your total out of 5 to ' + answerCount + '.');
   } else if(aboutMeQ5 === null || aboutMeQ5 === '' || typeof aboutMeQ5 === 'string') {
      alert('Yes and no: his full name is Alexander, but he goes by Alex in first grade, and we call him Sasha at home. But a non-answer is a non-starter, so adding 0 to ' + answerCount + ' equals ' + answerCount + ' points out of 5.');
   }
}

function numberGame(){
   alert('Now, I\'ll give you four guesses to pick the right number.');

   var numGuessAnswer = 15 
   // it didn't work to add this to the numGuessAnswer: || 'fifteen' with and else if of numGuess === numGuessAnswer. Why not?
   var i = 0
   //Problems: 
   //1. A string returns the numGuess prompt without any alerts. 
   //2. An empty string--just hitting the okay button without any input--returns 'Close, but no cigar. . . .'
   while(i < 4) {
       var numGuess = Number(prompt('How many siblings do you think I have?'));
       i++
       if(numGuess < numGuessAnswer && i < 4 && numGuess !== '') {
           alert('Close, but no cigar. Try a higher number.');
       } else if(numGuess > numGuessAnswer && i < 4) {
           alert('Watch you don\'t fly too close to the sun. Try a lower number.');
       } else if(typeof numGuess === 'string' || numGuess === '' || numGuess === null) {
           alert('Invalid input: Enter a number only.');
       } else if(numGuess === numGuessAnswer) {
           alert('Nailed it. You\'re one smart cookie!');
           break;
       } else if(i === 4 && numGuess !== numGuessAnswer) {
           alert('Good try, but the correct number is 15.');
           break;
       }
   }   
}
var lastQuestionAnswer = ['franny and zooey', 'crime and punishment', 'master and margarita'];

function finalQuestion(){
   for(var i = 0; i < 6; i++) {
    var lastQuestion = prompt('Last question: What is my third-favorite book?').toLowerCase();
    if(lastQuestion === 'franny and zooey' || lastQuestion === 'crime and punishment' || lastQuestion === 'master and margarita') {
        alert('You guessed it!');
        break;
    } else if(i === 5 && lastQuestion !== lastQuestionAnswer) {
        alert('The answer is one of three: Franny and Zooey, Crime and Punishment, or Master and Margarita.');
    } else {
        alert('No, but I\'ll look into that title.');
    }
   }
   alert('These were the possible answers: *Franny and Zooey*, *Crime and Punishment*, *Master and Margarita*.');
}

function farewellPrompt(name){
   var loadPage = name;
   if(name.toLowerCase() === 'no' || name.toLowerCase() === 'n' || name.toLowerCase() === 'nope' || name === '') {
      loadPage = alert('Knowing is half the battle, as they say, and now you know all about me, ' + 'Pat.');
  
  } else {
      loadPage = alert('Knowing is half the battle, as they say, and now you know all about me, ' + name + '.'); 
  }
  
}


var name = getUserName();

questionOne();

questionTwo();

questionThree();

questionFour();

questionFive();

numberGame();

finalQuestion();

farewellPrompt(name);