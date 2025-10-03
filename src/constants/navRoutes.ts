import { Routes } from "../Types";
import { PAGES } from "./pageUrls";

export const navRoutes: Routes[] = [
  { routeUrl: PAGES.HOMEPAGE_URL, name: "Home" },
  { routeUrl: PAGES.API_PAGE_URL, name: "API" },
];
