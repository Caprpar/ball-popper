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
  velocity: 0.5,
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
  return [vec1[0] + vec2[0], vec1[1] + vec2[1]];
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
  console.log(document.getElementById(item.id).style.left);
}

//
function checkBorderColision(item) {
  if (item.position[1] >= border.bottom - item.diameter) {
    return "bottom";
  } else if (item.position[1] <= border.top - item.diameter / 2) {
    return "top";
  } else if (item.position[0] >= border.right - item.diameter) {
    return "right";
  } else if (item.position[0] <= border.left - item.diameter / 2) {
    return "left";
  } else {
    return false;
  }
}

function changeDirection(item, border) {
  let currentDirection = item.direction;
  switch (border) {
    case "bottom":
      item.direction = addVector(currentDirection, [1, -1]);
      return item;
    case "top":
      item.direction = addVector(currentDirection, [-1, 1]);
      return item;
    case "right":
      item.direction = addVector(currentDirection, [-1, -1]);
      return item;
    case "left":
      item.direction = addVector(currentDirection, [1, 1]);
      return item;
  }
}

let borderColision = false;

// Set ball properies
function main() {
  ball = updatePosition(ball);
  borderColision = checkBorderColision(ball);

  if (borderColision) {
    ball = changeDirection(ball, borderColision);
  }

  move(ball);
  requestAnimationFrame(main);
  console.log(ball.position);
}

window.requestAnimationFrame(main);
