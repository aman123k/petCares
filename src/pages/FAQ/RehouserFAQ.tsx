import React, { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa6";
import { PiMinusBold } from "react-icons/pi";

function RehouserFAQ() {
  const [id, setId] = useState<number>();
  return (
    <>
      <Header />
      <section className=" bg-[#EEEEEE] py-8 px-6">
        <section
          className=" bg-white px-10 py-4 rounded-lg drop-shadow-md font-Nunito  
        min-[2000px]:ml-[50%] min-[2000px]:translate-x-[-50%]"
        >
          <div>
            <h1 className=" text-center py-3 font-bold text-2xl text-[#656565]">
              FAQs for Rehousing a Pet
            </h1>
            <p className=" text-[#8a8787]">
              We hope our frequently asked questions will help you with any
              query that you may have, however if there is something else that
              you need to ask, please do not hesitate to{" "}
              <Link
                to="/contact-petcares"
                className=" text-[#96C830] font-semibold"
              >
                Contact us.
              </Link>
            </p>
          </div>
          <section className="my-5 flex flex-col select-none ">
            <div
              className=" border-b-2 border-dotted py-5 cursor-pointer"
              onClick={() => (id === 1 ? setId(0) : setId(1))}
            >
              <div className=" flex justify-between items-center gap-6 max-[650px]:items-start">
                <h1 className=" font-semibold text-lg">
                  why did you set up PetCares
                </h1>
                <span className=" cursor-pointer text-[#5fa505] ">
                  {id !== 1 ? (
                    <FaPlus className=" text-2xl" />
                  ) : (
                    <PiMinusBold className=" text-2xl" />
                  )}
                </span>
              </div>
              <ul
                className={`py-2.5 flex flex-col gap-3  text-sm text-[#646060]
                duration-300 ease-in-out tracking-wide
                ${id === 1 ? "block" : "hidden"}`}
              >
                <li>
                  we believe in ensuring a compassionate, secure, and
                  trustworthy process for pet rehousing and adoption. We
                  understand the difficult decisions involved and strive to
                  provide a non-judgmental and simple solution, easing the
                  burden for both pet owners and pets themselves.
                </li>
                <li>
                  Differentiating ourselves from unregulated platforms like
                  Pets4Homes, Gumtree, and Facebook, we offer a reliable
                  alternative. Our focus is on enhancing pet welfare and
                  promoting responsible rehoming and adoption practices through
                  education and transparency.
                </li>
                <li>
                  Moreover, our efforts extend to supporting rescue
                  organizations by alleviating the strain on shelters. By
                  facilitating rehoming, we create space for animals in dire
                  need of professional care, ultimately contributing to a
                  healthier and more sustainable pet care ecosystem.
                </li>
              </ul>
            </div>
            <div
              className=" border-b-2 border-dotted py-5 cursor-pointer"
              onClick={() => (id === 2 ? setId(0) : setId(2))}
            >
              <div className=" flex justify-between items-center gap-6 max-[650px]:items-start ">
                <h1 className=" font-semibold text-lg ">
                  why are you only helping dogs, cats, rabbits and parrots ?
                </h1>
                <span className=" cursor-pointer text-[#5fa505] ">
                  {id !== 2 ? (
                    <FaPlus className=" text-2xl" />
                  ) : (
                    <PiMinusBold className=" text-2xl" />
                  )}
                </span>
              </div>
              <ul
                className={`py-2.5 flex flex-col gap-3  text-sm text-[#646060]
                duration-300 ease-in-out tracking-wide
                ${id === 2 ? "block" : "hidden"}`}
              >
                <li>
                  We’re focusing on dogs, cats and rabbits and parrots because
                  they’re the most popular types of pet in the Delhi, Punjab,
                  and Haryana. We plan to help rehome other types of pets in the
                  future.
                </li>
              </ul>
            </div>
            <div
              className=" border-b-2 border-dotted py-5 cursor-pointer"
              onClick={() => (id === 3 ? setId(0) : setId(3))}
            >
              <div className=" flex justify-between items-center gap-6 max-[650px]:items-start">
                <h1 className=" font-semibold text-lg ">
                  why would I use PetCares to rehouse my pet when I could just
                  take my pet to a rescue center ?
                </h1>
                <span className=" cursor-pointer text-[#5fa505] ">
                  {id !== 3 ? (
                    <FaPlus className=" text-2xl" />
                  ) : (
                    <PiMinusBold className=" text-2xl" />
                  )}
                </span>
              </div>
              <ul
                className={`py-2.5 flex flex-col gap-3  text-sm text-[#646060]
                duration-300 ease-in-out tracking-wide
                ${id === 3 ? "block" : "hidden"}`}
              >
                <li>
                  We’re focusing on dogs, cats and rabbits and parrots because
                  they’re the most popular types of pet in the Delhi, Punjab,
                  and Haryana. We plan to help rehome other types of pets in the
                  future.
                </li>
              </ul>
            </div>
            <div
              className=" border-b-2 border-dotted py-5 cursor-pointer"
              onClick={() => (id === 4 ? setId(0) : setId(4))}
            >
              <div className=" flex justify-between items-center gap-6 max-[650px]:items-start">
                <h1 className=" font-semibold text-lg ">
                  Why would I use PetCares to rehouse my pet when I could use
                  Nextdoor, Rescue Me, Petfinder or even Facebook?
                </h1>
                <span className=" cursor-pointer text-[#5fa505] ">
                  {id !== 4 ? (
                    <FaPlus className=" text-2xl" />
                  ) : (
                    <PiMinusBold className=" text-2xl" />
                  )}
                </span>
              </div>
              <ul
                className={`py-2.5 flex flex-col gap-3  text-sm text-[#646060]
                duration-300 ease-in-out tracking-wide
                ${id === 4 ? "block" : "hidden"}`}
              >
                <li>
                  At petCares, we prioritize your pet's safety, security, and
                  well-being above all else. Unlike advertising on social media
                  or online marketplaces where you're uncertain about potential
                  adopters, our platform provides a safer, more reliable, and
                  professional way to rehouse your pet.
                </li>
                <li>
                  With PetCares, you're in direct contact with potential
                  adopters, giving you full control over the rehousing process.
                  This means you can carefully choose the best home for your
                  pet, ensuring they go to a loving and suitable environment.
                </li>
                <li>
                  Moreover, since we operate as a charity founded by passionate
                  animal lovers, our primary focus is on pet welfare rather than
                  profit. We don't charge any fees to rehome pets, eliminating
                  any incentive for dealers, scammers, or unethical breeders to
                  use our service.
                </li>
              </ul>
            </div>
            <div
              className=" border-b-2 border-dotted py-5 cursor-pointer"
              onClick={() => (id === 5 ? setId(0) : setId(5))}
            >
              <div className=" flex justify-between items-center gap-6 max-[650px]:items-start">
                <h1 className=" font-semibold text-lg ">
                  My pet isn't neutered, vaccinated or microchipped. Can I still
                  list them with PetCares
                </h1>
                <span className=" cursor-pointer text-[#5fa505] ">
                  {id !== 5 ? (
                    <FaPlus className=" text-2xl" />
                  ) : (
                    <PiMinusBold className=" text-2xl" />
                  )}
                </span>
              </div>
              <ul
                className={`py-2.5 flex flex-col gap-3  text-sm text-[#646060]
                duration-300 ease-in-out tracking-wide
                ${id === 5 ? "block" : "hidden"}`}
              >
                <li>
                  While we encourage complying with Indian legislation on pet
                  neutering, microchipping, and vaccination before rehoming,
                  we're here to assist regardless. Contact us for support in
                  finding a loving home for your pet.
                </li>
                <li>
                  Adopters prefer pets already neutered, microchipped, and
                  vaccinated, easing their responsibility. Please consider this
                  before rehoming. It enhances your pet's appeal for a loving
                  family.
                </li>
              </ul>
            </div>
            <div
              className=" border-b-2 border-dotted py-5 cursor-pointer"
              onClick={() => (id === 6 ? setId(0) : setId(6))}
            >
              <div className=" flex justify-between items-center gap-6 max-[650px]:items-start">
                <h1 className=" font-semibold text-lg ">
                  I'm having trouble uploading photos from my iPhone to
                  PetCares. What can I do?
                </h1>
                <span className=" cursor-pointer text-[#5fa505] ">
                  {id !== 6 ? (
                    <FaPlus className=" text-2xl" />
                  ) : (
                    <PiMinusBold className=" text-2xl" />
                  )}
                </span>
              </div>
              <ul
                className={`py-2.5 flex flex-col gap-3  text-sm text-[#646060]
                duration-300 ease-in-out tracking-wide
                ${id === 6 ? "block" : "hidden"}`}
              >
                <li>
                  Some people using iPhones to take photos will be saving their
                  photos as HEIC files. PetCares, like many other platforms, can
                  only accept .jpg .jpeg or .png files.
                </li>
                <li>
                  To change your camera settings on your iPhone so that photos
                  are saved as .JPEG's you will need to do the following:
                </li>
                <li>
                  In your "Settings" menu, find and tap on "Camera". In the
                  "Camera" menu, tap on "Formats" at the very top of the menu.
                  Here you can select either "High Efficiency" which will allow
                  your iPhone to shoot and store HEIC files, or "Most
                  Compatible", which will have your phone capture JPEG's. re
                  wirte in same number of pera and words
                </li>
              </ul>
            </div>
            <div
              className=" border-b-2 border-dotted py-5 cursor-pointer"
              onClick={() => (id === 7 ? setId(0) : setId(7))}
            >
              <div className=" flex justify-between items-center gap-6 max-[650px]:items-start">
                <h1 className=" font-semibold text-lg ">
                  Do I have to pay a fee to rehouse my pet through PetCares?
                </h1>
                <span className=" cursor-pointer text-[#5fa505] ">
                  {id !== 7 ? (
                    <FaPlus className=" text-2xl" />
                  ) : (
                    <PiMinusBold className=" text-2xl" />
                  )}
                </span>
              </div>
              <ul
                className={`py-2.5 flex flex-col gap-3  text-sm text-[#646060]
                duration-300 ease-in-out tracking-wide
                ${id === 7 ? "block" : "hidden"}`}
              >
                <li>
                  Instead of you paying, the person adopting your pet will pay a
                  fee similar to what rescue centers charge. We think this is
                  fair.
                </li>
              </ul>
            </div>
            <div
              className=" border-b-2 border-dotted py-5 cursor-pointer"
              onClick={() => (id === 8 ? setId(0) : setId(8))}
            >
              <div className=" flex justify-between items-center gap-6 max-[650px]:items-start">
                <h1 className=" font-semibold text-lg ">
                  My pet has behavioural problems. Can I use the PetCares
                  website to find them a new home?
                </h1>
                <span className=" cursor-pointer text-[#5fa505] ">
                  {id !== 8 ? (
                    <FaPlus className=" text-2xl" />
                  ) : (
                    <PiMinusBold className=" text-2xl" />
                  )}
                </span>
              </div>
              <ul
                className={`py-2.5 flex flex-col gap-3  text-sm text-[#646060]
                duration-300 ease-in-out tracking-wide
                ${id === 8 ? "block" : "hidden"}`}
              >
                <li>
                  If your pet is{" "}
                  <span className=" font-bold">
                    aggressive, dangerous or too difficult
                  </span>{" "}
                  for you to manage, you should
                  <span className=" font-bold">
                    speak to a rescue organisation
                  </span>{" "}
                  immediately and you
                  <span className=" font-bold"> must not</span> list your pet
                  here.
                </li>
                <li>
                  We connect people who want to rehome pets with those looking
                  to adopt through our website. We don't evaluate behavior, so
                  we rely on honesty about pets' temperaments.
                </li>
              </ul>
            </div>
            <div
              className=" border-b-2 border-dotted py-5 cursor-pointer"
              onClick={() => (id === 9 ? setId(0) : setId(9))}
            >
              <div className=" flex justify-between items-center gap-6 max-[650px]:items-start">
                <h1 className=" font-semibold text-lg ">
                  How do I delete my Account ?
                </h1>
                <span className=" cursor-pointer text-[#5fa505] ">
                  {id !== 9 ? (
                    <FaPlus className=" text-2xl" />
                  ) : (
                    <PiMinusBold className=" text-2xl" />
                  )}
                </span>
              </div>
              <ul
                className={`py-2.5 flex flex-col gap-3  text-sm text-[#646060]
                duration-300 ease-in-out tracking-wide
                ${id === 9 ? "block" : "hidden"}`}
              >
                <li>
                  Please{" "}
                  <Link
                    to="/contact-petcares"
                    className=" font-bold text-[#96C830]"
                  >
                    contact us
                  </Link>{" "}
                  and we will remove your account from PetCares.
                </li>
              </ul>
            </div>
          </section>
        </section>
      </section>
      <Footer />
    </>
  );
}

export default RehouserFAQ;
