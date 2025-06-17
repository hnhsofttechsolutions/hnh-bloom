import { useLocation } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ServiceDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const locationService = location.state?.service;
 const storedService = localStorage.getItem("lastViewedService");
const service = locationService || (storedService && JSON.parse(storedService));

  return (
    <section className="relative  min-h-screen  text-white py-16 px-4 sm:px-6">
    

      <div className="w-full  container mx-auto relative z-10">
        {/* Back Button */}
        <button
          onClick={() => navigate('/service')}
          className="flex items-center gap-2 w-auto !border-2 rounded-lg border-[#ff014f]  px-3 py-3 text-white !hover:text-[#ff014f]  mb-8 group transition-all"
        >
          <ArrowLeft  
            size={20} 
            className="group-hover:-translate-x-1 transition-transform" 
          />
          <span className="text-sm font-medium mt-2">Back to Services</span>
        </button>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Image Side - Sticky on scroll */}
          <div className="sticky top-24">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-10"></div>
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-auto max-h-[600px] object-cover transition duration-700 group-hover:scale-102"
              />
              <div className="absolute bottom-0 left-0 z-20 p-6 w-full bg-gradient-to-t from-black/90 to-transparent">
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {service.title}
                </h1>
                <div className="w-16 h-1 bg-gradient-to-r from-[#ff014f] to-[#ff5c8a] mb-3"></div>
                <p className="text-gray-300 text-sm md:text-base line-clamp-2">
                  {service.shortDescription || service.description.substring(0, 100) + '...'}
                </p>
              </div>
            </div>

            {/* Stats Card */}
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="bg-[#1f1f1f]/80 p-4 rounded-xl ">
                <div className="text-[#ff5c8a] text-3xl font-medium">Success Rate</div>
                <div className="text-4xl font-bold mt-1">98%</div>
              </div>
              <div className="bg-[#1f1f1f]/80 p-4 rounded-xl ">
                <div className="text-[#ff5c8a] text-3xl font-medium">Projects Done</div>
                <div className="text-4xl font-bold mt-1">250+</div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="space-y-8">
            {/* Service Highlights */}
            <div className="bg-[#1a1a1a]/90 backdrop-blur-md rounded-2xl p-6 ">
              <h2 className="text-3xl font-bold mb-4 relative pb-2">
                <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-[#ff014f] to-[#ff5c8a]"></span>
                Service Overview
              </h2>
              <p className="text-gray-300 leading-relaxed">
                {service.description}
              </p>
            </div>

          

            {/* Process/Workflow */}
            <div className="bg-[#1a1a1a]/90 backdrop-blur-md rounded-2xl p-6 ">
              <h3 className="text-3xl font-bold mb-6 relative pb-2">
                <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-[#ff014f] to-[#ff5c8a]"></span>
                Our Process
              </h3>
              <div className="space-y-6">
                {[
                  { step: 1, title: "Consultation", desc: "Understanding your business challenges and digital goals." },
                  { step: 2, title: "Strategy", desc: "Crafting a customized technology roadmap for growth." },
                  { step: 3, title: "Development", desc: "Delivering scalable and efficient digital solutions." },
                  { step: 4, title: "Support", desc: "Ongoing maintenance and optimization for lasting success." }
                ].map((item) => (
                  <div key={item.step} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#ff014f] to-[#ff5c8a] flex items-center justify-center text-white font-bold text-sm">
                        {item.step}
                      </div>
                      {item.step < 4 && (
                        <div className="w-0.5 h-10 bg-gradient-to-b from-[#ff5c8a] to-[#ff014f] opacity-60 my-1"></div>
                      )}
                    </div>
                    <div>
                      <h4 className="font-medium text-3xl text-white">{item.title}</h4>
                      <p className="text-gray-400 text-2xl mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-[#1a1a1a] via-[#1f1f1f] to-[#1a1a1a] rounded-2xl p-8  text-center">
              <h3 className="text-3xl font-bold mb-3">Ready to Transform Your Business?</h3>
              <p className="text-gray-300 mb-6 max-w-md mx-auto">
                Get started with our {service.title} service today and experience the difference.
              </p>
              <button
                onClick={() => alert("Contact form will open")}
                className="relative  overflow-hidden group bg-gradient-to-r from-[#ff014f] to-[#ff5c8a] hover:from-[#ff014f] hover:to-[#ff014f] text-white px-8 py-3 rounded-xl font-semibold text-lg shadow-lg transition-all duration-300 hover:shadow-[0_0_20px_5px_rgba(255,1,79,0.3)]"
              >
                <span className="relative z-10">Get Started Now</span>
                <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Add some global animations */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(2deg); }
        }
        .animate-float { animation: float 8s ease-in-out infinite; }
        .animate-float-delay { animation: float 10s ease-in-out infinite 2s; }
      `}</style>
    </section>
  );
};

export default ServiceDetail;