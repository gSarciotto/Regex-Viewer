/* Takes the result of a regex operation and divides the input into tokens */

/*
    Quando criar o token, checar se o group nao eh nulo, ex: input: cad  regex: /b*(cad)(\w*)/ retorna ["cad", "cad", ""], esse ultimo grupo descartar.
*/

// Make one for inputString and another for the regex

import Token from "./Token";
import NormalToken from "./NormalToken";
import ColoredToken from "./ColoredToken";

export interface TokenizerInterface {
    run: (input: string, matches: RegExpExecArray[]) => Token[]; //when doing other things than exec, see the correct input type
}

export class Tokenizer implements TokenizerInterface {
    run(input: string, matches: RegExpExecArray[]): Token[] {
        const tokens: Token[] = [];
        let token: Token;
        if (input.length === 0) {
            //maybe throw exception instead
            token = new NormalToken("", [0, 0]);
            return [token];
        }
        let beginToken: number,
            endLastToken = 0,
            endToken: number;
        let normalToken: Token | null;
        for (const match of matches) {
            beginToken = match.index;
            // checks for normal text before match
            normalToken = this.getNormalTokenInRange(input, [
                endLastToken,
                beginToken
            ]);
            if (normalToken) {
                endLastToken = beginToken;
                tokens.push(normalToken);
            }
            const matchText: string = match[0];
            endToken = beginToken + matchText.length;
            token = new ColoredToken(matchText, [beginToken, endToken]);
            tokens.push(token);
            endLastToken = endToken;
        }
        // see if there is normal text after the last match
        normalToken = this.getNormalTokenInRange(input, [
            endLastToken,
            input.length
        ]);
        if (normalToken) {
            tokens.push(normalToken);
        }

        return tokens;
    }

    private getNormalTokenInRange(
        input: string,
        range: [number, number]
    ): NormalToken | null {
        // Checks input in the range [range[0], range[1]) for normal text. If normal text is not found (range[0]==range[1]) then return null else return the NormalToken.
        // This method should be called with the range=[endLastToken, beginToken]
        if (range[0] === range[1]) {
            //no normal text
            return null;
        }
        const text = input.slice(range[0], range[1]);
        return new NormalToken(text, range);
    }
}

export default Tokenizer;
