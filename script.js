// Countdown Timer Script
const countdownDate = new Date("Jul 7, 2024 00:00:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = now - countdownDate;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
}

setInterval(updateCountdown, 1000);

// Typing Effect for Love Message
const messageLines = [
    "Dear Insom,",
    "Every moment with you is like a dream come true.",
    "Your kindness, intelligence, and beauty light up my life in ways I never thought possible.",
    "You make every day brighter, and I am endlessly grateful to have you by my side.",
    "I love you more than words can express and am so excited for every new day we get to share together. ❤️",
    "With all my love,",
    "-Your Niac"
];

let lineIndex = 0;
let charIndex = 0;
const speed = 50; 