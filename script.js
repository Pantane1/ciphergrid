const gridElement = document.getElementById("grid");
const levelElement = document.getElementById("level");
const timerElement = document.getElementById("timer");
const startBtn = document.getElementById("startBtn");
const scoreElement = document.getElementById("score");
const livesElement = document.getElementById("lives");
const comboElement = document.getElementById("combo");
const levelSelect = document.getElementById("levelSelect");

let level = 1;
let gridSize = 3;
let pattern = [];
let userPattern = [];
let timer;
let time = 0;
let score = 0;
let lives = 3;
let combo = 0;
let maxTime = 10;
let isInputAllowed = false;

function createGrid(size) {
    gridElement.innerHTML = "";
    gridElement.style.gridTemplateColumns = `repeat(${size}, 60px)`;

    for (let i = 0; i < size * size; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.dataset.index = i;

        cell.addEventListener("click", () => {
            if (!isInputAllowed) return;

            const index = parseInt(cell.dataset.index);

            // Prevent duplicate clicks
            if (userPattern.includes(index)) return;

            cell.classList.add("active");
            userPattern.push(index);
            checkPattern();
        });

        gridElement.appendChild(cell);
    }
}

function generatePattern(size) {
    pattern = [];
    const totalCells = size * size;
    const numberOfActive = Math.floor(size + 1);

    while (pattern.length < numberOfActive) {
        let random = Math.floor(Math.random() * totalCells);
        if (!pattern.includes(random)) {
            pattern.push(random);
        }
    }
}

function showPattern() {
    const cells = document.querySelectorAll(".cell");
    isInputAllowed = false;

    pattern.forEach(index => {
        cells[index].classList.add("active");
    });

    setTimeout(() => {
        cells.forEach(cell => cell.classList.remove("active"));
        isInputAllowed = true;
        startTimer();
    }, 1500);
}

function startTimer() {
    time = 0;
    timerElement.textContent = time;

    timer = setInterval(() => {
        time++;
        timerElement.textContent = time;

        if (time >= maxTime) {
            handleWrong();
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(timer);
}

function checkPattern() {
    if (userPattern.length === pattern.length) {
        stopTimer();

        const sortedUser = [...userPattern].sort((a, b) => a - b);
        const sortedPattern = [...pattern].sort((a, b) => a - b);

        if (JSON.stringify(sortedUser) === JSON.stringify(sortedPattern)) {
            handleCorrect();
        } else {
            handleWrong();
        }
    }
}

function handleCorrect() {
    combo++;

    let baseScore = level * 100;
    let timeBonus = (maxTime - time) * 10;
    let comboBonus = combo * 50;

    score += baseScore + timeBonus + comboBonus;

    level++;
    gridSize++;
    maxTime = Math.max(4, maxTime - 1);

    updateUI();

    userPattern = [];
    startLevel();
}

function handleWrong() {
    stopTimer();

    lives--;
    combo = 0;

    updateUI();

    if (lives <= 0) {
        endGame();
        return;
    }

    alert("Wrong! Try again.");
    userPattern = [];
    startLevel();
}

function endGame() {
    stopTimer();
    isInputAllowed = false;

    alert("Game Over! Final Score: " + score);

    saveHighScore(score);

    level = 1;
    gridSize = 3;
    score = 0;
    lives = 3;
    combo = 0;
    maxTime = 10;

    updateUI();
    createGrid(gridSize);
}

function saveHighScore(newScore) {
    let highScore = localStorage.getItem("cipherHighScore");

    if (!highScore || newScore > highScore) {
        localStorage.setItem("cipherHighScore", newScore);
        alert("New High Score!");
    }
}

function updateUI() {
    levelElement.textContent = level;
    scoreElement.textContent = score;
    livesElement.textContent = lives;
    comboElement.textContent = combo;
    timerElement.textContent = time;
}

function startLevel() {
    stopTimer();
    userPattern = [];
    createGrid(gridSize);
    generatePattern(gridSize);
    showPattern();
}

startBtn.addEventListener("click", () => {
    // Set the level based on user selection
    level = parseInt(levelSelect.value);
    gridSize = 2 + level;  // Adjust grid size starting from the selected level
    maxTime = Math.max(4, 12 - level); // Adjust maxTime according to level
    
    score = 0;
    lives = 3;
    combo = 0;

    updateUI();
    startLevel();
});


updateUI();
createGrid(gridSize);
