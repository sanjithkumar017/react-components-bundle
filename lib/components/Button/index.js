"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "ButtonAppearance", {
  enumerable: true,
  get: function get() {
    return _Button.ButtonAppearance;
  }
});
Object.defineProperty(exports, "ButtonSize", {
  enumerable: true,
  get: function get() {
    return _Button.ButtonSize;
  }
});
exports["default"] = void 0;

var _Button = _interopRequireWildcard(require("./Button"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

var _default = _Button["default"];
exports["default"] = _default;