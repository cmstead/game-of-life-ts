export function getBlankScreen(): string[][] {
    const blankDisplay = [];

    for (let i = 0; i < 24; i++) {
        const line = [];

        for (let i = 0; i < 80; i++) {
            line.push(' ');
        }

        blankDisplay.push(line);
    }

    return blankDisplay;
}