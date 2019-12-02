import React from "react";
import { storiesOf } from "@storybook/react";
import DragDropFileUploader from "./DragDropFileUploader";

storiesOf("DragDropFileUploader", module)
    .add("Simple Usage", () => {
        const onFileChange = (files = []) => {
            console.log("SELECTED FILES");
            for (let i = 0; i < files.length; i++) {
                console.log(files[i].name);
            }
        };

        return (<DragDropFileUploader onChange={onFileChange} appearance="block">
            <div>Drag & drop files into this area</div>
        </DragDropFileUploader>);
    });
