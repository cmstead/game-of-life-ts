import { Range } from "./set-types";

export type coordinates = [x: Range<0, 80>, y: Range<0, 24>];

export interface IScreen {
    paint(displayDetail: string[][]): void;
}

export interface IDisplay {
    clear(): void;

    paint(): void;

    setChar([x, y]: coordinates, character: string): void;

    readChar([x, y]: coordinates): string;
}