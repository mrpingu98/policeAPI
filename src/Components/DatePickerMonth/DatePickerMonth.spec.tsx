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
  describe("Valid props", () => {});

  describe("Invalid props", () => {});
});

//Should render an input element
//Should be clickable
//should accept a set state prop
//should have name prop whenvalid
//

//should not render if type/name prop is invalid
