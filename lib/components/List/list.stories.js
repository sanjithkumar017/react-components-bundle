"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _List = _interopRequireDefault(require("./List"));

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
(0, _react2.storiesOf)("List", module).add("Simple Usage", function () {
  return _react["default"].createElement(_List["default"], {
    items: fruitsList
  });
}).add("Custom ListItem", function () {
  var ListItem = function ListItem(_ref) {
    var itemData = _ref.itemData;
    var name = itemData.name;
    return _react["default"].createElement("li", null, "Custom ListItem ---> ".concat(name));
  };

  return _react["default"].createElement(_List["default"], {
    items: fruitsList,
    ListItem: ListItem
  });
});