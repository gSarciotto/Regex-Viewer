import React from "react";
import BaseText from "./BaseText";

export interface ColoredTextProps {
    children: React.ReactNode;
    bgColor: string;
}

function ColoredText(props: ColoredTextProps): JSX.Element {
    return <BaseText bgColor={props.bgColor}>{props.children}</BaseText>;
}

export default ColoredText;
