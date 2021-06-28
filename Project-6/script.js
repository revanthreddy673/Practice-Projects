"use strict";

const landingPart1 = document.querySelector(".landing-part1");
const landingPart2 = document.querySelector(".landing-part2");

landingPart1.addEventListener("mouseenter", function () {
  landingPart1.style.width = "75%";
  landingPart2.style.width = "25%";
  landingPart1.style.zIndex = 1;
  landingPart2.style.zIndex = 0;
});

landingPart2.addEventListener("mouseenter", function () {
  landingPart2.style.width = "75%";
  landingPart1.style.width = "25%";
  landingPart2.style.zIndex = 1;
  landingPart1.style.zIndex = 0;
});

landingPart1.addEventListener("mouseleave", function () {
  landingPart1.style.width = "50%";
  landingPart2.style.width = "50%";
});

landingPart2.addEventListener("mouseleave", function () {
  landingPart1.style.width = "50%";
  landingPart2.style.width = "50%";
});

{
  /* <i class="fas fa-home"></i>
<i class="fas fa-car"></i>
<i class="fas fa-ship"></i>
<i class="fas fa-motorcycle"></i>
<i class="fas fa-ticket-alt"></i>
<i class="fas fa-money-check-alt"></i> */
}
