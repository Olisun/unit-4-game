$(document).ready(function() {
  //Maion unction for generating the random numbers for the score target
  function newGame() {
    // Using our friend math.floor-math.round to have the computer select a random number for the user to try and match.
    var computerNum = [19, 25, 33, 38, 45, 50, 53, 61, 69, 72, 75, 84, 86, 94, 99, 105, 111, 120];
    var computerGuess = computerNum[Math.floor(Math.random() * computerNum.length)];
    var computerNumDom = $('#random-number');

    // Assinging a random point value to each crystal at the start of each game.
    var rubyNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    var rubyGuess = rubyNum[Math.floor(Math.random() * rubyNum.length)];
    var rubyNumDom = $('#r-num-test'); // --> This sets me up to show the gem point value for reference during developement. Will hide when game ios deployed.

    var diamondNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    var diamondGuess = diamondNum[Math.floor(Math.random() * diamondNum.length)];
    var diamondNumDom = $('#d-num-test'); // --> This sets me up to show the gem point value for reference during developement. Will hide when game ios deployed.

    var yellowNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    var yellowGuess = rubyNum[Math.floor(Math.random() * yellowNum.length)];
    var yellowNumDom = $('#y-num-test'); // --> This sets me up to show the gem point value for reference during developement. Will hide when game ios deployed.

    var emeraldNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    var emeraldGuess = rubyNum[Math.floor(Math.random() * emeraldNum.length)];
    var emeraldNumDom = $('#e-num-test'); // --> This sets me up to show the gem point value for reference during developement. Will hide when game ios deployed.

    // Declaring global variables.
    var ruby = $('#ruby');
    var diamond = $('#diamond');
    var yellowThingy = $('#yellowThingy');
    var emerald = $('#emerald');
    var resetGame = $('#reset');
    var wins = $('#wins-placeholder');
    var losses = $('#losses-placeholder');
    var totalScoreDom = $('#total-score');
    var winPoints = 0;
    var lossPoints = 0;
    var start = 0;
    var counter = 0;

    // This sets the "Your Total Score Is:" from the DOM at 0 at the start of each game.
    totalScoreDom.text(start);
    // This sets the "Wins:" from the DOM at 0 at the start of each game.
    wins.text(start);
    // This sets the "Losses:" from the DOM at 0 at the start of each game.
    losses.text(start);
    // These set the random numbers chosen from arrays above to the selected targets on the DOM. I added the crystals' numbers so I can reference them when building. I sill change the css display to none when deploying the final product so the user won't see them.
    computerNumDom.text(computerGuess);
    rubyNumDom.text(rubyGuess);
    diamondNumDom.text(diamondGuess);
    yellowNumDom.text(yellowGuess);
    emeraldNumDom.text(emeraldGuess);

    // This function starts the inital game.
    function playGame() {
      // Assiging a point value attribute to I can map the random number generated above for each gem.
      ruby.attr('rubyValue', rubyGuess);
      diamond.attr('diamondValue', diamondGuess);
      yellowThingy.attr('yellowThingyValue', yellowGuess);
      emerald.attr('emeraldValue', emeraldGuess);

      // Function to run when gem is clicked.
      ruby.on('click', function() {
        // Using the this keyword maps the random number from the point value attribute above to the click function. Then I convert the attribute value from a string to a number with parse.
        var rubyPointVal = ($(this).attr('rubyValue'));
        rubyPointVal = parseInt(rubyPointVal);
        counter += rubyPointVal;
        totalScoreDom.text(counter);

        if (counter === computerGuess) {
          alert('You won!')
          counter = 0;
          winPoints++;
          wins.text(winPoints);
          totalScoreDom.text(counter);

        } else if (counter > computerGuess) {
          alert('You Loss!')
          counter = 0;
          lossPoints++;
          losses.text(lossPoints);
          totalScoreDom.text(counter);

        }
      })

      diamond.on('click', function() {
        var diamondPointVal = ($(this).attr('diamondValue'));
        diamondPointVal = parseInt(diamondPointVal);
        counter += diamondPointVal;
        totalScoreDom.text(counter);

        if (counter === computerGuess) {
          alert('You won!')
          counter = 0;
          winPoints++;
          wins.text(winPoints);
          totalScoreDom.text(counter);

        } else if (counter > computerGuess) {
          alert('You Loss!')
          counter = 0;
          lossPoints++;
          losses.text(lossPoints);
          totalScoreDom.text(counter);

        }
      })

      yellowThingy.on('click', function() {
        var yellowThingyPointVal = ($(this).attr('yellowThingyValue'));
        yellowThingyPointVal = parseInt(yellowThingyPointVal);
        counter += yellowThingyPointVal;
        totalScoreDom.text(counter);

        if (counter === computerGuess) {
          alert('You won!')
          counter = 0;
          winPoints++;
          wins.text(winPoints);
          totalScoreDom.text(counter);

        } else if (counter > computerGuess) {
          alert('You Loss!')
          counter = 0;
          lossPoints++;
          losses.text(lossPoints);
          totalScoreDom.text(counter);

        }
      })

      emerald.on('click', function() {
        var emeraldPointVal = ($(this).attr('emeraldValue'));
        emeraldPointVal = parseInt(emeraldPointVal);
        counter += emeraldPointVal;
        totalScoreDom.text(counter);

        if (counter === computerGuess) {
          alert('You won!')
          counter = 0;
          winPoints++;
          wins.text(winPoints);
          totalScoreDom.text(counter);

        } else if (counter > computerGuess) {
          alert('You Loss!')
          counter = 0;
          lossPoints++;
          losses.text(lossPoints);
          totalScoreDom.text(counter);

        }

      })
    }

    playGame();
  }
  newGame()
});