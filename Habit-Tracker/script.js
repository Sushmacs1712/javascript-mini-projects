const habitInput = document.getElementById("habitInput");
const addBtn = document.getElementById("addBtn");
const habitList = document.getElementById("habitList");

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
            <span>${habit.name}</span>

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
        done: false
    });

    habitInput.value = "";

    saveHabits();
    displayHabits();
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