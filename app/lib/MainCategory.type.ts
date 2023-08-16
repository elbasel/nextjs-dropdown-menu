import { Category } from ".";
import { SubCategory } from ".";

export interface MainCategory extends Category {
  children: SubCategory[];
}
