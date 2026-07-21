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

    if (
  topics.some(
    topic => topic.name.toLowerCase() === topicName.toLowerCase()
  )
) {
  alert("Topic already exists.");
  return;
}

if (
  topics.some(
    topic => topic.name.toLowerCase() === topicName.toLowerCase()
  )
) {
  alert("Topic already exists.");
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
  const confirmDelete = confirm("Are you sure you want to delete this topic?");

  if (!confirmDelete) return;

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
    
    updateStatistics();
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
const interviewQuestions = [
  {
    category: "JavaScript",
    question: "What is the difference between let, const, and var?",
    answer:
      "var is function-scoped and can be redeclared. let is block-scoped and can be reassigned. const is block-scoped and cannot be reassigned after declaration."
  },
  {
    category: "JavaScript",
    question: "What is event delegation?",
    answer:
      "Event delegation is a technique where one event listener is added to a parent element to handle events triggered by its child elements using event bubbling."
  },
  {
    category: "JavaScript",
    question: "What is the difference between == and ===?",
    answer:
      "The == operator compares values after type conversion, while === compares both value and data type without type conversion."
  },
  {
    category: "JavaScript",
    question: "What is a closure?",
    answer:
      "A closure is created when a function remembers and accesses variables from its outer scope even after the outer function has finished executing."
  },
  {
    category: "React",
    question: "What is the Virtual DOM in React?",
    answer:
      "The Virtual DOM is a lightweight JavaScript representation of the real DOM. React compares changes and updates only the necessary parts of the real DOM."
  },
  {
    category: "React",
    question: "What is the purpose of the useState hook?",
    answer:
      "The useState hook allows functional components to store and update state values."
  },
  {
    category: "React",
    question: "What is the purpose of useEffect?",
    answer:
      "useEffect is used to perform side effects such as fetching data, updating the document title, setting timers, or subscribing to events."
  },
  {
    category: "React",
    question: "What is the difference between props and state?",
    answer:
      "Props are values passed from a parent component and are read-only. State is managed inside a component and can change over time."
  },
  {
    category: "HTML",
    question: "What is semantic HTML?",
    answer:
      "Semantic HTML uses meaningful tags such as header, nav, main, section, article, and footer to clearly describe the structure of a webpage."
  },
  {
    category: "HTML",
    question: "What is the difference between id and class?",
    answer:
      "An id should uniquely identify one element, while a class can be used on multiple elements."
  },
  {
    category: "CSS",
    question: "What is the CSS box model?",
    answer:
      "The CSS box model consists of content, padding, border, and margin."
  },
  {
    category: "CSS",
    question: "What is the difference between Flexbox and Grid?",
    answer:
      "Flexbox is mainly used for one-dimensional layouts, while CSS Grid is designed for two-dimensional layouts using rows and columns."
  },
  {
    category: "CSS",
    question: "What is a media query?",
    answer:
      "A media query applies CSS styles based on conditions such as screen width, helping create responsive webpages."
  },
  {
    category: "SQL",
    question: "What is the difference between WHERE and HAVING?",
    answer:
      "WHERE filters rows before grouping, while HAVING filters grouped results after a GROUP BY operation."
  },
  {
    category: "SQL",
    question: "What is a primary key?",
    answer:
      "A primary key is a column or group of columns that uniquely identifies each row in a database table."
  }
];

let currentQuestionIndex = 0;

function getDailyQuestionIndex() {
  const today = new Date();

  const dateValue =
    today.getFullYear() * 1000 +
    today.getMonth() * 31 +
    today.getDate();

  return dateValue % interviewQuestions.length;
}

function displayInterviewQuestion(index) {
  const questionData = interviewQuestions[index];

  document.getElementById("questionCategory").textContent =
    questionData.category;

  document.getElementById("dailyQuestion").textContent =
    questionData.question;

  document.getElementById("dailyAnswer").textContent =
    questionData.answer;

  document.getElementById("dailyAnswer").classList.add("hidden");

  document.getElementById("showAnswerBtn").textContent =
    "Show Answer";
}

function toggleAnswer() {
  const answerElement = document.getElementById("dailyAnswer");
  const answerButton = document.getElementById("showAnswerBtn");

  answerElement.classList.toggle("hidden");

  if (answerElement.classList.contains("hidden")) {
    answerButton.textContent = "Show Answer";
  } else {
    answerButton.textContent = "Hide Answer";
  }
}

function showNextQuestion() {
  currentQuestionIndex =
    (currentQuestionIndex + 1) % interviewQuestions.length;

  displayInterviewQuestion(currentQuestionIndex);
}
function updateStatistics(){

    const total = topics.length;

    const completed = topics.filter(topic => topic.completed).length;

    const pending = total - completed;

    const percentage =
        total === 0
        ? 0
        : Math.round((completed/total)*100);

    document.getElementById("totalTopics").textContent = total;

    document.getElementById("completedTopics").textContent = completed;

    document.getElementById("pendingTopics").textContent = pending;

    document.getElementById("completionRate").textContent =
        percentage + "%";

}

function loadDailyQuestion() {
  currentQuestionIndex = getDailyQuestionIndex();
  displayInterviewQuestion(currentQuestionIndex);
}

loadDailyQuestion();