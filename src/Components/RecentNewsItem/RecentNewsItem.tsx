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
  //would you have a case where there's no title? etc etc so decide what to render based on these
  //either add in some placeholder text, or don't render it at all
  //and the placeholder text will either be something for th edev to notice that they messed up
  //or placeholder text that would still have meaning for the component
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
