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
  displayTopics();
}

function toggleComplete(id) {
  topics = topics.map(topic =>
    topic.id === id ? { ...topic, completed: !topic.completed } : topic
  );

  saveTopics();
  displayTopics();
}

function deleteTopic(id) {
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

  if (topics.length === 0) {
    progressText.textContent = "Progress: 0%";
    progressFill.style.width = "0%";
    return;
  }

  const completedCount = topics.filter(topic => topic.completed).length;
  const progress = Math.round((completedCount / topics.length) * 100);

  progressText.textContent = `Progress: ${progress}%`;
  progressFill.style.width = `${progress}%`;
}
function toggleDarkMode() {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
}

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
}

function displayTopics() {
  const topicList = document.getElementById("topicList");
  const searchValue = document.getElementById("searchInput").value.toLowerCase();

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

  filteredTopics.forEach(topic => {
    const li = document.createElement("li");

    li.innerHTML = `
      <div class="topic-info">
        <span class="topic-name ${topic.completed ? "done" : ""}">${topic.name}</span>
        <span class="level">Confidence: ${topic.level}</span>
      </div>
      <div class="actions">
        <button onclick="toggleComplete(${topic.id})">
          ${topic.completed ? "Undo" : "Done"}
        </button>
        <button class="delete" onclick="deleteTopic(${topic.id})">Delete</button>
      </div>
    `;

    topicList.appendChild(li);
  });

  updateProgress();
}

displayTopics();

document.getElementById("topicInput").addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    addTopic();
  }
});