"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _chatModalModule = _interopRequireDefault(require("./chatModal.module.css"));
var _Input = _interopRequireDefault(require("../Input/Input"));
var _ChatView = _interopRequireDefault(require("../ChatView/ChatView"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const ChatModal = _ref => {
  let {
    className,
    message
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: className
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _chatModalModule.default.chatContainer
  }, /*#__PURE__*/_react.default.createElement(_ChatView.default, {
    message: message,
    className: className
  }), /*#__PURE__*/_react.default.createElement(_Input.default, null)));
};
var _default = exports.default = ChatModal;