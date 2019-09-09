
# react-components-bundle

## Prerequisites

Install [npm](https://www.npmjs.com/get-npm)

## Setting Up

Install the npm packages using the following command

```
npm install
```

Start the build using the following command

```
npm run build
```

## Viewing the components

View the available components along with their accepted props using [storybook](https://storybook.js.org/)

To start the storybook run the following command

```
npm run storybook
```

The storybook can then be viewed at http://localhost:6006/

## TODO

- Minify JS / CSS

## FAQs

1) I am getting "" error. What to do?
    
    You can fix this error by adding the following config in your `webpack.config.js` file

    ```
    resolve: {
        alias: {
            react: path.resolve('./node_modules/react'),
        },
    }
    ```

    For more details refer [this link](https://github.com/facebook/react/issues/13991)

