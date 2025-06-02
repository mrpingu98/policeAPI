import { render } from "@testing-library/react";
import { RelatedContentItem } from "./RelatedContentItem";
import React from "react";

const MockRelatedContentItem = () => {
  return (
    <RelatedContentItem
      imageSource={"/assets/internal-police-reports.jpg"}
      title={"Test Title"}
      href={""}
    />
  );
};

describe("Related Content Item tests", () => {
  it("should render a title", async () => {
    const { getByTestId } = render(<MockRelatedContentItem />);
    const title = getByTestId("relatedContent-title");
    expect(title.textContent).toBe("Test Title");
  });

  it("should render an image", async () => {
    const { getByTestId } = render(<MockRelatedContentItem />);
    const image = getByTestId("relatedContent-image");
    expect(image).toBeInTheDocument();
  });

  it("should render a link", async () => {
    const { getByTestId } = render(<MockRelatedContentItem />);
    const link = getByTestId("relatedContent-link");
    expect(link).toBeInTheDocument();
  });
});

//renders a title
//render an image
//render a link
//click the href and page reloads?
