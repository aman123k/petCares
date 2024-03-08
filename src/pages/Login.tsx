import React, { useContext, useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaGithub, FaRegEyeSlash } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import toast, { Toaster } from "react-hot-toast";
import useLogin from "../customHooks/loginFunction";
import { User, UserLoginData } from "../interface/interface";
import { HiOutlineEye } from "react-icons/hi2";
import useGoogleAuth from "../function/googleAuth";
import { ThemeContext } from "../globleContext/context";

function Login() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [userInfo, setUserInfo] = useState<UserLoginData>({
    username: "",
    email: "",
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
  const { login } = useLogin({
    url: `${url}/login`,
    userInfo,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e: React.FormEvent<HTMLElement>): void => {
    e.preventDefault();
    if (!userInfo.username) {
      toast.error("Please enter name");
      return;
    }
    login();
  };

  const CLIENT_ID = process.env.REACT_APP_CLIENT_ID as string;
  const googleLogin = useGoogleAuth(`${url}/googleAuth`);
  const githubLogin = (): void => {
    window.location.assign(
      `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}`
    );
  };
  return (
    <>
      <Header />
      <section className=" bg-adopterRegister py-56 max-[650px]:py-36 max-[650px]:px-8 object-cover text-white font-Nunito px-24">
        <h1 className="font-semibold tracking-wider text-lg max-[650px]:text-sm">
          <Link to="/">Home </Link>/ Login to your PetRehomer Account
        </h1>
        <h3 className=" font-bold text-4xl tracking-wide max-[650px]:text-3xl mt-4">
          Login to your PetRehomer Account
        </h3>
      </section>
      <section className=" font-Nunito flex flex-col text-center py-10 gap-10 bg-[#FAFAFA] px-10">
        <div>
          <h1 className="font-bold tracking-wide text-2xl my-3">
            Login to your account
          </h1>
          <p className="text-[#595959]">
            Don't have an account?{" "}
            <Link to="/register" className=" text-[#96C830]">
              Register!
            </Link>
          </p>
        </div>
        <div className=" w-[40%] ml-[50%] translate-x-[-50%] max-[850px]:w-full">
          <form
            className="w-full flex flex-col gap-6 font-Nunito"
            onSubmit={handleSubmit}
          >
            <div className="relative">
              <input
                type="text"
                name="email"
                onChange={handleChange}
                placeholder="Email"
                className="w-full pl-4 pr-10 py-3 rounded-lg outline-[#595959]"
              />
              <MdOutlineEmail className=" absolute top-4 right-4 text-[#7DDC22] text-lg font-bold" />
            </div>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                onChange={handleChange}
                placeholder="password"
                className="w-full pl-4 pr-10 py-3 rounded-lg outline-[#595959]"
              />
              {showPassword ? (
                <HiOutlineEye
                  className=" absolute top-4 right-4 text-[#7DDC22] text-lg font-bold cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                />
              ) : (
                <FaRegEyeSlash
                  className=" absolute top-4 right-4 text-[#7DDC22] text-lg font-bold cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                />
              )}
            </div>
            <button
              type="submit"
              className=" w-full bg-[#8AD82B] py-3 font-semibold text-white rounded-lg"
            >
              Login
            </button>
          </form>
          <section className="">
            <div className="text-[#595959] text-center my-4">
              Lost your password?{" "}
              <Link to="/forgot-password" className=" text-[#8B91DC]">
                Change Here
              </Link>
            </div>
            <div className="text-[#595959] text-center my-4">
              Don't have an account?{" "}
              <Link to="/register" className=" text-[#7ddc22]">
                Register!
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
                className=" flex items-center bg-[#1D7628] py-2.5 px-5 
              rounded-lg cursor-pointer"
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
        </div>
      </section>
      <Footer />
      <Toaster />
    </>
  );
}

export default Login;
