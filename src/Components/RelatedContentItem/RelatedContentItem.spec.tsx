import { render } from "@testing-library/react";
import { RelatedContentItem } from "./RelatedContentItem";
import React from "react";

const defaultProps = {
  imageSource: "/assets/internal-police-reports.jpg",
  title: "Test Title",
  href: "",
};

const renderRelatedContentItem = (props = {}) =>
  render(<RelatedContentItem {...defaultProps} {...props} />);

describe("Related Content Item tests", () => {
  const componentPrefix = "related-content-";

  describe("Valid props", () => {
    it("SHOULD render a title WHEN title is valid", async () => {
      const { getByTestId } = renderRelatedContentItem();
      const title = getByTestId(`${componentPrefix}title`);
      expect(title.textContent).toBe("Test Title");
    });

    it("SHOULD render correct image WHEN image is valid", async () => {
      const { getByTestId } = renderRelatedContentItem();
      const image = getByTestId(`${componentPrefix}image`);
      expect(image).toBeInTheDocument();
      expect(image).toHaveAttribute(
        "src",
        "/assets/internal-police-reports.jpg"
      );
    });

    it("SHOULD render a link WHEN href is valid", async () => {
      const { getByTestId } = renderRelatedContentItem();
      const link = getByTestId(`${componentPrefix}link`);
      expect(link).toBeInTheDocument();
    });
  });
});

//could maybe have ternary for if no href don't render anything
//maybe a default for the title
//image maybe ioptional - just hide it fi no source available - or a default image
