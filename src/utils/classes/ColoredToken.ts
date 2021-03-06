/* Class for colored Token */

import Token, { TokenInterface } from "./Token";

export interface ColoredTokenInterface extends TokenInterface {
    bgColor: string;
}

export class ColoredToken extends Token implements ColoredTokenInterface {
    bgColor: string;

    constructor(text: string, range: [number, number], bgColor = "") {
        super(text, range);
        this.bgColor = bgColor;
    }
}

export default ColoredToken;
