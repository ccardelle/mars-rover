//Christian Cardelle
//IronHack
//Mars Rover Project 
//March 2019

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
// Function that moves the rover by one space on the grid, depending on direction. Boundaries set to ignore command outside 10x10 array.
function moveForward(rover){
  if (obstacleCheck()){
    return;
  }
  switch(rover.direction){
    case "N":
    if ( rover.y == 0){
      console.log("Northern Boundary reached. Please turn around.");
      break;
    }
  
    else {
    rover.y = rover.y - 1;    
    break;
    }
    case "E":
    if ( rover.x == 10){
      console.log("Eastern Boundary reached. Please turn around.");
      break;
    }
    else {
    rover.x = rover.x + 1;
    break;
    }
    case "S":
    if ( rover.y == 10){
      console.log("Southern Boundary reached. Please turn around.");
      break;
    }
    else {
    rover.y = rover.y + 1;
    break;
    }
    case "W":
    if ( rover.y == 0){
      console.log("Western Boundary reached. Please turn around.");
      break;
    }
    else {
    rover.x = rover.x - 1;
    break;
    
    }

  console.log("moveForward was called")
}
}


// Function that moves the rover backwards by one space on the grid, depending on direction. Boundaries set to ignore command outside 10x10 array.
function moveBackward(rover){
  if (obstacleCheck()){
    return;
  }
  switch(rover.direction){
    case "N":
    if ( rover.y == 10){
      console.log("Southern Boundary reached. Please turn around.");
      break;
    }
  
    else {
    rover.y = rover.y + 1;    
    break;
    }
    case "E":
    if ( rover.x == 0){
      console.log("Western Boundary reached. Please turn around.");
      break;
    }
    else {
    rover.x = rover.x - 1;
    break;
    }
    case "S":
    if ( rover.y == 0){
      console.log("Northern Boundary reached. Please turn around.");
      break;
    }
    else {
    rover.y = rover.y - 1;
    break;
    }
    case "W":
    if ( rover.y == 10){
      console.log("Eastern Boundary reached. Please turn around.");
      break;
    }
    else {
    rover.x = rover.x + 1;
    break;
    
    }

  console.log("moveBackward was called")
}
}

// Function that receives a string as an arg and calls the correct move function depending on the letter. (r,l,f)
function rover_Commands(commands){
var xy = 0;
rover.travelLog.clear; 
for (i = 0; i < commands.length; i++)
  if (commands[i] == "r"){
    turnRight(rover);
    
  
  } else if (commands[i] == "l") {
    turnLeft(rover);
    
  
  } else if (commands[i] == "f") {
    moveForward(rover);
    rover.travelLog[xy] = rover.x + "," + rover.y;
    xy++;

  } else if (commands[i] == "b") {
    moveBackward(rover);
    rover.travelLog[xy] = rover.x + "," + rover.y;
    xy++;
    
  }  else {
    console.log("Can only send r, l, and f as commands, command ignored.")
  }
  console.log(rover.travelLog);  
}
  
//Function checks for collision at coordinates 5,5.  
function obstacleCheck() {
  if (rover.x == 5){
    if (rover.y++ == 5 || rover.y-- == 5){
    console.log("Crashed into a rock at coordinates 5,5. Refresh to try again.");
     return(true);
    } else if (rover.y == 5){
      if (rover.x++ == 5 || rover.x-- == 5){
        console.log("Crashed into a rock at coordinates 5,5. Refresh to try again.");
        return(true);
    }
  }
    

  } 

  else {
    return(false);
  }
}