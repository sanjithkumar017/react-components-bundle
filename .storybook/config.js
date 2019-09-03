import { addParameters, configure } from '@storybook/react';
import { addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withA11y } from '@storybook/addon-a11y';
import { addReadme } from 'storybook-readme';
import "../public/css/storybook.scss";

// automatically import all files ending in *.stories.js
const req = require.context('../src/components', true, /\.stories\.js$/);

addParameters({
    options: {
        showPanel: true,
        panelPosition: "bottom",
        isToolshown: true
    }
});

addDecorator(withInfo({
    inline: true, // Displays info inline vs click button to view
    maxPropsIntoLine: 100,  //Max props to display per line in source code
}));

/* Readme addon */
addDecorator(addReadme);

/* accessibilty addon */
addDecorator(withA11y);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
