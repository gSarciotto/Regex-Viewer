/* Base Token Class */

export interface TokenInterface {
    readonly text: string;
    readonly range: [number, number];
}

// ideally the Token class would be abstract

export class Token implements TokenInterface {
    readonly text: string;
    readonly range: [number, number]; //range of the token in the input string, [begin, end)

    constructor(text: string, range: [number, number]) {
        this.text = text;
        this.range = range;
    }
}

export default Token;
