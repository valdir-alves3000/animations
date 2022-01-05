const banner = document.getElementsByClassName("banner")[0];
const blocks = document.getElementsByClassName("blocks");

for (let i = 1; i < 400; i++) {
  banner.innerHTML += "<div class='blocks'>";
  const duration = Math.random() * 5;
  blocks[i].style.animationDuraction = 2 + duration + "s";
  blocks[i].style.animationDuraction = 2 + duration + "s";
  blocks[i].style.animationDelay = duration + "s";
}

const section = document.querySelector("section");
setTimeout(() => {
  section.classList.add("active");
}, 9000);
