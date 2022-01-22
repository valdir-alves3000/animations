const container = document.querySelector(".container");

const random = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

for (let i = 1; i < 100; i++) {
  const star = document.createElement("div");
  const snow = document.createElement("div");
  const size = random(10, 30);

  star.classList.add("small-star");
  star.style.setProperty("--left", random(-50, 150) + "%");
  star.style.animationDelay = 0.2 * i + "s";
  star.style.animationDuration = random(1, 3) + "s";
  star.style.width = size + "px";
  star.style.height = size + "px";

  snow.classList.add("snow-fall");
  snow.style.setProperty("--left", random(0, 90) + "%");
  snow.style.animationDelay = 0.2 * i + "s";

  container.appendChild(star);
  container.appendChild(snow);
}
