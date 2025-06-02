import { Zap, Users, TrendingUp, Video, Star } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: <Zap className="w-12 h-12" />,
      title: "Event Management",
      description:
        "From intimate gatherings to massive festivals, we create experiences that become the talk of the town.",
      features: [
        "Celebrity bookings",
        "Venue selection",
        "Production management",
        "Live streaming",
      ],
      color: "from-neon-pink to-neon-purple",
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Brand Promotions",
      description:
        "Disruptive campaigns that cut through the noise and make your brand unforgettable.",
      features: [
        "Guerrilla marketing",
        "Influencer partnerships",
        "Pop-up experiences",
        "Viral activations",
      ],
      color: "from-neon-blue to-neon-green",
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: "Social Media Marketing",
      description:
        "Content that doesn't just get views – it starts movements and creates communities.",
      features: [
        "Viral content creation",
        "Community management",
        "Paid advertising",
        "Analytics & insights",
      ],
      color: "from-neon-purple to-neon-blue",
    },
    {
      icon: <Video className="w-12 h-12" />,
      title: "Video Production",
      description:
        "Cinematic storytelling that captures attention and drives action across all platforms.",
      features: [
        "Commercial production",
        "Music videos",
        "Documentary filming",
        "Post-production",
      ],
      color: "from-neon-pink to-neon-purple",
    },
    {
      icon: <Star className="w-12 h-12" />,
      title: "Influencer Collaborations",
      description:
        "Strategic partnerships with the most influential voices in entertainment and lifestyle.",
      features: [
        "Talent matching",
        "Campaign strategy",
        "Content planning",
        "Performance tracking",
      ],
      color: "from-neon-blue to-neon-green",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 px-4 bg-gradient-to-br from-black via-purple-900/20 to-pink-900/20">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className=" font-black text-5xl md:text-7xl mb-6 gradient-text glow-text">
            OUR SERVICES
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
            We don't just provide services – we deliver{" "}
            <span className="text-pink-600 font-bold">
              game-changing experiences
            </span>{" "}
            that redefine what's possible in marketing and entertainment.
          </p>
        </div>
      </section>
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-900 to-black border-2 border-purple-500/30 hover:border-neon-pink transition-all duration-500 p-8 group hover:scale-105 rounded-xl"
              >
                <div
                  className={`bg-gradient-to-r ${service.color} w-20 h-20 rounded-full flex items-center justify-center mb-6 group-hover:animate-glow-pulse`}
                >
                  <div className="text-black">{service.icon}</div>
                </div>

                <h3 className=" font-bold text-2xl mb-4 text-white group-hover:gradient-text transition-all duration-300">
                  {service.title}
                </h3>

                <p className="text-gray-400 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center text-gray-300"
                    >
                      <div
                        className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full mr-3`}
                      ></div>
                      {feature}
                    </div>
                  ))}
                </div>

                <button
                  className={`bg-gradient-to-r ${service.color} text-black font-bold py-2 px-6 rounded-md hover:scale-105 transition-transform duration-300`}
                >
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 px-4 bg-gradient-to-r from-black to-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className=" font-bold text-4xl md:text-5xl mb-6 gradient-text">
            Ready to Go Viral?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's create something that breaks the internet together.
          </p>
          <Link to="/contact">
            <button className="bg-gradient-to-r from-neon-pink to-neon-purple  text-black font-bold px-12 py-4 text-lg rounded-md animate-glow-pulse">
              Start Your Project
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
