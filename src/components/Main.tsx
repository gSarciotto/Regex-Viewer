import React, { useState } from "react";
import { Executor, Tokenizer, Colorizer, TokenConverter } from "../utils/utils";
import InputTabs from "./InputTabs";
import RegexContainer from "./RegexContainer";

function Main(): JSX.Element {
    // MAybe pass the active tab index to Main and calculate things only when the tab changes to the view tab
    /*const input =
        "abbcadef fejkcadkl DjwbCADfdw DjwBCADfdw DjwCAD dj cad deregue";*/
    //const input = "no match should happen";

    const [input, setInput] = useState(
        "abbcadef fejkcadkl DjwbCADfdw DjwBCADfdw DjwCAD dj cad deregue"
    );
    const [regexBody, setRegexBody] = useState("b*(cad)(\\w*)");

    const handleInputChange: React.ChangeEventHandler<HTMLTextAreaElement> = (
        e: React.ChangeEvent<HTMLTextAreaElement>
    ): void => {
        setInput(e.currentTarget.value);
    };

    //const regexpString = "b*(cad)(\\w*)";
    const flags = "gi";
    const executor = new Executor(regexBody, input, flags);
    const matches = executor.exec();
    console.log(matches);
    const tokenizer = new Tokenizer();
    const tokens = tokenizer.run(input, matches);
    console.log(tokens);

    const color1 = "#BBDEFB";
    const color2 = "#1976D2";

    const colorizer = new Colorizer([color1, color2]);
    colorizer.colorAll(tokens);
    console.log(tokens);

    const converter = new TokenConverter();
    const textsElements = converter.convertAllToJSXElement(tokens);
    console.log(textsElements);

    const html = converter.convertAllToString(tokens);
    //return <div>{textsElements}</div>;
    return (
        <div>
            <RegexContainer />
            <InputTabs inputText={input} handleInputChange={handleInputChange}>
                {textsElements}
            </InputTabs>
        </div>
    );
}

export default Main;
