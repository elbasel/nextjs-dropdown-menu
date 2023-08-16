import { Category } from "./Category.type";
import { SubCategory } from "./SubCategory.type";

export interface MainCategory extends Category {
  children: SubCategory[];
}
