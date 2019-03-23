// Rover Object Goes Here
// ======================

var rover = {direction:"N", x: 0, y: 0, travelLog:[]};

// ======================

//Funtion that turns the rover's direction to the left.
function turnLeft(rover){
  switch(rover.direction){
    case "N":
    rover.direction = "W"
    break;

    case "W":
    rover.direction = "S"
    break;

    case "S":
    rover.direction = "E"
    break;

    case "E":
    rover.direction = "N"
    break;
  
  }
  console.log("turnLeft was called!")
  
}
//Funtion that turns the rover's direction to the right.
function turnRight(rover){
  switch(rover.direction){
    case "N":
    rover.direction = "E"
    break;

    case "E":
    rover.direction = "S"
    break;

    case "S":
    rover.direction = "W"
    break;

    case "W":
    rover.direction = "N"
    break;
  
  }
  console.log("turnRight was called!");
}
// Function that moves the rover by one space on the grid, depending on direction.
function moveForward(rover){
  switch(rover.direction){
    case "N":
    rover.y = rover.y - 1;    
    break;

    case "E":
    rover.x = rover.x + 1;
    break;

    case "S":
    rover.y = rover.y + 1;
    break;

    case "W":
    rover.x = rover.x - 1;
    break;
  
  }

  console.log("moveForward was called")
}

// Function that receives a string as an arg and calls the correct command function depending on the letter. (r,l,f)
function rover_Commands(commands){
var xy = 0;
for (i = 0; i < commands.length; i++)
  if (commands[i] == "r"){
    turnRight(rover);
    
  
  } else if (commands[i] == "l") {
    turnLeft(rover);
    
  
  } else if (commands[i] == "f") {
    moveForward(rover);
    rover.travelLog[xy] = rover.x + "," + rover.y;
    xy++;
  } else {
    console.log("Can only send r, l, and f as commands")
  }
  console.log(rover.travelLog);  
}
  
  
