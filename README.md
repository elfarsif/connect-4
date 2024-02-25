# Connect Four Game

Connect Four is a classic two-player game where the objective is to be the first to form a horizontal, vertical, or diagonal line of four discs of your color. This version of the game is implemented using HTML, CSS, and JavaScript. Below is an overview of the game and its features.

## Features

1. **Game Board**: The game board consists of a grid of cells where players can drop their discs.

2. **Player Turns**: Players take turns dropping their discs into the columns of the game board.

3. **Winning Condition**: The game automatically detects when a player achieves four discs in a row horizontally, vertically, or diagonally and declares them as the winner.

4. **Current Player Display**: The current player's turn is displayed on the screen, allowing players to know whose turn it is.

## How to Play

1. **Start**: The game starts automatically upon loading the web page.

2. **Player Turns**: Players take turns clicking on the columns and row of the game board to drop their discs. 

3. **Objective**: The objective is to be the first player to form a line of four discs of your color either horizontally, vertically, or diagonally.

4. **Winning**: The game ends and declares a winner as soon as one player successfully forms a line of four discs.

## How It Was Built

The game was built using HTML, CSS, and JavaScript. Here's a brief overview of the components:

- **HTML**: Defines the structure of the game board and elements like the current player display and result message.

- **CSS**: Provides styling to the game elements, including the game board grid and disc colors.

- **JavaScript**: Handles the game logic, including detecting winning conditions, switching player turns, and updating the game board.

The game uses a two-dimensional array to represent the game board and checks for winning conditions using predefined winning arrays.

## Credits

- This game was created by Frank-Norris El Farsi.

Feel free to contribute to the project by submitting pull requests or reporting issues on GitHub. Enjoy playing!

[Live Demo](https://elfarsif.github.io/connect-4/)
