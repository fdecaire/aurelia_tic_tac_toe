"use strict";
exports.__esModule = true;
var board_1 = require("./board");
var App = /** @class */ (function () {
    function App() {
        this.heading = "Tic Tac Toe";
        this.board = new board_1.Board();
        this.boardtest = "";
    }
    App.prototype.playerMove = function (event, cellNumber) {
        this.board.cells[cellNumber] = "X";
        alert('cellnumber=' + cellNumber + ' cell set to:' + this.board.cells[cellNumber]);
    };
    return App;
}());
exports.App = App;
