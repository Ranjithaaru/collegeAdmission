document.getElementById('admissionForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Assuming you have a function to handle form submission and confirmation logic
    handleFormSubmission();

    // Redirect to the confirmation page
    window.location.href = 'confirmation.html';
});
