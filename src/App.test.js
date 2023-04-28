import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);

  const h1 = screen.getByRole("heading");

  expect(h1).toBeInTheDocument();

  expect(h1.textContent).toBe("Hello, World");
});
