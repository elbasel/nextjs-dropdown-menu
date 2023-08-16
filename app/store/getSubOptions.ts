import { getCategory } from "./getCategory";

export const getSubOptions = (catId: number) => {
  return getCategory(catId)?.children;
};
