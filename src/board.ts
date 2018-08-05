
export class Board {
    cells: string[] = [];

    // Possible winning combinations
    winStates: number[][]=[
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [6, 4, 2]
        ];

    constructor() {
        for (let i = 0; i < 9; i++) {
            this.cells[i] = " ";
        }
    }


    //https://www.neverstopbuilding.com/blog/2013/12/13/tic-tac-toe-understanding-the-minimax-algorithm13
    //http://www.flyingmachinestudios.com/programming/minimax/

    checkWin() {
        if (this.checkForWin("X")) {
            return "X Wins!";
        }
        if (this.checkForWin("O")) {
            return "O Wins!";
        }
        if (!this.areThereAnyMovesLeft()) {
            return "Cat";
        }
        return "";
    }

    areThereAnyMovesLeft() {
        for (let i = 0; i < 9; i++) {
            if (this.cells[i] === " ") {
                return true;
            }
        }
        return false;
    }

    checkForWin(playerSymbol: string) {
        for (let i = 0; i < this.winStates.length; i++) {
            let playerWins = true;
            for (let j = 0; j < 3; j++) {
                if (this.cells[this.winStates[i][j]] !== playerSymbol) {
                    playerWins = false;
                    break;
                }
            }

            if (playerWins) {
                return true;
            }
        }
        return false;
    }

    doComputerTurn() {
        // this is the medium-level difficulty game
        // the end user can beat the computer if they set up the pattern to get a two way win.

        // check if there is a winning square
        // find an empty square
        for (let i = 0; i < 9; i++) {
            if (this.cells[i] === " ") {
                this.cells[i] = "O"; // temporarily set it to "O"
                if (this.checkForWin("O")) {
                    return;
                }
                this.cells[i] = " "; // set it back for now
            }
        }

        // check to block human player
        // find an empty square
        for (let i = 0; i < 9; i++) {
            if (this.cells[i] === " ") {
                this.cells[i] = "X"; // temporarily set it to "X"
                if (this.checkForWin("X")) {
                    this.cells[i] = "O"; // block this cell
                    return;
                }
                this.cells[i] = " "; // set it back for now
            }
        }

        // random empty cell strategy
        var emptyCells: number[] = [];

        // make a list of empty cells to pick from
        for (let i = 0; i < 9; i++) {
            if (this.cells[i] === " ") {
                emptyCells.push(i);
            }
        }

        var index = Math.floor(Math.random() * emptyCells.length);
        this.cells[emptyCells[index]] = "O";
    }
}