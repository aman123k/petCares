import React from "react";

function ThirdHelperContent() {
  return (
    <>
      <section
        className="text-[#777777] text-center justify-center flex items-center px-40 font-Nunito
       max-[650px]:px-10 gap-5 max-[950px]:px-20 max-[650px]:text-start flex-col my-8 max-[650px]:my-4"
      >
        <p>
          In this section, you will be providing information about your pet.
          Please take the time to complete this section as fully as possible.
          <span className=" font-bold">
            {" "}
            This information forms the basis for your pet's listing, and you
            want to be sure you attract the best adopters!
          </span>
        </p>
        <p>
          Please choose great photos, and upload any useful documents.{" "}
          <span className=" font-bold">Please be honest about your pet.</span>{" "}
          PetCares is here to help people responsibly rehouse their pets, and we
          encourage rehousers to be truthful when describing their pets.{" "}
        </p>
        <p>
          <span className=" font-bold">
            DO NOT INCLUDE ANY PERSONAL IDENTIFYING INFORMATION IN THE 'PETS{" "}
            <br />
          </span>
          STORY' SECTION (Once approved by us, your "pet's story" section will
          be visible to the public)
        </p>
        <p className=" font-bold">
          Please note - if your pet is less than one year old, please select the
          age as 0
        </p>
      </section>
    </>
  );
}

export default ThirdHelperContent;
