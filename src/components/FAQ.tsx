import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    question: "Como funciona a automação no Planner?",
    answer: (
      <>
        O Planner Personal Pro conta com um sistema de automação que te permite criar treinos completos em minutos.
        Com apenas alguns cliques, você monta treinos personalizados com séries, repetições, cargas e vídeos explicativos.
        A ferramenta sugere exercícios com base no tipo de treino e objetivo do aluno, economizando tempo e padronizando seu atendimento.
        Além disso, você pode reaproveitar treinos, aplicar filtros por aluno, objetivo ou grupo muscular e gerar planos prontos em segundos.
      </>
    ),
  },
  {
    question: "Como vou receber?",
    answer: "Após sua compra, você receberá um e-mail de forma instantânea com as instruções de acesso ao produto.",
  },
  {
    question: "Pode prescrever também a dieta do aluno no App?",
    answer: "Sim, dentro do Planner você pode prescrever a dieta do aluno, treinos, avaliação física, e muito mais.",
  },
  {
    question: "Preciso pagar mensalidades?",
    answer: "Não, o Planner é um investimento único, sem renovação mensal ou anual.",
  },
  {
    question: "Vem com vídeos?",
    answer: "Sim vão com mais de 450 vídeos. É tudo personalizável e feito sob medida para você.",
  },
  {
    question: "Tenho limite de alunos?",
    answer: "Não, não há limite de alunos. Trabalhe com o número que você quiser, sem restrições ou taxas adicionais.",
  },
  {
    question: "Qual o formato do produto? Por onde irei editá-lo?",
    answer: (
      <>
        O Planner Personal Trainer é um <strong>template profissional criado no Notion</strong>. Você poderá editá-lo de forma simples e intuitiva diretamente pelo <strong>navegador (web)</strong> ou aplicativo do Notion, tanto no <strong>celular quanto no computador</strong>.
        <br /><br />
        Todas as suas informações ficam <strong>salvas e sincronizadas automaticamente</strong>, sem risco de perda. É mais fácil que usar uma planilha! E o melhor: você vai aprender tudo com nosso <strong>passo a passo completo dentro da área de membros</strong>.
      </>
    ),
  },
  {
    question: "O Planner precisa usar o GlideApp e Planilhas em Excel?",
    answer: (
      <>
        Não! O Planner Personal Trainer Pro foi criado para ser uma solução completa, centralizada e prática, sem a necessidade de usar o Glide ou planilhas externas. Todas as funcionalidades estão integradas em uma única plataforma, uma plataforma intuitiva, prática e acessível de qualquer dispositivo, que permite gerenciar sua carreira e alunos de forma profissional e sem limitações.
        <h3 className="font-bold mt-4 mb-2">Gestão completa:</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Tudo em um só lugar:</strong> Com o Planner, é possível organizar múltiplos alunos, compartilhar treinos individualmente e acompanhar tudo em tempo real, de forma prática e colaborativa.
          </li>
          <li>
            <strong>Tudo em um só lugar:</strong> Desenvolvido em uma plataforma intuitiva, prática e acessível de qualquer dispositivo.
          </li>
          <li>
            <strong>Sem dependência de outros apps:</strong> Você não precisará de Glide, Excel ou qualquer outro sistema para acessar ou compartilhar suas informações de treinos com seus alunos.
          </li>
        </ul>
      </>
    ),
  },
  {
    question: "Como o Aluno recebe os treinos?",
    answer: (
      <>
        O aluno acessa os treinos diretamente por um aplicativo personalizado, que pode ser instalado no celular por meio de um link exclusivo gerado no seu Painel de Controle de Alunos. Isso garante uma experiência prática e profissional para seus alunos.{" "}
        <a
          href="https://torch-request-878.notion.site/Jo-o-1572f92c1e2380278990d021ac214595"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline font-semibold"
        >
          Veja um exemplo aqui!
        </a>
      </>
    ),
  },
  {
    question: "Posso enviar o treino em PDF?",
    answer: "Pode sim, caso você prefira poderá enviar os treinos em PDF e os links de vídeos ficam clicáveis para seu aluno visualizar o exercício.",
  },
  {
    question: "Posso gerenciar meus alunos em um local só?",
    answer: "Sim, o Planner possibilita que o personal gerencie todos os seus alunos em um ambiente só, sem ficar criando diversas planilhas em seu dispositivo. Com isso fica muito melhor para fazer o gerenciamento.",
  },
  {
    question: "É possível adicionar meus próprios vídeos?",
    answer: "É possível sim, estão indo cerca de 450 vídeos, mas se você precisar pode adicionar mais.",
  },
  {
    question: "Posso Usar o Planner diretamente em meu celular, Tablet ou Ipad?",
    answer: "Sim, o Planner pode ser utilizado diretamente em dispositivos móveis sem a necessidade do computador. Funcionando em todos os sistemas operacionais, seja Android ou iOS, tanto em dispositivos móveis como dispositivos desktops como computadores e notebooks.",
  },
];

export const FAQ = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background via-muted/30 to-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-white/5 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Dúvidas Frequentes
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tire suas dúvidas sobre o Planner Personal Pro
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqData.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border rounded-lg overflow-hidden bg-card shadow-md hover:shadow-lg transition-shadow"
              >
                <AccordionTrigger className="px-6 py-4 text-left bg-gradient-to-r from-[#32CD32] to-[#008000] text-white hover:from-[#28a428] hover:to-[#006b00] transition-all [&[data-state=open]]:rounded-b-none hover:no-underline">
                  <span className="font-semibold text-base sm:text-lg">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 bg-muted/30 text-foreground">
                  <div className="text-sm sm:text-base leading-relaxed">
                    {faq.answer}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
