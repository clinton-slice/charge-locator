import React from "react";
import { render, screen, fireEvent } from "@testing-library/react-native";
import Card from ".";

describe("Card", () => {
  const mockOnCharge = jest.fn();
  const mockOnNavigate = jest.fn();
  const component = (
    <Card
      title="Title"
      address="123 Main street"
      town="Ottawa"
      stateOrProvince="Ontario"
      postcode="A1A Y67"
      ocmNumber="9000"
      onStartCharge={mockOnCharge}
      onNavigate={mockOnNavigate}
    />
  );
  it("renders the correct message", () => {
    const { container } = render(component);
    expect(container.firstChild).toMatchSnapshot();
  });
  it("calls `onNavigate` callback when  clicked", () => {
    render(component);
    fireEvent.press(screen.getByText("Navigate"));
    expect(mockOnNavigate).toHaveBeenCalled();
  });
  it("calls `onStartCharge` callback when button is clicked", () => {
    render(component);
    fireEvent.press(screen.getByText("Start Charging"));
    expect(mockOnCharge).toHaveBeenCalled();
  });
});
