/*

Transition the state of board[i][j] from:

0 -> dead
1 -> live

0 -> 0
0 -> 1
1 -> 0
1 -> 1

*/


export default class Board {
    width: number;
    height: number;
    board: string[][];
    constructor (m, n) {
        this.width = m;
        this.height = n;
        this.board = [];
        for (let j = 0; j < n; j++) {
            this.board[j]= [];
        }
        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                this.board[i][j] = '';
            }
        }
    }

    set(coord, value) {
        this.board[coord[0]][coord[1]] = value;
    }
    
    get(coord) {
        return this.board[coord[0]][coord[1]];
    }
}

