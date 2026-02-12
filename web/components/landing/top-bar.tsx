import { AlertCircle } from "lucide-react";

export default function TopBar() {
    return (
        <div className="bg-red-600 text-white py-2 px-4 text-center text-xs md:text-sm font-bold sticky top-0 z-50 shadow-md">
            <div className="container mx-auto flex items-center justify-center gap-2">
                <AlertCircle className="w-4 h-4 animate-pulse" />
                <span>
                    ATENÇÃO: PREÇO DE LANÇAMENTO — ESSA OFERTA PODE SAIR DO AR A QUALQUER MOMENTO SEM AVISO PRÉVIO.
                </span>
            </div>
        </div>
    );
}
