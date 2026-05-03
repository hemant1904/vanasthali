import { Button } from '@mui/material';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from './ui/card';
import { Link } from 'react-router-dom';

const StoriesSection = () => {
  const stories = [
    {
      date: "March 15, 2026",
      title: "New Digital Literacy Center Opened",
      desc: "We are thrilled to announce the opening of our 10th digital literacy center, equipped with modern computers and internet access.",
      img: "https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      date: "February 28, 2026",
      title: "Annual Handicraft Exhibition Success",
      desc: "Our artisan partners showcased their beautiful creations at the state exhibition, securing major bulk orders for the year.",
      img: "https://images.unsplash.com/photo-1542810634-71277d95dc8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      date: "January 10, 2026",
      title: "Health Camp Benefits 500+ Families",
      desc: "Partnering with local medical professionals, we conducted a massive health camp focusing on maternal and child healthcare.",
      img: "https://images.unsplash.com/photo-1584515933487-779824d29309?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section className="py-12 md:py-20" id="stories">
      <div className="container max-w-[1200px] mx-auto px-8">
        
        <h2 className="text-[1.8rem] md:text-[2.5rem] text-primary text-center font-bold mb-12 md:mb-8">
          Latest Stories & Updates
        </h2>
        <p className="text-center text-[#666] max-w-[600px] mx-auto -mt-8 md:-mt-4 mb-12 text-[1.1rem]">
          Read about our latest initiatives and the incredible stories of resilience from
          our communities.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <Card key={index} className="flex flex-col h-full overflow-hidden border-none shadow-sm hover:shadow-md transition-shadow">
              <div className="h-[200px] overflow-hidden">
                <img src={story.img} alt={`Blog ${index + 1}`} className="w-full h-full object-cover" />
              </div>
              <CardHeader className="pb-2">
                <span className="text-primary text-[0.9rem] font-semibold block mb-2">{story.date}</span>
                <CardTitle className="text-[1.5rem] font-bold">{story.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-[#666]">{story.desc}</p>
              </CardContent>
              <CardFooter className="pt-0">
                <Button 
                  component={Link}
                  to="#"
                  variant="outlined" 
                  size="small"
                  sx={{ 
                    borderRadius: '30px', 
                    px: '16px', 
                    py: '8px',
                    color: '#2e7d32',
                    borderColor: '#2e7d32',
                    borderWidth: '2px',
                    textTransform: 'none',
                    fontWeight: 600,
                    '&:hover': {
                      backgroundColor: '#2e7d32',
                      color: 'white',
                      borderColor: '#2e7d32',
                      borderWidth: '2px',
                    }
                  }}
                >
                  Read More
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};

export default StoriesSection;
