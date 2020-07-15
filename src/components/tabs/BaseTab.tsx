import React from "react";

export interface BaseTabProps {
    tabValue: number;
    index: number;
    id: string;
    label: string;
    children: React.ReactNode;
}

function BaseTab(props: BaseTabProps): JSX.Element {
    return (
        <div
            role={"tabpanel"}
            hidden={props.tabValue !== props.index}
            id={props.id}
            aria-label={props.label}
        >
            {props.children}
        </div>
    );
}

export default BaseTab;
