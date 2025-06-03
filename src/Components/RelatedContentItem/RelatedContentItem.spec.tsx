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
  it("should render a title", async () => {
    const { getByTestId } = renderRelatedContentItem();
    const title = getByTestId("relatedContent-title");
    expect(title.textContent).toBe("Test Title");
  });

  it("should render an image", async () => {
    const { getByTestId } = renderRelatedContentItem();
    const image = getByTestId("relatedContent-image");
    expect(image).toBeInTheDocument();
  });

  it("should render a link", async () => {
    const { getByTestId } = renderRelatedContentItem();
    const link = getByTestId("relatedContent-link");
    expect(link).toBeInTheDocument();
  });
});

//renders a title
//render an image
//render a link
//click the href and page reloads?
