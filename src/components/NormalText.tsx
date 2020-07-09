import React from "react";
import BaseText from "./BaseText";

export interface NormalTextProps {
    children: React.ReactNode;
}

function NormalText(props: NormalTextProps): JSX.Element {
    return <BaseText bgColor="">{props.children}</BaseText>;
}

export default NormalText;
