import type { Category } from "@lib";
import { getLocalMainCategories } from ".";

export const getCategory = (catId: number): Category | undefined => {
  const mainCats = getLocalMainCategories();
  return mainCats.find(({ id }) => id === catId);
};
