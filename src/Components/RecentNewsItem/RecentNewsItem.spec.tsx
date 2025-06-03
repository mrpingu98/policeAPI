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

describe("Normal Recent News Item tests", () => {
  it("should render the correct title", async () => {
    const { getByTestId } = renderComponent();
    const title = getByTestId("recent-news-title");
    expect(title.textContent).toBe("Test Title");
  });

  it("should render the correct title", async () => {
    const { getByTestId } = renderComponent();
    const title = getByTestId("recent-news-title");
    expect(title.textContent).toBe("Test Title");
  });

  it("should render correct image", async () => {
    const { getByTestId } = renderComponent();
    const image = getByTestId("recent-news-image");
    expect(image).toHaveAttribute("src", "/assets/spontaneous-combustion.jpg");
  });

  it("should render an image with the correct alternative text", async () => {
    const { getByTestId } = renderComponent();
    const image = getByTestId("recent-news-image");
    expect(image).toHaveAttribute("alt", "Test Alternative Text");
  });

  it("should render correct className for the main container", async () => {
    const { getByTestId } = renderComponent();
    const mainContainer = getByTestId("recent-news-main-container");
    expect(mainContainer).toHaveClass("newsItemContainer");
  });

  it("should render correct className for the image container", async () => {
    const { getByTestId } = renderComponent();
    const imageContainer = getByTestId("recent-news-image");
    expect(imageContainer).toHaveClass("imageContainer");
  });

  it("should not render mainTitleContainer className for title container", async () => {
    const { getByTestId } = renderComponent();
    const titleContainer = getByTestId("recent-news-title-container");
    expect(titleContainer).not.toHaveClass("titleContainer mainTitleContainer");
  });
});

describe("Main Recent News Item tests", () => {
  it("should render mainNewsItem className for main container", async () => {
    const { getByTestId } = renderComponent({ mainNewsItem: true });
    const mainContainer = getByTestId("recent-news-main-container");
    expect(mainContainer).toHaveClass(
      "newsItemContainer mainNewsItemContainer"
    );
  });

  it("should render mainImageContainer className for the image", async () => {
    const { getByTestId } = renderComponent({ mainNewsItem: true });
    const mainContainer = getByTestId("recent-news-image");
    expect(mainContainer).toHaveClass("imageContainer mainImageContainer");
  });

  it("should render mainTitleContainer className for the title container", async () => {
    const { getByTestId } = renderComponent({ mainNewsItem: true });
    const mainContainer = getByTestId("recent-news-title-container");
    expect(mainContainer).toHaveClass("titleContainer mainTitleContainer");
  });
});

//renders image (with alternative text)
//title
//mainNewsItemProp - check classnames of container, image and title change based on this
//can also check non-existent classNames
