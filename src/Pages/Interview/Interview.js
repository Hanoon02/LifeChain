// import React from "react";

// export default function Interview() {
//   return (
//     <>
//       <div className="container mx-auto mt-8 px-32 py-20">
//         <div className={"flex flex-col justify-center py-[50px]"}>
//           <p className={"text-[40px] font-[600] text-center"}> Our Stories </p>
//           <div className={"flex justify-center pt-5 gap-5"}>
//             <div
//               className={
//                 "bg-gradient-to-b from-[#ffc8a7] to-white h-[400px] w-[400px] shadow-lg p-8"
//               }
//             >
//               <p className={"flex items-start h-1/2 text-[30px] font-[600]"}>
//                 I did blah blah blah blah blah
//               </p>
//               <p className={"flex items-end h-1/2 text-[18px] font-[400]"}>
//                 Thomas thomas
//               </p>
//             </div>
//             <div
//               className={
//                 "bg-gradient-to-b from-[#ffc8a7] to-white h-[400px] w-[400px] shadow-lg p-8"
//               }
//             >
//               <p className={"flex items-start h-1/2 text-[30px] font-[600]"}>
//                 I did blah blah blah blah blah
//               </p>
//               <p className={"flex items-end h-1/2 text-[18px] font-[400]"}>
//                 Thomas thomas
//               </p>
//             </div>
//             <div
//               className={
//                 "bg-gradient-to-b from-[#ffc8a7] to-white h-[400px] w-[400px] shadow-lg p-8"
//               }
//             >
//               <p className={"flex items-start h-1/2 text-[30px] font-[600]"}>
//                 I did blah blah blah blah blah
//               </p>
//               <p className={"flex items-end h-1/2 text-[18px] font-[400]"}>
//                 Thomas thomas
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
import React from "react";

export default function Interview() {
  return (
    <div className="container mx-auto mt-8 px-32 py-20 bg-white">
      <div className="flex flex-col justify-center py-12">
        <h2 className="text-4xl font-bold text-deep-cerulean-dark text-center">
          Our Stories
        </h2>

        <div className="flex justify-center pt-10 gap-10">
          <Testimonial
            content="I did blah blah blah blah blah"
            author="Thomas Thomas"
          />
          <Testimonial
            content="I felt the impact immediately in my life."
            author="Jane Doe"
          />
          <Testimonial
            content="A revolutionary approach to managing my health."
            author="Sam Smith"
          />
        </div>
      </div>
    </div>
  );
}

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
};
