"use server";

import { Category } from "@lib";
import { getAllMainCategories } from "./getAllMainCategories";

export const getCategory = (catId: number): Category | undefined => {
  const mainCats = getAllMainCategories()
  return mainCats.find(({ id }) => id === catId);
};
