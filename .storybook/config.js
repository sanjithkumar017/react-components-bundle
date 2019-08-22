import { configure } from '@storybook/react';
import { addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

// automatically import all files ending in *.stories.js
const req = require.context('../src/components', true, /\.stories\.js$/);

addDecorator(withInfo); 

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
