import { fireEvent, render } from "@testing-library/react";
import { Button } from "./Button";
import React from "react";

interface Props {
  text: string;
  variant: "primary" | "secondary";
  onClick: typeof jest.fn;
  dataTestId?: string;
  disabled?: boolean;
}

const handleClick = jest.fn();

const validProps: Props = {
  text: "Submit",
  variant: "primary",
  onClick: handleClick,
  dataTestId: "primary-button",
  disabled: false,
};

const renderComponent = (props = {}) => render(<Button {...validProps} {...props} />);

describe("Button tests", () => {
  describe("Valid props tests", () => {
    const datatestid = "primary-button";
    it("SHOULD render the Button WHEN props are valid", async () => {
      //arrange
      const { getByTestId } = renderComponent();

      //act
      const button = getByTestId(datatestid);

      //assert
      expect(button).toBeInTheDocument();
    });

    it("SHOULD render a primary button WHEN variant prop is set to primary", async () => {
      //arrange
      const { getByTestId } = renderComponent();

      //act
      const button = getByTestId(datatestid);

      //assert
      expect(button).toHaveClass("primary");
    });

    it("SHOULD render a secondary button WHEN variant prop is set to secondary", async () => {
      //arrange
      const { getByTestId } = renderComponent({ variant: "secondary", dataTestId: "secondary-button" });

      //act
      const button = getByTestId("secondary-button");

      //assert
      expect(button).toHaveClass("secondary");
    });

    it("SHOULD render the button with corrrect text WHEN text prop is valid", async () => {
      //arrange
      const { getByTestId } = renderComponent();

      //act
      const button = getByTestId(datatestid);

      //assert
      expect(button).toHaveTextContent("Submit");
    });

    it("SHOULD fulfill onClick functionality WHEN onClick prop is valid", async () => {
      //arrange
      const { getByTestId } = renderComponent();
      const button = getByTestId(datatestid);

      //act
      fireEvent.click(button);

      //assert
      expect(handleClick).toHaveBeenCalled();
    });

    it("SHOULD not be clickable WHEN disabled prop is true", async () => {
      //arrange
      const { getByTestId } = renderComponent({ disabled: true });
      const button = getByTestId(datatestid);

      //act
      fireEvent.click(button);

      //assert
      expect(handleClick).toHaveBeenCalledTimes(0);
    });
  });

  describe("Invalid props where text is an empty string tests", () => {
    const datatestid = "primary-button";
    it("SHOULD render the button with no text WHEN text prop is an empty string", async () => {
      //arrange
      const { getByTestId } = renderComponent({ text: "" });

      //act
      const button = getByTestId(datatestid);

      //assert
      expect(button).toHaveTextContent("");
    });
  });
});
