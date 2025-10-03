import { render } from "@testing-library/react";
import React from "react";
import { Error } from "./Error";

interface ErrorProps {
  errorMessage: string;
}

const validProps: ErrorProps = {
  errorMessage: "A Network error occurred. Please try again later.",
};

const renderComponent = (props = {}) => render(<Error {...validProps} {...props} />);

describe("Error tests", () => {
  const componentPrefix = "error-";

  describe("Valid prop tests", () => {
    it("SHOULD render the component WHEN page loads", async () => {
      //arrange
      const { getByTestId } = renderComponent();

      //act
      const errorContainer = getByTestId(`${componentPrefix}container`);

      //assert
      expect(errorContainer).toBeInTheDocument();
    });

    it("SHOULD render the correct error message WHEN props are valid", async () => {
      //arrange
      const { getByTestId } = renderComponent();

      //act
      const errorContainer = getByTestId(`${componentPrefix}container`);

      //assert
      expect(errorContainer).toHaveTextContent("A Network error occurred. Please try again later.");
    });
  });

  describe("Invalid props tests", () => {
    it("SHOULD render the generic error message WHEN perrorMessage prop is an empty string", async () => {
      //arrange
      const { getByTestId } = renderComponent({ errorMessage: "" });

      //act
      const errorContainer = getByTestId(`${componentPrefix}container`);

      //assert
      expect(errorContainer).toHaveTextContent("An error occurred");
    });
  });
});
