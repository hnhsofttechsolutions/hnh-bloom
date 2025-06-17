import { Briefcase, BarChart2, Search } from 'lucide-react';

const WhyChooseUs = () => {
  const cardStyle =
    'bg-[#1f1f1f] text-white rounded-xl p-8 min-h-[250px] w-[400px] text-center flex flex-col items-center transition hover:shadow-lg';

  const iconStyle = 'w-20 h-20 text-[#ff014f] mb-5';

  return (
    <section className=" py-20 px-4">
      <div className="w-full mx-auto">
        <h2 className="text-5xl font-semibold text-white text-center mb-6">
          Why Choose Us
        </h2>
        <div className="w-24 h-1 bg-[#ff014f] mx-auto mb-14 rounded"></div>

        <div className=" flex justify-center md:gap-16 gap-5 ">
          {/* Card 1 */}
          <div className={cardStyle}>
            <Briefcase className={iconStyle} />
            <h3 className="text-4xl font-bold mb-3">Best Business Solution</h3>
            <p className="text-gray-300 text-2xl">
              Comprehensive business solutions tailored to your needs, ensuring your success in today’s competitive market.
            </p>
          </div>

          {/* Card 2 */}
          <div className={cardStyle}>
            <BarChart2 className={iconStyle} />
            <h3 className="text-4xl font-bold mb-3">Business Growth Planning</h3>
            <p className="text-gray-300 text-2xl">
              Strategic planning to expand your operations and increase revenue with a focus on long-term growth.
            </p>
          </div>

          {/* Card 3 */}
          <div className={cardStyle}>
            <Search className={iconStyle} />
            <h3 className="text-4xl font-bold mb-3">Search Engine Optimization</h3>
            <p className="text-gray-300 text-2xl">
              Boost your online visibility with organic SEO strategies that drive traffic and improve rankings.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
