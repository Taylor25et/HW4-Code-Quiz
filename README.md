# HW4-Code-Quiz
Welcome to my Code Quiz 

Home 4 Objective from assignment readMe:
AS A coding boot camp student
I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
SO THAT I can gauge my progress compared to my peers

Code Quiz Page:
![](/assets/pictures/codequiz.png)

Planning stage-
 I wanted to create a unique ‘D&D’ inspired theme that used riddles instead of a normal quiz setup. 

First Steps-
I first created the index.html & game.html with the style.css page so that I could use the classes to target content boxes that needed similar styling (eventually creating the game.css to hit any content boxes that needed special styling). This helped a lot because when I created my end.html page the styling was already done. This saved me a lot of time and I plan to use this method in the future. 

I thought creating a background image for my content to be displayed on would give the game a more immersive experience for my viewer. I used the :root function in CSS to make it so that my background would flow over to all game pages. This was my first time using the root function and it was difficult to understand it at first since there was conflicting information on how it should be used.

JavaScript Portion-
I had a lot of difficulty calling my variables so that array would show up inside the contact boxes. Even after watching tutorials, I had trouble getting the elements to pull.
Eventually I was able to get them to show up using ID tags in each option, when before I was using the id tag of the container.
![](/assets/pictures/displayingquestions.png)

This part caused me so make issues. I wish I had started with creating my content all in JS and then getting everything to the page rather than creating boxes and styling with HTML & CSS. Next time I'm going to get things showing up in JavaScript first then working on the styling. 

After this I worked on my timer. I got the timer to subtract time whenever someone entered in the wrong answer.My goal originally was to create a digital display that has a bar that got more and more empty as the user ran out of time and glowed red when a wrong option was selected. I ran out of time to implement this but maybe I’ll be able to implement it eventually.

Getting the score bar working was next. I made it so that the score would save to local storage and then created a hidden element to popup for the user info to get added with the user score in an array to be displayed on the end.html page. This was my first time using the hide feature and it was super handy.


Sources-
Text: Cinzel from Google Fonts / https://fonts.google.com/specimen/Cinzel
Imaige Credits:
Sphinx Art; https://www.deviantart.com/scottpurdy/art/Sphinx-275376399

[DeployedCodeQuizApplication](https://taylor25et.github.io/HW4-Code-Quiz/)
[DeployedCodeQuizRepository](https://github.com/Taylor25et/HW4-Code-Quiz)