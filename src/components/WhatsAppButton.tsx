import { MessageCircle } from "lucide-react";

export const WhatsAppButton = () => {
  const whatsappNumber = "5511999999999"; // Substitua pelo número real
  const message = "Olá! Gostaria de saber mais sobre o Planner Personal.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 animate-fade-in"
      aria-label="Fale conosco no WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
    </a>
  );
};
