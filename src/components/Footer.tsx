export const Footer = () => {
  return (
    <footer className="relative py-12 border-t border-border">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Top Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-brand-orange text-3xl">💪</span>
                <h3 className="text-xl font-bold">
                  <span className="text-brand-orange">Planner</span>
                  <span className="text-foreground">PersonalTrainer</span>
                  <span className="text-accent">Pro</span>
                </h3>
              </div>
              <p className="text-sm text-muted-foreground">
                A solução completa para personal trainers que querem automatizar 
                sua consultoria e multiplicar resultados.
              </p>
            </div>

            {/* Links */}
            <div className="space-y-4">
              <h4 className="font-bold text-lg">Links Úteis</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-accent transition-colors">Como Funciona</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Depoimentos</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Perguntas Frequentes</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Contato</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div className="space-y-4">
              <h4 className="font-bold text-lg">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-accent transition-colors">Termos de Uso</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Política de Privacidade</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Política de Reembolso</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="pt-8 border-t border-border text-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} PlannerPersonalTrainerPro. Todos os direitos reservados.
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              Este produto não garante a obtenção de resultados. Qualquer referência ao desempenho 
              passado ou potencial de uma estratégia não é, e não deve ser interpretada como uma 
              recomendação ou garantia de qualquer resultado.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
