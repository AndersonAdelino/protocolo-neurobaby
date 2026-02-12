import { AlertCircle } from "lucide-react";

export default function TopBar() {
    return (
        <div className="bg-red-600/90 backdrop-blur-sm text-white py-1.5 px-4 text-center text-[10px] md:text-xs font-bold sticky top-0 z-50 shadow-sm border-b border-white/10 uppercase tracking-widest">
            <div className="container mx-auto flex items-center justify-center gap-2">
                <AlertCircle className="w-3.5 h-3.5 animate-pulse" />
                <span>
                    Oferta de Lançamento: O preço subirá para R$ 97,00 em breve.
                </span>
            </div>
        </div>
    );
}
