"use strict";

const lables = document.querySelectorAll(".input-div label");

console.log(lables);

lables.forEach(function (label) {
  console.log(label);
  label.innerHTML = label.innerText
    .split("")
    .map(
      (value, index) =>
        `<span style="transition-delay: ${50 * index}ms;">${value}</span>`
    )
    .join("");
});

document.querySelectorAll(".input-div input").forEach(function (element) {
  element.addEventListener("focusin", function () {
    console.log(this);
    console.log(this.previousElementSibling);
    console.log(this.previousElementSibling.children);
    [...this.previousElementSibling.children].forEach((el, index) => {
      el.style.transform = "translateY(-20px)";
      el.style.color = "lightblue";
    });
  });
});

document.querySelectorAll(".input-div input").forEach(function (element) {
  element.addEventListener("focusout", function () {
    console.log(this);
    console.log(this.previousElementSibling);
    console.log(this.previousElementSibling.children);
    [...this.previousElementSibling.children].forEach((el, index) => {
      el.style.transform = "translateY(0px)";
      el.style.color = "#fff";
    });
  });
});

let fn = function () {
  this.firstName = "Revanth";
  console.log(this);
};

function fn1() {
  this.firstName = "Reddy";
  console.log(this);
}

new fn();

new fn1();

var v = 1;
var f1 = function () {
  console.log(v);
};

var f2 = function () {
  var v = 2;
  f1();
};

console.log(v);

f2();

if (true) {
  let p1 = 1;
  const p2 = 2;
  var p3 = 3;
  console.log(p1);
  console.log(p2);
  console.log(p3);
}
/* console.log(p3);
console.log(p1);
console.log(p3); */

function setEnd() {
  var p4 = 10;
}
//console.log(p4);

function printA() {
  console.log(answer);
  var answer = 1;
}
printA();
printA();

let a = 1;
const function1 = function () {
  console.log("In function 1 :" + a);
  a = 2;
};

a = 3;

const function2 = function () {
  console.log("In function 2 :" + a);
};

function1();
function2();
