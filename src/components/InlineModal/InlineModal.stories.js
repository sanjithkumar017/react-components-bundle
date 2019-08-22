import React from 'react';
import { storiesOf } from "@storybook/react";

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
    .addParameters({
        info: {
            inline: true
        }
    })
    .add("Simple Usage", () => {
        return ( <InlineModal>
            <InlineModalActivator>
                <div>Select</div>
            </InlineModalActivator>
            <InlineModalBody>
                <List items={fruitsList} />
            </InlineModalBody>
        </InlineModal>)
    }, {
        info: {
            text: "This story has additional text added to the info!"
        },
    });
