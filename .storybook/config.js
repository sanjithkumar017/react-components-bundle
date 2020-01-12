import { addParameters, configure } from '@storybook/react';
import { addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withA11y } from '@storybook/addon-a11y';
import { addReadme } from 'storybook-readme';
import '@storybook/addon-console';
import "../public/css/storybook.scss";
import "../src/components/core.css";
import "../src/components/theme.css";

addParameters({
    options: {
        showPanel: true,
        panelPosition: "bottom",
        isToolshown: true
    }
});

addDecorator(withInfo({
    inline: true, // Displays info inline vs click button to view
    maxPropsIntoLine: 1,  //Max props to display per line in source code
}));

/* Readme addon */
addDecorator(addReadme);

/* accessibilty addon */
addDecorator(withA11y);

configure(
    [
        require.context("../src", false, /Intro\.stories\.mdx/),
        require.context('../src/', true, /\.stories\.js$/)
    ]
, module);
