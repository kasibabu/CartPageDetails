import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";

test("renders Cart page", () => {
  render(<App />);

  const cartHeading = screen.getByText(/Cart/i);
  expect(cartHeading).toBeInTheDocument();
});
