import { getUniqueId } from "@util/getUniqueId";

/**
 * an IIFE used to identify the selected dropdown value per user, where each user gets a random id assigned,
 * Then for each database write, we use a combination of the database key and the userId to
 * generate a uniqure identfier for each user/database-key
 */
export const userId = (() => {
  const id = getUniqueId();
  return id;
})();
