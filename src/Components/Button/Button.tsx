import React from "react";
import "../../Styling/components/button.scss";
import { isStringNotEmpty } from "../../utils/strings/string";
import { ButtonProps } from "../../Interfaces";

const Button: React.FC<ButtonProps> = ({ text, variant = "primary", onClick, dataTestId = "button", disabled }) => {
  const safeText = isStringNotEmpty(text);

  return (
    <button className={variant} onClick={onClick} data-testid={dataTestId} disabled={disabled}>
      {safeText}
    </button>
  );
};

export { Button };
