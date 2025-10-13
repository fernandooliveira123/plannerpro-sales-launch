import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Play, X } from "lucide-react";
import heroImage from "@/assets/hero-trainer.jpg";

// ===== WISTIA PLAYER COMPONENT =====
const WistiaPlayer = ({ mediaId = "8g69j4wgkk" }) => {
  const playerRef = useRef<HTMLDivElement>(null);
  const aspect = 1.7777777777777777;
  const swatchUrl = `https://fast.wistia.com/embed/medias/${mediaId}/swatch`;

  useEffect(() => {
    const script1 = document.createElement("script");
    script1.src = "https://fast.wistia.com/player.js";
    script1.async = true;
    document.body.appendChild(script1);

    const script2 = document.createElement("script");
    script2.src = `https://fast.wistia.com/embed/${mediaId}.js`;
    script2.async = true;
    script2.type = "module";
    document.body.appendChild(script2);

    return () => {
      if (document.body.contains(script1)) document.body.removeChild(script1);
      if (document.body.contains(script2)) document.body.removeChild(script2);
    };
  }, [mediaId]);

  return (
    <div style={{ width: "100%", maxWidth: 900, margin: "0 auto" }}>
      <style>{`
        wistia-player[media-id='${mediaId}']:not(:defined) {
          background: center / contain no-repeat url('${swatchUrl}');
          display: block;
          filter: blur(5px);
          padding-top: ${100 / aspect}%;
        }
      `}</style>
      <div 
        ref={playerRef}
        dangerouslySetInnerHTML={{
          __html: `<wistia-player media-id="${mediaId}" aspect="${aspect}"></wistia-player>`
        }}
      />
    </div>
  );
};

// ===== VIDEO POPUP MODAL =====
interface VideoPopupProps {
  showVideo: boolean;
  setShowVideo: (show: boolean) => void;
  mediaId?: string;
}

const VideoPopup = ({ showVideo, setShowVideo, mediaId = "8g69j4wgkk" }: VideoPopupProps) => {
  // Fechar com ESC e prevenir scroll
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setShowVideo(false);
    };
    
    if (showVideo) {
      window.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [showVideo, setShowVideo]);

  if (!showVideo) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/95 flex items-center justify-center z-50 p-4"
      onClick={() => setShowVideo(false)}
    >
      <button
        onClick={() => setShowVideo(false)}
        className="absolute top-6 right-6 text-white hover:text-accent transition-colors z-10 bg-black/50 rounded-full p-2 hover:bg-black/70"
        aria-label="Fechar vídeo"
      >
        <X className="w-8 h-8" />
      </button>
      
      <div 
        className="w-full max-w-5xl"
        onClick={(e) => e.stopPropagation()}
      >
        <WistiaPlayer mediaId={mediaId} />
      </div>
    </div>
  );
};

// ===== HERO COMPONENT =====
export const Hero = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <>
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
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center pt-6 w-full max-w-full px-4 sm:px-0">
          <Button
            size="lg"
            onClick={() => setShowVideo(true)}
            className="w-full sm:w-auto group relative overflow-hidden bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-xs sm:text-sm md:text-base lg:text-lg px-4 sm:px-6 md:px-8 lg:px-10 py-4 sm:py-5 md:py-6 lg:py-7 rounded-xl shadow-[0_0_40px_hsl(var(--neon-green)/0.3)] hover:shadow-[0_0_60px_hsl(var(--neon-green)/0.5)] transition-all duration-300"
          >
            <Play className="mr-1.5 sm:mr-2 h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-5 md:w-5" />
            Assistir Demonstração
          </Button>

          <Button
            size="lg"
            variant="outline"
            asChild
            className="w-full sm:w-auto border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground font-bold text-xs sm:text-sm md:text-base lg:text-lg px-4 sm:px-6 md:px-8 lg:px-10 py-5 sm:py-5 md:py-6 lg:py-7 rounded-xl transition-all duration-300 overflow-hidden"
          >
            <a 
              href="https://planilhas-personal-trainer.pay.yampi.com.br/r/LQT6V3F973"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center whitespace-normal leading-tight"
            >
              <span className="sm:hidden">Começar Agora</span>
              <span className="hidden sm:inline">Quero Automatizar Agora</span>
            </a>
          </Button>
        </div>

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

      {/* Video Modal */}
      <VideoPopup 
        showVideo={showVideo} 
        setShowVideo={setShowVideo} 
        mediaId="8g69j4wgkk"
      />
    </>
  );
};
