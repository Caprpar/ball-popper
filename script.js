let border = {
  top: 0,
  left: 0,
  right: document.body.clientWidth,
  bottom: document.body.clientHeight,
};

let ball = {
  id: "ball",
  position: [border.right / 2, border.bottom / 2],
  diameter: 50,
  radius: "1000px",
  velocity: 4,
  direction: [1, 1],
};

let direction = {
  right: [1, 0],
  left: [-1, 0],
  up: [0, -1],
  down: [0, 1],
};

// adds two vectors to get new directions
function addVector(vec1, vec2) {
  let newVec = [vec1[0] + vec2[0], vec1[1] + vec2[1]];
  console.log(newVec);
  return newVec;
}

function getDirection(isPositiveX, isPositiveY) {
  isPositiveX = isPositiveX ? 1 : -1;
  isPositiveY = isPositiveY ? 1 : -1;
  let x = Math.random();
  let y = Math.random();

  return [x * isPositiveX, y * isPositiveY];
}

// updates items position by multiplying velocity with direction
function updatePosition(item) {
  for (let index = 0; index < item.position.length; index++) {
    item.position[index] += item.velocity * item.direction[index];
  }
  return item;
}

function move(item) {
  document.getElementById(item.id).style.left = `${item.position[0]}px`;
  document.getElementById(item.id).style.top = `${item.position[1]}px`;
  // console.log(document.getElementById(item.id).style.left);
}

//
function checkBorderColision(item) {
  if (item.position[1] >= border.bottom - item.diameter) {
    return "bottom";
  } else if (item.position[1] <= border.top) {
    return "top";
  } else if (item.position[0] >= border.right - item.diameter) {
    return "right";
  } else if (item.position[0] <= border.left) {
    return "left";
  } else {
    return false;
  }
}

function changeDirection(item, border) {
  let currentDirection = item.direction;
  switch (border) {
    case "bottom":
      if (item.direction[0] > 0) {
        item.direction = getDirection(true, false);
      } else {
        item.direction = getDirection(false, false);
      }
      return item;

    case "top":
      if (item.direction[0] > 0) {
        item.direction = getDirection(true, true);
      } else {
        item.direction = getDirection(false, true);
      }

      return item;

    case "right":
      if (item.direction[1] > 0) {
        item.direction = getDirection(false, true);
      } else {
        item.direction = getDirection(false, false);
      }
      return item;

    case "left":
      if (item.direction[1] > 0) {
        item.direction = getDirection(true, true);
      } else {
        item.direction = getDirection(true, false);
      }
      return item;
  }
}

let borderColision = false;

// Set ball properies
function main() {
  border = {
    top: 0,
    left: 0,
    right: document.body.clientWidth,
    bottom: document.body.clientHeight,
  };

  ball = updatePosition(ball);
  borderColision = checkBorderColision(ball);

  if (borderColision) {
    ball = changeDirection(ball, borderColision);
  }

  move(ball);
  requestAnimationFrame(main);
  // console.log(ball.position);
  // console.log(ball.velocity);
}

window.requestAnimationFrame(main);
