import React from "react";
import Grid from "@material-ui/core/Grid";
import RegexBody from "./RegexBody";
import RegexFlags from "./RegexFlags";

function RegexGrid(): JSX.Element {
    return (
        <Grid container>
            <Grid item xs={6}>
                <RegexBody />
            </Grid>
            <Grid item xs={3}>
                <RegexFlags />
            </Grid>
        </Grid>
    );
}

export default RegexGrid;
