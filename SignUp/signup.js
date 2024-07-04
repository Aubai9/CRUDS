// Input password
var eye = document.getElementById("eye");
var eyeSlash = document.getElementById("eye-slash");
var password = document.getElementById("password");

eye.onclick = function () {
  eye.style.display = "none";
  eyeSlash.style.display = "inline";
  password.setAttribute("type", "password");
};
eyeSlash.onclick = function () {
  eyeSlash.style.display = "none";
  eye.style.display = "block";
  password.setAttribute("type", "text");
};

//Check Inputs

var nameInput = document.getElementById("name");
var email = document.getElementById("email");
var password = document.getElementById("password");
var conFpassword = document.getElementById("conFpassword");
var register = document.getElementById("register");
var accept = document.getElementById("accept");

register.onclick = function () {
  if (
    nameInput.value == "" &&
    email.value == "" &&
    password.value == "" &&
    conFpassword.value == "" &&
    accept.checked == ""
  ) {
    alert("Please You Have To Fill All Inputs  &  Terms ");
  } else if (nameInput.value == "") {
    alert("Please You Have To Fill Name Input");
  } else if (email.value == "") {
    alert("Please You Have To Fill Email Input");
  } else if (password.value == "") {
    alert("Please You Have To Fill Password Input");
  } else if (conFpassword.value == "") {
    alert("Please You Have To Fill Confirm Password Input");
  } else if (accept.checked == "") {
    alert("Please Accept Terms And Conditions");
  } else if (password.value != conFpassword.value) {
    alert("password  does not match confirmPassword");
  } //Local storage
  else {
    localStorage.setItem("Name", nameInput.value);
    localStorage.setItem("Email", email.value);
    localStorage.setItem("Password", password.value);
    setTimeout(() => {
      window.location.href = "../SignIn/signin.html";
    });
  }
};
