function updateDateTime() {
    const now = new Date();
    const dateTimeString = now.toLocaleString('en-US', {
        weekday: 'long', // "Monday"
        year: 'numeric', // "2023"
        month: 'long', // "July"
        day: 'numeric', // "1"
        hour: '2-digit', // "12 AM/PM"
        minute: '2-digit', // "00"
        second: '2-digit' // "00"
    });
    document.getElementById('dateTimeDisplay').innerText = dateTimeString;
}

setInterval(updateDateTime, 1000); // Update every second
