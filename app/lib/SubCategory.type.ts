import { Category } from ".";

export interface SubCategory extends Category {
  slug: string;
  disable_shipping: number;
}
