const input = document.querySelector("input");
const createTodo = document.querySelector(".createTodo");
const deleteAll = document.querySelector(".deleteAll");
const ul = document.querySelector("ul");
const li = document.createElement("li");

createTodo.addEventListener("click", function () {
  ul.innerHTML += `<li>${input.value}</li>`;
  input.value = "";
});
deleteAll.addEventListener("click", function () {
  ul.innerHTML = "";
});
