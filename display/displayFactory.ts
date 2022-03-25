import { Display } from "./display";
import { Screen } from "./screen";

export class DisplayFactory {
    static buildDisplay(): Display {
        return new Display(new Screen());
    }
}