# LAB - 02 | Code 201

## Title: About Me

User's Story 1: As a user, I would like to learn about the site owner so I can get to know them better..

Feature Tasks: Teach us more about you! Build out an “About Me” webpage that quizzes the user on fun facts and gives the user some basic information about who you are and where you came from.

* Create an About Me guessing game that utilizes HTML, CSS, & JavaScript.

* Include a short biography, your education history, an overview of your job experience, and any goals that you may have.

* Using the prompt function, ask the user a total of exactly five yes-or-no questions. The user input for the answer must accept either y/n or yes/no responses while taking into consideration case sensitivity by normalizing the user input so that it can be validated (hint: look into the .toUpperCase() or .toLowerCase() functions). Be sure to let the user know if they answered the question correctly by alerting them with a response.

* Add console.log() messages within your app to notify the user if they are correct. Before submitting, comment out (don’t delete) your console.log() messages and replace them with the alerts() to complete the project.

User's story 2: As a user, I would like a personalized welcome message so that I feel like I am interacting with the site owner.

* Ask the user their name through a prompt()

* Display that name back to the user through a custom greeting welcoming them to your site.

* Display the user’s name back to them in your final message.

### Author: Nathan Cox/seattle-201d68

### Links and Resources

* [submission PR](https://nathanrhead.github.io/about-me/)
<!-- * Any Links you used as reference -->

* [to reinstate bullets after the CSS reset](https://stackoverflow.com/questions/55970383/how-do-i-reinstate-list-style-type-bullets-following-a-css-reset)

* [to genereate a random number between 0 and 10](https://medium.com/@josephcardillo/using-math-random-in-javascript-c49eff920b11)

### Reflections and Comments

<!-- * Consider including the answers to your daily journal and submission questions here
* This is also a good place to reflect on the tools and resources used and learned -->

* Resetting the CSS doesn't make a ton of sense to me, yet, especially given that it means I have to code for bullet points on LIs that were originally hard-coded.

* While single quotes may be the standard for JS, when you need to use an apostrophe in a string, you have to use double quotes to set off your string. [I’ve since learned about escaping the apostrophe with a backslash (e.g., Nathan\’s), but I find that approach rather unsightly. Duckett says you can just use double quotes, but CF says you can’t. 

* Inline styling is confusing and prone to human error. 

* I still don’t wholly understand the point of erasing all of the default styling in the browser, especially if we’re supposed to style everything with CSS anyway; it still seems like an superfluous step, especially if it takes out things like bullet points from listed items `<li>`

* I was proud that I figured out, roughly, how to generate an even number.

### License ©nathanrhead
