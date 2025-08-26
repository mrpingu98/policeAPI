import React from "react";
import "../../Styling/components/textbox.scss";

interface TextboxProps {
  name?: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
}

const Textbox: React.FC<TextboxProps> = ({ name, setText }) => {
  return (
    <input
      type="text"
      className="textbox"
      name={name}
      onChange={(e) => setText(e.target.value)}
    />
  );
};

export default Textbox;
