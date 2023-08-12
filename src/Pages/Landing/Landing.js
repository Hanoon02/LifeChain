import React from "react";

export default function Landing() {
  return (
    <>
      <div className="container mx-auto mt-8">
        <div className="bg-white rounded-lg shadow-md flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 p-8">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl font-semibold text-gray-800">
              Transforming Healthcare Through Technology
            </h1>
            <p className="text-lg text-gray-600 mt-4">
              Your trusted platform for managing and improving your health.
            </p>
            <blockquote className="text-xl italic text-gray-500 mt-8">
              "Empowering healthier lives, one click at a time."
            </blockquote>
          </div>
          <div className="md:w-1/2">
            <img
              src={require("./oldlady.jpeg")}
              alt="Medical Equipment"
              className="w-full h-auto rounded-md shadow-lg"
            />
          </div>
        </div>
      </div>
    </>
  );
}
