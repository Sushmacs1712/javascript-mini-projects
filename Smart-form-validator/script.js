const form = document.getElementById("form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const errors = document.querySelectorAll(".error");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  let isValid = true;

  // Name validation
  if (nameInput.value.trim() === "") {
    errors[0].innerText = "Name is required";
    isValid = false;
  } else {
    errors[0].innerText = "";
  }

  // Email validation
  const emailValue = emailInput.value.trim();
  if (!emailValue.includes("@") || !emailValue.includes(".")) {
    errors[1].innerText = "Enter valid email";
    isValid = false;
  } else {
    errors[1].innerText = "";
  }

  // Password validation
  if (passwordInput.value.trim().length < 6) {
    errors[2].innerText = "Min 6 characters required";
    isValid = false;
  } else {
    errors[2].innerText = "";
  }

  if (isValid) {
    document.getElementById("successMsg").innerText = "Form Submitted Successfully!";
    form.reset();
  }
});

function togglePassword() {
  const pwd = document.getElementById("password");

  if (pwd.type === "password") {
    pwd.type = "text";
  } else {
    pwd.type = "password";
  }
}