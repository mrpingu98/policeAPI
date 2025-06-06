import { render } from "@testing-library/react";
import { RecentNewsItem } from "./RecentNewsItem";
import React from "react";

const defaultProps = {
  title: "Test Title",
  imageSource: "/assets/spontaneous-combustion.jpg",
  alternativeImageText: "Test Alternative Text",
};

const renderComponent = (props = {}) =>
  render(<RecentNewsItem {...defaultProps} {...props} />);
//we pass a props variable that will default to an object if nothing is passed in
//Then spreads two items into the components props (can either write out the props individually, or spread objects into the component...)
//we spread the default props in
//then spread additional/overriding props in as well

describe("Recent News Item tests", () => {
  //#region props
  it("SHOULD render the title WHEN a non-empty string is passed", async () => {
    //arrange
    const { getByTestId } = renderComponent();

    //act
    const title = getByTestId("recent-news-title");

    //assert
    expect(title.textContent).toBe("Test Title");
  });

  it("SHOULD render correct image WHEN a non-empty string is passed", async () => {
    //arrange
    const { getByTestId } = renderComponent();

    //act
    const image = getByTestId("recent-news-image");

    //assert
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("alt", "Test Alternative Text");
    expect(image).toHaveAttribute("src", "/assets/spontaneous-combustion.jpg");
  });
  //#endregion

  //#region mainNewsItem = false
  it("SHOULD render correct className for the main container WHEN mainNewsItem is false", async () => {
    //arrange
    const { getByTestId } = renderComponent();

    //act
    const mainContainer = getByTestId("recent-news-main-container");

    //assert
    expect(mainContainer).toHaveClass("newsItemContainer");
  });

  it("SHOULD render correct className for the image container when mainNewsItem is false", async () => {
    //arrange
    const { getByTestId } = renderComponent();

    //act
    const imageContainer = getByTestId("recent-news-image");

    //assert
    expect(imageContainer).toHaveClass("imageContainer");
  });

  it("SHOULD not render mainTitleContainer className for the title container WHEN mainNewsItem is false", async () => {
    //arrange
    const { getByTestId } = renderComponent();

    //act
    const titleContainer = getByTestId("recent-news-title-container");

    //assert
    expect(titleContainer).not.toHaveClass("titleContainer mainTitleContainer");
  });

  //#endregion

  //#region mainNewsItem = true
  it("SHOULD render mainNewsItem className for main container WHEN mainNewsItem is true", async () => {
    //arrange
    const { getByTestId } = renderComponent({ mainNewsItem: true });

    //act
    const mainContainer = getByTestId("recent-news-main-container");

    //assert
    expect(mainContainer).toHaveClass(
      "newsItemContainer mainNewsItemContainer"
    );
  });

  it("SHOULD render mainImageContainer className for the image WHEN mainNewsItem is true", async () => {
    //arrange
    const { getByTestId } = renderComponent({ mainNewsItem: true });

    //act
    const mainContainer = getByTestId("recent-news-image");

    //assert
    expect(mainContainer).toHaveClass("imageContainer mainImageContainer");
  });

  it("SHOULD render mainTitleContainer className for the title container WHEN mainNewsItem is true", async () => {
    //arrange
    const { getByTestId } = renderComponent({ mainNewsItem: true });

    //act
    const mainContainer = getByTestId("recent-news-title-container");

    //assert
    expect(mainContainer).toHaveClass("titleContainer mainTitleContainer");

    //#endregion
  });

  //need to think about tests from a 'wider' viewpoint, not just testing the component as is...
  //if an empty string is passed for the title, what would we want to happen?
  //if no alt text is given?
  //etc.
});
