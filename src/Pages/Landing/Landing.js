export default function Landing() {
  return (
    <div
      id={"home"}
      className="gap-10 bg-gray-100 pt-5 w-full h-[600px] flex items-center justify-center"
    >
      <div className={"w-1/3"}>
        <img
          src={require("./left.png")}
          className={"w-full h-full"}
          alt={"Left"}
        />
      </div>
      <div className="w-1/3 flex flex-col items-start justify-start">
        <div className={"flex flex-col align-middle pt-4"}>
          <h3 className="text-[50px] font-bold text-deep-cerulean">
            Relive, Revisit, Remember
          </h3>
          <p className="text-lg text-deep-cerulean-lighter mt-4">
            Seamlessly weave your past and present into a secure narrative
            uniquely yours. Embrace memories and gift experiences for tomorrow.
          </p>
          <blockquote className="text-xl italic text-deep-cerulean mt-8">
            "Memory is the diary that we all carry about with us." - Oscar Wilde
          </blockquote>
        </div>
      </div>
      <div className={"w-1/3"}>
        <img
          src={require("./right.png")}
          className={"w-full h-full"}
          alt={"Right"}
        />
      </div>
    </div>
  );
}
