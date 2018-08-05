import {Board} from './board';

// cd "C:\Users\fdecaire\Documents\Visual Studio 2017\Projects\aurelia-tic-tac-toe"
// http-server -o -c-1
export class App {
    heading = "Tic Tac Toe";
    board = new Board();
    winnerMessage = "";
    cell0 = " ";
    cell1 = " ";
    cell2 = " ";
    cell3 = " ";
    cell4 = " ";
    cell5 = " ";
    cell6 = " ";
    cell7 = " ";
    cell8 = " ";

    playerMove(event, cellNumber: number) {
        if (this.winnerMessage !== "") {
            return;
        }

        if (this.board.cells[cellNumber] !== " ") {
            return;
        }

        this.board.cells[cellNumber] = "X";

        this.translateToLocalVars();
        this.winnerMessage = this.board.checkWin();

        if (this.winnerMessage === "") {
            this.board.doComputerTurn();
            this.translateToLocalVars();
            this.winnerMessage = this.board.checkWin();
        }
    }

    translateToLocalVars() {
        this.cell0 = this.board.cells[0];
        this.cell1 = this.board.cells[1];
        this.cell2 = this.board.cells[2];
        this.cell3 = this.board.cells[3];
        this.cell4 = this.board.cells[4];
        this.cell5 = this.board.cells[5];
        this.cell6 = this.board.cells[6];
        this.cell7 = this.board.cells[7];
        this.cell8 = this.board.cells[8];
    }
}
