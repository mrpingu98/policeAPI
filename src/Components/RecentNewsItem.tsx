import React from "react";
import "../Styling/components/recentNewsItem.scss";
import "../Styling/layout/layout.scss";

const RecentNewsItem: React.FC = () => {
  return (
    <div className="newsItemContainer">
      <div className="titleContainer">
        <p className="noMarginBottom">
          Man spontaneously combusts - is this the end?
        </p>
      </div>
      <img
        className="imageContainer"
        src="/assets/spontaneous-combustion.jpg"
        alt="man combusting"
      />
    </div>
  );
};

export { RecentNewsItem };
