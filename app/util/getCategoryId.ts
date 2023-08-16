import categories from "../categories.json";

export const getCategoryId = (categoryName: string) => {
  const categoryId = categories.data.categories.find(
    (c) => c.name === categoryName
  )?.id;

  if (!categoryId) throw new Error("Invaid category name");
  return categoryId;
};
