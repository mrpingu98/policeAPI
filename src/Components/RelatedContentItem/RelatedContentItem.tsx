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
        data-testid="relatedContent-link"
        href={href}
      >
        <img
          className="relatedContentItemImage"
          src={imageSource}
          data-testid="relatedContent-image"
        />
        <div
          className="relatedContentItemTitle"
          data-testid="relatedContent-title"
        >
          {title}
        </div>
      </a>
    </div>
  );
};

export { RelatedContentItem };
