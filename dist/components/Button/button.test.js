"use strict";

var _react = _interopRequireDefault(require("react"));
var _react2 = require("@testing-library/react");
var _Button = _interopRequireDefault(require("./Button"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
describe("Button Component", () => {
  it("renders without crashing", () => {
    (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_Button.default, null));
  });
  it("executes onClick function when clicked", () => {
    const onClickMock = jest.fn();
    const {
      getByTestId
    } = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_Button.default, {
      onClick: onClickMock
    }));
    const buttonContainer = getByTestId("button-container");
    _react2.fireEvent.click(buttonContainer);
    expect(onClickMock).toHaveBeenCalled();
  });
});