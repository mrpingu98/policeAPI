import React from "react";
import "../../Styling/components/error.scss";

interface ErrorProps {
  errorMessage: string;
}

const Error: React.FC<ErrorProps> = ({ errorMessage }) => {
  return <div className="errorContainer">{errorMessage}</div>;
};

export { Error };
