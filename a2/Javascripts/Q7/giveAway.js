function validateGiveAwayForm() {
    let isValid = true;
    let errors = [];

    const petType = document.getElementById('petType').value;
    const breed = document.getElementById('breed').value;
    const age = document.getElementById('age').value;
    const gender = document.getElementById('gender').value;
    const ownerFirstName = document.getElementById('ownerFirstName').value;
    const ownerLastName = document.getElementById('ownerLastName').value;
    const email = document.getElementById('ownerEmail').value;

    if (petType === "") {
        errors.push("Please select the type of pet.");
        isValid = false;
    }
    if (breed === "") {
        errors.push("Please select the breed of the pet.");
        isValid = false;
    }
    if (age === "") {
        errors.push("Please select the age of the animal.");
        isValid = false;
    }
    if (gender === "") {
        errors.push("Please select the animal's gender.");
        isValid = false;
    }
    if (ownerFirstName === "") {
        errors.push("Owner's given name is required.");
        isValid = false;
    }
    if (ownerLastName === "") {
        errors.push("Owner's family name is required.");
        isValid = false;
    }
    if (!email || !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
        errors.push("Please provide a valid email address.");
        isValid = false;
    }

    // Display errors
    document.getElementById('errorMessages').innerHTML = errors.join("<br>");

    return isValid;  // Prevent form submission if not valid
}
