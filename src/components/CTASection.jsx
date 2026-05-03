import { Button } from '@mui/material';

const CTASection = () => {
  return (
    <section className="bg-primary text-white text-center py-24 px-4" id="cta">
      <div className="container max-w-[1200px] mx-auto">
        <h2 className="text-[1.8rem] md:text-[2.5rem] text-white font-bold mb-4 text-center">
          Join the Movement of Change
        </h2>
        <p className="text-[1.2rem] mb-8 opacity-90 max-w-[800px] mx-auto">
          Your support can help us reach more villages, educate more children, and empower more women. Together, we
          can build a brighter future.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center px-8 sm:px-0">
          <Button 
            variant="outlined" 
            sx={{ 
              borderRadius: '30px', 
              px: '32px', 
              py: '16px', 
              fontSize: '1.1rem', 
              fontWeight: 600,
              color: 'white',
              borderColor: 'white',
              borderWidth: '2px',
              textTransform: 'none',
              width: { xs: '100%', sm: 'auto' },
              '&:hover': {
                backgroundColor: 'white',
                color: '#2e7d32',
                borderColor: 'white',
                borderWidth: '2px',
                transform: 'translateY(-2px)'
              }
            }}
          >
            Donate Now
          </Button>
          <Button 
            variant="contained" 
            sx={{ 
              borderRadius: '30px', 
              px: '32px', 
              py: '16px', 
              fontSize: '1.1rem', 
              fontWeight: 600,
              backgroundColor: 'white',
              color: '#2e7d32',
              textTransform: 'none',
              width: { xs: '100%', sm: 'auto' },
              '&:hover': {
                backgroundColor: '#f9f6f0',
                transform: 'translateY(-2px)',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)'
              }
            }}
          >
            Partner With Us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
