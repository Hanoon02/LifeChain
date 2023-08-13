import React, { useState } from "react";

export default function Features() {
  const [active, setActive] = useState(0);
  const functionalities = [
    {
      title: "Memory Vault",
      description:
        "Safeguard cherished moments for a lifetime with secure archiving.",
      img1: "./addMemory.png",
      img2: "./addMemory2.png",
    },
    {
      title: "Learn",
      description:
        "Your personal assistant, tailored to understand and adapt uniquely to you.",
    },
    {
      title: "Personal AI",
      description:
        "Reflect and rediscover through conversations with a chatbot version of yourself.",
    },
    {
      title: "EmotionScape",
      description:
        "Dive into emotion-rich visuals and relive moments with enhanced immersion.",
    },
    {
      title: "Recognizer",
      description:
        "Bring moments to life by instantly recognizing and tagging cherished relationships.",
    },
  ];

  return (
    <div id={"features"}>
      <p className={'text-center text-[50px] pb-10 font-[500]'}>Make some memories</p>
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
        <div className="w-full px-[40px]">
          <div className=" bg-[url('../src/Pages/Features/img.png')] bg-center bg-cover h-[600px] relative">
            {active === 0 && (
              <div>
                <div className="w-full absolute flex justify-center items-center p-4">
                  <div className={"pt-[100px]"}>
                    <img
                      src={require("./addMemory.png")}
                      className={"image image-left w-[250px] h-[510px]"}
                      alt={"Add Memory"}
                    />
                  </div>
                  <div>
                    <img
                      src={require("./newMemory.png")}
                      className={"image image-right w-[250px] h-[510px]"}
                      alt={"Add Memory"}
                    />
                  </div>
                </div>
                <div className={"flex justify-center pt-[30px]"}>
                  <div className={"w-1/2 flex flex-col items-center"}>
                    <p className={"text-[40px] font-[600]"}>Memory Vault</p>
                    <p className={"text-[20px] font-[400] pt-[30px] italic"}>
                      Save your most precious memories in a way that is both
                      private and secure using blockchain technology.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {active === 1 && (
              <div>
                <div className="w-full absolute flex justify-center items-center p-4">
                  <div className={"pt-[100px]"}>
                    <img
                      src={require("./flashcard.png")}
                      className={"image image-left w-[250px] h-[510px]"}
                      alt={"Add Memory"}
                    />
                  </div>
                  <div>
                    <img
                      src={require("./quiz.png")}
                      className={"image image-right w-[250px] h-[510px]"}
                      alt={"Add Memory"}
                    />
                  </div>
                </div>
                <div className={"flex justify-center pt-[30px]"}>
                  <div className={"w-1/2 flex flex-col items-center"}>
                    <p className={"text-[40px] font-[600]"}>Learn</p>
                    <p className={"text-[20px] font-[400] pt-[30px] italic"}>
                      The use of generative AI allows for the creation of
                      quizzes or games that are based on a person's life
                      narrative. These quizzes and games serve as both an
                      entertaining activity and a cognitive challenge.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {active === 2 && (
              <div>
                <div className="w-full absolute flex justify-center items-center p-4">
                  <div className={"pt-[100px]"}>
                    <img
                      src={require("./learnStart.png")}
                      className={"image image-left w-[250px] h-[510px]"}
                      alt={"Add Memory"}
                    />
                  </div>
                  <div>
                    <img
                      src={require("./learnEnd.png")}
                      className={"image image-right w-[250px] h-[510px]"}
                      alt={"Add Memory"}
                    />
                  </div>
                </div>
                <div className={"flex justify-center pt-[30px]"}>
                  <div className={"w-1/2 flex flex-col items-center"}>
                    <p className={"text-[40px] font-[600]"}>Personal AI</p>
                    <p className={"text-[20px] font-[400] pt-[30px] italic"}>
                      AI chatbot that is built on a person's life memories and
                      lets users to engage in discussions with it, ask
                      questions, and recall memories from their past.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {active === 3 && (
              <div>
                <div className="w-full absolute flex justify-center items-center p-4">
                  <div className={"pt-[100px]"}>
                    <img
                      src={require("./exploreGeneral.png")}
                      className={"image image-left w-[250px] h-[510px]"}
                      alt={"Add Memory"}
                    />
                  </div>
                  <div>
                    <img
                      src={require("./exploreExperience.png")}
                      className={"image image-right w-[250px] h-[510px]"}
                      alt={"Add Memory"}
                    />
                  </div>
                </div>
                <div className={"flex justify-center pt-[30px]"}>
                  <div className={"w-1/2 flex flex-col items-center"}>
                    <p className={"text-[40px] font-[600]"}>EmotionScape</p>
                    <p className={"text-[20px] font-[400] pt-[30px] italic"}>
                      Dive deep into immersive experiences and find relief in
                      moments brought to life with increased visually emotional
                      content.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {active === 4 && (
              <div>
                <div className="w-full absolute flex justify-center items-center p-4">
                  <div className={"pt-[100px]"}>
                    <img
                      src={require("./cameraAdd.png")}
                      className={"image image-left w-[250px] h-[510px]"}
                      alt={"Add Memory"}
                    />
                  </div>
                  <div>
                    <img
                      src={require("./cameraDone.png")}
                      className={"image image-right w-[250px] h-[510px]"}
                      alt={"Add Memory"}
                    />
                  </div>
                </div>
                <div className={"flex justify-center pt-[30px]"}>
                  <div className={"w-1/2 flex flex-col items-center"}>
                    <p className={"text-[40px] font-[600]"}>Recognizer</p>
                    <p className={"text-[20px] font-[400] pt-[30px] italic"}>
                      An improved Computer Vision tool that gives users the
                      ability to immediately analyse and identify their closest
                      friends and family members.
                    </p>
                  </div>
                </div>
              </div>
            )}
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
        active === index && "font-[700] bg-[#FF7000]"
      }`}
    >
      {text}
    </button>
  );
};
