import React from "react";
import "../../Styling/components/datePickerMonth.scss";

interface DatePickerMonthProps {
  setDate: React.Dispatch<React.SetStateAction<string>>;
  name?: string;
}

const DatePickerMonth: React.FC<DatePickerMonthProps> = ({ name, setDate }) => {
  const safeName = name == undefined ? true : name.trim() || false;

  return safeName ? (
    <input
      type="month"
      className="datePickerMonthContainer"
      name={name}
      onChange={(e) => setDate(e.target.value)}
      data-testid="datePickerMonth"
    />
  ) : null;
};

export default DatePickerMonth;
