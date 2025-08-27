import React from "react";
import { render } from "@testing-library/react";
import { DatePickerMonth } from "./DatePickerMonth";

interface DatePickerMonthProps {
  setDate: React.Dispatch<React.SetStateAction<string>>;
  name?: string;
}

const mockSetDate = jest.fn();

const validProps: DatePickerMonthProps = {
  setDate: mockSetDate,
  name: "test",
};

const renderComponent = (props = {}) =>
  render(<DatePickerMonth {...validProps} {...props} />);

describe("DatePickerMonth tests", () => {
  describe("Valid props", () => {
    it("SHOULD render an input element with type 'month' WHEN page loads", async () => {
      //arrange
      //act
      //assert
    });

    it("SHOULD allow user to click into input element WHEN page loads", async () => {
      //arrange
      //act
      //assert
    });

    it("SHOULD contain name attribute WHEN name prop is passed through", async () => {
      //arrange
      //act
      //assert
    });

    it("SHOULD update setState WHEN name setState is passed through", async () => {
      //arrange
      //act
      //assert
    });
  });

  describe("Invalid props", () => {
    it("SHOULD not render component WHEN name is an empty string", async () => {
      //arrange
      //act
      //assert
    });
  });
});

//Should render an input element
//Should be clickable
//should accept a set state prop
//should have name prop whenvalid
//

//should not render if type/name prop is invalid
