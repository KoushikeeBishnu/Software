const body = document.querySelector("body");

window.addEventListener("load", () => {
  body.classList.add("visible");
});

document.querySelector(".login").addEventListener("click", function () {
  document.querySelector(".popup-login").style.display = "flex";
});

document.querySelector(".close1").addEventListener("click", function () {
  document.querySelector(".popup-login").style.display = "none";
});

document.querySelector(".signup").addEventListener("click", function () {
  document.querySelector(".popup-signup").style.display = "flex";
});

document.querySelector(".close2").addEventListener("click", function () {
  document.querySelector(".popup-signup").style.display = "none";
});

document.querySelector(".noaccount").addEventListener("click", function () {
  alert("Please sign up first");
  document.querySelector(".popup-signup").style.display = "flex";
  document.querySelector(".popup-login").style.display = "none";
});

document.querySelector(".contactUs").addEventListener("click", function () {
  location.href = "./ContactUs/index.html";
});

document.querySelector(".aboutUs").addEventListener("click", function () {
  location.href = "./AboutUs/aboutUs.html";
});

document.querySelector(".authButton1").addEventListener("click", function () {
  location.href = "https://movie-ticket-2810.herokuapp.com/auth/google";
});

document.querySelector(".authButton2").addEventListener("click", function () {
  location.href = "https://movie-ticket-2810.herokuapp.com/auth/facebook";
});

document.querySelector(".authButton3").addEventListener("click", function () {
  location.href = "https://movie-ticket-2810.herokuapp.com/auth/google";
});

document.querySelector(".authButton4").addEventListener("click", function () {
  location.href = "https://movie-ticket-2810.herokuapp.com/auth/facebook";
});

const signIn = document.querySelector(".popup-login");

signIn.addEventListener("submit", (event) => {
  event.preventDefault();

  const loginEmail = document.querySelector(".signin-email");
  const loginPassword = document.querySelector(".signin-password");

  const email = loginEmail.value;
  const password = loginPassword.value;

  // Perform login logic here without API authentication

  // Example logic:
  if (email === "example@example.com" && password === "password") {
    localStorage.setItem("jwt", "example_token");
    location.href = "./Movie Page/index.html";
  } 
  // else {
  //   alert("Sign in again");
  // }
});

const signUp = document.querySelector(".popup-signup");

signUp.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = document.querySelector(".signup-email").value;
  const name = document.querySelector(".signup-username").value;
  const contact = document.querySelector(".signup-contact").value;
  const password = document.querySelector(".signup-password").value;
  const retypepassword = document.querySelector(".signup-retype-password").value;

  if (password !== retypepassword) {
    alert("Passwords don't match");
    return;
  }

  // Perform sign up logic here without API authentication

  // Example logic:
  localStorage.setItem("jwt", "example_token");
  location.href = "./Movie Page/index.html";
});
