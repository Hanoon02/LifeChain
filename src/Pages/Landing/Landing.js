export default function Landing() {
  return (
    <div className="relative container mx-auto mt-8 h-96">
      {" "}
      {/* Here, h-96 sets the height to 24rem (or 384px). Adjust this value as necessary. */}
      <img
        src={require("./oldlady.jpeg")}
        alt="Medical Equipment"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      <div className="bg-gradient-to-l from-transparent to-white p-8 rounded-lg shadow-md flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
        <div className="md:w-1/2 text-center md:text-left z-10">
          <h1 className="text-4xl font-bold text-gray-900">
            Transforming Healthcare Through Technology
          </h1>
          <p className="text-lg text-gray-700 mt-4">
            Your trusted platform for managing and improving your health.
          </p>
          <blockquote className="text-xl italic text-gray-600 mt-8">
            "Empowering healthier lives, one click at a time."
          </blockquote>
        </div>
      </div>
    </div>
  );
}
