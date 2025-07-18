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
  const safeTitle = title.trim() || "NO TITLE GIVEN";

  const safeAlternativeImageText = alternativeImageText.trim() || false;

  const safeImageSource = imageSource.trim() || false;

  //maybe put a console.warn here?

  return safeAlternativeImageText && safeImageSource ? (
    <div
      className={`newsItemContainer ${mainNewsItem && "mainNewsItemContainer"}`}
      data-testid="recent-news-main-container"
    >
      <img
        className={`imageContainer ${mainNewsItem && "mainImageContainer"}`}
        src={safeImageSource}
        alt={safeAlternativeImageText}
        data-testid="recent-news-image"
      />
      <div
        className={`titleContainer ${mainNewsItem && "mainTitleContainer"}`}
        data-testid="recent-news-title-container"
      >
        <p className="noMarginBottom" data-testid="recent-news-title">
          {safeTitle}
        </p>
      </div>
    </div>
  ) : null;
};

export { RecentNewsItem };
