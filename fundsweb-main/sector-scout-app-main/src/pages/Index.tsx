import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import { ShoppingCart, Briefcase, Heart, GraduationCap, Hotel, Film, User, Laptop, Utensils, Car, Home, Megaphone, Building2, Wrench, HandHeart, PartyPopper, Dumbbell, TrendingUp, Sparkles } from "lucide-react";

const sectors = [
  {
    id: 1,
    title: "E-commerce & Retail",
    icon: ShoppingCart,
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    categories: ["Fashion", "Electronics", "Groceries", "Dropshipping", "Furniture", "Handicrafts"]
  },
  {
    id: 2,
    title: "Corporate & Professional Services",
    icon: Briefcase,
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    categories: ["Consulting", "Legal", "Finance", "Real Estate", "HR & Recruitment"]
  },
  {
    id: 3,
    title: "Healthcare & Medical",
    icon: Heart,
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    categories: ["Clinics", "Hospitals", "Pharma", "Yoga & Wellness"]
  },
  {
    id: 4,
    title: "Education & E-learning",
    icon: GraduationCap,
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    categories: ["Online Courses", "Coaching Centers", "Universities", "Schools"]
  },
  {
    id: 5,
    title: "Hospitality & Travel",
    icon: Hotel,
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    categories: ["Hotels", "Resorts", "Travel Agencies", "Homestays"]
  },
  {
    id: 6,
    title: "Entertainment & Media",
    icon: Film,
    image: "https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    categories: ["Blogs", "News Portals", "Digital Magazines", "Podcasts"]
  },
  {
    id: 7,
    title: "Portfolio & Personal Branding",
    icon: User,
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    categories: ["Freelancers", "Photographers", "Artists", "Influencers", "Public Figures"]
  },
  {
    id: 8,
    title: "Tech & Startups",
    icon: Laptop,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    categories: ["SaaS", "AI Solutions", "IT Services", "Cybersecurity", "App Development"]
  },
  {
    id: 9,
    title: "Food & Beverages",
    icon: Utensils,
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    categories: ["Restaurants", "Cloud Kitchens", "Bakeries", "Organic Food", "Street Food", "Juice Parlors"]
  },
  {
    id: 10,
    title: "Automobile & Transportation",
    icon: Car,
    image: "https://images.unsplash.com/photo-1489824904134-891ab64532f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    categories: ["Car Rentals", "Logistics", "Bike Rentals", "Auto Repair", "Auto Parts"]
  },
  {
    id: 11,
    title: "Local & Home Services",
    icon: Home,
    image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    categories: ["Salons", "Home Cleaning", "Electricians", "Interior Design", "Laundry", "Tailors"]
  },
  {
    id: 12,
    title: "Marketing & Advertising",
    icon: Megaphone,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    categories: ["Digital Marketing", "Social Media", "SEO & Content", "Branding", "Influencer Marketing", "PR Services"]
  },
  {
    id: 13,
    title: "Real Estate & Architecture",
    icon: Building2,
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    categories: ["Property Listings", "Architecture", "Interior Design", "Commercial Spaces"]
  },
  {
    id: 14,
    title: "Hardware & Traditional Merchants",
    icon: Wrench,
    image: "https://images.unsplash.com/photo-1581094271901-8022df4466f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    categories: ["Hardware Shops", "Electrical", "Paint Shops", "Agri Equipment", "Stationery", "Fabric Shops"]
  },
  {
    id: 15,
    title: "NGO & Social Services",
    icon: HandHeart,
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    categories: ["NGOs", "Community", "Religious", "Political"]
  },
  {
    id: 16,
    title: "Events & Wedding Planning",
    icon: PartyPopper,
    image: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    categories: ["Wedding Planners", "Event Organizers", "Photography", "Corporate Events"]
  },
  {
    id: 17,
    title: "Sports & Fitness",
    icon: Dumbbell,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    categories: ["Gyms", "Sports Coaching", "Adventure", "Yoga", "Sports Clubs", "Turf Booking"]
  },
  {
    id: 18,
    title: "Finance & Banking",
    icon: TrendingUp,
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    categories: ["Digital Banking", "Investment", "Insurance", "Financial Advisory"]
  },
  {
    id: 19,
    title: "Beauty & Wellness",
    icon: Sparkles,
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    categories: ["Salons & Spas", "Cosmetics", "Wellness Centers", "Personal Care"]
  }
];

const SectorCard = ({ sector }: { sector: typeof sectors[0] }) => {
  const Icon = sector.icon;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/templates');
  };
  
  return (
    <div className="group [perspective:1000px] h-80 cursor-pointer" onClick={handleClick}>
      <div className="relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        {/* Front Side */}
        <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${sector.image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
          <div className="relative h-full p-6 flex flex-col justify-between text-white">
            <div className="flex justify-center">
              <div className="p-3 rounded-full bg-primary/20 backdrop-blur-sm">
                <Icon size={32} className="text-primary-foreground" />
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold leading-tight">{sector.title}</h3>
            </div>
          </div>
        </div>

        {/* Back Side */}
        <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-2xl bg-gradient-primary p-6 text-white shadow-card-hover">
          <div className="h-full flex flex-col justify-center">
            <h3 className="text-lg font-bold mb-4 text-center">{sector.title}</h3>
            <div className="grid grid-cols-2 gap-2">
              {sector.categories.map((category, index) => (
                <div
                  key={index}
                  className="bg-white/20 backdrop-blur-sm rounded-lg p-2 text-xs text-center font-medium transition-all duration-200 hover:bg-white/30"
                >
                  {category}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Industries & Sectors - Choose Your Business Type</title>
        <meta name="description" content="Discover website solutions across 19+ industries including e-commerce, healthcare, education, tech startups, and more. Find the perfect template for your business." />
        <meta name="keywords" content="industry website builder, business sectors, website templates, e-commerce, healthcare, education, startup websites" />
        <link rel="canonical" href="/sectors" />
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-primary overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-repeat" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }} />
          </div>
          <div className="container mx-auto px-4 relative">
            <div className="text-center text-white">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Choose Your <span className="text-accent">Business Type</span>
              </h1>
              <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto leading-relaxed">
                Discover tailored website solutions across 19+ industries. From e-commerce to healthcare, 
                find the perfect template that understands your business needs.
              </p>
              <div className="mt-8 w-24 h-1 bg-accent mx-auto rounded-full"></div>
            </div>
          </div>
        </section>

        {/* Sectors Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {sectors.map((sector) => (
                <SectorCard key={sector.id} sector={sector} />
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Build Your Website?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of businesses who have already built their online presence with our platform. 
              Start your journey today with industry-specific templates and tools.
            </p>
            <button className="bg-gradient-primary hover:shadow-card-hover transition-all duration-300 text-white px-8 py-4 rounded-lg text-lg font-semibold">
              Get Started Now
            </button>
          </div>
        </section>
      </div>
    </>
  );
};

export default Index;