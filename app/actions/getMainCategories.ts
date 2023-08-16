import { MainCategory } from "@/lib/MainCategory.type";
import categories from "./categories.json";

export const getMainCategories = (): MainCategory[] => {
  return categories.data.categories;
};
