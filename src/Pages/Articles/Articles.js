export default function Articles() {
  return (
    <div className="container mx-auto mt-8 px-32 py-20">
      <div className="relative p-16 mx-16">
        <h2 className="text-4xl font-bold mb-16 text-center">
          Latest Articles
        </h2>
        <div className="grid grid-cols-3 gap-4">
          {/* Article 1 */}
          <ArticleTile
            title="Design Trends 2023"
            description="Dive into the top design trends of this year."
            gradient="from-blue-400 via-purple-500 to-pink-500"
            animationDelay="100ms"
            customClass="col-span-1 row-span-2"
          />

          {/* Article 2 */}
          <ArticleTile
            title="Animation in Web"
            description="The role of animations in modern web design."
            gradient="from-red-400 via-yellow-500 to-orange-500"
            animationDelay="200ms"
          />

          {/* Article 3 */}
          <ArticleTile
            title="Typography First"
            description="Why typography plays a pivotal role in web aesthetics."
            gradient="from-green-400 via-teal-500 to-blue-500"
            animationDelay="300ms"
          />

          {/* Article 4 */}
          <ArticleTile
            title="Responsive Design"
            description="The importance of designing for multiple devices."
            gradient="from-teal-400 via-cyan-500 to-blue-400"
            animationDelay="400ms"
            customClass="col-span-2"
          />

          {/* Article 5 */}
          <ArticleTile
            title="Color Theory in Web"
            description="How to pick the right color combinations for your design."
            gradient="from-orange-400 via-yellow-400 to-lime-500"
            animationDelay="500ms"
            customClass="row-span-2"
          />

          {/* Article 6 */}
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
      className={`relative p-4 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:rotate-2 bg-gradient-to-br ${gradient} hover:shadow-xl ${customClass}`}
      style={{ animation: `fadeIn ${animationDelay} forwards`, animationDelay }}
    >
      <h3 className="text-xl font-bold mb-2 text-center">{title}</h3>{" "}
      {/* Here's the change */}
      <p className="text-white text-sm">{description}</p>
    </div>
  );
};
