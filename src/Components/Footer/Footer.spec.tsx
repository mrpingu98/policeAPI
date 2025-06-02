import { render } from "@testing-library/react";
import { Footer } from "./Footer";
import React from "react";

//this will only test the footer component isolation? so if text is added to other parts of homepage won't affect this?
//how would the 'Help' test create a false-positive?
//It's best to avoid getByText as currently your "Help" test would pass if any content on the page contained that or similar words, always best to do getByTestId and have a data-testid on each of your elements so you know exactly what you are targetting!

//so for destructuring, instead of taking the 'screen' object, and then getting the method, we render the Footer and 'extract' the method we want before

describe("Footer tests", () => {
  it("should render the Telephone number", async () => {
    //arrange
    const { getByTestId } = render(<Footer />);

    //act
    const telephoneNumber = getByTestId("footer-telephone");

    //assert
    expect(telephoneNumber).toBeInTheDocument();
  });

  it("should render the email", async () => {
    const { getByTestId } = render(<Footer />);
    const email = getByTestId("footer-email");
    expect(email).toBeInTheDocument();
  });

  it("should render the FAQs", async () => {
    const { getByTestId } = render(<Footer />);
    const faqs = getByTestId("footer-faqs");
    expect(faqs).toBeInTheDocument();
  });

  // it("should not render Help", async () => {
  //   render(<Footer />);
  //   const help = screen.queryByText("Help");
  //   expect(help).not.toBeInTheDocument();
  // });

  it("should render the police logo", async () => {
    const { getByTestId } = render(<Footer />);
    const policeLogo = getByTestId("footer-logo");
    expect(policeLogo).toBeInTheDocument();
  });
});
