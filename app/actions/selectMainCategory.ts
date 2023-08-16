"use server";

import { setValue } from "@store/setValue";
import { revalidatePath } from "next/cache";

export const selectMainCategory = async (categoryId: number) => {
  await setValue<number>("selectedMainCategory", categoryId);
  revalidatePath("/");
};