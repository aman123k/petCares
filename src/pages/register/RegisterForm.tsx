import { GoPerson } from "react-icons/go";
import { MdOutlineEmail } from "react-icons/md";

import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import useRegister from "../../customHooks/registerFunction";
import React, { useContext, useEffect, useState } from "react";
import { User, UserRegistrationData } from "../../interface/interface";
import toast from "react-hot-toast";
import { FaRegEyeSlash } from "react-icons/fa";
import { HiOutlineEye } from "react-icons/hi2";
import useGoogleAuth from "../../function/googleAuth";
import { ThemeContext } from "../../globleContext/context";

const RegisterForm: React.FC = () => {
  const [showPassord, setShowPassword] = useState<boolean>(false);
  const [data, setData] = useState<UserRegistrationData>({
    username: "",
    email: "",
    password: "",
    picture: "",
    registerType: [""],
  });
  const {
    userDetails,
    loading = true,
  }: { userDetails?: User; loading?: boolean } = useContext(ThemeContext);
  const navigator = useNavigate();

  useEffect(() => {
    if (!loading) {
      if (userDetails !== undefined) navigator("/");
      return;
    }
  }, [navigator, loading, userDetails]);
  const url = process.env.REACT_APP_URL as string;

  const { register } = useRegister({
    url: `${url}/registration`,
    data,
  });

  if (window.location.href.split("/")[3] === "register_rehouse_your_pet") {
    data.registerType = ["rehouser"];
  } else {
    data.registerType = ["adopter"];
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    if (data.username.trim() === "") {
      toast.error("Please enter name");
      return;
    } else if (!data.email.match(/^[a-zA-Z0-9._%+-]+@gmail\.com$/)) {
      toast.error("Please enter correct email");
      return;
    } else if (
      !data.password.match(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{6,}$/
      )
    ) {
      toast.error("Enter Strong Password");
      return;
    } else {
      register();
    }
  };
  const googleLogin = useGoogleAuth(`${url}/googleAuth`);

  const CLIENT_ID: string = process.env.REACT_APP_CLIENT_ID || "";

  const githubLogin = (): void => {
    window.location.assign(
      `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}`
    );
  };
  return (
    <>
      <form
        className="w-full flex flex-col gap-6 font-Nunito"
        onSubmit={handleSubmit}
      >
        <div className="relative">
          <input
            type="text"
            placeholder="Name"
            name="username"
            onChange={handleChange}
            className="w-full pl-4 pr-10 py-3 rounded-lg outline-[#595959]"
          />
          <GoPerson className=" absolute top-4 right-4 text-[#7DDC22] text-lg font-bold" />
        </div>
        <div className="relative">
          <input
            type="text"
            placeholder="Email"
            name="email"
            onChange={handleChange}
            className="w-full pl-4 pr-10 py-3 rounded-lg outline-[#595959]"
          />
          <MdOutlineEmail className=" absolute top-4 right-4 text-[#7DDC22] text-lg font-bold" />
        </div>
        <div className="relative">
          <input
            type={showPassord ? "text" : "password"}
            placeholder="password"
            name="password"
            onChange={handleChange}
            className="w-full pl-4 pr-10 py-3 rounded-lg outline-[#595959]"
          />
          {showPassord ? (
            <HiOutlineEye
              className=" absolute top-4 right-4 text-[#7DDC22] text-lg font-bold cursor-pointer"
              onClick={() => setShowPassword(!showPassord)}
            />
          ) : (
            <FaRegEyeSlash
              className=" absolute top-4 right-4 text-[#7DDC22] text-lg font-bold cursor-pointer"
              onClick={() => setShowPassword(!showPassord)}
            />
          )}
        </div>
        <button
          type="submit"
          className=" w-full bg-[#8AD82B] py-3 font-semibold text-white rounded-lg"
        >
          Register
        </button>
      </form>
      <section className="">
        <div className="text-[#595959] text-center my-4">
          Already have an account ?{" "}
          <Link to="/login" className=" text-[#7ddc22]">
            Login
          </Link>
        </div>
        <div className=" relative my-2">
          <div className=" w-full h-[1px] bg-[#595959]"></div>
          <span
            className=" absolute top-[-12px] left-[50%]
          px-2 translate-x-[-50%] bg-white"
          >
            {" "}
            Or
          </span>
        </div>
        <div className=" w-full flex-col flex gap-5 mt-7 text-white">
          <p
            className=" flex items-center bg-[#1D7628] py-2.5 px-5 rounded-lg cursor-pointer"
            onClick={() => googleLogin()}
          >
            <FcGoogle className=" text-3xl" />{" "}
            <span className="text-center w-full font-semibold tracking-wide">
              Continue with Google
            </span>
          </p>
          <p
            className=" flex items-center bg-[#1D7628] py-2.5 px-5 rounded-lg
           cursor-pointer"
            onClick={() => githubLogin()}
          >
            <FaGithub className=" text-3xl text-[#060606]" />
            <span className="text-center w-full font-semibold tracking-wide">
              Continue with Github
            </span>{" "}
          </p>
        </div>
      </section>
    </>
  );
};

export default RegisterForm;
