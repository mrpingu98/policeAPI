import { render } from "@testing-library/react";
import { RelatedContentItem } from "./RelatedContentItem";
import React from "react";

interface RelatedContentItemProps {
  imageSource: string;
  title: string;
  href: string;
}

const validProps = {
  imageSource: "/assets/internal-police-reports.jpg",
  title: "Test Title",
  href: "https://www.police.uk/pu/performance/",
};

const renderRelatedContentItem = (
  requiredProps: RelatedContentItemProps,
  props = {}
) => render(<RelatedContentItem {...requiredProps} {...props} />);

describe("Related Content Item tests", () => {
  const componentPrefix = "related-content-";

  describe("Valid props", () => {
    it("SHOULD render a title WHEN title is valid", async () => {
      //arrange
      const { getByTestId } = renderRelatedContentItem(validProps);

      //act
      const title = getByTestId(`${componentPrefix}title`);

      //assert
      expect(title.textContent).toBe("Test Title");
    });

    it("SHOULD render correct image WHEN image is valid", async () => {
      //arrange
      const { getByTestId } = renderRelatedContentItem(validProps);

      //act
      const image = getByTestId(`${componentPrefix}image`);

      //assert
      expect(image).toBeInTheDocument();
      expect(image).toHaveAttribute(
        "src",
        "/assets/internal-police-reports.jpg"
      );
    });

    it("SHOULD render correct link WHEN href is valid", async () => {
      //arrange
      const { getByTestId } = renderRelatedContentItem(validProps);

      //act
      const link = getByTestId(`${componentPrefix}link`);

      //assert
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute(
        "href",
        "https://www.police.uk/pu/performance/"
      );
    });
  });

  describe("Invalid props", () => {
    it("SHOULD render null WHEN title is an empty string", async () => {
      //arrange
      const { container } = renderRelatedContentItem(validProps, {
        title: "   ",
      });
      //act

      //assert
      expect(container.firstChild).toBeNull();
    });

    it("SHOULD render null WHEN imageSource is an empty string", async () => {
      //arrange
      const { container } = renderRelatedContentItem(validProps, {
        imageSource: "  ",
      });
      //act

      //assert
      expect(container.firstChild).toBeNull();
    });

    it("SHOULD render null WHEN href is an empty string", async () => {
      //arrange
      const { container } = renderRelatedContentItem(validProps, {
        href: "  ",
      });
      //act

      //assert
      expect(container.firstChild).toBeNull();
    });
  });
});
