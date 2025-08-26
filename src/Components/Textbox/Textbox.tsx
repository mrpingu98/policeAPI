import React from "react";
import "../../Styling/components/textbox.scss";

interface TextboxProps {
  type: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
  name?: string;
}

const Textbox: React.FC<TextboxProps> = ({ name, setText, type }) => {
  const safeType = type.trim() || false;
  const safeName = name?.trim() || false;

  return safeType && safeName ? (
    <input
      type={type}
      className="textbox"
      name={name}
      onChange={(e) => setText(e.target.value)}
      data-testid="textbox"
    />
  ) : null;
};

export default Textbox;
