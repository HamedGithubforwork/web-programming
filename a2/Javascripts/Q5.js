document.addEventListener('DOMContentLoaded', function() {
    getUserInfo();
});

function getUserInfo() {
    const name = prompt("What is your full name?");
    const age = prompt("How old are you?");

    if (name && age) { // Check if both prompts were answered
        const message = `Hi, my name is ${name} and I'm ${age} years old.`;
        document.getElementById('content').textContent = message;
    } else {
        document.getElementById('content').textContent = "No information provided.";
    }
}
