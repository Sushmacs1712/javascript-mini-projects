function updateClock(){

    const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    let greeting = "";

const hour = now.getHours();

if (hour < 12) {
    greeting = "🌅 Good Morning";
} else if (hour < 17) {
    greeting = "☀️ Good Afternoon";
} else if (hour < 21) {
    greeting = "🌆 Good Evening";
} else {
    greeting = "🌙 Good Night";
}

document.getElementById("greeting").textContent = greeting;

    hours = String(hours).padStart(2,"0");
    minutes = String(minutes).padStart(2,"0");
    seconds = String(seconds).padStart(2,"0");

    document.getElementById("clock").textContent =
        `${hours}:${minutes}:${seconds}`;

    const options = {
        weekday:"long",
        year:"numeric",
        month:"long",
        day:"numeric"
    };
    document.getElementById("date").textContent =
        now.toLocaleDateString("en-US", options);
}

  

updateClock();

setInterval(updateClock,1000);
const themeBtn = document.getElementById("themeBtn");

// Load saved theme
if(localStorage.getItem("theme") === "light"){
    document.body.classList.add("light");
    themeBtn.textContent = "🌞 Light Mode";
}

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("light");

    if(document.body.classList.contains("light")){
        themeBtn.textContent = "🌞 Light Mode";
        localStorage.setItem("theme","light");
    }else{
        themeBtn.textContent = "🌙 Dark Mode";
        localStorage.setItem("theme","dark");
    }

});