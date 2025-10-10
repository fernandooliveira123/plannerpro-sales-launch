import { Card } from "@/components/ui/card";
import { ClipboardList, Dumbbell, Activity, Calendar, DollarSign, ListChecks } from "lucide-react";

const pillars = [
  {
    icon: ClipboardList,
    title: "Organização e Estrutura",
    description: "Todos alunos, planos, treinos e agenda centralizados. Chega de se perder em planilhas e anotações."
  },
  {
    icon: Dumbbell,
    title: "Treinos Automáticos",
    description: "Monte treinos completos em segundos. Escolha objetivo, grupamentos - o sistema gera tudo automaticamente."
  },
  {
    icon: Activity,
    title: "Avaliações Físicas e Posturais",
    description: "Protocolos Pollock 3 ou 7 dobras. Simetrógrafo digital + relatórios profissionais."
  },
  {
    icon: Calendar,
    title: "Agenda Inteligente",
    description: "Organize sua semana de forma visual. Nunca mais perca compromissos importantes."
  },
  {
    icon: DollarSign,
    title: "Gestão Financeira Inteligente",
    description: "Controle pagamentos e inadimplência. Relatórios claros de receita e evolução do negócio."
  },
  {
    icon: ListChecks,
    title: "Controle de Hábitos e PSE",
    description: "Checklist de hábitos para alunos acompanharem. PSE pós-treino totalmente automatizado."
  }
];

export const Process = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-card via-background to-card" />
      
      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 space-y-4 max-w-4xl mx-auto animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black">
            Domine Cada Aspecto <span className="text-accent text-glow-neon">Do Seu Trabalho!</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Um sistema completo para gerenciar todos os pilares da sua consultoria
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <Card 
                key={index}
                className="relative p-8 bg-card/80 backdrop-blur border-2 border-accent/20 hover:border-accent/40 transition-all duration-300 hover:shadow-[0_0_40px_hsl(var(--accent)/0.2)] group animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-8 h-8 text-accent" />
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-xl font-bold">{pillar.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-accent/0 via-accent/5 to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
