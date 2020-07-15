/* Component that holds the inputs for the regex */

import React, { useState, FunctionComponent } from "react";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, Theme, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import ViewTab from "./tabs/ViewTab";
import InputTab from "./tabs/InputTab";

const useStyles = makeStyles((theme: Theme) => ({
    "panel-container": {
        border: `1px solid ${theme.palette.primary.main}`, //later fix the border
        padding: theme.spacing(2, 1) //later add height
    }
}));

const InputTabs: FunctionComponent<{}> = () => {
    const [tabValue, setTabValue] = useState(0);

    const theme = useTheme();
    const classes = useStyles(theme);

    const handleTabChange = (
        e: React.ChangeEvent<{}>,
        newValue: number
    ): void => {
        setTabValue(newValue);
    };

    const handleChangeIndex = (index: number): void => {
        //handle for change of swipeableViews through swipe?
        setTabValue(index);
    };
    //pass the outer box to just include the panels
    return (
        <div>
            <AppBar position="static" color="primary">
                <Tabs
                    variant={"fullWidth"}
                    value={tabValue}
                    onChange={handleTabChange}
                    aria-label={"teste"}
                >
                    <Tab
                        label={"Input"}
                        id={"input-string-tab"}
                        aria-controls={"input-tab"}
                    />
                    <Tab
                        label={"View"}
                        id={"view-tab"}
                        aria-controls={"view-tab"}
                    />
                </Tabs>
            </AppBar>
            <Box className={classes["panel-container"]}>
                <SwipeableViews
                    axis={theme.direction === "rtl" ? "x-reverse" : "x"}
                    index={tabValue}
                    onChangeIndex={handleChangeIndex}
                >
                    <InputTab
                        tabValue={tabValue}
                        index={0}
                        inputText="input tab"
                    />
                    <ViewTab tabValue={tabValue} index={1} />
                </SwipeableViews>
            </Box>
        </div>
    );
};

export default InputTabs;