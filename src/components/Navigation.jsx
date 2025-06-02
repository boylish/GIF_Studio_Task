import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/contact', label: 'Contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="font-orbitron font-bold text-2xl gradient-text">
            VibeCorp
          </Link>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-3 py-2 text-sm font-medium hover:opacity-65 transition-all duration-300 ${
                    isActive(item.path)
                      ? 'text-neon-pink glow-text'
                      : 'text-white '
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <button className="px-4 py-2 rounded-md text-black font-bold bg-gradient-to-r from-neon-pink to-neon-purple hover:opacity-65 transition-all duration-300  ">
                Get Started
              </button>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-neon-pink focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/95 border-t border-purple-500/20">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 text-base font-medium transition-all duration-300 ${
                    isActive(item.path)
                      ? 'text-neon-pink glow-text'
                      : 'text-white text-neon-pink hover:glow-text'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <button className="w-full mt-4 px-4 py-2 rounded-md text-black font-bold bg-gradient-to-r from-neon-pink to-neon-purple ">
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
