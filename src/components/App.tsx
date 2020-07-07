import React from "react";
import Typography from "@material-ui/core/Typography";
import Executor from "../utils/classes/Executor";

function App(): JSX.Element {
    const input = "abbcadef fejkcadkl DjwbCADfdw DjwBCADfdw DjwCAD dj cad";
    const regexpString = "b*(cad)(\\w*)";
    const flags = "gi";
    const executor = new Executor(regexpString, input, flags);
    console.log(executor.exec());
    return <Typography variant="h1">Teste</Typography>;
}

export default App;
