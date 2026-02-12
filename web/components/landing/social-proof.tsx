"use client";

import { useEffect, useState } from "react";
import { CheckCircle2 } from "lucide-react";

const names = [
    "Ana Silva", "Beatriz S.", "Carla Souza", "Daniela M.", "Eliana P.",
    "Fernanda R.", "Gabriela T.", "Helena L.", "Isabela V.", "Juliana F.",
    "Katia C.", "Larissa Q.", "Mariana N.", "Natália J.", "Patrícia B."
];

const cities = [
    "São Paulo/SP", "Rio de Janeiro/RJ", "Belo Horizonte/MG", "Curitiba/PR", "Porto Alegre/RS",
    "Salvador/BA", "Fortaleza/CE", "Brasília/DF", "Goiânia/GO", "Manaus/AM"
];

const products = [
    "baixou o Protocolo",
    "ativou o Plano Mestre",
    "garantiu o kit completo",
    "iniciou a neuroestimulação"
];

export default function SocialProofPopUp() {
    const [visible, setVisible] = useState(false);
    const [data, setData] = useState({ name: "", city: "", action: "" });

    useEffect(() => {
        const showPopUp = () => {
            const randomName = names[Math.floor(Math.random() * names.length)];
            const randomCity = cities[Math.floor(Math.random() * cities.length)];
            const randomAction = products[Math.floor(Math.random() * products.length)];

            setData({ name: randomName, city: randomCity, action: randomAction });
            setVisible(true);

            setTimeout(() => {
                setVisible(false);
            }, 5000);
        };

        const interval = setInterval(() => {
            showPopUp();
        }, Math.floor(Math.random() * 20000) + 20000); // 20-40 secs

        const firstTimeout = setTimeout(showPopUp, 8000);

        return () => {
            clearInterval(interval);
            clearTimeout(firstTimeout);
        };
    }, []);

    if (!visible) return null;

    return (
        <div className="fixed bottom-6 left-6 z-[100] animate-in slide-in-from-left-full duration-700 pointer-events-none">
            <div className="bg-white/90 backdrop-blur-md border border-slate-100 p-4 shadow-2xl shadow-slate-200 rounded-3xl flex items-center gap-4 min-w-[300px]">
                <div className="w-10 h-10 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center shrink-0 border border-emerald-100">
                    <CheckCircle2 className="w-5 h-5" strokeWidth={3} />
                </div>
                <div className="flex flex-col">
                    <p className="text-sm font-bold text-slate-900 leading-tight">
                        {data.name} <span className="text-slate-400 font-medium">({data.city})</span>
                    </p>
                    <p className="text-xs font-semibold text-slate-500">
                        {data.action} agora
                    </p>
                </div>
            </div>
        </div>
    );
}
