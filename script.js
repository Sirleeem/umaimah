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
function startMusic() {
    backgroundMusic.play().catch(error => {
        console.log("Autoplay blocked, waiting for user interaction to play audio.");
        // If autoplay is blocked, add an event listener to start music on user interaction
        document.addEventListener("click", () => {
            backgroundMusic.play().catch(e => {
                console.log("Failed to play audio on click:", e);
            });
        }, { once: true });
    });
}

// Call the music start function immediately
window.onload = function() {
    startMusic();
};

// UI Elements
const chatButton = document.getElementById("chatButton");
const chatContainer = document.getElementById("chatContainer");
const loginForm = document.getElementById("loginForm");
const usernameInput = document.getElementById("usernameInput");
const loginButton = document.getElementById("loginButton");
const chatInterface = document.getElementById("chatInterface");
const messagesList = document.getElementById("messagesList");
const messageInput = document.getElementById("messageInput");
const sendButton = document.getElementById("sendButton");
const errorMessage = document.createElement("div");
errorMessage.style.color = "red"; // Style for error message
loginForm.appendChild(errorMessage); // Append it to the login form

let currentUser = null;
const allowedUsernames = ["Insom", "Niac"]; // Allowed usernames

// Firebase Firestore Reference
const db = firebase.firestore();

// Toggle the chat interface visibility when the chat button is clicked
chatButton.addEventListener("click", () => {
    // Open the chat interface and login form without affecting the music autoplay
    chatContainer.style.display = "flex";
    loginForm.style.display = "block";
    chatInterface.style.display = "none";
});

// Handle user login with username
loginButton.addEventListener("click", () => {
    const username = usernameInput.value.trim();
    
    if (!allowedUsernames.includes(username)) {
        errorMessage.textContent = "Invalid username. Only 'Insom' or 'Niac' can log in.";
        return;
    }

    currentUser = username;
    loginForm.style.display = "none";
    chatInterface.style.display = "block";
    usernameInput.value = "";

    // Clear the error message if username is valid
    errorMessage.textContent = "";

    // Start displaying messages in real-time from Firestore
    const messagesRef = db.collection("messages");
    messagesRef.orderBy("timestamp").onSnapshot((snapshot) => {
        messagesList.innerHTML = "";  // Clear previous messages
        snapshot.forEach(doc => {
            const message = doc.data();
            const li = document.createElement("li");
            li.textContent = `${message.username}: ${message.text}`;
            messagesList.appendChild(li);
        });
    });
});

// Send message to Firestore
sendButton.addEventListener("click", async () => {
    const messageText = messageInput.value.trim();
    if (messageText === "") return;

    try {
        await db.collection("messages").add({
            username: currentUser,
            text: messageText,
            timestamp: new Date()
        });

        messageInput.value = ""; // Clear message input after sending
    } catch (e) {
        console.error("Error adding document: ", e);
    }
});

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