$(document).ready(function() {
  // Declaring global variables.
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
  var computerGuess = 0
  var rubyNum = 0
  var rubyGuess = 0
  var diamondNum = 0
  var diamondGuess = 0
  var yellowNum = 0
  var yellowGuess = 0
  var emeraldNum = 0
  var emeraldGuess = 0

  function playGame() {
    // Using our friend math.floor-math.round to have the computer select a random number for the user to try and match.
    computerNum = [19, 25, 33, 38, 45, 50, 53, 61, 69, 72, 75, 84, 86, 94, 99, 105, 111, 120];
    computerGuess = computerNum[Math.floor(Math.random() * computerNum.length)];

    // Assinging a random point value to each crystal at the start of each game.
    rubyNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    rubyGuess = rubyNum[Math.floor(Math.random() * rubyNum.length)];

    diamondNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    diamondGuess = diamondNum[Math.floor(Math.random() * diamondNum.length)];

    yellowNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    yellowGuess = rubyNum[Math.floor(Math.random() * yellowNum.length)];

    emeraldNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    emeraldGuess = rubyNum[Math.floor(Math.random() * emeraldNum.length)];

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

  // Function to run when gem is clicked.

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
      playGame()


    } else if (counter > computerGuess) {
      alert('You Loss!')
      counter = 0;
      lossPoints++;
      losses.text(lossPoints);
      totalScoreDom.text(counter);
      isGameOver = true;
      playGame()
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
      playGame()

    } else if (counter > computerGuess) {
      alert('You Loss!')
      counter = 0;
      lossPoints++;
      losses.text(lossPoints);
      totalScoreDom.text(counter);
      isGameOver = true;
      playGame()
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
      playGame()

    } else if (counter > computerGuess) {
      alert('You Loss!')
      counter = 0;
      lossPoints++;
      losses.text(lossPoints);
      totalScoreDom.text(counter);
      isGameOver = true;
      playGame()
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
      playGame()


    } else if (counter > computerGuess) {
      alert('You Loss!')
      counter = 0;
      lossPoints++;
      losses.text(lossPoints);
      totalScoreDom.text(counter);
      isGameOver = true;
      playGame()
    }
  })

  function reset() {
    if (isGameOver = true) {
      playGame()
    }
  }
  playGame()
  reset()
});