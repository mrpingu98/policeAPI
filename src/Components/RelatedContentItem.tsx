import React from "react";
import "../Styling/components/relatedContentItem.scss";

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
      <a className="linkContainer" href={href}>
        <img className="relatedContentItemImage" src={imageSource} />
        <div className="relatedContentItemTitle">{title}</div>
      </a>
    </div>
  );
};

export { RelatedContentItem };

//within the container, make another container with 100% width, that has a darker and opaque background where the text for the
//title will go
