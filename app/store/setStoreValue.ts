"use server";

import "server-only";
import { kv } from "@vercel/kv";
import { revalidatePath } from "next/cache";
import { userId } from "@util";
import type { StoreKey } from ".";

export const setStoreValue = async <T>(
  key: StoreKey,
  value: any,
  pathToRevalidate = "/"
) => {
  await kv.set<T>(key + userId, value);

  revalidatePath(pathToRevalidate);
};
