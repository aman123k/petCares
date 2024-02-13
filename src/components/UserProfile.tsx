import React, { useContext } from "react";
import { ThemeContext } from "../globleContext/context";
import { User } from "../interface/interface";
interface ParentComponentProps {
  openProfile: boolean;
  setOpenProfile: React.Dispatch<React.SetStateAction<boolean>>;
}

const UserProfile: React.FC<ParentComponentProps> = ({
  setOpenProfile,
  openProfile,
}) => {
  const { userDetails }: { userDetails?: User } = useContext(ThemeContext);
  return (
    <>
      <section
        className=" flex items-center gap-3 mt-2 ml-auto select-none  border-l-2 pl-4 w-max justify-end cursor-pointer"
        onClick={() => setOpenProfile(!openProfile)}
      >
        <div className=" rounded-full w-10  h-10 bg-[#B9C2CA]">
          {userDetails?.picture ? (
            <img
              src={userDetails?.picture}
              alt=""
              className=" overflow-hidden h-full w-full rounded-full rounde "
            />
          ) : (
            <div className=" text-white text-center font-bold mt-[50%] translate-y-[-50%] drop-shadow-lg">
              {userDetails?.username?.split(" ")[0]?.charAt(0)}
              {userDetails?.username?.split(" ")[1]?.charAt(0)}
            </div>
          )}
        </div>
        <h1 className="tracking-wide hover:text-[#96C830]">
          {userDetails?.username}
        </h1>
      </section>
    </>
  );
};

export default UserProfile;
