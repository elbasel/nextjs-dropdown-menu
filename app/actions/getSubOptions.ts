"use server";

import { DEFAULT_CAT_ID } from "@constants";
import type { Option } from "@lib";
import { getCategory, getStoredMainId } from "@util";

export const getSubOptions = async (): Promise<Option[]> => {
  const storedMainId = await getStoredMainId();
  const mainCat = getCategory(storedMainId ?? DEFAULT_CAT_ID);
  const subCats = mainCat?.children;
  const subOptions = subCats?.map(({ id, name }) => ({
    id,
    name,
  }));

  // Logged to server side node runtime
  if (!mainCat) {
    throw new Error("Invalid stored main category id: " + storedMainId);
  }
  if (!subOptions) {
    throw new Error("Encountered a main category with no sub categories");
  }

  return subOptions;
};
