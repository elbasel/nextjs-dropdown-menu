import { SubCategory } from "@/lib/SubCategory.type";
import categories from "./categories.json";

export const getSubCategories = (mainCategoryName: string): SubCategory[] => {
  const mainCategory = categories.data.categories.find(
    (c) => c.name === mainCategoryName
  );

  if (!mainCategory) throw new Error("Invalid main category name");
  return mainCategory.children;
};
