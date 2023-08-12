export default function Landing() {
  return (
    <div className="bg-[url('../src/Pages/Landing/oldlady.jpeg')] bg-no-repeat mx-auto h-[500px] bg-cover flex items-center justify-center">
      <div className="absolute left-10 bg-gradient-to-r from-transparent to-white w-1/2 md:w-1/3 p-8 rounded-lg shadow-md flex flex-col items-start justify-start space-y-4">
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
  );
}
