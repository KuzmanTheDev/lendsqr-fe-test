import { fireEvent, render, screen } from "@testing-library/react";
import { SecondaryButton } from "components/common/secondary-button/secondary-button";

test("renders content wrapped in button", () => {
  render(<SecondaryButton>Secondary Button</SecondaryButton>);
  const buttonElement = screen.getByText(/Secondary Button/i);
  expect(buttonElement).toBeInTheDocument();
});

test("handles onClick", () => {
  const onClick = jest.fn();
  render(<SecondaryButton onClick={onClick}>Secondary Button</SecondaryButton>);
  const buttonElement = screen.getByText(/Secondary Button/i);
  fireEvent.click(buttonElement);
  expect(onClick).toHaveBeenCalledTimes(1);
});
