import { render } from "@testing-library/react";
import { Footer } from "./Footer";
import React from "react";

describe("Footer tests", () => {
  const componentPrefix = "footer-";

  it("SHOULD render the Telephone number WHEN page loads", async () => {
    //arrange
    const { getByTestId } = render(<Footer />);

    //act
    const telephoneNumber = getByTestId(`${componentPrefix}telephone`);

    //assert
    expect(telephoneNumber).toBeInTheDocument();
  });

  it("SHOULD render the Email WHEN page loads", async () => {
    //arrange
    const { getByTestId } = render(<Footer />);

    //act
    const email = getByTestId(`${componentPrefix}email`);

    //assert
    expect(email).toBeInTheDocument();
  });

  it("SHOULD render the FAQs WHEN page loads", async () => {
    //arrange
    const { getByTestId } = render(<Footer />);

    //act
    const faqs = getByTestId(`${componentPrefix}faqs`);

    //assert
    expect(faqs).toBeInTheDocument();
  });

  it("SHOULD render the police logo WHEN page loads", async () => {
    //arrange
    const { getByTestId } = render(<Footer />);

    //act
    const policeLogo = getByTestId(`${componentPrefix}logo`);

    //assert
    expect(policeLogo).toBeInTheDocument();
    expect(policeLogo).toHaveAttribute("alt", "Uk police logo");
    expect(policeLogo).toHaveAttribute(
      "src",
      `${process.env.PUBLIC_URL}/assets/police-logo.jpg`
    );
  });
});
