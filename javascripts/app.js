// Rover Object Goes Here
// ======================

var rover = {direction:"N", x: 0, y: 0};

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
