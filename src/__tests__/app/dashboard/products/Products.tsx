import { render, screen } from "@testing-library/react";
import ProductPage from "@/app/(landingLayout)/page";

test("should render the product page", () => {
  render(<ProductPage />);
  expect(screen.getByText("")).toBeInTheDocument();
});