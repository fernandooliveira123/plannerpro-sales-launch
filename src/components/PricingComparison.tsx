import { Card } from "@/components/ui/card";
import { X, CheckCircle2, TrendingDown } from "lucide-react";

export const PricingComparison = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card to-background" />
      
      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 space-y-4 max-w-4xl mx-auto animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black">
            Pare de <span className="text-destructive">Desperdiçar Dinheiro</span> com Mensalidades
          </h2>
          <p className="text-xl text-muted-foreground">
            Veja quanto você economiza com o Planner Personal Pro
          </p>
        </div>

        {/* Comparison Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          {/* Apps com Mensalidade */}
          <Card className="relative p-8 bg-destructive/10 border-2 border-destructive/40 animate-slide-up">
            <div className="absolute top-4 right-4">
              <X className="w-8 h-8 text-destructive" />
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-black text-destructive mb-2">Apps com Mensalidade</h3>
                <p className="text-muted-foreground">Sistemas tradicionais do mercado</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-black text-destructive">R$ 800</span>
                  <span className="text-xl text-muted-foreground">/ano</span>
                </div>
                
                <ul className="space-y-3">
                  <li className="flex gap-2 items-start">
                    <X className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                    <span>Pagamento recorrente todo mês</span>
                  </li>
                  <li className="flex gap-2 items-start">
                    <X className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                    <span>Preço pode aumentar a qualquer momento</span>
                  </li>
                  <li className="flex gap-2 items-start">
                    <X className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                    <span>Perde tudo se parar de pagar</span>
                  </li>
                  <li className="flex gap-2 items-start">
                    <X className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                    <span>Funcionalidades limitadas</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>

          {/* Planner Personal Pro */}
          <Card className="relative p-8 bg-accent/10 border-2 border-accent/40 shadow-[0_0_40px_hsl(var(--accent)/0.3)] animate-slide-up" style={{ animationDelay: "0.1s" }}>
            <div className="absolute top-4 right-4">
              <CheckCircle2 className="w-8 h-8 text-accent" />
            </div>
            
            <div className="space-y-6">
              <div>
                <div className="inline-block bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-bold mb-2">
                  MELHOR ESCOLHA
                </div>
                <h3 className="text-2xl font-black text-accent mb-2">Planner Personal Pro</h3>
                <p className="text-muted-foreground">Pagamento único, acesso vitalício</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-black text-accent">R$ 119</span>
                  <span className="text-xl text-muted-foreground">única vez</span>
                </div>
                
                <ul className="space-y-3">
                  <li className="flex gap-2 items-start">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="font-medium">Pague 1x e use para sempre</span>
                  </li>
                  <li className="flex gap-2 items-start">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="font-medium">Sem reajustes ou surpresas</span>
                  </li>
                  <li className="flex gap-2 items-start">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="font-medium">Acesso vitalício garantido</span>
                  </li>
                  <li className="flex gap-2 items-start">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="font-medium">Sistema 100% completo</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </div>

        {/* Economia Destacada */}
        <div className="max-w-2xl mx-auto">
          <Card className="p-8 bg-gradient-to-r from-accent/20 to-accent/10 border-2 border-accent text-center animate-scale-in">
            <div className="flex items-center justify-center gap-3 mb-4">
              <TrendingDown className="w-8 h-8 text-accent" />
              <h3 className="text-2xl font-black">Economia Garantida</h3>
            </div>
            <p className="text-4xl font-black text-accent mb-2">R$ 681</p>
            <p className="text-lg text-muted-foreground">
              economizados no <strong>primeiro ano</strong> em comparação com apps mensais
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};
