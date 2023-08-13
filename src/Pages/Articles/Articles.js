export default function Articles() {
  return (
    <div className="container mx-auto py-8 mx-20">
      <div className="relative p-16">
        <h2
          style={{ color: "#333333" }}
          className="text-[50px] font-[500] mb-8 text-end"
        >
          Latest Articles
        </h2>
        <div className={"flex gap-2 justify-center"}>
          <div>
            <div className="bg-[url('../src/Pages/Articles/article1.jpeg')] bg-cover h-full flex flex-col justify-end">
              <div className={"w-full h-full backdrop-blur-md p-4"}>
                <h3
                  style={{ color: "#333333" }}
                  className="text-2xl font-bold mb-2 text-start"
                >
                  Echoes
                </h3>
                <p style={{ color: "#333333" }} className="text-start">
                  Reviving the past through immersive digital recollections.
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="bg-[url('../src/Pages/Articles/article2.jpeg')] bg-cover bg-opacity-30 flex flex-col justify-end">
              <div className={"w-full h-full backdrop-blur-md p-4"}>
                <h3
                  style={{ color: "#333333" }}
                  className="text-2xl font-bold mb-2 text-start"
                >
                  Guardians
                </h3>
                <p style={{ color: "#333333" }} className="text-start">
                  Blockchain's prowess in preserving the sanctity of memories.
                </p>
              </div>
            </div>
            <div className="bg-[url('../src/Pages/Articles/article3.jpeg')] bg-cover bg-opacity-30 flex flex-col justify-end">
              <div className={"w-full h-full backdrop-blur-md p-4"}>
                <h3
                  style={{ color: "#333333" }}
                  className="text-2xl font-bold mb-2 text-start"
                >
                  Tokens
                </h3>
                <p style={{ color: "#333333" }} className="text-start">
                  Transforming personal experiences into global shareable
                  treasures.
                </p>
              </div>
            </div>
            <div className="bg-[url('../src/Pages/Articles/article4.jpeg')] bg-cover bg-opacity-30 flex flex-col justify-end">
              <div className={"w-full h-full backdrop-blur-md p-4"}>
                <h3
                  style={{ color: "#333333" }}
                  className="text-2xl font-bold mb-2 text-start"
                >
                  Reverie
                </h3>
                <p style={{ color: "#333333" }} className="text-start">
                  Digital tools that breathe life back into your cherished
                  moments.
                </p>
              </div>
            </div>
            <div className="bg-[url('../src/Pages/Articles/article5.jpeg')] bg-cover bg-opacity-30 flex flex-col justify-end">
              <div className={"w-full h-full backdrop-blur-md p-4"}>
                <h3
                  style={{ color: "#333333" }}
                  className="text-2xl font-bold mb-2 text-start"
                >
                  Threads
                </h3>
                <p style={{ color: "#333333" }} className="text-start">
                  Weaving connections by exchanging and exploring global
                  narratives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
