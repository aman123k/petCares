import React from "react";

import Footer from "../../components/Footer";

import dakota from "../../images/dakota.png";
import harly from "../../images/harly.png";
import henry from "../../images/henry.png";
import salem from "../../images/salem.png";
import thumper from "../../images/thumper.png";
import turker from "../../images/turker.png";
import Header from "../../components/Header";
import { Link } from "react-router-dom";

function Testimonialsfromadopters() {
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
              src={dakota}
              alt=""
              className="w-[50%]  max-[850px]:w-[80%] max-[650px]:w-full min-[1350px]:h-[28rem] object-contain"
            />
            <div className=" flex flex-col gap-3 max-[850px]:w-full w-[50%]">
              <h1 className=" font-bold text-2xl ">
                Here's what Ann said following the adoption of Dakota...
              </h1>
              <ul className=" mt-4 flex flex-col  gap-4 text-[#595959]">
                <li>
                  I stumbled upon PetCares thanks to a Facebook post shared by
                  someone in my network. Now, we are thrilled to welcome the
                  adorable Alfie into our family, and our gratitude towards
                  PetCares, especially Colleen, knows no bounds.
                </li>
                <li>
                  From the initial email I sent, I was met with prompt and
                  efficient responses. Colleen went above and beyond, ensuring
                  that the application process was smooth and hassle-free. The
                  transition was seamless, and Colleen's care and communication
                  were exemplary throughout.
                </li>
                <li>
                  Thank you immensely for facilitating such a positive and
                  enjoyable adoption experience. We couldn't be happier with our
                  decision.
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
                Here's what Ramona said following the adoption of Thumper...
              </h1>

              <ul className=" mt-4 flex flex-col  gap-4 text-[#595959]">
                <li>
                  After the loss of my beloved Frenchie in July, I strongly felt
                  the desire to provide another dog with a loving home,
                  especially to keep my other little dog, Dolly, company. After
                  searching for a while, I came across Thumper on PetCares, and
                  her adorable little face captured my heart.
                </li>
                <li>
                  I applied for Thumper, and I was pleasantly surprised by how
                  smoothly everything went. Colleen was wonderful, and the
                  communication was excellent.
                </li>
                <li>
                  Following the home check meeting, we arranged a 'meet and
                  greet' with Thumper, and it's been two weeks since we brought
                  her home. She's settling in beautifully and already feels like
                  part of the family!
                </li>
                <li>
                  I wholeheartedly recommend PetCares to anyone looking to adopt
                  a pet.
                </li>
              </ul>
            </div>
            <img
              src={thumper}
              alt=""
              className="w-[50%]  max-[850px]:w-[80%] max-[650px]:w-full min-[1350px]:h-[28rem] object-contain"
            />
          </section>
          <section
            className=" flex mx-14 px-5 mt-16 gap-4 pb-12 items-center border-b max-[650px]:mt-10
       max-[850px]:flex-col-reverse max-[850px]:w-full max-[850px]:mx-3 max-[650px]:mx-0 max-[650px]:px-0 "
          >
            <img
              src={turker}
              alt=""
              className="w-[50%]  max-[850px]:w-[80%] max-[650px]:w-full min-[1350px]:h-[28rem] object-contain"
            />
            <div className=" flex flex-col gap-3 max-[850px]:w-full w-[50%]">
              <h1 className=" font-bold text-2xl ">
                Here's what Tucker's adopter, Pinki said...
              </h1>

              <ul className=" mt-4 flex flex-col  gap-4 text-[#595959]">
                <li>
                  We are overjoyed to have welcomed our beloved dog into our
                  family through PetCares. The adoption process was friendly and
                  straightforward, with PetRehomer ensuring a thorough check
                  before allowing us to bring our furry friend home.
                </li>
                <li>
                  In just a few days, we arranged for the collection of our dog
                  from their temporary home. The process was seamless and
                  hassle-free.
                </li>
                <li>
                  Since coming home, our dog took a little time to settle in and
                  build their confidence. However, they have quickly become a
                  cherished member of our family, alternating between playful
                  explorations in our yard and seeking affectionate cuddles.
                </li>
                <li>
                  We are grateful to PetCares for their support and for
                  including our dog in their neuter scheme, covering 75% of the
                  cost. Our dog has brought immense joy and love into our lives,
                  exceeding all our expectations.
                </li>
                <li>
                  Thank you, PetCares, for helping us find our perfect canine
                  companion!
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
                From Sheena, Salem's new pet parent
              </h1>

              <ul className=" mt-4 flex flex-col  gap-4 text-[#595959]">
                <li>
                  Following the passing of our last cat nearly a year ago, we
                  felt ready to open our hearts and home to another feline
                  companion. That's when we found Salem through PetCares, and
                  she has brought immeasurable joy into our lives.
                </li>
                <li>
                  Salem is the epitome of adorableness, and she fits into our
                  family perfectly. We specifically sought out an older cat, and
                  she is exactly what we were looking for. Welcoming her into
                  our home feels incredibly rewarding, and we are grateful to
                  petCares for facilitating this wonderful adoption.
                </li>
                <li>
                  We cannot thank PetCares enough for connecting us with Smokey.
                  We highly recommend their services to anyone looking to find
                  their perfect furry friend.
                </li>
              </ul>
            </div>
            <img
              src={salem}
              alt=""
              className="w-[50%]  max-[850px]:w-[80%] max-[650px]:w-full min-[1350px]:h-[28rem] object-contain"
            />
          </section>
          <section
            className=" flex mx-14 px-5 mt-16 gap-4 pb-12 border-b  items-center max-[650px]:mt-10
       max-[850px]:flex-col-reverse max-[850px]:w-full max-[850px]:mx-3 max-[650px]:mx-0 max-[650px]:px-0 "
          >
            <img
              src={harly}
              alt=""
              className="w-[50%]  max-[850px]:w-[80%] max-[650px]:w-full min-[1350px]:h-[28rem] object-contain"
            />
            <div className=" flex flex-col gap-3 max-[850px]:w-full w-[50%]">
              <h1 className=" font-bold text-2xl ">
                From Lawrence & Carrie, Harly's new family
              </h1>
              <ul className=" mt-4 flex flex-col  gap-4 text-[#595959]">
                <li>
                  We've been following PetCares since its inception, back when
                  it was just an idea. Knowing the Founder personally, I had
                  full confidence in the quality of service PetCares would
                  provide.
                </li>
                <li>
                  After adopting Harly from PetCares, we've maintained regular
                  contact and eagerly await Harly's weekly updates, which I
                  accompany with my doodles on Saturdays (check out "Carrie’s
                  Column" on the PetCares Facebook page).
                </li>
                <li>
                  The adoption process was seamless, and we are thrilled to have
                  found IvyBird and welcomed her into our lives. She has settled
                  in wonderfully, and our experience with PetCares has been
                  nothing short of excellent!
                </li>
              </ul>
            </div>
          </section>
          <section
            className=" flex mx-14 border-b  px-5 mt-16 gap-4 pb-12  items-center max-[650px]:mt-10
       max-[850px]:flex-col max-[850px]:w-full max-[850px]:mx-3 max-[650px]:mx-0 max-[650px]:px-0 "
          >
            <div className=" flex flex-col gap-3 max-[850px]:w-full w-[50%]">
              <h1 className=" font-bold text-2xl ">
                From Chals, Henry's new adopter
              </h1>
              <ul className=" mt-4 flex flex-col  gap-4 text-[#595959]">
                <li>
                  "I'm ecstatic! He's lovely, an absolute dream, and couldn't be
                  more loved. Such a happy boy, bringing so much joy!"
                </li>
                <li>I’m delighted with the service, Thank you PetCares."</li>
              </ul>
            </div>
            <img
              src={henry}
              alt=""
              className="w-[50%]  max-[850px]:w-[80%] max-[650px]:w-full min-[1350px]:h-[28rem] object-contain"
            />
          </section>
          <button
            className="mt-10 text-white bg-[#5E9E3C] px-7 py-4 hover:bg-white hover:border-[#5E9E3C] hover:border hover:text-[#5E9E3C] tracking-wide font-semibold
   w-max ml-[50%] translate-x-[-50%] rounded-lg"
          >
            <Link to="/adopt-a-pet">Search for pet</Link>
          </button>
        </section>
      </section>
      <Footer />
    </>
  );
}

export default Testimonialsfromadopters;
