const container = document.querySelector(".container");

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

for (let i = 1; i <= 100; i++) {
  const blocks = document.createElement("div");
  const translateX = randomNumber(-900, 900) + "px";
  const translateY = randomNumber(-500, 500) + "px";
  const scale = randomNumber(1, 5);

  blocks.classList.add("block");
  container.appendChild(blocks);

  blocks.style.setProperty("--i", i);
  blocks.style.setProperty("--translateX", translateX);
  blocks.style.setProperty("--translateY", translateY);
  blocks.style.setProperty("--scale", scale);
}
