import React from "react";

type Attr = React.HtmlHTMLAttributes<HTMLSpanElement> & {
  text: string;
};

const ErrorMessageInput = ({ text, ...attr }: Attr) => {
  return (
    <span className="error-message text-14 text-red-600 block hidden" {...attr}>
      {text}
    </span>
  );
};

export default ErrorMessageInput;
