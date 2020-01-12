import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Button, { ButtonAppearance, ButtonSize } from "./Button";

storiesOf("Button", module)
    .add("Simple Usage", () => {
        return (<div className="margin-btns">
            <Button size={ButtonSize.SMALL} onClick={action('clicked')}>SMALL</Button>
            <Button size={ButtonSize.MEDIUM} onClick={action('clicked')}>MEDIUM</Button>
            <Button size={ButtonSize.LARGE} onClick={action('clicked')}>LARGE</Button>
        </div>);
    }, {
        docs: {
            storyDescription: "Depicts a simple usage of the button"
        }
    })
    .add("Primary Button", () => {
        return (<div className="margin-btns">
            <Button appearance={ButtonAppearance.PRIMARY} size={ButtonSize.SMALL} onClick={action('clicked')}>SMALL</Button>
            <Button appearance={ButtonAppearance.PRIMARY} size={ButtonSize.MEDIUM} onClick={action('clicked')}>MEDIUM</Button>
            <Button appearance={ButtonAppearance.PRIMARY} size={ButtonSize.LARGE} onClick={action('clicked')}>LARGE</Button>
        </div>);
    }, {
        docs: {
            storyDescription: "Depicts a primary button"
        }
    })
    .add("Secondary Button", () => {
        return (<div className="margin-btns">
            <Button appearance={ButtonAppearance.SECONDARY} size={ButtonSize.SMALL} onClick={action('clicked')}>SMALL</Button>
            <Button appearance={ButtonAppearance.SECONDARY} size={ButtonSize.MEDIUM} onClick={action('clicked')}>MEDIUM</Button>
            <Button appearance={ButtonAppearance.SECONDARY} size={ButtonSize.LARGE} onClick={action('clicked')}>LARGE</Button>
        </div>);
    }, {
        docs: {
            storyDescription: "Depicts a secondary button"
        }
    });
