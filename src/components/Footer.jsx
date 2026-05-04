import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="footer" className="bg-[#1a1a1a] text-white pt-16 pb-8">
      <div className="w-full max-w-[1200px] mx-auto px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Column 1: About & Social */}
          <div className="footer-col">
            <h3 className="text-white text-[1.5rem] font-bold mb-6 relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-[40px] after:h-[2px] after:bg-green-600">
              Vanasthali
            </h3>
            <p className="text-[#aaa] mb-6 leading-relaxed">
              Empowering rural voices and fostering sustainable community development through education and leadership since 1981.
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-green-600 transition-colors">
                <i className="fab fa-facebook-f text-lg"></i>
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-green-600 transition-colors">
                <i className="fab fa-instagram text-lg"></i>
              </a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-green-600 transition-colors">
                <i className="fab fa-linkedin-in text-lg"></i>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-col">
            <h3 className="text-white text-[1.5rem] font-bold mb-6 relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-[40px] after:h-[2px] after:bg-green-600">
              Quick Links
            </h3>
            <div className="flex flex-col gap-3">
              <Link to="/" className="text-[#aaa] hover:text-green-500 hover:pl-1 transition-all">Home</Link>
              <Link to="/about" className="text-[#aaa] hover:text-green-500 hover:pl-1 transition-all">About Us</Link>
              <Link to="/programs" className="text-[#aaa] hover:text-green-500 hover:pl-1 transition-all">Our Programs</Link>
              <Link to="/stories" className="text-[#aaa] hover:text-green-500 hover:pl-1 transition-all">Stories of Change</Link>
              <Link to="/testimonial" className="text-[#aaa] hover:text-green-500 hover:pl-1 transition-all">Testimonials</Link>
            </div>
          </div>

          {/* Column 3: Contact Info */}
          <div className="footer-col">
            <h3 className="text-white text-[1.5rem] font-bold mb-6 relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-[40px] after:h-[2px] after:bg-green-600">
              Contact Info
            </h3>
            <div className="flex flex-col gap-4 text-[#aaa]">
              <a href="https://www.google.com/maps/search/?api=1&query=Kalindi+Apts,+318/19+B,+Canal+Road,+Model+Colony,+Shivaji+Nagar,+Pune" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 hover:text-green-500 transition-colors group">
                <MapPin className="text-green-500 mt-1 shrink-0 group-hover:scale-110 transition-transform" size={20} />
                <span>Kalindi Apts, 318/19 B, Canal Road, Model Colony (Shivaji Nagar), Pune – 411016, Maharashtra, India</span>
              </a>
              <div className="flex items-center gap-3">
                <Phone className="text-green-500 shrink-0" size={20} />
                <span className="flex gap-2">
                  <a href="tel:02025651550" className="hover:text-green-500 transition-colors">(020) 25651550</a> / 
                  <a href="tel:02025660124" className="hover:text-green-500 transition-colors">25660124</a>
                </span>
              </div>
              <a href="mailto:vanasthali515@gmail.com" className="flex items-center gap-3 hover:text-green-500 transition-colors group">
                <Mail className="text-green-500 shrink-0 group-hover:scale-110 transition-transform" size={20} />
                <span>vanasthali515@gmail.com</span>
              </a>
            </div>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="text-center pt-8 border-t border-[#333] text-[#888]">
          <p>&copy; {new Date().getFullYear()} Vanasthali Rural Development Centre. All Rights Reserved.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
