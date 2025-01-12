import React from "react";

import InputField from "./InputField";

type InputNameProp = React.InputHTMLAttributes<HTMLInputElement>;

const NameInput = ({ ...prop }: InputNameProp) => {
  return (
    <div className="flex-1 relative ">
      <InputField {...prop} />
    </div>
  );
};

export default NameInput;
