import React from "react";
import "../../Styling/components/datePickerMonth.scss";

interface DatePickerMonthProps {
  setDate: React.Dispatch<React.SetStateAction<string>>;
  name?: string;
  min?: string;
  max?: string;
}

const DatePickerMonth: React.FC<DatePickerMonthProps> = ({
  name,
  setDate,
  min,
  max,
}) => {
  const safeName = name == undefined ? true : name.trim() || false;

  return safeName ? (
    <input
      type="month"
      className="datePickerMonthContainer"
      name={name}
      onChange={(e) => setDate(e.target.value)}
      data-testid="date-picker-month"
      min={min}
      max={max}
    />
  ) : null;
};

export { DatePickerMonth };
