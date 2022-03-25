type PrependNextNum<A extends Array<unknown>> = A['length'] extends infer T ? ((t: T, ...a: A) => void) extends ((...x: infer X) => void) ? X : never : never;
type EnumerateInternal<A extends Array<unknown>, N extends number> = { 0: A, 1: EnumerateInternal<PrependNextNum<A>, N> }[N extends A['length'] ? 0 : 1];

type Enumerate<N extends number> = EnumerateInternal<[], N> extends (infer E)[] ? E : never;
type Range<FROM extends number, TO extends number> = Exclude<Enumerate<TO>, Enumerate<FROM>>;

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