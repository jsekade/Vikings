//////////Constructor Vikings//////////

var Vikings = function (name,health, strength) {
	this.name = name;
	this.health = health;
	this.strength = strength;
}

var viking1 = new Vikings ("Eusebio",50,6);
var viking2 = new Vikings ("Juan",35,3);


//////////pit fights//////////



function pitfight(viking1,viking2){
   
    var strike = 1;
    
    while (viking1.health >= 1 && viking2.health >= 1){
    	if (viking1.strength >= viking2.health){
    		console.log("El combate a terminado," + viking2.name + 
    			" no puede recibir más golpes. El ganador es " + viking1.name);
    		break
    	}else if (viking2.strength >= viking1.health){
    		console.log("El combate a terminado," + viking1.name + 
    			" no puede recibir más golpes. El ganador es " + viking2.name);
    		break
    	}else {
          console.log("Ataque " + strike);
          viking1.health = viking1.health - viking2.strength;
          viking2.health = viking2.health - viking1.strength;
          console.log(" A " + viking1.name + " le queda " + viking1.health + " puntos de salud ");
          console.log(" A " + viking2.name + " le queda " + viking2.health + " puntos de salud ");
          
        } 
        strike++;  
	}
}

console.log(pitfight(viking1,viking2));



//////////////////////////////////////////////
//var vikingstrike = Math.random();
//if (vikingstrike < 0.50){
//	viking.losthealth = viking.losthealth - 1;
//}else {
//	viking.losthealth = viking.losthealth - 3;
//}
