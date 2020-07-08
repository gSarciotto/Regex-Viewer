import React from "react";
import Typography from "@material-ui/core/Typography";
import Executor from "../utils/classes/Executor";
import Tokenizer from "../utils/classes/Tokenizer";
import Colorizer from "../utils/classes/Colorizer";

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
    return <Typography variant="h1">Teste</Typography>;
}

export default App;
