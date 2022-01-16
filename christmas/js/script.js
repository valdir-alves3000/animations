const container = document.querySelector(".container");

const random = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

for (let i = 1; i < 100; i++) {
  const star = document.createElement("div");
  const snow = document.createElement("div");

  star.classList.add("small-star");
  star.style.setProperty("--left", random(-50, 150) + "%");
  star.style.animationDelay = 0.2 * i + "s";

  snow.classList.add("snow-fall");
  snow.style.setProperty("--left", random(0, 90) + "%");
  snow.style.animationDelay = 0.2 * i + "s";

  container.appendChild(star);
  container.appendChild(snow);
}
