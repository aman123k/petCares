import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import cateBanner from "../../images/catBanner.png";
import cat from "../../images/adopting-cat-singlesmall.jpg";
import { RxDotFilled } from "react-icons/rx";
import confirm from "../../images/confirm.jpeg";
import behaviors from "../../images/cannot-adopt.jpg";
import catHelth from "../../images/6-vet.jpg";

function GiveUpCat() {
  return (
    <>
      <Header />
      <section className=" object-cover relative text-white font-Nunito ">
        <section className=" py-24 mb-28 px-20 max-[650px]:mb-0 max-[400px]:py-14 max-[400px]:px-8">
          <h1 className="font-semibold tracking-wider text-lg max-[650px]:text-sm min-[2000px]:ml-[28%]">
            <Link to="/">Home </Link>/ Giving Up A Cat
          </h1>
          <h3 className=" font-bold text-4xl tracking-wide max-[650px]:text-2xl mt-3 min-[2000px]:ml-[28%]">
            Giving Up A Cat
          </h3>
        </section>
        <img
          src={cateBanner}
          alt=""
          className=" object-cover absolute top-0 -z-10 w-full  h-96 max-[650px]:h-56"
        />
      </section>
      <section
        className=" font-Nunito flex flex-col bg-[#F9F9F9]  max-[650px]:w-full
    max-[850px]:gap-6 max-[650px]:gap-0 pb-16 max-[650px]:px-8 max-[950px]:px-10"
      >
        <section
          className=" flex mx-14 px-5 mt-20 gap-4 max-[850px]:pb-8 pb-16 items-center border-b max-[650px]:mt-10
       max-[850px]:flex-col-reverse max-[850px]:w-full max-[850px]:mx-3 max-[650px]:mx-0 max-[650px]:px-0 
       min-[2000px]:ml-[50%] min-[2000px]:translate-x-[-50%] mix-blend-multiply"
        >
          <img
            src={cat}
            alt=""
            className="w-[50%] max-[650px]:w-full  max-[850px]:w-[70%] min-[1350px]:h-[28rem] object-contain mix-blend-multiply"
          />
          <div className=" flex flex-col gap-3 max-[850px]:w-full w-[50%] text-[#595959]">
            <h1 className=" font-bold text-3xl ">Giving up a cat</h1>
            <p className=" ">
              Life changes can sometimes necessitate tough decisions, such as
              giving up your cat. We understand the challenges involved in
              making such a decision, and our goal is to guide you through the
              re homing process with empathy and simplicity.
            </p>
            <ul className=" mt-4 flex flex-col  gap-4 ">
              <h1 className=" font-bold text-2xl ">
                Why use PetCares to give up your cat?
              </h1>
              <li className="  ">
                Empower yourself with PetCares: You decide your cat's next home.
                Your unique bond guides the perfect match. Choose confidently.
              </li>
              <li className=" ">
                Potential adopters, screened by PetCares, can message you.
                Review their profiles, ensuring a good fit for your cat. Engage
                in messaging and in-person meetings. Feel empowered; change your
                mind at any stage if uneasy. Your cat's well-being is the
                priority, and you retain control throughout the re homing
                process.
              </li>
              <li className="  ">
                Choose PetCares for a direct re homing service, avoiding rescue
                centers. Your cat transitions straight to a new home, bypassing
                temporary stays in catteries. Minimize disruptions, offering a
                smoother adjustment for a successful start in their new life.
              </li>
            </ul>
          </div>
        </section>
        <section
          className=" flex mx-14 px-5 mt-20 gap-4 pb-16 max-[850px]:pb-8 items-center border-b max-[650px]:mt-10
       max-[850px]:flex-col max-[850px]:w-full max-[850px]:mx-3 max-[650px]:mx-0 max-[650px]:px-0 
       min-[2000px]:ml-[50%] min-[2000px]:translate-x-[-50%] mix-blend-multiply"
        >
          <div className=" flex flex-col gap-3 max-[850px]:w-full w-[50%] text-[#595959]">
            <h1 className=" font-bold text-3xl mb-2">
              Giving up your cat in an emergency
            </h1>
            <p className=" ">
              If urgent re homing is necessary due to danger, contact a rescue
              center. PetCares lacks facilities; we can't accommodate animals.
              Prioritize safety through dedicated rescue organizations.
            </p>

            <ul className=" mt-4 flex flex-col  gap-4 ">
              <h1 className=" font-bold text-2xl ">
                Giving up your cat temporarily
              </h1>
              <li>
                Unfortunately, we can’t help you find temporary care for your
                cat.
              </li>
              <li className="  ">
                Take time if considering temporary care. If uncertain about
                giving up your cat or foreseeing a change, avoid rushing. Once
                rehomed, retrieval isn't possible. List only if you're certain.
              </li>
            </ul>
          </div>
          <img
            src={behaviors}
            alt=""
            className="w-[50%] max-[650px]:w-full  max-[850px]:w-[70%] min-[1350px]:h-[28rem] object-contain mix-blend-multiply"
          />
        </section>

        <section
          className=" flex mr-10 px-5 mt-20 gap-9 pb-16 items-center border-b max-[650px]:mt-10
       max-[850px]:flex-col-reverse max-[850px]:pb-8 max-[850px]:w-full max-[850px]:mx-3 max-[650px]:mx-0 max-[650px]:px-0 
       min-[2000px]:ml-[50%] min-[2000px]:translate-x-[-50%] mix-blend-multiply"
        >
          <img
            src={catHelth}
            alt=""
            className="w-[50%]  max-[850px]:w-[70%] max-[650px]:w-full min-[1350px]:h-[28rem] object-contain mix-blend-multiply"
          />
          <div className=" flex flex-col gap-3 max-[850px]:w-full w-[50%] text-[#595959]">
            <h1 className=" font-bold text-3xl ">
              Giving up an old cat or a cat with health problems
            </h1>
            <p>
              PetCares welcomes adopters for senior or health-challenged cats.
              Aging or with chronic conditions, your cat can still find a loving
              home through our platform.
            </p>
            <ul className=" mt-4 flex flex-col text-[#595959] gap-3 ">
              <li className="  ">
                To make sure your cat is adopted by someone who can give them
                the right care, please give lots of information in their profile
                – for example:
              </li>

              <li className=" flex justify-start  gap-2">
                <RxDotFilled className="text-3xl text-[#96C830] flex-shrink-0" />
                Names of any illnesses, conditions or allergies
              </li>
              <li className=" flex justify-start gap-2">
                <RxDotFilled className="text-3xl text-[#96C830] flex-shrink-0" />
                Medication name, dose and cost
              </li>
              <li className=" flex justify-start gap-2">
                <RxDotFilled className="text-3xl text-[#96C830] flex-shrink-0" />
                Name of any operations they’ve had or need
              </li>
              <li className=" flex justify-start gap-2">
                <RxDotFilled className="text-3xl text-[#96C830] flex-shrink-0" />
                Cost of vets bills
              </li>
              <li className=" flex justify-start gap-2">
                <RxDotFilled className="text-3xl text-[#96C830] flex-shrink-0" />
                Special dietary requirements
              </li>
              <li className=" flex justify-start gap-2">
                <RxDotFilled className="text-3xl text-[#96C830] flex-shrink-0" />
                Details of how their condition affects their day-to-day life.
                For example: do they find it hard to run or get upstairs?
              </li>
            </ul>
          </div>
        </section>
        <section
          className=" flex mx-14 px-5 mt-20 gap-4 pb-16 max-[850px]:pb-8 items-center  max-[650px]:mt-10
       max-[850px]:flex-col max-[850px]:w-full max-[850px]:mx-3 max-[650px]:mx-0 max-[650px]:px-0 
       min-[2000px]:ml-[50%] min-[2000px]:translate-x-[-50%] mix-blend-multiply"
        >
          <div className=" flex flex-col gap-3 max-[850px]:w-full w-[50%] text-[#595959]">
            <h1 className=" font-bold text-3xl ">Next steps</h1>
            <p>
              If you’re ready to{" "}
              <Link to="/rehouse-a-pet" className="text-[#95C830]">
                giving up your cat
              </Link>{" "}
              , take a look at these guides we’ve created to help support you
              through the process:
            </p>
            <ul className=" mt-4 flex flex-col  gap-3 text-[#96C830]">
              <Link to="/for_rehouses">
                <li className=" flex justify-start gap-2">
                  <RxDotFilled className="text-3xl  flex-shrink-0" />
                  How rehousing works
                </li>
              </Link>
              <Link to="/rehouses-faq">
                <li className=" flex justify-start gap-2">
                  <RxDotFilled className="text-3xl  flex-shrink-0" />
                  FAQs for rehouses
                </li>
              </Link>
              <Link to="/tips-for-rehouse">
                <li className=" flex justify-start gap-2">
                  <RxDotFilled className="text-3xl  flex-shrink-0" />
                  Tips for rehouses
                </li>
              </Link>
            </ul>
          </div>
          <img
            src={confirm}
            alt=""
            className="w-[50%]  max-[850px]:w-[70%] max-[650px]:w-full min-[1350px]:h-[28rem] object-contain mix-blend-multiply"
          />
        </section>
        <button
          className="mt-10 text-white bg-[#5E9E3C] px-7 py-4 hover:bg-white hover:border-[#5E9E3C] hover:border hover:text-[#5E9E3C] tracking-wide font-semibold
       w-max ml-[50%] translate-x-[-50%] rounded-lg"
        >
          <Link to="/rehouse-a-pet">Rehouse my Cat</Link>
        </button>
      </section>
      <Footer />
    </>
  );
}

export default GiveUpCat;
