/* 
    Converter that transforms Tokens into Text components
*/

import React from "react";
import ReactDOMServer from "react-dom/server";
import Token from "./classes/Token";
import ColoredToken from "./classes/ColoredToken";
import ColoredText from "../components/ColoredText";
import NormalText from "../components/NormalText";

export interface TokenConverterInterface {
    convertOneToJSXElement: (token: Token) => JSX.Element;
    convertAllToJSXElement: (tokens: Token[]) => JSX.Element[];
}

export class TokenConverter implements TokenConverterInterface {
    // Later maybe simplify the API by making just one method convertToElement and another for convertToString, these methods may receive a single token or an array of tokens;
    private keyNumber = 0; // number that will be integrated with the Token text to create a key for the Text element array. This is needed because in a input string, there may be many matches that are equal so if we used just the token.text we would not provide a unique key.
    convertOneToJSXElement(token: Token): JSX.Element {
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

    convertAllToJSXElement(tokens: Token[]): JSX.Element[] {
        this.keyNumber = 0;
        const elements = tokens.map((token: Token) => {
            const element = this.convertOneToJSXElement(token);
            this.keyNumber++;
            return element;
        }, this);

        return elements;
    }

    convertOneToString(token: Token): string {
        // receives a token, converts the token to the JSX element and then returns the html string of this element
        const element = this.convertOneToJSXElement(token);
        return ReactDOMServer.renderToString(element);
    }

    convertAllToString(tokens: Token[]): string {
        let result = "";
        tokens.forEach((token) => {
            result += this.convertOneToString(token);
        }, this);
        return result;
    }
}

export default TokenConverter;
