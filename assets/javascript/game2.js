$(document).ready(function() {
  // Declaring global variables.
  var ruby = $('#ruby');
  var diamond = $('#diamond');
  var yellowThingy = $('#yellowThingy');
  var emerald = $('#emerald');
  var resetGame = $('#reset');

  // This function starts the inital game.
  function playGame() {

    // Using our friend math.floor-math.round to have the computer select a random number for the user to try and match.
    var computerNum = [19, 25, 33, 38, 45, 50, 53, 61, 69, 72, 75, 84, 86, 94, 99, 105, 111, 120];
    var computerGuess = computerNum[Math.floor(Math.random() * computerNum.length)];
    var computerNumDom = $('#random-number');
    // Assinging a random point value to each crystal at the start of each game.
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
    var winPoints = 0;
    var lossPoints = 0;
    var restart = 0;
    var counter = 0;
    var targetNumber = computerGuess


    // This sets the "Your Total Score Is:" from the DOM at 0 at the start of each game.
    // totalScoreDom.text(restart);
    // This sets the "Wins:" from the DOM at 0 at the start of each game.
    wins.text(restart);
    // This sets the "Losses:" from the DOM at 0 at the start of each game.
    losses.text(restart);
    // These set the random numbers chosen from arrays above to the selected targets on the DOM. I added the crystals' numbers so I can reference them when building. I sill change the css display to none when deploying the final product so the user won't see them.
    computerNumDom.text(targetNumber);
    rubyNumDom.text(rubyGuess);
    diamondNumDom.text(diamondGuess);
    yellowNumDom.text(yellowGuess);
    emeraldNumDom.text(emeraldGuess);


    var crystals = $('#ruby');
    var crystals2 = $('#diamond');
    var crystals3 = $('#yellowThingy');
    var crystals4 = $('#emerald');

    crystals.attr('pointValue', rubyGuess);
    crystals2.attr('pointValue2', diamondGuess);
    crystals3.attr('pointValue3', yellowGuess);
    crystals4.attr('pointValue4', emeraldGuess);


    ruby.on('click', function() {
      var crystalPointVal = ($(this).attr('pointValue'));
      crystalPointVal = parseInt(crystalPointVal);
      counter += crystalPointVal;
      totalScoreDom.text(counter);
      if (counter === targetNumber) {
        alert('You Won!')
        winPoints++;
        wins.text(winPoints);
      } else if (counter > targetNumber) {
        alert('You Loss!')
        lossPoints++;
        losses.text(lossPoints);
      }
    })

    diamond.on('click', function() {
      var crystalPointVal2 = ($(this).attr('pointValue2'));
      crystalPointVal2 = parseInt(crystalPointVal2);
      counter += crystalPointVal2;
      totalScoreDom.text(counter);
      if (counter === targetNumber) {
        alert('You Won!')
        winPoints++;
        wins.text(winPoints);
      } else if (counter > targetNumber) {
        alert('You Loss!')
        lossPoints++;
        losses.text(lossPoints);
      }

    })

    yellowThingy.on('click', function() {
      var crystalPointVal3 = ($(this).attr('pointValue3'));
      crystalPointVal3 = parseInt(crystalPointVal3);
      counter += crystalPointVal3;
      totalScoreDom.text(counter);
      if (counter === targetNumber) {
        alert('You Won!')
        winPoints++;
        wins.text(winPoints);
      } else if (counter > targetNumber) {
        alert('You Loss!')
        lossPoints++;
        losses.text(lossPoints);
      }

    })

    emerald.on('click', function() {
      var crystalPointVal4 = ($(this).attr('pointValue4'));
      crystalPointVal4 = parseInt(crystalPointVal4);
      counter += crystalPointVal4;
      totalScoreDom.text(counter);
      if (counter === targetNumber) {
        alert('You Won!')
        winPoints++;
        wins.text(winPoints);
      } else if (counter > targetNumber) {
        alert('You Loss!')
        lossPoints++;
        losses.text(lossPoints);
      }
    })



  }



  // function creates a new game after the user clicks on the reset button.
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
      var pointsForWin = 1;
      var pointsForLosses = 1;
      var restart = 0;
      var counter = 0;
      var targetNumber = computerGuess

      totalScoreDom.text(restart);
      wins.text(restart);
      losses.text(restart);
      computerNumDom.text(computerGuess);
      rubyNumDom.text(rubyGuess);
      diamondNumDom.text(diamondGuess);
      yellowNumDom.text(yellowGuess);
      emeraldNumDom.text(emeraldGuess);

      var crystals = $('#ruby');
      var crystals2 = $('#diamond');
      var crystals3 = $('#yellowThingy');
      var crystals4 = $('#emerald');

      crystals.attr('pointValue', rubyGuess);
      crystals2.attr('pointValue2', diamondGuess);
      crystals3.attr('pointValue3', yellowGuess);
      crystals4.attr('pointValue4', emeraldGuess);


      ruby.on('click', function() {
        var crystalPointVal = ($(this).attr('pointValue'));
        crystalPointVal = parseInt(crystalPointVal);
        counter += crystalPointVal;
        totalScoreDom.text(counter);
        if (counter === targetNumber) {
          alert('You Won!')
          winPoints++;
          wins.text(winPoints);
        } else if (counter > targetNumber) {
          alert('You Loss!')
          lossPoints++;
          losses.text(lossPoints);
        }
      })

      diamond.on('click', function() {
        var crystalPointVal2 = ($(this).attr('pointValue2'));
        crystalPointVal2 = parseInt(crystalPointVal2);
        counter += crystalPointVal2;
        totalScoreDom.text(counter);
        if (counter === targetNumber) {
          alert('You Won!')
          winPoints++;
          wins.text(winPoints);
        } else if (counter > targetNumber) {
          alert('You Loss!')
          lossPoints++;
          losses.text(lossPoints);
        }

      })

      yellowThingy.on('click', function() {
        var crystalPointVal3 = ($(this).attr('pointValue3'));
        crystalPointVal3 = parseInt(crystalPointVal3);
        counter += crystalPointVal3;
        totalScoreDom.text(counter);
        if (counter === targetNumber) {
          alert('You Won!')
          winPoints++;
          wins.text(winPoints);
        } else if (counter > targetNumber) {
          alert('You Loss!')
          lossPoints++;
          losses.text(lossPoints);
        }

      })

      emerald.on('click', function() {
        var crystalPointVal4 = ($(this).attr('pointValue4'));
        crystalPointVal4 = parseInt(crystalPointVal4);
        counter += crystalPointVal4;
        totalScoreDom.text(counter);
        if (counter === targetNumber) {
          alert('You Won!')
          winPoints++;
          wins.text(winPoints);
        } else if (counter > targetNumber) {
          alert('You Loss!')
          lossPoints++;
          losses.text(lossPoints);
        }
      })



    })
  }

  // Finally, calling the two game functions to activate. The first activates the game when the page loads and the second activates the game after the user clicks the reset button
  playGame();
  newGame();

});