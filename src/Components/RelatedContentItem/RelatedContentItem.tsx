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
  return (
    <div className="relatedContentItemContainer">
      <a
        className="linkContainer"
        data-testid="related-content-link"
        href={href}
      >
        <img
          className="relatedContentItemImage"
          src={imageSource}
          data-testid="related-content-image"
        />
        <div
          className="relatedContentItemTitle"
          data-testid="related-content-title"
        >
          {title}
        </div>
      </a>
    </div>
  );
};

export { RelatedContentItem };
