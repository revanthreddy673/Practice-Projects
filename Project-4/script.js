/* const container = document.querySelector(".container");

container.addEventListener("click", () => {
  container.classList.add("show");
});
 */

const search = document.querySelector(".search");
const btn = document.querySelector(".btn");
const input = document.querySelector(".input");

btn.addEventListener("click", () => {
  search.classList.toggle("active");
  input.focus();
});
