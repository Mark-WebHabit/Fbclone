import React from "react";

import ErrorMessageInput from "./ErrorMessageInput";
import InputField from "./InputField";

type InputNameProp = React.InputHTMLAttributes<HTMLInputElement> & {
  errorMessage: string;
};

const NameInput = ({ errorMessage, ...prop }: InputNameProp) => {
  return (
    <div className="flex-1 relative mb-7 ">
      <InputField {...prop} />
      <ErrorMessageInput text={errorMessage} />
    </div>
  );
};

export default NameInput;
