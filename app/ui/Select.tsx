"use client";

import { type ChangeEvent, useTransition, useState } from "react";
import { StoreKey } from "@store/StoreKey.type";
import { setServerSideValue } from "@store/setServerSideValue";
import { getUniqueId } from "@util/getUniqueId";
import { Option } from "@lib/Option/Option.type";

interface Props {
  storeKey: StoreKey;
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

    setClientSideValue(optionName);
    startSettingCategory(() => {
      setServerSideValue(storeKey, optionId);
    });
  };

  return (
    <>
      <select value={clientSideValue} onChange={onChange} name={name} id={id}>
        {options.map((op) => (
          <option
            key={getUniqueId()}
            value={op.name}
            onClick={(e) => console.log(e)}
          >
            {op.name}
          </option>
        ))}
      </select>
    </>
  );
};
