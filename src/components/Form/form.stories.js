import React, { useState } from 'react';
import { storiesOf } from "@storybook/react";

import Form from "./Form";
import Input from "./Input";
import Textarea from "./Textarea";
import Checkbox from "./Checkbox";
import RadioList from "./RadioList";
import Dropdown from "./Dropdown";
import RangeSlider from "./RangeSlider";
import FileUploader from "./FileUploader";
import DragDropFileUploader from "./DragDropFileUploader";
import Toggle from "./Toggle";
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
            <Button appearance={ButtonAppearance.PRIMARY} className="full-width-btn">Log In</Button>
        </Form>);
    }, {
        info: {
            propTables: [Input]
        }
    })
    .add("Text Input", () => {
        const onSubmit = (formData) => {
            const { data } = formData;

            console.log("Submitted data: ", data);
        };

        return (<Form onSubmit={onSubmit}>
            <Input type="text" name="name" label="Name" placeholder="Enter your name" appearance="block" />
            <Button appearance={ButtonAppearance.PRIMARY} className="full-width-btn">Submit</Button>
        </Form>);
    }, {
        info: {
            propTables: [Input]
        }
    })
    .add("Textarea", () => {
        const onSubmit = (formData) => {
            const { data } = formData;

            console.log("Submitted data: ", data);
        };

        return (<Form onSubmit={onSubmit}>
            <Textarea name="description" label="Description" placeholder="Enter your description" appearance="block" />
            <Button appearance={ButtonAppearance.PRIMARY} className="full-width-btn">Submit</Button>
        </Form>);
    }, {
        info: {
            propTables: [Textarea]
        }
    })
    .add("Checkbox", () => {
        const onSubmit = (formData) => {
            const { data } = formData;

            console.log("Submitted data: ", data);
        };

        return (<Form onSubmit={onSubmit}>
            <Checkbox name="orange" label="Orange" />
            <Checkbox name="pineapple" label="Pineapple" />
            <Checkbox name="grapes" label="Grapes" /><br />
            <Button appearance={ButtonAppearance.PRIMARY} className="full-width-btn">Submit</Button>
        </Form>);
    }, {
        info: {
            propTables: [Checkbox]
        }
    })
    .add("RadioList", () => {
        const onSubmit = (formData) => {
            const { data } = formData;

            console.log("Submitted data: ", data);
        };

        return (<Form onSubmit={onSubmit}>
            <RadioList name="yesNoOption" label="Are you sure?" options={[{id: "YES", name: "Yes"}, {id: "NO", name: "No"}]} appearance="block"/>
            <Button appearance={ButtonAppearance.PRIMARY} className="full-width-btn">Submit</Button>
        </Form>);
    }, {
        info: {
            propTables: [RadioList]
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
    .add("Range Slider ", () => {
        const onSubmit = (formData) => {
            const { data } = formData;
            const { price } = data;

            console.log("Selected price: ", price);
        };

        return (<Form onSubmit={onSubmit}>
            <RangeSlider name="price" label="Select price range" min="10" max="100" appearance="block" defaultValue="10"/>
            <Button appearance={ButtonAppearance.PRIMARY} className="full-width-btn">Submit</Button>
        </Form>);
    }, {
        info: {
            propTables: [RangeSlider]
        }
    })
    .add("File Uploader ", () => {
        const onSubmit = (formData) => {
            const { data } = formData;
            const { file } = data;

            console.log("Selected file: ", file[0].name);
        };

        return (<Form onSubmit={onSubmit}>
            <FileUploader name="file" appearance="block">
                <a href="javascript:void(0)">Upload File</a>
            </FileUploader>
            <Button appearance={ButtonAppearance.PRIMARY} className="full-width-btn">Submit</Button>
        </Form>);
    }, {
        info: {
            propTables: [FileUploader]
        }
    })
    .add("DragDrop File Uploader ", () => {
        const onSubmit = (formData) => {
            const { data } = formData;
            const { filesList } = data;

            console.log("Selected file: ", filesList[0].name);
        };

        return (<Form onSubmit={onSubmit}>
            <DragDropFileUploader name="filesList" appearance="block">
                <div>Drag & drop files into this area</div>
            </DragDropFileUploader>
            <Button appearance={ButtonAppearance.PRIMARY} className="full-width-btn">Submit</Button>
        </Form>);
    }, {
        info: {
            propTables: [DragDropFileUploader]
        }
    })
    .add("Toggle ", () => {
        const onSubmit = (formData) => {
            const { data } = formData;
            const { isActive } = data;

            console.log("isActive: ", isActive);
        };

        return (<Form onSubmit={onSubmit}>
            <Toggle label="Is Active?" name="isActive" appearance="block"/>
            <Button appearance={ButtonAppearance.PRIMARY} className="full-width-btn">Submit</Button>
        </Form>);
    }, {
        info: {
            propTables: [Toggle]
        }
    });
