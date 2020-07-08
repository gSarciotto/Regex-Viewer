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

class Tokenizer implements TokenizerInterface {
    run(input: string, matches: RegExpExecArray[]): Token[] {
        // criar um novo metodo para ver se tem um normal token entre endLastToken e beginToken. Esse metodo retorna o normal token se tiver. Esse metodo pode ser usado para ver se tem NormalToken entre o ultimo match e o final do input.
        const tokens: Token[] = [];
        let token: Token;
        if (input.length === 0) {
            token = new NormalToken("", [0, 0]);
            return [token];
        }
        if (matches.length === 0) {
            token = new NormalToken(input, [0, input.length]);
            return [token];
        }
        let beginToken: number,
            endLastToken = 0,
            endToken: number;
        for (const match of matches) {
            beginToken = match.index;
            if (endLastToken !== beginToken) {
                //there is NormalText between the matches
                const text = input.slice(endLastToken, beginToken);
                token = new NormalToken(text, [endLastToken, beginToken]);
                tokens.push(token);
                endLastToken = beginToken;
            }
            const matchText: string = match[0];
            endToken = beginToken + matchText.length;
            token = new ColoredToken(matchText, [beginToken, endToken]);
            tokens.push(token);
            endLastToken = endToken;
        } // see if there is normal text after the last match
        if (endLastToken !== input.length) {
            //there is normal text after last match
            beginToken = endLastToken;
            endToken = input.length;
            const text = input.slice(beginToken, endToken);
            token = new NormalToken(text, [endLastToken, beginToken]);
            tokens.push(token);
        }
        return tokens;
    }
}

export default Tokenizer;
