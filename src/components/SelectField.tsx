import React from "react";

type SelectProp = React.SelectHTMLAttributes<HTMLSelectElement> & {
  arrayLength: number;
  setter: React.Dispatch<React.SetStateAction<number>>;
  flag: number;
};

function SelectField({ arrayLength, setter, flag, ...props }: SelectProp) {
  return (
    <select
      {...props}
      className="w-full p-3 border-2 rounded-md border-grayWhite bg-pure"
      onChange={(event) => {
        setter(parseInt(event.target.value));
      }}
    >
      {Array.from({ length: arrayLength }, (_, i: number) => {
        const val = i + flag;
        return (
          <option value={val} key={i}>
            {val}
          </option>
        );
      })}
    </select>
  );
}

export default SelectField;
