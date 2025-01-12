import React from "react";

function InputField({ ...prop }: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...prop}
      className="w-full px-3 py-2 border-2 rounded-md border-grayWhite"
    />
  );
}

export default InputField;
