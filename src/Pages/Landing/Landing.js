export default function Landing() {
  return (
    <div className="bg-[url('../src/Pages/Landing/oldlady.jpeg')] bg-no-repeat mx-auto h-[500px] bg-cover flex items-center justify-center">
      <div className=" inset-0 bg-white opacity-40"></div>{" "}
      <div className="h-1/2  left-10 w-2/5 p-8 rounded-lg flex flex-col items-start justify-start space-y-4 z-10">
        {" "}
        <div className={"flex flex-col align-middle pt-5"}>
          <h1 className="text-4xl font-bold text-deep-cerulean">
            Transforming Healthcare Through Technology
          </h1>
          <p className="text-lg text-deep-cerulean-lighter mt-4">
            Your trusted platform for managing and improving your health.
          </p>
          <blockquote className="text-xl italic text-deep-cerulean mt-8">
            "Empowering healthier lives, one click at a time."
          </blockquote>
        </div>
      </div>
    </div>
  );
}
