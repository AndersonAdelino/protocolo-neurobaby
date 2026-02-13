import { AlertCircle } from "lucide-react";

export default function TopBar() {
    return (
        <div className="bg-red-600/90 backdrop-blur-sm text-white py-3 px-4 text-center text-xs md:text-sm font-bold shadow-sm border-b border-white/10 uppercase tracking-widest">
            <div className="container mx-auto flex items-center justify-center gap-2">
                <AlertCircle className="w-4 h-4 animate-pulse" />
                <span>
                    Oferta de Lançamento: O preço subirá para R$ 97,00 em breve.
                </span>
            </div>
        </div>
    );
}
