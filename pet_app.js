$(function() {
  


  function getName() { 
   var name = prompt("What would you like to name your Unicorn?");
   alert('Great glitter fun! Your Unicorn is' + " " + name + "!" + " " + "Now choose how to interact with a button below!")
   var pet = new unicorn.Pet(name);
   //console.log(pet)
   displayStats(pet);
   startInteract(pet);
 }
  
  function startInteract(pet) {
  $('#btn_play').click(function(e) { 
    pet.play();
    pet.addLevel();
    displayStats(pet);
    checkAlive(pet);
    $('#pet_img').html( '<img src ="https://yt3.ggpht.com/-PF0HrwyOuQo/AAAAAAAAAAI/AAAAAAAAAAA/AidHdl2RhIc/s900-c-k-no-mo-rj-c0xffffff/photo.jpg" height="300" width ="300">')
  });
  $('#btn_sleep').click(function(e){
    pet.sleep();
    pet.addLevel();
    displayStats(pet);
    checkAlive(pet);
    $('#pet_img').html(' <img src = "https://media.giphy.com/media/EJmHqB2m7pFXG/source.gif" height= "300" width = "300">');
  });
  $('#btn_feed').click(function(e){
    pet.feed();
    pet.addLevel();
    displayStats(pet);
    checkAlive(pet);
    $('#pet_img').html(' <img src = "https://i.pinimg.com/736x/e7/2f/54/e72f54e66f66ba6d14749d31690bef91--polar-bears-crayon.jpg" height ="300" width = "300">')
  });
  $('#btn_battle').click(function(e){
    haveBattle(pet);
  });
  $('#btn_restart').click(function(){
    location.reload(true);
  });
    }
      
  function displayStats(pet) {
   $('#pet_name').html("Unicorn Name: " + " " + pet.name)
   $('#pet_food').html("Food Level:"+ " " + pet.food)
   $('#pet_energy').html("Energy Level:" + " " + pet.energy)
   $('#pet_happiness').html("Happiness Level:" + " " + pet.happiness)
   $('#pet_level').html("Game Level:" + " " + pet.level)
  }
  
  function checkAlive(pet) {
   if (pet.checkAlive() === false){
    $('#pet_img').hide();
    $('#death_img').html('<img src = "http://c8.alamy.com/comp/J9GMDX/anatomy-unicorn-from-belly-intestines-fell-rainbow-dead-fantastic-J9GMDX.jpg" height ="600" width = "600">');
    alert("OH NO! You loved your Unicorn to DEATH! Press Restart to make a new friend.")
    }
  }
  
  function haveBattle(pet) {
    if (pet.battle() === false){
     $('#pet_img').hide();
     $('#death_img').html('<img src = "http://c8.alamy.com/comp/J9GMDX/anatomy-unicorn-from-belly-intestines-fell-rainbow-dead-fantastic-J9GMDX.jpg" height ="600" width = "600">');
     alert("Sorry you died in battle! Press Restart to make a new friend.")
    }
    else {
     alert("Yay! You beat Battle Bubba!")
    }
  }
   
 getName();
  
  
});



 
 
   
   
  

