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