"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _iconsaxReact = require("iconsax-react");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Button = _ref => {
  let {
    onClick,
    color,
    className,
    isOpen
  } = _ref;
  const buttonContainerStyle = {
    width: '50px',
    height: '50px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '50%',
    background: '#00cc66',
    cursor: 'pointer',
    transition: 'transform 0.3s ease',
    transform: isOpen ? 'rotate(180deg)' : 'none'
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    style: buttonContainerStyle,
    className: className,
    onClick: onClick,
    "data-testid": "button-container"
  }, isOpen ? /*#__PURE__*/_react.default.createElement(_iconsaxReact.ArrowDown2, {
    size: "24",
    color: color
  }) : /*#__PURE__*/_react.default.createElement(_iconsaxReact.Messages3, {
    size: "24",
    color: color
  }));
};
var _default = exports.default = Button;