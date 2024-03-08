import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { TbMessage2Question } from "react-icons/tb";
import { Link } from "react-router-dom";

function Faq() {
  return (
    <>
      <Header />
      <section className=" bg-[#EEEEEE] font-Nunito py-16 text-[#595959] px-8">
        <div className=" text-center">
          <h1 className=" font-bold text-3xl">Frequently Asked Questions</h1>
          <p className=" mt-2">Have a question? Then find out more here...</p>
        </div>
        <section className=" grid grid-cols-2 gap-6 mt-16 max-[650px]:grid-cols-1">
          <Link
            to="/adopters-faqs"
            className=" group bg-white border p-14 max-[650px]:px-12  rounded-xl flex flex-col gap-10 hover:drop-shadow-xl"
          >
            <div className="ml-[50%] translate-x-[-50%]  w-max bg-[#AFD57D] group-hover:bg-[#5FA501] p-5 rounded-full">
              <TbMessage2Question className=" text-white text-8xl" />
            </div>
            <div className=" text-center">
              <h1 className=" text-xl mb-3 font-bold">
                FAQ's for Pet Adopters
              </h1>
              <p>
                If you are thinking about adopting a pet, we know you'll have
                lots of things to consider. Click here to see some of the most
                frequently asked questions.
              </p>
            </div>
          </Link>
          <Link
            to="/rehousers-faq"
            className=" group bg-white border p-14 rounded-xl max-[650px]:px-12 flex flex-col gap-10 hover:drop-shadow-xl"
          >
            <div className="ml-[50%] translate-x-[-50%] w-max bg-[#AFD57D] group-hover:bg-[#5FA501] p-5 rounded-full">
              <TbMessage2Question className=" text-white text-8xl" />
            </div>
            <div className=" text-center">
              <h1 className=" text-xl mb-3 font-bold">
                FAQ's for Pet Rehousers
              </h1>
              <p>
                Finding a new home for your pet doesn't need to be a daunting
                task. We are here to help. If you have a question, hopefully
                you'll find the answer here, but if you need to know something
                else please do get in touch.
              </p>
            </div>
          </Link>
        </section>
      </section>
      <Footer />
    </>
  );
}

export default Faq;
