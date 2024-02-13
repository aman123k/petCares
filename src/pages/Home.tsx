import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

import { CiSearch } from "react-icons/ci";
import { FcProcess } from "react-icons/fc";
import { Link } from "react-router-dom";
import HomeCard from "../components/HomeCard";

function Home() {
  return (
    <div className=" ">
      <Header />
      <section
        className="bg-homeDod object-contain py-36 flex flex-col gap-14 px-16 text-white
      max-[650px]:px-8 max-[650px]:py-10 max-[650px]:gap-10 bg-no-repeat"
      >
        <Link to="/adopt-a-pet">
          <div
            className=" flex gap-10 items-center bg-[#5FA501] w-[500px] py-10
          rounded-lg px-12 hover:scale-[1.1] duration-500 ease-in-out max-[650px]:w-full
          max-[650px]:px-6 max-[650px]:gap-5 max-[650px]:py-7"
          >
            <CiSearch
              className="text-7xl text-[#5FA501] bg-white p-3.5 rounded-lg max-[650px]:text-5xl 
            max-[650px]:p-1"
            />
            <div>
              <h1 className="font-bold text-2xl font-Nunito max-[650px]:text-xl">
                I Want to adopt a pet
              </h1>
              <p className="font-Nunito text-[16px] tracking-wide pt-2 max-[650px]:pt-1 ">
                Search the available pets listed on{" "}
                <br className="max-[650px]:hidden" />
                petCares
              </p>
            </div>
          </div>
        </Link>
        <Link to="/rehouse-a-pet">
          <div
            className=" flex gap-10 items-center bg-[#1e7629] w-[500px] py-10
          rounded-lg px-12 hover:scale-[1.1] duration-500 ease-in-out max-[650px]:w-full
          max-[650px]:px-6 max-[650px]:gap-5 max-[650px]:py-7"
          >
            <FcProcess
              className="text-[4.8rem] text-[#5FA501] bg-white px-3 py-0 rounded-lg 
            max-[650px]:text-[3rem] max-[650px]:px-2"
            />
            <div>
              <h1 className="font-bold text-2xl font-Nunito max-[650px]:text-xl">
                I Need to rehouse my pet
              </h1>
              <p className="font-Nunito text-[16px] tracking-wide pt-2 max-[650px]:pt-1  ">
                Start the process. It's free to liste your pet on petCreas
              </p>
            </div>
          </div>
        </Link>
      </section>
      <section className="  my-10 font-Nunito px-8">
        <div className="text-center flex-col flex-3">
          <h1 className=" text-3xl font-bold text-[#595959]">
            Why Choose PetCares?
          </h1>
          <p className=" text-[#595959] mt-4">
            Because we enable direct pet adoption, from one good home to
            another.
          </p>
        </div>
        <HomeCard />
      </section>
      <Footer />
    </div>
  );
}

export default Home;
