"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _inputModule = _interopRequireDefault(require("./input.module.css"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Input = () => {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: _inputModule.default.inputContainer
  }, /*#__PURE__*/_react.default.createElement("form", {
    action: ""
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    placeholder: "Write something",
    className: _inputModule.default.input,
    "data-testid": "input-container"
  })));
};
var _default = exports.default = Input;