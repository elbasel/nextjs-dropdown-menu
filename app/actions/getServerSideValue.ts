"use server";

import "server-only"
import { kv } from "@vercel/kv";
import type { StoreKey } from "./StoreKey.type";

export const getServerSideValue = async <T>(key: StoreKey) => {
  const value = await kv.get<T>(key);
  if (value === null) return;
  return value;
};
