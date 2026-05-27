const quotes = {

  motivation: [
    "Believe in yourself.",
    "Keep going.",
    "Small steps matter.",
    "Consistency beats motivation."
  ],

  coding: [
    "Code. Debug. Repeat.",
    "Every expert was once a beginner.",
    "Practice improves logic.",
    "Errors help you learn."
  ],

  success: [
    "Success takes patience.",
    "Discipline creates results.",
    "Dream big and work hard.",
    "Stay focused on your goals."
  ]

};

function generateQuote() {

  const category =
  document.getElementById("category").value;

  const selectedQuotes =
  quotes[category];

  const random =
  Math.floor(Math.random() * selectedQuotes.length);

  document.getElementById("quote").innerText =
  selectedQuotes[random];
}