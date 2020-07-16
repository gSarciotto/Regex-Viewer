import React from "react";
import Input from "@material-ui/core/Input";

function RegexBody(): JSX.Element {
    return (
        <Input
            autoFocus
            disableUnderline
            fullWidth
            aria-label="Regular Expression Body Input"
            id="regex-body-input"
        />
    );
}

export default RegexBody;
