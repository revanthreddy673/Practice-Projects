"use strict";

document.querySelectorAll(".item").forEach(function (el) {
  el.addEventListener("click", function () {
    console.log(el.textContent);
    let audio = new Audio(`sounds/${el.textContent}.mp3`);
    audio.currentTime = 0;
    audio.play();
  });
});
