
var unicorn = (function() {

function Pet (name) {
  this.name = name;
  this.food = 5;
  this.energy = 5;
  this.happiness = 5;
  this.level = 1;
   
    
  this.play = function () {
        this.food = this.food + this.getRandomIntInclusive(-3, -1);
        this.energy = this.energy + this.getRandomIntInclusive (-3,-1);
        this.happiness = this.happiness + this.getRandomIntInclusive(3,6);
   };

  this.feed = function() {
        this.food = this.food + this.getRandomIntInclusive(2,5);
        this.energy = this.energy + this.getRandomIntInclusive(-4,-2);
        this.happiness = this.happiness + this.getRandomIntInclusive(1,4); 
  
  };

  this.sleep = function() {
        this.food = this.food + this.getRandomIntInclusive(-4,-2);
        this.energy = this.energy + this.getRandomIntInclusive(3,5);
    
  };
   
  this.checkAlive = function() {
    if (this.food > 0 && this.energy > 0 && this.happiness > 0) {
      return true;
    }
    else {
      return false;
    }
  };
    
  this.addLevel = function() {
    if (this.happiness >= 10 && this.food >= 10 && this.energy >= 10){
      this.level ++
      }
    else if (this.happiness >= 20 && this.food >= 20 && this.energy >= 20){
      this.level ++
      }
    else if (this.happiness >= 40 && this.food >= 40 && this.energy >= 40){
      this.level ++
    }
    else if (this.happiness >= 60 && this.food >= 60 && this.energy >= 60){
      this.level ++
    }
    else if (this.happiness >= 100 && this.food >= 100 && this.energy >= 100){
      this.level ++
    }
    
  };
  this.battle = function() {
    var battle_pet = new Pet("Battle Bubba") 
    battle_pet.food = this.getRandomIntInclusive(1,10);
    battle_pet.energy = this.getRandomIntInclusive(1,10);
    battle_pet.happiness= this.getRandomIntInclusive(1,10);
    
      var battle_pet_total = battle_pet.food + battle_pet.energy + battle_pet.happiness;
      var pet_total = this.food + this.energy + this.happiness;
    if ( battle_pet_total > pet_total ) {
      return false}
 };
  
  
  this.getRandomIntInclusive = function(min, max) {
   min = Math.ceil(min);
   max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
 };
}
  

  
  var newPet = {
    "Pet": Pet
  }
  return newPet
}) ()

module.exports = unicorn
  

           