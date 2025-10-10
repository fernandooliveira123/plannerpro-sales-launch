import { Card } from "@/components/ui/card";
import { CheckCircle2, TrendingUp, Clock, Smile } from "lucide-react";

export const Story = () => {
  return (
    <section className="py-24 relative">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-card via-background to-card" />
      
      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Title */}
          <div className="text-center mb-16 space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black">
              Do <span className="text-destructive">Caos</span> à Consultoria{" "}
              <span className="text-accent text-glow-neon">Automatizada</span>!
            </h2>
          </div>

          {/* Story Card */}
          <Card className="p-8 md:p-12 bg-card/80 backdrop-blur border-2 border-accent/20 shadow-[0_0_40px_hsl(var(--accent)/0.15)] animate-slide-up">
            <div className="space-y-6">
              <div className="flex items-center gap-4 pb-4 border-b border-accent/20">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent to-brand-orange flex items-center justify-center text-3xl">
                  💬
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-accent">A História do Rafael</h3>
                  <p className="text-muted-foreground">De caos a consultoria automatizada</p>
                </div>
              </div>

              <div className="space-y-4 text-base md:text-lg leading-relaxed">
                <p>
                  <strong>Rafael é Personal Trainer há 7 anos.</strong> Sempre foi esforçado, tinha agenda cheia, 
                  mas vivia no limite. Criava treinos à mão, usava planilhas, WhatsApp e anotações soltas 
                  para tentar controlar tudo.
                </p>

                <div className="bg-destructive/10 border-l-4 border-destructive p-4 rounded my-6">
                  <p className="font-semibold">
                    Um dia, ele perdeu 3 alunos em uma semana: dois disseram que estavam confusos com o 
                    acompanhamento e outro ficou inadimplente por falta de controle. 
                    <span className="text-destructive"> Foi o estopim.</span>
                  </p>
                </div>

                <p>
                  Ele conheceu o <strong className="text-accent">Planner Personal Pro</strong> e decidiu testar. 
                  Em duas semanas, já tinha estruturado treinos automáticos, avaliação integrada e 
                  pagamentos organizados.
                </p>

                {/* Results */}
                <div className="bg-accent/5 border border-accent/20 rounded-lg p-6 my-8">
                  <h4 className="text-2xl font-bold text-accent mb-6 flex items-center gap-2">
                    <TrendingUp className="w-6 h-6" />
                    Resultado:
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold">6 horas livres por semana</p>
                        <p className="text-sm text-muted-foreground">Tempo recuperado para focar no que importa</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold">Mais alunos atendidos</p>
                        <p className="text-sm text-muted-foreground">Capacidade de escalar sem perder qualidade</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold">Faturamento aumentado</p>
                        <p className="text-sm text-muted-foreground">Trabalha menos, ganha mais</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold">Serviço profissional</p>
                        <p className="text-sm text-muted-foreground">Entrega de alto nível garantida</p>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-xl font-bold text-center pt-4">
                  Hoje, Rafael{" "}
                  <span className="text-accent">fatura mais</span>,{" "}
                  <span className="text-accent">trabalha com leveza</span> e{" "}
                  <span className="text-accent">entrega um serviço muito mais profissional</span>.
                </p>
              </div>
            </div>
          </Card>

          {/* Bottom CTA */}
          <div className="text-center mt-12">
            <p className="text-xl md:text-2xl font-medium">
              E se essa também pudesse ser a{" "}
              <span className="text-accent font-bold">SUA história</span>?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
