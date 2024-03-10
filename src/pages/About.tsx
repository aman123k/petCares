import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import aboutBnner from "../images/green-hand-paw-1.png";
import { Link } from "react-router-dom";
import helperImage from "../images/adoption-giving-up-a-catsmall.jpg";
import helper2Image from "../images/about-us-2nd 1.png";
import { FcHome } from "react-icons/fc";
import { GoPerson } from "react-icons/go";
import { FaHandsHelping } from "react-icons/fa";
import HomeCard from "../components/HomeCard";
import mainAbout from "../images/main one.jpg";

function About() {
  return (
    <>
      <Header />
      <section className=" object-cover relative text-white font-Nunito">
        <section className=" py-24 mb-28 px-20 max-[650px]:mb-0 max-[400px]:py-14 max-[400px]:px-8">
          <h1 className="font-semibold tracking-wider text-lg max-[650px]:text-sm">
            <Link to="/">Home </Link>/ About us
          </h1>
          <h3 className=" font-bold text-4xl tracking-wide max-[650px]:text-2xl mt-3">
            About us
          </h3>
        </section>
        <img
          src={aboutBnner}
          alt=""
          className=" object-cover absolute top-0 -z-10 w-full  h-96 max-[650px]:h-56"
        />
      </section>
      <section
        className=" font-Nunito flex flex-col bg-[#F9F9F9] gap-8  max-[650px]:w-full
    max-[850px]:gap-6 max-[650px]:gap-0 max-[650px]:px-8 pb-7 max-[950px]:px-10"
      >
        <section
          className=" flex mx-6 px-5 mt-10 items-center max-[850px]:gap-4
       max-[850px]:flex-col max-[850px]:w-full max-[850px]:mx-3 max-[650px]:mx-0 max-[650px]:px-0 "
        >
          <div className=" flex flex-col gap-5 max-[850px]:w-full w-[55%] text-[#595959]">
            <h1 className=" font-bold text-3xl text-[#090808] tracking-wide">
              Our mission is to empower individuals to responsibly find new
              homes for their beloved pets.
            </h1>
            <h3 className=" font-bold text-lg tracking-wide">
              Who we are, and why we created PetCares
            </h3>
            <p className="tracking-wide text-[#777777]">
              We, a group of animal lovers, have established PetCares with the
              aim of tackling pet homelessness and promoting responsible
              rehoming. Being part of a registered Indian charity, we prioritize
              the well-being of pets over profit.
            </p>
            <div className=" flex items-center gap-4">
              <FcHome className=" text-5xl shrink-0" />

              <div>
                <h1 className=" font-bold text-xl text-[#484848] tracking-wide">
                  2.7 million
                </h1>
                <p className=" text-sm mt-1 tracking-wide">
                  According to the Pet Food Manufacturers Association (PFMA),
                  pets from Delhi, Punjab and Haryana households have been
                  relinquished in the past year.
                </p>
              </div>
            </div>
            <div className=" flex items-center gap-4">
              <GoPerson className="text-[#96C830] text-5xl shrink-0" />

              <div>
                <h1 className=" font-bold text-xl text-[#484848] tracking-wide">
                  Lifestyle changes
                </h1>
                <p className=" text-sm mt-1 tracking-wide">
                  The most common reasons for giving up a pet include changes in
                  living arrangements, work situations, and financial
                  challenges. Whatever your circumstances may be, we're here to
                  support you.
                </p>
              </div>
            </div>
            <div className=" flex items-center gap-4">
              <FaHandsHelping className="text-[#96C830] text-5xl shrink-0" />

              <div>
                <h1 className=" font-bold text-xl text-[#484848] tracking-wide">
                  PetCares is here to help
                </h1>
                <p className=" text-sm mt-1 tracking-wide">
                  As students, we've created a pet adoption community where
                  individuals looking to adopt can safely connect with those
                  needing to rehome a dog, cat, parrot ,or rabbit.
                </p>
              </div>
            </div>
          </div>
          <img
            src={helperImage}
            alt=""
            className="w-[45%] max-[650px]:w-full  max-[850px]:w-[80%] min-[1350px]:h-[28rem] object-contain mix-blend-multiply"
          />
        </section>
        <section
          className=" flex mx-6 px-5 mt-10 items-center max-[650px]:mt-10 max-[850px]:gap-4
       max-[850px]:flex-col-reverse max-[850px]:w-full max-[850px]:mx-3 max-[650px]:mx-0 max-[650px]:px-0 "
        >
          <img
            src={helper2Image}
            alt=""
            className="w-[45%] max-[650px]:w-full  max-[850px]:w-[80%] min-[1350px]:h-[28rem] object-contain mix-blend-multiply"
          />
          <div className=" flex flex-col gap-5 max-[850px]:w-full w-[55%] text-[#595959]">
            <h3 className=" font-bold text-xl text-[#090808]  tracking-wide">
              What We Do
            </h3>
            <p className="tracking-wide text-[#777777]">
              we've developed a safer, more professional, and ethical
              alternative to popular pet rehomusing sites like Facebook,
              Preloved, Pets4Homes, and Gumtree.
            </p>
            <p className="tracking-wide text-[#777777]">
              Our platform facilitates connections between potential adopters
              and pet owners who need to rehome their animals, focusing
              initially on dogs, cats, parrot, and rabbits - the Delhi's most
              common pets. By doing so, we make it easier for caring individuals
              to find the right pet while increasing the chances of pets finding
              their forever homes.
            </p>
            <p className="tracking-wide text-[#777777]">
              We provide a non-judgmental service to pet owners looking to
              rehome their animals, granting them full control of the rehoming
              process. Additionally, our efforts contribute to reducing the
              number of animals entering shelters, thus freeing up space and
              resources for abandoned pets in need of immediate or specialized
              care.
            </p>
          </div>
        </section>
      </section>
      <section className=" bg-[#EEEEEE] font-Nunito px-10 max-[650px]:px-6 py-7">
        <h1 className=" text-center text-3xl font-bold">Our Values</h1>
        <HomeCard />
      </section>
      <section
        className="  text-[#777777] px-28 py-16 text-center
      max-[650px]:px-6 tracking-wide max-[850px]:px-20 flex-col flex  gap-4"
      >
        <p>
          we recognize the challenges faced by rescue centers struggling with
          limited space and resources to care for surrendered pets. At PetCares,
          we refuse to accept this as the norm in our modern, connected world.
        </p>
        <p>
          That's why we've created an online community where pet owners in
          difficult situations can connect directly with individuals eager to
          provide loving homes. Together, we can prevent dogs, cats, parrot,and
          rabbits from ever experiencing the uncertainty of shelter life.
        </p>
        <p>
          Our mission is clear: to save lives, relieve the burden on rescue
          centers, and create a positive impact in ending pet homelessness. Join
          us in enabling responsible rehoming and ensuring every pet finds the
          love and care they deserve.
        </p>
        <img
          src={mainAbout}
          alt=""
          className="max-[650px]:w-full pt-4 w-[450px] ml-[50%] translate-x-[-50%]"
        />
      </section>
      <Footer />
    </>
  );
}

export default About;
