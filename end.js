function getScores(){
    var highscores = JSON.parse(localStorage.getItem('highscores')) || []

    highscores.sort(function(a, b){
        return b.score - a.score
    })

    for (var index = 0; index < highscores.length <= 5; index++) {
        var li = document.createElement('li');
        li.textContent = highscores[index].user + ' - ' + highscores[index].score;

        document.getElementById('userScores').append(li)
    }
}

getScores()