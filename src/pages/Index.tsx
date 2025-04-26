
import { Navigation } from "@/components/Navigation"
import { Hero } from "@/components/Hero"
import { Stats } from "@/components/Stats"
import { Features } from "@/components/Features"
import { ContactForm } from "@/components/ContactForm"

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-16">
        <Hero />
        <Stats />
        <Features />
        <ContactForm />
      </div>
    </div>
  );
};

export default Index;
