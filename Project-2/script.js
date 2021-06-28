"use strict";

const prevBtn = document.querySelector("#prev");
const nextBtn = document.querySelector("#next");
const numbers = document.querySelectorAll(".number");
const progress = document.querySelector(".barline");

let currentActive = 1;

nextBtn.addEventListener("click", function () {
  if (currentActive >= numbers.length) {
    currentActive = numbers.length;
  } else {
    currentActive++;
  }
  console.log(currentActive);
  update();
});

prevBtn.addEventListener("click", function () {
  if (currentActive <= 1) {
    currentActive = 1;
  } else {
    currentActive--;
  }
  console.log(currentActive);
  update();
});

function update() {
  console.log(this);
  numbers.forEach(function (num, index) {
    if (index < currentActive) {
      num.classList.add("active");
    } else {
      num.classList.remove("active");
    }
  });

  //progress line
  const activeClasses = document.querySelectorAll(".active");
  progress.style.width =
    ((activeClasses.length - 1) / (numbers.length - 1)) * 100 + "%";
  console.log(progress);

  if (currentActive === 1) {
    prevBtn.disabled = true;
  } else if (currentActive === numbers.length) {
    nextBtn.disabled = true;
  } else {
    prevBtn.disabled = false;
    nextBtn.disabled = false;
  }
}
