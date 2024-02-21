"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireWildcard(require("react"));
var _Button = _interopRequireDefault(require("../Button/Button"));
var _ChatModal = _interopRequireDefault(require("../ChatModal/ChatModal"));
var _chatBoxModule = _interopRequireDefault(require("./chatBox.module.css"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const ChatBox = _ref => {
  let {
    greetingMessage,
    position
  } = _ref;
  const [isOpen, setIsOpen] = (0, _react.useState)(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  const getPositionClass = () => {
    switch (position) {
      case "bottom-left":
        return _chatBoxModule.default.bottomLeft;
      case "bottom-right":
        return _chatBoxModule.default.bottomRight;
      default:
        return "";
    }
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: _chatBoxModule.default.app
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _chatBoxModule.default.container
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(_chatBoxModule.default.chatBox, " ").concat(getPositionClass())
  }, /*#__PURE__*/_react.default.createElement(_ChatModal.default, {
    message: greetingMessage,
    className: " ".concat(!isOpen ? _chatBoxModule.default.close : "")
  }), /*#__PURE__*/_react.default.createElement(_Button.default, {
    onClick: handleClick,
    color: "#fff",
    isOpen: isOpen
  }))));
};
var _default = exports.default = ChatBox;