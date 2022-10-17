import React from "react";
import { render, screen, fireEvent } from "@testing-library/react-native";
import Button from ".";

describe("Button", () => {
  const mockOnPress = jest.fn();
  const component = <Button onPress={mockOnPress} label="Button" />;
  it("renders the correct message", () => {
    const { container } = render(component);
    expect(container.firstChild).toMatchSnapshot();
  });
  it("calls `mockOnPress` callback when clicked", () => {
    render(component);
    fireEvent.press(screen.getByText("Button"));
    expect(mockOnPress).toHaveBeenCalled();
  });
});
