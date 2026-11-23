function changeTheme() {
    var themeButton = document.getElementById("themeButton");
    var savedTheme = localStorage.getItem("artoraTheme");

    if (savedTheme === "dark") {
        localStorage.setItem("artoraTheme", "light");
        themeButton.innerHTML = "Dark Theme";
    } else {
        localStorage.setItem("artoraTheme", "dark");
        themeButton.innerHTML = "Light Theme";
    }

    applySavedTheme();
}

// true right after the button is clicked, so the jump to the top does not show the button again
var jumpingToTop = false;

// show the button when the user scrolls down
function showBackToTop() {
    if (jumpingToTop) {
        jumpingToTop = false;
        return;
    }
    document.getElementById("backToTop").style.display = "block";
}

// go back to the top of the page and hide the button
function backToTop() {
    jumpingToTop = true;
    location.replace("#top");
    document.getElementById("backToTop").style.display = "none";
}

function updateClock() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    if (hours < 10) {
        hours = "0" + hours;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    document.getElementById("clock").innerHTML = hours + ":" + minutes + ":" + seconds;
}

function startHome() {
    var savedTheme = localStorage.getItem("artoraTheme");
    var themeButton = document.getElementById("themeButton");

    if (savedTheme === "dark") {
        themeButton.innerHTML = "Light Theme";
    } else {
        themeButton.innerHTML = "Dark Theme";
    }

    updateClock();
    setInterval(updateClock, 1000);
}

window.onscroll = showBackToTop;
window.onload = startHome;
