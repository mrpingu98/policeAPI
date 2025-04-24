import React from "react";
// import { NewsItem } from "../Components/NewsItem";
import { Button } from "../Components/Button";

const Home: React.FC = () => {
  function buttonClickedMessageOne() {
    return console.log(
      "This is the first message that can be called and logged from the Home page"
    );
  }

  function buttonClickedMessageTwo() {
    return console.log(
      "This is the second message that can be called and logged from the Home page"
    );
  }

  return (
    <div>
      <p>This the home page</p>
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

// const buttonClickeds = () => {
//   return console.log("This has been called and logged from the Home page");
// };
