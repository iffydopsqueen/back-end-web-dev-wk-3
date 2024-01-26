const pacMen = []; // This array holds all the pacmen

// This function returns an object with random values
function setToRandom(scale) {
  return {
    x: Math.random() * scale,
    y: Math.random() * scale,
  };
}

// Factory to make a PacMan at a random position with random velocity
function makePac() {
  // returns an object with random values scaled {x: 33, y: 21}
  let velocity = setToRandom(10); // {x:?, y:?}
  let position = setToRandom(200);

  // Add image to div id = game
  let game = document.getElementById('game');
  let newimg = document.createElement('img');
  newimg.style.position = 'absolute';
  newimg.src = './images/PacMan1.png';
  newimg.width = 100;

  // TODO: set position here
  newimg.style.left = position.x + 'px';
  newimg.style.top = position.y + 'px';

  // TODO add new Child image to game
  game.appendChild(newimg);

  // return details in an object
  return {
    position,
    velocity,
    newimg,
  };
}

function update() {
  // loop over pacmen array and move each one and move image in DOM
  pacMen.forEach((item) => {
    checkCollisions(item);
    item.position.x += item.velocity.x;
    item.position.y += item.velocity.y;

    item.newimg.style.left = item.position.x;
    item.newimg.style.top = item.position.y;
  });
  setTimeout(update, 20);
}

function checkCollisions(item) {
  // TODO: detect collision with all walls and make pacman bounce
  
  // Get the boundaries of the game area
  const gameWidth = 500;
  const gameHeight = 500;

  const pacmanSize = 250;    // calculate the size of the pacman image (assuming it's square)

  // Check for collisions with the left and right walls 
  if (item.position.x + item.velocity.x + pacmanSize > gameWidth || item.position.x + item.velocity.x < 0) {
    // reverse the x velocity to make Pacman bounce off the walls 
    item.velocity.x = -item.velocity.x;
  }

  // Check for collisions with the top and bottom walls 
  if(item.position.y + item.velocity.y + pacmanSize > gameHeight || item.position.y + item.velocity.y < 0) {
    // reverse the y velocity to make Pacman bounce off the walls
    item.velocity.y = -item.velocity.y;
  }
  
}

function makeOne() {
  pacMen.push(makePac()); // add a new PacMan
}

//don't change this line
if (typeof module !== 'undefined') {
  module.exports = { checkCollisions, update, pacMen };
}
