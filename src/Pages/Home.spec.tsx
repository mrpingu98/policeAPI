import { render } from "@testing-library/react";
import { Home } from "./Home";
import React from "react";

describe("Home page tests", () => {
  const componentPrefix = "home-";

  //#region welcome message
  it("SHOULD render the welcome message WHEN the page loads", async () => {
    //arrange
    const { getByTestId } = render(<Home />);

    //act
    const welcomeMessage = getByTestId(`${componentPrefix}welcome-message`);

    //assert
    expect(welcomeMessage).toBeInTheDocument();
  });
  //#endregion

  //#region recent news
  it("SHOULD render the Recent News title WHEN the page loads", async () => {
    //arrange
    const { getByTestId } = render(<Home />);

    //act
    const recentNewsTitle = getByTestId(`${componentPrefix}recent-news-title`);

    //assert
    expect(recentNewsTitle).toBeInTheDocument();
    expect(recentNewsTitle).toHaveTextContent("Recent News");
  });

  //how to test for the specific props passed in...just do general getByTextContent etc?

  //#endregion

  //#region related content
  it("SHOULD render the Related Content title WHEN the page loads", async () => {
    //arrange
    const { getByTestId } = render(<Home />);

    //act
    const relatedContentTitle = getByTestId(
      `${componentPrefix}related-content-title`
    );

    //assert
    expect(relatedContentTitle).toBeInTheDocument();
    expect(relatedContentTitle).toHaveTextContent("Related Content");
  });

  //#endregion
});
