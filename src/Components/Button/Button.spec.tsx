import { fireEvent, render } from "@testing-library/react";
import { Button } from "./Button";
import React from "react";

interface Props {
  text: string;
  variant: "primary" | "secondary";
  onClick: typeof jest.fn;
  dataTestId?: string;
}

const handleClick = jest.fn();

const primaryValidProps: Props = {
  text: "Submit",
  variant: "primary",
  onClick: handleClick,
  dataTestId: "primary-button",
};

const secondaryValidProps: Props = {
  text: "Submit",
  variant: "secondary",
  onClick: handleClick,
  dataTestId: "secondary-button",
};

const invalidProps: Props = {
  text: "",
  variant: "primary",
  onClick: handleClick,
};

const renderComponent = (props: Props) => render(<Button {...props} />);

describe("Button tests", () => {
  describe("Valid props with primary variant tests", () => {
    const datatestid = "primary-button";
    it("SHOULD render the Button WHEN props are valid", async () => {
      //arrange
      const { getByTestId } = renderComponent(primaryValidProps);

      //act
      const button = getByTestId(datatestid);

      //assert
      expect(button).toBeInTheDocument();
    });

    it("SHOULD render a primary button WHEN variant prop is set to primary", async () => {
      //arrange
      const { getByTestId } = renderComponent(primaryValidProps);

      //act
      const button = getByTestId(datatestid);

      //assert
      expect(button).toHaveClass("primary");
    });

    it("SHOULD render the button with corrrect text WHEN text prop is valid", async () => {
      //arrange
      const { getByTestId } = renderComponent(primaryValidProps);

      //act
      const button = getByTestId(datatestid);

      //assert
      expect(button).toHaveTextContent("Submit");
    });

    it("SHOULD fulfill onClick functionality WHEN onClick prop is valid", async () => {
      //arrange
      const { getByTestId } = renderComponent(primaryValidProps);
      const button = getByTestId(datatestid);

      //act
      fireEvent.click(button);

      //assert
      expect(handleClick).toHaveBeenCalled();
    });
  });

  describe("Valid props with secondary variant tests", () => {
    const datatestid = "secondary-button";
    it("SHOULD render the Button WHEN props are valid", async () => {
      //arrange
      const { getByTestId } = renderComponent(secondaryValidProps);

      //act
      const button = getByTestId(datatestid);

      //assert
      expect(button).toBeInTheDocument();
    });

    it("SHOULD render a secondary button WHEN variant prop is set to secondary", async () => {
      //arrange
      const { getByTestId } = renderComponent(secondaryValidProps);

      //act
      const button = getByTestId(datatestid);

      //assert
      expect(button).toHaveClass("secondary");
    });

    it("SHOULD render the button with correct text WHEN text prop is valid", async () => {
      //arrange
      const { getByTestId } = renderComponent(secondaryValidProps);

      //act
      const button = getByTestId(datatestid);

      //assert
      expect(button).toHaveTextContent("Submit");
    });

    it("SHOULD fulfill onClick functionality WHEN onClick prop is valid", async () => {
      //arrange
      const { getByTestId } = renderComponent(secondaryValidProps);
      const button = getByTestId(datatestid);

      //act
      fireEvent.click(button);

      //assert
      expect(handleClick).toHaveBeenCalled();
    });
  });

  describe("Invalid props where text is an empty string tests", () => {
    const datatestid = "button";
    it("SHOULD render the button with 'No text given' WHEN text prop is an empty string", async () => {
      //arrange
      const { getByTestId } = renderComponent(invalidProps);

      //act
      const button = getByTestId(datatestid);

      //assert
      expect(button).toHaveTextContent("No text given");
    });
  });
});
