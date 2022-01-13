const circles = document.querySelectorAll(".circle");

circles.forEach((circle) => {
  let numDots = circle.getAttribute("dot");
  let points = "";
  let rotate = 360 / numDots;
  let percent = (circle.getAttribute("percent") * numDots) / 100;

  for (let i = 1; i <= numDots; i++) {
    let isActive = "";
    i <= percent ? (isActive = "active") : (isActive = "");

    points += `<div class="points ${isActive}" style="--i: ${i}; --r: ${rotate}deg"></div>
          `;

    circle.innerHTML = points;
  }
});
