import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Eye, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const templates = [
  {
    id: 1,
    name: "Modern Business",
    category: "Corporate",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    preview: "https://example.com/preview1"
  },
  {
    id: 2,
    name: "E-commerce Store",
    category: "E-commerce",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    preview: "https://example.com/preview2"
  },
  {
    id: 3,
    name: "Medical Clinic",
    category: "Healthcare",
    image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    preview: "https://example.com/preview3"
  },
  {
    id: 4,
    name: "Online Course",
    category: "Education",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    preview: "https://example.com/preview4"
  },
  {
    id: 5,
    name: "Restaurant Menu",
    category: "Food & Beverages",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    preview: "https://example.com/preview5"
  },
  {
    id: 6,
    name: "Creative Portfolio",
    category: "Portfolio",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    preview: "https://example.com/preview6"
  },
  {
    id: 7,
    name: "Tech Startup",
    category: "Tech",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    preview: "https://example.com/preview7"
  },
  {
    id: 8,
    name: "Hotel Booking",
    category: "Hospitality",
    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    preview: "https://example.com/preview8"
  }
];

const TemplateCard = ({ template }: { template: typeof templates[0] }) => {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-card shadow-card hover:shadow-card-hover transition-all duration-300">
      <div className="aspect-[4/3] overflow-hidden">
        <img 
          src={template.image} 
          alt={template.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
          <div className="flex gap-3">
            <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white text-primary">
              <Eye className="w-4 h-4 mr-2" />
              Preview
            </Button>
            <Button size="sm" className="bg-primary hover:bg-primary/90">
              <Download className="w-4 h-4 mr-2" />
              Use Template
            </Button>
          </div>
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-foreground">{template.name}</h3>
          <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary font-medium">
            {template.category}
          </span>
        </div>
      </div>
    </div>
  );
};

const Templates = () => {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>Website Templates - Choose Your Perfect Design</title>
        <meta name="description" content="Browse our collection of professional website templates. Find the perfect design for your business across various industries and customize it to your needs." />
        <meta name="keywords" content="website templates, business website designs, responsive templates, customizable themes" />
        <link rel="canonical" href="/templates" />
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Header */}
        <header className="bg-card border-b">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center gap-4">
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => navigate('/')}
                className="flex items-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Sectors
              </Button>
              <div>
                <h1 className="text-2xl font-bold text-foreground">Website Templates</h1>
                <p className="text-muted-foreground">Choose from our professionally designed templates</p>
              </div>
            </div>
          </div>
        </header>

        {/* Templates Grid */}
        <main className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {templates.map((template) => (
              <TemplateCard key={template.id} template={template} />
            ))}
          </div>
        </main>

        {/* Call to Action */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Need a Custom Design?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Can't find the perfect template? Our design team can create a custom website tailored specifically to your business needs.
            </p>
            <Button className="bg-gradient-primary hover:shadow-card-hover transition-all duration-300">
              Request Custom Design
            </Button>
          </div>
        </section>
      </div>
    </>
  );
};

export default Templates;