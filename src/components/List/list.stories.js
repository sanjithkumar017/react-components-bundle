import React from 'react';
import { storiesOf } from "@storybook/react";

import List from "./List";

const fruitsList = [{
    id: 1,
    name: "Banana"
}, {
    id: 2,
    name: "Apple"
}, {
    id: 3,
    name: "Kiwi"
}, {
    id: 4,
    name: "Grapes"
}, {
    id: 5,
    name: "Pineapple"
}];


storiesOf("List", module)
    .addParameters({
        info: {
            inline: true
        }
    })
    .add("Simple Usage", () => {
        return (<List items={fruitsList} />)
    })
    .add("Custom ListItem", () => {
        const ListItem = ({ itemData }) => {
            let { name } = itemData;
        
            return (<li>{`Custom ListItem ---> ${name}`}</li>)
        };

        return (<List items={fruitsList} ListItem={ListItem} />)
    });
