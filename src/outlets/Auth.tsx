import { Outlet } from "react-router-dom";

import AddAccount from "../components/AddAccount";
import RecentAccount from "../components/RecentAccount";

function Auth() {
  return (
    <main className="w-screen min-h-screen  flex flex-col md:flex-row bg-white md:px-10 md:pt-0 justify-center items-center">
      <div className="md:flex-1 flex justify-center items-center flex-col ">
        <div className="flex-1 md:flex-none min-w-0 w-full md:w-auto md:min-w-72  flex justify-end md:justify-center items-center flex-col md:block ">
          <h1 className="text-fbBlue text-40 font-sans font-bold mb-2">
            facebook
          </h1>

          <p className="text-darkish text-5xl font-sans mb-1 font-normal hidden md:block">
            Recent Logins
          </p>
          <small className="text-fade text-sm font-sans hidden md:block">
            Click your picture or add an account.
          </small>
        </div>
        {/* cards */}

        {/* add account card */}
        <div className="flex-1 md:flex-none min-w-0 w-full md:w-auto md:min-w-72  hidden md:flex flex-wrap justify-center gap-2 mt-2">
          <RecentAccount />
          <AddAccount />
        </div>
      </div>

      <div className="md:flex-1  flex flex-col items-center justify-center ">
        <Outlet />
      </div>
    </main>
  );
}

export default Auth;
