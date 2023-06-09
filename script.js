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
if(signIn)
{

signIn.addEventListener("submit", async (event) => {
  event.preventDefault();

  const loginEmail = document.querySelector(".signin-email");
  const loginPassword = document.querySelector(".signin-password");

  const email = loginEmail.value;
  const password = loginPassword.value;

  try {
    const userCredential = await firebase.auth().signInWithEmailAndPassword(loginemail, loginpassword);
    // Sign-in successful, you can access the user with userCredential.user
    localStorage.setItem("jwt", "example_token");
    location.href = "./Movie Page/index.html";
  } catch (error) {
    // Handle sign-in errors here
    alert("Sign in failed. Please try again.");
  }

  return false; // Return false to prevent the form submission from refreshing the page
});
}


const signUp = document.querySelector(".popup-signup");

signUp.addEventListener("submit", async (event) => {
  event.preventDefault();

  const email = document.querySelector(".signup-email").value;
  const password = document.querySelector(".signup-password").value;
  const retypepassword = document.querySelector(".signup-retype-password").value;

  if (password !== retypepassword) {
    alert("Passwords don't match");
    return;
  }

  try {
    const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password);
    // Sign-up successful, you can access the user with userCredential.user
    localStorage.setItem("jwt", "example_token");
    location.href = "./Movie Page/index.html";
  } catch (error) {
    // Handle sign-up errors here
    alert("Sign up failed. Please try again.");
  }

  return false; // Return false to prevent the form submission from refreshing the page
});