"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.InlineModalBody = exports.InlineModalActivator = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var StyledInlineModal = _styledComponents["default"].div.withConfig({
  displayName: "InlineModal__StyledInlineModal",
  componentId: "sc-1d8n26j-0"
})(["position:relative;&.hover-open{.inline-modal-body{display:none;}&:hover{.inline-modal-body{display:block;}}}"]);

var StyledInlineModalBtn = _styledComponents["default"].div.withConfig({
  displayName: "InlineModal__StyledInlineModalBtn",
  componentId: "sc-1d8n26j-1"
})(["display:inline-block;background:#FFF;border:1px solid #eee;padding:10px;border-radius:3px;cursor:pointer;"]);

var StyledInlineModalBody = _styledComponents["default"].div.withConfig({
  displayName: "InlineModal__StyledInlineModalBody",
  componentId: "sc-1d8n26j-2"
})(["position:absolute;background:#FFF;border:1px solid #efeeee;box-shadow:0 9px 12px 0 rgba(0,0,0,0.15);"]);

var InlineModalActivator = function InlineModalActivator(props) {
  return _react["default"].createElement("div", null, props.children);
};

exports.InlineModalActivator = InlineModalActivator;

var InlineModalBody = function InlineModalBody(props) {
  return _react["default"].createElement("div", null, props.children);
};

exports.InlineModalBody = InlineModalBody;

var InlineModal = function InlineModal(props) {
  var children = props.children,
      activatorAction = props.activatorAction,
      className = props.className;

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      isModalOpen = _useState2[0],
      toggleModalOpen = _useState2[1];

  var activatorProps = {};
  var inlineModalClassName = className;
  var showModalBody = isModalOpen;
  var inlineModalRef = (0, _react.useRef)();

  var onActivatorClick = function onActivatorClick() {
    toggleModalOpen(!isModalOpen);
  };

  var onBodyClick = function onBodyClick(e) {
    if (inlineModalRef.current.contains(e.target)) {
      /* inside modal click */
      return;
    }
    /* outside click -> close modal */


    toggleModalOpen(false);
  };

  (0, _react.useEffect)(function () {
    /* add when mounted */
    document.addEventListener("click", onBodyClick);
    /* return function to be called when unmounted */

    return function () {
      document.removeEventListener("click", onBodyClick);
    };
  }, []);

  if (activatorAction === "click") {
    activatorProps = {
      onClick: onActivatorClick
    };
  } else if (activatorAction === "hover") {
    inlineModalClassName += " hover-open";
    showModalBody = true;
  }

  return _react["default"].createElement(StyledInlineModal, {
    className: inlineModalClassName,
    ref: inlineModalRef
  }, _react["default"].createElement(StyledInlineModalBtn, _extends({}, activatorProps, {
    className: "inline-modal-btn"
  }), children[0]), showModalBody && _react["default"].createElement(StyledInlineModalBody, {
    className: "inline-modal-body"
  }, children[1]));
};

InlineModal.defaultProps = {
  activatorAction: "click" // or "hover"

};
InlineModal.propTypes = {
  activatorAction: _propTypes["default"].string,
  children: function children(props, propName, componentName) {
    var children = props[propName];

    if (_react["default"].Children.count(children) !== 2) {
      return new Error("".concat(componentName, " should have 2 children"));
    }

    if (children[0].type !== InlineModalActivator || children[1].type !== InlineModalBody) {
      return new Error("".concat(componentName, " should have an InlineModalActivator & InlineModalBody components as children"));
    }
  }
};
var _default = InlineModal;
exports["default"] = _default;