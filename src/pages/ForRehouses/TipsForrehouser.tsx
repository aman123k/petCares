import React from "react";
import { Link } from "react-router-dom";
import HallFrame from "../../images/tips-for-rehomers-single.jpg";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { RxDotFilled } from "react-icons/rx";

function TipsForrehouser() {
  return (
    <>
      <Header />
      <section className=" bg-[#F9F9F9] max-[650px]:py-8 py-14 px-10 max-[650px]:px-5">
        <section
          className=" font-Nunito flex flex-col gap-6 bg-white drop-shadow-xl max-[650px]:w-full max-[650px]:rounded-3xl
        max-[850px]:gap-4 max-[650px]:gap-0 rounded-[32px] py-16 px-8 max-[650px]:py-10 text-[#595959]
         min-[2000px]:ml-[50%] min-[2000px]:translate-x-[-50%] "
        >
          <section className=" flex-col flex justify-center max-[1050px]:px-28 max-[850px]:px-16 max-[650px]:px-3.5 px-56 gap-4 max-[]:">
            <h1 className=" text-center text-4xl text-[#595959] font-bold max-[650px]:text-2xl">
              How to make the re homing process straightforward and safe
            </h1>
            <img src={HallFrame} alt="" />
          </section>
          <section className=" flex-col flex justify-center max-[1050px]:px-28 max-[850px]:px-16 max-[650px]:px-3.5 px-56 gap-4 text-center  max-[]:">
            <h1 className=" text-center text-3xl text-[#595959] font-bold max-[650px]:text-xl max-[650px]:mt-5">
              Putting a pet up for adoption is never easy. But following our
              tips can help make the process that little bit more
              straightforward. Here are some important things to do once you’ve
              decided to re home your pet.
            </h1>
          </section>
          <section className=" flex-col flex justify-center max-[1050px]:px-28 max-[850px]:px-16 max-[650px]:px-3.5 px-56 gap-6 mt-10 max-[]:">
            <div className="flex-col flex gap-4">
              <h1 className=" text-2xl text-[#0f0e0e] font-bold max-[650px]:text-xl">
                Create a great profile for your pet
              </h1>
              <p className="  break-words text-[17px] tracking-wide max-[650px]:text-sm">
                Increase your pet's adoption chances with a detailed, appealing
                profile. Showcase their qualities through vivid details and
                high-quality pictures. This helps potential adopters assess
                compatibility and create the best possible match for a forever
                home.
              </p>
            </div>
            <div className="flex-col flex gap-4">
              <h1 className=" text-2xl text-[#0f0e0e] font-bold mt-2 max-[650px]:text-xl">
                Share lots of information with potential adopters
              </h1>
              <p className="  break-words text-[17px] tracking-wide max-[650px]:text-sm">
                Facilitate the adoption process by providing key details in your
                pet's profile. Alongside basics like breed and age, include
                crucial information such as health status, behavior traits, and
                any specific needs. Be prepared to share additional details
                promptly to address potential adopters' inquiries and expedite
                the adoption journey.
              </p>
              <ul className=" mt-4 flex flex-col  gap-4">
                <li className=" flex items-center text-[#595959] gap-2 max-[650px]:items-start">
                  <RxDotFilled className="text-3xl text-[#96C830] flex-shrink-0" />
                  Pet's past: ownership duration, origin, re homing
                  necessity—essential details for potential adopters to
                  understand your pet's history.
                </li>
                <li className=" flex items-center text-[#595959] gap-2 max-[650px]:items-start">
                  <RxDotFilled className="text-3xl text-[#96C830] flex-shrink-0" />
                  Share your pet's living history, including interactions with
                  children and other pets, for adopter insight.
                </li>
                <li className=" flex items-center text-[#595959] gap-2 max-[650px]:items-start">
                  <RxDotFilled className="text-3xl text-[#96C830] flex-shrink-0" />
                  Highlight your pet's joys: favorite activities, toys, creating
                  a charming profile for adopters.
                </li>
                <li className=" flex items-center text-[#595959] gap-2 max-[650px]:items-start">
                  <RxDotFilled className="text-3xl text-[#96C830] flex-shrink-0" />
                  Summarize personality, preferences, habits for a concise,
                  insightful pet description.
                </li>
                <li className=" flex items-center text-[#595959] gap-2 max-[650px]:items-start">
                  <RxDotFilled className="text-3xl text-[#96C830] flex-shrink-0" />
                  Note fears like fireworks, uniforms, and other animals for
                  adopter awareness.
                </li>
                <li className=" flex items-center text-[#595959] gap-2 max-[650px]:items-start">
                  <RxDotFilled className="text-3xl text-[#96C830] flex-shrink-0" />
                  Specify food brand and amount for clear dietary information
                  about your pet.
                </li>
                <li className=" flex items-center text-[#595959] gap-2 max-[650px]:items-start">
                  <RxDotFilled className="text-3xl text-[#96C830] flex-shrink-0" />
                  List allergies, health conditions, and medications for
                  transparent pet health details.
                </li>
                <li className=" flex items-center text-[#595959] gap-2 max-[650px]:items-start">
                  <RxDotFilled className="text-3xl text-[#96C830] flex-shrink-0" />
                  Specify spay/neuter status briefly for a concise pet profile.
                </li>
                <li className=" flex items-center text-[#595959] gap-2 max-[650px]:items-start">
                  <RxDotFilled className="text-3xl text-[#96C830] flex-shrink-0" />
                  Indicate microchip status briefly for a complete pet profile.
                </li>
              </ul>
            </div>
            <div className="flex-col flex gap-4">
              <h1 className=" text-2xl text-[#0f0e0e] font-bold mt-2 max-[650px]:text-xl">
                Be honest about behavioral issues
              </h1>
              <p className="  break-words text-[17px] tracking-wide max-[650px]:text-sm">
                Maintain honesty about behavioral issues. If your pet has shown
                aggression, bitten, or caused harm, refrain from listing on
                PetCares. Questions or uncertainties?{" "}
                <Link to="/contact-petcares" className=" text-[#96C830]">
                  {" "}
                  Contact us for
                </Link>{" "}
                guidance and assistance in making informed decisions about your
                pet's placement.
              </p>
            </div>
          </section>
          <button
            className="mt-10 text-white bg-[#5E9E3C] px-7 py-4 tracking-wider font-semibold
           w-max ml-[50%] translate-x-[-50%] rounded-lg "
          >
            <Link to="/rehouse-a-pet">Start the Process</Link>
          </button>
        </section>
      </section>
      <Footer />
    </>
  );
}

export default TipsForrehouser;
