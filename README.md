# Tic Tac Toe

A two-player Tic Tac Toe game that runs in the browser, built with plain HTML, CSS and JavaScript (no frameworks). It's the first game I ever made.

**Live demo:** https://noordeepsinghv.github.io/tic-tac-toe/

## Features

- Two-player game on a 3x3 board, with X and O drawn using Font Awesome icons
- Automatic win detection across all 8 winning lines (3 rows, 3 columns, 2 diagonals)
- The winning three squares flash with a CSS animation
- A sliding turn indicator that shows whose turn it is
- Editable player names (click a name to type your own, before the first move)
- Click a player panel before the first move to choose who starts
- Responsive, fixed-size board that works on desktop and mobile browsers

## How to Play

1. Open the live demo or `index.html` in your browser.
2. (Optional) Rename the players, and click a player's panel to choose who goes first.
3. Click an empty square to place your mark. Player 1 is **X**, Player 2 is **O**.
4. Get three in a row, column or diagonal to win. The winning squares will flash.

## How It Works

- **Board state:** each square has an id (`sq1` to `sq9`). When a player clicks a square, it gets a CSS class (`hasCross` or `hasCircle`), and the X or O is drawn with a `::before` pseudo-element.
- **Win detection:** after every move the script collects the squares held by each player and checks them against the 8 winning combinations using a `Set`.
- **Turn indicator:** a highlighted box slides between the two player panels with a CSS transition by changing its `left` value.
- **Winner highlight:** the three winning squares get a `winnerFlash` class that runs a looping fade and scale animation.

## Tech Stack

- **HTML5** for structure
- **CSS3** for layout (Flexbox), transitions and keyframe animations
- **JavaScript (ES6)** for game logic and DOM events
- **Font Awesome** for the X and O icons
- **GitHub Pages** for hosting

## Run Locally

No build step or dependencies are needed.

```bash
git clone https://github.com/Noordeepsinghv/tic-tac-toe.git
cd tic-tac-toe
```

Then open `index.html` in your browser. An internet connection is needed for the Font Awesome icons to load.

## Project Structure

```
tic-tac-toe/
├── index.html    # Page structure and board markup
├── style.css     # Layout, board lines, animations
├── script.js     # Game logic, win detection, turn handling
└── README.md
```

## Roadmap

- [ ] Reset / New Game button
- [ ] Draw (tie) detection
- [ ] Lock the board and show a winner message when the game ends
- [ ] Score tracking across rounds
- [ ] Single-player mode against a computer opponent
- [ ] Screenshots / GIF of the game in this README

## What I Learned

- Handling DOM events and updating the page from JavaScript
- Using CSS classes and pseudo-elements to show game state
- Building a simple turn-based game loop and win checker
- Deploying a static site with GitHub Pages

## Author

**Noordeep Singh**
GitHub: [@Noordeepsinghv](https://github.com/Noordeepsinghv)
