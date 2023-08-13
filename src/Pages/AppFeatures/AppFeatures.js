export default function AppFeatures() {
  return (
    <div id={"about"} className="container mx-auto px-32 pt-20 bg-white">
      <div className="text-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          <FeatureCard
            icon="🔄"
            title="Relive Memories"
            description="Journey back with immersive tools to relive cherished moments afresh."
          />
          <FeatureCard
            icon="🔐"
            title="Secure Narratives"
            description="Protecting memories with advanced blockchain for authenticity and safety."
          />
          <FeatureCard
            icon="🌐"
            title="Share Experiences"
            description="Gift, trade, or explore global experiences, deepening connections with every exchange."
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
