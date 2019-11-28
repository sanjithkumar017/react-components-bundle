import React, { useState } from 'react';
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Form from "./Form";
import Input from "./Input";
import Dropdown from "./Dropdown";
import Button, { ButtonAppearance } from "../Button";
import { FRUITS_LIST } from "../../../public/Constants";

storiesOf("Form", module)
    .addParameters({
        info: {
            propTables: [Form]
        }
    })
    .add("Simple Usage", () => {
        const onSubmit = (formData) => {
            const { data } = formData;
            const { userEmail, password } = data;

            console.log("Submitted data: ", {
                userEmail,
                password
            });
        };

        return (<Form onSubmit={onSubmit}>
            <Input type="text" name="userEmail" label="Enter Email" appearance="block" />
            <Input type="password" name="password" label="Enter Password" appearance="block" />
            <hr />
            <Button appearance={ButtonAppearance.PRIMARY} className="full-width-btn">Log In</Button>
        </Form>);
    }, {
        info: {
            propTables: [Input]
        }
    })
    .add("Dropdown ", () => {
        const onSubmit = (formData) => {
            const { data } = formData;
            const { fruit } = data;

            console.log("Selected Fruit: ", fruit);
        };

        return (<Form onSubmit={onSubmit}>
            <Dropdown name="fruit" label="Select fruit" options={FRUITS_LIST} appearance="block" />
            <Button appearance={ButtonAppearance.PRIMARY} className="full-width-btn">Submit</Button>
        </Form>);
    }, {
        info: {
            propTables: [Dropdown]
        }
    })
