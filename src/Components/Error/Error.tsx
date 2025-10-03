import React from "react";
import "../../Styling/components/error.scss";
import { isStringNotEmpty } from "../../utils/strings/string";
import { ErrorProps } from "../../Interfaces";

const Error: React.FC<ErrorProps> = ({ errorMessage }) => {
  const safeErrorMessage = isStringNotEmpty(errorMessage);
  const genericErrorMessage = "An error occurred";

  return (
    <div className="errorContainer" data-testid="error-container">
      {safeErrorMessage ? safeErrorMessage : genericErrorMessage}
    </div>
  );
};

export { Error };
