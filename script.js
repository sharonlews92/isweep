// Either generate really large minesweeper map or generate more map as player moves on. 

// Start with 5 * 5 grid

// Perhaps start with center tile and then build outwards from that.

// Random number function as will be used a lot in this project.
function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

let map = {};

const center = randomNum(1, 8); // center tile, will have 1 - 8 mines surrounded 

map["0,0"] = center; // Setup like a graph

// Need to pick places for mines surrounding the center.
let minesPlaced = 0;

while (minesPlaced < center) {
  let x = randomNum(-1, 1);
  let y = randomNum(-1, 1);
  if (map[`${x},${y}`]) {
    continue;
  } else {
    map[`${x},${y}`] = "mine";
    minesPlaced++;
  }
}

console.log(map)
// Next step is to make the above loop able to generate mines infinetly as player moves on.