import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function WhatsAppFloat() {
  const openWhatsApp = () => {
    const message = encodeURIComponent("Hello! I'm interested in ordering fresh Kienyeji chicken. Please send me more details.");
    window.open(`https://wa.me/254712345678?text=${message}`, '_blank');
  };

  return (
    <Button
      onClick={openWhatsApp}
      className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-green-600 hover:bg-green-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-50"
      size="icon"
      title="Chat with us on WhatsApp"
    >
      <MessageCircle className="h-7 w-7" />
    </Button>
  );
}
