# react-components-bundle

## Using the components library

Install the package from npm

```
npm install react-components-bundle
```

Import the required components along with the CSS.

```
import Button from "react-components-bundle/components/Button";
```

Or less ideally (as this will include all components that you might not use as well)

```
import { Button } from "react-components-bundle";
```

And include the core CSS like below,

```
import "react-components-bundle/components/core.css";
```

The core CSS file will contain the core styles without which the component will not behave as expected. Hence do not forget to include this. 

### Using theme CSS

Theme CSS file will contain the styles which suggests a theme for all the components but is not a must have to use the library.

You can use the theme CSS in 2 ways:

**1. Use individual component CSS**

You can import the individual files for each of the components like below:

```
import "react-components-bundle/components/Table/tableTheme.css";
```

**2. Include the bundled CSS file which has all component's CSS**

You can import the bundled CSS file which contains all the component's CSS like below:

```
import "react-components-bundle/components/theme.css";
```

## Viewing the components

You can view the available components and their props using the storybook at this link:

https://anupamahosad.github.io/react-components-bundle/

## FAQs

1) I am getting "multiple instances of React" error. What to do?
    
    You can fix this error by adding the following config in your `webpack.config.js` file

    ```
    resolve: {
        alias: {
            react: path.resolve('./node_modules/react'),
        },
    }
    ```

    For more details refer [this link](https://github.com/facebook/react/issues/13991)


## Contributing

To contribute to the project, read the [contribution guidelines](CONTRIBUTING.md)

