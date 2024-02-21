import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Input from "./Input";

describe("Input Component", () => {
  it("renders without crashing", () => {
    render(<Input />);
  });

  it("allows user to type in the input field", () => {
    const { getByPlaceholderText } = render(<Input />);
    const inputElement = getByPlaceholderText("Write something");

    fireEvent.change(inputElement, { target: { value: "Test Input" } });

    expect(inputElement.value).toBe("Test Input");
  });
});
