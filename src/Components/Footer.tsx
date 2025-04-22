import React from "react";
import "../Styling/components/footer.scss";

const Footer: React.FC = () => {
  return (
    <div className="footerContainer">
      <div className="footerInformationContainer">
        <p className="footerInformationItem">Tel: 033 3333 3333</p>
        <p className="footerInformationItem">Email: helpme@police.co.uk</p>
        <p className="footerInformationItem">FAQs</p>
      </div>
      <img className="logo" src="/assets/police-logo.jpg" />
    </div>
  );
};

export { Footer };
