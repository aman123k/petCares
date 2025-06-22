import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import HallFrame from "../../images/tips-for-rehomers-single.jpg";

function ReadyToadop() {
  return (
    <>
      <Header />
      <section className=" bg-[#F9F9F9] max-[650px]:py-8 py-14 px-10 max-[650px]:px-5">
        <section
          className=" font-Nunito flex flex-col gap-6 bg-white drop-shadow-xl max-[650px]:w-full max-[650px]:rounded-3xl
        max-[850px]:gap-4 max-[650px]:gap-0 rounded-[32px] py-16 px-8 max-[650px]:py-10 text-[#595959] 
        min-[2000px]:ml-[50%] min-[2000px]:translate-x-[-50%]"
        >
          <section className=" flex-col flex justify-center max-[1050px]:px-28 max-[850px]:px-16 max-[650px]:px-3.5 px-56 gap-4 max-[]:">
            <h1 className=" text-center text-4xl text-[#595959] font-bold max-[650px]:text-2xl">
              Are you ready to adopt a pet?
            </h1>
            <img src={HallFrame} alt="" />
          </section>
          <section className=" flex-col flex justify-center max-[1050px]:px-28 max-[850px]:px-16 max-[650px]:px-3.5 px-56 gap-4 text-center  max-[]:">
            <h1 className=" text-center text-3xl text-[#595959] font-bold max-[650px]:text-xl max-[650px]:mt-5">
              Five things to consider before you apply for a pet
            </h1>
            <p className=" text-lg max-[650px]:text-sm">
              Adopting a pet is transformative. Ask these five questions to
              ensure readiness for this life-changing decision.
            </p>
          </section>
          <section className=" flex-col flex justify-center max-[1050px]:px-28 max-[850px]:px-16 max-[650px]:px-3.5 px-56 gap-6 mt-10 max-[]:">
            <div className="flex-col flex gap-4">
              <h1 className=" text-2xl text-[#0f0e0e] font-bold max-[650px]:text-xl">
                1. Is now the right time to adopt a pet?
              </h1>
              <p className="  break-words text-[17px] tracking-wide max-[650px]:text-sm">
                Pets are enduring commitments; a dog or cat may be part of your
                life for 15-20 years. Consider how they fit into your future,
                not just your current circumstances.
              </p>
              <p className="  break-words text-[17px] tracking-wide max-[650px]:text-sm">
                Plan major life changes, like having children, moving, or
                relationship shifts, before adopting a pet. Consider waiting
                until settled, or opt for giving an older pet a deserving loving
                home based on your timelines.
              </p>
            </div>
            <div className="flex-col flex gap-4">
              <h1 className=" text-2xl text-[#0f0e0e] font-bold mt-2 max-[650px]:text-xl">
                2. Can you afford to look after a pet?
              </h1>
              <p className="  break-words text-[17px] tracking-wide max-[650px]:text-sm">
                Pets entail significant financial commitment; many are rehomed
                due to owners' financial strains, causing distress. When it
                comes to money, make rational decisions. Acting from your head,
                not just your heart, ensures responsible pet ownership.
              </p>
              <p className="  break-words text-[17px] tracking-wide max-[650px]:text-sm">
                Consider the cumulative expenses of vet bills, food, grooming,
                spaying/neutering, microchipping, insurance, and pet-sitting.
                Honesty is crucial regarding your ability and willingness to
                cover these costs without risking financial strain. Responsible
                pet ownership requires a realistic assessment of ongoing
                expenses for the well-being of your pet.
              </p>
            </div>
            <div className="flex-col flex gap-4">
              <h1 className=" text-2xl text-[#0f0e0e] font-bold mt-2 max-[650px]:text-xl">
                3. How much time and attention can you give a pet?
              </h1>
              <p className="  break-words text-[17px] tracking-wide max-[650px]:text-sm">
                Pets, varying in demands, require daily time and attention.
                Regardless of their needs, consistent care and interaction are
                essential for their well-being.
              </p>
              <p className="  break-words text-[17px] tracking-wide max-[650px]:text-sm">
                Frequent work travel or extended absences from home may not
                align with adopting a pet. Even occasional travel demands
                arrangements for pet care. Ensure you're ready to find and, if
                needed, finance suitable care for your pet during work or
                occasional absences.
              </p>
            </div>
            <div className="flex-col flex gap-4">
              <h1 className=" text-2xl text-[#0f0e0e] font-bold mt-2 max-[650px]:text-xl">
                4. Are you ready for any hard times?
              </h1>
              <p className="  break-words text-[17px] tracking-wide max-[650px]:text-sm">
                Adopting a pet may pose initial challenges. Adjustments take
                time, and patience is essential for a harmonious transition for
                both pet and owner.
              </p>
              <p className="  break-words text-[17px] tracking-wide max-[650px]:text-sm">
                Your new pet may not grasp the changes or reasons for moving.
                They could feel confused, distressed, or even grieve. Allow time
                for them to settle, adapt to a new environment, and build
                comfort with new surroundings and people.
              </p>
              <p className="  break-words text-[17px] tracking-wide max-[650px]:text-sm">
                Expect challenges in the initial weeks or months of pet
                adoption, as it's a normal adjustment period. Willingness to
                embrace both ups and downs is crucial. If unprepared for the
                unpredictable nature of pet parenthood, it may not be the right
                choice. Consider the commitment and potential challenges before
                deciding to adopt.
              </p>
            </div>
            <div className="flex-col flex gap-4">
              <h1 className=" text-2xl text-[#0f0e0e] font-bold mt-2 max-[650px]:text-xl">
                5. Will your new pet fit in with other members of your
                household?
              </h1>
              <p className="  break-words text-[17px] tracking-wide max-[650px]:text-sm">
                Ensure a new pet fits into your household dynamics. All
                residents, human and pet alike, must be comfortable and
                well-behaved. Realistic expectations and compatibility are
                vital. Check for pet hair allergies and, if renting, obtain
                written landlord permission. Consider the dynamics,
                expectations, and permissions to guarantee a smooth integration
                of the new pet into your home.
              </p>
              <p className="  break-words text-[17px] tracking-wide max-[650px]:text-sm">
                If there are uncertainties, consider delaying the adoption until
                the situation is more certain and favorable.
              </p>
            </div>
            <div className="flex-col flex gap-4">
              <h1 className=" text-3xl text-[#0f0e0e] font-bold mt-2 max-[650px]:text-xl">
                And finally…. Are you ready to adopt a pet?
              </h1>
              <p className="  break-words text-[17px] tracking-wide max-[650px]:text-sm">
                Now you’ve asked yourself these five questions, it’s time to
                decide if you’re ready to welcome a pet into your life. If the
                answer is ‘yes’, then start searching now!
              </p>
              <p className="  break-words text-[17px] tracking-wide max-[650px]:text-sm">
                If the answer is ‘no’, you should be proud of yourself for being
                honest and realistic. Remember there’s no rush and you’ll
                probably be ready to adopt one day. And when you are, Pet
                PetRehome will be right here.
              </p>
            </div>
          </section>
          <button
            className="mt-10 text-white bg-[#5E9E3C] px-7 py-4 tracking-wider font-semibold
           w-max ml-[50%] translate-x-[-50%] rounded-lg "
          >
            <Link to="/adopt-a-pet">Browse available Pet</Link>
          </button>
        </section>
      </section>
      <Footer />
    </>
  );
}

export default ReadyToadop;
