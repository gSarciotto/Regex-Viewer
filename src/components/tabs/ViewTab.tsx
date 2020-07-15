import React from "react";
import BaseTab from "./BaseTab";

export interface ViewTabProps {
    index: number;
    tabValue: number;
    children: React.ReactNode;
}

function ViewTab(props: ViewTabProps): JSX.Element {
    return (
        <BaseTab
            tabValue={props.tabValue}
            index={props.index}
            id="view-tab"
            label="view-tab-panel"
        >
            {props.children}
        </BaseTab>
    );
}

export default ViewTab;
