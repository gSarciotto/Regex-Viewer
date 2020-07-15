import React from "react";
import BaseTab from "./BaseTab";

export interface InputTabProps {
    index: number;
    tabValue: number;
    inputText: string;
}

function InputTab(props: InputTabProps): JSX.Element {
    return (
        <BaseTab
            tabValue={props.tabValue}
            index={props.index}
            id="input-tab"
            label="input-tab-panel"
        >
            {props.inputText}
        </BaseTab>
    );
}

export default InputTab;
