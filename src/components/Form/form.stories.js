import React, { useState } from 'react';
import { storiesOf } from "@storybook/react";

import Form from "./Form";
import Input from "./Input";
import Dropdown from "./Dropdown";
import Button, { ButtonAppearance } from "../Button";
import { TODOS, FRUITS_LIST } from "../../../public/Constants";

storiesOf("Form", module)
    .add("Simple Usage", () => {
        const onSubmit = (formData) => {
            const { data } = formData;
            const { userEmail, password } = data;

            console.log({
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
    })
    .add("Dropdown", () => {
        const onSubmit = (formData) => {
            const { data } = formData;
            const { userEmail, password } = data;

            console.log({
                userEmail,
                password
            });
        };

        return (<Form onSubmit={onSubmit}>
            <Dropdown name="fruit" label="Select fruit" options={FRUITS_LIST} idAttribute="org_key" appearance="block" />
        </Form>);
    })
