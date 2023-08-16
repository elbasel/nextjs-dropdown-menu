"use server";

import type { StoreKey } from "./StoreKey.type";
import { kv } from "@vercel/kv";

export const getValue = async <T>(key: StoreKey) => {
  const value = await kv.get<T>(key);
  if (value === null) return;
  return value;
};
