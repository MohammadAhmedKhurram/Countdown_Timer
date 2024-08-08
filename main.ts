function formatTime(ms: number): string {
    const totalSeconds = Math.floor(ms / 1000);
    const days = Math.floor(totalSeconds / (3600 * 24));
    const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
}

function startCountdown(targetDateStr: string): void {
    const targetDate = new Date(targetDateStr);

    if (isNaN(targetDate.getTime())) {
        console.error("Invalid date format. Use YYYY-MM-DDTHH:MM:SS.");
        return;
    }

    const intervalId = setInterval(() => {
        const now = new Date();
        const timeRemaining = targetDate.getTime() - now.getTime();

        if (timeRemaining <= 0) {
            console.log("Time's up!");
            clearInterval(intervalId);
            return;
        }

        console.log(`Time remaining: ${formatTime(timeRemaining)}`);
    }, 1000);
}

// Set the target date and time (ISO 8601 format)
const targetDate = "2024-12-31T23:59:59";

// Start the countdown timer
startCountdown(targetDate);

