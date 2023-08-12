import React, { useState } from "react";

export default function Features() {
  const [active, setActive] = useState(0);
  const functionalities = [
    {
      title: "Add Memory",
      description: "Store your precious memories securely.",
    },
    {
      title: "Personal AI",
      description: "Experience a tailored AI experience.",
    },
    {
      title: "Learn",
      description: "Discover new insights from your memories.",
    },
    {
      title: "Experiences",
      description: "Relive your moments with enhanced visuals.",
    },
    {
      title: "Identify",
      description: "Tag and identify moments with smart recognition.",
    },
  ];

  return (
    <div>
      <p className="text-[40px] text-center font-[600] text-deep-cerulean-dark py-[50px]">
        Connect your memories
      </p>
      <div className="flex gap-5 justify-center mb-5">
        {functionalities.map((func, index) => (
          <FeatureButton
            key={index}
            index={index}
            active={active}
            setActive={setActive}
            text={func.title}
          />
        ))}
      </div>
      <div className="pt-5 flex justify-center">
        <div className="w-2/3">
          <div className="bg-[url('../src/Pages/Features/bg.png')] bg-center bg-cover h-[500px] relative">
            <ActiveContent func={functionalities[active]} />
          </div>
        </div>
      </div>
    </div>
  );
}

const FeatureButton = ({ index, active, setActive, text }) => {
  return (
    <button
      onClick={() => setActive(index)}
      className={`transition-transform transform hover:scale-105 bg-[#FFA900] hover:bg-[#FFA100] text-[18px] font-[400] text-black px-10 py-2 rounded-md shadow-md ${
        active === index && "font-[700] bg-[#FFA000]"
      }`}
    >
      {text}
    </button>
  );
};

const ActiveContent = ({ func }) => {
  return (
    <div className="absolute inset-0 flex flex-col justify-center items-center p-4">
      <h2 className="text-[40px] font-[600] mb-4">{func.title}</h2>
      <p className="text-white text-center">{func.description}</p>
    </div>
  );
};
