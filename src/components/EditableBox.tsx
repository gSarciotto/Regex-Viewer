import React from "react";
import ContentEditable from "react-contenteditable";

interface EditableBoxProps {
    html: string;
}

function EditableBox(props: EditableBoxProps): JSX.Element {
    const onChangeHandler = (e: unknown): void => {
        console.log("mudou");
    };
    return <ContentEditable html={props.html} onChange={onChangeHandler} />;
}

export default EditableBox;
