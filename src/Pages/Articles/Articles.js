export default function Articles() {
  return (
    <div className="container mx-auto py-8">
      <div className="relative p-16 mx-16">
        <h2 className="text-[50px] font-[500] mb-16 text-end">
          Latest Articles
        </h2>
        <div className="grid grid-cols-3 gap-6">
          <ArticleTile
            title="Design Trends 2023"
            description="Dive into the top design trends of this year."
            gradient="from-blue-400 via-purple-500 to-indigo-600"
            animationDelay="100ms"
            customClass="col-span-1 row-span-2"
          />

          <ArticleTile
            title="Animation in Web"
            description="The role of animations in modern web design."
            gradient="from-red-500 via-orange-500 to-yellow-400"
            animationDelay="200ms"
          />

          <ArticleTile
            title="Typography First"
            description="Why typography plays a pivotal role in web aesthetics."
            gradient="from-green-500 via-teal-500 to-cyan-500"
            animationDelay="300ms"
          />

          <ArticleTile
            title="Responsive Design"
            description="The importance of designing for multiple devices."
            gradient="from-cyan-500 via-blue-500 to-violet-600"
            animationDelay="400ms"
            customClass="col-span-2"
          />

          <ArticleTile
            title="Color Theory in Web"
            description="How to pick the right color combinations for your design."
            gradient="from-orange-500 via-red-400 to-pink-400"
            animationDelay="500ms"
            customClass="row-span-2"
          />

          <ArticleTile
            title="UX Best Practices"
            description="Top strategies for enhancing user experience on your website."
            gradient="from-gray-400 via-gray-500 to-gray-600"
            animationDelay="600ms"
            customClass="col-span-2"
          />
        </div>
      </div>
    </div>
  );
}

const ArticleTile = ({
  title,
  description,
  gradient,
  animationDelay,
  customClass,
}) => {
  return (
    <div
      className={`flex flex-col justify-center relative p-4 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 hover:rotate-2 bg-gradient-to-br ${gradient} hover:shadow-xl ${customClass}`}
      style={{ animation: `fadeIn ${animationDelay} forwards`, animationDelay }}
    >
      <h3 className="text-2xl font-bold mb-2 text-center">{title}</h3>
      <p className="text-white text-center">{description}</p>
    </div>
  );
};
