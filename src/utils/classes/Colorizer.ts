/* Colorizer class is responsible for adding color to ColoredTokens */

import Token from "./Token";
import ColoredToken from "./ColoredToken";

export type Color = string;

export type ColorArrayOfOneOrMore = [Color, ...Color[]]; // must contain at least one element. This is the type of the palette and is needed so that number%palette.length makes sense.

export interface ColorizerInterface {
    readonly palette: ColorArrayOfOneOrMore;
    colorOne: (token: Token) => void;
    colorAll: (tokens: Token[]) => void;
}

export class Colorizer implements ColorizerInterface {
    readonly palette: ColorArrayOfOneOrMore;
    private currentColorIndex = 0;

    constructor(pallete: ColorArrayOfOneOrMore) {
        this.palette = pallete;
    }

    colorOne(token: Token): void {
        //If token is not colored, then it is a no op.
        if (token instanceof ColoredToken) {
            token.bgColor = this.getNextColor();
        }
    }

    colorAll(tokens: Token[]): void {
        for (const token of tokens) this.colorOne(token);
    }

    private getNextColor(): Color {
        this.currentColorIndex =
            (this.currentColorIndex + 1) % this.palette.length;
        return this.palette[this.currentColorIndex];
    }
}

export default Colorizer;
