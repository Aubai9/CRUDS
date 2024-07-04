// Input password
var eye = document.getElementById("eye");
var eyeSlash = document.getElementById("eye-slash");
var pass = document.getElementById("password");

eye.onclick = function () {
  eye.style.display = "none";
  eyeSlash.style.display = "inline";
  pass.setAttribute("type", "password");
};
eyeSlash.onclick = function () {
  eyeSlash.style.display = "none";
  eye.style.display = "block";
  pass.setAttribute("type", "text");
};
//Check Inputs
var email = document.getElementById("email");
var password = document.getElementById("password");
var signIn = document.getElementById("signIn");

signIn.onclick = function () {
  if (email.value == "" && password.value == "") {
    alert("Please You Have Fill All Inputs");
  } else if (email.value == "") {
    alert("Plaese Fill Email Input");
  } else if (password.value == "") {
    alert("Plaese Fill password Input");
  } else if (email.value != localStorage.getItem("Email")) {
    alert("Email is not correct");
  } else if (password.value != localStorage.getItem("Password")) {
    alert("Password is not correct");
  } else {
    setTimeout(() => {
      window.location.href = "../index.html";
    });
  }
};
