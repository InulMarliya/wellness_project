import { Button } from "@/components/ui/button";
import { Leaf, ArrowRight, Star, Shield, Calendar, Users, Sparkles, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import wellnessHero from "@/assets/wellness-hero.jpg";

const features = [
  {
    icon: Shield,
    title: "Verified Practitioners",
    description: "All therapists are certified and background-checked for your safety.",
  },
  {
    icon: Calendar,
    title: "Easy Booking",
    description: "Book sessions in seconds with our intuitive scheduling system.",
  },
  {
    icon: Users,
    title: "Community Support",
    description: "Connect with others on similar wellness journeys.",
  },
  {
    icon: Sparkles,
    title: "AI Recommendations",
    description: "Get personalized therapy suggestions based on your needs.",
  },
];

const therapies = [
  { name: "Physiotherapy", icon: "🏃", color: "bg-blue-100 text-blue-700" },
  { name: "Acupuncture", icon: "🎯", color: "bg-purple-100 text-purple-700" },
  { name: "Ayurveda", icon: "🌿", color: "bg-green-100 text-green-700" },
  { name: "Chiropractic", icon: "🦴", color: "bg-orange-100 text-orange-700" },
  { name: "Massage", icon: "💆", color: "bg-pink-100 text-pink-700" },
  { name: "Naturopathy", icon: "🌱", color: "bg-teal-100 text-teal-700" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <Leaf className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="font-display text-xl font-bold text-foreground">WellnessHub</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#therapies" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">
                Therapies
              </a>
              <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">
                Features
              </a>
              <a href="#practitioners" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">
                Practitioners
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Link to="/auth">
                <Button variant="ghost" size="sm">Sign In</Button>
              </Link>
              <Link to="/auth">
                <Button variant="wellness" size="sm">Get Started</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 gradient-hero" />
        <div className="absolute top-20 right-0 w-1/2 h-full opacity-20">
          <img src={wellnessHero} alt="" className="w-full h-full object-cover" />
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-32 left-10 animate-float">
          <div className="w-14 h-14 rounded-full bg-sage-light flex items-center justify-center blob">
            <Leaf className="h-6 w-6 text-primary" />
          </div>
        </div>
        <div className="absolute top-60 right-20 animate-float delay-300">
          <div className="w-10 h-10 rounded-full bg-terracotta-light flex items-center justify-center">
            <Heart className="h-5 w-5 text-accent" />
          </div>
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-sage-light rounded-full mb-6 animate-fade-in">
              <Star className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Trusted by 10,000+ wellness seekers</span>
            </div>
            
            <h1 className="font-display text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight mb-6 animate-fade-in delay-100">
              Discover Your Path to
              <span className="block text-primary">Holistic Wellness</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-xl leading-relaxed animate-fade-in delay-200">
              Connect with certified practitioners, book therapy sessions, and find products for your complete mind-body wellness journey.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in delay-300">
              <Link to="/auth">
                <Button variant="hero" size="xl">
                  Start Your Journey
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </Link>
              <Button variant="outline" size="xl">
                Explore Therapies
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-border animate-fade-in delay-400">
              <div>
                <p className="font-display text-4xl font-bold text-primary">500+</p>
                <p className="text-muted-foreground">Verified Practitioners</p>
              </div>
              <div>
                <p className="font-display text-4xl font-bold text-primary">50k+</p>
                <p className="text-muted-foreground">Sessions Booked</p>
              </div>
              <div>
                <p className="font-display text-4xl font-bold text-primary">4.9</p>
                <p className="text-muted-foreground">Average Rating</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Therapies Section */}
      <section id="therapies" className="py-20 lg:py-32 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Explore Alternative Therapies
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover a wide range of holistic healing practices tailored to your unique needs
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {therapies.map((therapy, index) => (
              <div
                key={therapy.name}
                className="group p-6 bg-card rounded-2xl border border-border hover:border-primary/50 hover:shadow-medium transition-all duration-300 cursor-pointer text-center animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`w-14 h-14 mx-auto rounded-xl ${therapy.color} flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform`}>
                  {therapy.icon}
                </div>
                <h3 className="font-medium text-foreground">{therapy.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Everything You Need for Your Wellness Journey
              </h2>
              <p className="text-muted-foreground mb-8 text-lg">
                Our platform brings together practitioners, products, and community support in one seamless experience.
              </p>
              
              <div className="grid gap-6">
                {features.map((feature, index) => (
                  <div
                    key={feature.title}
                    className="flex gap-4 p-4 rounded-xl hover:bg-secondary/50 transition-colors animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="w-12 h-12 rounded-xl bg-sage-light flex items-center justify-center shrink-0">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-medium">
                <img
                  src={wellnessHero}
                  alt="Wellness experience"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-2xl shadow-medium border border-border max-w-xs animate-float">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-sage-light flex items-center justify-center">
                    <Star className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Top Rated</p>
                    <p className="text-xs text-muted-foreground">Acupuncture Session</p>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                  <span className="text-sm text-muted-foreground ml-2">5.0 (128 reviews)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-primary">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-primary-foreground mb-6">
            Ready to Begin Your Wellness Journey?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto text-lg">
            Join thousands of wellness seekers who have transformed their lives through holistic healing.
          </p>
          <Link to="/auth">
            <Button 
              variant="secondary" 
              size="xl"
              className="bg-card text-primary hover:bg-card/90"
            >
              Get Started Free
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <Leaf className="h-4 w-4 text-primary-foreground" />
              </div>
              <span className="font-display text-lg font-bold text-foreground">WellnessHub</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2024 WellnessHub. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
