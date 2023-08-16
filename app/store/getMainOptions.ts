import type { Option } from "@lib";
import { getAllMainCategories } from "./getAllMainCategories";

export const getMainOptions = (): Option[] => {
  const mainCategories = getAllMainCategories();
  return mainCategories.map(({ id, name }) => ({ id, name }));
};
