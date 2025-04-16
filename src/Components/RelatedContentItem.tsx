import React from "react";
import "../Styling/components/relatedContentItem.scss";

const RelatedContentItem: React.FC = () => {
  return (
    <div className="relatedContentItemContainer">
      <img className="image" src="assets/espionage.jpg" />
      <div>dbwicehche</div>
    </div>
  );
};

export { RelatedContentItem };
