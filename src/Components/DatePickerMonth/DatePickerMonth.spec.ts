import { render } from "@testing-library/react";

//Should render an input element
//Should be clickable
//should accept a set state prop
//shoulkd have name prop whenvalid
//should have type prop when valid
//should let you enter text once clicked

//should not render if type/name prop is invalid

//shouldn't let you enter more than 250 characters

import DatePickerMonth from "./DatePickerMonth";
import React, { useState } from "react";

interface DatePickerMonthProps {
  setText: React.Dispatch<React.SetStateAction<string>>;
  name?: string;
}

const [date, setDate] = useState<string>("");

const validProps = {
  setText: setDate,
  name: "test",
};

// const renderRelatedContentItem = (
//   requiredProps: RelatedContentItemProps,
//   props = {}
// ) => render(<RelatedContentItem {...requiredProps} {...props} />);

describe("Textbox tests", () => {
  const componentPrefix = "textbox";
});
