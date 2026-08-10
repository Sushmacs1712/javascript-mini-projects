const quotes = {
   motivation: [
    "Believe in yourself.",
    "Keep going.",
    "Small steps matter.",
    "Consistency beats motivation."
  ],

  coding: [
    "Code. Debug. Repeat.",
    "Practice makes perfect",
    "Every bug teaches something",
    "I love Coding",
    "Coffee + Code = Developer",
    "Programming is 10% coding and 90% fixing bugs.",
    "Life is short. Use semicolons wisely."
  ],

  success: [
    "Success takes patience.",
    "Discipline creates results.",
    "Dream big and work hard.",
    "Stay focused on your goals."
  ],

  life: [
  "Life is about learning every day.",
  "Every day is a fresh start.",
  "Be kind. It costs nothing.",
  "Happiness grows when shared."
],

funny: [
  "Coffee first. Everything else later.",
  "Debugging is like being a detective.",
  "Smile, it confuses people.",
  "Keep calm and refresh the page."
]

};

function copyQuote() {
  const quote = document.getElementById("quote").innerText;

  if (
    quote === "" ||
    quote === "Click the button to generate a quote"
  ) {
    alert("Generate a quote first!");
    return;
  }

  navigator.clipboard.writeText(quote);
  alert("Quote copied!");
}
function generateQuote() {
  const category = document.getElementById("category").value;
  const selectedQuotes = quotes[category];
  const randomIndex = Math.floor(Math.random() * selectedQuotes.length);

  const quoteElement = document.getElementById("quote");

  quoteElement.classList.remove("fade");

  void quoteElement.offsetWidth;

  quoteElement.innerText = selectedQuotes[randomIndex];
  quoteElement.classList.add("fade");
}

let favoriteQuotes =
  JSON.parse(localStorage.getItem("favoriteQuotes")) || [];

function addToFavorites() {
  const quote = document.getElementById("quote").innerText;

  if (
    quote === "" ||
    quote === "Click the button to generate a quote"
  ) {
    alert("Generate a quote first!");
    return;
  }

  if (favoriteQuotes.includes(quote)) {
    alert("Quote already added!");
    return;
  }

  favoriteQuotes.push(quote);

  localStorage.setItem(
    "favoriteQuotes",
    JSON.stringify(favoriteQuotes)
  );

  displayFavorites();
}

function displayFavorites() {
  const list = document.getElementById("favoritesList");

  list.innerHTML = "";

  if (favoriteQuotes.length === 0) {
    list.innerHTML = "<li>No favorite quotes yet.</li>";
    return;
  }

  favoriteQuotes.forEach((quote, index) => {
    list.innerHTML += `
      <li>
        ${quote}
        <button onclick="removeFavorite(${index})">❌</button>
      </li>
    `;
  });
}

function removeFavorite(index) {
  favoriteQuotes.splice(index, 1);

  localStorage.setItem(
    "favoriteQuotes",
    JSON.stringify(favoriteQuotes)
  );

  displayFavorites();
}
displayFavorites();