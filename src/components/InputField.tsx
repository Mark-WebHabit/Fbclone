import React from "react";

function InputField({ ...prop }: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...prop}
      className="w-full p-3 border-2 rounded-md border-grayWhite"
    />
  );
}

export default InputField;
