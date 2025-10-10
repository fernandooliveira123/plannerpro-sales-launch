import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Carla Dias",
    role: "Coach de Emagrecimento",
    quote: "Eu usava 3 apps, planilhas e ainda anotava coisas no papel. O Planner juntou tudo em um só lugar. Hoje meus alunos elogiam a organização e eu me sinto uma empresa de verdade.",
    result: "Passou de 15 para 28 alunos em 4 meses",
    rating: 5
  },
  {
    name: "Rafael Mendes",
    role: "Personal Trainer Online",
    quote: "O Planner mudou tudo na minha rotina. Eu gastava horas fazendo treinos e cobrando alunos. Agora tudo flui. Tenho mais tempo, mais alunos e sou muito mais respeitado.",
    result: "Economiza 6h por semana com automação",
    rating: 5
  },
  {
    name: "Marina Costa",
    role: "Personal Trainer em Estúdio",
    quote: "Consegui escalar meu trabalho sem perder a qualidade. Hoje gerencio 40 alunos com facilidade e ainda tenho tempo para estudar e me desenvolver profissionalmente.",
    result: "40 alunos organizados em um só sistema",
    rating: 5
  }
];

export const Testimonials = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-card via-background to-card" />
      
      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 space-y-6 max-w-4xl mx-auto animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black">
            Um Sistema <span className="text-accent text-glow-neon">Unificado</span> e Completo
          </h2>
          <p className="text-xl md:text-2xl font-medium">
            O Planner não é promessa. É <span className="text-accent font-bold">processo</span>. E funciona.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="relative p-8 bg-card/80 backdrop-blur border-2 border-accent/20 hover:border-accent/40 transition-all duration-300 hover:shadow-[0_0_40px_hsl(var(--accent)/0.2)] animate-slide-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10">
                <Quote className="w-16 h-16 text-accent" />
              </div>

              {/* Content */}
              <div className="relative space-y-4">
                {/* Rating */}
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-accent text-xl">★</span>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-base leading-relaxed italic">
                  "{testimonial.quote}"
                </p>

                {/* Result */}
                {testimonial.result && (
                  <div className="bg-accent/10 border border-accent/20 rounded-lg px-4 py-2">
                    <p className="text-sm font-bold text-accent">✨ {testimonial.result}</p>
                  </div>
                )}

                {/* Author */}
                <div className="pt-4 border-t border-accent/20">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                      <span className="text-accent font-bold text-sm">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <p className="font-bold text-base">{testimonial.name}</p>
                      <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Social Proof Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center space-y-2">
            <div className="text-4xl md:text-5xl font-black text-accent">+500</div>
            <p className="text-muted-foreground">Personal Trainers usando</p>
          </div>
          <div className="text-center space-y-2">
            <div className="text-4xl md:text-5xl font-black text-accent">4.9/5</div>
            <p className="text-muted-foreground">Avaliação média</p>
          </div>
          <div className="text-center space-y-2">
            <div className="text-4xl md:text-5xl font-black text-accent">6h+</div>
            <p className="text-muted-foreground">Economizadas por semana</p>
          </div>
        </div>
      </div>
    </section>
  );
};
