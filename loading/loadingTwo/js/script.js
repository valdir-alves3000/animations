const loader = document.querySelector(".loader");

for (let i = 1; i < 21; i++) {
  const span = document.createElement("span");
  span.style.setProperty("--i", i);
  span.style.setProperty("transform", `rotate(${i * 18}deg)`);

  loader.appendChild(span);
}
