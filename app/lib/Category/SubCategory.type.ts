import { Category } from "./Category.type";

export interface SubCategory extends Category {
  slug: string;
  // children: [] | n;
  disable_shipping: number;
}
