$(document).ready(function() {
  // Declaring global variables. Setting the random numbers as global variables but then I reset them inside the playGame function so they can be assigned their random numbers.
  var ruby = $('#ruby');
  var diamond = $('#diamond');
  var yellowThingy = $('#yellowThingy');
  var emerald = $('#emerald');
  var wins = $('#wins-placeholder');
  var losses = $('#losses-placeholder');
  var totalScoreDom = $('#total-score');
  var computerNumDom = $('#random-number');
  var diamondNumDom = $('#d-num-test');
  var rubyNumDom = $('#r-num-test');
  var yellowNumDom = $('#y-num-test');
  var emeraldNumDom = $('#e-num-test');
  var winPoints = 0;
  var lossPoints = 0;
  var start = 0;
  var counter = 0;
  var isGameOver = false;
  var computerGuess = 0;
  var rubyGuess = 0;
  var diamondGuess = 0;
  var yellowGuess = 0;
  var emeraldGuess = 0;

  function playGame() {
    // Using our friend math.floor-math.round to have the computer select a random number from an array of numbers from 19-120. I know this is the long method. Will change to the method used for the gems if I can come up with a formula by myself
    computerNum = [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120];
    computerGuess = computerNum[Math.floor(Math.random() * computerNum.length)];

    // Assinging a random point value to each crystal at the start of each game.

    rubyGuess = Math.floor(Math.random() * 12) + 1;
    diamondGuess = Math.floor(Math.random() * 12) + 1;
    yellowGuess = Math.floor(Math.random() * 12) + 1;
    emeraldGuess = Math.floor(Math.random() * 12) + 1;

    // This sets the "Your Total Score Is:" from the DOM at 0 at the start of each game.
    totalScoreDom.text(start);
    // This sets the "Wins:" from the DOM at 0 at the start of each game.
    wins.text(winPoints);
    // This sets the "Losses:" from the DOM at 0 at the start of each game.
    losses.text(lossPoints);
    // These set the random numbers chosen from arrays above to the selected targets on the DOM. I added the crystals' numbers so I can reference them when building. I sill change the css display to none when deploying the final product so the user won't see them.
    computerNumDom.text(computerGuess);
    rubyNumDom.text(rubyGuess);
    diamondNumDom.text(diamondGuess);
    yellowNumDom.text(yellowGuess);
    emeraldNumDom.text(emeraldGuess);
  }

  // Function to run when gems are clicked. Each gem's point value is added to the counter and if the counter matches the computerGuess, they win. Go over they lose. Wins and losses are incremented and the DOM elememnts are updated. I then call the reset function in each click function.

  ruby.on('click', function() {
    counter += rubyGuess;
    totalScoreDom.text(counter);

    if (counter === computerGuess) {
      alert('You won!')
      counter = 0;
      winPoints++;
      wins.text(winPoints);
      totalScoreDom.text(counter);
      isGameOver = true;
      reset()

    } else if (counter > computerGuess) {
      alert('You Loss!')
      counter = 0;
      lossPoints++;
      losses.text(lossPoints);
      totalScoreDom.text(counter);
      isGameOver = true;
      reset()
    }
  })

  diamond.on('click', function() {
    counter += diamondGuess;
    totalScoreDom.text(counter);

    if (counter === computerGuess) {
      alert('You won!')
      counter = 0;
      winPoints++;
      wins.text(winPoints);
      totalScoreDom.text(counter);
      isGameOver = true;
      reset()

    } else if (counter > computerGuess) {
      alert('You Loss!')
      counter = 0;
      lossPoints++;
      losses.text(lossPoints);
      totalScoreDom.text(counter);
      isGameOver = true;
      reset()
    }
  })

  yellowThingy.on('click', function() {
    counter += yellowGuess;
    totalScoreDom.text(counter);

    if (counter === computerGuess) {
      alert('You won!')
      counter = 0;
      winPoints++;
      wins.text(winPoints);
      totalScoreDom.text(counter);
      isGameOver = true;
      reset()

    } else if (counter > computerGuess) {
      alert('You Loss!')
      counter = 0;
      lossPoints++;
      losses.text(lossPoints);
      totalScoreDom.text(counter);
      isGameOver = true;
      reset()
    }
  })

  emerald.on('click', function() {
    counter += emeraldGuess;
    totalScoreDom.text(counter);

    if (counter === computerGuess) {
      alert('You won!')
      counter = 0;
      winPoints++;
      wins.text(winPoints);
      totalScoreDom.text(counter);
      isGameOver = true;
      reset()


    } else if (counter > computerGuess) {
      alert('You Loss!')
      counter = 0;
      lossPoints++;
      losses.text(lossPoints);
      totalScoreDom.text(counter);
      isGameOver = true;
      reset()
    }
  })

  // This function resets the game if variable isGameOver changes from false to true. The gem clicks changes that variable. The reset function calls and the playgame function
  function reset() {
    if (isGameOver = true) {
      playGame()
    }
  }
  // Finally calling the two functions to activiate the game.
  playGame()
  reset()
});