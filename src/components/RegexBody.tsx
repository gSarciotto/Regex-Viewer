import React from "react";
import Input from "@material-ui/core/Input";
import FormControl from "@material-ui/core/FormControl";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    "regex-body-height": {
        height: "100%"
    }
});

function RegexBody(): JSX.Element {
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
                startAdornment={
                    <InputAdornment position="start">/</InputAdornment>
                }
                endAdornment={<InputAdornment position="end">/</InputAdornment>}
            />
        </FormControl>
    );
    /*return (
        <Input
            autoFocus
            disableUnderline
            fullWidth
            aria-label="Regular Expression Body Input"
            id="regex-body-input"
        />
    );*/
}

export default RegexBody;
