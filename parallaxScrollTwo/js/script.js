let layer = document.querySelector("#layer1");
let layer2 = document.querySelector("#layer2");
let description = document.querySelector("#description");

scroll = window.pageYOffset;

document.addEventListener("scroll", function (e) {
  let offset = window.pageYOffset;
  scroll = offset;
  layer1.style.width = 100 + scroll + "%";

  layer2.style.width = 100 + scroll / 5 + "%";

  layer2.style.left = scroll / 50 + "%";

  description.style.top = -scroll / 20 + "%";
});
