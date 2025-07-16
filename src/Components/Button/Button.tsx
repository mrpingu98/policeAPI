import React from "react";
import "../../Styling/components/button.scss";

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
  const safeText = text?.trim() || "Click";

  return (
    <button className={variant} onClick={onClick} data-testid="button">
      {safeText}
    </button>
  );
};

export { Button };
