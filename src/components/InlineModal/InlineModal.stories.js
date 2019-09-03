import React from 'react';
import { storiesOf } from "@storybook/react";
import { linkTo } from '@storybook/addon-links';

import InlineModal, { InlineModalActivator, InlineModalBody } from "./InlineModal";
import { List } from "../";

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
}]

storiesOf("InlineModal", module)
    .add("Simple Usage", () => {
        return ( <InlineModal>
            <InlineModalActivator>
                <div>Select</div>
            </InlineModalActivator>
            <InlineModalBody>
                <List items={fruitsList} showApp={linkTo("List")}/>
            </InlineModalBody>
        </InlineModal>)
    }, {
        info: {
            text: "Displaying a dropdown list of items"
        }
    });
