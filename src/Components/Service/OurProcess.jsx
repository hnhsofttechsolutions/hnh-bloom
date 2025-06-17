const OurProcess = () => {
  const cardStyle =
    'bg-[#1f1f1f] text-white rounded-xl p-8 min-h-[230px] w-[300px] text-center flex flex-col items-center transition hover:shadow-lg';

  const numberStyle =
    'w-20 h-20 flex items-center justify-center rounded-full bg-[#ff014f] text-white text-4xl font-bold mb-5';

  const steps = [
    {
      number: '01',
      title: 'Consultation',
      description: 'Understanding your business challenges and digital goals.',
    },
    {
      number: '02',
      title: 'Strategy',
      description: 'Crafting a customized technology roadmap for growth.',
    },
    {
      number: '03',
      title: 'Development',
      description: 'Delivering scalable and efficient digital solutions.',
    },
    {
      number: '04',
      title: 'Support',
      description: 'Ongoing maintenance and optimization for lasting success.',
    },
  ];

  return (
    <section className="py-20 px-4 mb-10">
      <div className="w-full mx-auto">
        <h2 className="text-5xl font-semibold text-white text-center mb-6">
          Our Process
        </h2>
        <div className="w-24 h-1 bg-[#ff014f] mx-auto mb-14 rounded"></div>

        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          {steps.map((step, index) => (
            <div key={index} className={cardStyle}>
              <div className={numberStyle}>{step.number}</div>
              <h3 className="text-4xl font-bold mb-3">{step.title}</h3>
              <p className="text-gray-300 text-2xl">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProcess;
