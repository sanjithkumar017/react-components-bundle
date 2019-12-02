import React from "react";
import { storiesOf } from "@storybook/react";
import Toggle from "./Toggle";

storiesOf("Toggle", module)
    .add("Simple Usage", () => {
        const onChange = (isActive) => {
            console.log("isActive: ", isActive);
        };

        return (<Toggle label="Is Active?" name="isActive" appearance="block" onChange={onChange}/>);
    });
