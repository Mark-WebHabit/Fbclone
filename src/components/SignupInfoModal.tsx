import { FaCircleQuestion } from "react-icons/fa6";

const SignupInfoModal = ({ title, body }: { title: string; body: string }) => {
  return (
    <div className="flex items-center gap-2 relative group">
      <p className="text-14 font-sans font-semibold text-grayWhite">{title}</p>
      <FaCircleQuestion color="#999999" className="cursor-pointer" />

      <p className="max-w-80 p-4 text-sm bg-pure shadow-equal shadow-grayWhite absolute left-20 bottom-0 rounded-md hidden group-hover:block text-grayWhite">
        {body}
      </p>
    </div>
  );
};

export default SignupInfoModal;
