import React from 'react';
import { storiesOf } from "@storybook/react";
import { linkTo } from '@storybook/addon-links';

import { FRUITS_LIST } from "../../../public/Constants";
import InlineModal, { InlineModalActivator, InlineModalBody } from "./InlineModal";
import { List } from "../";

storiesOf("InlineModal", module)
    .addParameters({
        info: {
            propTables: [InlineModal, InlineModalActivator,InlineModalBody],
            propTablesExclude: [List]
        }
    })
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
