import React from "react";
import FormControl from "@material-ui/core/FormControl";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import { makeStyles } from "@material-ui/core/styles";

export interface RegexBodyProps {
    bodyInputValue: string;
    handleChangeBodyInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const useStyles = makeStyles({
    "regex-body-height": {
        height: "100%"
    }
});

function RegexBody(props: RegexBodyProps): JSX.Element {
    const classes = useStyles();
    return (
        <FormControl
            fullWidth
            variant="outlined"
            className={classes["regex-body-height"]}
        >
            <InputLabel htmlFor="regex-body">Regex Body</InputLabel>
            <OutlinedInput
                id="regex-body-input"
                className={classes["regex-body-height"]}
                value={props.bodyInputValue}
                onChange={props.handleChangeBodyInput}
                startAdornment={
                    <InputAdornment position="start">/</InputAdornment>
                }
                endAdornment={<InputAdornment position="end">/</InputAdornment>}
            />
        </FormControl>
    );
}

export default RegexBody;
