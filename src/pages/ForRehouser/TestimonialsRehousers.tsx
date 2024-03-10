import React from "react";

import Footer from "../../components/Footer";

import smokey from "../../images/smokey.png";
import oreo from "../../images/oreo.png";
import ganger from "../../images/granger.png";
import kitty from "../../images/kitty.png";
import blueberry from "../../images/blurbarry.png";
import Header from "../../components/Header";
import { Link } from "react-router-dom";

function TestimonialsRehousers() {
  return (
    <>
      <Header />
      <section className=" bg-[#F9F9F9] max-[650px]:py-8 py-12 px-10 max-[650px]:px-5">
        <section
          className=" font-Nunito flex flex-col bg-white drop-shadow-xl max-[650px]:w-full max-[650px]:rounded-3xl
        max-[850px]:gap-4 max-[650px]:gap-0 rounded-[32px] py-14 px-8 max-[650px]:py-10"
        >
          <section className="  text-center flex gap-2 flex-col text-[#595959]">
            <h1 className="font-bold text-3xl max-[650px]:text-3xl">
              Testimonials from Rehomers
            </h1>
            <p className="tracking-wide tex-[13px] ">
              We empathize with the challenges of parting with a pet. Our
              dedicated team of animal enthusiasts is committed to assisting you
              every
              <br /> step of the way. We strive to simplify the process,
              allowing you ton <br /> select your pet's new home with ease{" "}
              <br /> However, don't just take our word for it. Here are
              testimonials from individuals who have utilized our services to
              find their pet's new home.
            </p>
          </section>
          <section
            className=" flex mx-14 px-5 mt-16 gap-4 pb-12 items-center border-b max-[650px]:mt-10
           max-[850px]:flex-col-reverse max-[850px]:w-full max-[850px]:mx-3 max-[650px]:mx-0 max-[650px]:px-0 "
          >
            <img
              src={smokey}
              alt=""
              className="w-[50%]  max-[850px]:w-[80%] max-[650px]:w-full min-[1350px]:h-[28rem] object-contain"
            />
            <div className=" flex flex-col gap-3 max-[850px]:w-full w-[50%]">
              <h1 className=" font-bold text-2xl ">
                From Aman, Smokey's Rehouser
              </h1>
              <ul className=" mt-4 flex flex-col  gap-4 text-[#595959]">
                <li>
                  I extend my heartfelt gratitude to PetCares, particularly Eden
                  and Colleen, for their outstanding service and genuine concern
                  in rehousing my cat.
                </li>
                <li>
                  The experience was incredibly emotional and saddening for me.
                  However, PetCares alleviated my worries and ultimately brought
                  me immense relief. Within just two weeks, my cat found a
                  wonderful new home.
                </li>
                <li>
                  I am profoundly moved by PetCares's dedication and commitment
                  to pet welfare. I wholeheartedly recommend their services to
                  anyone in need of rehoming their beloved pets. Thank you once
                  again!
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
                From Khushboo, OREO's Rehouser
              </h1>

              <ul className=" mt-4 flex flex-col  gap-4 text-[#595959]">
                <li>
                  " I wanted to inform you that 'Pirate' OREO has successfully
                  transitioned to his new home, where he will be embraced by his
                  new family.
                </li>
                <li>We intend to maintain regular contact in the future.</li>
                <li>
                  I sincerely express my gratitude to you and the entire
                  PetCares team for ensuring a safe and seamless transition.
                </li>
                <li>
                  Warm regards,
                  <br />
                  Khushboo "
                </li>
              </ul>
            </div>
            <img
              src={oreo}
              alt=""
              className="w-[50%]  max-[850px]:w-[80%] max-[650px]:w-full min-[1350px]:h-[28rem] object-contain"
            />
          </section>
          <section
            className=" flex mx-14 px-5 mt-16 gap-4 pb-12 items-center border-b max-[650px]:mt-10
           max-[850px]:flex-col-reverse max-[850px]:w-full max-[850px]:mx-3 max-[650px]:mx-0 max-[650px]:px-0 "
          >
            <img
              src={ganger}
              alt=""
              className="w-[50%]  max-[850px]:w-[80%] max-[650px]:w-full min-[1350px]:h-[28rem] object-contain"
            />
            <div className=" flex flex-col gap-3 max-[850px]:w-full w-[50%]">
              <h1 className=" font-bold text-2xl ">
                From UV, Ganger's Rehouser
              </h1>

              <ul className=" mt-4 flex flex-col  gap-4 text-[#595959]">
                <li>
                  " I must commend you for providing an exceptional service. I
                  am thoroughly impressed with the entire system. It's evident
                  how paramount the welfare of the animals is and the emphasis
                  placed on ensuring a harmonious match for both pet and
                  adopter.
                </li>
                <li>
                  I will certainly recommend PetCares to anyone considering pet
                  adoption.
                </li>
                <li>
                  Best regards, <br /> Phil "
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
                From Jaanvi, Kitty's Rehouser
              </h1>

              <ul className=" mt-4 flex flex-col  gap-4 text-[#595959]">
                <li>" Hello, I'm Jaanvi,</li>
                <li>
                  In my search to rehome my kitten Hazel, I discovered PetCares.
                  I must say, from the beginning to the end, the service was
                  exceptional. I received all the necessary information along
                  the way, keeping me informed at every stage.
                </li>
                <li>
                  Within just 2 weeks, Hazel found herself in a lovely new home,
                  and I couldn't be happier for her. I wholeheartedly recommend
                  PetRehomer to anyone in need of pet rehoming services. x "
                </li>
              </ul>
            </div>
            <img
              src={kitty}
              alt=""
              className="w-[50%]  max-[850px]:w-[80%] max-[650px]:w-full min-[1350px]:h-[28rem] object-contain"
            />
          </section>
          <section
            className=" flex mx-14 border-b  px-5 mt-16 gap-4 pb-12  items-center max-[650px]:mt-10
           max-[850px]:flex-col-reverse max-[850px]:w-full max-[850px]:mx-3 max-[650px]:mx-0 max-[650px]:px-0 "
          >
            <img
              src={blueberry}
              alt=""
              className="w-[50%]  max-[850px]:w-[80%] max-[650px]:w-full min-[1350px]:h-[28rem] object-contain"
            />
            <div className=" flex flex-col gap-3 max-[850px]:w-full w-[50%]">
              <h1 className=" font-bold text-2xl ">
                From Sukhdeep, Blueberry's Rehouser
              </h1>
              <ul className=" mt-4 flex flex-col  gap-4 text-[#595959]">
                <li>Hello PetCares Team,</li>
                <li>
                  I wanted to take a moment to express my heartfelt gratitude
                  for your assistance and support in rehoming my beloved parrot,
                  Blueberry.
                </li>
                <li>
                  The decision to rehouse Blueberry was incredibly difficult and
                  not one that I made lightly. I adore Blueberry dearly, and it
                  pained me to see him unhappy. I truly appreciate the kindness
                  and compassion you showed throughout the process, and for
                  helping me find a home where he can thrive.
                </li>
                <li>
                  I am delighted that Blueberry is now living with Emily. I
                  couldn't have wished for a better match or a more loving home
                  for him to go to. Though saying goodbye was bittersweet,
                  seeing him settle in so beautifully with Emily in such a short
                  time reassured me that prioritizing his well-being was the
                  right decision.
                </li>
                <li>
                  In addition to welcoming Blueberry into her home, Emily has
                  been incredibly kind to me and has graciously kept me updated
                  on Ezra's progress. This ongoing communication is something I
                  deeply appreciate and is a significant benefit of rehoming him
                  through PetCares.
                </li>
                <li>
                  Thank you immensely for helping Blueberry find his happiness.
                  Though he cannot express it himself, he is incredibly grateful
                </li>
                <li>
                  Best wishes, <br /> Sukhdeep
                </li>
              </ul>
            </div>
          </section>
          <button
            className="mt-10 text-white bg-[#5E9E3C] px-7 py-4 hover:bg-white hover:border-[#5E9E3C] hover:border hover:text-[#5E9E3C] tracking-wide font-semibold
       w-max ml-[50%] translate-x-[-50%] rounded-lg"
          >
            <Link to="/rehouse-a-pet">List my pet</Link>
          </button>
        </section>
      </section>
      <Footer />
    </>
  );
}

export default TestimonialsRehousers;
