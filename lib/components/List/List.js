"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ListItem = function ListItem(props) {
  var _props$itemData = props.itemData,
      itemData = _props$itemData === void 0 ? {} : _props$itemData;
  var name = itemData.name;
  return _react["default"].createElement("li", {
    className: "list-item"
  }, name);
};

var List = function List(props) {
  var _props$className = props.className,
      className = _props$className === void 0 ? "" : _props$className,
      items = props.items,
      idAttribute = props.idAttribute,
      ListItem = props.ListItem;
  return _react["default"].createElement("ul", {
    className: "list ".concat(className)
  }, items.map(function (itemData) {
    return _react["default"].createElement(ListItem, {
      itemData: itemData,
      key: itemData[idAttribute]
    });
  }));
};

List.propTypes = {
  items: _propTypes["default"].array
};
List.defaultProps = {
  items: [],
  idAttribute: "id",
  ListItem: ListItem
};
var _default = List;
exports["default"] = _default;