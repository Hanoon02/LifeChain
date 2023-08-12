// Features.js
import React from "react";

export default function AppFeatures() {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-8">Discover Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            icon="🏥"
            title="Personal Health Records"
            description="Effortlessly manage your medical history and appointments."
          />
          <FeatureCard
            icon="📊"
            title="Health Analytics"
            description="Track your progress and make informed decisions about your health."
          />
          <FeatureCard
            icon="📅"
            title="Appointment Scheduling"
            description="Book and manage appointments with healthcare professionals."
          />
        </div>
      </div>
    </div>
  );
}

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className=" p-8 rounded-lg transition-transform hover:scale-105">
      <div className="flex justify-center items-center gap-5">
        <div className="text-4xl text-blue-500 mb-4">{icon}</div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};
