"use server";

import { revalidatePath } from "next/cache";
import type { StoreKey } from "./StoreKey.type";
import { kv } from "@vercel/kv";

export const setServerSideValue = async <T>(
  key: StoreKey,
  value: any,
  pathToRevalidate = "/"
) => {
  await kv.set<T>(key, value);

  revalidatePath(pathToRevalidate);
};
