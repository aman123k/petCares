import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import createProFile from "../../images/create-profile-single.jpeg";
import profileApr from "../../images/adopting-dog-single.jpg";
import chooseAdop from "../../images/finalise-adoption-single.jpeg";
import adopterHouse from "../../images/chat_single.jpeg";
import confirm from "../../images/confirm.jpeg";
import { RxDotFilled } from "react-icons/rx";
import { Link } from "react-router-dom";

function ForAdopter() {
  return (
    <>
      <Header />
      <section className=" bg-[#F9F9F9] max-[650px]:py-8 py-14 px-10 max-[650px]:px-5">
        <section
          className=" font-Nunito flex flex-col bg-white drop-shadow-xl max-[650px]:w-full max-[650px]:rounded-3xl
        max-[850px]:gap-4 max-[650px]:gap-0 rounded-[32px] py-16 px-8 max-[650px]:py-10"
        >
          <section className="max-[650px]:text-start text-center px-[17%] mb-4 max-[850px]:px-5 max-[650px]:px-0">
            <h1 className="font-bold text-[1.5rem] text-[#252525]">
              How It Works For Adopters
            </h1>
            <p className=" mt-2 text-[#595959]">
              To guide you through adoption, and so you know what to expect,
              we’ve broken the process down into five steps.
            </p>
          </section>
          <section
            className=" flex mx-14 px-5 mt-16 gap-4 pb-12 items-center border-b max-[650px]:mt-10
           max-[850px]:flex-col-reverse max-[850px]:w-full max-[850px]:mx-3 max-[650px]:mx-0 max-[650px]:px-0 "
          >
            <img
              src={createProFile}
              alt=""
              className="w-[50%]  max-[850px]:w-[80%] max-[650px]:w-full min-[1350px]:h-[28rem] object-contain"
            />
            <div className=" flex flex-col gap-3 max-[850px]:w-full w-[50%]">
              <h1 className=" font-bold text-2xl ">
                1. Create your profile and search for a pet
              </h1>

              <ul className=" mt-4 flex flex-col  gap-4">
                <li className=" flex items-center text-[#595959] gap-2 max-[650px]:items-start ">
                  <RxDotFilled className="text-3xl text-[#96C830] flex-shrink-0" />
                  Set up your profile (including photos) in minutes
                </li>
                <li className=" flex items-center text-[#595959] gap-2 max-[650px]:items-start ">
                  <RxDotFilled className="text-3xl text-[#96C830] flex-shrink-0" />
                  Describe your home and routine so rehomers can see if it’s
                  right for their pet
                </li>
                <li className=" flex items-center text-[#595959] gap-2 max-[650px]:items-start ">
                  <RxDotFilled className="text-3xl text-[#96C830] flex-shrink-0" />
                  Start your search!
                </li>
              </ul>
            </div>
          </section>
          <section
            className=" flex mx-14 px-5 mt-8 max-[650px]:gap-8  pb-12 items-center border-b gap-3
           max-[850px]:flex-col max-[850px]:w-full max-[850px]:mx-3 max-[650px]:mx-0 max-[650px]:px-0"
          >
            <div className=" flex flex-col gap-3 w-[50%] max-[850px]:w-full">
              <h1 className=" font-bold text-2xl ">
                2. Let us know when you find a pet you’re interested in
              </h1>
              <p className=" font-semibold  text-[16px]">
                When you find a pet you’re interested in…
              </p>
              <ul className=" mt-4 flex flex-col  gap-4">
                <li className=" flex items-center text-[#595959] gap-2 max-[650px]:items-start ">
                  <RxDotFilled className="text-3xl text-[#96C830] flex-shrink-0" />
                  Make your application using our online enquiry service
                </li>
                <li className=" flex items-center text-[#595959] gap-2 max-[650px]:items-start ">
                  <RxDotFilled className="text-3xl text-[#96C830] flex-shrink-0" />
                  If we think you’re a good match, we’ll approve your
                  application and profile, and pass it on to the rehouser
                </li>
                <li className=" flex items-center text-[#595959] gap-2 max-[650px]:items-start ">
                  <RxDotFilled className="text-3xl text-[#96C830] flex-shrink-0" />
                  If we need to ask for more information at this stage we’ll
                  contact you
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
            className=" flex mx-14 px-5 mt-8  gap-16 pb-12 items-center border-b
           max-[850px]:flex-col-reverse max-[850px]:w-full max-[850px]:mx-3 max-[650px]:mx-0 max-[650px]:px-0"
          >
            <img
              src={chooseAdop}
              alt=""
              className="w-[50%]  max-[850px]:w-[80%] max-[650px]:w-full min-[1350px]:h-[28rem] object-contain"
            />
            <div className=" flex flex-col gap-3 w-[50%] max-[850px]:w-full">
              <h1 className=" font-bold text-2xl ">
                3. The rehomer will review your application
              </h1>
              <ul className=" mt-4 flex flex-col  gap-4">
                <li className=" flex items-center text-[#595959] gap-2 max-[650px]:items-start ">
                  <RxDotFilled className="text-3xl text-[#96C830] flex-shrink-0" />
                  The rehouser will decide if they want to take your application
                  to the next stage.
                </li>
                <li className=" flex items-center text-[#595959] gap-2 max-[650px]:items-start ">
                  <RxDotFilled className="text-3xl text-[#96C830] flex-shrink-0" />
                  If so, you’ll need to pay a refundable adoption fee to reserve
                  the pet. If the adoption falls through, you’ll get all your
                  money back.
                </li>
                <li className=" flex items-center text-[#595959] gap-2 max-[650px]:items-start ">
                  <RxDotFilled className="text-3xl text-[#96C830] flex-shrink-0" />
                  A member of our team will contact you to discuss next steps
                  and answer any questions you may have.
                </li>
              </ul>
            </div>
          </section>
          <section
            className=" flex mx-14 px-5 mt-8  gap-14 pb-12 items-center border-b
           max-[850px]:flex-col max-[850px]:w-full max-[850px]:mx-3 max-[650px]:mx-0 max-[650px]:px-0"
          >
            <div className=" flex flex-col gap-3 w-[50%] max-[850px]:w-full">
              <h1 className=" font-bold text-2xl ">
                4. Have a home check and chat to the rehouser
              </h1>
              <p className=" font-semibold  text-[16px]">
                A home check helps us make sure your living environment is right
                for this pet. Chatting to the rehomer gives you more chance to
                decide if you and this pet are a good match.
              </p>
              <ul className=" mt-4 flex flex-col  gap-4">
                <li className=" flex items-center text-[#595959] gap-2 max-[650px]:items-start">
                  <RxDotFilled className="text-3xl text-[#96C830] flex-shrink-0" />
                  We’ll let you know if your home check is to be done in-person
                  or online. Home checks for rabbits are always done online.
                </li>
                <li className=" flex items-center text-[#595959] gap-2 max-[650px]:items-start">
                  <RxDotFilled className="text-3xl text-[#96C830] flex-shrink-0" />
                  You can chat with the rehomer using our online messaging
                  service. We suggest you ask lots of questions about the pet’s
                  personality, diet, health and habits.
                </li>
                <li className=" flex items-center text-[#595959] gap-2 max-[650px]:items-start">
                  <RxDotFilled className="text-3xl text-[#96C830] flex-shrink-0" />
                  We use the results of the home check to make our
                  recommendations to the rehomer.
                </li>
                <li className=" flex items-center text-[#595959] gap-2 max-[650px]:items-start">
                  <RxDotFilled className="text-3xl text-[#96C830] flex-shrink-0" />
                  Equally, if you change your mind or don’t think you can give
                  this pet the home they need, now is a good time to say!
                </li>
              </ul>
            </div>
            <img
              src={adopterHouse}
              alt=""
              className="w-[50%]  max-[850px]:w-[80%] max-[650px]:w-full min-[1350px]:h-[28rem] object-contain"
            />
          </section>
          <section
            className=" flex mx-20 px-3 mt-8  gap-14 pb-12 items-center border-b
           max-[850px]:flex-col-reverse  max-[850px]:w-full max-[850px]:mx-3 max-[650px]:mx-0 max-[650px]:px-0"
          >
            <img
              src={confirm}
              alt=""
              className="w-[50%]  max-[850px]:w-[80%] max-[650px]:w-full min-[1350px]:h-[28rem] object-contain"
            />
            <div className=" flex flex-col gap- w-[50%] max-[850px]:w-full">
              <h1 className=" font-bold text-2xl ">5. Adopt your new pet</h1>
              <p className=" font-semibold  text-[16px]">
                If the rehouser wants you to adopt their pet…
              </p>
              <ul className=" mt-4 flex flex-col  gap-4">
                <li className=" flex items-center text-[#595959] gap-2 max-[650px]:items-start">
                  <RxDotFilled className="text-3xl text-[#96C830] flex-shrink-0" />
                  They'll send you a message
                </li>
                <li className=" flex items-center text-[#595959] gap-2 max-[650px]:items-start">
                  <RxDotFilled className="text-3xl text-[#96C830] flex-shrink-0" />
                  Get in touch with the rehomer to arrange to meet and collect
                  the pet (you may wish to visit the pet more than once)
                </li>
                <li className=" flex items-center text-[#595959] gap-2 max-[650px]:items-start ">
                  <RxDotFilled className="text-3xl text-[#96C830] flex-shrink-0" />
                  As soon as you collect the pet, you become their legal owner.
                  So make sure they’re the right pet for you before taking them
                  home.
                </li>
                <li className=" flex items-center text-[#595959] gap-2 max-[650px]:items-start ">
                  <RxDotFilled className="text-3xl text-[#96C830] flex-shrink-0" />
                  Take your pet to their new home!
                </li>
              </ul>
            </div>
          </section>
          <section className="max-[650px]:text-start text-center px-[17%] mb-4 max-[850px]:px-5 max-[650px]:px-0 mt-8 flex flex-col gap-2">
            <h1 className=" font-semibold">
              HOW MUCH DOES IT COST TO ADOPT A PET?
            </h1>
            <p className="text-[#595959]">
              The adoption fees charged by PetRehomer are used to help our
              registered charity fund the cost of operating the rehoming website
              and the provision of our post adoption advice and support
            </p>
            <span className="font-semibold text-lg text-[#595959]">
              Our adoption fees are currently:
            </span>
            <div className="mt-5">
              <h3 className=" font-semibold">Dogs :</h3>
              <ul className=" flex flex-col gap-3 mt-2">
                <li>₹ 1000 (Puppies Less than 1 year)</li>
                <li>₹ 800 (Young Dogs, 1 to 4 years)</li>
                <li>₹ 400 (Adult Dogs, 5 to 9 years)</li>
                <li>₹ 200 (Senior Dogs, over 9 years)</li>
              </ul>
            </div>
            <div className="mt-5">
              <h3 className=" font-semibold">Cats :</h3>
              <ul className=" flex flex-col gap-3 mt-2">
                <li>₹ 800 (Kittens Less than 1 year)</li>
                <li>₹ 600 (Young Cats, 1 to 4 years)</li>
                <li>₹ 450 (Mature Cats, 5 to 9 years)</li>
                <li>₹ 200 (Senior Cats,over 9 years)</li>
              </ul>
            </div>
            <div className="mt-5">
              <h3 className=" font-semibold">Rabbits :</h3>
              <ul className=" flex flex-col gap-3 mt-2">
                <li>₹ 500 </li>
              </ul>
            </div>
            <div className="mt-5">
              <h3 className=" font-semibold">Parrots :</h3>
              <ul className=" flex flex-col gap-3 mt-2">
                <li>₹ 1200 </li>
              </ul>
            </div>
          </section>
          <button
            className="mt-10 text-white bg-[#5E9E3C] px-7 py-4 tracking-wider font-semibold
           w-max ml-[50%] translate-x-[-50%] rounded-lg "
          >
            <Link to="/adopt-a-pet">Search for a Pet</Link>
          </button>
        </section>
      </section>
      <Footer />
    </>
  );
}

export default ForAdopter;
