import React from "react";
import "../../Styling/components/button.scss";
import { isStringNotEmpty } from "../../utils/strings/string";

interface ButtonProps {
  text: string;
  variant: "primary" | "secondary";
  onClick: () => void;
  dataTestId?: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ text, variant = "primary", onClick, dataTestId = "button", disabled }) => {
  const safeText = isStringNotEmpty(text);

  return (
    <button className={variant} onClick={onClick} data-testid={dataTestId} disabled={disabled}>
      {safeText}
    </button>
  );
};

export { Button };
