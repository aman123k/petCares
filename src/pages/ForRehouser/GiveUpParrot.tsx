import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import parrotBanner from "../../images/parrotBanner-removebg-preview.png";
import parrot from "../../images/parrot.png";
import { RxDotFilled } from "react-icons/rx";
import confirm from "../../images/confirm.jpeg";
import behaviours from "../../images/cannot-adopt.jpg";
import catHelth from "../../images/6-vet.jpg";

function GiveUpParrot() {
  return (
    <>
      <Header />
      <section
        className="bg-[#5FA505] h-96 max-[650px]:h-56 flex overflow-hidden justify-between max-[650px]:justify-normal
       object-cover relative text-white font-Nunito "
      >
        <section
          className=" py-24 px-20  mb-28  max-[650px]:pl-8 max-[650px]:pr-0
        max-[650px]:py-14 max-[650px]:mb-0 max-[400px]:py-14 max-[650px]:absolute"
        >
          <h1 className="font-semibold tracking-wider text-lg max-[650px]:text-sm">
            <Link to="/">Home </Link>/ Giving Up A Parrot
          </h1>
          <h3 className=" font-bold text-4xl tracking-wide max-[650px]:text-2xl mt-2">
            Giving Up A Parrot
          </h3>
        </section>
        <img
          src={parrotBanner}
          alt=""
          className=" object-cover max-[850px]:w-[55%] py-8 max-[650px]:py-0 max-[650px]:w-full "
        />
      </section>
      <section
        className=" font-Nunito flex flex-col bg-[#F9F9F9]  max-[650px]:w-full
    max-[850px]:gap-6 max-[650px]:gap-0 pb-16 max-[650px]:px-8 max-[950px]:px-10"
      >
        <section
          className=" flex mx-14 px-5 mt-20 gap-6 justify-between max-[850px]:pb-8 pb-16 items-center border-b max-[650px]:mt-10
       max-[850px]:flex-col-reverse max-[850px]:w-full max-[850px]:mx-3 max-[650px]:mx-0 max-[650px]:px-0 "
        >
          <img
            src={parrot}
            alt=""
            className="w-[50%] max-[650px]:w-full  max-[850px]:w-[70%] min-[1350px]:h-[28rem] object-contain mix-blend-multiply"
          />
          <div className=" flex flex-col gap-3 max-[850px]:w-full w-[50%] text-[#595959]">
            <h1 className=" font-bold text-3xl ">Giving up a Parrot</h1>
            <p className=" ">
              Life's unpredictability may lead to rehoming your cherished
              parrot. PetCares stands ready to assist, offering support and
              guidance through this challenging process, ensuring the well-being
              of your feathered companion.
            </p>
            <ul className=" mt-4 flex flex-col  gap-4 ">
              <h1 className=" font-bold text-2xl ">
                Why use PetCares to give up your parrot?
              </h1>
              <li className="  ">
                Empower yourself with PetCares to choose the perfect home for
                your parrot. Connect directly with pre-screened adopters, ask
                questions, and ensure the best match for your feathered
                companion.
              </li>
              <li className=" ">
                Choose PetCares to facilitate a direct transition for your
                parrot from your home to their new one, avoiding temporary stays
                in rescue centers. Prioritize your parrot's well-being,
                minimizing stress and disruption during this process.
              </li>
            </ul>
          </div>
        </section>
        <section
          className=" flex mx-14 px-5 mt-20 gap-4 pb-16 max-[850px]:pb-8 items-center border-b max-[650px]:mt-10
       max-[850px]:flex-col max-[850px]:w-full max-[850px]:mx-3 max-[650px]:mx-0 max-[650px]:px-0 "
        >
          <div className=" flex flex-col gap-3 max-[850px]:w-full w-[50%] text-[#595959]">
            <h1 className=" font-bold text-3xl mb-2">
              Giving up your parrot in an emergency
            </h1>
            <p className=" ">
              If urgent rehoming is necessary due to danger, reach out to a
              rescue center for your parrot. PetCares doesn't have facilities to
              accommodate animals. Prioritize safety by connecting with
              dedicated rescue organizations.
            </p>

            <ul className=" mt-4 flex flex-col  gap-4 ">
              <h1 className=" font-bold text-2xl ">
                Giving up your parrot temporarily
              </h1>
              <li>
                Unfortunately, we can’t help you find temporary care for your
                parrot.
              </li>
              <li className="  ">
                If you anticipate changes or are not ready to part with your
                parrot permanently, carefully weigh your decision before listing
                on PetCares. Once handed over, retrieval isn't possible. Take
                time if considering temporary care, ensuring certainty before
                listing.
              </li>
            </ul>
          </div>
          <img
            src={behaviours}
            alt=""
            className="w-[50%] max-[650px]:w-full  max-[850px]:w-[70%] min-[1350px]:h-[28rem] object-contain mix-blend-multiply"
          />
        </section>

        <section
          className=" flex  mr-10 px-5 mt-20 gap-9  pb-16 items-center border-b max-[650px]:mt-10
       max-[850px]:flex-col-reverse max-[850px]:pb-8 max-[850px]:w-full max-[850px]:mx-3 max-[650px]:mx-0 max-[650px]:px-0 "
        >
          <img
            src={catHelth}
            alt=""
            className="w-[50%]  max-[850px]:w-[70%] max-[650px]:w-full min-[1350px]:h-[28rem] object-contain mix-blend-multiply"
          />
          <div className=" flex flex-col gap-3 max-[850px]:w-full w-[50%] text-[#595959]">
            <h1 className=" font-bold text-3xl ">
              Giving up an old parrot or a parrot with health problems
            </h1>
            <p>
              PetCares welcomes adopters for senior or health-challenged
              parrots. Whether aging or with chronic conditions, your feathered
              friend can still find a caring home through our platform.
            </p>
            <ul className=" mt-4 flex flex-col text-[#595959] gap-3 ">
              <li className="  ">
                To make sure your rabbit is adopted by someone who can give them
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
       max-[850px]:flex-col max-[850px]:w-full max-[850px]:mx-3 max-[650px]:mx-0 max-[650px]:px-0 "
        >
          <div className=" flex flex-col gap-3 max-[850px]:w-full w-[50%] text-[#595959]">
            <h1 className=" font-bold text-3xl ">Next steps</h1>
            <p>
              If you’re ready to{" "}
              <Link to="/rehouse-a-pet" className="text-[#95C830]">
                giving up your parrot
              </Link>{" "}
              , take a look at these guides we’ve created to help support you
              through the process:
            </p>
            <ul className=" mt-4 flex flex-col  gap-3 text-[#96C830]">
              <Link to="/for_rehousers">
                <li className=" flex justify-start gap-2">
                  <RxDotFilled className="text-3xl  flex-shrink-0" />
                  How rehousing works
                </li>
              </Link>
              <Link to="/for_rehousers">
                <li className=" flex justify-start gap-2">
                  <RxDotFilled className="text-3xl  flex-shrink-0" />
                  FAQs for rehousers
                </li>
              </Link>
              <Link to="/tips-for-rehouser">
                <li className=" flex justify-start gap-2">
                  <RxDotFilled className="text-3xl  flex-shrink-0" />
                  Tips for rehousers
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
          <Link to="/rehouse-a-pet">Rehouse my Parrot</Link>
        </button>
      </section>
      <Footer />
    </>
  );
}

export default GiveUpParrot;
