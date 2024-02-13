import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import createProFile from "../../images/create_profile.jpeg";
import profileApr from "../../images/profileApro.jpeg";
import chooseAdop from "../../images/choseAdop.jpeg";
import adopterHouse from "../../images/adopterHouse.jpeg";
import chatSingle from "../../images/chat_single.jpeg";
import confirm from "../../images/confirm.jpeg";
import { RxDotFilled } from "react-icons/rx";
import { Link } from "react-router-dom";

function ForRehouser() {
  return (
    <>
      <Header />
      <section className=" bg-[#F9F9F9] max-[650px]:py-8 py-14 px-10 max-[650px]:px-5">
        <section
          className=" font-Nunito flex flex-col bg-white drop-shadow-xl max-[650px]:w-full max-[650px]:rounded-3xl
        max-[850px]:gap-6 max-[650px]:gap-0 rounded-[32px] py-16 px-8 max-[650px]:py-10"
        >
          <section className="max-[650px]:text-start text-center px-[17%] mb-4 max-[850px]:px-5 max-[650px]:px-0">
            <h1 className="font-bold text-[1.5rem] text-[#252525]">
              How It Works For Rehousers
            </h1>
            <p className=" mt-2 text-[#595959]">
              Rehousing a pet can indeed be a challenging and emotional
              decision, but ensuring the well-being of the animal is crucial.
              Here's a general guide to help make the rehoming process as
              straightforward and safe as possible.
            </p>
          </section>
          <section
            className=" flex mx-14 px-5 mt-20 gap-4 pb-16 items-center border-b max-[650px]:mt-10
           max-[850px]:flex-col-reverse max-[850px]:w-full max-[850px]:mx-3 max-[650px]:mx-0 max-[650px]:px-0 "
          >
            <img
              src={createProFile}
              alt=""
              className="w-[50%]  max-[850px]:w-[80%] max-[650px]:w-full min-[1350px]:h-[28rem] object-contain"
            />
            <div className=" flex flex-col gap-3 max-[850px]:w-full w-[50%]">
              <h1 className=" font-bold text-2xl ">
                1. Create your pet's profile
              </h1>
              <p className=" font-semibold  text-[16px]">
                To attract the most suitable adopters, create a detailed profile
                of your pet. Make sure you include:
              </p>
              <ul className=" mt-4 flex flex-col text-[#595959] gap-4">
                <li className=" flex items-center gap-2">
                  <RxDotFilled className="text-3xl text-[#96C830] flex-shrink-0" />
                  Their breed, age, size, any health conditions, microchip
                  status and if they’ve been neutered.
                </li>
                <li className=" flex items-center gap-2">
                  <RxDotFilled className="text-3xl text-[#96C830] flex-shrink-0" />
                  Description of their personality, habits, likes and dislikes,
                  how much exercise they’re used to.
                </li>
                <li className=" flex items-center gap-2">
                  <RxDotFilled className="text-3xl text-[#96C830] flex-shrink-0" />
                  What sort of home they need. Could they potentially live with
                  other pets or children? Are they used to having a garden or
                  outdoor access?
                </li>
                <li className=" flex items-center gap-2">
                  <RxDotFilled className="text-3xl text-[#96C830] flex-shrink-0" />
                  Recent pictures. Use square or landscape images in .jpeg or
                  .jpg format.
                </li>
              </ul>
            </div>
          </section>
          <section
            className=" flex mx-14 px-5 mt-8 max-[650px]:gap-8  pb-14 items-center border-b gap-3
           max-[850px]:flex-col max-[850px]:w-full max-[850px]:mx-3 max-[650px]:mx-0 max-[650px]:px-0"
          >
            <div className=" flex flex-col gap-3 w-[50%] max-[850px]:w-full">
              <h1 className=" font-bold text-2xl ">
                2. Get your pet's profile approved
              </h1>
              <p className=" font-semibold  text-[16px]">
                To help keep everyone safe, all listings are subject to approval
                by the PetRehomer team. Before we post your pet’s profile on the
                site, we’ll:
              </p>
              <ul className=" mt-4 flex flex-col text-[#595959] gap-4">
                <li className=" flex items-center gap-2">
                  <RxDotFilled className="text-3xl text-[#96C830] flex-shrink-0" />
                  Check your pet’s profile thoroughly
                </li>
                <li className=" flex items-center gap-2">
                  <RxDotFilled className="text-3xl text-[#96C830] flex-shrink-0" />
                  If we’re happy, we’ll post your pet’s profile on the site
                </li>
                <li className=" flex items-center gap-2">
                  <RxDotFilled className="text-3xl text-[#96C830] flex-shrink-0" />
                  We may call you to clarify any points that we need to
                </li>
              </ul>
            </div>
            <img
              src={profileApr}
              alt=""
              className="w-[50%]  max-[850px]:w-[80%] max-[650px]:w-full max-[650px]:mt-3 min-[1350px]:h-[28rem] object-contain"
            />
          </section>
          <section
            className=" flex mx-14 px-5 mt-8  gap-16 pb-14 items-center border-b
           max-[850px]:flex-col-reverse max-[850px]:w-full max-[850px]:mx-3 max-[650px]:mx-0 max-[650px]:px-0"
          >
            <img
              src={chooseAdop}
              alt=""
              className="w-[50%] max-[850px]:w-[80%] max-[650px]:w-full min-[1350px]:h-[28rem] object-contain"
            />
            <div className=" flex flex-col gap-3 w-[50%] max-[850px]:w-full">
              <h1 className=" font-bold text-2xl ">
                3. Choose an adopter to take to the next stage
              </h1>
              <p className=" font-semibold  text-[16px]">
                To make the process safer, smoother and quicker, we review all
                applications for pets and rule out any that aren’t suitable.
              </p>
              <ul className=" mt-4 flex flex-col  gap-4">
                <li className=" flex items-center text-[#595959] gap-2">
                  <RxDotFilled className="text-3xl text-[#96C830] flex-shrink-0" />
                  We’ll let you know on your PetCares dashboard if we find any
                  potentially good matches.
                </li>
                <li className=" flex items-center text-[#595959] gap-2">
                  <RxDotFilled className="text-3xl text-[#96C830] flex-shrink-0" />
                  You review the shortlist then decide who you want to take to
                  the next stage, if anyone, and turn down the rest.
                </li>
              </ul>
            </div>
          </section>
          <section
            className=" flex mx-14 px-5 mt-8  gap-14 pb-14 items-center border-b
           max-[850px]:flex-col max-[850px]:w-full max-[850px]:mx-3 max-[650px]:mx-0 max-[650px]:px-0"
          >
            <div className=" flex flex-col gap-3 w-[50%] max-[850px]:w-full">
              <h1 className=" font-bold text-2xl ">
                4. The adopter reserves your pet and has a home check
              </h1>
              <p className=" font-semibold  text-[16px]">
                You let the adopter know you want to proceed with their
                application, then we….
              </p>
              <ul className=" mt-4 flex flex-col text-[#595959] gap-4">
                <li className=" flex items-center gap-2">
                  <RxDotFilled className="text-3xl text-[#96C830] flex-shrink-0" />
                  Ask them to reserve your pet by paying a fully refundable fee.
                  Once the funds have been received, no one else can apply for
                  your pet.
                </li>
                <li className=" flex items-center gap-2">
                  <RxDotFilled className="text-3xl text-[#96C830] flex-shrink-0" />
                  Arrange for them to have a home check to make sure their
                  living environment is suitable for your pet.
                </li>
                <li className=" flex items-center gap-2">
                  <RxDotFilled className="text-3xl text-[#96C830] flex-shrink-0" />
                  We use the results of the home check to make a recommendation.
                  If the adopter fails the home check, we’ll get in touch to
                  discuss it with you.
                </li>
              </ul>
            </div>
            <img
              src={adopterHouse}
              alt=""
              className="w-[50%] max-[850px]:w-[80%] max-[650px]:w-full min-[1350px]:h-[28rem] object-contain"
            />
          </section>
          <section
            className=" flex mx-14 px-5 mt-8  gap-14 pb-14 items-center border-b
           max-[850px]:flex-col-reverse max-[850px]:w-full max-[850px]:mx-3 max-[650px]:mx-0 max-[650px]:px-0"
          >
            <img
              src={chatSingle}
              alt=""
              className="w-[50%] max-[850px]:w-[80%] max-[650px]:w-full min-[1350px]:h-[28rem] object-contain"
            />
            <div className=" flex flex-col gap-3 w-[50%] max-[850px]:w-full">
              <h1 className=" font-bold text-2xl ">5. Chat with the adopter</h1>
              <p className=" font-semibold  text-[16px]">
                As soon as your pet is reserved, you can chat with the adopter
                directly using our messaging service.
              </p>
              <ul className=" mt-4 flex flex-col text-[#595959] gap-4">
                <li className=" flex items-center gap-2">
                  <RxDotFilled className="text-3xl text-[#96C830] flex-shrink-0" />
                  Feel free to ask lots of questions. You’re not locked into
                  anything at this stage, so it’s ok to change your mind if it
                  doesn’t feel right.
                </li>
                <li className=" flex items-center gap-2">
                  <RxDotFilled className="text-3xl text-[#96C830] flex-shrink-0" />
                  <p>
                    To keep all pets and humans safe,{" "}
                    <span className="font-semibold">
                      do not take the conversation off PetRehouser, share your
                      contact details or ask the adopter for theirs.
                    </span>
                  </p>
                </li>
                <li className=" flex items-center gap-2 mt-10">
                  <p>
                    {" "}
                    For more information, check out our{" "}
                    <Link to="/" className="text-[#85DB12]">
                      {" "}
                      FAQs{" "}
                    </Link>
                    and{" "}
                    <Link to="/tips-for-rehouser" className="text-[#85DB12]">
                      {" "}
                      tips for rehomers.{" "}
                    </Link>
                  </p>
                </li>
              </ul>
            </div>
          </section>
          <section
            className=" flex mx-20 px-3 mt-8  gap-14 pb-14 items-center border-b
           max-[850px]:flex-col max-[850px]:w-full max-[850px]:mx-3 max-[650px]:mx-0 max-[650px]:px-0"
          >
            <div className=" flex flex-col gap- w-[50%] max-[850px]:w-full">
              <h1 className=" font-bold text-2xl ">6. Confirm the Adoption</h1>
              <p className=" font-semibold  text-[16px]">
                When an adopter passes the home check…
              </p>
              <ul className=" mt-4 flex flex-col text-[#595959] gap-4">
                <li className=" flex items-center  gap-2">
                  <RxDotFilled className="text-3xl text-[#96C830] flex-shrink-0" />
                  Arrange for the adopter to meet the pet at your house.
                </li>
                <li className=" flex items-center  gap-2">
                  <RxDotFilled className="text-3xl text-[#96C830] flex-shrink-0" />
                  If everyone is happy on the day, the adopter can take the pet
                  home or you can agree to meet up again before finalising.
                </li>
                <li className=" flex items-center  gap-2 ">
                  <RxDotFilled className="text-3xl text-[#96C830] flex-shrink-0" />
                  If something doesn’t feel right, you don’t have to go through
                  with the adoption.
                </li>
                <li className=" flex items-center gap-2 ">
                  <RxDotFilled className="text-3xl text-[#96C830] flex-shrink-0" />
                  The adopter becomes the legal owner of your pet as soon as
                  they leave your house with the pet. So please make sure you’re
                  comfortable with everything before allowing them to take your
                  pet home.
                </li>
              </ul>
            </div>
            <img
              src={confirm}
              alt=""
              className="w-[50%]  max-[850px]:w-[80%] max-[650px]:w-full min-[1350px]:h-[28rem] object-contain"
            />
          </section>
          <button
            className="mt-10 text-white bg-[#5E9E3C] px-7 py-4 text-sm tracking-wide font-semibold
           w-max ml-[50%] translate-x-[-50%] rounded-lg"
          >
            <Link to="/rehouse-a-pet">Start the Process</Link>
          </button>
        </section>
      </section>
      <Footer />
    </>
  );
}

export default ForRehouser;
