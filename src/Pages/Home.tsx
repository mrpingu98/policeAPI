import React from "react";
import "../Styling/pages/home.scss";
import { RecentNewsItem } from "../Components/RecentNewsItem/RecentNewsItem";
import { RelatedContentItem } from "../Components/RelatedContentItem/RelatedContentItem";

const Home: React.FC = () => {
  return (
    <>
      <div className="welcomeMessageContainer">
        <p className="welcomeMessage" data-testid="home-welcome-message">
          This website uses the UK Police API to gather data about crime and
          policing across England, Wales and Northern Ireland
        </p>
        <br />
        <p className="welcomeMessage">
          Head to the API page to find out about crime in your local area
        </p>
      </div>
      <h2 className="title" data-testid="home-recent-news-title">
        Recent News
      </h2>
      <div className="recentNewsContainer">
        <div className="mainNewsItem" data-testid="home-main-news-item">
          <RecentNewsItem
            title={"Man spontanesouly combusts - is this the end?"}
            imageSource={
              process.env.PUBLIC_URL + "/assets/spontaneous-combustion.jpg"
            }
            alternativeImageText={"burnt outline of man in seat"}
            mainNewsItem
          />
        </div>
        <div
          className="secondaryNewsItems"
          data-testid="home-secondary-news-items"
        >
          <RecentNewsItem
            title={"Tortoise conducts traffic stop in world's first"}
            imageSource={
              process.env.PUBLIC_URL + "/assets/tortoise-officer.jpg"
            }
            alternativeImageText={"tortoise police officer"}
          />
          <RecentNewsItem
            title={
              "Five-year old charged with espionage after passing on teaching material to rival school"
            }
            imageSource={process.env.PUBLIC_URL + "/assets/espionage.jpg"}
            alternativeImageText={"gazing eye"}
          />
        </div>
      </div>
      <h2 className="title" data-testid="home-related-content-title">
        Related Content
      </h2>
      <div
        className="relatedContentContainer"
        data-testid="home-related-content-container"
      >
        <RelatedContentItem
          imageSource={
            process.env.PUBLIC_URL + "/assets/internal-police-reports.jpg"
          }
          title="Internal police reports"
          href="https://www.police.uk/pu/performance/"
        />
        <RelatedContentItem
          imageSource={process.env.PUBLIC_URL + "/assets/local-community.jpg"}
          title="Local community initiatives"
          href="https://www.met.police.uk/advice/advice-and-information/wsi/watch-schemes-initiatives/"
        />
      </div>
    </>
  );
};

export { Home };
