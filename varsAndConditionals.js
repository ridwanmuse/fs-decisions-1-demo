// In this file, we'll be using variables, conditionals,
// and loops to model a soccer match.

// In this file, we'll be using variables, conditionals, and loops to model a soccer match between the Emerald eagles and Draconian Dragrons.

// Create variables to represent the two team's offense and defense ability based on stats from previous games.
let eaglesOff = 9;
let dragonOff = 5;
let eaglesDef = 6;
let dragonDef = 3;

// Before the game, fans decide to check their stats. Using an if-else statement, console.log whose offense is better.
// What if we have a tie? Our code would actually say the Emerald Eagles have a better offense, which would be incorrect. Add an else if to resolve this.

if (dragonOff > eagleOff) {
    console.log("The Emerald Eagles have a better offense than the Draconian Dragons.");
} else if (eaglesOff > dragonOff) {
     console.log("The Draconian Dragons have a better offense than the Emerald Eagles.");
} else {
    console.log(" The two teamd have the same offense ability.");
    }

    // The game begins! Create two variables to represent the starting scores of the teams.
    let eaglesScore = 0;
    let dragonScore = 0;
    // The Dragons start with the ball — use an if/else to determine if the Eagles’ defense is enough to prevent them from scoring. If it is not enough, console.log “The Dragons have scored.” and update the score. Otherwise, console.log “The game continues”.
    if (dragonOff > eagleDef) {
         console.log("The Dragons have scored.")
        // dragonScore = dragonScore++
        // dragonScore += 1;
        dragonScore = dragronScore + 1;
         } else {
            console.log ("The game continues.");
         }

         // Now the Eagles have the ball and are trying to score! Use an if/else to determine if the Dragons’ defense is enough to prevent them from scoring. If they do, console.log “The Eagles have scored.” and update the score. Otherwise, console.log “The game continues”.
         if (eagleOff > dragonDef) {
            console.log("The Eagles have scored.");
            // dragonScore++;
            // dragonScore += 1;
            eagleScore = eagleScore + 1;
         } else {
            console.log ("The game continues.");
         }
         // After playing a long time, the players are tired. The coach for the Eagles team decides to swap out one of the offensive players for their best offensive player. This player will raise the offense ability of the team by 5. However, the offense ability cannot canont exceed 10. Using an if else statement, increase the Eagles’ offense ability to the correct value.
        if (eagleOff <= 5) {
            eaglesOff += 5;
        } else {
            eaglesOff = 10;
        }
        // eaglesOff = eagleOff + 5;
        // if (eagleOff > 10) {
        //     eagleOff = 10;
        // }
        // console.log(eagleOff);

        // The coach for the Dragons team is thinking about taking a timeout. She decides to flip a coin, and if the coin lands on heads, she will take a timeout. If it lands on tails, she won’t. Create a variable called coinLandsHeads and set it equal to false. Then, using an if-else statement and the equality operator, handle the value of the flipped coin (handle for both true and false).
        let coinlandsHeads = false;
        // if (coinLandsHeads === true) {
        //    console.log("The Dragons coach fails timeout.")
        //} else {
        //    console.log("Let's keep playing.");
        //}

        // Demonstrate how you can use != to accomplish the same thing.
        if (coinLandsHeads) {
            console.log("Let's keep playing.")
        } else {
            console.log("The Dragons coach fails timeout.");
            // Let’s see how this game will play out if it continues. Create a for loop to model the Eagles scoring 5 times. Console.log the scores of the teams after each goal.
for (let i = 0; i < 5; i++) {
    // looping five times from i=1 to i=5
    if (eagleoff > dragonDef) {
        console.log("The Eagles have scored.");
        eaglesScore= eaglesScore + 1;
        console.log('And the score are: Eagles $
    }   {eaglesScore} Dragons ${dragonsScore}');
    } else {
       console.log ("The game continues.");
    
       // Demonstrate a while loop that will have the Dragons keep making goals until their score is 5. You will need to comment out the above for loops for these to run properly.
       