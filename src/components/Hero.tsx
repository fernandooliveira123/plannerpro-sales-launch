import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Play, X } from "lucide-react";
import heroImage from "@/assets/hero-trainer.jpg";

export const Hero = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />

      {/* Neon Glow Effects */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-accent/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-brand-orange/10 rounded-full blur-[120px]" />

      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-in">
          {/* Brand Logo */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="text-brand-orange text-5xl font-black">💪</div>
            <h2 className="text-2xl md:text-3xl font-bold">
              <span className="text-brand-orange">Planner</span>
              <span className="text-foreground">PersonalTrainer</span>
              <span className="text-accent">Pro</span>
            </h2>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
            Automatize sua consultoria fitness e{" "}
            <span className="text-accent text-glow-neon">ganhe mais</span>{" "}
            com menos esforço
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Chega de planilhas, papel e apps genéricos. O Planner Personal Pro faz tudo por você.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <Button
              size="lg"
              onClick={() => setShowVideo(true)}
              className="group relative overflow-hidden bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg px-10 py-7 rounded-xl shadow-[0_0_40px_hsl(var(--neon-green)/0.3)] hover:shadow-[0_0_60px_hsl(var(--neon-green)/0.5)] transition-all duration-300"
            >
              <Play className="mr-2 h-5 w-5" />
              Assistir Demonstração
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground font-bold text-lg px-10 py-7 rounded-xl transition-all duration-300"
            >
              Quero Automatizar Agora
            </Button>
          </div>

          {/* Video Popup */}
          {showVideo && (
            <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
              <div className="relative w-full max-w-3xl px-4">
                <button
                  onClick={() => setShowVideo(false)}
                  className="absolute -top-10 right-0 text-white hover:text-accent transition"
                >
                  <X className="w-8 h-8" />
                </button>
                <div className="aspect-video rounded-xl overflow-hidden shadow-2xl">
                  <iframe
                    className="w-full h-full"
                    src="https://youtu.be/0-Q4gnFE6wY"
                    title="Demonstração do Planner Personal Pro"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          )}

          {/* Social Proof */}
          <div className="pt-12 flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-muted border-2 border-background flex items-center justify-center text-xs font-bold"
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <span className="font-medium">+500 Personal Trainers usando</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-accent text-2xl">★★★★★</span>
              <span className="font-medium">4.9/5 de avaliação</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-accent rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-accent rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};
