import React from "react";
import { storiesOf } from "@storybook/react";
import ProgressBar from "./ProgressBar";

storiesOf("ProgressBar", module)
    .add("Simple Usage", () => {
        return (<div className="progress-container">
            <ProgressBar progress={40} />
        </div>);
    });
