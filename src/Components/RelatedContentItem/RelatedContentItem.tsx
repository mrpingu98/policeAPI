import React from "react";
import "../../Styling/components/relatedContentItem.scss";
import { isStringNotEmpty } from "../../utils/strings/string";
import { RelatedContentItemProps } from "../../Interfaces";

const RelatedContentItem: React.FC<RelatedContentItemProps> = ({ imageSource, title, href, alternativeImageText }) => {
  const safeImageSource = isStringNotEmpty(imageSource);
  const safeAltText = isStringNotEmpty(alternativeImageText);
  const safeTitle = isStringNotEmpty(title);
  const safeHref = isStringNotEmpty(href);

  return safeImageSource && safeTitle && safeHref && safeAltText ? (
    <div className="relatedContentItemContainer" data-testid="related-content-item-container">
      <a
        className="linkContainer"
        data-testid="related-content-link"
        href={safeHref}
        rel="noopener noreferrer"
        target="_blank"
      >
        <img
          className="relatedContentItemImage"
          alt={safeAltText}
          src={safeImageSource}
          data-testid="related-content-image"
        />
        <div className="relatedContentItemTitle" data-testid="related-content-title">
          {safeTitle}
        </div>
      </a>
    </div>
  ) : null;
};

export { RelatedContentItem };
