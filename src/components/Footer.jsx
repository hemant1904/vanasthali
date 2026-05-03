import { TextField, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Footer = () => {
  const handleSubscribe = (e) => {
    e.preventDefault();
    alert('Subscribed successfully!');
  };

  return (
    <footer id="footer" className="bg-[#1a1a1a] text-white pt-16 pb-8">
      <div className="w-full max-w-[1200px] mx-auto px-8">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Column 1: About */}
          <div className="footer-col">
            <h3 className="text-white text-[1.5rem] font-bold mb-6 relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-[40px] after:h-[2px] after:bg-primary">
              Vanasthali
            </h3>
            <p className="text-[#aaa] mb-4">Empowering rural voice and fostering sustainable community development since 1998.</p>
            <div className="flex gap-4 mt-4">
              <a href="#" className="text-white text-[1.2rem] hover:text-primary transition-colors"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="text-white text-[1.2rem] hover:text-primary transition-colors"><i className="fab fa-twitter"></i></a>
              <a href="#" className="text-white text-[1.2rem] hover:text-primary transition-colors"><i className="fab fa-instagram"></i></a>
              <a href="#" className="text-white text-[1.2rem] hover:text-primary transition-colors"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-col">
            <h3 className="text-white text-[1.5rem] font-bold mb-6 relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-[40px] after:h-[2px] after:bg-primary">
              Quick Links
            </h3>
            <div className="flex flex-col gap-3">
              <Link to="/about" className="text-[#aaa] hover:text-primary hover:pl-[5px] transition-all">About Us</Link>
              <Link to="/programs" className="text-[#aaa] hover:text-primary hover:pl-[5px] transition-all">Our Programs</Link>
              <Link to="/#testimonial" className="text-[#aaa] hover:text-primary hover:pl-[5px] transition-all">Testimonial</Link>
              <a href="#" className="text-[#aaa] hover:text-primary hover:pl-[5px] transition-all">Get Involved</a>
              <a href="#" className="text-[#aaa] hover:text-primary hover:pl-[5px] transition-all">Contact Us</a>
            </div>
          </div>

          {/* Column 3: Contact Info */}
          <div className="footer-col">
            <h3 className="text-white text-[1.5rem] font-bold mb-6 relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-[40px] after:h-[2px] after:bg-primary">
              Contact Info
            </h3>
            <div className="flex flex-col gap-3 text-[#aaa]">
              <p className="flex items-start gap-2"><i className="fas fa-map-marker-alt text-primary mt-1"></i> 318/19 B, Canal Road, Model Colony, Pune 411016, India</p>
              <p className="flex items-center gap-2"><i className="fas fa-phone text-primary"></i> 020-25651550</p>
              <p className="flex items-center gap-2"><i className="fas fa-envelope text-primary"></i> vanasthali515@gmail.com</p>
            </div>
          </div>

          {/* Column 4: Newsletter */}
          <div className="footer-col">
            <h3 className="text-white text-[1.5rem] font-bold mb-6 relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-[40px] after:h-[2px] after:bg-primary">
              Newsletter
            </h3>
            <p className="text-[#aaa] mb-4">Subscribe to get updates on our latest programs and impact stories.</p>
            <form className="flex mt-4" onSubmit={handleSubscribe}>
              <TextField 
                variant="outlined"
                placeholder="Your Email Address"
                size="small"
                required
                type="email"
                sx={{
                  backgroundColor: 'white',
                  borderRadius: '4px 0 0 4px',
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '4px 0 0 4px',
                  },
                  flexGrow: 1
                }}
              />
              <Button 
                type="submit"
                variant="contained"
                sx={{
                  backgroundColor: '#2e7d32',
                  borderRadius: '0 4px 4px 0',
                  minWidth: '50px',
                  padding: '8px 16px',
                  '&:hover': {
                    backgroundColor: '#1b5e20',
                  }
                }}
              >
                <i className="fas fa-paper-plane"></i>
              </Button>
            </form>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="text-center pt-8 border-t border-[#333] text-[#888]">
          <p>&copy; 2026 Vanasthali Rural Development Centre. All Rights Reserved.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
