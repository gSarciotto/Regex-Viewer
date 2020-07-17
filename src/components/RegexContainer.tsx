import React from "react";
import Grid from "@material-ui/core/Grid";
import RegexBody, { RegexBodyProps } from "./RegexBody";
import RegexFlags, { RegexFlagsProps } from "./RegexFlags";

interface RegexContainerProps extends RegexFlagsProps, RegexBodyProps {}

function RegexContainer(props: RegexContainerProps): JSX.Element {
    return (
        <Grid container>
            <Grid item xs={6}>
                <RegexBody
                    bodyInputValue={props.bodyInputValue}
                    handleChangeBodyInput={props.handleChangeBodyInput}
                />
            </Grid>
            <Grid item xs={3} md={1}>
                <RegexFlags
                    flags={props.flags}
                    updateFlags={props.updateFlags}
                />
            </Grid>
        </Grid>
    );
}

export default RegexContainer;
