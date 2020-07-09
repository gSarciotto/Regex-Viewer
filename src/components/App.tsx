import React from "react";
import NormalText from "./NormalText";
import ColoredText from "./ColoredText";
import { Executor, Tokenizer, Colorizer } from "../utils/utils";

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
    return (
        <div>
            <NormalText>teste normal </NormalText>
            <ColoredText bgColor={color1}>{"teste colorido "}</ColoredText>
            <NormalText>teste normal 2</NormalText>
        </div>
    );
}

export default App;
