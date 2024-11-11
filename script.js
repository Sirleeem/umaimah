// Greeting message on page load
window.addEventListener('load', function() {
    setTimeout(() => {
        alert("Hey there, beautiful! 💖 This page was made just for you!");
    }, 500);
});

// Countdown timer since July 10, 2024
const startDate = new Date('2024-07-10T00:00:00').getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const elapsed = now - startDate;

    const days = Math.floor(elapsed / (1000 * 60 * 60 * 24));
    const hours = Math.floor((elapsed % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((elapsed % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((elapsed % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
}

// Update countdown every second
setInterval(updateCountdown, 1000);
updateCountdown();

// Love letter animation - sentence by sentence
const letterContent = [
    "Dear Insom,",
    "Every moment with you is like a dream come true.",
    "Your kindness, intelligence, and beauty light up my life in ways I never thought possible.",
    "You make every day brighter, and I am endlessly grateful to have you by my side.",
    "I love you more than words can express and am so excited for every new day we get to share together. ❤️",
    "With all my love,",
    "Your Niac"
];

const letterElement = document.getElementById('letter');
let sentenceIndex = 0;

function typeSentence() {
    if (sentenceIndex < letterContent.length) {
        letterElement.innerHTML += `<p>${letterContent[sentenceIndex]}</p>`;
        sentenceIndex++;
        setTimeout(typeSentence, 2000); // Display each sentence every 2 seconds
    }
}

// Start typing the love letter when the page loads
typeSentence();