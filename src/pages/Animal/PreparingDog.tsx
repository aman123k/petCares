import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { RxDotFilled } from "react-icons/rx";

import one_bed from "../../images/1-bed.jpg";
import food from "../../images/2-food.jpg";
import game from "../../images/3-toysnew.jpg";
import companion from "../../images/4-companion.jpg";
import register from "../../images/5-vet.jpg";
import { Link } from "react-router-dom";

function PreparingDog() {
  return (
    <>
      <Header />
      <section className=" bg-[#F9F9F9] max-[650px]:py-8 py-12 px-10 max-[650px]:px-5">
        <section
          className=" font-Nunito flex flex-col bg-white drop-shadow-xl max-[650px]:w-full max-[650px]:rounded-3xl
        max-[850px]:gap-4 max-[650px]:gap-0 rounded-[32px] py-16 px-8 max-[650px]:py-10"
        >
          <section className=" px-[17%] flex flex-col gap-4 mb-4 max-[850px]:px-5 max-[650px]:px-0 text-[#595959]">
            <h1 className="font-bold text-4xl max-[650px]:text-3xl">
              How to prepare for your new dog:
            </h1>
            <h3 className="font-bold text-3xl max-[650px]:text-2xl">
              5 things you must do
            </h3>
            <p className=" mt-3 text-base">
              Adopting a dog is thrilling, but it often entails significant life
              changes. To ease the transition and enhance your new dog's
              settling-in process, thorough preparation is crucial.
            </p>
            <p className=" mt-3 text-base">
              Besides the moral obligation to care for your new dog, there's a
              legal responsibility. The Animal Welfare Act mandates providing
              your dog with:
            </p>
            <ul className=" mt-4 flex flex-col  gap-2">
              <li className=" flex items-center text-[#595959] gap-2">
                <RxDotFilled className="text-3xl text-[#96C830] flex-shrink-0" />
                A suitable place to live
              </li>
              <li className=" flex items-center text-[#595959] gap-2">
                <RxDotFilled className="text-3xl text-[#96C830] flex-shrink-0" />
                A healthy diet and access to clean water
              </li>
              <li className=" flex items-center text-[#595959] gap-2">
                <RxDotFilled className="text-3xl text-[#96C830] flex-shrink-0" />
                The ability to behave normally
              </li>
              <li className=" flex items-center text-[#595959] gap-2">
                <RxDotFilled className="text-3xl text-[#96C830] flex-shrink-0" />
                Appropriate company
              </li>
              <li className=" flex items-center text-[#595959] gap-2">
                <RxDotFilled className="text-3xl text-[#96C830] flex-shrink-0" />
                Protection from pain, injury, suffering and disease
              </li>
            </ul>
            <p className=" mt-3 text-base">
              To prepare for the significant day and comprehend your legal
              duties as a dog owner, we've crafted this helpful 'to-do' list.
            </p>
          </section>
          <section
            className=" flex mx-14 px-5 mt-16 gap-4 pb-12 items-center border-b max-[650px]:mt-10
           max-[850px]:flex-col-reverse max-[850px]:w-full max-[850px]:mx-3 max-[650px]:mx-0 max-[650px]:px-0 "
          >
            <img
              src={one_bed}
              alt=""
              className="w-[50%]  max-[850px]:w-[80%] max-[650px]:w-full min-[1350px]:h-[28rem] object-contain"
            />
            <div className=" flex flex-col gap-3 max-[850px]:w-full w-[50%]">
              <h1 className=" font-bold text-2xl ">1. Invest in a good bed</h1>
              <ul className=" mt-4 flex flex-col  gap-4 text-[#595959]">
                <li>
                  Provide your dog with a cozy, clean resting space tailored to
                  their sleeping preferences. Inquire about their sleeping
                  habits from the adopter or choose a bed accommodating various
                  sleeping styles.
                </li>
                <li>
                  Select a comfortable, appropriately sized bed made from
                  dog-friendly materials. Ensure it's easy to clean and spacious
                  enough for your dog's turning ritual. Comfort and practicality
                  are key.
                </li>
                <li>
                  Place the bed in a clean, dry, and draught-free location. With
                  time, observe if your dog enjoys being at the center of
                  activity or prefers a quieter spot. Adjust accordingly for
                  their comfort.
                </li>
                <li>
                  If your dog is accustomed to crating, follow the same
                  guidelines. Avoid crating if unfamiliar; consult your vet or a
                  behavioral specialist before introducing crate training.
                </li>
              </ul>
            </div>
          </section>
          <section
            className=" flex mx-14 px-5 mt-16 gap-4 pb-12 items-center border-b max-[650px]:mt-10
           max-[850px]:flex-col max-[850px]:w-full max-[850px]:mx-3 max-[650px]:mx-0 max-[650px]:px-0 "
          >
            <div className=" flex flex-col gap-3 max-[850px]:w-full w-[50%]">
              <h1 className=" font-bold text-2xl ">
                2. Stock up on the right food
              </h1>

              <ul className=" mt-4 flex flex-col  gap-4 text-[#595959]">
                <li>
                  Ensure dogs have a healthy, balanced diet and constant access
                  to fresh water at all times.
                </li>
                <li>
                  The person you're adopting from will provide the current diet,
                  but consult your vet or a nutritionist for advice, as it may
                  need adjustment for appropriateness.
                </li>
                <li>
                  If changing your dog's food, do it gradually. Stock up on
                  their current food until consulting with your vet for a smooth
                  transition.
                </li>
              </ul>
            </div>
            <img
              src={food}
              alt=""
              className="w-[50%]  max-[850px]:w-[80%] max-[650px]:w-full min-[1350px]:h-[28rem] object-contain"
            />
          </section>
          <section
            className=" flex mx-14 px-5 mt-16 gap-4 pb-12 items-center border-b max-[650px]:mt-10
           max-[850px]:flex-col-reverse max-[850px]:w-full max-[850px]:mx-3 max-[650px]:mx-0 max-[650px]:px-0 "
          >
            <img
              src={game}
              alt=""
              className="w-[50%]  max-[850px]:w-[80%] max-[650px]:w-full min-[1350px]:h-[28rem] object-contain"
            />
            <div className=" flex flex-col gap-3 max-[850px]:w-full w-[50%]">
              <h1 className=" font-bold text-2xl ">3. Buy toys and games</h1>

              <ul className=" mt-4 flex flex-col  gap-4 text-[#595959]">
                <li>
                  Allow dogs to exhibit natural behaviors, such as walking,
                  playing, and chasing (within reason). Enable them to engage in
                  activities that align with their instincts.
                </li>
                <li>
                  Provide toys and games upon arrival to keep your dog happy,
                  active, and mentally stimulated. Bond and build a connection
                  through play, but ensure regular walks for their overall
                  well-being.
                </li>
              </ul>
            </div>
          </section>
          <section
            className=" flex mx-14 px-5 mt-16 gap-4 pb-12 items-center border-b max-[650px]:mt-10
           max-[850px]:flex-col max-[850px]:w-full max-[850px]:mx-3 max-[650px]:mx-0 max-[650px]:px-0 "
          >
            <div className=" flex flex-col gap-3 max-[850px]:w-full w-[50%]">
              <h1 className=" font-bold text-2xl ">
                4. Think about companionship
              </h1>

              <ul className=" mt-4 flex flex-col  gap-4 text-[#595959]">
                <li>
                  Ensure your dog has suitable companionship, whether human,
                  canine, or both. While sociability varies, avoid leaving any
                  dog alone regularly for extended periods.
                </li>
                <li>
                  Prepare for times your dog is alone by exploring options like
                  professional doggy day care, a reliable dog walker, or a pet
                  sitter based on your dog's needs and preferences.
                </li>
                <li>
                  If your new dog has separation anxiety, consult your vet or a
                  behavioral specialist, especially if you have information from
                  their previous owner.
                </li>
                <li>
                  Consider: If your dog will be alone frequently, adoption may
                  not be suitable. Ensure compatibility with your lifestyle and
                  ability to meet the needs of pet ownership.
                </li>
              </ul>
            </div>
            <img
              src={companion}
              alt=""
              className="w-[50%]  max-[850px]:w-[80%] max-[650px]:w-full min-[1350px]:h-[28rem] object-contain"
            />
          </section>
          <section
            className=" flex mx-14 px-5 mt-16 gap-4 pb-12 items-center max-[650px]:mt-10
           max-[850px]:flex-col-reverse max-[850px]:w-full max-[850px]:mx-3 max-[650px]:mx-0 max-[650px]:px-0 "
          >
            <img
              src={register}
              alt=""
              className="w-[50%]  max-[850px]:w-[80%] max-[650px]:w-full min-[1350px]:h-[28rem] object-contain"
            />
            <div className=" flex flex-col gap-3 max-[850px]:w-full w-[50%]">
              <h1 className=" font-bold text-2xl ">5. Register with a vet</h1>
              <ul className=" mt-4 flex flex-col  gap-4 text-[#595959]">
                <li>
                  Registering with a vet is the first and most important step to
                  protecting your dog from pain, injury, suffering and disease.
                </li>
                <li>
                  <Link to="/" className=" text-[#96C832]">
                    {" "}
                    Our vet, Harriet, has created this video{" "}
                  </Link>{" "}
                  to explain why it’s so important and what you can expect.
                </li>

                <li className=" mt-4">
                  Further information providing details of how to care for your
                  dog may be found here:
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

export default PreparingDog;
