import { Card } from "@/components/ui/card";
import { X, CheckCircle2 } from "lucide-react";

const comparisons = [
  {
    before: "Perde horas montando treinos manualmente",
    after: "Treinos automáticos em poucos cliques"
  },
  {
    before: "Dificuldade para controlar carga, séries e volume",
    after: "Controle inteligente de carga, séries e volume"
  },
  {
    before: "Se perde em planilhas e anotações espalhadas",
    after: "Tudo centralizado em um só sistema (sem mensalidade)"
  },
  {
    before: "Sente que não consegue crescer pela falta de organização",
    after: "Mais organização, mais tempo e mais crescimento"
  },
  {
    before: "Gasta com plataformas caras e limitadas",
    after: "Avaliação física integrada (Pollock 3-7 dobras)"
  }
];

export const BeforeAfter = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card to-background" />
      
      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 space-y-4 max-w-4xl mx-auto animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black">
            De Personal <span className="text-destructive">Sobrecarregado</span> a 
            Profissional <span className="text-accent text-glow-neon">Organizado</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Veja a transformação que o Planner entrega
          </p>
        </div>

        {/* Before/After Grid */}
        <div className="max-w-6xl mx-auto">
          <Card className="overflow-hidden border-2 border-accent/20">
            <div className="grid md:grid-cols-2">
              {/* ANTES Column */}
              <div className="bg-destructive/10 p-8 space-y-6 border-r border-destructive/20">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-destructive/20 flex items-center justify-center">
                    <X className="w-6 h-6 text-destructive" />
                  </div>
                  <h3 className="text-2xl font-black text-destructive">ANTES</h3>
                </div>
                
                {comparisons.map((item, index) => (
                  <div 
                    key={index}
                    className="flex gap-3 items-start animate-slide-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <X className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                    <p className="text-foreground/90">{item.before}</p>
                  </div>
                ))}
              </div>

              {/* DEPOIS Column */}
              <div className="bg-accent/10 p-8 space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-2xl font-black text-accent">DEPOIS</h3>
                </div>
                
                {comparisons.map((item, index) => (
                  <div 
                    key={index}
                    className="flex gap-3 items-start animate-slide-up"
                    style={{ animationDelay: `${index * 0.1 + 0.05}s` }}
                  >
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <p className="text-foreground/90 font-medium">{item.after}</p>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
