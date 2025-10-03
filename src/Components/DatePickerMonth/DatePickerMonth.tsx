import React from "react";
import "../../Styling/components/datePickerMonth.scss";
import { isStringNotEmpty } from "../../utils/strings/string";

interface DatePickerMonthProps {
  setDate: React.Dispatch<React.SetStateAction<string>>;
  name?: string;
  min?: string;
  max?: string;
}

const DatePickerMonth: React.FC<DatePickerMonthProps> = ({ name, setDate, min, max }) => {
  const safeName = name === undefined ? true : isStringNotEmpty(name) || false;
  const safeMax = max === undefined ? true : isStringNotEmpty(max) || false;
  const safeMin = min === undefined ? true : isStringNotEmpty(min) || false;

  return safeName && safeMax && safeMin ? (
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
