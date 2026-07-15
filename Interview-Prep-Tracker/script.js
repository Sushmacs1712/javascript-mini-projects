let topics = JSON.parse(localStorage.getItem("topics")) || [];

let currentFilter = "all";

function saveTopics() {
  localStorage.setItem("topics", JSON.stringify(topics));
}

function addTopic() {
  const topicInput = document.getElementById("topicInput");
  const levelInput = document.getElementById("levelInput");

  const topicName = topicInput.value.trim();

  if (topicName === "") {
    alert("Please enter a topic");
    return;
  }

  const newTopic = {
    id: Date.now(),
    name: topicName,
    level: levelInput.value,
    completed: false
  };

  topics.push(newTopic);

  saveTopics();

  topicInput.value = "";
  levelInput.value = "Beginner";

  displayTopics();
}

function toggleComplete(id) {
  topics = topics.map(topic =>
    topic.id === id
      ? { ...topic, completed: !topic.completed }
      : topic
  );

  saveTopics();
  displayTopics();
}

function deleteTopic(id) {
  const confirmed = confirm("Are you sure you want to delete this topic?");

  if (!confirmed) {
    return;
  }

  topics = topics.filter(topic => topic.id !== id);

  saveTopics();
  displayTopics();
}

function filterTopics(type) {
  currentFilter = type;
  displayTopics();
}

function updateProgress() {
  const progressText = document.getElementById("progressText");
  const progressFill = document.getElementById("progressFill");

  const totalTopics = document.getElementById("totalTopics");
  const completedTopics = document.getElementById("completedTopics");
  const pendingTopics = document.getElementById("pendingTopics");

  const completedCount = topics.filter(topic => topic.completed).length;
  const pendingCount = topics.length - completedCount;

  totalTopics.textContent = topics.length;
  completedTopics.textContent = completedCount;
  pendingTopics.textContent = pendingCount;

  if (topics.length === 0) {
    progressText.textContent = "Progress: 0%";
    progressFill.style.width = "0%";
    return;
  }

  const progress = Math.round(
    (completedCount / topics.length) * 100
  );

  progressText.textContent = `Progress: ${progress}%`;
  progressFill.style.width = `${progress}%`;
}

function toggleDarkMode() {
  document.body.classList.toggle("dark");

  const themeButton = document.querySelector(".theme-btn");

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
    themeButton.textContent = "☀️ Light Mode";
  } else {
    localStorage.setItem("theme", "light");
    themeButton.textContent = "🌙 Dark Mode";
  }
}

function loadTheme() {
  const savedTheme = localStorage.getItem("theme");
  const themeButton = document.querySelector(".theme-btn");

  if (savedTheme === "dark") {
    document.body.classList.add("dark");
    themeButton.textContent = "☀️ Light Mode";
  }
}

function displayTopics() {
  const topicList = document.getElementById("topicList");
  const searchInput = document.getElementById("searchInput");

  const searchValue = searchInput.value.trim().toLowerCase();

  topicList.innerHTML = "";

  let filteredTopics = topics.filter(topic =>
    topic.name.toLowerCase().includes(searchValue)
  );

  if (currentFilter === "completed") {
    filteredTopics = filteredTopics.filter(topic => topic.completed);
  }

  if (currentFilter === "pending") {
    filteredTopics = filteredTopics.filter(topic => !topic.completed);
  }

  if (filteredTopics.length === 0) {
    const emptyMessage = document.createElement("li");
    emptyMessage.className = "empty-message";
    emptyMessage.textContent = "No topics found";
    topicList.appendChild(emptyMessage);

    updateProgress();
    return;
  }

  filteredTopics.forEach(topic => {
    const li = document.createElement("li");

    li.innerHTML = `
      <div class="topic-info">
        <span class="topic-name ${topic.completed ? "done" : ""}">
          ${topic.name}
        </span>

        <span class="level">
          Confidence: ${topic.level}
        </span>
      </div>

      <div class="actions">
        <button onclick="toggleComplete(${topic.id})">
          ${topic.completed ? "Undo" : "Done"}
        </button>

        <button
          class="delete"
          onclick="deleteTopic(${topic.id})"
        >
          Delete
        </button>
      </div>
    `;

    topicList.appendChild(li);
  });

  updateProgress();
}

document
  .getElementById("topicInput")
  .addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      addTopic();
    }
  });

loadTheme();
displayTopics();