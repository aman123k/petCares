import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import { RxDotFilled } from "react-icons/rx";
import guidelineBg from "../../images/guidelineBg.jpeg";
import adoptGuideImg from "../../images/if-you-want-to-adopt2-removebg-preview.png";
import notAdoptImg from "../../images/cannot-adopt.jpg";
import chooseAdop from "../../images/adopting-dog-single.jpg";
import cat from "../../images/adopting-cat-singlesmall.jpg";
import parrot from "../../images/parrot.png";
import rabbit from "../../images/rabbit.jpeg";

function AdoptionGuidelines() {
  return (
    <>
      <Header />
      <section className=" object-cover relative text-white font-Nunito ">
        <section className=" py-24 mb-28 px-20 max-[650px]:mb-0 max-[400px]:py-14 max-[400px]:px-8">
          <h1 className="font-semibold tracking-wider text-lg max-[650px]:text-sm">
            <Link to="/">Home </Link>/ Adoption Guide
          </h1>
          <h3 className=" font-bold text-4xl tracking-wide max-[650px]:text-2xl mt-3">
            Adoption Guide
          </h3>
        </section>
        <img
          src={guidelineBg}
          alt=""
          className=" object-cover absolute top-0 -z-10 w-full  h-96 max-[650px]:h-56"
        />
      </section>

      <section
        className=" font-Nunito flex flex-col bg-[#F9F9F9]  max-[650px]:w-full
        max-[850px]:gap-4 max-[650px]:gap-0 py-14 px-8 max-[650px]:py-10 max-[380px]:mt-12"
      >
        <section className="px-20 mb-4 flex  gap-3 flex-col max-[850px]:px-10 max-[650px]:px-0">
          <h1 className="font-bold text-4xl max-[650px]:text-3xl text-[#252525]">
            Animal Welfare Is Our Top Priority Our guide to adoption
          </h1>
          <p className=" mt-3 text-[#595959]">
            Every pet deserves to be safe, respected and loved. So we’re on a
            mission to make sure all pets in need of a home are adopted by the
            right people.
          </p>
          <p className="  text-[#595959]">
            Before starting the adoption process we recommend that{" "}
            <Link
              to="/are-you-ready-to-adopt-a-pet"
              className=" text-[#96C830]"
            >
              you check if you're ready{" "}
            </Link>
            and learn about how to properly care for your chosen pet. If you're
            sure you are set up to offer a good home, we'd love to help you find
            a pet that's right for you.
          </p>
          <p className=" text-[#595959]">
            Because pet welfare is always our priority, we’ve set out some
            rules. Some of these rules apply to everyone and some of them depend
            on the type of pet you want to adopt.
          </p>
          <p className="  text-[#595959]">
            As well as protecting pets, these rules will help you decide if
            you’re in the right position to adopt. If
          </p>
        </section>
        <section
          className=" flex px-5 mt-16 pb-12 items-center border-b max-[650px]:mt-10 bg-[#F9F9F9]
           max-[850px]:flex-col-reverse max-[850px]:w-full max-[850px]:mx-3 max-[650px]:mx-0 max-[650px]:px-0 "
        >
          <img
            src={adoptGuideImg}
            alt=""
            className="w-[50%] max-[850px]:w-full bg-blend-multiply max-[650px]:h-auto h-[32rem] min-[1350px]-h-[32rem] max-[850px]:mt-6 object-contain"
          />
          <div className=" flex flex-col gap-1.5 max-[850px]:w-full w-[50%]">
            <h1 className=" font-bold text-2xl ">
              If you want to adopt a pet through PetCares, you must…
            </h1>

            <ul className=" mt-4 flex flex-col text-[#595959] gap-2.5">
              <li className=" flex items-center gap-2">
                <RxDotFilled className="text-3xl text-[#96C830] flex-shrink-0" />
                Be at least 18 years old
              </li>
              <li className=" flex items-center gap-2">
                <RxDotFilled className="text-3xl text-[#96C830] flex-shrink-0" />
                Prove your identity with photo ID such as a driving license ,
                addharcard passport
              </li>
              <li className=" flex items-center gap-2">
                <RxDotFilled className="text-3xl text-[#96C830] flex-shrink-0" />
                Prove your home address with a utility bill, mortgage statement
                or similar official document from the past three months
              </li>
              <li className=" flex items-center gap-2">
                <RxDotFilled className="text-3xl text-[#96C830] flex-shrink-0" />
                Get permission from your landlord or check the terms of your
                lease before you start the adoption process to make sure you’re
                allowed a pet
              </li>
              <li className=" flex items-center gap-2">
                <RxDotFilled className="text-3xl text-[#96C830] flex-shrink-0" />
                Agree to having a home check
              </li>
              <li className=" flex items-center gap-2">
                <RxDotFilled className="text-3xl text-[#96C830] flex-shrink-0" />
                Agree to buy your pet appropriate food, equipment and shelter
              </li>
              <li className=" flex items-center gap-2">
                <RxDotFilled className="text-3xl text-[#96C830] flex-shrink-0" />
                Agree to continue with any training or behavioural
                rehabilitation
              </li>
              <li className=" flex items-center gap-2">
                <RxDotFilled className="text-3xl text-[#96C830] flex-shrink-0" />
                Agree to pay for veterinary care, regular flea and worm
                treatments, and neutering if the pet is old enough
              </li>
              <li className=" flex items-center gap-2">
                <RxDotFilled className="text-3xl text-[#96C830] flex-shrink-0" />
                Agree to care for your pet’s mental and physical health at all
                times
              </li>
              <li className=" flex items-center gap-2">
                <RxDotFilled className="text-3xl text-[#96C830] flex-shrink-0" />
                Seriously consider taking out pet insurance. We strongly
                encourage everyone to get their pets insured
              </li>
            </ul>
          </div>
        </section>
        <section
          className=" flex mx-14 px-5 mt-8 max-[650px]:gap-0  pb-12 items-center border-b gap-3
           max-[850px]:flex-col max-[850px]:w-full max-[850px]:mx-3 max-[650px]:mx-0 max-[650px]:px-0"
        >
          <div className=" flex flex-col gap-3 w-[50%] max-[850px]:w-full">
            <h1 className=" font-bold text-2xl ">
              You cannot adopt a pet through PetCares if…
            </h1>
            <ul className=" mt-4 flex flex-col text-[#595959] gap-2.5">
              <li className=" flex items-center gap-2">
                <RxDotFilled className="text-3xl text-[#96C830] flex-shrink-0" />
                You or anyone you live with has ever been convicted of an
                offence relating to animals
              </li>
              <li className=" flex items-center gap-2">
                <RxDotFilled className="text-3xl text-[#96C830] flex-shrink-0" />
                You own or live with an unneutered animal that’s the same
                species as the pet you want to adopt
              </li>
              <li className=" flex items-center gap-2">
                <RxDotFilled className="text-3xl text-[#96C830] flex-shrink-0" />
                You plan to use this pet for breeding, hunting, racing,
                fighting, entertainment or any other ‘non pet’ or illegal
                activity
              </li>
              <li className=" flex items-center gap-2">
                <RxDotFilled className="text-3xl text-[#96C830] flex-shrink-0" />
                The pet is a gift for someone else
              </li>
            </ul>
          </div>
          <img
            src={notAdoptImg}
            alt=""
            className="w-[50%] max-[650px]:w-full max-[650px]:h-auto h-[30rem] max-[850px]:w-[80%] max-[650px]:mt-3 mix-blend-multiply min-[1350px]-h-[32rem] object-contain"
          />
        </section>
        <section
          className=" flex mx-14 px-5 mt-8  gap-16 pb-12 items-center border-b
           max-[850px]:flex-col-reverse max-[850px]:w-full max-[850px]:mx-3 max-[650px]:mx-0 max-[650px]:px-0"
        >
          <img
            src={chooseAdop}
            alt=""
            className="w-[50%] max-[650px]:w-full max-[850px]:w-[80%] max-[650px]:h-auto h-[30rem] mix-blend-multiply min-[1350px]-h-[32rem] object-contain"
          />
          <div className=" flex flex-col gap-3 w-[50%] max-[850px]:w-full">
            <h1 className=" font-bold text-2xl ">Rules for adopting a dog</h1>
            <p className="text-lg text-[#595959] font-semibold">
              If you want to adopt a dog through PetCares , you must…
            </p>
            <ul className=" mt-4 flex flex-col text-[#595959]  gap-2.5">
              <li className=" flex items-center gap-2">
                <RxDotFilled className="text-3xl text-[#96C830] flex-shrink-0" />
                Have enough space for them to live inside. You’ll fail the home
                check if we suspect you plan to chain or tether them up outside.
                In rare cases, it may be better for a certain breed to live
                outside but we’ll discuss this with you if needed
              </li>
              <li className=" flex items-center gap-2">
                <RxDotFilled className="text-3xl text-[#96C830] flex-shrink-0" />
                Be able to give them the amount of exercise they need
              </li>
              <li className=" flex items-center gap-2">
                <RxDotFilled className="text-3xl text-[#96C830] flex-shrink-0" />
                Be able to let them outside to go to the toilet regularly
              </li>
              <li className=" flex items-center gap-2">
                <RxDotFilled className="text-3xl text-[#96C830] flex-shrink-0" />
                Make sure they’re not left on their own for longer than they can
                cope with. The maximum is usually four hours but for many dogs,
                it’s less
              </li>
              <li className=" flex items-center gap-2">
                <RxDotFilled className="text-3xl text-[#96C830] flex-shrink-0" />
                Not crate or confine them for long periods of time
              </li>
              <li className=" flex items-center text-[#595959] gap-2">
                <RxDotFilled className="text-3xl text-[#96C830] flex-shrink-0" />
                Never use shock collars or anti-bark collars
              </li>
            </ul>
            <p className="mt-3">
              If you are sure that adopting a dog is for you, please also take a
              look at our guidelines,
              <Link to="/preparing-for-your-dog" className="text-[#5FA604]">
                {" "}
                Preparing For Your New Dog .
              </Link>
            </p>
          </div>
        </section>
        <section
          className=" flex mx-14 px-5 mt-8  gap-16 pb-12 items-center border-b
           max-[850px]:flex-col max-[850px]:w-full max-[850px]:mx-3 max-[650px]:mx-0 max-[650px]:px-0"
        >
          <div className=" flex flex-col gap-3 w-[50%] max-[850px]:w-full">
            <h1 className=" font-bold text-2xl ">Rules for adopting a cat</h1>
            <p className="text-lg text-[#595959] font-semibold">
              If you want to adopt a cat through PetCares, you must…
            </p>
            <ul className=" mt-4 flex flex-col text-[#595959] gap-4">
              <li className=" flex items-center gap-2">
                <RxDotFilled className="text-3xl text-[#96C830] flex-shrink-0" />
                Not live on a busy road, unless you’re adopting an indoor cat.
              </li>
              <li className=" flex items-center gap-2">
                <RxDotFilled className="text-3xl text-[#96C830] flex-shrink-0" />
                Allow the cat to have outdoor access if this is what they’re
                used to. If you don’t have a cat flap, you’ll need to let them
                outside regularly
              </li>
              <li className=" flex items-center gap-2">
                <RxDotFilled className="text-3xl text-[#96C830] flex-shrink-0" />
                Allow the cat to have outdoor access if this is what they’re
                used to. If you don’t have a cat flap, you’ll need to let them
                outside regularly
              </li>
              <li className=" flex items-center gap-2">
                <RxDotFilled className="text-3xl text-[#96C830] flex-shrink-0" />
                Not own or live in a house with a dog or other pet that isn’t
                used to cats
              </li>
            </ul>
            <p>
              If you are sure that adopting a cat is for you, please also take a
              look at our guidelines,
              <Link to="/preparing-for-your-cat" className="text-[#5FA604]">
                {" "}
                Preparing For Your New Cat.
              </Link>
            </p>
          </div>
          <img
            src={cat}
            alt=""
            className="w-[50%] max-[650px]:w-full  max-[850px]:w-[80%] max-[650px]:h-auto h-[30rem] mix-blend-multiply min-[1350px]-h-[32rem] object-contain"
          />
        </section>
        <section
          className=" flex mx-14 px-5 mt-8  gap-16 pb-12 items-center border-b
           max-[850px]:flex-col-reverse max-[850px]:w-full max-[850px]:mx-3 max-[650px]:mx-0 max-[650px]:px-0"
        >
          <img
            src={parrot}
            alt=""
            className="w-[50%] max-[650px]:w-full  max-[850px]:w-[80%] max-[650px]:h-auto h-[30rem] mix-blend-multiply min-[1350px]-h-[32rem] object-contain"
          />
          <div className=" flex flex-col gap-3 w-[50%] max-[850px]:w-full">
            <h1 className=" font-bold text-2xl ">
              Rules for adopting a parrot
            </h1>
            <p className="text-lg text-[#595959] font-semibold">
              If you want to adopt a parrot through PetCares, you must…
            </p>
            <ul className=" mt-4 flex flex-col text-[#595959] gap-4">
              <li className=" flex items-center  gap-2">
                <RxDotFilled className="text-3xl text-[#96C830] flex-shrink-0" />
                Ensure that your living environment is safe for a parrot. Remove
                potential hazards and create a secure space to prevent accidents
                or injuries.
              </li>
              <li className=" flex items-center gap-2">
                <RxDotFilled className="text-3xl text-[#96C830] flex-shrink-0" />
                Parrots are generally kept indoors. Make sure you can provide a
                suitable indoor space with appropriate cage dimensions, perches,
                and environmental enrichment.
              </li>
              <li className=" flex items-center gap-2">
                <RxDotFilled className="text-3xl text-[#96C830] flex-shrink-0" />
                Parrots have unique dietary, social, and mental stimulation
                needs. Ensure that you are knowledgeable about the specific
                requirements of the parrot species you intend to adopt.
              </li>
              <li className=" flex items-center gap-2">
                <RxDotFilled className="text-3xl text-[#96C830] flex-shrink-0" />
                Not own or live in a house with a dog or other pet that isn’t
                used to parrots
              </li>
            </ul>
            <p>
              If you are sure that adopting a parrots is for you, please also
              take a look at our guidelines,
              <Link to="/preparing-for-your-parrot" className="text-[#5FA604]">
                {" "}
                Preparing For Your New Parrot.
              </Link>
            </p>
          </div>
        </section>
        <section
          className=" flex mx-14 px-5 mt-8  gap-16 pb-12 items-center border-b
           max-[850px]:flex-col max-[850px]:w-full max-[850px]:mx-3 max-[650px]:mx-0 max-[650px]:px-0"
        >
          <div className=" flex flex-col gap-3 w-[50%] max-[850px]:w-full">
            <h1 className=" font-bold text-2xl ">
              Rules for adopting a rabbit
            </h1>
            <p className="text-lg text-[#595959] font-semibold">
              If you want to adopt a rabbit through PetRehomer, you must…
            </p>
            <ul className=" mt-4 flex flex-col  gap-4">
              <li className=" flex items-center text-[#595959] gap-2">
                <RxDotFilled className="text-3xl text-[#96C830] flex-shrink-0" />
                Already have a rabbit or adopt two rabbits at the same time.
                They’re social creatures who need to have company
              </li>
              <li className=" flex items-center text-[#595959] gap-2">
                <RxDotFilled className="text-3xl text-[#96C830] flex-shrink-0" />
                Make sure the rabbit’s accommodation meets the minimum welfare
                standards. The more space your rabbit has, the better. At the
                absolute minimum, a pair of small-to-medium sized rabbits should
                have a space that’s at least 3m x 2m x 1m or 10ft x 3ft x 6ft
                (length x width x height).
              </li>
              <li className=" flex items-center text-[#595959] gap-2">
                <RxDotFilled className="text-3xl text-[#96C830] flex-shrink-0" />
                Send us photos and measurements of the rabbit’s accommodation
              </li>
              <li className=" flex items-center text-[#595959] gap-2">
                <RxDotFilled className="text-3xl text-[#96C830] flex-shrink-0" />
                Show proof that your existing rabbit has been neutered
              </li>
            </ul>
            <p>
              If you are sure that adopting a rabbit is for you, please also
              take a look at our guidelines,
              <Link to="/preparing-for-your-rabbit" className="text-[#5FA604]">
                {" "}
                Preparing For Your New Rabbit.
              </Link>
            </p>
          </div>
          <img
            src={rabbit}
            alt=""
            className="w-[50%]  max-[850px]:w-[80%] max-[650px]:h-auto h-[30rem] mix-blend-multiply min-[1350px]-h-[32rem] object-contain"
          />
        </section>

        <button
          className="mt-10 text-white bg-[#5E9E3C] px-7 py-4 tracking-wider font-semibold
           w-max ml-[50%] translate-x-[-50%] rounded-lg "
        >
          <Link to="/adopt-a-pet">Search for a Pet</Link>
        </button>
      </section>

      <Footer />
    </>
  );
}

export default AdoptionGuidelines;
