import { whatsapp } from "@/lib/contact";

export default function WhatsAppLink({ className }: { className?: string }) {
  return (
    <a href={whatsapp.url} target="_blank" rel="noopener noreferrer" className={className}>
      WhatsApp · {whatsapp.label}
    </a>
  );
}
