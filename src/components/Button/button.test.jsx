import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Button from "./Button";

describe("Button Component", () => {
  it("renders without crashing", () => {
    render(<Button />);
  });

  it("executes onClick function when clicked", () => {
    const onClickMock = jest.fn();
    const { getByTestId } = render(<Button onClick={onClickMock} />);
    const buttonContainer = getByTestId("button-container");

    fireEvent.click(buttonContainer);

    expect(onClickMock).toHaveBeenCalled();
  });
});
