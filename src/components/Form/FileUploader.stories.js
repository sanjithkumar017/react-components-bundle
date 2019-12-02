import React from "react";
import { storiesOf } from "@storybook/react";
import FileUploader from "./FileUploader";

storiesOf("FileUploader", module)
    .add("Simple Usage", () => {
        const onFileChange = (files = []) => {
            console.log("SELECTED FILES");
            for (let i = 0; i < files.length; i++) {
                console.log(files[i].name);
            }
        };

        return (<FileUploader name="files" appearance="block" onChange={onFileChange} multiple={true}>
            <a href="javascript:void(0)">Upload File</a>
        </FileUploader>);
    });
