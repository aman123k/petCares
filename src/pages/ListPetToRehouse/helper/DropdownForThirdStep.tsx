import React, { SetStateAction, useContext } from "react";
import { Characteristics, KeyFacts } from "../../../interface/interface";
import { ListingContext } from "../../../globalContext/ListingContext";
import { FaCaretDown } from "react-icons/fa6";

function PetName() {
  const { characteristics, handleChange } = useContext(ListingContext) as {
    characteristics: Characteristics;
    handleChange: (
      e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => void;
  };
  return (
    <div className=" flex flex-col gap-3">
      <span className=" text-[#777777] font-semibold ">
        Pet's Name <span className=" text-red-600 text-g">*</span>
      </span>
      <div>
        <input
          type="text"
          name="petName"
          value={characteristics?.petName}
          onChange={handleChange}
          className=" w-full px-3.5 py-3 rounded-lg"
        />
      </div>
    </div>
  );
}
function PetAge() {
  const { characteristics, handleChange } = useContext(ListingContext) as {
    characteristics: Characteristics;
    handleChange: (
      e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => void;
  };
  return (
    <div className=" flex flex-col gap-3">
      <span>
        Age(years) <span className=" text-red-600 text-lg">*</span>
      </span>
      <div>
        <input
          type="number"
          name="petAge"
          min={0}
          max={20}
          value={characteristics?.petAge}
          onChange={handleChange}
          className={` w-full px-3.5 py-3 rounded-lg ${
            characteristics?.petAge < 0 ? "outline-red-600" : ""
          } `}
        />
        {characteristics?.petAge < 0 ? (
          <p className="text-red-600 text-sm font-Nunito my-2">
            Please enter a value greater than or equal to 0.
          </p>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
function InputCard({
  Name,
  Data,
  label,
  preSelet,
}: {
  Name: string;
  Data: string[];
  label: string;
  preSelet: string;
}) {
  const { characteristics, setCharacteristics } = useContext(
    ListingContext
  ) as {
    characteristics: Characteristics;
    setCharacteristics: React.Dispatch<SetStateAction<object>>;
  };

  return (
    <>
      <div className=" flex flex-col gap-3 ">
        <span className=" text-[#777777] text-lg font-semibold ">
          {label} <span className=" text-red-600 ">*</span>
        </span>
        <div className=" w-full flex items-center bg-white rounded-lg  py-3  px-3.5 cursor-pointer">
          <select
            name={characteristics?.petSize}
            value={preSelet ? preSelet : "Select an option"}
            className=" appearance-none w-full bg-transparent capitalize outline-none cursor-pointer
           "
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
              setCharacteristics({
                ...characteristics,
                [Name]: e.target.value,
              });
            }}
          >
            <option selected disabled value="Select an option">
              Select an option
            </option>
            {Data.map((data, index) => {
              return (
                <option key={index} value={data}>
                  {data}
                </option>
              );
            })}
          </select>
          <FaCaretDown className=" flex-shrink-0" />
        </div>
      </div>
    </>
  );
}
function KeyFact({
  label,
  keyname,
  check,
}: {
  label: string;
  keyname: string;
  check: string;
}) {
  const { keyFact, setKeyFact } = useContext(ListingContext) as {
    keyFact: KeyFacts;
    setKeyFact: React.Dispatch<SetStateAction<object>>;
  };
  return (
    <>
      <div className=" flex justify-between text-[#777777] max-[650px]:flex-col">
        <span className=" text-lg font-semibold ">{label}</span>
        <div className=" flex gap-10 max-[650px]:gap-0 max-[650px]:justify-between max-[650px]:mt-2">
          {["yes", "no", "unknown"].map((key, index) => {
            return (
              <span key={index} className=" flex gap-2 ">
                <input
                  type="radio"
                  name={keyname}
                  className="cursor-pointer w-4"
                  checked={check === key}
                  id={`${key} ${keyname}`}
                  onChange={(e) =>
                    setKeyFact({
                      ...keyFact,
                      [keyname]: key,
                    })
                  }
                />
                <label htmlFor={`${key} ${keyname}`} className="cursor-pointer">
                  {key}
                </label>
              </span>
            );
          })}
        </div>
      </div>
    </>
  );
}
export { InputCard, PetName, PetAge, KeyFact };
