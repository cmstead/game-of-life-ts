import Board from  '../test';

describe(`core rules for conway's game of life`, () => {
    describe('Any live cell with fewer than two live neighbours dies, as if by underpopulation', () => {
        it('dies if cell has fewer than two live neighbors', async () => {
            const board = new Board(5, 5);
            const rules = function(board) {
                
            };

            board.set([1, 1], 'x');

            rules.apply(board);

            expect(board.get([1, 1])).toBe('');
        });
    });
});