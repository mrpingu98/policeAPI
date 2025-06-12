import React from "react";
import "../../Styling/components/footer.scss";

const Footer: React.FC = () => {
  return (
    <div className="footerContainer">
      <div className="footerInformationContainer">
        <p className="footerInformationItem" data-testid="footer-telephone">
          Tel: 033 3333 3333
        </p>
        <p className="footerInformationItem" data-testid="footer-email">
          Email: helpme@police.co.uk
        </p>
        <p className="footerInformationItem" data-testid="footer-faqs">
          FAQs
        </p>
      </div>
      <img
        className="logo"
        data-testid="footer-logo"
        src={process.env.PUBLIC_URL + "/assets/police-logo.jpg"}
        alt="Uk police logo"
      />
    </div>
  );
};

export { Footer };
