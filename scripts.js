function validateAndDisplay(event) {
    let nameToValidate = document.getElementById("name").value;
    let messageToValidate = document.getElementById("testimonial").value;
    let emailToValidate = document.getElementById("email").value;
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
       let validatedTestimonial = messageToValidate;
       
       let ouputName = document.getElementById("inputName");
       let outputTestimonial = document.getElementById("inputTestimonial");
       let defaultTestimonial = document.getElementById("defaultTestimonial");
      
       ouputName.textContent = validatedName;
       outputTestimonial.textContent = validatedTestimonial;
       defaultTestimonial.textContent = "";
    }

let form = document.getElementById("testimonialForm");
form.addEventListener("submit", validateAndDisplay);
}
