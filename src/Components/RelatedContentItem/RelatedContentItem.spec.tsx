import { render } from "@testing-library/react";
import { RelatedContentItem } from "./RelatedContentItem";
import React from "react";

const defaultProps = {
  imageSource: "/assets/internal-police-reports.jpg",
  title: "Test Title",
  href: "",
};

//handling fields when they aren't valid
//href/imageSource being empty
//maybe come back to this component and think about tests before writing the component
//href shouldn't ever be empty - and hwat happens when other two props have empty strings?
//also images should always have an alt-text

const renderRelatedContentItem = (props = {}) =>
  render(<RelatedContentItem {...defaultProps} {...props} />);

describe("Related Content Item tests", () => {
  const componentPrefix = "related-content-";

  it("SHOULD render a title WHEN a non-empty string is passed", async () => {
    const { getByTestId } = renderRelatedContentItem();
    const title = getByTestId(`${componentPrefix}title`);
    expect(title.textContent).toBe("Test Title");
  });

  it("SHOULD render correct image WHEN a non-empty string is passed", async () => {
    const { getByTestId } = renderRelatedContentItem();
    const image = getByTestId(`${componentPrefix}image`);
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", "/assets/internal-police-reports.jpg");
  });

  it("SHOULD render a link WHEN a non-empty string is passed", async () => {
    const { getByTestId } = renderRelatedContentItem();
    const link = getByTestId(`${componentPrefix}link`);
    expect(link).toBeInTheDocument();
  });
});
