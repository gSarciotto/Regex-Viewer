import React from "react";
import BaseTab from "./BaseTab";
import Input from "@material-ui/core/Input";

export interface InputTabProps {
    index: number;
    tabValue: number;
    inputText: string;
    handleInputChange: React.ChangeEventHandler<HTMLTextAreaElement>;
}

function InputTab(props: InputTabProps): JSX.Element {
    return (
        <BaseTab
            tabValue={props.tabValue}
            index={props.index}
            id="input-tab"
            label="input-tab-panel"
        >
            <Input
                fullWidth
                disableUnderline
                multiline
                aria-label="Input String"
                onChange={props.handleInputChange}
                value={props.inputText}
            />
        </BaseTab>
    );
}

export default InputTab;
