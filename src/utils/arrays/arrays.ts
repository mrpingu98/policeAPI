import { Routes } from "../../Types";
import { isStringNotEmpty } from "../strings/string";

export function checkRoutesArrayItemsAreSafe(navRoutes: Routes[]) {
  return navRoutes.filter((route) => isStringNotEmpty(route.name) && isStringNotEmpty(route.routeUrl));
}
