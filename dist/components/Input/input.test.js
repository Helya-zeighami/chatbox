"use strict";

var _react = _interopRequireDefault(require("react"));
var _react2 = require("@testing-library/react");
var _Input = _interopRequireDefault(require("./Input"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
describe("Input Component", () => {
  it("renders without crashing", () => {
    (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_Input.default, null));
  });
  it("allows user to type in the input field", () => {
    const {
      getByPlaceholderText
    } = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_Input.default, null));
    const inputElement = getByPlaceholderText("Write something");
    _react2.fireEvent.change(inputElement, {
      target: {
        value: "Test Input"
      }
    });
    expect(inputElement.value).toBe("Test Input");
  });
});