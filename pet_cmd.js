var unicorn = require('./pet.js');
var readline = require('readline')
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var pet = new unicorn.Pet()

var start = function(answer){
  console.log('Great! Your Tamagotchi is:' + answer);
  pet.name = answer;
  console.log(pet);
  askQuest();
 };

 rl.question ("What would you like to name your Tamagotchi?", start)

 askQuest = function () {
   rl.question("What would you like to do with your pet? play, feed, sleep, quit, or restart?", callBack2 );
 }

callBack2 = function (answer) {
  console.log("Ok, looks like we are going to " +  answer);
  if (answer === "play") {
    pet.play();
    pet.checkAlive();
    console.log(pet);
    askQuest();
  }
  else if (answer === "feed") {
    pet.feed();
    pet.checkAlive();
    console.log(pet);
    askQuest();
    }
  else if (answer === "sleep") { 
    pet.sleep();
    pet.checkAlive();
    console.log(pet);
    askQuest();
  }
  else if (answer === "restart") {
    rl.question ("What would you like to name your Tomagotchi?", start)
    
  }
  else if (answer === "quit"){
        rl.close()
  }   
 
}


