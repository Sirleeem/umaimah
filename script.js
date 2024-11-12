const backgroundMusic = document.getElementById("backgroundMusic");
const musicButton = document.getElementById("musicButton");
const chatButton = document.getElementById("chatButton");
const chatContainer = document.getElementById("chatContainer");

musicButton.addEventListener("click", () => {
    backgroundMusic.play().catch(error => {
        document.addEventListener("click", () => {
            backgroundMusic.play().catch(e => console.log("Failed to play audio:", e));
        }, { once: true });
    });
    musicButton.style.display = "none";
});

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
            setTimeout(typeMessage, speed * 10);
        }
        messageElement.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
}

typeMessage();

const loginForm = document.getElementById("loginForm");
const usernameInput = document.getElementById("usernameInput");
const loginButton = document.getElementById("loginButton");
const chatInterface = document.getElementById("chatInterface");
const messagesList = document.getElementById("messagesList");
const messageInput = document.getElementById("messageInput");
const sendButton = document.getElementById("sendButton");
const errorMessage = document.createElement("div");
errorMessage.style.color = "red";
loginForm.appendChild(errorMessage);

let currentUser = null;
const allowedUsernames = ["Insom", "Niac"];

chatButton.addEventListener("click", (event) => {
    event.stopPropagation();
    chatContainer.style.display = "flex";
    loginForm.style.display = "block";
    chatInterface.style.display = "none";
});

loginButton.addEventListener("click", () => {
    const username = usernameInput.value.trim();
    if (!allowedUsernames.includes(username)) {
        errorMessage.textContent = "Invalid username. Only 'Insom' and 'Niac' are allowed.";
    } else {
        errorMessage.textContent = "";
        currentUser = username;
        loginForm.style.display = "none";
        chatInterface.style.display = "flex";
    }
});

sendButton.addEventListener("click", () => {
    const message = messageInput.value.trim();
    if (message) {
        const messageItem = document.createElement("li");
        messageItem.innerHTML = `<strong>${currentUser}:</strong> ${message}`;
        messagesList.appendChild(messageItem);
        messageInput.value = "";
        messagesList.scrollTop = messagesList.scrollHeight;
    }
});

document.addEventListener("click", (event) => {
    if (!chatContainer.contains(event.target) && event.target !== chatButton) {
        chatContainer.style.display = "none";
    }
});