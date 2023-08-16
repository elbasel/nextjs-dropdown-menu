// This would be a server action in the app/actions folder in a real project.
import type { Category } from "@lib";
import { getLocalMainCategories } from ".";

export const getCategory = (catId: number): Category | undefined => {
  const mainCats = getLocalMainCategories();
  return mainCats.find(({ id }) => id === catId);
};
