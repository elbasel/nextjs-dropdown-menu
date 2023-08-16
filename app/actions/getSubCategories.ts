"use server";

import categories from "../categories.json";

/**
 * Raises an error in case of a non-existant Id
 * @returns undefined if categoryId is undefined, otherwise the category
 */
export const getSubCategories = (categoryId?: number) => {
  if (!categoryId) return;
  const mainCategory = categories.data.categories.find(
    (c) => c.id === categoryId
  );

  if (!mainCategory) throw new Error("Invalid main category name");
  return mainCategory.children;
};
