/* Component that holds the inputs for the regex */

import React from "react";
import { makeStyles, Theme, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import ViewTab from "./tabs/ViewTab";
import InputTab from "./tabs/InputTab";

export interface InputTabsProps {
    children: React.ReactNode;
    activeTabIndex: number;
    handleTabChange: (e: React.ChangeEvent<{}>, newValue: number) => void;
    handleInputChange: React.ChangeEventHandler<HTMLTextAreaElement>;
    inputText: string;
}

const useStyles = makeStyles((theme: Theme) => ({
    "panel-container": {
        border: `1px solid ${theme.palette.primary.main}`, //later fix the border
        padding: theme.spacing(2, 1) //later add height, or add the height onto the tabs themselves
    }
}));

function InputTabs(props: InputTabsProps): JSX.Element {
    const theme = useTheme();
    const classes = useStyles(theme);

    //pass the outer box to just include the panels
    return (
        <div>
            <AppBar position="static" color="primary">
                <Tabs
                    variant={"fullWidth"}
                    value={props.activeTabIndex}
                    onChange={props.handleTabChange}
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
                <InputTab
                    tabValue={props.activeTabIndex}
                    index={0}
                    inputText={props.inputText}
                    handleInputChange={props.handleInputChange}
                />
                <ViewTab tabValue={props.activeTabIndex} index={1}>
                    {props.children}
                </ViewTab>
            </Box>
        </div>
    );
}

export default InputTabs;
