import { render } from "@testing-library/react";
import { RecentNewsItem } from "./RecentNewsItem";
import React from "react";

//expect mainContainer to have flex styling but says block??
//might need to add jest-transform-css into config
//need to inject the CSS into the tests - won't do so automatically

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
  const componentPrefix = "recent-news-";

  describe("Valid props tests", () => {
    it("SHOULD render the title WHEN title is valid", async () => {
      //arrange
      const { getByTestId } = renderComponent();

      //act
      const title = getByTestId(`${componentPrefix}title`);

      //assert
      expect(title.textContent).toBe("Test Title");
    });

    it("SHOULD render correct image WHEN image is valid", async () => {
      //arrange
      const { getByTestId } = renderComponent();

      //act
      const image = getByTestId(`${componentPrefix}image`);

      //assert
      expect(image).toBeInTheDocument();
      expect(image).toHaveAttribute("alt", "Test Alternative Text");
      expect(image).toHaveAttribute(
        "src",
        "/assets/spontaneous-combustion.jpg"
      );
    });
  });

  describe("Does not have mainNewsItem", () => {
    it("SHOULD render container correctly WHEN does not have mainNewsItem", async () => {
      //arrange
      const { getByTestId } = renderComponent();

      //act
      const mainContainer = getByTestId(`${componentPrefix}main-container`);
      // const styles = getComputedStyle(mainContainer);

      //assert
      expect(mainContainer).toHaveClass("newsItemContainer");
      // expect(styles.alignItems).toBe("center");
      // expect(mainContainer).toHaveStyle("align-items: center");
      // expect(mainContainer).toHaveStyle("display: flex");
      // expect(mainContainer).toHaveStyle("flex-direction: row");
    });

    it("SHOULD render image container correctly WHEN does not have mainNewsItem", async () => {
      //arrange
      const { getByTestId } = renderComponent();

      //act
      const imageContainer = getByTestId(`${componentPrefix}image`);

      //assert
      expect(imageContainer).toHaveClass("imageContainer");
    });

    it("SHOULD render title container correctly container WHEN does not have mainNewsItem", async () => {
      //arrange
      const { getByTestId } = renderComponent();

      //act
      const titleContainer = getByTestId(`${componentPrefix}title-container`);

      //assert
      expect(titleContainer).toHaveClass("titleContainer");
    });
  });

  describe("Has mainNewItem", () => {
    const mainNewsItem = true;

    it("SHOULD render container correctly WHEN it has mainNewsItem", async () => {
      //arrange
      const { getByTestId } = renderComponent({ mainNewsItem });

      //act
      const mainContainer = getByTestId(`${componentPrefix}main-container`);

      //assert
      expect(mainContainer).toHaveClass(
        "newsItemContainer mainNewsItemContainer"
      );
    });

    it("SHOULD render image container correctly WHEN it has mainNewsItem", async () => {
      //arrange
      const { getByTestId } = renderComponent({ mainNewsItem });

      //act
      const mainContainer = getByTestId(`${componentPrefix}image`);

      //assert
      expect(mainContainer).toHaveClass("imageContainer mainImageContainer");
    });

    it("SHOULD render mcorrect title container WHEN it has mainNewsItem", async () => {
      //arrange
      const { getByTestId } = renderComponent({ mainNewsItem });

      //act
      const mainContainer = getByTestId(`${componentPrefix}title-container`);

      //assert
      expect(mainContainer).toHaveClass("titleContainer mainTitleContainer");
    });
  });
});
