const quotes = [
  "Believe in yourself.",
  "Keep going.",
  "Small steps matter.",
  "Consistency beats motivation."
];

function generateQuote() {
  const random = Math.floor(Math.random() * quotes.length);

  document.getElementById("quote").innerText = quotes[random];
}