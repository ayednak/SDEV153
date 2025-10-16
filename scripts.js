<script>
    form = document.getElementById('testimonialForm')

    form.addEventListener('submit', function(event) {
        event.preventDefault(); 

        const name = document.getElementById('name').value;
        const message = document.getElementById('testimonial').value;

        document.getElementById('inputName').textContent = name;
        document.getElementById('inputTestimonial').textContent = message;
    });
</script>

