const ErrorMessageInput = ({ text }: { text: string }) => {
  return (
    <span className="error-message text-14 text-red-600 absolute -bottom-6 left-0">
      {text}
    </span>
  );
};

export default ErrorMessageInput;
