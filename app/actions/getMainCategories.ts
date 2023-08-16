import { MainCategory } from "@lib/Category/MainCategory.type";
import categories from "../categories.json";

export const getMainCategories = (): MainCategory[] => {
  return categories.data.categories;
};
