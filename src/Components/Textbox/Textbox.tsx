import React from "react";
import "../../Styling/components/textbox.scss";

interface TextboxProps {
  type: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
  name?: string;
}

const Textbox: React.FC<TextboxProps> = ({ name, setText, type }) => {
  return (
    <input
      type={type}
      className="textbox"
      name={name}
      onChange={(e) => setText(e.target.value)}
    />
  );
};

export default Textbox;
