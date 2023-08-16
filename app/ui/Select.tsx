"use client";

import { selectMainCategory } from "@actions/selectMainCategory";
import { getCategoryId } from "@util/getCategoryId";
import { getCategoryName } from "@util/getCategoryName";
import {
  type ChangeEvent,
  useTransition,
  useRef,
  useEffect,
} from "react";

interface Props {
  options: string[];
  initialValue: number | null;
}

export const Select = ({ options, initialValue }: Props) => {
  const selectRef = useRef<HTMLSelectElement>(null);
  const [isSettingCategory, startSettingCategory] = useTransition();

  const onChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const categotryName = event.target.value;
    const categoryId = getCategoryId(categotryName);
    startSettingCategory(() => {
      selectMainCategory(Number(categoryId));
    });
  };

  useEffect(() => {
    const selectElem = selectRef.current;
    const initialCategoryName = getCategoryName(initialValue);

    if (selectElem && initialCategoryName)
      selectElem.value = initialCategoryName;
  }, []);

  return (
    <>
      <select
        ref={selectRef}
        onChange={onChange}
        name="main-category"
        id="main-category"
      >
        {options.map((op) => (
          <option key={op} value={op}>
            {op}
          </option>
        ))}
      </select>
    </>
  );
};
