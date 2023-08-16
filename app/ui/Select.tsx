"use client";

// import { experimental_useOptimistic as useOptimistic } from "react";
import { type ChangeEvent, useTransition, useState } from "react";
import { type Option } from "@lib";
import { type StoreKey, setStoreValue } from "@store";

interface Props {
  storeKey?: StoreKey;
  initialValue?: string;
  options: Option[];
  name?: string;
  id?: string;
}

export const Select = ({
  storeKey,
  options,
  initialValue,
  name,
  id = name,
}: Props) => {
  const [isSettingCategory, startSettingCategory] = useTransition();
  const [clientSideValue, setClientSideValue] = useState(initialValue);

  const onChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const optionName = event.target.value;
    const optionId = options.find((op) => op.name === optionName)?.id;
    const environ = process.env["NODE_ENV"];

    if (!optionId && environ === "development")
      throw new Error("Invalid optionId");

    startSettingCategory(() => {
      // * Could be replaced with useOptimistic if needed.
      setClientSideValue(optionName);
      if (!storeKey) return;
      setStoreValue(storeKey, optionId);
    });
  };

  return (
    <select
      dir="ltr"
      lang="ar"
      value={clientSideValue}
      onChange={onChange}
      name={name}
      id={id}
    >
      {options.map(({ id, name }) => (
        <option key={id} value={name} onClick={(e) => console.log(e)}>
          {name}
        </option>
      ))}
    </select>
  );
};
