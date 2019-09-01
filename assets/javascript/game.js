$(document).ready(function() {
  var ruby = $('#ruby');
  var diamond = $('#diamond');
  var yellowThingy = $('#yellowThingy');
  var emerald = $('#emerald');
  var computerRandomNum = $('#random-number');
  var resetGame = $('#reset')


  function playGame() {
    var randomNum = ['1', '2', '3', '4', '5', '6', '7'];
    var computerGuess = randomNum[Math.floor(Math.random() * randomNum.length)];
    var numTest = document.getElementById('random-number');

    numTest.innerHTML = computerGuess;

    ruby.on("click", function() {
      alert('ruby has been clicked')
    });

    diamond.on("click", function() {
      alert('diamond has been clicked')
    });

    yellowThingy.on("click", function() {
      alert('yellowThingy has been clicked')
    });

    emerald.on("click", function() {
      alert('emerald has been clicked')
    });
  }

  function newGame() {
    resetGame.on('click', function() {
      var randomNum = ['1', '2', '3', '4', '5', '6', '7'];
      var computerGuess = randomNum[Math.floor(Math.random() * randomNum.length)];
      var numTest = document.getElementById('random-number');

      numTest.innerHTML = computerGuess;
    })
  }

  playGame();
  newGame();


});