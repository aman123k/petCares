import React from "react";

function ConfirmHelper({ agr, agr2 }: { agr: string | number; agr2: string }) {
  return (
    <>
      <div className=" flex flex-col gap-2">
        <span className=" text-[#777777]  font-semibold">{agr2}</span>
        <span className=" bg-white px-3.5 py-3 rounded-lg drop-shadow-md">
          {agr}
        </span>
      </div>
    </>
  );
}

export default ConfirmHelper;
