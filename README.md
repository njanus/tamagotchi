# tamagotchi
Digital pet game - first boot-camp project

pet.js - Javascript logic for the game
pet.html - main html file 
pet.css - main styling file
pet_app.js - the connection between pet.js and html and css files
pet_cmd.js - for command line interface


Logic:
Pet.js creates a new pet that has a name and the following attributes: happiness, food, energy, and game level.  Happiness, energy, and food are all initially set to 5, while game level is 1.  Functions that will allow the user to interact with the pet include play(), feed(), sleep(), and battle().  The first three functions set attributes to a randomly selected number using getRandomIntInclusive() helper function. The battle() function creates a new pet named "Battle Bubba" and compares it's total combined attribute levels to the user's pet's  total combined attribute levels.  Whichever pet has the higher combined totals is deemed the winner.
The checkAlive() function is used to see if any of the user's pet's attributes are 0 or below and the addLevel() function increases a user's game level if attributes hit specified numbers.  The pet and functions are contained in the module "unicorn".

User's interaction:
Game prompts for the user to enter a name for his/her unicorn and then displays name, happiness stats, food stats, energy stats, and game level, as well as a baby unicorn image.  User can then click a button (PLAY, SLEEP, FEED, BATTLE, RESTART) to interact with his/her unicorn or restart the game.  Each button calls the corresponding function in pet.js and displays the updated stats.  Each button also displays a related unicorn image that appears when clicked.  For example, the PLAY button reveals an image of a unicorn dancing.  If the user's stats go below 0 or if Battle Bubba wins a battle, an alert pops up that the unicorn died and to restart the game to create a new unicorn.  A very tragic unicorn death image involving rainbows is also displayed!
