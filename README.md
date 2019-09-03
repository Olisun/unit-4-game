# Unit-4-Game

## Page preview: 
![](assets/images/screen-shot.png)


## About the project:

We had to build a game where the user clicks on one of 4 gems, each assigned with a random point value at the beginning of the game. Each click adds up the points in a total score box. The user must match the total score with a randomly chosen number shown at the beginning of the game. If they hit that number they win and if they go over they lose. They can't see what each gem is worth so the object is to keep track of each gem's point value in order to add up their total score exactly to match the random number. Wins and losses are tracked


## Techologies used to build:
  * HTML
  * CSS
  * jQuery
  * Javascript

## Methodology:

I created sepearate arrays for the random number shown to the user as well as the gems. Using our friend math.floor-math.round, I got the random numbers for the game target and the point values for each gem. From their, I mapped the random numbers to their respective fields. My logic is detailed in the comments in the game2.js. 

The original game.js had to be refactored in a big way because I ran into major bugs with the score counts. They were not adding up correctly so I went back and reviewed the class jQuery resources from last week. I realized that the numbers were most likely string values. I started a new js file to refactor the game code. 

I built the page structure in HTML by taking separate screen-shots of the gems plus the back ground from the screen-shot given to us in the homework instructions. I used the gem screen-shots to create buttons for the gems. I used css to place the images accordingly on the page.


