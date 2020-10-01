'use strict';

var userName = prompt('Please enter your name to continue.');

if(userName.toLowerCase() === 'no' || userName.toLowerCase() === 'n' || userName.toLowerCase() === 'nope' || userName === "") {
    alert('No worries, we\'ll just call you Pat.');
    // console.log('This is the user\'s name: ' + userName);
    alert('Before we get started, let\'s see how much you already know about me.');
} else if(typeof userName.toLowerCase() === "string" || typeof userName.toLowerCase === !null) {
    alert('Welcome, ' + userName.toUpperCase() + ', to my about-me site.');
    alert('Before we get started, let\'s see how much you already know about me.');
}
// How to make the cancel button of the prompt revert to the question asked?

var aboutMeQ1 = prompt('Here is the first of five yes-or-no questions: Do I have a twin brother?')
if(aboutMeQ1.toLowerCase() === 'yes' || aboutMeQ1.toLowerCase() === 'y' || aboutMeQ1.toLowerCase() === 'yep') {
    alert('It\'s true, but we\'re dizygotic.'); 
    // console.log('This is the user\'s answer to Q1: ' + aboutMeQ1)
} else if(aboutMeQ1.toLowerCase() === 'no' || aboutMeQ1.toLowerCase() === 'n' || aboutMeQ1.toLowerCase() === 'nope') {
    alert('Actually, it\'s true, I do, but we\'re dizygotic.');
    // console.log('This is the user\'s answer to Q1: ' + aboutMeQ1)
} else if(aboutMeQ1 === null || aboutMeQ1 === '' || typeof aboutMeQ1 === 'string') {
    alert('I\'ll tell you anyway: I\'m a twin, but we\'re dizygotic.')
    // console.log('This is the user\'s answer to Q1: ' + aboutMeQ1);
}
var aboutMeQ2 = prompt('Is my favorite book *One Hundred Years of Solitude*, by Gabriel Garcia Marquez?')
if(aboutMeQ2.toLowerCase() === 'yes' || aboutMeQ2.toLowerCase() === 'y' || aboutMeQ2.toLowerCase() === 'yep') {
    alert('Close! It\'s actually *Nine Stories*, by JD Salinger.'); 
    // console.log('This is the user\'s answer to Q2: ' + aboutMeQ2)
} else if(aboutMeQ2.toLowerCase() === 'no' || aboutMeQ2.toLowerCase() === 'n' || aboutMeQ2.toLowerCase() === 'nope') {
    alert('You\'re right, that\'s my second favorite book; my first is *Nine Stories*, by JD Salinger.');
    // console.log('This is the user\'s answer to Q2: ' + aboutMeQ2)
} else if(aboutMeQ2 === null || aboutMeQ2 === '' || typeof aboutMeQ2 === 'string') {
    alert('I\'ll tell you anyway: While I love *One Hundred*, *Nine Stories*, by JD Salinger, is my favorite.')
    // console.log('This is the user\'s answer to Q2: ' + aboutMeQ2);
}
var aboutMeQ3 = prompt('Did I live in St. Petersburg, Russia?')
if(aboutMeQ3.toLowerCase() === 'yes' || aboutMeQ3.toLowerCase() === 'y' || aboutMeQ3.toLowerCase() === 'yep') {
    alert('I sure did, for ten years in total.'); 
    // console.log('This is the user\'s answer to Q3: ' + aboutMeQ3)
} else if(aboutMeQ3.toLowerCase() === 'no' || aboutMeQ3.toLowerCase() === 'n' || aboutMeQ3.toLowerCase() === 'nope') {
    alert('Yup, for about a decade, in fact.');
    // console.log('This is the user\'s answer to Q3: ' + aboutMeQ3)
} else if(aboutMeQ3 === null || aboutMeQ3 === '' || typeof aboutMeQ3 === 'string') {
    alert('I\'ll tell you anyway: I lived there for just over a decade.');
    // console.log('This is the user\'s answer to Q3: ' + aboutMeQ3);
}

var aboutMeQ4 = prompt('Do I like football?')
if(aboutMeQ4.toLowerCase() === 'yes' || aboutMeQ4.toLowerCase() === 'y' || aboutMeQ4.toLowerCase() === 'yep') {
    alert('It\'s all right, but I prefer racket sports.'); 
    // console.log('This is the user\'s answer to Q4: ' + aboutMeQ4);
} else if(aboutMeQ4.toLowerCase() === 'no' || aboutMeQ4.toLowerCase() === 'n' || aboutMeQ4.toLowerCase() === 'nope') {
    alert('You\'re right, I prefer racket sports.');
    // console.log('This is the user\'s answer to Q4: ' + aboutMeQ4);
} else if(aboutMeQ4 === null || aboutMeQ4 === '' || typeof aboutMeQ4 === 'string') {
    alert('Not a football fan either, huh? I prefer racket sports.');
    // console.log('This is the user\'s answer to Q4: ' + aboutMeQ4);
}

var aboutMeQ5 = prompt('Is my son\'s name Alex?')
if(aboutMeQ5.toLowerCase() === 'yes' || aboutMeQ5.toLowerCase() === 'y' || aboutMeQ5.toLowerCase() === 'yep') {
    alert('Yes and no: his full name is Alexander, but he goes by Alex in first grade, and we call him Sasha at home.');
    // console.log('This is the user\'s answer to Q5: ' + aboutMeQ6);
} else if(aboutMeQ5.toLowerCase() === 'no' || aboutMeQ5.toLowerCase() === 'n' || aboutMeQ5.toLowerCase() === 'nope') {
    alert('Yes and no: his full name is Alexander, but he goes by Alex in first grade, and we call him Sasha at home.');
    // console.log('This is the user\'s answer to Q5: ' + aboutMeQ6);
} else if(aboutMeQ5 === null || aboutMeQ5 === '' || typeof aboutMeQ5 === 'string') {
    alert('Yes and no: his full name is Alexander, but he goes by Alex in first grade, and we call him Sasha at home.');
    // console.log('This is the user\'s answer to Q5: ' + aboutMeQ6);
}

alert('Now, I\'ll give you four guesses to pick the right number.');

var numGuessAnswer = 15 
// it didn't work to add this to the numGuessAnswer: || 'fifteen' with and else if of numGuess === numGuessAnswer. Why not?
var i = 0

//There's an infinite loop here when a string is entered by the user: it just returns the numGuess prompt. 
//An empty string--just hitting the okay button without any input--returns 'Close, but no cigar.
while(i < 4) {
    var numGuess = Number(prompt('How many siblings do you think I have?'));
    if(numGuess < numGuessAnswer && i < 3 && numGuess !== "") {
        alert('Close, but no cigar. Try a higher number.');
        i++;
    } else if(numGuess > numGuessAnswer && i < 3) {
        alert('Watch you don\'t fly too close to the sun. Try a lower number.');
        i++;
    } else if(typeof numGuess === 'string' || numGuess === '' || numGuess === null) {
        alert('Invalid input: Enter a number only.');
        i++;
    } else if(numGuess === numGuessAnswer) {
        alert('Nailed it. You\'re one smart cookie!');
        break;
    } else if(i === 3 && numGuess !== numGuessAnswer) {
        alert('Good try, but the correct number is 15.');
        break;
    }
}
// None of this is last question is working, except for the prompt and the negative response.
var lastQuestionAnswer = ['Franny and Zooey', 'Crime and Punishment', 'Master and Margarita'];

for(var i = 0; i < 6; i++) {
    var lastQuestion = prompt('Last question: What is my third-favorite book?').toLowerCase();
    if(lastQuestion === 'franny and zooey' || lastQuestion === 'crime and punishment' || lastQuestion === 'master and margarita') {
        alert('You guessed it!');
        break;
    } else if(i === 5 && lastQuestion !== lastQustionAnswer) {
        alert('The answer is one of three: Franny and Zooey, Crime and Punishment, or Master and Margarita.');
    } else if(lastQuestion !== lastQuestionAnswer[i]) {
        alert('No, but I\'ll look into that title.');
    }
}
alert('These were the possible answers: *Franny and Zooey*, *Crime and Punishment*, *Master and Margarita*.');

var loadPage = userName;

if(userName.toLowerCase() === 'no' || userName.toLowerCase() === 'n' || userName.toLowerCase() === 'nope' || userName === '') {
    loadPage = alert('Knowing is half the battle, as they say, and now you know all about me, ' + 'Pat.');

} else {
    loadPage = alert('Knowing is half the battle, as they say, and now you know all about me, ' + userName + '.'); 
}
