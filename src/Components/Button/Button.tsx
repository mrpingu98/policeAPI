import React from "react";
import "../../Styling/components/button.scss";

interface ButtonProps {
  text: string;
  variant: "primary" | "secondary";
  onClick: () => void;
  dataTestId?: string;
  //pass datatestid - button too generic
}

const Button: React.FC<ButtonProps> = ({
  text,
  variant = "primary",
  onClick,
  dataTestId = "button",
}) => {
  const safeText = text?.trim() || "No text given";

  return (
    <button className={variant} onClick={onClick} data-testid={`${dataTestId}`}>
      {safeText}
    </button>
  );
};

export { Button };
