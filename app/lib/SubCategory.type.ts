import { Category } from "./Category.type";

export interface SubCategory extends Category {
  slug: string;
  disable_shipping: number;
}
