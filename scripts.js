
    
function validateAndDisplay(event) {
    let form = document.getElementById("testimonialForm");
    let output = document.getElementById("saved-testimonials")
    let nameToValidate = form.name.value;
    let messageToValidate = form.testimonal.value;
    let emailToValidate = form.email.value;
    let emailValidationRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
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
        let validatedName = nameToValidate;
        let validatedMessage = messageToValidate;
        

        output.defaultTestimonial.textContent = ""
        output.inputName.textContent = validatedName;
        output.inputTestimonial.textContent = validatedMessage;  
    
    }

form.addEventListener("submit", validateAndDisplay);
}