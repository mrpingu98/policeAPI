import React from "react";
import "../Styling/components/footer.scss";

const Footer: React.FC = () => {
  return (
    <div className="footerContainer">
      <div className="footerContentContainer">
        <div className="footerContent">Tel: 033 3333 3333</div>
        <div className="footerContent">Email: helpme@police.co.uk</div>
        <div className="footerContent">FAQs</div>
        <div>Remember - Call 999 in an emergency</div>
      </div>
      <img className="logo" src="/assets/police-logo.jpg" />
    </div>
  );
};

export { Footer };
