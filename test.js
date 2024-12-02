// Example for demonstration only – do NOT use in production
const password = "12345678";

// Sample function using the password variable
function checkPassword(input) {
    if (input === password) {
        console.log("Access granted.");
    } else {
        console.log("Access denied.");
    }
}

// Testing the function
checkPassword("12345678"); // Expected output: "Access granted."