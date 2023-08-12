import React, {useState} from "react";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
const Testimonial = ({ content, author }) => {
    return (
        <div className="bg-white border p-8 h-96 w-96 shadow-lg rounded transform hover:scale-105 transition-transform border-deep-cerulean-lighter">
            <blockquote className="flex flex-col justify-center h-3/4 text-2xl font-semibold text-deep-cerulean">
                “{content}”
            </blockquote>
            <p className="flex items-end h-1/4 text-xl font-light text-deep-cerulean mt-6">
                - {author}
            </p>
        </div>
    );
}


const listOfTestimonials = [
    <Testimonial
        content="I did blah blah blah blah blah"
        author="Thomas Thomas"
    />,
    <Testimonial
        content="I felt the impact immediately in my life."
        author="Jane Doe"
    />,
    <Testimonial
        content="A revolutionary approach to managing my health."
        author="Sam Smith"
    />,
    <Testimonial
        content="Ching chong ping pong ho chih minh choo choo train"
        author="Ching Chong"
    />,
    <Testimonial
        content="Meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow"
        author="Caterson Cat"
    />
];


export default function Interview() {
   const [currentTestimonial, setCurrentTestimonial] = useState(1);

   const slideLeft = () => {
         setCurrentTestimonial(currentTestimonial === 0 ? listOfTestimonials.length - 1 : currentTestimonial - 1);
   }

    const slideRight = () => {
        setCurrentTestimonial(currentTestimonial === listOfTestimonials.length - 1 ? 0 : currentTestimonial + 1);
    }

  return (
    <div className=" mx-auto py-20 bg-white">
      <div className="flex flex-col justify-center py-12">
        <h2 className="text-4xl font-bold text-deep-cerulean-dark text-center">
          Our Stories
        </h2>

        <div className="w-full flex justify-center pt-10 gap-10">
            {currentTestimonial === 0 ? listOfTestimonials[listOfTestimonials.length - 1] : listOfTestimonials[currentTestimonial-1]}
            {listOfTestimonials[currentTestimonial]}
            {currentTestimonial === listOfTestimonials.length - 1 ? listOfTestimonials[0] : listOfTestimonials[currentTestimonial+1]}
        </div>
      <div className={'flex w-full justify-end pt-5 gap-1 pr-[120px]'}>
          <div onClick={()=>slideLeft()}><ArrowBackIosNewIcon/></div>
          <div onClick={()=>slideRight()}><ArrowForwardIosIcon/></div>
      </div>
      </div>
    </div>
  );
}

