import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@mui/material';
import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetHeader } from './ui/sheet';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);

  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Programs', path: '/programs' },
    { name: 'Testimonial', path: '/#testimonial' },
    { name: 'Stories', path: '/#stories' },
  ];

  const isActive = (path) => {
    if (path.includes('#')) {
      const hash = path.split('#')[1];
      return location.hash === `#${hash}`;
    }
    return location.pathname === path && location.hash === '';
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-md'}`}> <nav className="w-full">


      {/* 🔥 FIXED WIDTH ISSUE HERE */}
      <div className="max-w-[1400px] xl:max-w-[1600px] mx-auto px-4 md:px-8 h-[80px] flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 font-semibold text-green-800 text-lg whitespace-nowrap">
          <img src="/assets/images/logo.jpg" alt="VRDC Logo" className="h-10 w-auto object-contain" />
          <span className="hidden md:inline leading-tight">
            Vanasthali <br className="hidden lg:block" />
            <span className="text-sm font-medium text-gray-600">Rural Development Centre</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-10">

          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                className={`text-[15px] font-semibold relative transition-colors duration-300 ${isActive(link.path) ? 'text-green-700' : 'text-gray-700 hover:text-green-700'
                  }`}
              >
                {link.name}

                {/* Underline */}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-green-600 transition-all duration-300 ${isActive(link.path) ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                ></span>
              </Link>
            </li>
          ))}

          {/* Donate Button */}
          <li>
            <Button
              variant="contained"
              href="#footer"
              sx={{
                borderRadius: '999px',
                px: '22px',
                py: '8px',
                fontSize: '0.9rem',
                fontWeight: 600,
                backgroundColor: '#2e7d32',
                color: '#ffffff',
                textTransform: 'none',
                boxShadow: 'none',
                '&:hover': {
                  backgroundColor: '#1b5e20',
                  transform: 'translateY(-1px)',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                },
              }}
            >
              Donate Now
            </Button>
          </li>

        </ul>

        {/* Mobile Nav */}
        <div className="lg:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <button className="p-2 text-green-700">
                <Menu size={26} />
              </button>
            </SheetTrigger>

            <SheetContent className="w-[280px] bg-white p-8 shadow-xl">
              <SheetHeader>
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              </SheetHeader>

              <ul className="flex flex-col items-center justify-center h-full gap-6">
                {navLinks.map((link) => (
                  <li key={link.name} className="w-full text-center">
                    <Link
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={`text-lg font-semibold ${isActive(link.path) ? 'text-green-700' : 'text-gray-700'
                        }`}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}

                <li className="w-full mt-4">
                  <Button
                    variant="contained"
                    fullWidth
                    href="#footer"
                    onClick={() => setIsOpen(false)}
                    sx={{
                      borderRadius: '999px',
                      py: '10px',
                      fontSize: '1rem',
                      fontWeight: 600,
                      backgroundColor: '#2e7d32',
                      color: '#ffffff',
                      textTransform: 'none',
                    }}
                  >
                    Donate Now
                  </Button>
                </li>
              </ul>
            </SheetContent>
          </Sheet>
        </div>

      </div>
    </nav>
    </header>


  );
};

export default Navbar;
