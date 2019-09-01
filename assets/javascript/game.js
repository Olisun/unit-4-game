$(document).ready(function() {
  var ruby = $('#ruby');
  var diamond = $('#diamond');
  var yellowThingy = $('#yellowThingy');
  var emerald = $('#emerald');
  var computerRandomNum = $('#random-number');
  var resetGame = $('#reset')



  function playGame() {
    var computerNum = [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29];
    var computerGuess = computerNum[Math.floor(Math.random() * computerNum.length)];
    var computerNumDom = $('#random-number');

    var rubyNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    var rubyGuess = rubyNum[Math.floor(Math.random() * rubyNum.length)];
    var rubyNumDom = $('#r-num-test');

    var diamondNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    var diamondGuess = diamondNum[Math.floor(Math.random() * diamondNum.length)];
    var diamondNumDom = $('#d-num-test');

    var yellowNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    var yellowGuess = rubyNum[Math.floor(Math.random() * yellowNum.length)];
    var yellowNumDom = $('#y-num-test');

    var emeraldNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    var emeraldGuess = rubyNum[Math.floor(Math.random() * emeraldNum.length)];
    var emeraldNumDom = $('#e-num-test');

    var totalScoreDom = $('#total-score');
    var wins = 0;
    var losses = 0;

    computerNumDom.text(computerGuess);
    rubyNumDom.text(rubyGuess);
    diamondNumDom.text(diamondGuess);
    yellowNumDom.text(yellowGuess);
    emeraldNumDom.text(emeraldGuess);

    ruby.on("click", function() {
      totalScoreDom.text(rubyGuess);
    });

    diamond.on("click", function() {
      totalScoreDom.text(diamondGuess);
    });

    yellowThingy.on("click", function() {
      totalScoreDom.text(yellowGuess);
    });

    emerald.on("click", function() {
      totalScoreDom.text(emeraldGuess);
    });
  }

  function newGame() {
    resetGame.on('click', function() {
      var computerNum = [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29];
      var computerGuess = computerNum[Math.floor(Math.random() * computerNum.length)];
      var computerNumDom = $('#random-number');

      var rubyNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
      var rubyGuess = rubyNum[Math.floor(Math.random() * rubyNum.length)];
      var rubyNumDom = $('#r-num-test');

      var diamondNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
      var diamondGuess = diamondNum[Math.floor(Math.random() * diamondNum.length)];
      var diamondNumDom = $('#d-num-test');

      var yellowNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
      var yellowGuess = rubyNum[Math.floor(Math.random() * yellowNum.length)];
      var yellowNumDom = $('#y-num-test');

      var emeraldNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
      var emeraldGuess = rubyNum[Math.floor(Math.random() * emeraldNum.length)];
      var emeraldNumDom = $('#e-num-test');

      var totalScoreDom = $('#total-score');
      var wins = 0;
      var losses = 0;
      var restart = 0;

      totalScoreDom.text(restart);
      computerNumDom.text(computerGuess);
      rubyNumDom.text(rubyGuess);
      diamondNumDom.text(diamondGuess);
      yellowNumDom.text(yellowGuess);
      emeraldNumDom.text(emeraldGuess);

      ruby.on("click", function() {
        totalScoreDom.text(rubyGuess);
      });

      diamond.on("click", function() {
        totalScoreDom.text(diamondGuess);
      });

      yellowThingy.on("click", function() {
        totalScoreDom.text(yellowGuess);
      });

      emerald.on("click", function() {
        totalScoreDom.text(emeraldGuess);
      });


    })
  }

  playGame();
  newGame();


});