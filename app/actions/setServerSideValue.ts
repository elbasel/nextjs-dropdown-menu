"use server";

import "server-only"
import { kv } from "@vercel/kv";
import { revalidatePath } from "next/cache";
import type { StoreKey } from "./StoreKey.type";

export const setServerSideValue = async <T>(
  key: StoreKey,
  value: any,
  pathToRevalidate = "/"
) => {
  await kv.set<T>(key, value);

  revalidatePath(pathToRevalidate);
};
