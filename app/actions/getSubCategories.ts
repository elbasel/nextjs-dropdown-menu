import type { SubCategory } from "@lib/SubCategory.type";
import categories from "../categories.json";

export const getSubCategories = (categoryId: number): SubCategory[] => {
  const mainCategory = categories.data.categories.find(
    (c) => c.id === categoryId
  );

  if (!mainCategory) throw new Error("Invalid main category name");
  return mainCategory.children;
};
