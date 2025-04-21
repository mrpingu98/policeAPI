import React from "react";
import "../Styling/components/relatedContentItem.scss";

interface RelatedContentItemProps {
  imageSource: string;
  title: string;
}

const RelatedContentItem: React.FC<RelatedContentItemProps> = ({
  imageSource,
  title,
}) => {
  return (
    <div className="relatedContentItemContainer">
      <a className="linkContainer" href="">
        <img className="relatedContentItemImage" src={imageSource} />
        <div className="relatedContentItemTitle">{title}</div>
      </a>
    </div>
  );
};

export { RelatedContentItem };

//within the container, make another container with 100% width, that has a darker and opaque background where the text for the
//title will go
