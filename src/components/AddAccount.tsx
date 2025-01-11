import { FaCirclePlus } from "react-icons/fa6";

function AddAccount() {
  return (
    <div className="add-account w-40 h-52 border-2 ease-linear duration-200 shadow-sm hover:shadow-xl cursor-pointer flex flex-col rounded-md ">
      <div className="flex-1 flex justify-center items-center">
        <FaCirclePlus color="#0866ff" className="text-40" />
      </div>

      <div className="py-3 bg-pure grid place-items-center">
        <span className="text-fbBlue text-lg font-sans">Add Account</span>
      </div>
    </div>
  );
}

export default AddAccount;
