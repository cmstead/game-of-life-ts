import { Display } from "../display/display";

import { getBlankScreen } from "../display/setup";
import { buildDisplayFixture, ScreenFake } from "./fixtures/displayFixtureFactory";

describe('display', () => {
    let screenFake: ScreenFake;
    let display: Display;

    beforeEach(() => {
        const displayFixture = buildDisplayFixture();

        screenFake = displayFixture.screenFake;
        display = displayFixture.display;
    });

    it('prints a blank screen when no characters are set', () => {
        display.paint();

        const expectedOutput = getBlankScreen();

        expect(screenFake.displayDetail).toStrictEqual(expectedOutput);
    });

    it('prints a screen with characters in proper locations when set', () => {
        display.setChar([0, 0], 'a');
        display.setChar([1, 1], 'b');
        display.setChar([2, 2], 'c');

        display.paint();

        const expectedOutput = getBlankScreen();

        expectedOutput[0][0] = 'a';
        expectedOutput[1][1] = 'b';
        expectedOutput[2][2] = 'c';

        expect(screenFake.displayDetail).toStrictEqual(expectedOutput);
    });

    it('updates readable display after paint', () => {
        display.setChar([0, 0], 'a');

        const originalDisplayValue = display.readChar([0, 0]);

        display.paint();

        const updatedDisplayValue = display.readChar([0, 0]);

        expect(originalDisplayValue).toBe(' ');
        expect(updatedDisplayValue).toBe('a');
    });

    it('clears screen on clear call', () => {
        display.setChar([0, 0], 'a');

        display.paint();

        const paintedDisplayValue = display.readChar([0, 0]);

        display.clear();

        const clearedDisplayValue = display.readChar([0, 0]);

        expect(paintedDisplayValue).toBe('a');
        expect(clearedDisplayValue).toBe(' ');
    });

    it('throws an error when setChar is called with a string of length greater than 1', () => {
        expect(() => display.setChar([0, 0], 'abc')).toThrow();
    });

    it('throws an error when setChar is called with an empty string', () => {
        expect(() => display.setChar([0, 0], '')).toThrow();
    });
});