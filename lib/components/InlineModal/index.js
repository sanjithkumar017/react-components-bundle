"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "InlineModalActivator", {
  enumerable: true,
  get: function get() {
    return _InlineModal.InlineModalActivator;
  }
});
Object.defineProperty(exports, "InlineModalBody", {
  enumerable: true,
  get: function get() {
    return _InlineModal.InlineModalBody;
  }
});
exports["default"] = void 0;

var _InlineModal = _interopRequireWildcard(require("./InlineModal"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

var _default = _InlineModal["default"];
exports["default"] = _default;