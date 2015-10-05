var myRover = {
  position: [0,0], 
  direction: 'N'
};


var grid = [[[9,0],[9,1],[9,2],[9,3],[9,4],[9,5],[9,6],[9,7],[9,8],[9,9]],
            [[8,0],[8,1],["O"],[8,3],[8,4],[8,5],[8,6],[8,7],[8,8],[8,9]],
            [[7,0],[7,1],[7,2],[7,3],[7,4],[7,5],[7,6],[7,7],[7,8],[7,9]],
            [[6,0],[6,1],[6,2],[6,3],[6,4],[6,5],[6,6],[6,7],[6,8],[6,9]],
            [[5,0],[5,1],[5,2],[5,3],[5,4],[5,5],[5,6],[5,7],[5,8],[5,9]],
            [[4,0],[4,1],[4,2],[4,3],[4,4],[4,5],[4,6],[4,7],[4,8],[4,9]],
            [["O"],[3,1],[3,2],[3,3],[3,4],[3,5],[3,6],[3,7],[3,8],[3,9]],
            [[2,0],[2,1],[2,2],["O"],[2,4],[2,5],[2,6],[2,7],[2,8],[2,9]],
            [[1,0],[1,1],[1,2],[1,3],[1,4],[1,5],[1,6],[1,7],[1,8],[1,9]],
            [[0,0],[0,1],[0,2],[0,3],[0,4],[0,5],[0,6],[0,7],[0,8],[0,9]]]; 
// "O" stands for obstacle

function isOnMap(rover) {
  var onMap = 0;
  for (var i = 0; i < grid.length; i++) {
    for (var j = 0; j < grid[i].length; j++) {
      if (grid[i][j][0] === rover.position[0] && grid[i][j][1] === rover.position[1] ) {
        onMap += 1;
      };
    }
  }
  if (onMap === 0) {
    return false;
  }
  else {
    return true;
  }
}
        
function hedgeNine(rover, pos) {
  if (rover.position[pos] === 9) {
        rover.position[pos] = 0;
      } 
      else {
        rover.position[pos]++
      }
}

function hedgeZero(rover, pos) {
  if (rover.position[pos] === 0) {
        rover.position[pos] = 9;
      } 
      else {
        rover.position[pos]--
      }
}

function goForward(rover) {
  switch(rover.direction) {
    case 'N':
      hedgeNine(rover, 0);
    break;
    case 'E':
      hedgeNine(rover, 1);
      break;
    case 'S':
      hedgeZero(rover, 0);
      break;
    case 'W':
      hedgeZero(rover, 1);
      break;
  };
}

function goBack(rover) {
  switch(rover.direction) {
    case 'N':
      hedgeZero(rover, 0);
      break;
    case 'E':
      hedgeZero(rover, 1);
      break;
    case 'S':
      hedgeNine(rover, 0);
      break;
    case 'W':
      hedgeNine(rover, 1);
      break;
  };
}

function turnRight(rover) {
  switch(rover.direction) {
    case 'N':
      rover.direction = 'E';
      break;
    case 'E':
      rover.direction = 'S';
      break;
    case 'S':
      rover.direction = 'W';
      break;
    case 'W':
      rover.direction = 'N';
      break;
  };
}

function turnLeft(rover) {
  switch(rover.direction) {
    case 'N':
      rover.direction = 'W';
      break;
    case 'E':
      rover.direction = 'N';
      break;
    case 'S':
      rover.direction = 'E';
      break;
    case 'W':
      rover.direction = 'S';
      break;
  };
}


function sendOneCommand (rover, command) {
  if (command === "f") {
    goForward(rover);
  }
  else if (command === "b") {
    goBack(rover);
  }
  else if (command === "r") {
    turnRight(rover);
  }
  else if (command === "l") {
    turnLeft(rover);
  }
  else {
    alert("Did not understand '" + command + "', commands are 'f', 'b', 'r' and 'l'.");
  }
  return rover.position;
}

function isObstacle (rover, command) {
  var currentPos = [];
  currentPos.push(rover.position[0]);
  currentPos.push(rover.position[1]);
  sendOneCommand(rover, command);
  if (isOnMap(rover) === true) {
    currentPos = [];
    currentPos.push(rover.position[0]);
    currentPos.push(rover.position[1]);
  }
  else {
    rover.position = currentPos;
    console.log("Next command '" + command + "' leads to an obstacle, please change root and rerun" )
    return;
  }
}

function sendCommands (rover, commands) {
  var commandsArr = commands.split("");
  for (var i = 0; i < commandsArr.length; i++) {
    isObstacle(rover, commandsArr[i]);
  }
  return logPos(rover);
}

function logPos(rover) {
  console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]");
}


// these commands should bring us to postion [9,9], after facing some obstacles
sendCommands(myRover, "ffffffff");
sendCommands(myRover, "rffff");
sendCommands(myRover, "lbbbb");
sendCommands(myRover, "lfff");

