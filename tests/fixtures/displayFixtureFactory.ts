import { Display } from "../../display/display";
import { IScreen } from "../../display/displayTypes";

export class ScreenFake implements IScreen {
    displayDetail: string[][];

    paint(displayDetail: string[][]) {
        this.displayDetail = displayDetail;
    }
}

export function buildDisplayFixture() {
    const screenFake = new ScreenFake();
    const display = new Display(screenFake);

    return {
        screenFake,
        display
    };
}