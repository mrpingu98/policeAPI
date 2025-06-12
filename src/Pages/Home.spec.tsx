import { render } from "@testing-library/react";
import { Home } from "./Home";
import React from "react";

//how granular - e.g. renders news item - renders news item wiht correct image source etc (but already tested in the component ones)

describe("Home page tests", () => {
  const componentPrefix = "home-";

  describe("Welcome message tests", () => {
    it("SHOULD render the welcome message WHEN the page loads", async () => {
      //arrange
      const { getByTestId } = render(<Home />);

      //act
      const welcomeMessage = getByTestId(`${componentPrefix}welcome-message`);

      //assert
      expect(welcomeMessage).toBeInTheDocument();
      expect(welcomeMessage).toHaveTextContent(
        "This website uses the UK Police API to gather data about crime and policing across England, Wales and Northern Ireland"
      );
    });
  });

  describe("Recent News tests", () => {
    it("SHOULD render the Recent News title WHEN the page loads", async () => {
      //arrange
      const { getByTestId } = render(<Home />);

      //act
      const recentNewsTitle = getByTestId(
        `${componentPrefix}recent-news-title`
      );

      //assert
      expect(recentNewsTitle).toBeInTheDocument();
      expect(recentNewsTitle).toHaveTextContent("Recent News");
    });

    it("SHOULD render the correct amount of news items WHEN the page loads", async () => {
      //arrange
      const { getAllByTestId } = render(<Home />);

      //act
      const newsItemComponent = getAllByTestId("recent-news-main-container");

      //assert
      expect(newsItemComponent).toHaveLength(3);
    });

    it("SHOULD render the main news item WHEN the page loads", async () => {
      //arrange
      const { getByTestId, getAllByTestId } = render(<Home />);

      //act
      const mainNewsItem = getByTestId(`${componentPrefix}main-news-item`);
      const newsItemComponent = getAllByTestId("recent-news-main-container");

      //assert
      expect(mainNewsItem).toBeInTheDocument();
      expect(newsItemComponent[0]).toHaveClass(
        "newsItemContainer mainNewsItemContainer"
      );
    });

    it("SHOULD render the secondary news item WHEN the page loads", async () => {
      //arrange
      const { getByTestId, getAllByTestId } = render(<Home />);

      //act
      const secondaryNewsItems = getByTestId(
        `${componentPrefix}secondary-news-items`
      );
      const newsItemComponent = getAllByTestId("recent-news-main-container");

      //assert
      expect(secondaryNewsItems).toBeInTheDocument();
      expect(newsItemComponent[1]).toHaveClass("newsItemContainer");
      expect(newsItemComponent[2]).toHaveClass("newsItemContainer");
    });
  });

  describe("Related Content tests", () => {
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

    it("SHOULD render the correct amount of Related Content items WHEN the page loads", async () => {
      //arrange
      const { getAllByTestId } = render(<Home />);

      //act
      const relatedContentComponent = getAllByTestId(
        "related-content-item-container"
      );

      //assert
      expect(relatedContentComponent).toHaveLength(2);
    });

    it("SHOULD render the correct title's for the related content items WHEN the page loads", async () => {
      //arrange
      const { getAllByTestId } = render(<Home />);

      //act
      const relatedContentComponent = getAllByTestId("related-content-title");

      //assert
      expect(relatedContentComponent[0]).toHaveTextContent(
        "Internal police reports"
      );

      expect(relatedContentComponent[1]).toHaveTextContent(
        "Local community initiatives"
      );
    });
  });
});
