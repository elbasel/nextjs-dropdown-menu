"use server";

import "server-only";
import { kv } from "@vercel/kv";
import type { StoreKey } from "./StoreKey.type";
import { userId } from "./userId";

/**
 *
 * @param key The redis database key
 * @returns Either the value (any) or undefined if the key is not found in the database
 */
export const getServerSideValue = async <T>(
  key: StoreKey
): Promise<T | undefined> => {
  const value: T | null = await kv.get<T>(key + userId);
  if (value === null) return;
  return value;
};
