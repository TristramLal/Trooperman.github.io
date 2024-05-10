// Array of cat riddles
const catRiddles = [
    "What do you call a pile of kittens?",
    "What's a cat's favorite subject in school?",
    "What do you get when you cross a chick with an alley cat?",
    "What is a cat's favorite color?",
    "What's a cat's favorite TV show?",
    "Why did the cat sit on the computer?",
    "What do you call a cat who likes to bowl?",
    "What is a cat's favorite dessert?",
    "How does a cat end a fight?",
    "What kind of cat should you never play cards with?"
];

// Array of cat riddle answers
const catRiddleAnswers = [
    "A meow-tain!",
    "Hisstory!",
    "A peeping tom!",
    "Purr-ple!",
    "The evening mews!",
    "Because it wanted to keep an eye on the mouse!",
    "An alley cat!",
    "Mice cream!",
    "With a hiss-tory lesson!",
    "A cheetah!"
];

// Function to generate cat riddles
function generateCatRiddles() {
    const riddleList = document.querySelector('.riddle-list');
    riddleList.innerHTML = ''; // Clear existing riddles

    for (let i = 0; i < catRiddles.length; i++) {
        const riddleDiv = document.createElement('div');
        riddleDiv.classList.add('riddle');

        const riddleQuestion = document.createElement('p');
        riddleQuestion.textContent = `${i + 1}. ${catRiddles[i]}`;

        const showAnswerButton = document.createElement('button');
        showAnswerButton.textContent = 'Show Answer';
        showAnswerButton.onclick = function() {
            showAnswer(i);
        };

        const answer = document.createElement('p');
        answer.classList.add('answer');
        answer.textContent = catRiddleAnswers[i];
        answer.style.display = 'none';

        riddleDiv.appendChild(riddleQuestion);
        riddleDiv.appendChild(showAnswerButton);
        riddleDiv.appendChild(answer);

        riddleList.appendChild(riddleDiv);
    }
}

// Function to show answer for a specific riddle
function showAnswer(index) {
    const answer = document.querySelector(`.riddle:nth-child(${index + 1}) .answer`);
    if (answer.style.display === 'none') {
        answer.style.display = 'block';
        changeBackgroundColor(); // Call function to change background color
    } else {
        answer.style.display = 'none';
    }
}

// Function to change background color along the blue spectrum
function changeBackgroundColor() {
    const body = document.querySelector('body');
    const colors = ['#00FFFF', '#00CED1', '#00BFFF', '#4682B4', '#1E90FF']; // Blue spectrum colors
    const bgColor = colors[Math.floor(Math.random() * colors.length)];
    body.style.backgroundColor = bgColor;
}

// Refresh page function
function refreshPage() {
    window.location.reload();
}

// Generate cat riddles when page loads
generateCatRiddles();
