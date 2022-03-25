import { coordinates, IDisplay, IScreen } from "./displayTypes";

import { getBlankScreen } from "./setup";
import { validateSetCharCharacter } from "./validator";

export class Display implements IDisplay {
    private currentDisplay: string[][] = getBlankScreen();
    private nextDisplay: string[][] = getBlankScreen();
    private screen: IScreen;

    constructor(screen: IScreen) {
        this.screen = screen;
    }

    private updateDisplay(): void {
        this.currentDisplay = this.nextDisplay;
        this.nextDisplay = getBlankScreen();
    }

    clear(): void {
        this.nextDisplay = getBlankScreen();
        this.paint();
    }

    paint(): void {
        this.updateDisplay();

        this.screen.paint(this.currentDisplay);
    }

    @validateSetCharCharacter
    setChar([x, y]: coordinates, character: string): void {
        this.nextDisplay[x][y] = character;
    }

    readChar([x, y]: coordinates): string {
        return this.currentDisplay[x][y];
    }
}