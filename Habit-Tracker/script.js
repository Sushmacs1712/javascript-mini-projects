const habitInput = document.getElementById("habitInput");
const addBtn = document.getElementById("addBtn");
const habitList = document.getElementById("habitList");
const categoryInput = document.getElementById("categoryInput");
const total = document.getElementById("total");
const completed = document.getElementById("completed");
const remaining = document.getElementById("remaining");
const progressBar = document.getElementById("progressBar");

let habits = JSON.parse(localStorage.getItem("habits")) || [];

function saveHabits() {
    localStorage.setItem("habits", JSON.stringify(habits));
}

function displayHabits() {
    habitList.innerHTML = "";

    habits.forEach((habit, index) => {

        const li = document.createElement("li");
        li.className = habit.done ? "habit completed" : "habit";

        li.innerHTML = `
           <span>
              ${habit.name}
              <small>${habit.category}</small>
          </span>

            <div class="actions">
                <button class="complete-btn" onclick="completeHabit(${index})">
                    ${habit.done ? "Undo" : "Done"}
                </button>

                <button class="delete-btn" onclick="deleteHabit(${index})">
                    Delete
                </button>
            </div>
        `;

        habitList.appendChild(li);
    });

    updateStats();
}


addBtn.addEventListener("click", () => {

    const habitName = habitInput.value.trim();

    if(habitName === "") {
        alert("Please enter a habit");
        return;
    }

    habits.push({
    name: habitName,
    category: categoryInput.value,
    done: false
});

    habitInput.value = "";

    saveHabits();
    displayHabits();
});
habitInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        addBtn.click();
    }
});


function completeHabit(index) {

    habits[index].done = !habits[index].done;

    saveHabits();
    displayHabits();
}


function deleteHabit(index) {

    habits.splice(index, 1);

    saveHabits();
    displayHabits();
}


function updateStats() {

    const totalCount = habits.length;

    const completedCount = habits.filter(
        habit => habit.done
    ).length;

    const remainingCount = totalCount - completedCount;


    total.textContent = totalCount;
    completed.textContent = completedCount;
    remaining.textContent = remainingCount;


    const progress = totalCount === 0 
        ? 0 
        : (completedCount / totalCount) * 100;


    progressBar.style.width = progress + "%";
}


displayHabits();