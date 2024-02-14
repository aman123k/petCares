import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import dog from "../../images/adopting-dog-single.jpg";
import behaviours from "../../images/cannot-adopt.jpg";
import chooseAdop from "../../images/choseAdop.jpeg";
import v_5 from "../../images/5-vet.jpg";
import confirm from "../../images/confirm.jpeg";
import giveDogBg from "../../images/desktop-banner-dog-light-green.jpg";
import { RxDotFilled } from "react-icons/rx";
import { Link } from "react-router-dom";

function GiveUpDog() {
  return (
    <>
      <Header />
      <section className=" object-cover relative text-white font-Nunito ">
        <section className=" py-24 mb-28 px-20 max-[650px]:mb-0 max-[400px]:py-14 max-[400px]:px-8">
          <h1 className="font-semibold tracking-wider text-lg max-[650px]:text-sm">
            <Link to="/">Home </Link>/ Giving Up A Dog
          </h1>
          <h3 className=" font-bold text-4xl tracking-wide max-[650px]:text-2xl mt-3">
            Giving Up A Dog
          </h3>
        </section>
        <img
          src={giveDogBg}
          alt=""
          className=" object-cover absolute top-0 -z-10 w-full  h-96 max-[650px]:h-56"
        />
      </section>
      <section
        className=" font-Nunito flex flex-col bg-[#F9F9F9]  max-[650px]:w-full
    max-[850px]:gap-6 max-[650px]:gap-0 pb-16 max-[650px]:px-8  max-[950px]:px-10"
      >
        <section
          className=" flex mx-14 px-5 mt-20 gap-4 max-[850px]:pb-8 pb-16 items-center border-b max-[650px]:mt-10
       max-[850px]:flex-col-reverse max-[850px]:w-full max-[850px]:mx-3 max-[650px]:mx-0 max-[650px]:px-0 "
        >
          <img
            src={dog}
            alt=""
            className="w-[50%] max-[650px]:w-full  max-[850px]:w-[80%] min-[1350px]:h-[28rem] object-contain mix-blend-multiply"
          />
          <div className=" flex flex-col gap-3 max-[850px]:w-full w-[50%] text-[#595959]">
            <h1 className=" font-bold text-3xl ">Giving up a dog</h1>
            <p className=" ">
              Sometimes, prioritizing a pet's well-being means making tough
              choices. If rehoming your dog is necessary, PetRehomer provides a
              non-judgmental, safe, and simple platform to help find them a
              caring home.
            </p>
            <ul className=" mt-4 flex flex-col  gap-4 ">
              <h1 className=" font-bold text-2xl ">
                Why use PetCares to give up your dog?{" "}
              </h1>
              <li className="  ">
                Rehome your dog with PetCares while retaining control. Connect
                directly with pre-screened adopters, giving you the authority to
                choose the best home for your dog, ensuring a secure and
                personalized process.
              </li>
              <li className=" ">
                After selecting an adopter, meet them when they collect your
                dog. If things feel off or you reconsider, you can back out
                anytime until handing your dog over, ensuring flexibility and
                comfort in the rehoming process.
              </li>
              <li className="  ">
                As a direct rehoming service, your dog transitions directly from
                your home to their new one. This avoids stays in rescue centers
                or shelters, minimizing stress and anxiety for many dogs.
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
              Giving up a dog with behavioural problems
            </h1>
            <p className=" ">
              For dogs exhibiting uncontrollable, aggressive, or dangerous
              behavior, refrain from listing on PetRehomer. Contact a rescue
              center instead to ensure proper handling and appropriate care for
              the dog's needs.
            </p>
            <p>
              We urge honesty and transparency when listing a dog on PetRehouser
              regarding their history and behavior. If uncertain about rehoming
              due to mild behavioral issues or quirks, reach out for a
              conversation to explore the best approach for your dog.
            </p>
            <ul className=" mt-4 flex flex-col  gap-4 ">
              <h1 className=" font-bold text-2xl ">
                Giving up a dog in an emergency
              </h1>
              <li className="  ">
                Regrettably, we cannot accommodate emergency rehoming as we lack
                rescue center facilities. If your dog is in immediate danger or
                poses a threat, promptly contact a rescue center once safety
                allows for urgent assistance, ensuring the well-being and
                appropriate care for the dog.
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
          className=" flex mx-14 px-5 mt-20 gap-4 pb-16 items-center max-[850px]:pb-8 border-b max-[650px]:mt-10
       max-[850px]:flex-col-reverse max-[850px]:w-full max-[850px]:mx-3 max-[650px]:mx-0 max-[650px]:px-0 "
        >
          <img
            src={chooseAdop}
            alt=""
            className="w-[50%] max-[650px]:w-full  max-[850px]:w-[70%] min-[1350px]:h-[28rem] object-contain mix-blend-multiply"
          />
          <div className=" flex flex-col gap-3 max-[850px]:w-full w-[50%] text-[#595959]">
            <h1 className=" font-bold text-3xl ">
              Giving up a dog temporarily
            </h1>
            <ul className=" mt-4 flex flex-col  gap-4 ">
              <li className="  ">
                Considering temporary or foster care due to uncertainty? If not
                prepared for permanent rehoming or expecting changes, take time
                to decide. Dogs thrive on stability; frequent moves can cause
                stress and confusion. Prioritize their well-being, ensuring
                decisions align with their long-term comfort and happiness.
              </li>
              <li className="  ">
                Upon the adopter's departure with the dog, they legally assume
                ownership. Refrain from making significant decisions hastily;
                ensure certainty before proceeding to guarantee the best outcome
                for all involved.
              </li>
            </ul>
          </div>
        </section>
        <section
          className=" flex mx-14 px-5 mt-20 gap-4 pb-16 items-center border-b max-[650px]:mt-10
       max-[850px]:flex-col max-[850px]:pb-8 max-[850px]:w-full max-[850px]:mx-3 max-[650px]:mx-0 max-[650px]:px-0 "
        >
          <div className=" flex flex-col gap-3 max-[850px]:w-full w-[50%] text-[#595959]">
            <h1 className=" font-bold text-3xl ">
              Giving up an old dog or a dog with health problems
            </h1>
            <p>
              We understand financial constraints or health issues may impact
              caring for a dog. PetCares welcomes dogs of all ages, abilities,
              and health conditions, emphasizing honesty about age and
              condition. This ensures accurate information for potential
              adopters to make informed decisions, promoting the best welfare
              for dogs in need of rehoming.
            </p>
            <ul className=" mt-4 flex flex-col  gap-3 ">
              <li className="  ">
                Many are open to adopting senior or chronically ill dogs.
                Provide comprehensive information in your dog's profile, and
                answer adopters' questions truthfully. This ensures a suitable
                match, guaranteeing your dog finds a caring home with someone
                equipped to provide the necessary care and attention they
                deserve.
              </li>
              <li className="  ">
                Here are some things to include in your dog’s profile:
              </li>
              <li className=" flex justify-start text-[#595959] gap-2">
                <RxDotFilled className="text-3xl text-[#96C830] flex-shrink-0" />
                Names of any illnesses, conditions or allergies
              </li>
              <li className=" flex justify-start text-[#595959] gap-2">
                <RxDotFilled className="text-3xl text-[#96C830] flex-shrink-0" />
                Medication name, dose and cost
              </li>
              <li className=" flex justify-start text-[#595959] gap-2">
                <RxDotFilled className="text-3xl text-[#96C830] flex-shrink-0" />
                Name of any operations they’ve had or need
              </li>
              <li className=" flex justify-start text-[#595959] gap-2">
                <RxDotFilled className="text-3xl text-[#96C830] flex-shrink-0" />
                Cost of vets bills
              </li>
              <li className=" flex justify-start text-[#595959] gap-2">
                <RxDotFilled className="text-3xl text-[#96C830] flex-shrink-0" />
                Special dietary requirements
              </li>
              <li className=" flex justify-start text-[#595959] gap-2">
                <RxDotFilled className="text-3xl text-[#96C830] flex-shrink-0" />
                Details of how their condition affects their day-to-day life.
                For example: do they find it hard to run or get upstairs?
              </li>
            </ul>
          </div>
          <img
            src={v_5}
            alt=""
            className="w-[50%]  max-[850px]:w-[70%] max-[650px]:w-full min-[1350px]:h-[28rem] object-contain mix-blend-multiply"
          />
        </section>
        <section
          className=" flex mx-14 px-5 mt-20 gap-4 pb-16 max-[850px]:pb-8 items-center  max-[650px]:mt-10
       max-[850px]:flex-col-reverse max-[850px]:w-full max-[850px]:mx-3 max-[650px]:mx-0 max-[650px]:px-0 "
        >
          <img
            src={confirm}
            alt=""
            className="w-[50%]  max-[850px]:w-[70%] max-[650px]:w-full min-[1350px]:h-[28rem] object-contain mix-blend-multiply"
          />
          <div className=" flex flex-col gap-3 max-[850px]:w-full w-[50%] text-[#595959]">
            <h1 className=" font-bold text-3xl ">Next steps</h1>
            <p>
              If you’re ready to{" "}
              <Link to="/rehouse-a-pet" className="text-[#95C830]">
                give up your dog
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
        </section>
        <button
          className="mt-10 text-white bg-[#5E9E3C] px-7 py-4 hover:bg-white hover:border-[#5E9E3C] hover:border hover:text-[#5E9E3C] tracking-wide font-semibold
       w-max ml-[50%] translate-x-[-50%] rounded-lg"
        >
          <Link to="/rehouse-a-pet">Rehouse my Dog</Link>
        </button>
      </section>

      <Footer />
    </>
  );
}

export default GiveUpDog;
