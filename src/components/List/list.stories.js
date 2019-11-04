import React from 'react';
import { storiesOf } from "@storybook/react";

import { FRUITS_LIST } from "../../../public/Constants";
import List from "./List";

storiesOf("List", module)
    .add("Simple Usage", () => {
        return (<List items={FRUITS_LIST} />)
    })
    .add("Custom ListItem", () => {
        const ListItem = ({ itemData }) => {
            let { name } = itemData;
        
            return (<li>{`Custom ListItem ---> ${name}`}</li>)
        };

        return (<List items={FRUITS_LIST} ListItem={ListItem} />)
    });
