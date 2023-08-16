import categories from "../categories.json";

export const getCategoryName = (categoryId: number | null) => {
  if (categoryId === null) return;

  const categoryName = categories.data.categories.find(
    (c) => c.id === categoryId
  )?.name;

  if (!categoryName) throw new Error("Invaid category Id");
  return categoryName;
};
