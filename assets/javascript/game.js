  $(document).ready(function() {
    var ruby = $('#ruby');
    var diamond = $('#diamond');
    var yellowThingy = $('#yellowThingy');
    var emerald = $('#emerald');
    var resetGame = $('#reset');


    function playGame() {
      var computerNum = [19, 25, 33, 38, 45, 50, 53, 61, 69, 72, 75, 84, 86, 94, 99, 105, 111, 120];
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

      var wins = $('#wins-placeholder');
      var losses = $('#losses-placeholder');
      var totalScoreDom = $('#total-score');
      var restart = 0;

      totalScoreDom.text(restart);
      wins.text(restart);
      losses.text(restart);
      computerNumDom.text(computerGuess);
      rubyNumDom.text(rubyGuess);
      diamondNumDom.text(diamondGuess);
      yellowNumDom.text(yellowGuess);
      emeraldNumDom.text(emeraldGuess);

      ruby.on("click", function() {
        totalScoreDom.text(restart += rubyGuess);
      });

      diamond.on("click", function() {
        totalScoreDom.text(restart += diamondGuess);
      });

      yellowThingy.on("click", function() {
        totalScoreDom.text(restart += yellowGuess);
      });

      emerald.on("click", function() {
        totalScoreDom.text(restart += emeraldGuess);
      });

      if (totalScoreDom === computerGuess) {
        wins.text(restart++);
        alert('You matched the Computer Number!');
      } else if (totalScoreDom.value > computerGuess) {
        losses.text(restart++);
        alert('You went over! :-(');
      }
    }

    function newGame() {
      resetGame.on('click', function() {
        var computerNum = [19, 25, 33, 38, 45, 50, 53, 61, 69, 72, 75, 84, 86, 94, 99, 105, 111, 120];
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

        var wins = $('#wins-placeholder');
        var losses = $('#losses-placeholder');
        var totalScoreDom = $('#total-score');
        var restart = 0;

        totalScoreDom.text(restart);
        wins.text(restart);
        losses.text(restart);
        computerNumDom.text(computerGuess);
        rubyNumDom.text(rubyGuess);
        diamondNumDom.text(diamondGuess);
        yellowNumDom.text(yellowGuess);
        emeraldNumDom.text(emeraldGuess);

        ruby.on("click", function() {
          totalScoreDom.text(restart += rubyGuess);

        });

        diamond.on("click", function() {
          totalScoreDom.text(restart += diamondGuess);
        });

        yellowThingy.on("click", function() {
          totalScoreDom.text(restart += yellowGuess);
        });

        emerald.on("click", function() {
          totalScoreDom.text(restart += emeraldGuess);
        });

        if (totalScoreDom === computerGuess) {
          wins.text(restart++);
          alert('You matched the Computer Number!');
        } else if (totalScoreDom.value > computerGuess) {
          losses.text(restart++);
          alert('You went over! :-(');
        }
      })
    }

    playGame();
    newGame();

  });