import React, { useContext } from "react";
import { User } from "../interface/interface";
import { ThemeContext } from "../globalContext/context";
import { Link } from "react-router-dom";

function ProfileHeader() {
  const { userDetails }: { userDetails?: User } = useContext(ThemeContext);
  return (
    <section className=" bg-[##F8F8F9] p-10 max-[650px]:px-5">
      <section
        className=" font-Nunito flex items-center justify-between relative
       bg-white p-16 rounded-3xl drop-shadow-lg max-[950px]:items-start
       max-[650px]:p-10  min-[2000px]:ml-[50%] min-[2000px]:translate-x-[-50%]
      "
      >
        <div>
          <h1 className=" font-bold text-[#595959] text-3xl max-[650px]:text-2xl">
            My Adopter Account
          </h1>
          <ul
            className=" mt-7 font-bold tracking-wide gap-6 flex max-[950px]:flex-col 
          max-[850px]:gap-2.5 max-[650px]:text-sm"
          >
            <Link to="/dashboard" onClick={() => window.scrollTo(0, 0)}>
              <li>Back to Dashboard</li>
            </Link>
            <Link to="/profile" onClick={() => window.scrollTo(0, 0)}>
              <li>My Profile</li>
            </Link>
            <Link to="/notification" onClick={() => window.scrollTo(0, 0)}>
              <li>My Notification</li>
            </Link>
            <Link to="/messages" onClick={() => window.scrollTo(0, 0)}>
              <li>My Messages</li>
            </Link>
            <Link to="/favorites" onClick={() => window.scrollTo(0, 0)}>
              <li>My Favorites</li>
            </Link>
          </ul>
        </div>
        <div className=" max-[650px]:hidden ">
          <>
            {userDetails !== undefined && userDetails?.picture ? (
              <img
                src={userDetails?.picture}
                alt=""
                className="h-24 rounded-full w-24 "
              />
            ) : (
              <div
                className=" text-white h-24 w-24 bg-[#B9C2CA] text-center  rounded-full
              font-bold flex justify-center text-3xl items-center tex-center drop-shadow-lg"
              >
                {userDetails?.username?.split(" ")[0]?.charAt(0)}
                {userDetails?.username?.split(" ")[1]?.charAt(0)}
              </div>
            )}
          </>
          <div
            className=" text-5xl absolute border-4 border-[#d8d7d7] right-7 bottom-7
           rounded-full p-2.5 bg-[#ece6e6] max-[950px]:top-[7.5rem]  max-[950px]:bottom-auto"
          >
            🐾
          </div>
        </div>
      </section>
    </section>
  );
}

export default ProfileHeader;
