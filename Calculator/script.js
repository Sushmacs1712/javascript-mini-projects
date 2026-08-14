function calculate(operator) {
  let a = Number(document.getElementById("num1").value);
  let b = Number(document.getElementById("num2").value);

  let result;

  if (operator === "+") {
    result = a + b;
  } else if (operator === "-") {
    result = a - b;
  } else if (operator === "*") {
    result = a * b;
  } else if (operator === "/") {
    if (b === 0) {
      result = "Cannot divide by 0";
    } else {
      result = a / b;
    }
  }

  document.getElementById("result").innerText = result;
}