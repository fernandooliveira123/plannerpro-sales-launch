import { Card } from "@/components/ui/card";
import { 
  Dumbbell, 
  Calendar, 
  DollarSign, 
  ClipboardList, 
  Library, 
  TrendingUp, 
  Send, 
  CheckSquare,
  Smartphone,
  Infinity
} from "lucide-react";
import mockupDesktop from "@/assets/mockup-desktop.png";
import mockupDevices from "@/assets/mockup-devices.jpg";

const features = [
  {
    icon: Dumbbell,
    title: "Montagem automática de treinos",
    description: "Crie treinos personalizados por objetivo em minutos"
  },
  {
    icon: Library,
    title: "Biblioteca de treinos",
    description: "Salve e reutilize treinos de forma inteligente"
  },
  {
    icon: ClipboardList,
    title: "Avaliação física completa",
    description: "Pollock 3-7 dobras integrado ao sistema"
  },
  {
    icon: TrendingUp,
    title: "Painel de carga e volume",
    description: "Acompanhe a progressão sem usar Excel"
  },
  {
    icon: Send,
    title: "Envio direto para alunos",
    description: "Treinos entregues automaticamente no app do aluno"
  },
  {
    icon: DollarSign,
    title: "Gestão de pagamentos",
    description: "Controle de inadimplência e cobranças automáticas"
  },
  {
    icon: Calendar,
    title: "Agenda integrada",
    description: "Rotina semanal planejada e sincronizada"
  },
  {
    icon: CheckSquare,
    title: "Checklist de hábitos",
    description: "PSE pós-treino e acompanhamento de rotina"
  },
  {
    icon: Infinity,
    title: "Acesso vitalício",
    description: "Sem mensalidade, pague uma vez e use para sempre"
  },
  {
    icon: Smartphone,
    title: "Multi-plataforma",
    description: "Funciona em celular, tablet ou computador"
  }
];

export const Features = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card to-background" />
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-accent/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-brand-orange/10 rounded-full blur-[150px]" />
      
      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 space-y-6 max-w-4xl mx-auto animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black">
            <span className="text-accent text-glow-neon">Automação e Organização</span>
            <br />em um só lugar!
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            O Planner Personal Pro é uma ferramenta de automação e organização criada 
            especificamente para personal trainers.
          </p>
        </div>

        {/* Mockup Showcase */}
        <div className="mb-20 animate-slide-up">
          <div className="relative max-w-5xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-accent/20 via-transparent to-brand-orange/20 blur-3xl" />
            <img 
              src={mockupDevices} 
              alt="Planner Personal Pro em múltiplos dispositivos" 
              className="relative z-10 w-full rounded-2xl shadow-2xl"
            />
          </div>
        </div>

        {/* Features Grid */}
        <div className="max-w-4xl mx-auto mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">
            📦 O que está incluso no <span className="text-accent">Planner Personal Pro</span>:
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={index}
                className="group p-6 bg-card/80 backdrop-blur border-border hover:border-accent/50 transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--accent)/0.15)] animate-slide-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                    <feature.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-bold text-lg">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className="text-center max-w-3xl mx-auto">
          <Card className="p-8 bg-gradient-to-br from-accent/5 to-brand-orange/5 border-2 border-accent/20">
            <p className="text-xl font-semibold mb-4">
              🎯 Layout simples, intuitivo e com vídeos tutoriais
            </p>
            <p className="text-muted-foreground">
              Não precisa ser expert em tecnologia. Nossa interface foi desenhada 
              pensando em você, personal trainer, para que possa focar no que realmente importa: 
              seus alunos e resultados.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};
