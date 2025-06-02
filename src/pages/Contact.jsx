import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Youtube,
  Linkedin,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      "Message Sent! We'll get back to you within 24 hours with some mind-blowing ideas!"
    );
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "hello@vibecorp.com",
      color: "text-neon-pink",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "+1 (555) VIBE-CORP",
      color: "text-neon-blue",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Address",
      value: "123 Creative District, Los Angeles, CA 90028",
      color: "text-neon-green",
    },
  ];

  const socialLinks = [
    {
      icon: <Instagram className="w-8 h-8" />,
      label: "Instagram",
      url: "#",
    },
    {
      icon: <Youtube className="w-8 h-8" />,
      label: "YouTube",
      url: "#",
    },
    {
      icon: <Linkedin className="w-8 h-8" />,
      label: "LinkedIn",
      url: "#",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 px-4 bg-gradient-to-br from-black via-purple-900/20 to-pink-900/20">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className=" font-black text-5xl md:text-7xl mb-6 gradient-text glow-text">
            LET'S CREATE MAGIC
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
            Ready to break the internet?{" "}
            <span className="text-neon-pink font-bold">Drop us a line</span> and
            let's start planning your next viral moment.
          </p>
        </div>
      </section>
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          <div className="bg-gradient-to-br from-gray-900 to-black border-2 border-purple-500/30 p-8 rounded-xl">
            <h2 className=" font-bold text-3xl mb-6 gradient-text">
              Send us a Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-white font-semibold mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 rounded bg-black/50 border border-purple-500/50 text-white focus:outline-none focus:ring-2 focus:ring-neon-pink"
                  placeholder="Your awesome name"
                />
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 rounded bg-black/50 border border-purple-500/50 text-white focus:outline-none focus:ring-2 focus:ring-neon-pink"
                  placeholder="your.email@domain.com"
                />
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 rounded bg-black/50 border border-purple-500/50 text-white focus:outline-none focus:ring-2 focus:ring-neon-pink"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-2 rounded bg-black/50 border border-purple-500/50 text-white focus:outline-none focus:ring-2 focus:ring-neon-pink resize-none"
                  placeholder="Tell us about your wildest marketing dreams..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-neon-pink to-neon-purple hover:opacity-65 transition-all duration-300 text-black font-bold py-4 text-lg rounded-lg"
              >
                Send Message 🚀
              </button>
            </form>
          </div>
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-gray-900 to-black border-2 border-purple-500/30 p-8 rounded-xl">
              <h2 className=" font-bold text-3xl mb-6 gradient-text">
                Get in Touch
              </h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className={`${info.color} mt-1`}>{info.icon}</div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">
                        {info.label}
                      </h3>
                      <p className="text-gray-400">{info.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-gray-900 to-black border-2 border-purple-500/30 p-8 rounded-xl">
              <h2 className=" font-bold text-3xl mb-6 gradient-text">
                Follow the Vibe
              </h2>
              <div className="flex space-x-6">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className={`text-gray-400 transition-all duration-300 hover:scale-110 `}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
              <p className="text-gray-400 mt-4">
                Stay updated with our latest campaigns, behind-the-scenes
                content, and viral moments!
              </p>
            </div>
            <div className="bg-gradient-to-br from-gray-900 to-black border-2 border-purple-500/30 p-8 rounded-xl">
              <h2 className=" font-bold text-2xl mb-4 text-white">
                When We're Creating Magic
              </h2>
              <div className="space-y-2 text-gray-400">
                <p>
                  <span className="text-white font-semibold">
                    Monday - Friday:
                  </span>{" "}
                  9:00 AM - 8:00 PM
                </p>
                <p>
                  <span className="text-white font-semibold">Saturday:</span>{" "}
                  10:00 AM - 6:00 PM
                </p>
                <p>
                  <span className="text-white font-semibold">Sunday:</span>{" "}
                  Emergency projects only
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
