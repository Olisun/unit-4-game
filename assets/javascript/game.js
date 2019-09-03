// Major refactor to the code below. See game2.js.


// $(document).ready(function() {
//   // Declaring global variables.
//   var ruby = $('#ruby');
//   var diamond = $('#diamond');
//   var yellowThingy = $('#yellowThingy');
//   var emerald = $('#emerald');
//   var resetGame = $('#reset');

//   // This function starts the inital game.
//   function playGame() {
//     // Using our friend math.floor-math.round to have the computer select a random number for the user to try and match.
//     var computerNum = [19, 25, 33, 38, 45, 50, 53, 61, 69, 72, 75, 84, 86, 94, 99, 105, 111, 120];
//     var computerGuess = computerNum[Math.floor(Math.random() * computerNum.length)];
//     var computerNumDom = $('#random-number');
//     // Assinging a random point value to each crystal at the start of each game.
//     var rubyNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
//     var rubyGuess = rubyNum[Math.floor(Math.random() * rubyNum.length)];
//     var rubyNumDom = $('#r-num-test');

//     var diamondNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
//     var diamondGuess = diamondNum[Math.floor(Math.random() * diamondNum.length)];
//     var diamondNumDom = $('#d-num-test');

//     var yellowNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
//     var yellowGuess = rubyNum[Math.floor(Math.random() * yellowNum.length)];
//     var yellowNumDom = $('#y-num-test');

//     var emeraldNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
//     var emeraldGuess = rubyNum[Math.floor(Math.random() * emeraldNum.length)];
//     var emeraldNumDom = $('#e-num-test');

//     var wins = $('#wins-placeholder');
//     var losses = $('#losses-placeholder');
//     var totalScoreDom = $('#total-score');
//     var pointsForWin = 1;
//     var pointsForLosses = 1;
//     var restart = 0;
//     var counter = 0;


//     // This sets the "Your Total Score Is:" from the DOM at 0 at the start of each game.
//     totalScoreDom.text(restart);
//     // This sets the "Wins:" from the DOM at 0 at the start of each game.
//     // wins.text(restart);
//     // This sets the "Losses:" from the DOM at 0 at the start of each game.
//     // losses.text(restart);
//     // These set the random numbers chosen from arrays above to the selected targets on the DOM. I added the crystals' numbers so I can reference them when building. I sill change the css display to none when deploying the final product so the user won't see them.
//     computerNumDom.text(computerGuess);
//     rubyNumDom.text(rubyGuess);
//     diamondNumDom.text(diamondGuess);
//     yellowNumDom.text(yellowGuess);
//     emeraldNumDom.text(emeraldGuess);


//     // Onclick functions that add the point values assigned to each crystal to the total score counter.
//     ruby.on("click", function() {
//       totalScoreDom.text(restart += rubyGuess);
//       counter += rubyGuess;
//       wins.text(counter);
//       document.getElementById('counter-test').innerText = counter;
//     });

//     diamond.on("click", function() {
//       totalScoreDom.text(restart += diamondGuess);
//       counter += diamondGuess;
//       wins.text(counter);
//       document.getElementById('counter-test').innerText = counter;
//     });

//     yellowThingy.on("click", function() {
//       totalScoreDom.text(restart += yellowGuess);
//       counter += yellowGuess;
//       wins.text(counter);
//       document.getElementById('counter-test').innerText = counter;
//     });

//     emerald.on("click", function() {
//       totalScoreDom.text(restart += emeraldGuess);
//       counter += emeraldGuess;
//       wins.text(counter);
//       document.getElementById('counter-test').innerText = counter;
//     });

//     if (typeof counter == 'number') {
//       alert('true')
//     } else {
//       alert('false')
//     };

//     if (counter.value > computerGuess) {
//       alert('you lose')
//     }
//   }



//   // function creates a new game after the user clicks on the reset button.
//   function newGame() {
//     resetGame.on('click', function() {
//       var computerNum = [19, 25, 33, 38, 45, 50, 53, 61, 69, 72, 75, 84, 86, 94, 99, 105, 111, 120];
//       var computerGuess = computerNum[Math.floor(Math.random() * computerNum.length)];
//       var computerNumDom = $('#random-number');

//       var rubyNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
//       var rubyGuess = rubyNum[Math.floor(Math.random() * rubyNum.length)];
//       var rubyNumDom = $('#r-num-test');

//       var diamondNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
//       var diamondGuess = diamondNum[Math.floor(Math.random() * diamondNum.length)];
//       var diamondNumDom = $('#d-num-test');

//       var yellowNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
//       var yellowGuess = rubyNum[Math.floor(Math.random() * yellowNum.length)];
//       var yellowNumDom = $('#y-num-test');

//       var emeraldNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
//       var emeraldGuess = rubyNum[Math.floor(Math.random() * emeraldNum.length)];
//       var emeraldNumDom = $('#e-num-test');

//       var wins = $('#wins-placeholder');
//       var losses = $('#losses-placeholder');
//       var totalScoreDom = $('#total-score');
//       var pointsForWin = 1;
//       var pointsForLosses = 1;
//       var restart = 0;
//       var counter = 0;


//       wins.text(restart);
//       losses.text(restart);
//       computerNumDom.text(computerGuess);
//       rubyNumDom.text(rubyGuess);
//       diamondNumDom.text(diamondGuess);
//       yellowNumDom.text(yellowGuess);
//       emeraldNumDom.text(emeraldGuess);

//       ruby.on("click", function() {
//         totalScoreDom.text(restart += rubyGuess);
//         counter += rubyGuess;
//         wins.text(counter);
//         document.getElementById('counter-test').innerText = counter;
//       });

//       diamond.on("click", function() {
//         totalScoreDom.text(restart += diamondGuess);
//         counter += diamondGuess;
//         wins.text(counter);
//         document.getElementById('counter-test').innerText = counter;
//       });

//       yellowThingy.on("click", function() {
//         totalScoreDom.text(restart += yellowGuess);
//         counter += yellowGuess;
//         wins.text(counter);
//         document.getElementById('counter-test').innerText = counter;
//       });

//       emerald.on("click", function() {
//         totalScoreDom.text(restart += emeraldGuess);
//         counter += emeraldGuess;
//         wins.text(counter);
//         document.getElementById('counter-test').innerText = counter;
//       });

//       // if (counter < 10) {
//       //   alert('you win!')
//       // }

//       if (typeof counter == 'number') {
//         alert('true')
//       } else {
//         alert('false')
//       };
//     })
//   }

//   // Finally, calling the two game functions to activate. The first activates the game when the page loads and the second activates the game after the user clicks the reset button
//   playGame();
//   newGame();

// });