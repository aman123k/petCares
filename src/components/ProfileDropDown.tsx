import { Link } from "react-router-dom";
import { User } from "../interface/interface";
import { useContext } from "react";
import { ThemeContext } from "../globleContext/context";
import useLogOut from "../customHooks/logOutFun";
import { Toaster } from "react-hot-toast";

function Profiledropdown() {
  const { userDetails }: { userDetails?: User } = useContext(ThemeContext);
  const url = process.env.REACT_APP_URL as string;
  const { logOut } = useLogOut(`${url}/logOut`);

  return (
    <>
      <div className="absolute top-40 right-32  z-50 font-Nunito min-w-80">
        <nav className="  bg-white px-8  py-7 rounded-md drop-shadow-xl">
          <div className="w-6 bg-white h-6 absolute drop-shadow-xl top-[-24px] right-8 [clip-path:polygon(51%_40%,0_100%,100%_100%)]"></div>
          <header>
            <div className=" flex gap-4 items-center">
              <div className=" h-12 w-12">
                {userDetails?.picture ? (
                  <img
                    src={userDetails?.picture}
                    alt=""
                    className=" w-full h-full"
                  />
                ) : (
                  <div
                    className=" text-white h-full w-full bg-[#B9C2CA] text-center  
              font-bold text-lg tex-center flex justify-center items-center drop-shadow-lg"
                  >
                    {userDetails?.username?.split(" ")[0]?.charAt(0)}
                    {userDetails?.username?.split(" ")[1]?.charAt(0)}
                  </div>
                )}
              </div>
              <div>
                <h1 className=" text-[#484848]">{userDetails?.username}</h1>
                <span className=" text-sm text-[#7E7E7E] tracking-wide">
                  {userDetails?.email}
                </span>
              </div>
            </div>
            <h1 className="text-[#484848 font-bold text-lg my-5">
              My Adopter Account
            </h1>
          </header>

          <ul className="flex flex-col gap-4 border-b border-dotted border-black pb-6 tracking-wide">
            <Link to="/dashboard" onClick={() => window.scrollTo(0, 0)}>
              <li className=" text-[#595959] hover:text-[#5FA501] hover:translate-x-3 duration-200 ease-in-out">
                My Dashboard
              </li>
            </Link>
            <Link to="/messages" onClick={() => window.scrollTo(0, 0)}>
              <li className=" text-[#595959] hover:text-[#5FA501] hover:translate-x-3 duration-200 ease-in-out">
                My Messages
              </li>
            </Link>
            <Link to="/profile" onClick={() => window.scrollTo(0, 0)}>
              <li className=" text-[#595959] hover:text-[#5FA501] hover:translate-x-3 duration-200 ease-in-out">
                My Profile
              </li>
            </Link>
            <Link to="/notification" onClick={() => window.scrollTo(0, 0)}>
              <li className=" text-[#595959] hover:text-[#5FA501] hover:translate-x-3 duration-200 ease-in-out">
                My Notification
              </li>
            </Link>
            <Link to="/favourites" onClick={() => window.scrollTo(0, 0)}>
              <li className=" text-[#595959] hover:text-[#5FA501] hover:translate-x-3 duration-200 ease-in-out">
                Favourites
              </li>
            </Link>
          </ul>
          <div
            className=" text-end pt-6 text-[#5FA501] pr-3 cursor-pointer italic"
            onClick={() => {
              logOut();
            }}
          >
            Log out
          </div>
        </nav>
      </div>
      <Toaster />
    </>
  );
}

export default Profiledropdown;
