const tasks = [
  "Drink Water 💧",
  "Take a 5-minute Walk 🚶",
  "Push Code to GitHub 🚀",
  "Read 2 Pages 📚",
  "Clean Your Desk 🧹",
  "Practice One CSS Selector 🎨",
  "Write One JavaScript Function 💻",
  "Stretch for 1 Minute 🧘",
  "Revise One Interview Answer 📝",
  "Take a Deep Breath 🌿",
  "Do your best robot dance for 10 seconds 🤖",
  "Smile at yourself in the mirror 😄",
  "Say 'I'm a coding genius!' three times 😎",
  "High-five yourself ✋",
  "Pretend you're presenting at Google for 20 seconds 🎤",
  "Spin around once... carefully! 🌀",
  "Send yourself a thumbs up 👍",
  "Roar like a lion 🦁",
  "Clap five times 👏",
  "Stand up and touch your toes 🙆",
  "Balance on one leg for 15 seconds 🦩",
  "Make your happiest face 😁",
  "Do 5 jumping jacks 🤸",
  "Take a victory pose 🏆",
  "Pretend you're accepting an Oscar 🎬",
  "Tell yourself one compliment 💙",
  "Hum your favorite song for 15 seconds 🎶",
  "Close your eyes and count to 10 ⏳",
  "Do your funniest laugh 😂",
  "Pretend you're a superhero for 10 seconds 🦸"
];

function spinTask() {
  const randomIndex = Math.floor(Math.random() * tasks.length);
  document.getElementById("taskBox").innerText = tasks[randomIndex];
}