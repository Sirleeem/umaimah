// Countdown Timer Script
const countdownDate = new Date("Jul 7, 2024 00:00:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = countdownDate - now;

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
const speed = 50;  // Typing speed in milliseconds
const messageElement = document.getElementById("loveMessage");

function typeMessage() {
    if (lineIndex < messageLines.length) {
        if (charIndex < messageLines[lineIndex].length) {
            messageElement.innerHTML += messageLines[lineIndex].charAt(charIndex);
            charIndex++;
            setTimeout(typeMessage, speed);
        } else {
            messageElement.innerHTML += "<br><br>";
            charIndex = 0;
            lineIndex++;
            setTimeout(typeMessage, speed * 10);  // Pause before starting next line
        }
        // Smoothly scroll to the bottom as text is typed
        messageElement.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
}

typeMessage();

// Select the audio element
const backgroundMusic = document.getElementById("backgroundMusic");

// Start playing music when the page loads
window.onload = function() {
    backgroundMusic.play().catch(error => {
        console.log("Autoplay blocked, waiting for user interaction to play audio.");
        // If autoplay is blocked, add an event listener to start music on user interaction
        document.addEventListener("click", () => {
            backgroundMusic.play().catch(e => {
                console.log("Failed to play audio on click:", e);
            });
        }, { once: true });
    });
};

// Hearts Sparkling Animation
const hearts = document.querySelectorAll('.heart');

// Trigger hearts to start floating and sparkling after the typing effect
window.onload = function() {
    setTimeout(() => {
        hearts.forEach(heart => {
            heart.style.opacity = 1; // Hearts fade in
            heart.style.animationPlayState = 'running'; // Start hearts floating
        });
    }, 1000); // Delay to sync with typewriter effect
};