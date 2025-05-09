import React from "react";
import { Button } from "../Components/Button";

const Home: React.FC = () => {
  function buttonClickedMessageOne() {
    return console.log(
      "This is the first message being called from the child Button component and causing an update to the parent Home component"
    );
  }
  function buttonClickedMessageTwo() {
    return console.log(
      "This is the second message being called from the child Button component and causing an update to the parent Home component"
    );
  }
  return (
    <div>
      <Button
        text="Click me for message one"
        onClick={buttonClickedMessageOne}
      />
      <Button
        text="Click me for message two"
        onClick={buttonClickedMessageTwo}
      />
    </div>
  );
};

export { Home };

// <div>
//   <p>This the home page</p>
//   <NewsItem title="News Item Title One" />
//   <NewsItem title="News Item Title Two" />
//   <NewsItem title="News Item Title Three" />
// </div>;
