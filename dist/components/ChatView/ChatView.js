"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _chatViewModule = _interopRequireDefault(require("./chatView.module.css"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const ChatView = _ref => {
  let {
    message,
    className
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(_chatViewModule.default.chat, " ").concat(className)
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: _chatViewModule.default.typography
  }, message));
};
var _default = exports.default = ChatView;