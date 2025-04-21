import React from "react";
import "../Styling/components/relatedContentItem.scss";

interface RelatedContentItemProps {
  imageSource: string;
}

const RelatedContentItem: React.FC<RelatedContentItemProps> = ({
  imageSource,
}) => {
  return (
    <div className="relatedContentItemContainer">
      <img className="relatedContentItemImage" src={imageSource} />
      <div className="relatedContentItemTitle">TITLE</div>
    </div>
  );
};

export { RelatedContentItem };

//within the container, make another container with 100% width, that has a darker and opaque background where the text for the
//title will go
