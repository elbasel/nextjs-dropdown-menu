import { getAllMainCategories } from "./getAllMainCategories";

/**
 * @returns The id of the first category fetched from the server
 */
export const getDefaultId = () => {
  const mainCats = getAllMainCategories();
  return mainCats[0].id;
};
