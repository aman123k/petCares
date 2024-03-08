import React, { useContext } from "react";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import { ImPencil } from "react-icons/im";
import { MdPersonOutline } from "react-icons/md";
import { User } from "../interface/interface";
import { ThemeContext } from "../globleContext/context";
import useLogOut from "../customHooks/logOutFun";

export interface ParentComponentProps {
  openMenu: boolean;
  setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
}
const url = process.env.REACT_APP_URL as string;
const Mobilemenu: React.FC<ParentComponentProps> = ({
  openMenu,
  setOpenMenu,
}) => {
  const { userDetails }: { userDetails?: User } = useContext(ThemeContext);
  const { logOut } = useLogOut(`${url}/logOut`);

  return (
    <>
      <section
        className={`bg-[#FFFFFF] fixed h-screen min-h-min max-h-screen overflow-y-scroll 
       max-[650px]:w-full max-[850px]:w-[60%] top-0 left-0 font-Nunito translate-x-[-100%] z-50 
         hidden max-[850px]:block ease-in-out duration-500 pb-6
         ${
           openMenu
             ? `translate-x-[0%] ${(document.body.style.overflow = "hidden")}`
             : `translate-x-[-100%] ${(document.body.style.overflow = "auto")}`
         }`}
      >
        <div className=" flex justify-between px-5 py-4 border-b items-center sticky top-0 bg-[#FFFFFF]">
          <div className="relative ">
            <img src={logo} alt="log" className=" h-24 max-[660px]:h-[5rem]" />
            <p
              className="bg-[#FFFFFF] absolute max-[650px]:top-[3.1rem] font-Dancing 
        top-[3.7rem] left-[4.3rem] max-[650px]:text-xs tracking-wide text-sm"
            >
              Responsibale for Rehousing
            </p>
          </div>
          <RxCross2
            className="absolute text-3xl right-5"
            onClick={() => {
              setOpenMenu(false);
            }}
          />
        </div>

        <nav>
          <ul>
            <Link to="/">
              <li className=" border-b py-4 hover:bg-[#F7F7F7] text-sm font-semibold px-6">
                Home
              </li>
            </Link>
            <Link to="/adopt-a-pet">
              <li className=" border-b py-4 hover:bg-[#F7F7F7] text-sm font-semibold px-6">
                Find a Pet
              </li>
            </Link>
            <Link to="/rehouse-a-pet">
              <li className=" border-b py-4 hover:bg-[#F7F7F7] text-sm font-semibold px-6">
                List a Pet
              </li>
            </Link>
            <Link to="/frequently-asked-questions">
              <li className=" border-b py-4 hover:bg-[#F7F7F7] text-sm font-semibold px-6">
                Frequently Asked Questions
              </li>
            </Link>
            <Link to="/donate-to-neuter">
              <li className=" border-b py-4 hover:bg-[#F7F7F7] text-sm font-semibold px-6">
                Donate to Neuter
              </li>
            </Link>
            <Link to="/are-you-ready-to-adopt-a-pet">
              <li className=" border-b py-4 hover:bg-[#F7F7F7] text-sm font-semibold px-6">
                Are You Ready To Adopt A Pet
              </li>
            </Link>
            <Link to="/pet-welfare">
              <li className=" border-b py-4 hover:bg-[#F7F7F7] text-sm font-semibold px-6">
                Pet Care Information
              </li>
            </Link>
            <Link to="/for_rehousers">
              <li className=" border-b py-4 hover:bg-[#F7F7F7] text-sm font-semibold px-6">
                How It Works - Rehomers
              </li>
            </Link>
            <Link to="/for_adopter">
              <li className=" border-b py-4 hover:bg-[#F7F7F7] text-sm font-semibold px-6">
                How It Works - Adopters
              </li>
            </Link>
            <Link to="/contact-petcares">
              <li className=" border-b py-4 hover:bg-[#F7F7F7] text-sm font-semibold px-6">
                Contact PetCares
              </li>
            </Link>
            <Link to="/about">
              <li className=" border-b py-4 hover:bg-[#F7F7F7] text-sm font-semibold px-6">
                About Us
              </li>
            </Link>
            {!userDetails ? (
              <>
                <Link to="/login">
                  <li className=" border-b py-4 flex items-center gap-2 hover:bg-[#F7F7F7] text-sm font-semibold px-6">
                    <MdPersonOutline className=" text-xl" />
                    Login
                  </li>
                </Link>
                <Link to="/register">
                  <li className=" border-b py-4 flex items-center gap-2 hover:bg-[#F7F7F7] text-sm font-semibold px-6">
                    <ImPencil />
                    Register
                  </li>
                </Link>
              </>
            ) : (
              <>
                <Link to="/dashboard">
                  <li className=" border-b py-4 flex items-center gap-2 hover:bg-[#F7F7F7] text-sm font-semibold px-6">
                    My Dashboard
                  </li>
                </Link>
                <Link to="/messages">
                  <li className=" border-b py-4 flex items-center gap-2 hover:bg-[#F7F7F7] text-sm font-semibold px-6">
                    My Messages
                  </li>
                </Link>
                <Link to="/profile">
                  <li className=" border-b py-4 flex items-center gap-2 hover:bg-[#F7F7F7] text-sm font-semibold px-6">
                    My Profile
                  </li>
                </Link>
                <Link to="/notification">
                  <li className=" border-b py-4 flex items-center gap-2 hover:bg-[#F7F7F7] text-sm font-semibold px-6">
                    My Notification
                  </li>
                </Link>
                <Link to="/favourites">
                  <li className=" border-b py-4 flex items-center gap-2 hover:bg-[#F7F7F7] text-sm font-semibold px-6">
                    Favourites
                  </li>
                </Link>

                <li
                  className=" cursor-pointer py-4 flex items-center gap-2 hover:bg-[#F7F7F7] text-sm font-semibold px-6"
                  onClick={() => logOut()}
                >
                  Log out
                </li>
              </>
            )}
          </ul>
        </nav>
      </section>
      <div
        className={` w-full h-screen bg-black absolute ${
          openMenu ? " max-[850px]:block" : ""
        }
         max-[650px]:hidden hidden opacity-45 top-0 left-0`}
      ></div>
    </>
  );
};

export default Mobilemenu;
