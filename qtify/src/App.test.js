import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

test("renders Qtify hero text", () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  expect(
    screen.getByText(/100 Thousand Songs, ad-free/i)
  ).toBeInTheDocument();
});