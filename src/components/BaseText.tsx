import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

export interface BaseTextProps {
    children: React.ReactNode;
    bgColor: string;
}

const useStyles = makeStyles({
    "highlighted-text": (props: { bgColor: string }) => ({
        backgroundColor: props.bgColor
    })
});

function BaseText(props: BaseTextProps): JSX.Element {
    const styleProps = { bgColor: props.bgColor };
    const classes = useStyles(styleProps);
    return (
        <Typography
            variant="body1"
            color="textPrimary"
            component="span"
            className={props.bgColor ? classes["highlighted-text"] : ""}
        >
            {props.children}
        </Typography>
    );
}

export default BaseText;
