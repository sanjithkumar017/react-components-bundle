"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonLinks = require("@storybook/addon-links");

var _InlineModal = _interopRequireWildcard(require("./InlineModal"));

var _ = require("../");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var fruitsList = [{
  id: 1,
  name: "Banana"
}, {
  id: 2,
  name: "Apple"
}, {
  id: 3,
  name: "Kiwi"
}, {
  id: 4,
  name: "Grapes"
}, {
  id: 5,
  name: "Pineapple"
}];
(0, _react2.storiesOf)("InlineModal", module).add("Simple Usage", function () {
  return _react["default"].createElement(_InlineModal["default"], null, _react["default"].createElement(_InlineModal.InlineModalActivator, null, _react["default"].createElement("div", null, "Select")), _react["default"].createElement(_InlineModal.InlineModalBody, null, _react["default"].createElement(_.List, {
    items: fruitsList,
    showApp: (0, _addonLinks.linkTo)("List")
  })));
}, {
  info: {
    text: "Displaying a dropdown list of items"
  }
});