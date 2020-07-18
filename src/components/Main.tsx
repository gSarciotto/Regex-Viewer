import React, { useState, useEffect } from "react";
import {
    Executor,
    Tokenizer,
    Colorizer,
    TokenConverter,
    Token,
    ColoredToken
} from "../utils/utils";
import InputTabs from "./InputTabs";
import RegexContainer from "./RegexContainer";

function Main(): JSX.Element {
    const [input, setInput] = useState(
        "abbcadef fejkcadkl DjwbCADfdw DjwBCADfdw DjwCAD dj cad deregue"
    );
    const [regexBody, setRegexBody] = useState("b*(cad)(\\w*)");
    const [activeTabIndex, setActiveTabIndex] = useState(1); //state that says which tab of InputTabs is currently active. This is needed here so that we only calculate the regex when we change to View tab. 0 == input, 1 == view

    const [flags, setFlags] = useState("gi");

    const handleInputChange: React.ChangeEventHandler<HTMLTextAreaElement> = (
        e: React.ChangeEvent<HTMLTextAreaElement>
    ): void => {
        setInput(e.currentTarget.value);
    };

    const handleChangeBodyInput = (
        e: React.ChangeEvent<HTMLInputElement>
    ): void => {
        setRegexBody(e.currentTarget.value);
    };

    const handleTabChange = (
        e: React.ChangeEvent<{}>,
        newValue: number
    ): void => {
        setActiveTabIndex(newValue);
    };

    const updateFlags = (newFlags: string): void => {
        console.log(newFlags);
        setFlags(newFlags);
    };

    const [textElements, setTextElements] = useState<JSX.Element[]>([]);

    useEffect(() => {
        // see if the input dependency wont cause a bug, probably not since this will only do something if we switch from input to view tab and when this happens the input will have already been updated
        if (activeTabIndex === 1) {
            let tokens: Token[] = [];
            try {
                const executor = new Executor(regexBody, input, flags);
                const matches = executor.exec();

                const tokenizer = new Tokenizer();
                tokens = tokenizer.run(input, matches);

                const color1 = "#BBDEFB";
                const color2 = "#1976D2";

                const colorizer = new Colorizer([color1, color2]);
                colorizer.colorAll(tokens);
            } catch (error) {
                tokens.push(
                    new ColoredToken(
                        error.message,
                        [0, error.message.length],
                        "red"
                    )
                );
            }
            const converter = new TokenConverter();
            setTextElements(converter.convertAllToJSXElement(tokens));
        }
    }, [activeTabIndex, regexBody, flags]);

    return (
        <div>
            <RegexContainer
                bodyInputValue={regexBody}
                handleChangeBodyInput={handleChangeBodyInput}
                flags={flags}
                updateFlags={updateFlags}
            />
            <InputTabs
                inputText={input}
                handleInputChange={handleInputChange}
                activeTabIndex={activeTabIndex}
                handleTabChange={handleTabChange}
            >
                {textElements}
            </InputTabs>
        </div>
    );
}

export default Main;
