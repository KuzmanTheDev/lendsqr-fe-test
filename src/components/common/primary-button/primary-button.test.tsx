import { fireEvent, render, screen } from "@testing-library/react";
import { PrimaryButton } from "components/common/primary-button/primary-button";

test("renders content wrapped in button", () => {
  render(<PrimaryButton>Test Button</PrimaryButton>);
  const buttonElement = screen.getByText(/Test Button/i);
  expect(buttonElement).toBeInTheDocument();
});

test("handles onClick", () => {
  const onClick = jest.fn();
  render(<PrimaryButton onClick={onClick}>Test Button</PrimaryButton>);
  const buttonElement = screen.getByText(/Test Button/i);
  fireEvent.click(buttonElement);
  expect(onClick).toHaveBeenCalledTimes(1);
});
