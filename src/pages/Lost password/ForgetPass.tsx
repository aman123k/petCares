import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { BsPerson } from "react-icons/bs";
import { BsQuestion } from "react-icons/bs";
import { HiOutlineEye } from "react-icons/hi2";
import { FaRegEyeSlash } from "react-icons/fa6";
import toast, { Toaster } from "react-hot-toast";
import sendMail from "../../function/passwordReset";
import useVerifyMail from "../../customHooks/verifyMail";

function ForgetPass() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [sendEmail, setSendEmail] = useState<boolean>(false);
  const [newPass, setNewPass] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [otp, setOtp] = useState<string>("");
  const { verifyMail } = useVerifyMail({ email, newPass, otp });

  const handelVerify = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    if (!email) return toast.error("Enter email...");
    if (!otp) return toast.error("Enter Otp...");
    if (!newPass) return toast.error("Enter storng password...");
    verifyMail();
  };

  return (
    <>
      <Header />
      <section className=" bg-adopterRegister py-56 max-[650px]:py-36 max-[650px]:px-8 object-cover text-white font-Nunito px-24">
        <h1 className="font-semibold tracking-wider text-lg max-[650px]:text-sm">
          <Link to="/">Home </Link>/ Forgot Password
        </h1>
        <h3 className=" font-bold text-4xl tracking-wide max-[650px]:text-3xl mt-4">
          Forgot Password
        </h3>
      </section>
      <section className="bg-[#FAFAFA] px-10 py-12">
        <section className=" w-[40%] ml-[50%] translate-x-[-50%] max-[850px]:w-full font-Nunito text-center ">
          <h1 className=" text-3xl text-[#595959] font-bold">
            Forgot Password
          </h1>
          <div className="text-[#595959] text-center my-4">
            Don't have an account ?{" "}
            <Link to="/register" className=" text-[#7ddc22]">
              Register!
            </Link>
          </div>
          <form action="" className=" flex flex-col gap-4 my-6">
            <div className=" relative">
              <input
                type="text"
                placeholder="Email"
                className=" w-full outline-none border border-[#ced4d9] py-3 px-3.5 pr-9 rounded-lg"
                value={email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setEmail(e.currentTarget.value)
                }
              />
              <BsPerson className="text-[#96C830] absolute top-[50%] translate-y-[-50%] right-3 text-xl" />
            </div>
            {sendEmail ? (
              <>
                <div className=" relative">
                  <input
                    type="text"
                    placeholder="Enter OTP"
                    className=" w-full outline-none border border-[#ced4d9] py-3 px-3.5 pr-9 rounded-lg"
                    value={otp}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setOtp(e.currentTarget.value)
                    }
                  />
                  <BsQuestion className="text-[#96C830] absolute top-[50%] translate-y-[-50%] right-3 text-xl" />
                </div>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setNewPass(e.target.value)
                    }
                    placeholder="Password"
                    className="w-full pl-4 pr-10 py-3 border-[#ced4d9] rounded-lg border"
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
                  className={`bg-[#96C830] py-2.5 font-bold rounded-lg text-white`}
                  onClick={handelVerify}
                >
                  Change Password
                </button>
              </>
            ) : (
              <button
                className={`bg-[#96C830] py-2.5 font-bold rounded-lg text-white`}
                onClick={(e: React.FormEvent<HTMLElement>) => {
                  e.preventDefault();
                  if (!email) toast.error("Enter email..");
                  sendMail({ email, setSendEmail });
                }}
              >
                Send OTP
              </button>
            )}
          </form>
        </section>
        <section
          className={` flex w-[40%] ml-[50%] translate-x-[-50%] max-[850px]:w-full font-Nunito ${
            sendEmail ? "justify-between" : "justify-center"
          }`}
        >
          <button
            className={` text-sm text-[#8b91dc] border-b border-[#8b91dc] ${
              sendEmail ? "block" : "hidden"
            }`}
            onClick={() => sendMail({ email, setSendEmail })}
          >
            ReSend OTP
          </button>
          <div className="text-[#595959]">
            Don't have an account ?{" "}
            <Link to="/register" className=" text-[#7ddc22]">
              Register!
            </Link>
          </div>
        </section>
      </section>
      <Footer />
      <Toaster />
    </>
  );
}

export default ForgetPass;
