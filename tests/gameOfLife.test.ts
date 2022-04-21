import gameOfLife from "../src/gameOfLife";

describe('Game Of Life Rules', () => {
    it('a dead cell stays dead', () => {
        gameOfLife.run()
        const board = gameOfLife.getBoard()
        expect(board[0][0]).toBe(' ');
    });

    it('when a cell is alone, it dies.', () => {
        const board = gameOfLife.getBoard();
        board[0][0] = 'o';
        gameOfLife.run();
        expect(board[0][0]).toBe(' ');
    })

    it('survives when cell has two nieghbours', () => {
        gameOfLife.init(2, 2);
        const board = gameOfLife.getBoard();
        gameOfLife.setCell(0, 0, 'o');
        gameOfLife.setCell(0, 1, 'o');
        gameOfLife.setCell(1, 0, 'o');

        gameOfLife.run()
        
        expect(board[0][0]).toBe('o');
    })
    it('survives when cell has three neighbours', () => {
        gameOfLife.init(2, 2);
        const board = gameOfLife.getBoard();
        gameOfLife.setCell(0, 0, 'o');
        gameOfLife.setCell(0, 1, 'o');
        gameOfLife.setCell(1, 0, 'o');
        gameOfLife.setCell(1, 1, 'o');

        gameOfLife.run()
        
        expect(board[0][0]).toBe('o');

    })
    it('dies when cell has four neighbours', () => {
        gameOfLife.init(3, 3);
        const board = gameOfLife.getBoard();
        gameOfLife.setCell(0, 0, 'o');
        gameOfLife.setCell(0, 1, 'o');
        gameOfLife.setCell(1, 0, 'o');
        gameOfLife.setCell(1, 1, 'o');
        gameOfLife.setCell(2, 1, 'o');

        gameOfLife.run()
        
        expect(board[1][1]).toBe(' ');

    })
})