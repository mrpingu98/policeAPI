import { render } from "@testing-library/react";
import { Footer } from "./Footer";
import React from "react";

//this will only test the footer component isolation? so if text is added to other parts of homepage won't affect this?
//how would the 'Help' test create a false-positive?
//It's best to avoid getByText as currently your "Help" test would pass if any content on the page contained that or similar words, always best to do getByTestId and have a data-testid on each of your elements so you know exactly what you are targetting!

//so for destructuring, instead of taking the 'screen' object, and then getting the method, we render the Footer and 'extract' the method we want before

//data-testid first
//format with AAA in every test
//testing one element - can have multiple expect tests on this element - e.g. last test on the image
//SHOULD and WHERE in caps for descriptions
//Make constants in descriptions for repeated code like classNames or testIds
//testing one element can have multiple 'expects' within it
//Add ticket for RelatedContentItem - redo that component by thinking about unit tests beforehand
//Use regions to group certain tests together

describe("Footer tests", () => {
  const componentPrefix = "footer-";

  it("SHOULD render the Telephone number WHEN visible", async () => {
    //arrange
    const { getByTestId } = render(<Footer />);

    //act
    const telephoneNumber = getByTestId(`${componentPrefix}telephone`);

    //assert
    expect(telephoneNumber).toBeInTheDocument();
  });

  it("SHOULD render the Email WHEN visible", async () => {
    //arrange
    const { getByTestId } = render(<Footer />);

    //act
    const email = getByTestId(`${componentPrefix}email`);

    //assert
    expect(email).toBeInTheDocument();
  });

  it("SHOULD render the FAQs WHEN visible", async () => {
    //arrange
    const { getByTestId } = render(<Footer />);

    //act
    const faqs = getByTestId(`${componentPrefix}faqs`);

    //assert
    expect(faqs).toBeInTheDocument();
  });

  it("SHOULD render the police logo when visible", async () => {
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
