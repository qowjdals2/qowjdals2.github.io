const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");
const ellipsisForm = document.querySelector("#ellipsis-form");
const ellipsis = ellipsisForm.querySelector("input");
const renameBtn = document.querySelector("#renameBtn");
const savedUserName = localStorage.getItem("username");

// localStorage username 검사
if (savedUserName === null) {
  loginForm.classList.remove("hidden");
  loginForm.addEventListener("submit", logInSubmit);
} else {
  greetings(savedUserName);
}

// login
function logInSubmit(event) {
  event.preventDefault();
  const username = loginInput.value;
  localStorage.setItem("username", username);
  loginForm.classList.add("hidden");
  greetings(username);
}

function showModifyUsername(event) {
  renameBtn.classList.toggle("hidden");
}

function modifyUsername(event) {
  event.preventDefault();
  greeting.classList.add("hidden");
  ellipsisForm.classList.add("hidden");
  renameBtn.classList.add("hidden");
  loginForm.classList.remove("hidden");
  loginForm.addEventListener("submit", logInSubmit);
}
