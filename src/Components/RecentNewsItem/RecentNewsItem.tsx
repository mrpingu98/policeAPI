import React from "react";
import "../../Styling/components/recentNewsItem.scss";
import "../../Styling/layout/layout.scss";

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
      data-testid="recent-news-main-container"
    >
      <img
        className={`imageContainer ${mainNewsItem && "mainImageContainer"}`}
        src={imageSource}
        alt={alternativeImageText}
        data-testid="recent-news-image"
      />
      <div
        className={`titleContainer ${mainNewsItem && "mainTitleContainer"}`}
        data-testid="recent-news-title-container"
      >
        <p className="noMarginBottom" data-testid="recent-news-title">
          {title}
        </p>
      </div>
    </div>
  );
};

export { RecentNewsItem };
