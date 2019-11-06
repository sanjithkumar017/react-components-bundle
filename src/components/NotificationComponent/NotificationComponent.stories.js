import React from "react";
import { storiesOf } from "@storybook/react";
import NotificationComponent from "./NotificationComponent";

storiesOf("NotificationComponent", module)
    .add("Simple Usage", () => { 
        return (<div>
            <NotificationComponent appearance="success">
                Data loaded successfully
            </NotificationComponent><br />
            <NotificationComponent appearance="error">
                Some error occured
            </NotificationComponent><br />
            <NotificationComponent appearance="warning">
                Doing this operation will erase all your data
            </NotificationComponent><br />
            <NotificationComponent appearance="info">
                The job is scheduled. You will get a notification once it is completed.
            </NotificationComponent>
        </div>);
    })
