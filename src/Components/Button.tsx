import React from "react";
import "../Styling/components/button.scss";

interface ButtonProps {
  text: string;
  variant: "primary" | "secondary";
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({
  text,
  variant = "primary",
  onClick,
}) => {
  //DEALING WITH EMPTY STRINGS
  const safeText = text?.trim() || "Click";

  return (
    <button className={variant} onClick={onClick}>
      {safeText}
    </button>
  );
};

export { Button };
