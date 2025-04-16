import React from "react";
import "../Styling/components/footer.scss";

const Footer: React.FC = () => {
  return (
    <div className="footerContainer">
      <div className="footerInformationContainer">
        <div className="footerInformationItem">Tel: 033 3333 3333</div>
        <div className="footerInformationItem">Email: helpme@police.co.uk</div>
        <div className="footerInformationItem">FAQs</div>
      </div>
      <img className="logo" src="/assets/police-logo.jpg" />
    </div>
  );
};

export { Footer };
