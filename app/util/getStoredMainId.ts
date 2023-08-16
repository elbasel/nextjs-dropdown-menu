import "server-only";
import { getStoredValue } from "@store";

export const getStoredMainId = async () => {
  const mainCatId = await getStoredValue<number>("mainCatId");
  return mainCatId;
};
