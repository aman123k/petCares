import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import pageNotFound from "../images/error-404.png";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <>
      <Header />
      <section className=" bg-[#EEEEEE] pb-10">
        <img
          src={pageNotFound}
          alt=""
          className=" ml-[50%] translate-x-[-50%] py-20 px-10  max-[950px]:px-20 max-[950px]:py-10
          max-[650px]:px-10"
        />
        <section className=" text-center font-Nunito flex flex-col gap-5">
          <h1 className=" text-[#484848] text-4xl font-bold max-[650px]:text-3xl">
            Ohh Sorry! Page Not Found
          </h1>
          <p className=" text-[#484848] text-2xl font-bold px-28 max-[650px]:px-6 max-[650px]:text-xl max-[950px]:px-20">
            This means that the pet you are interested in has already been
            rehoused or is no longer available for adoption.Or may be the page
            is in devlopment
          </p>
        </section>
        <Link to="/">
          <button
            className=" font-Nunito my-8 text-white bg-[#5FA501] drop-shadow-md 
         ml-[50%] translate-x-[-50%] rounded-lg tracking-wide font-bold py-3 px-8"
          >
            Back to Home
          </button>
        </Link>
      </section>
      <Footer />
    </>
  );
}

export default PageNotFound;
