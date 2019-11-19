const countDown = document.querySelector('.count-down');

// Set Launch Date (ms)
const launchDate = new Date('Jan 1, 2020 00:01:00').getTime();


// Update every second
const interval = setInterval(() => {
    // Get today's date and time (ms)
    const now = new Date().getTime();

    // Distance from now to the launch date (new year 2020)
    const distance = launchDate - now;

    // Time calculations
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countDown.innerHTML = `<div>${days}<span> Days</span></div>
    <div>${hours}<span> Hours</span></div>
    <div>${mins}<span> Minutes</span></div>
    <div>${seconds}<span> Seconds</span></div>`;

    // If launch date passed
    if (distance < 0) {
        // Stop countdown
        clearInterval(interval);
        // style and output text
        countDown.style.color = '#17a2b8';
        countDown.innerHTML = 'Launched!!!';
    }
}, 1000);