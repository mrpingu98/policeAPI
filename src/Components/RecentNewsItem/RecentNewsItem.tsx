import React from "react";
import "../../Styling/components/recentNewsItem.scss";
import "../../Styling/layout/layout.scss";
import { isStringNotEmpty } from "../../utils/strings/string";

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
  const safeTitle = isStringNotEmpty(title);

  const safeAlternativeImageText = isStringNotEmpty(alternativeImageText);

  const safeImageSource = isStringNotEmpty(imageSource);

  //maybe put a console.warn here?

  return safeAlternativeImageText && safeImageSource && safeTitle ? (
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
