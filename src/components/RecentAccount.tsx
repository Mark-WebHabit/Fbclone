import { FaXmark } from "react-icons/fa6";

function RecentAccount() {
  return (
    <div className="recent-account w-40 h-52 border-2 ease-linear duration-200 shadow-sm hover:shadow-xl cursor-pointer flex flex-col rounded-md  relative group">
      <div className="flex-1 overflow-hidden rounded-sm">
        <img
          src="/images/sample.jpg"
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="py-3 bg-pure grid place-items-center">
        <span className="text-lg font-sans">John Doe</span>
      </div>

      <div className="absolute top-1 left-1 p-2px bg-fadingBlack rounded-full ease-linear duration-200 group-hover:scale-150 group-hover:bg-pure group-hover:top-0 group-hover:left-0 ">
        <FaXmark className="text-pure text-sm group-hover:text-grayWhite" />
      </div>
    </div>
  );
}

export default RecentAccount;
