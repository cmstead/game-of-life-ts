export default {
    board: [[' ']],
    init(x, y) {
        for (let i = 0; i < x; i++) {
            this.board[i] = [];
            for (let j = 0; j < y; j++) {
                this.board[i][j] = ' ';
            }
        }
    },
    run() {
        for (const rowIndex in this.board) {
            for(const cellIndex in this.board[rowIndex]) {
                const cellIndexInt = parseInt(cellIndex)
                const rowIndexInt = parseInt(rowIndex)
                // do not check for dead cells
                if (this.board[rowIndexInt][cellIndexInt] !== 'o') {
                    continue;
                }
                let numberOfLiveNeighbours = 0;
                if (rowIndexInt < this.board.length - 1 && this.board[rowIndexInt + 1][cellIndexInt] === 'o') {
                    numberOfLiveNeighbours++;
                }
                if (this.board[rowIndexInt][cellIndexInt + 1] === 'o') {
                    numberOfLiveNeighbours++;
                }
                
                if(numberOfLiveNeighbours < 2) {
                    this.board[rowIndexInt][cellIndexInt] = ' ';
                }

            }
        }
    },
    setCell(x, y, value) {
        if (!this.board[x]) {
            this.board[x] = [];
        }

        this.board[x][y] = value;
    },

    getBoard() {
        return this.board
    },
}