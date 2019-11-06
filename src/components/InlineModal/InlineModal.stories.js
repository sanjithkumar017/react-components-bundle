import React from 'react';
import { storiesOf } from "@storybook/react";
import { linkTo } from '@storybook/addon-links';

import { FRUITS_LIST } from "../../../public/Constants";
import InlineModal, { InlineModalActivator, InlineModalBody } from "./InlineModal";
import { List } from "../";

storiesOf("InlineModal", module)
    .add("Simple Usage", () => {
        return ( <InlineModal>
            <InlineModalActivator>
                <div>Select</div>
            </InlineModalActivator>
            <InlineModalBody>
                <List items={FRUITS_LIST} showApp={linkTo("List")}/>
            </InlineModalBody>
        </InlineModal>)
    }, {
        info: {
            text: "Displaying a dropdown list of items"
        }
    });
