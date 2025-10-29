import React from "react";
import { fireEvent, render } from "@testing-library/react";
import { DatePickerMonth } from "./DatePickerMonth";
import { DatePickerMonthProps } from "../../Interfaces";

const mockSetDate = jest.fn();

const validProps: DatePickerMonthProps = {
  setDate: mockSetDate,
  name: "date-picker",
  min: "2023-01",
  max: "2026-01",
};

const renderComponent = (props = {}) => render(<DatePickerMonth {...validProps} {...props} />);

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

    it("SHOULD have a min attribute WHEN a valid min prop is passed through", async () => {
      //arrange
      const { getByTestId } = renderComponent();

      //act
      const datePicker = getByTestId(componentPrefix);

      //assert
      expect(datePicker).toHaveAttribute("min", "2023-01");
    });

    it("SHOULD have a max attribute WHEN a valid max prop is passed through", async () => {
      //arrange
      const { getByTestId } = renderComponent();

      //act
      const datePicker = getByTestId(componentPrefix);

      //assert
      expect(datePicker).toHaveAttribute("max", "2026-01");
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

    it("SHOULD not render component WHEN min is an empty string", async () => {
      //arrange
      const { queryByTestId } = renderComponent({ min: "" });

      //act
      const datePicker = queryByTestId(componentPrefix);

      //assert
      expect(datePicker).toBeNull();
    });

    it("SHOULD not render component WHEN max is an empty string", async () => {
      //arrange
      const { queryByTestId } = renderComponent({ max: "" });

      //act
      const datePicker = queryByTestId(componentPrefix);

      //assert
      expect(datePicker).toBeNull();
    });
  });
});
