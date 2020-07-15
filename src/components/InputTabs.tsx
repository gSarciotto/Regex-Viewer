/* Component that holds the inputs for the regex */

import React, { useState, FunctionComponent } from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import ViewTab from "./tabs/ViewTab";
import InputTab from "./tabs/InputTab";

const InputTabs: FunctionComponent<{}> = () => {
    // add a bit of padding to the tabs
    const [tabValue, setTabValue] = useState(0);

    const handleTabChange = (
        e: React.ChangeEvent<{}>,
        newValue: number
    ): void => {
        setTabValue(newValue);
    };

    return (
        <div>
            <Tabs
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
            <InputTab tabValue={tabValue} index={0} inputText="input tab" />
            <ViewTab tabValue={tabValue} index={1} />
        </div>
    );
};

export default InputTabs;
