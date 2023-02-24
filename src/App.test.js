import { render, screen } from "@testing-library/react";
import App from "./App";

test("App render test", () => {
  render(<App />);

  const heading = screen.getByRole("heading");

  expect(heading).toBeInTheDocument();

  expect(heading.textContent).toBe("Hello, AWS CLI");
});
