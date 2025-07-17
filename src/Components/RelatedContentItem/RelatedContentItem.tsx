import React from "react";
import "../../Styling/components/relatedContentItem.scss";

interface RelatedContentItemProps {
  imageSource: string;
  title: string;
  href: string;
}

const RelatedContentItem: React.FC<RelatedContentItemProps> = ({
  imageSource,
  title,
  href,
}) => {
  const safeImageSource = imageSource?.trim() || false;

  const safeTitle = title?.trim() || false;

  const safeHref = href?.trim() || false;

  return safeImageSource && safeTitle && safeHref ? (
    <div
      className="relatedContentItemContainer"
      data-testid="related-content-item-container"
    >
      <a
        className="linkContainer"
        data-testid="related-content-link"
        href={safeHref}
        rel="noopener noreferrer"
        target="_blank"
      >
        <img
          className="relatedContentItemImage"
          src={safeImageSource}
          data-testid="related-content-image"
        />
        <div
          className="relatedContentItemTitle"
          data-testid="related-content-title"
        >
          {safeTitle}
        </div>
      </a>
    </div>
  ) : null;
};

export { RelatedContentItem };
