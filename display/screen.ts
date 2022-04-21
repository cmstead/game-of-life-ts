import { IScreen } from "./displayTypes";

const clearScreen = require('clear');

export class Screen implements IScreen {
    paint(displayDetail: string[][]): void {
        clearScreen();

        displayDetail
            .map(line => line.join(''))
            .forEach(line => console.log(line));
    }
}