import React from "react";
import { fireEvent, render } from "@testing-library/react";
import { DatePickerMonth } from "./DatePickerMonth";

const mockSetDate = jest.fn();
interface DatePickerMonthProps {
  setDate: React.Dispatch<React.SetStateAction<string>>;
  name?: string;
}
//add min prop

const validProps: DatePickerMonthProps = {
  setDate: mockSetDate,
  name: "date-picker",
};

const renderComponent = (props = {}) =>
  render(<DatePickerMonth {...validProps} {...props} />);

describe("DatePickerMonth tests", () => {
  const componentPrefix = "date-picker-month";
  describe("Valid props", () => {
    it("SHOULD render an input element with type 'month' WHEN page loads", async () => {
      //arrange
      const { getByTestId } = renderComponent();

      //act
      const datePicker = getByTestId(componentPrefix);

      //assert
      expect(datePicker).toHaveAttribute("type", "month");
    });

    it("SHOULD call the setState WHEN user chooses a date", async () => {
      //arrange
      const { getByTestId } = renderComponent();

      //act
      const datePicker = getByTestId(componentPrefix);
      fireEvent.change(datePicker, { target: { value: "2025-08" } });

      //assert
      expect(mockSetDate).toHaveBeenCalled();
      expect(mockSetDate).toHaveBeenCalledWith("2025-08");
    });

    it("SHOULD contain name attribute WHEN name prop is passed through", async () => {
      //arrange
      const { getByTestId } = renderComponent();

      //act
      const datePicker = getByTestId(componentPrefix);

      //assert
      expect(datePicker).toHaveAttribute("name", "date-picker");
    });
  });

  describe("Invalid props", () => {
    it("SHOULD not render component WHEN name is an empty string", async () => {
      //arrange
      const { queryByTestId } = renderComponent({ name: "" });

      //act
      const datePicker = queryByTestId(componentPrefix);

      //assert
      expect(datePicker).toBeNull();
    });
  });
});
