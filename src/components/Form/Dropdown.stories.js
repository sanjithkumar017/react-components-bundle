import React from "react";
import { storiesOf } from "@storybook/react";
import { FRUITS_LIST } from "../../../public/Constants";
import Dropdown from "./Dropdown";

storiesOf("Dropdown", module)
    .add("Simple Usage ", () => {
        const onChange = (selectedFruit) => {
            console.log("Selected Fruit: ", selectedFruit);
        };

        return (<Dropdown name="fruit" label="Select fruit" options={FRUITS_LIST} appearance="block" onChange={onChange} />);
    }, {
        info: {
            propTables: [Dropdown]
        }
    });
