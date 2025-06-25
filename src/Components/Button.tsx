import React from "react";
import "../Styling/components/button.scss";

interface ButtonProps {
  text?: string;
  icon?: React.ReactNode;
  datatestId?: string;
  onClick: () => void;
  className: string;
}

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  className,
  icon,
  datatestId,
}) => {
  return (
    <>
      {text && (
        <button
          data-testId={datatestId}
          className={className}
          onClick={onClick}
        >
          {text}
        </button>
      )}
      {icon && (
        <button
          data-testId={datatestId}
          className={className}
          onClick={onClick}
        >
          {icon}
        </button>
      )}
      {icon && text && (
        <button
          data-testId={datatestId}
          className={className}
          onClick={onClick}
        >
          {text}
          {icon}
        </button>
      )}
    </>
  );
};

export { Button };
