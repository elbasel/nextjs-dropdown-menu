"use server";

import { getLocalMainOptions } from "@util";

export const getMainOptions = async () => {
  // This would be an API call instead of a local function in a real project.
  return getLocalMainOptions();
};
