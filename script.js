let ball = {
  id: "ball",
  position: [0, 0],
  diameter: "50px",
  radius: "1000px",
  velocity: 4,
  currentDirection: [-1, -1],
};

let direction = {
  left: [1, 0],
  right: [-1, 0],
  up: [0, -1],
  down: [0, 1],
};

let border = {
  top: 0,
  left: 0,
  right: document.clientWidth,
  bottom: document.clientHeight,
};

function changePosition(item) {
  for (const index in item.position) {
    item.position[index] += item.velocity * item.direction[index];
  }
  return item;
}

function updateDirection() {}

function animate() {}

function main() {
  requestAnimationFrame(updatePos);
}

window.requestAnimationFrame(updatePos);
