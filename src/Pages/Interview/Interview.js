import React, {useState} from "react";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

const Testimonial = ({ content, author }) => {
    return (
        <div className="bg-gray-50 border p-8 h-96 w-96 shadow-lg rounded transform hover:scale-105 transition-transform border-deep-cerulean-lighter">
            <div className="flex flex-col items-start  h-3/4 text-2xl font-semibold text-deep-cerulean">
                <FormatQuoteIcon className="text-4xl mb-4"/>
                “{content}”
            </div>
            <p className="flex items-end h-1/4 text-xl font-light text-deep-cerulean py-2">
                - {author}
            </p>
        </div>
    );
}


const listOfTestimonials = [
  <Testimonial
    content="AI reminds Ramesh, 70, of daily tasks like medicine, enabling independence from family."
    author="Ramesh's Routine Reminders"
  />,
  <Testimonial
    content="Digital calendar helps Anjali, 67, remember social events, rekindling her social spark."
    author="Anjali's Social Calendar"
  />,
  <Testimonial
    content="Deepak, 72, uses AI to playback his own narrated memories, bridging past gaps."
    author="Deepak's Memory Journal"
  />,
  <Testimonial
    content="AI assists Priya, 66, daily; strengthens bond with son, Rohan, maintaining her independence."
    author="Priya's Balancing Act"
  />,
  <Testimonial
    content="AI simplifies Sharmila's, 68, phone interface, enhancing digital connectivity."
    author="Sharmila's Personalized Interface"
  />,
];

export default function Interview() {
  const [currentTestimonial, setCurrentTestimonial] = useState(1);

  const slideLeft = () => {
    setCurrentTestimonial(
      currentTestimonial === 0
        ? listOfTestimonials.length - 1
        : currentTestimonial - 1
    );
  };

  const slideRight = () => {
    setCurrentTestimonial(
      currentTestimonial === listOfTestimonials.length - 1
        ? 0
        : currentTestimonial + 1
    );
  };

  return (
    <div id={"testimony"} className=" mx-auto py-20 bg-white">
      <div className="flex flex-col justify-center py-12">
        <h2 className="text-4xl font-bold text-deep-cerulean-dark text-center">
          Our Stories
        </h2>

        <div className="w-full flex justify-center pt-10 gap-10">
          {currentTestimonial === 0
            ? listOfTestimonials[listOfTestimonials.length - 1]
            : listOfTestimonials[currentTestimonial - 1]}
          {listOfTestimonials[currentTestimonial]}
          {currentTestimonial === listOfTestimonials.length - 1
            ? listOfTestimonials[0]
            : listOfTestimonials[currentTestimonial + 1]}
        </div>
        <div className={"flex w-full justify-end pt-5 gap-1 pr-[120px]"}>
          <div onClick={() => slideLeft()}>
            <ArrowBackIosNewIcon />
          </div>
          <div onClick={() => slideRight()}>
            <ArrowForwardIosIcon />
          </div>
        </div>
      </div>
    </div>
  );
}

