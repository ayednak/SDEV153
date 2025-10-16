let form = document.getElementById("testimonialForm");
let nameToValidate = form.name.value;
let messageToValidate = form.testimonial.value;
let emailToValidate = form.email.value;
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
        let validatedName = form.name.value;
        let validatedMessage = form.testimonial.value;

        form.inputName.textContent = validatedName;
        form.inputTestimonial.textContent = validatedMessage;
        form.defaultTestimonial.textContent = "";
    }

form.addEventListener('submit', validateAndDisplay);
}