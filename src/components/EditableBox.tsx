import React from "react";

interface EditableBoxProps {
    html: string;
}

function EditableBox(props: EditableBoxProps): JSX.Element {
    const onChangeHandler = (e: unknown): void => {
        console.log("mudou");
    };
    return <p>reditable</p>;
}

export default EditableBox;
