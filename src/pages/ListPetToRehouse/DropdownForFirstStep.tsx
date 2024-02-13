import React, { useContext } from "react";
import {
  timeToKeep,
  animals,
  RehosingReason,
} from "../../data/RehousingReason";
import { FaSortDown } from "react-icons/fa";
import { ListingContext } from "../../globleContext/ListingContext";

const AnimalDropDown = () => {
  const {
    setPet,
  }: { setPet?: React.Dispatch<React.SetStateAction<string>> | undefined } =
    useContext(ListingContext) || {};
  const { pet } = useContext(ListingContext) as {
    pet: string;
  };

  return (
    <>
      <div
        className=" w-[350px] max-[650px]:w-full relative bg-white rounded-lg flex 
justify-between items-center  drop-shadow-md shrink-0 max-[850px]:w-[250px]"
      >
        <select
          className=" outline-none w-full h-full capitalize py-3 px-3.5 bg-transparent appearance-none
          truncate"
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            setPet && setPet(e.currentTarget.value)
          }
          name=""
        >
          <option value="--select--" disabled selected>
            --select--
          </option>
          {animals.map((animal, index) => {
            if (animal === pet) {
              return (
                <option selected key={index} value={animal}>
                  {animal}
                </option>
              );
            } else {
              return (
                <option key={index} value={animal}>
                  {animal}
                </option>
              );
            }
          })}
        </select>
        <FaSortDown className=" flex-shrink-0 w-10" />
      </div>
    </>
  );
};
const ReasonDropDown = () => {
  const {
    setReason,
  }: { setReason?: React.Dispatch<React.SetStateAction<string>> | undefined } =
    useContext(ListingContext) || {};

  const { reason } = useContext(ListingContext) as {
    reason: string;
  };
  return (
    <>
      <div
        className=" w-[350px] max-[650px]:w-full relative bg-white rounded-lg flex 
justify-between items-center  drop-shadow-md shrink-0 max-[850px]:w-[250px]"
      >
        <select
          className=" outline-none w-full h-full capitalize py-3 px-3.5 bg-transparent appearance-none truncate"
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            setReason && setReason(e.currentTarget.value)
          }
          name=""
        >
          <option value="--select--" disabled selected>
            --select--
          </option>
          {RehosingReason.map((r, index) => {
            if (r === reason) {
              return (
                <option selected key={index} value={r}>
                  {r}
                </option>
              );
            } else {
              return (
                <option key={index} value={r}>
                  {r}
                </option>
              );
            }
          })}
        </select>
        <FaSortDown className=" w-10 flex-shrink-0" />
      </div>
    </>
  );
};
const TimeDropDown = () => {
  const {
    setTime,
  }: { setTime?: React.Dispatch<React.SetStateAction<string>> | undefined } =
    useContext(ListingContext) || {};

  const { time } = useContext(ListingContext) as {
    time: string;
  };
  return (
    <>
      <div
        className=" w-[350px] max-[650px]:w-full relative bg-white rounded-lg flex 
justify-between items-center  drop-shadow-md shrink-0 max-[850px]:w-[250px]"
      >
        <select
          className=" outline-none w-full h-full capitalize py-3 px-3.5 bg-transparent appearance-none truncate"
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            setTime && setTime(e.currentTarget.value)
          }
          name=""
        >
          <option value="--select--" disabled selected>
            --select--
          </option>
          {timeToKeep.map((t, index) => {
            if (t === time) {
              return (
                <option selected key={index} value={t}>
                  {t}
                </option>
              );
            } else {
              return (
                <option key={index} value={t}>
                  {t}
                </option>
              );
            }
          })}
        </select>
        <FaSortDown className=" w-10 flex-shrink-0" />
      </div>
    </>
  );
};

export { AnimalDropDown, ReasonDropDown, TimeDropDown };
