function validateAndDisplay(event) {
    alert("Event Listener successfully called function.")
    let nameToValidate = document.getElementById("name").value;
    alert("Name to Validate is "+ nameToValidate);
    let messageToValidate = document.getElementById("testimonial").value;
    alert("Message to Validate is "+ messageToValidate);
    let emailToValidate = document.getElementById("email").value;
    alert("Email to Validate is "+ emailToValidate);
    let emailValidationRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    alert("Email Validation Regex is "+ emailValidationRegex);
    
    if (nameToValidate.length == 0) {
        event.preventDefault();
        return alert("Name field cannot be empty.");
    }
    else if (nameToValidate.length < 2) {
        event.preventDefault();
        return alert("Name must be at least 2 characters long.");
    }
    else if (messageToValidate.length < 15) {
        event.preventDefault();
        return alert("Testimonial must be at least 15 characters long.");
    }
    else if (emailToValidate.length == 0) {
        event.preventDefault();
        return alert("Email field cannot be empty.");
    }
    else if (!emailValidationRegex.test(emailToValidate)) {
        event.preventDefault();
        return alert("Invalid email address format. Format must be email@domain");
    }
    else {
        event.preventDefault();
        alert("Function validated input fields")
        let validatedName = nameToValidate;
        alert("Validated Name is "+ validatedName);
        let validatedTestimonial = messageToValidate;
        alert("Validated Testimonial is "+ validatedTestimonial);
        let outputName = document.getElementById("inputName");
        alert("Output Name is "+ ouputName);
        let outputTestimonial = document.getElementById("inputTestimonial");
        alert("Output Testimonial is "+ outputTestimonial);
        let defaultTestimonial = document.getElementById("defaultTestimonial");
        alert("Default Testimonial is "+ defaultTestimonial);
      
        outputName.textContent = validatedName;
        outputTestimonial.textContent = validatedTestimonial;
        defaultTestimonial.textContent = "";
        alert("Function updated output fields(?)")
    }
}
alert("Page successfully loaded scripts.js")
let form = document.getElementById("testimonialForm");
form.addEventListener("submit", validateAndDisplay);

