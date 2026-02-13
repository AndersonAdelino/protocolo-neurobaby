import { Gift, MessageSquare, BrainCircuit, ShoppingBag } from "lucide-react";

const bonuses = [
    {
        title: "50 Itens para um Bebê mais Esperto",
        desc: "Cada um desses 50 itens foi escolhido para ativar uma habilidade específica do seu filho. Saiba exatamente o que comprar (e o que ignorar) para transformar o ambiente do seu bebê em um centro de inteligência.",
        value: "R$ 97,00",
        icon: ShoppingBag,
        color: "text-amber-500",
        bg: "bg-amber-50"
    },
    {
        title: "Checklist Salto da Fala (1-2 Anos)",
        desc: "A lista exata de estímulos para a fase da explosão de vocabulário. Saiba o que falar e como brincar para destravar a fala do seu filho.",
        value: "R$ 47,00",
        icon: MessageSquare,
        color: "text-blue-600",
        bg: "bg-blue-50"
    },
    {
        title: "Checklist Lógica e Temperamento (2-3 Anos)",
        desc: "O passo a passo para desenvolver o raciocínio lógico e reduzir as birras através de estímulos que ensinam o bebê a pensar e se acalmar.",
        value: "R$ 47,00",
        icon: BrainCircuit,
        color: "text-emerald-600",
        bg: "bg-emerald-50"
    }
];

export default function BonusSection() {
    return (
        <section className="py-24 bg-white" id="bonus">
            <div className="container px-4 md:px-6 mx-auto max-w-7xl">

                <div className="flex flex-col items-center text-center space-y-6 mb-20">
                    <h2 className="text-3xl font-extrabold tracking-tight md:text-5xl text-slate-900 leading-tight">
                        Receba esses <span className="text-primary italic">Bônus Especiais (Hoje!)</span>
                    </h2>
                    <p className="max-w-2xl text-slate-500 font-medium leading-relaxed">Garanta o desenvolvimento contínuo do seu filho e tenha um protocolo completo até os 3 anos de idade.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {bonuses.map((bonus, i) => (
                        <div key={i} className="group p-8 rounded-[2rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-500 flex flex-col items-start gap-6 relative overflow-hidden">
                            <div className="absolute top-4 right-4 bg-emerald-500 text-white px-3 py-1 rounded-full font-bold uppercase text-[10px] tracking-widest">
                                Grátis
                            </div>
                            <div className={`w-14 h-14 ${bonus.bg} rounded-2xl flex items-center justify-center border border-white`}>
                                <bonus.icon className={`w-7 h-7 ${bonus.color}`} strokeWidth={2} />
                            </div>
                            <div className="space-y-3">
                                <h3 className="text-xl font-bold text-slate-900 leading-tight">
                                    {bonus.title}
                                </h3>
                                <p className="text-slate-600 font-medium leading-relaxed text-sm">
                                    {bonus.desc}
                                </p>
                            </div>
                            <div className="mt-auto pt-6 border-t border-slate-200 w-full flex justify-between items-center text-xs font-bold uppercase tracking-tight">
                                <span className="text-slate-400">Valor Estimado:</span>
                                <span className="text-red-400 line-through">{bonus.value}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
