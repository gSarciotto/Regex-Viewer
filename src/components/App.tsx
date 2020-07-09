import React from "react";
import { Executor, Tokenizer, Colorizer, TokenConverter } from "../utils/utils";

function App(): JSX.Element {
    const input =
        "abbcadef fejkcadkl DjwbCADfdw DjwBCADfdw DjwCAD dj cad deregue";
    //const input = "no match should happen";
    const regexpString = "b*(cad)(\\w*)";
    const flags = "gi";
    const executor = new Executor(regexpString, input, flags);
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
    const textsElements = converter.convertAll(tokens);
    console.log(textsElements);
    return <div>{textsElements}</div>;
}

export default App;
