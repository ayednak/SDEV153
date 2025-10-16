function functionTest(event) {
    alert("Event listener successfully called function!");
}

alert("Page successfully called scripts.js!");

let form = document.getElementById("testimonialForm");
form.addEventListener("submit", functionTest);

