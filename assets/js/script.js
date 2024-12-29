// Block Creation Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Function to get URL parameters
    function getParameterByName(name) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(name);
    }

    // Get the user's name from the URL
    const userName = getParameterByName('name');

    // Display the user's name on the calendar page
    if (userName) {
        const greeting = document.createElement('h2');
        greeting.textContent = `Welcome, ${userName}! Enjoy your Advent Calendar!`;
        greeting.style.color = 'white'; 
        document.querySelector('.container-calendar').insertAdjacentElement('afterbegin', greeting);
    }

    const blocksData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];

    const images = [
        'assets/images/11475871.png',
        'assets/images/brigitte2.jpg',
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
        "jhvhjvhjvjhvhvhvbhjvhjbvhjbbhvhgjvhgcghvhhkbhjvhjvjhvhjbjbbjhbjk",
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

    const messages = [
        "Oh wow, {name}! You won a coupon!",
        "Congratulations, {name}! You found a surprise!",
        "Great job, {name}! Enjoy your special gift!",
        "Hooray, {name}! You've unlocked a new feature!",
        "Awesome, {name}! You get an extra treat!",
        "Way to go, {name}! You're a star!",
        "Fantastic, {name}! Here's a bonus for you!",
        "Cheers, {name}! You’ve won a mystery prize!",
        "Yay, {name}! Celebrate your win!",
        "Good news, {name}! You've earned a special reward!",
        "Wow, {name}! A delightful surprise awaits you!",
        "Keep it up, {name}! More rewards are on the way!",
        "Amazing, {name}! You've discovered something great!",
        "Woohoo, {name}! Enjoy your exclusive offer!",
        "Bravo, {name}! You’re doing fantastic!",
        "Look at you, {name}! Winning all the way!",
        "Well done, {name}! Here's something just for you!",
        "Exciting news, {name}! A surprise is here!",
        "Yippee, {name}! You've hit the jackpot!",
        "Surprise, {name}! You are the lucky one today!",
        "Nice work, {name}! More surprises await!",
        "Fantastic find, {name}! Enjoy your coupon!",
        "You did it, {name}! Here's a special gift!",
        "Incredible, {name}! You've won a treat!",
        "Lucky you, {name}! A special surprise is yours!"
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

    function showModal(blockNumber) {
        const content = getContent(blockNumber);
        
        // Randomly select a message and replace {name} with the user's name
        const randomMessage = messages[Math.floor(Math.random() * messages.length)].replace('{name}', userName);

        // Disable body scroll
        document.body.style.overflow = 'hidden';

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
        modalContent.style.overflowY = 'auto'; // Enable vertical scrolling
        modalContent.style.maxHeight = '80vh'; // Limit height
        modalContent.style.border = '2px solid white'; // Add thin white border

        const closeButton = document.createElement('button');
        closeButton.textContent = 'Close';
        closeButton.style.position = 'absolute';
        closeButton.style.top = '10px';
        closeButton.style.right = '10px';
        closeButton.addEventListener('click', function() {
            document.body.removeChild(modalOverlay);
            document.body.style.overflow = ''; // Re-enable body scroll
        });

        const modalImage = document.createElement('img');
        modalImage.src = content.image;
        modalImage.alt = `Image for Block ${blockNumber}`;
        modalImage.style.width = '100%';
        modalImage.style.borderRadius = '8px';

        const modalQuote = document.createElement('p');
        modalQuote.textContent = content.quote;
        modalQuote.style.marginTop = '10px';

        const modalMessage = document.createElement('p'); // Create a new paragraph for the random message
        modalMessage.textContent = randomMessage; // Set the personalized random message
        modalMessage.style.marginTop = '10px'; // Add some space

        modalContent.appendChild(closeButton);
        modalContent.appendChild(modalImage);
        modalContent.appendChild(modalQuote);
        modalContent.appendChild(modalMessage); // Append the personalized message
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