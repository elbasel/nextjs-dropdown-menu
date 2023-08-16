import type { Option } from "@lib";
import { getLocalMainCategories } from ".";

export const getLocalMainOptions = (): Option[] => {
  const mainCategories = getLocalMainCategories();
  return mainCategories.map(({ id, name }) => ({ id, name }));
};
