import React from "react";
import "../Styling/components/recentNewsItem.scss";
import "../Styling/layout/layout.scss";

interface RecentNewsItemProps {
  title: string;
  imageSource: string;
  alternativeImageText: string;
  isFullHeight?: boolean;
}

const RecentNewsItem: React.FC<RecentNewsItemProps> = ({
  title,
  imageSource,
  alternativeImageText,
  isFullHeight = false,
}) => {
  return isFullHeight ? (
    <div className="mainNewsItemContainer">
      <img
        className="mainImageContainer"
        src={imageSource}
        alt={alternativeImageText}
      />
      <div className="mainTitleContainer">
        <div className="noMarginBottom">{title}</div>
      </div>
    </div>
  ) : (
    <div className="newsItemContainer">
      <img
        className="imageContainer"
        src={imageSource}
        alt={alternativeImageText}
      />
      <div className="titleContainer">
        <p className="noMarginBottom">{title}</p>
      </div>
    </div>
  );
};

export { RecentNewsItem };
