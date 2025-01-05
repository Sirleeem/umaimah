// Countdown Timer Logic
const countdownDate = new Date("Jan 4, 2025 00:00:00").getTime(); // Countdown end date

function updateCountdown() {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    if (distance <= 0) {
        // Countdown has ended
        const endDate = new Date(countdownDate);
        const daysSinceEnded = Math.floor((now - countdownDate) / (1000 * 60 * 60 * 24));

        document.getElementById("countdown").style.display = "none"; // Hide the countdown timer
        const endedMessage = `
            <p>The countdown ended <strong>${daysSinceEnded === 1 ? "yesterday" : daysSinceEnded + " days ago"}</strong>, marking the close of a cherished chapter. Here's to new beginnings.</p>
            <p class="date">Countdown ended on: ${endDate.toDateString()}</p>
        `;

        const countdownEndedElement = document.getElementById("countdownEndedMessage");
        countdownEndedElement.innerHTML = endedMessage;
        countdownEndedElement.style.display = "block"; // Show the message
    } else {
        // Display the remaining time
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("days").innerText = days;
        document.getElementById("hours").innerText = hours;
        document.getElementById("minutes").innerText = minutes;
        document.getElementById("seconds").innerText = seconds;
    }
}

// Run countdown on page load
updateCountdown();
setInterval(updateCountdown, 1000);

// Display Best Wishes Message
const bestWishesMessage = "Wishing you all the best in your journey ahead. Thank you for being part of mine.";
document.getElementById("bestWishesMessage").innerText = bestWishesMessage;