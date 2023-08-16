"use server";

import type { StoreKeys } from "./StoreKeys.type";
import { kv } from "@vercel/kv";

export const setValue = async <T>(key: StoreKeys, value: any) => {
  return await kv.set<T>(key, value);
};
