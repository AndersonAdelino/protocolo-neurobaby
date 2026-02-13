"use client";

import { useEffect, useState } from "react";
import { AlertCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function TopBar() {
    const [dateText, setDateText] = useState("");

    useEffect(() => {
        const now = new Date();
        const formatted = now.toLocaleDateString("pt-BR", {
            day: "numeric",
            month: "long"
        });
        setDateText(formatted);
    }, []);

    return (
        <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="bg-red-600 text-white py-2 px-4 text-center text-[10px] md:text-xs font-bold shadow-md relative z-50 flex items-center justify-center overflow-hidden"
        >
            {/* Background urgency animation */}
            <motion.div
                animate={{ x: ["-100%", "100%"] }}
                transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none"
            />

            <div className="container mx-auto flex items-center justify-center gap-3 relative z-10">
                <div className="flex items-center gap-2">
                    <motion.div
                        initial={{ backgroundColor: "rgb(255, 255, 255)", color: "rgb(220, 38, 38)" }}
                        animate={{
                            scale: [1, 1.02, 1],
                        }}
                        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                        className="bg-white text-red-600 px-3 py-1 rounded-full flex items-center gap-1.5 shadow-sm whitespace-nowrap"
                    >
                        <AlertCircle className="w-3 h-3 md:w-3.5 md:h-3.5 animate-pulse" />
                        <span className="font-black uppercase tracking-tight">
                            Oferta de lançamento hoje, {dateText}:
                        </span>
                    </motion.div>

                    <span className="font-medium tracking-wide hidden sm:inline">
                        O preço subirá para <span className="font-black underline decoration-white/40">R$ 97,00</span> em breve.
                    </span>
                    <span className="font-black sm:hidden">
                        R$ 97,00 EM BREVE!
                    </span>
                </div>
            </div>
        </motion.div>
    );
}
