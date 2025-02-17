// Function A: Add numbers in an array
function addNumbers(numbers) {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }
    return total;
}

// Function B: Find the maximum number from arguments
function findMaxNumber() {
    let max = -Infinity;
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] > max) {
            max = arguments[i];
        }
    }
    return max;
}

// Function C: Add only numbers from a mixed array
function addOnlyNumbers(items) {
    let total = 0;
    for (let i = 0; i < items.length; i++) {
        const num = parseFloat(items[i]);
        if (!isNaN(num)) {
            total += num;
        }
    }
    return total;
}

// Function D: Get digits from a string
function getDigits(str) {
    let digits = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] >= '0' && str[i] <= '9') {
            digits += str[i];
        }
    }
    return digits;
}

// Function E: Reverse a string
function reverseString(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

// Function F: Get the current date in a readable format
function getCurrentDate() {
    const now = new Date();
    const weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][now.getDay()];
    const year = now.getFullYear();
    const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'][now.getMonth()];
    const day = now.getDate();
    
    return `${weekday}, ${month} ${day}, ${year}`;
}
