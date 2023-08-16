"use server";

import type { StoreKeys } from "./StoreKeys.type";
import { kv } from "@vercel/kv";

export const getValue = async <T>(key: StoreKeys) => {
  return await kv.get<T>(key);
};
