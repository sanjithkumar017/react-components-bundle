# react-components-bundle

## Using the components library

Install the package from npm

```
npm install react-components-bundle
```

Import the required components 

```
import Button from "react-components-bundle/components/Button";
```

Or less ideally (as this will include all components that you might not use as well)
```
import { Button } from "react-components-bundle";
```

## Using CSS

You can import the individual files for each of the components like below:

```
import "react-components-bundle/components/Button/button.css";
```

## Setting the project up for development

### Prerequisites

Install [npm](https://www.npmjs.com/get-npm)

### Setting Up

Install the npm packages using the following command

```
npm install
```

Start the JS build with watcher using the following command

```
npm run build -- --watch
```

To watch SCSS files & compile them to CSS use the following command

```
npm run scss -- --watch
```

**Note:** Prefix all the CSS classNames with namespace `"RCB-"`

### Viewing the components

View the available components along with their accepted props using [storybook](https://storybook.js.org/)

To start the storybook run the following command

```
npm run storybook
```

The storybook can then be viewed at http://localhost:6006/

## TODO

- Minify JS / CSS

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

