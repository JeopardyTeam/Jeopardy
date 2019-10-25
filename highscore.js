
function highscoreData() {

  var getData = localStorage.getItem('userData');
  var parseData = JSON.parse(getData);

console.log(parseData);

  for (var i = 0; i < parseData.length; i++) {
    var scoreLine = (parseData[i].score);
    var nameLine = (parseData[i].name);
    var userScore = document.createElement('li');
    userScore.textContent = `${nameLine}  ${scoreLine}`;
    console.log(nameLine);
    console.log(scoreLine);
    var getList = document.getElementById('scoreList');
    getList.appendChild(userScore);


  }



}
highscoreData();
