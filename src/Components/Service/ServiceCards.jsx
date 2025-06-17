import { useNavigate } from 'react-router-dom';
import {latestServices} from '../../utils/data'

const ServiceCards = () => {
   const navigate = useNavigate();

  const handleClick = (service) => {
    localStorage.setItem("lastViewedService", JSON.stringify(service));
    navigate("/service-detail", { state: { service } });
  };
  return (
    <section className=" py-20 px-4">
      <div className="w-full  container flex justify-center flex-wrap gap-10">
        {latestServices.map((service, index) => (
          <div
            key={index}
             onClick={() => handleClick(service)}
            className="bg-[#1f1f1f] w-[600px] cursor-pointer  rounded-xl overflow-hidden shadow-md transition hover:shadow-lg"
          >
            {/* Image */}
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-80 object-cover"
            />

            {/* Content */}
            <div className="p-6 text-white flex flex-col justify-between h-full">
              <div>
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <ul className="text-sm text-gray-300 space-y-2 mb-6">
                  {service.points.map((point, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#ff014f] shrink-0"></span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                  <button  className="mt-4 bg-gradient-to-r from-[#ff014f] to-pink-500 text-white px-5 py-2 rounded-lg text-2xl font-medium hover:opacity-90 transition ">
                Learn More
              </button>
              </div>
               
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceCards;
