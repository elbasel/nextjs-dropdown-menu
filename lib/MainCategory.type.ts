import { SubCategory } from "./SubCategory.type";

export type MainCategory = {
  id: number;
  name: string;
  description: string | null;
  children: SubCategory[];
};
