document.getElementById('nameForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    const name = document.getElementById('name').value;
    console.log('Name submitted:', name);
    // Add your logic for what to do after submission, e.g., redirect or display a message
});