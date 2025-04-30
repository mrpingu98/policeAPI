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
  return (
    <div className={`newsItemContainer ${isFullHeight && "fullHeight"}`}>
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
