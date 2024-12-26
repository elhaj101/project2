// Block Creation Functionality
document.addEventListener('DOMContentLoaded', function() {
    const blocksData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];

    const images = [
       'assets/images/11475871.png',
        'assets/images/11475871.png',
        'assets/images/11475871.png',
        'assets/images/11475871.png',
       'assets/images/11475871.png',
       'assets/images/11475871.png',
        'assets/images/11475871.png',
        'assets/images/11475871.png',
       'assets/images/11475871.png',
        'assets/images/11475871.png',
        'assets/images/11475871.png',
        'assets/images/11475871.png',
        'assets/images/11475871.png',
       'assets/images/11475871.png',
        'assets/images/11475871.png',
       'assets/images/11475871.png',
        'assets/images/11475871.png',
        'assets/images/11475871.png',
        'assets/images/11475871.png',
        'assets/images/11475871.png',
       'assets/images/11475871.png',
       'assets/images/11475871.png',
        'assets/images/11475871.png',
       'assets/images/11475871.png'
    ];

    const quotes = [
        "jfdnvkjfnvkjfdnjkvnbdfjkbvkjdfbnjkvnbdfjbnvkjdfnv kjdfjkvbndfkjvbndfkbvfdjkbnvkjfvkjdfn",
        "Quote for Block 2",
        "Quote for Block 3",
        "Quote for Block 4",
        "Quote for Block 5",
        "Quote for Block 6",
        "Quote for Block 7",
        "Quote for Block 8",
        "Quote for Block 9",
        "Quote for Block 10",
        "Quote for Block 11",
        "Quote for Block 12",
        "Quote for Block 13",
        "Quote for Block 14",
        "Quote for Block 15",
        "Quote for Block 16",
        "Quote for Block 17",
        "Quote for Block 18",
        "Quote for Block 19",
        "Quote for Block 20",
        "Quote for Block 21",
        "Quote for Block 22",
        "Quote for Block 23",
        "Quote for Block 24"
    ];

    function getContent(blockNumber) {
        const index = blockNumber - 1; // Adjust for zero-based index
        return {
            image: images[index],
            quote: quotes[index]
        };
    }

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]]; // Swap elements
        }
    }

    shuffleArray(blocksData);

    function createBlocks() {
        const container = document.querySelector('.container-calendar');

        blocksData.forEach((number, index) => {
            let blockClass = 'block'; // Default class
            if (index % 3 === 0) blockClass = 'short';
            if (index % 6 === 0) blockClass = 'long';

            const block = document.createElement('div');
            block.className = blockClass;

            const blockContent = document.createElement('div');
            blockContent.className = 'block-content';
            blockContent.textContent = number;

            block.appendChild(blockContent);
            container.appendChild(block);

            block.addEventListener('click', function() {
                showModal(number);
                applyCrackedEffect(block); // Use the cracked effect
            });
        });
    }

    // Function to show the modal
    function showModal(blockNumber) {
        const content = getContent(blockNumber);

        // Create modal elements
        const modalOverlay = document.createElement('div');
        modalOverlay.className = 'modal-overlay';
        modalOverlay.style.position = 'fixed';
        modalOverlay.style.top = '0';
        modalOverlay.style.left = '0';
        modalOverlay.style.width = '100%';
        modalOverlay.style.height = '100%';
        modalOverlay.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
        modalOverlay.style.display = 'flex';
        modalOverlay.style.alignItems = 'center';
        modalOverlay.style.justifyContent = 'center';
        modalOverlay.style.zIndex = '1000';

        const modalContent = document.createElement('div');
        modalContent.className = 'modal-content';
        modalContent.style.backgroundColor = '#fff';
        modalContent.style.padding = '20px';
        modalContent.style.borderRadius = '8px';
        modalContent.style.position = 'relative';
        modalContent.style.maxWidth = '600px';
        modalContent.style.width = '80%';

        const closeButton = document.createElement('button');
        closeButton.textContent = 'Close';
        closeButton.style.position = 'absolute';
        closeButton.style.top = '10px';
        closeButton.style.right = '10px';
        closeButton.addEventListener('click', function() {
            document.body.removeChild(modalOverlay);
        });

        const modalImage = document.createElement('img');
        modalImage.src = content.image;
        modalImage.alt = `Image for Block ${blockNumber}`;
        modalImage.style.width = '100%';
        modalImage.style.borderRadius = '8px';

        const modalQuote = document.createElement('p');
        modalQuote.textContent = content.quote;
        modalQuote.style.marginTop = '10px';

        modalContent.appendChild(closeButton);
        modalContent.appendChild(modalImage);
        modalContent.appendChild(modalQuote);
        modalOverlay.appendChild(modalContent);
        document.body.appendChild(modalOverlay);
    }

    // Function to apply the cracked effect
    function applyCrackedEffect(block) {
        block.classList.add('cracked'); // Add cracked class

        // Create additional crack elements
        for (let i = 1; i <= 3; i++) {
            const crackDiv = document.createElement('div');
            crackDiv.className = `crack${i}`;
            block.appendChild(crackDiv);
        }
    }

    createBlocks();
});

// Header Interactivity
const header = document.querySelector('.header');

header.addEventListener('mouseover', function() {
    header.style.color = 'lightblue'; // Change text color on hover
    header.style.cursor = 'pointer'; // Change cursor to pointer
});

header.addEventListener('mouseout', function() {
    header.style.color = 'white'; // Revert text color when not hovered
});

header.addEventListener('click', function() {
    window.location.href = 'index.html'; // Redirect to index.html
});




// Handle form submission
document.getElementById('nameForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    console.log('Name submitted:', name);
    window.location.href = `calendar.html?name=${encodeURIComponent(name)}`;
});