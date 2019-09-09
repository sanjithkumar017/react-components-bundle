"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonActions = require("@storybook/addon-actions");

var _Button = _interopRequireWildcard(require("./Button"));

var _ButtonReadme = _interopRequireDefault(require("./ButtonReadme.md"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

(0, _react2.storiesOf)("Button", module).addParameters({
  readme: {
    sidebar: _ButtonReadme["default"]
  }
}).add("Simple Usage", function () {
  return _react["default"].createElement("div", {
    className: "margin-btns"
  }, _react["default"].createElement(_Button["default"], {
    size: _Button.ButtonSize.SMALL,
    onClick: (0, _addonActions.action)('clicked')
  }, "SMALL"), _react["default"].createElement(_Button["default"], {
    size: _Button.ButtonSize.MEDIUM,
    onClick: (0, _addonActions.action)('clicked')
  }, "MEDIUM"), _react["default"].createElement(_Button["default"], {
    size: _Button.ButtonSize.LARGE,
    onClick: (0, _addonActions.action)('clicked')
  }, "LARGE"));
}).add("Primary Button", function () {
  return _react["default"].createElement("div", {
    className: "margin-btns"
  }, _react["default"].createElement(_Button["default"], {
    appearance: _Button.ButtonAppearance.PRIMARY,
    size: _Button.ButtonSize.SMALL,
    onClick: (0, _addonActions.action)('clicked')
  }, "SMALL"), _react["default"].createElement(_Button["default"], {
    appearance: _Button.ButtonAppearance.PRIMARY,
    size: _Button.ButtonSize.MEDIUM,
    onClick: (0, _addonActions.action)('clicked')
  }, "MEDIUM"), _react["default"].createElement(_Button["default"], {
    appearance: _Button.ButtonAppearance.PRIMARY,
    size: _Button.ButtonSize.LARGE,
    onClick: (0, _addonActions.action)('clicked')
  }, "LARGE"));
}).add("Secondary Button", function () {
  return _react["default"].createElement("div", {
    className: "margin-btns"
  }, _react["default"].createElement(_Button["default"], {
    appearance: _Button.ButtonAppearance.SECONDARY,
    size: _Button.ButtonSize.SMALL,
    onClick: (0, _addonActions.action)('clicked')
  }, "SMALL"), _react["default"].createElement(_Button["default"], {
    appearance: _Button.ButtonAppearance.SECONDARY,
    size: _Button.ButtonSize.MEDIUM,
    onClick: (0, _addonActions.action)('clicked')
  }, "MEDIUM"), _react["default"].createElement(_Button["default"], {
    appearance: _Button.ButtonAppearance.SECONDARY,
    size: _Button.ButtonSize.LARGE,
    onClick: (0, _addonActions.action)('clicked')
  }, "LARGE"));
});