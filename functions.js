function sayHello() {
    alert("Hello, welcome to our drink menu!");
}
function logMessage() {
    console.log("This is a log message.");
}

function validateForm() {
    const form = document.forms["contactForm"];
    const name = form["name"].value.trim();
    const email = form["email"].value.trim();
    const message = form["message"].value.trim();

    if (name === "") {
        alert("Name must be filled out");
        return false;
    }
    if (email === "") {
        alert("Email must be filled out");
        return false;
    }
    if (message === "") {
        alert("Message must be filled out");
        return false;
    }

    alert("Form submitted successfully!");
    return true;
}