import React from "react";
import { ArrowRight, Zap, Users, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  const services = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Event Management",
      description: "Unforgettable experiences that captivate audiences",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Brand Promotions",
      description: "Bold campaigns that make your brand impossible to ignore",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Social Media Marketing",
      description: "Viral content that dominates feeds and drives engagement",
    },
  ];

  const clients = [
    "NETFLIX",
    "SPOTIFY",
    "NIKE",
    "COCA-COLA",
    "SAMSUNG",
    "ADIDAS",
  ];

  return (
    <div className="min-h-screen">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 to-pink-900/20"></div>

        <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
          <h1 className=" font-black text-5xl md:text-7xl lg:text-8xl mb-6 animate-float">
            <span className="gradient-text glow-text">WE CREATE</span>
            <br />
            <span className="text-white">VIRAL MOMENTS</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto ">
            Bold marketing strategies that break the internet. Entertainment
            experiences that leave crowds wanting more.
            <span className="text-pink-600 font-bold">
              {" "}
              We don't just market – we create phenomena.
            </span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              size="lg"
              className="bg-gradient-to-r from-neon-pink to-neon-purple text-black font-bold px-8 py-4 text-lg flex items-center rounded-lg hover:opacity-65 transition-all duration-300"
            >
              Start Your Campaign
              <ArrowRight className="ml-2 w-5 h-5 " />
            </button>

            <Link to="/services">
              <button
                variant="outline"
                size="lg"
                className="border-2 border-neon-blue text-neon-blue hover:text-white hover:border-white px-8 py-4 text-lg transition-all duration-300 rounded-lg"
              >
                Explore Services
              </button>
            </Link>
          </div>
        </div>

        <div
          className="absolute top-1/4 left-10 w-4 h-4 bg-neon-pink rounded-full animate-float"
          style={{ animationDelay: "0s" }}
        ></div>
        <div
          className="absolute top-1/3 right-16 w-6 h-6 bg-neon-blue rounded-full animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-1/4 left-1/4 w-3 h-3 bg-neon-green rounded-full animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-1/3 right-1/3 w-5 h-5 bg-vibrant-gold rounded-full animate-float"
          style={{ animationDelay: "0.5s" }}
        ></div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-r from-black to-gray-900">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className=" font-bold text-4xl md:text-5xl mb-8 gradient-text">
            WE ARE VIBECORP
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            The most{" "}
            <span className="text-pink-600 font-bold">
              audacious marketing & entertainment company
            </span>{" "}
            on the planet. We don't play it safe – we create experiences that
            shatter expectations, campaigns that trend worldwide, and events
            that become legendary. When brands want to make history, they call
            us.
          </p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className=" font-bold text-4xl md:text-5xl text-center mb-16 text-white">
            Our <span className="gradient-text">Signature Services</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index} 
                className="bg-gradient-to-br from-gray-900 to-black border-2 border-purple-500/30 hover:border-neon-pink transition-all duration-300 p-6 hover:scale-105  rounded-lg"
              >
                <div className="text-neon-blue  transition-colors duration-300 mb-4">
                  {service.icon}
                </div>
                <h3 className=" font-bold text-xl mb-3 text-white transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-400  transition-colors duration-300">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services">
              <button
                size="lg"
                className="bg-gradient-to-r from-neon-purple to-neon-blue text-black font-bold px-8 py-4 hover:opacity-65 transition-all duration-300 rounded-lg "
              >
                View All Services
              </button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gradient-to-r from-gray-900 to-black">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className=" font-bold text-2xl md:text-3xl mb-12 text-white">
            Trusted by <span className="gradient-text">Industry Giants</span>
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {clients.map((client, index) => (
              <div
                key={index}
                className="text-gray-500 hover:text-neon-pink font-bold text-lg transition-all duration-300 hover:scale-110 cursor-pointer"
              >
                {client}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
