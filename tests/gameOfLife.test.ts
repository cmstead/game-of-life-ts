import gameOfLife from "../src/gameOfLife";

describe('Game Of Life Rules', () => {
    it('a dead cell stays dead', () => {
        gameOfLife.run()
        const board = gameOfLife.getBoard()
        expect(board[0][0]).toBe(' ');
    })
})