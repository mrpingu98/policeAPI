import React from "react";
import "../Styling/components/newsItem.scss";
import "../Styling/layout/layout.scss";

interface NewsItemProps {
  title: string;
}

const NewsItem: React.FC<NewsItemProps> = (props) => {
  return (
    <div className="newsItemContainer">
      <div className="titleContainer">
        <p className="noMarginBottom">{props.title}</p>
      </div>
    </div>
  );
};

// const NewsItem: React.FC<NewsItemProps> = ({ title }) => {
//   return (
//     <div className="newsItemContainer">
//       <div className="titleContainer">
//         <p className="noMarginBottom">{title}</p>
//       </div>
//     </div>
//   );
// };

export { NewsItem };
