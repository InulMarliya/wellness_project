import { Leaf, Sparkles, Heart, Star } from "lucide-react";
import wellnessHero from "@/assets/wellness-hero.jpg";

const therapies = [
  "Physiotherapy",
  "Acupuncture", 
  "Ayurveda",
  "Chiropractic",
  "Massage Therapy",
  "Naturopathy",
];

const AuthHero = () => {
  return (
    <div className="relative h-full overflow-hidden bg-gradient-to-br from-primary/10 via-background to-sage-light">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={wellnessHero}
          alt="Wellness spa with bamboo and zen stones"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-transparent to-sage-light/50" />
      </div>

      {/* Floating Decorative Elements */}
      <div className="absolute top-20 left-10 animate-float">
        <div className="w-16 h-16 rounded-full bg-primary/20 blob flex items-center justify-center">
          <Leaf className="h-8 w-8 text-primary" />
        </div>
      </div>
      <div className="absolute top-40 right-20 animate-float delay-200">
        <div className="w-12 h-12 rounded-full bg-accent/20 blob-2 flex items-center justify-center">
          <Sparkles className="h-6 w-6 text-accent" />
        </div>
      </div>
      <div className="absolute bottom-40 left-20 animate-float delay-300">
        <div className="w-10 h-10 rounded-full bg-sage-light flex items-center justify-center">
          <Heart className="h-5 w-5 text-primary" />
        </div>
      </div>
      <div className="absolute bottom-60 right-16 animate-float delay-500">
        <div className="w-14 h-14 rounded-full bg-terracotta-light/50 flex items-center justify-center">
          <Star className="h-6 w-6 text-accent" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center px-8 lg:px-16">
        <div className="max-w-lg animate-fade-in">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center shadow-glow">
              <Leaf className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="font-display text-2xl font-bold text-foreground">WellnessHub</span>
          </div>
          
          <h1 className="font-display text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-4">
            Your Journey to
            <span className="block text-primary">Holistic Wellness</span>
          </h1>
          
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Connect with verified practitioners, book therapy sessions, and discover products 
            for your complete wellness journey.
          </p>

          {/* Therapy Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {therapies.map((therapy, index) => (
              <span
                key={therapy}
                className="px-3 py-1.5 bg-card/80 backdrop-blur-sm text-sm text-foreground rounded-full border border-border shadow-soft animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {therapy}
              </span>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6">
            <div className="text-center animate-fade-in delay-300">
              <p className="font-display text-3xl font-bold text-primary">500+</p>
              <p className="text-sm text-muted-foreground">Practitioners</p>
            </div>
            <div className="text-center animate-fade-in delay-400">
              <p className="font-display text-3xl font-bold text-primary">10k+</p>
              <p className="text-sm text-muted-foreground">Sessions</p>
            </div>
            <div className="text-center animate-fade-in delay-500">
              <p className="font-display text-3xl font-bold text-primary">4.9</p>
              <p className="text-sm text-muted-foreground">Rating</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </div>
  );
};

export default AuthHero;
