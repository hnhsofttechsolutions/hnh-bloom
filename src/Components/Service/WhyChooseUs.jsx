import { Briefcase, BarChart2, Search } from "lucide-react";

const WhyChooseUs = () => {
  const cardStyle =
    "bg-[#1f1f1f] text-white rounded-xl p-8 min-h-[250px] w-[400px] text-center flex flex-col items-center transition hover:shadow-lg";

  const iconStyle = "w-20 h-20 text-[#ff014f] mb-5";

  return (
    <section className=" py-20 px-4">
      <div className="w-full mx-auto">
        <h2 className="text-5xl font-semibold text-white text-center mb-6">
          Why Choose Us
        </h2>
        <div className="w-24 h-1 bg-[#ff014f] mx-auto mb-14 rounded"></div>

        <div className="flex flex-col lg:flex-row justify-center items-stretch gap-6 px-4">
          {/* Card 1 */}
          <div className={`${cardStyle} w-full lg:w-1/3`}>
            <Briefcase className={iconStyle} />
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 text-center lg:text-left">
              Best Business Solution
            </h3>
            <p className="text-gray-300 text-base md:text-xl text-center lg:text-left">
              Comprehensive business solutions tailored to your needs, ensuring
              your success in today’s competitive market.
            </p>
          </div>

          {/* Card 2 */}
          <div className={`${cardStyle} w-full lg:w-1/3`}>
            <BarChart2 className={iconStyle} />
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 text-center lg:text-left">
              Business Growth Planning
            </h3>
            <p className="text-gray-300 text-base md:text-xl text-center lg:text-left">
              Strategic planning to expand your operations and increase revenue
              with a focus on long-term growth.
            </p>
          </div>

          {/* Card 3 */}
          <div className={`${cardStyle} w-full lg:w-1/3`}>
            <Search className={iconStyle} />
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 text-center lg:text-left">
              Search Engine Optimization
            </h3>
            <p className="text-gray-300 text-base md:text-xl text-center lg:text-left">
              Boost your online visibility with organic SEO strategies that
              drive traffic and improve rankings.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
