import React from "react";
import { storiesOf } from "@storybook/react";
import { FRUITS_LIST } from "../../../public/Constants";
import Dropdown from "./Dropdown";

storiesOf("Dropdown", module)
    .add("Simple Usage ", () => {
        const onChange = (selectedFruit) => {
            console.log("Selected Fruit: ", selectedFruit);
        };

        return (<Dropdown name="fruit" label="Select a fruit" options={FRUITS_LIST} halign="right"
                    appearance="block" onChange={onChange} noSelectionLabel="Select a fruit"/>);
    }, {
        info: {
            propTables: [Dropdown]
        }
    });
