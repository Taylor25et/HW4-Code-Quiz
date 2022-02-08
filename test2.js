function startGame() {
    
    startButton.classList.add("hidden")
    var timerInterval = setInterval(function() {
        secondsLeft--;
        // this sets the time on the screen to what is declared
        countdown.textContent = "timeleft:" + secondsLeft;
    
        if(secondsLeft === 0) {
          // Stops execution of action at set interval
          clearInterval(timerInterval);
          // Calls function to create and append image
        //   sendMessage();
        }
    
      }, 1000);
   getNextQuestion();
}