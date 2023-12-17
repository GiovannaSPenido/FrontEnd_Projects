const dayNames = ["DOM", "SEG", "TER", "QUA", "QUI", "SEX", "SAB"];
const monthNames = ["JAN", "FEV", "MAR", "ABR", "MAI", "JUN", "JUL", "AGO", "SET", "OUT", "NOV", "DEZ"];

function changeTheme(hours) {
    let r = document.querySelector(":root");

    if (hours <= 18) {
        r.style.setProperty("--bgcolor", "#4DAFE0");
        r.style.setProperty("--contrast-color", "#FFAB10");
        r.style.setProperty("--lighter-color", "#FFFFFF");
        r.style.setProperty("--darker-color", "#FFFF2C");
    } else {
        r.style.setProperty("--bgcolor", "#091921");
        r.style.setProperty("--contrast-color", "#FF105E");
        r.style.setProperty("--lighter-color", "#999A9A");
        r.style.setProperty("--darker-color", "#2C2C2C");
    }
}

function showClock() {
    let date = new Date();

    let weekDay = date.getDay();
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    let currentDate = day + "/" + monthNames[month] + "/" + year;

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    document.querySelector("#current-date").textContent = currentDate;
    document.querySelector("#week-day").textContent = dayNames[weekDay];
    document.querySelector("#hours").textContent = hours;
    document.querySelector("#minutes").textContent = minutes;
    document.querySelector("#seconds").textContent = seconds;

    changeTheme(hours);

    setTimeout(showClock, 200);
}
window.addEventListener("load", showClock);