import React from "react";

export default function Interview() {
  return (
    <>
      <div className="container mx-auto mt-8 px-32 py-20">
        <div className={"flex flex-col justify-center py-[50px]"}>
          <p className={"text-[40px] font-[600] text-center"}> Our Stories </p>
          <div className={"flex justify-center pt-5 gap-5"}>
            <div className={"bg-gradient-to-b from-[#ffc8a7] to-white h-[400px] w-[400px] shadow-lg p-8"}>
              <p className={"flex items-start h-1/2 text-[30px] font-[600]"}>
                I did blah blah blah blah blah
              </p>
              <p className={"flex items-end h-1/2 text-[18px] font-[400]"}>
                Thomas thomas
              </p>
            </div>
            <div className={"bg-gradient-to-b from-[#ffc8a7] to-white h-[400px] w-[400px] shadow-lg p-8"}>
              <p className={"flex items-start h-1/2 text-[30px] font-[600]"}>
                I did blah blah blah blah blah
              </p>
              <p className={"flex items-end h-1/2 text-[18px] font-[400]"}>
                Thomas thomas
              </p>
            </div>
            <div className={"bg-gradient-to-b from-[#ffc8a7] to-white h-[400px] w-[400px] shadow-lg p-8"}>
              <p className={"flex items-start h-1/2 text-[30px] font-[600]"}>
                I did blah blah blah blah blah
              </p>
              <p className={"flex items-end h-1/2 text-[18px] font-[400]"}>
                Thomas thomas
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
