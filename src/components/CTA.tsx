import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Zap, Shield, Clock } from "lucide-react";

const guarantees = [
  {
    icon: Shield,
    title: "Garantia de 7 dias",
    description: "Não gostou? Devolvemos 100% do seu dinheiro"
  },
  {
    icon: Clock,
    title: "Acesso imediato",
    description: "Comece a usar agora mesmo após a compra"
  },
  {
    icon: Zap,
    title: "Suporte prioritário",
    description: "Nossa equipe te ajuda a configurar tudo"
  }
];

export const CTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/5 to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/10 rounded-full blur-[150px] animate-pulse" />
      
      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Main CTA Card */}
          <Card className="relative p-8 md:p-12 bg-gradient-to-br from-card via-card to-accent/5 border-2 border-accent shadow-[0_0_60px_hsl(var(--accent)/0.3)] animate-slide-up">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-accent/20 via-transparent to-brand-orange/20 rounded-lg blur-xl" />
            
            <div className="relative space-y-8">
              {/* Header */}
              <div className="text-center space-y-4">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black">
                  Pronto para <span className="text-accent text-glow-neon">Transformar</span>
                  <br />sua Consultoria?
                </h2>
                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                  Junte-se a mais de 500 personal trainers que já automatizaram 
                  seus processos e multiplicaram seus resultados
                </p>
              </div>

              {/* Pricing */}
              <div className="text-center space-y-4">
                <div className="inline-block">
                  <p className="text-sm text-muted-foreground line-through mb-2">
                    De R$ 997,00 por
                  </p>
                  <div className="flex items-baseline justify-center gap-2">
                    <span className="text-2xl font-bold">R$</span>
                    <span className="text-6xl md:text-7xl font-black text-accent text-glow-neon">497</span>
                  </div>
                  <p className="text-xl mt-2">
                    ou <span className="font-bold text-accent">12x de R$ 49,70</span>
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    ✨ Oferta por tempo limitado - Acesso vitalício
                  </p>
                </div>
              </div>

              {/* Benefits */}
              <div className="max-w-md mx-auto space-y-3">
                {[
                  "Acesso vitalício sem mensalidade",
                  "Todas as atualizações incluídas",
                  "Suporte técnico prioritário",
                  "Biblioteca de treinos completa",
                  "Vídeos tutoriais passo a passo"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0" />
                    <p className="text-base font-medium">{benefit}</p>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="text-center pt-4">
                <Button 
                  size="lg"
                  className="group relative overflow-hidden bg-accent hover:bg-accent/90 text-accent-foreground font-black text-xl px-12 py-8 rounded-xl shadow-[0_0_50px_hsl(var(--neon-green)/0.4)] hover:shadow-[0_0_80px_hsl(var(--neon-green)/0.6)] transition-all duration-300 transform hover:scale-105"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    <Zap className="w-6 h-6" />
                    QUERO AUTOMATIZAR MINHA CONSULTORIA AGORA
                  </span>
                </Button>
                <p className="text-xs text-muted-foreground mt-4">
                  🔒 Pagamento 100% seguro via cartão de crédito ou PIX
                </p>
              </div>
            </div>
          </Card>

          {/* Guarantees */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {guarantees.map((guarantee, index) => (
              <Card 
                key={index}
                className="p-6 bg-card/50 backdrop-blur border-accent/20 text-center space-y-3 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 mx-auto rounded-full bg-accent/10 flex items-center justify-center">
                  <guarantee.icon className="w-7 h-7 text-accent" />
                </div>
                <h4 className="font-bold text-lg">{guarantee.title}</h4>
                <p className="text-sm text-muted-foreground">{guarantee.description}</p>
              </Card>
            ))}
          </div>

          {/* Final Urgency Message */}
          <div className="text-center mt-12 space-y-4">
            <p className="text-xl md:text-2xl font-bold text-destructive animate-pulse">
              ⚡ Vagas limitadas - Preço promocional termina em breve
            </p>
            <p className="text-muted-foreground">
              Não deixe seus concorrentes saírem na frente. Automatize agora!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
