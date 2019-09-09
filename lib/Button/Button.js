"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.ButtonSize = exports.ButtonAppearance = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var StyledButton = _styledComponents["default"].button.withConfig({
  displayName: "Button__StyledButton",
  componentId: "sc-14hakbj-0"
})(["border-radius:3px;cursor:pointer;", " ", " ", " ", " ", " ", ""], function (props) {
  return props.appearance === "default" && (0, _styledComponents.css)(["&:hover{background:#f3f3f3;}"]);
}, function (props) {
  return props.appearance === "primary" && (0, _styledComponents.css)(["background:#1fa7fd;color:#FFF;border:0;&:hover{background:#208dd2;}"]);
}, function (props) {
  return props.appearance === "secondary" && (0, _styledComponents.css)(["background:#FFF;border:1px solid #95c7e7;&:hover{background:#eef8ff;}"]);
}, function (props) {
  return props.size === "small" && (0, _styledComponents.css)(["padding:6px 8px;"]);
}, function (props) {
  return props.size === "medium" && (0, _styledComponents.css)(["padding:10px 15px;"]);
}, function (props) {
  return props.size === "large" && (0, _styledComponents.css)(["padding:15px 22px;"]);
});
/** ButtonAppearance enum */


var ButtonAppearance = {
  DEFAULT: "default",
  PRIMARY: "primary",
  SECONDARY: "secondary"
};
/** ButtonSize enum */

exports.ButtonAppearance = ButtonAppearance;
var ButtonSize = {
  SMALL: "small",
  MEDIUM: "medium",
  LARGE: "large"
};
exports.ButtonSize = ButtonSize;

var Button = function Button(props) {
  var children = props.children,
      className = props.className,
      loading = props.loading,
      disabled = props.disabled,
      appearance = props.appearance,
      size = props.size,
      onClick = props.onClick;
  var btnClassName = "".concat(appearance, "-btn ").concat(size, " ").concat(className) + (loading ? " loading" : "");
  return _react["default"].createElement(StyledButton, {
    className: btnClassName,
    appearance: appearance,
    size: size,
    disabled: disabled,
    onClick: onClick
  }, children);
};

Button.propTypes = {
  /** Pass any additional classnames to Button component */
  className: _propTypes["default"].string,

  /** Boolean indicating whether the button should render as disabled */
  disabled: _propTypes["default"].bool,

  /** Boolean indicating whether the button is in loading state */
  loading: _propTypes["default"].bool,

  /** String indicating how Button should be rendered. 
   * Must be one of,
   * ButtonAppearance = {
      DEFAULT: "default",
      PRIMARY: "primary",
      SECONDARY: "secondary"
     }   
  */
  appearance: _propTypes["default"].oneOf(Object.values(ButtonAppearance)),

  /** String indicating how Button should be rendered.
   * Must be one of,
   * ButtonSize = {
      SMALL: "small",
      MEDIUM: "medium",
      LARGE: "large"
  }
  */
  size: _propTypes["default"].oneOf(Object.values(ButtonSize)),

  /** onClick handler */
  onClick: _propTypes["default"].func
};
Button.defaultProps = {
  onClick: function onClick() {},
  appearance: ButtonAppearance.DEFAULT,
  size: ButtonSize.SMALL,
  className: ""
};
var _default = Button;
exports["default"] = _default;