import React from "react";
import "../Styling/components/recentNewsItem.scss";
import "../Styling/layout/layout.scss";

interface RecentNewsItemProps {
  title: string;
  imageSource: string;
  alternativeImageText: string;
}

const RecentNewsItem: React.FC<RecentNewsItemProps> = ({
  title,
  imageSource,
  alternativeImageText,
}) => {
  return (
    <div className="newsItemContainer">
      <div className="titleContainer">
        <p className="noMarginBottom">{title}</p>
      </div>
      <img
        className="imageContainer"
        src={imageSource}
        alt={alternativeImageText}
      />
    </div>
  );
};

export { RecentNewsItem };

//test
