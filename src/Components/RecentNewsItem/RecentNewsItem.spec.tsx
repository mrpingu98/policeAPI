import { render } from "@testing-library/react";
import { RecentNewsItem } from "./RecentNewsItem";
import { RecentNewsItemProps } from "../../Interfaces";
import React from "react";

const requiredProps = {
  title: "Test Title",
  imageSource: "/assets/spontaneous-combustion.jpg",
  alternativeImageText: "Test Alternative Text",
};

const renderComponent = (requiredProps: RecentNewsItemProps, props = {}) =>
  render(<RecentNewsItem {...requiredProps} {...props} />);

describe("Recent News Item tests", () => {
  const componentPrefix = "recent-news-";

  describe("Valid props tests", () => {
    it("SHOULD render the title WHEN title is valid", async () => {
      //arrange
      const { getByTestId } = renderComponent(requiredProps);

      //act
      const title = getByTestId(`${componentPrefix}title`);

      //assert
      expect(title.textContent).toBe("Test Title");
    });

    it("SHOULD render correct image WHEN image is valid", async () => {
      //arrange
      const { getByTestId } = renderComponent(requiredProps);

      //act
      const image = getByTestId(`${componentPrefix}image`);

      //assert
      expect(image).toBeInTheDocument();
      expect(image).toHaveAttribute("alt", "Test Alternative Text");
      expect(image).toHaveAttribute("src", "/assets/spontaneous-combustion.jpg");
    });

    describe("Does not have mainNewsItem", () => {
      it("SHOULD render container correctly WHEN does not have mainNewsItem", async () => {
        //arrange
        const { getByTestId } = renderComponent(requiredProps);

        //act
        const mainContainer = getByTestId(`${componentPrefix}main-container`);

        //assert
        expect(mainContainer).toHaveClass("newsItemContainer");
      });

      it("SHOULD render image container correctly WHEN does not have mainNewsItem", async () => {
        //arrange
        const { getByTestId } = renderComponent(requiredProps, {
          mainNewsItem: true,
        });

        //act
        const imageContainer = getByTestId(`${componentPrefix}image`);

        //assert
        expect(imageContainer).toHaveClass("imageContainer");
      });

      it("SHOULD render title container correctly container WHEN does not have mainNewsItem", async () => {
        //arrange
        const { getByTestId } = renderComponent(requiredProps);

        //act
        const titleContainer = getByTestId(`${componentPrefix}title-container`);

        //assert
        expect(titleContainer).toHaveClass("titleContainer");
      });
    });
    describe("Has mainNewsItem", () => {
      const mainNewsItem = true;

      it("SHOULD render container correctly WHEN it has mainNewsItem", async () => {
        //arrange
        const { getByTestId } = renderComponent(requiredProps, {
          mainNewsItem,
        });

        //act
        const mainContainer = getByTestId(`${componentPrefix}main-container`);

        //assert
        expect(mainContainer).toHaveClass("newsItemContainer mainNewsItemContainer");
      });

      it("SHOULD render image container correctly WHEN it has mainNewsItem", async () => {
        //arrange
        const { getByTestId } = renderComponent(requiredProps, {
          mainNewsItem,
        });

        //act
        const mainContainer = getByTestId(`${componentPrefix}image`);

        //assert
        expect(mainContainer).toHaveClass("imageContainer mainImageContainer");
      });

      it("SHOULD render title container correctly WHEN it has mainNewsItem", async () => {
        //arrange
        const { getByTestId } = renderComponent(requiredProps, {
          mainNewsItem,
        });

        //act
        const mainContainer = getByTestId(`${componentPrefix}title-container`);

        //assert
        expect(mainContainer).toHaveClass("titleContainer mainTitleContainer");
      });
    });
  });

  describe("Invalid props tests", () => {
    it("SHOULD render nothing WHEN title is an empty string but other props are valid", async () => {
      //arrange + act
      const { container } = renderComponent(requiredProps, {
        title: "",
      });

      //assert
      expect(container.firstChild).toBeNull();
    });

    it("SHOULD render nothing WHEN imageSource is an empty string but other props are valid", async () => {
      //arrange + act
      const { container } = renderComponent(requiredProps, {
        imageSource: "",
      });

      //assert
      expect(container.firstChild).toBeNull();
    });

    it("SHOULD render nothing WHEN alternativeImageText is an empty string but other props are valid", async () => {
      //arrange + act
      const { container } = renderComponent(requiredProps, {
        alternativeImageText: "",
      });

      //assert
      expect(container.firstChild).toBeNull();
    });
  });
});
