// export default function AppFeatures() {
//   return (
//     <div className="container mx-auto px-32">
//       <div className=" py-20 px-16">
//         <div className="container mx-auto text-center">
//           <h2 className="text-4xl font-bold mb-16">Discover Our Features</h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
//             <FeatureCard
//               icon="🏥"
//               title="Personal Health Records"
//               description="Effortlessly manage your medical history and appointments."
//               buttonText="Learn More"
//             />
//             <FeatureCard
//               icon="📊"
//               title="Health Analytics"
//               description="Track your progress and make informed decisions about your health."
//               buttonText="View Analytics"
//             />
//             <FeatureCard
//               icon="📅"
//               title="Appointment Scheduling"
//               description="Book and manage appointments with healthcare professionals."
//               buttonText="Schedule Now"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// // const FeatureCard = ({ icon, title, description, buttonText }) => {
// //   return (
// //     <div className="bg-gradient-to-br from-blue-100 to-purple-300 p-10 transform rotate-1 rounded-lg shadow-lg transition-transform hover:scale-105 hover:rotate-0">
// //       <div className="flex flex-col items-center transform -rotate-1">
// //         <div className="text-5xl text-blue-600 mb-6">{icon}</div>
// //         <h3 className="text-2xl font-bold mb-4">{title}</h3>
// //         <p className="text-gray-800 mb-6 text-center">{description}</p>
// //         <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded transform transition-transform hover:scale-105">
// //           {buttonText}
// //         </button>
// //       </div>
// //     </div>
// //   );
// // };

// const FeatureCard = ({ icon, title, description, buttonText }) => {
//   return (
//     <div className="bg-gradient-to-br from-blue-100 to-purple-300 p-6 transform rotate-1 rounded-lg shadow-lg transition-transform hover:scale-105 hover:rotate-0">
//       {" "}
//       {/* Reduced padding to p-6 */}
//       <div className="flex flex-col items-center transform -rotate-1">
//         <div className="text-4xl text-blue-600 mb-4">{icon}</div>{" "}
//         {/* Reduced size to text-4xl and margin to mb-4 */}
//         <h3 className="text-xl font-bold mb-3">{title}</h3>{" "}
//         {/* Reduced size to text-xl and margin to mb-3 */}
//         <p className="text-gray-800 mb-4 text-center">{description}</p>{" "}
//         {/* Reduced margin to mb-4 */}
//         <button className="bg-blue-600 hover:bg-blue-700 text-white py-1 px-5 rounded transform transition-transform hover:scale-105">
//           {" "}
//           {/* Reduced padding to py-1 px-5 */}
//           {buttonText}
//         </button>
//       </div>
//     </div>
//   );
// };
export default function AppFeatures() {
  return (
    <div className="container mx-auto px-32 py-20 bg-white">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-16 text-deep-cerulean-dark">
          Discover Our Features
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          <FeatureCard
            icon="🏥"
            title="Personal Health Records"
            description="Effortlessly manage your medical history and appointments."
            buttonText="Learn More"
          />
          <FeatureCard
            icon="📊"
            title="Health Analytics"
            description="Track your progress and make informed decisions about your health."
            buttonText="View Analytics"
          />
          <FeatureCard
            icon="📅"
            title="Appointment Scheduling"
            description="Book and manage appointments with healthcare professionals."
            buttonText="Schedule Now"
          />
        </div>
      </div>
    </div>
  );
}

const FeatureCard = ({ icon, title, description, buttonText }) => {
  return (
    <div className="bg-white border p-6 transform rotate-1 rounded-lg shadow-lg transition-transform hover:scale-105 hover:rotate-0 border-deep-cerulean-lighter">
      <div className="flex flex-col items-center transform -rotate-1">
        <div className="text-4xl text-deep-cerulean mb-4">{icon}</div>
        <h3 className="text-xl font-bold mb-3 text-deep-cerulean">{title}</h3>
        <p className="text-gray-800 mb-4 text-center">{description}</p>
        <button className="bg-deep-cerulean hover:bg-deep-cerulean-lighter text-white py-1 px-5 rounded transform transition-transform hover:scale-105">
          {buttonText}
        </button>
      </div>
    </div>
  );
};
