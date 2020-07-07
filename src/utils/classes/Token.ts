/* Base Token Class */

export interface TokenInterface {
    readonly variant: "normal" | "colored";
    readonly text: string;
    readonly range: [number, number];
}

// ideally the Token class would be abstract

class Token implements TokenInterface {
    readonly variant: "normal" | "colored";
    readonly text: string;
    readonly range: [number, number];

    constructor(
        variant: "normal" | "colored",
        text: string,
        range: [number, number]
    ) {
        this.variant = variant;
        this.text = text;
        this.range = range;
    }
}

export default Token;
