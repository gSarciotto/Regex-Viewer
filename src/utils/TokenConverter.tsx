/* 
    Converter that transforms Tokens into Text components
*/

import React from "react";
import Token from "./classes/Token";
import ColoredToken from "./classes/ColoredToken";
import ColoredText from "../components/ColoredText";
import NormalText from "../components/NormalText";

export interface TokenConverterInterface {
    convertOne: (token: Token) => JSX.Element;
    convertAll: (tokens: Token[]) => JSX.Element[];
}

export class TokenConverter implements TokenConverterInterface {
    private keyNumber = 0; // number that will be integrated with the Token text to create a key for the Text element array. This is needed because in a input string, there may be many matches that are equal so if we used just the token.text we would not provide a unique key.
    convertOne(token: Token): JSX.Element {
        // talvez testar para ver se o texto do token != "", se for retornar null
        if (token instanceof ColoredToken) {
            // we need to test ColoredToken first because in the current implementation, NormalToken is the same as Token
            return (
                <ColoredText
                    key={`${token.text}-${this.keyNumber}`}
                    bgColor={token.bgColor}
                >
                    {token.text}
                </ColoredText>
            );
        } else {
            // token is normal

            return (
                <NormalText key={`${token.text}-${this.keyNumber}`}>
                    {token.text}
                </NormalText>
            );
        }
    }

    convertAll(tokens: Token[]): JSX.Element[] {
        this.keyNumber = 0;
        const elements = tokens.map((token: Token) => {
            const element = this.convertOne(token);
            this.keyNumber++;
            return element;
        }, this);

        return elements;
    }
}

export default TokenConverter;
