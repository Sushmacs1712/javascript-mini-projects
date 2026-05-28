const form = document.getElementById("form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const errors = document.querySelectorAll(".error");
const strengthText = document.getElementById("passwordStrength");



passwordInput.addEventListener("input", function () {
  const value = passwordInput.value;
  let score = 0;

  if (value.length >= 8) score++;
  if (/[A-Z]/.test(value)) score++;
  if (/[0-9]/.test(value)) score++;
  if (/[!@#$%^&*]/.test(value)) score++;

  if (score <= 1) {
    strengthText.innerText = "Weak";
    strengthText.style.color = "red";
  } else if (score <= 3) {
    strengthText.innerText = "Medium";
    strengthText.style.color = "orange";
  } else {
    strengthText.innerText = "Strong";
    strengthText.style.color = "green";
  }
});

form.addEventListener("submit", function(e) {
  e.preventDefault();
 
  let isValid = true;

  if (nameInput.value.trim() === "") {
    errors[0].innerText = "Name is required";
    isValid = false;
  } else {
    errors[0].innerText = "";
  }

  const emailValue = emailInput.value.trim();

  if (emailValue === "") {
    errors[1].innerText = "Email is required";
    isValid = false;
  } 
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue)) {
    errors[1].innerText = "Enter valid email";
    isValid = false;
  } 
  else {
    errors[1].innerText = "";
  }

  if (passwordInput.value.trim().length < 6) {
    errors[2].innerText = "Min 6 characters required";
    isValid = false;
  } else {
    errors[2].innerText = "";
  }

  if (isValid) {
    alert("Form submitted successfully!");
    document.getElementById("successMsg").innerText = "Form Submitted Successfully!";
    form.reset();
    strengthText.innerText = "";
  }
  function togglePassword() {
  const passwordField = document.getElementById("password");

  if (passwordField.type === "password") {
    passwordField.type = "text";
  } else {
    passwordField.type = "password";
  }
}
});