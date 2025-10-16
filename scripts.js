let form = document.getElementById("testimonialForm");
let nameToValidate = document.getElementById("name").value;
let messageToValidate = document.getElementById("testimonial").value;
let emailToValidate = document.getElementById("email").value;
let emailValidationRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    
function validateAndDisplay(event) {
    if (nameToValidate.length < 2) {
        event.preventDefault();
        return alert("Name must be at least 2 characters long.");
    }
    else if (messageToValidate.length < 15) {
        event.preventDefault();
        return alert("Testimonial must be at least 15 characters long.");
    }
    else if (!emailValidationRegex.test(emailToValidate)) {
        event.preventDefault();
        return alert("Invalid email address format.");
    }
    else {
        let validatedName = document.getElementById("name").value;
        let validatedMessage = form.testimonial.value;

        document.getElementById("inputName").textContent = form.inputName.textinput = validatedName;
        form.inputTestimonial.value = validatedMessage;
        form.defaultTestimonial.value = "";
    }

form.addEventListener("submit", validateAndDisplay);
}