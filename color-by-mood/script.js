function changeMood(mood) {
  const message = document.getElementById("message");

  if (mood === "happy") {
    document.body.style.background = "linear-gradient(135deg, #fceabb, #f8b500)";
    message.textContent = "Yay! Keep smiling today 😊";
  } 
  else if (mood === "calm") {
    document.body.style.background = "linear-gradient(135deg, #d4fc79, #96e6a1)";
    message.textContent = "Stay peaceful and relaxed 🌿";
  } 
  else if (mood === "tired") {
    document.body.style.background = "linear-gradient(135deg, #cfd9df, #e2ebf0)";
    message.textContent = "Take rest, you deserve it 😴";
  } 
  else if (mood === "motivated") {
    document.body.style.background = "linear-gradient(135deg, #a18cd1, #fbc2eb)";
    message.textContent = "You got this! Keep going 🚀";
  }
}