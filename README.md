# 🎮 PGrid

A competitive web-based memory puzzle game built with **HTML, CSS, and Vanilla JavaScript**.

CipherGrid challenges players to memorize grid patterns under time pressure while earning points, maintaining combo streaks, and surviving with limited lives.

---

## 🚀 Game Overview

CipherGrid is a progressive memory arcade game where:

- A pattern briefly appears on a grid  
- The player must recreate the pattern  
- Score is calculated based on speed and streaks  
- Difficulty increases every level  
- The game ends when all lives are lost  

---

## 🧠 Core Features

### 🔹 Pattern Memory
- Random pattern generated each level
- Pattern shown for 1.5 seconds
- Player must recall correct cells

### 🔹 Competitive Scoring System

Score formula:

```
Base Score = level × 100
Time Bonus = (maxTime - timeUsed) × 10
Combo Bonus = combo × 50
```

### 🔹 Combo System
- Consecutive wins increase combo multiplier
- Wrong attempt resets combo
- Higher combo = higher rewards

### 🔹 Lives System
- Player starts with 3 lives
- Wrong attempt or timeout reduces a life
- Game ends when lives reach 0

---

## 📈 Progressive Difficulty

| Level | Grid Size | Time Limit |
|--------|-----------|------------|
| 1 | 3×3 | 10s |
| 2 | 4×4 | 9s |
| 3 | 5×5 | 8s |
| 4 | 6×6 | 7s |
| ... | ... | Minimum 4s |

Difficulty increases by:
- Larger grid
- Shorter time limit
- Higher memory complexity

---

## 🏗 Project Structure

```
PGrid/
│
├── index.html
├── style.css
└── script.js
```

### index.html
Handles layout and UI display.

### style.css
Handles styling, grid design, and transitions.

### script.js
Handles:
- Game state management
- Pattern generation
- Timer logic
- Score calculation
- Difficulty scaling
- LocalStorage high score
- Input validation and locking

---

## 🔐 Game State System

Key state variables:

- `level`
- `gridSize`
- `pattern`
- `userPattern`
- `score`
- `lives`
- `combo`
- `maxTime`
- `isInputAllowed`

Clicking is disabled during pattern display.  
Duplicate cell selections are prevented.

---

## 💾 High Score Storage

High score is saved locally using:

```
localStorage
```

This ensures:
- Score persistence across reloads
- Competitive replay value

---

## ⚙️ How To Run

1. Download or clone the repository  
2. Open `index.html` in a browser  
3. Click **Start Level**  
4. Play  

No backend required.

---

## 🧩 Technologies Used

- HTML5  
- CSS3  
- Vanilla JavaScript  
- Browser LocalStorage API  

No frameworks. No external dependencies.

---

## 🔥 Future Enhancements

- Animated pattern sequence reveal
- Sound effects
- Username system
- Global online leaderboard (Node.js backend)
- Rank tiers (Bronze, Silver, Gold)
- Mobile optimization
- PWA support
- Multiplayer mode
- AI-generated difficulty scaling

---

## 🎯 Educational Value

PGrid demonstrates:

- DOM manipulation  
- Event handling  
- State management  
- Timer control  
- Game loop logic  
- Progressive difficulty design  
- Competitive scoring systems  
- Browser storage usage  

---

## 📌 Status

Current Version: Competitive Arcade Mode (Local)

Ready for:
- UI enhancement  
- Backend integration  
- Deployment to Netlify / Vercel / GitHub Pages  

---

## 👨‍💻 Author
[Eng.pantane](https://nf-d.netlify.app/)
Developed this as a competitive web-based memory puzzle system focused on structured game architecture and scalable design.

---

<p align="center">
  <a href="#"><img src="https://github.com/Pantane1/nf/blob/main/public/ph.png" alt="ph-logo"></a>
</p>

<p align="center">
  <a href="#"><img src="http://readme-typing-svg.herokuapp.com?color=ACAF50&center=true&vCenter=true&multiline=false&lines=LONG+LIVE+THE+NJAGI'S" alt=""></a>
</p>
