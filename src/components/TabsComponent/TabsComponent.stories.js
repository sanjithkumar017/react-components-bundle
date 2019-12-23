import React from 'react';
import { storiesOf } from "@storybook/react";

import TabsComponent from "./TabsComponent";

const SetupTab = () => {
    return <div>This is Setup Tab</div>;
};

const ConfigTab = () => {
    return <div>This is Configuration Tab</div>;
};

const InfoTab = () => {
    return <div>This is Info Tab</div>;
};

let items = [{
    id: "SETUP",
    label: "Setup",
    tabComponent: <SetupTab />
}, {
    id: "CONFIG",
    label: "Configuration",
    tabComponent: <ConfigTab />
}, {
    id: "INFO",
    label: "Info",
    tabComponent: <InfoTab />
}];

storiesOf("TabsComponent", module)
    .add("Simple Usage", () => {
        const onTabChanged = () => {

        };

        return (<TabsComponent items={items} selectedTab="CONFIG" onTabChanged={onTabChanged} />);
    })
    .add("Horizontal Tabs", () => {
        const onTabChanged = () => {

        };

        return (<TabsComponent items={items} selectedTab="CONFIG" onTabChanged={onTabChanged} appearance="HORIZONTAL"/>);
    })
    .add("Vertical Tabs", () => {
        const onTabChanged = () => {

        };

        return (<TabsComponent items={items} selectedTab="CONFIG" onTabChanged={onTabChanged} appearance="VERTICAL"/>);
    });
