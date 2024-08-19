import logo from "../images/logo.png";
import { Link } from "react-router-dom";
import { TbMenu } from "react-icons/tb";
import { GoPerson } from "react-icons/go";
import { FaChevronDown } from "react-icons/fa6";
import {
  DropdownListAdopter,
  DropdownListOther,
  DropdownListRehouse,
} from "./DropdownList";
import React, { useContext, useEffect, useState } from "react";
import Mobilemenu from "./Mobilemenu";
import { ThemeContext } from "../globleContext/context";
import { MyFunctionType, User } from "../interface/interface";
import UserProfile from "./UserProfile";
import Profiledropdown from "./ProfileDropDown";

const Header: React.FC = () => {
  const {
    userDetails,
    getUser = () => {},
  }: { userDetails?: User; getUser?: MyFunctionType } =
    useContext(ThemeContext);

  const [adopterList, setAdopterList] = useState<boolean>(false);
  const [rehouseList, setRehouserList] = useState<boolean>(false);
  const [otherList, setOtherList] = useState<boolean>(false);
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const [openProfile, setOpenProfile] = useState<boolean>(false);

  useEffect(() => {
    getUser();
  }, [getUser]);

  return (
    <header
      className={`px-8 py-6 flex justify-between max-[650px]:py-3 max-[650px]:px-6
      bg-[#F9F9F9]  top-0 z-50 sticky max-[950px]:items-center 
      ${userDetails?.username ? "items-end" : "items-center"}`}
    >
      <TbMenu
        className="text-4xl max-[650px]:text-3xl hidden max-[950px]:block"
        onClick={() => {
          setOpenMenu(true);
        }}
      />
      <div className="relative ">
        <img src={logo} alt="log" className=" h-28 max-[660px]:h-[5rem]" />
        <p
          className="bg-[#F9F9F9] absolute max-[650px]:top-[3.1rem] font-Dancing 
        top-[4.5rem] right-0 max-[650px]:text-xs max-[650px]:tracking-wide text-[13.4px] tracking-widest "
        >
          Responsibale for Rehousing
        </p>
      </div>
      <Mobilemenu openMenu={openMenu} setOpenMenu={setOpenMenu} />
      <nav className=" flex flex-col gap-2 max-[950px]:hidden">
        <ul className="flex gap-6 relative">
          <Link
            to="/"
            className="hover:text-[#5FA501]"
            onClick={() => window.scrollTo(0, 0)}
          >
            <li>Home</li>
          </Link>
          <Link
            to="/adopt-a-pet"
            className="hover:text-[#5FA501]"
            onClick={() => window.scrollTo(0, 0)}
          >
            <li>Find a pet</li>
          </Link>
          <Link
            to="/rehouse-a-pet"
            className="hover:text-[#5FA501]"
            onClick={() => window.scrollTo(0, 0)}
          >
            <li>List a pet</li>
          </Link>

          <div
            className={`inline-block cursor-pointer group  `}
            onMouseEnter={() => setAdopterList(true)}
            onMouseLeave={() => setAdopterList(false)}
          >
            <li className="items-center flex gap-2 hover:text-[#5FA501]">
              <span>Adopters</span>
              <FaChevronDown className=" group-hover:rotate-180 duration-300 ease-out" />
            </li>
            {adopterList && <DropdownListAdopter />}
          </div>

          <div
            className={`inline-block cursor-pointer group `}
            onMouseEnter={() => setRehouserList(true)}
            onMouseLeave={() => setRehouserList(false)}
          >
            <li className="items-center flex gap-2 hover:text-[#5FA501]">
              <span>Rehouser</span>
              <FaChevronDown className=" group-hover:rotate-180 duration-300 ease-out" />
            </li>
            {rehouseList && <DropdownListRehouse />}
          </div>
          <Link
            to="/about"
            className="hover:text-[#5FA501]"
            onClick={() => window.scrollTo(0, 0)}
          >
            <li>About us</li>
          </Link>
          <div
            className={`inline-block cursor-pointer group `}
            onMouseEnter={() => setOtherList(true)}
            onMouseLeave={() => setOtherList(false)}
          >
            <li className="items-center flex gap-2 hover:text-[#5FA501]">
              <span>Others</span>
              <FaChevronDown className=" group-hover:rotate-180 duration-300 ease-out" />
            </li>
            {otherList && <DropdownListOther />}
          </div>
        </ul>
        {userDetails && userDetails?.username ? (
          <UserProfile
            setOpenProfile={setOpenProfile}
            openProfile={openProfile}
          />
        ) : (
          <Link to="/register">
            <li className=" list-none flex gap-2 mt-2 justify-end items-center">
              <GoPerson className="text-xl font-semibold" />
              login/register
            </li>
          </Link>
        )}
      </nav>
      <div className="hidden max-[950px]:block">
        {userDetails?.username ? (
          <>
            {userDetails !== undefined && userDetails?.picture ? (
              <img
                src={userDetails?.picture}
                alt=""
                className=" overflow-hidden h-10 w-10 rounded-full  "
                onClick={() => {
                  setOpenMenu(true);
                }}
              />
            ) : (
              <div
                className=" text-white h-10 w-10 bg-[#B9C2CA] text-center  rounded-full
              font-bold  flex justify-center items-center tex-center drop-shadow-lg"
                onClick={() => {
                  setOpenMenu(true);
                }}
              >
                {userDetails?.username?.split(" ")[0]?.charAt(0)}
                {userDetails?.username?.split(" ")[1]?.charAt(0)}
              </div>
            )}
          </>
        ) : (
          <Link to="/register">
            <GoPerson className="text-4xl max-[650px]:text-2xl  hidden max-[950px]:block" />
          </Link>
        )}
      </div>
      {openProfile ? <Profiledropdown /> : null}
    </header>
  );
};

export default Header;
