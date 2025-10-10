import { AlertCircle, Clock, TrendingDown, Users, FileSpreadsheet } from "lucide-react";
import { Card } from "@/components/ui/card";

const problems = [
  {
    icon: Clock,
    question: "Se perde nos prazos de entregas de treinos e avaliações?",
  },
  {
    icon: Users,
    question: "Já perdeu alunos por falta de organização ou atraso na entrega?",
  },
  {
    icon: TrendingDown,
    question: "Sente que trabalha muito e mesmo assim não consegue crescer?",
  },
  {
    icon: AlertCircle,
    question: "Tem medo de escalar e perder o controle de tudo?",
  },
  {
    icon: FileSpreadsheet,
    question: "Você ainda usa Excel, caderno ou WhatsApp para montar treinos?",
  },
];

export const Problems = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card to-background" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent" />
      
      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-6 mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black">
            Isso soa <span className="text-accent">familiar</span> para você?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Você começa o dia com boas intenções, mas logo está respondendo 20 mensagens, 
            procurando arquivos, editando treinos, cobrando atrasados... No fim do dia, 
            não treinou, não vendeu, e está exausto.
          </p>
          <p className="text-xl md:text-2xl font-bold text-destructive">
            É isso mesmo que você quer continuar vivendo?
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {problems.map((problem, index) => (
            <Card 
              key={index}
              className="group p-6 bg-card/50 backdrop-blur border-border hover:border-accent/50 transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--accent)/0.2)] animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <problem.icon className="w-8 h-8 text-accent" />
                </div>
                <p className="text-base font-semibold leading-relaxed">
                  {problem.question}
                </p>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-2xl md:text-3xl font-bold text-accent animate-pulse">
            Se você respondeu "sim" para pelo menos uma dessas perguntas...
          </p>
          <p className="text-xl md:text-2xl font-medium mt-4">
            Você PRECISA conhecer essa solução 👇
          </p>
        </div>
      </div>
    </section>
  );
};
