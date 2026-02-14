const gridElement = document.getElementById("grid");
const levelElement = document.getElementById("level");
const timerElement = document.getElementById("timer");
const startBtn = document.getElementById("startBtn");

let level = 1;
let gridSize = 3;
let pattern = [];
let userPattern = [];
let timer;
let time = 0;

function createGrid(size) {
    gridElement.innerHTML = "";
    gridElement.style.gridTemplateColumns = `repeat(${size}, 60px)`;

    for (let i = 0; i < size * size; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.dataset.index = i;

        cell.addEventListener("click", () => {
            cell.classList.toggle("active");
            userPattern.push(parseInt(cell.dataset.index));
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

    pattern.forEach(index => {
        cells[index].classList.add("active");
    });

    setTimeout(() => {
        cells.forEach(cell => cell.classList.remove("active"));
    }, 1500);
}

function startTimer() {
    time = 0;
    timer = setInterval(() => {
        time++;
        timerElement.textContent = time;
    }, 1000);
}

function stopTimer() {
    clearInterval(timer);
}

function checkPattern() {
    if (userPattern.length === pattern.length) {
        stopTimer();
        const sortedUser = [...userPattern].sort();
        const sortedPattern = [...pattern].sort();

        if (JSON.stringify(sortedUser) === JSON.stringify(sortedPattern)) {
            alert("Correct! Moving to next level.");
            level++;
            gridSize++;
            levelElement.textContent = level;
            userPattern = [];
            startLevel();
        } else {
            alert("Wrong pattern. Try again.");
            userPattern = [];
        }
    }
}

function startLevel() {
    createGrid(gridSize);
    generatePattern(gridSize);
    showPattern();
    startTimer();
}

startBtn.addEventListener("click", startLevel);

createGrid(gridSize);
