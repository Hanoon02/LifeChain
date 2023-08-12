export default function AppFeatures() {
  return (
    <div className="bg-gray-100 py-20 px-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-16">Discover Our Features</h2>
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
    <div className="bg-gradient-to-br from-blue-100 to-purple-300 p-10 transform rotate-1 rounded-lg shadow-lg transition-transform hover:scale-105 hover:rotate-0">
      <div className="flex flex-col items-center transform -rotate-1">
        <div className="text-5xl text-blue-600 mb-6">{icon}</div>
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        <p className="text-gray-800 mb-6 text-center">{description}</p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded transform transition-transform hover:scale-105">
          {buttonText}
        </button>
      </div>
    </div>
  );
};
