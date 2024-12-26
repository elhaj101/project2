// Block Creation Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Array of block data
    const blocksData = [7, 14, 22, 3, 19, 11, 1, 16, 24, 5, 9, 20, 12, 6, 21, 18, 10, 4, 15, 8, 2, 23, 17, 13];

    // Function to shuffle the array
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]]; // Swap elements
        }
    }

    

    // Shuffle the blocksData array
    shuffleArray(blocksData);

    // Function to create and append blocks
    function createBlocks() {
        const container = document.querySelector('.container-calendar');

        blocksData.forEach((number, index) => {
            // Determine class based on the index (you can customize this logic)
            let blockClass = 'block'; // Default class
            if (index % 3 === 0) blockClass = 'short';
            if (index % 6 === 0) blockClass = 'long';

            // Create block element
            const block = document.createElement('div');
            block.className = blockClass;

            // Create inner content
            const blockContent = document.createElement('div');
            blockContent.className = 'block-content';
            blockContent.textContent = number;

            // Append content to block and block to container
            block.appendChild(blockContent);
            container.appendChild(block);
        });
    }

    // Call the function to create blocks
    createBlocks();
});

// Handle form submission
document.getElementById('nameForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    const name = document.getElementById('name').value;
    console.log('Name submitted:', name); // Log the name for debugging
    // Redirect to the calendar page and pass the name in the URL
    window.location.href = `calendar.html?name=${encodeURIComponent(name)}`;
});