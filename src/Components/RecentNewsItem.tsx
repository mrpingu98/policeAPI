import React from "react";
import "../Styling/components/recentNewsItem.scss";
import "../Styling/layout/layout.scss";

interface RecentNewsItemProps {
  title: string;
  imageSource: string;
  alternativeImageText: string;
  mainNewsItem?: boolean;
}

const RecentNewsItem: React.FC<RecentNewsItemProps> = ({
  title,
  imageSource,
  alternativeImageText,
  mainNewsItem = false,
}) => {
  return (
    <div
      className={`newsItemContainer ${mainNewsItem && "mainNewsItemContainer"}`}
    >
      <img
        className={`imageContainer ${mainNewsItem && "mainImageContainer"}`}
        src={imageSource}
        alt={alternativeImageText}
      />
      <div className={`titleContainer ${mainNewsItem && "mainTitleContainer"}`}>
        <p className="noMarginBottom">{title}</p>
      </div>
    </div>
  );
};

export { RecentNewsItem };
