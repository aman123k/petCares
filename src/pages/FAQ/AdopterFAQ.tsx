import React, { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa6";
import { PiMinusBold } from "react-icons/pi";

function AdopterFAQ() {
  const [id, setId] = useState<number>();
  return (
    <>
      <Header />
      <section className=" bg-[#EEEEEE] py-8 px-6">
        <section className=" bg-white px-10 py-4 rounded-lg drop-shadow-md font-Nunito">
          <div>
            <h1 className=" text-center py-3 font-bold text-2xl text-[#656565]">
              FAQs for Adopting a Pet
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
                  I've adopted a dog! I want to make sure that I'm giving them
                  the best care, so what should I do next?
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
                  We're glad that you want to give your new dog a great life.
                </li>
                <li>We recommend that you follow these steps:</li>
                <li className=" font-bold text-black">
                  Settling in your new dog
                </li>
                <li>
                  The initial days in your home are crucial and unique for a
                  pet. Your new dog will likely feel disoriented and uncertain
                  about their surroundings and your expectations. Establishing
                  clear routines and boundaries with your family is essential to
                  ensure a smooth transition for your dog.
                </li>
                <li className=" font-bold text-black">
                  Before You Bring Your Dog Home:
                </li>
                <li>
                  When bringing home a new dog, designate a specific area where
                  they'll spend most of their time, preferably in a kitchen or a
                  room with an easy-to-clean floor. Prepare a dog crate if you
                  plan on crate training. Ensure the space is dog-proofed,
                  securing any potential hazards.
                </li>
                <li>
                  Begin training your dog immediately, using consistent commands
                  throughout the family to avoid confusion. Establish a routine
                  and stick to it to provide structure for your new pet. It's
                  essential to start training from day one to set expectations.
                </li>
                <li>
                  Prior to bringing your dog home, equip them with an ID tag
                  containing your phone number for added safety during
                  transportation and the initial days. If your dog is
                  microchipped, register your contact information with the
                  microchip organization for extra security.
                </li>
                <li className=" text-black font-bold">The First Day:</li>
                <li>
                  When bringing a new pet home, allow them time to decompress
                  and adjust to their new environment before introducing them to
                  strangers. Educate children on safe approaches to the dog and
                  ensure a calm atmosphere.
                </li>
                <li>
                  Maintain the existing feeding schedule initially to prevent
                  digestive issues. If changing food brands, gradually
                  transition over a week to avoid upsetting their stomach.
                  Secure your dog in a crate during car rides to alleviate
                  stress. Upon arrival, guide them to their toileting area and
                  spend time helping them acclimate. Expect accidents as they
                  adjust to their new surroundings.
                </li>
                <li>
                  During the first days, maintain a calm environment, limiting
                  excitement and giving your dog time to settle in. Invest
                  patience in the settling process, understanding it may take
                  weeks for them to adjust. Be prepared to offer comfort and
                  support as they acclimate to their new home.
                </li>
              </ul>
            </div>
            <div
              className=" border-b-2 border-dotted py-5 cursor-pointer"
              onClick={() => (id === 6 ? setId(0) : setId(6))}
            >
              <div className=" flex justify-between items-center gap-6 max-[650px]:items-start">
                <h1 className=" font-semibold text-lg ">
                  I've adopted a rabbit! I want to make sure that I'm giving
                  them the best care, so what should I do next?
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
                  We're glad that you want to give your new rabbit a great life.
                  For information about how to care for a rabbit and preparing
                  for your new rabbit{" "}
                  <Link
                    to="/preparing-for-your-rabbit"
                    className=" text-[#5fa505] font-bold"
                  >
                    click here
                  </Link>
                </li>
              </ul>
            </div>
            <div
              className=" border-b-2 border-dotted py-5 cursor-pointer"
              onClick={() => (id === 7 ? setId(0) : setId(7))}
            >
              <div className=" flex justify-between items-center gap-6 max-[650px]:items-start">
                <h1 className=" font-semibold text-lg ">
                  I've adopted a cat! I want to make sure that I'm giving them
                  the best care, so what should I do next?
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
                  We're glad that you want to give your new cat a great life.
                  For information about how to care for a cat and preparing for
                  your new cat{" "}
                  <Link
                    to="/preparing-for-your-cat"
                    className=" text-[#96C830] font-bold"
                  >
                    click here
                  </Link>
                </li>
              </ul>
            </div>
            <div
              className=" border-b-2 border-dotted py-5 cursor-pointer"
              onClick={() => (id === 8 ? setId(0) : setId(8))}
            >
              <div className=" flex justify-between items-center gap-6 max-[650px]:items-start">
                <h1 className=" font-semibold text-lg ">
                  I've adopted a parrot! I want to make sure that I'm giving
                  them the best care, so what should I do next?
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
                  We're glad that you want to give your new parrot a great life.
                  For information about how to care for a parrot and preparing
                  for your new parrot{" "}
                  <Link
                    to="/preparing-for-your-parrot"
                    className=" text-[#96C830] font-bold"
                  >
                    click here
                  </Link>
                </li>
              </ul>
            </div>
            <div
              className=" border-b-2 border-dotted py-5 cursor-pointer"
              onClick={() => (id === 9 ? setId(0) : setId(9))}
            >
              <div className=" flex justify-between items-center gap-6 max-[650px]:items-start">
                <h1 className=" font-semibold text-lg ">
                  Why do I have to pay an adoption fee before I get the pet?
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
                  We want people to adopt pets responsibly. By paying the fee at
                  this point in the process, you're demonstrating to the
                  rehouser that you are very serious about adopting their pet.
                </li>
                <li>
                  We know from our research that it can be very frustrating if
                  you are one of many people trying to adopt the same pet. Your
                  payment stops any further applications from being made, and
                  the pet is reserved for you. Assuming all is well with the
                  home check, you can then meet the pet and proceed with the
                  adoption.
                </li>
                <li>
                  We will hold the fee safely and securely in an account which
                  will be <span className=" font-bold"> fully refunded </span>{" "}
                  to you if you don't end up adopting the pet.
                </li>
                <li>
                  By paying the fee to us at this stage, it will also deter
                  scammers from using the website.
                </li>
              </ul>
            </div>
            <div
              className=" border-b-2 border-dotted py-5 cursor-pointer"
              onClick={() => (id === 10 ? setId(0) : setId(10))}
            >
              <div className=" flex justify-between items-center gap-6 max-[650px]:items-start">
                <h1 className=" font-semibold text-lg ">
                  How does PetCares deal with scammers or pet sellers?
                </h1>
                <span className=" cursor-pointer text-[#5fa505] ">
                  {id !== 10 ? (
                    <FaPlus className=" text-2xl" />
                  ) : (
                    <PiMinusBold className=" text-2xl" />
                  )}
                </span>
              </div>
              <ul
                className={`py-2.5 flex flex-col gap-3  text-sm text-[#646060]
                duration-300 ease-in-out tracking-wide
                ${id === 10 ? "block" : "hidden"}`}
              >
                <li>
                  The PetCares team monitors the messaging and profiles on our
                  website. Anyone flagged as a potential scammer or pet seller
                  is suspended and removed from our website.{" "}
                  <span className=" font-bold">
                    {" "}
                    For safety reasons we strongly advise not to participate in
                    any messaging or meeting up outside of the site.
                  </span>
                </li>
                <li>
                  PetCares is strictly for rehousing pets responsibly, and will
                  never be for the sale of pets.
                </li>
              </ul>
            </div>
            <div
              className=" border-b-2 border-dotted py-5 cursor-pointer"
              onClick={() => (id === 11 ? setId(0) : setId(11))}
            >
              <div className=" flex justify-between items-center gap-6 max-[650px]:items-start">
                <h1 className=" font-semibold text-lg ">
                  Does PetCares verify the pet's health record before listing?
                </h1>
                <span className=" cursor-pointer text-[#5fa505] ">
                  {id !== 11 ? (
                    <FaPlus className=" text-2xl" />
                  ) : (
                    <PiMinusBold className=" text-2xl" />
                  )}
                </span>
              </div>
              <ul
                className={`py-2.5 flex flex-col gap-3  text-sm text-[#646060]
                duration-300 ease-in-out tracking-wide
                ${id === 11 ? "block" : "hidden"}`}
              >
                <li>
                  No, we ask the pet's owner to be honest about any health
                  issues or concerns they may have (or have had) and include the
                  information in the listing.
                </li>
                <li>
                  We strongly advise that prior to confirming any adoption (and
                  after reserving the pet) you ask the rehouser to show you any
                  relevant documentation about the pet including any vet
                  records. You can also ask the rehouser to give you the vet's
                  telephone number so that you can make your own enquiries if
                  you wish to do so.
                </li>
                <li>
                  If you don't do this, you cannot go back to the rehomer after
                  you have accepted and adopted the pet.
                </li>
              </ul>
            </div>
            <div
              className=" border-b-2 border-dotted py-5 cursor-pointer"
              onClick={() => (id === 12 ? setId(0) : setId(12))}
            >
              <div className=" flex justify-between items-center gap-6 max-[650px]:items-start">
                <h1 className=" font-semibold text-lg ">
                  How do I delete my Account ?
                </h1>
                <span className=" cursor-pointer text-[#5fa505] ">
                  {id !== 12 ? (
                    <FaPlus className=" text-2xl" />
                  ) : (
                    <PiMinusBold className=" text-2xl" />
                  )}
                </span>
              </div>
              <ul
                className={`py-2.5 flex flex-col gap-3  text-sm text-[#646060]
                duration-300 ease-in-out tracking-wide
                ${id === 12 ? "block" : "hidden"}`}
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

export default AdopterFAQ;
