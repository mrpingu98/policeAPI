import React from "react";
import "../Styling/pages/home.scss";
import { RecentNewsItem } from "../Components/RecentNewsItem";
const Home: React.FC = () => {
  return (
    <>
      <div className="welcomeMessageContainer">
        <div>
          <p className="welcomeMessage">
            This website uses the UK Police API to gather data about crime and
            policing across England, Wales and Northern Ireland
          </p>
          <p className="welcomeMessage">
            Head to the API page to find out about crime in your local area
          </p>
        </div>
      </div>
      <h2 className="recentNewsTitle">Recent News</h2>
      <div className="recentNewsContainer">
        <RecentNewsItem
          title={"Man spontanesouly combusts - is this the end?"}
          imageSource={"/assets/spontaneous-combustion.jpg"}
          alternativeImageText={"burnt outline of man in seat"}
        />
        <RecentNewsItem
          title={"Tortoise conducts traffic stop in world's first"}
          imageSource={"/assets/tortoise-officer.jpg"}
          alternativeImageText={"tortoise police officer"}
        />
        <RecentNewsItem
          title={
            "Five-year old charged with espionage after passing on teaching material to rival school"
          }
          imageSource={"/assets/espionage.jpg"}
          alternativeImageText={"gazing eye"}
        />
      </div>
    </>
  );
};

export { Home };
