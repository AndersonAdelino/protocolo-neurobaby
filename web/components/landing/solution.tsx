import { Brain, Target, Rocket, Shield, PiggyBank } from "lucide-react";

const inclusions = [
    {
        icon: Brain,
        title: "Mapa Mental do Gênio",
        tag: "0-12 Meses",
        desc: "Um checklist diário pronto para uso. Saiba exatamente qual estímulo fazer para ativar os neurônios certos.",
        color: "text-blue-600",
        bg: "bg-blue-50"
    },
    {
        icon: Target,
        title: "Fim da Culpa Parental",
        tag: "Confiança",
        desc: "A certeza absoluta de que você está fazendo o melhor pelo desenvolvimento cognitivo do seu filho todos os dias.",
        color: "text-red-500",
        bg: "bg-red-50"
    },
    {
        icon: Rocket,
        title: "Marcos do Desenvolvimento",
        tag: "Aceleração",
        desc: "Técnicas para firmar o pescoço, sentar e engatinhar com mais firmeza e segurança através de estímulos corretos.",
        color: "text-orange-500",
        bg: "bg-orange-50"
    },
    {
        icon: Shield,
        title: "Blindagem Contra Telas",
        tag: "Prevenção",
        desc: "Substitua o celular por atividades sensoriais que o bebê ama e que constroem conexões neurais saudáveis.",
        color: "text-emerald-500",
        bg: "bg-emerald-50"
    },
    {
        icon: PiggyBank,
        title: "Economia Inteligente",
        tag: "Guia de Compra",
        desc: "Pare de gastar com brinquedos inúteis. Use o que você tem em casa e compre apenas o que realmente importa.",
        color: "text-purple-500",
        bg: "bg-purple-50"
    }
];

export default function SolutionSection() {
    return (
        <section className="py-24 bg-slate-50/50" id="solution">
            <div className="container px-4 md:px-6 mx-auto max-w-7xl">
                <div className="text-center mb-20 space-y-4">
                    <h2 className="text-3xl font-extrabold tracking-tight md:text-5xl text-slate-900 leading-tight">
                        O que você recebe no <span className="text-primary italic">Protocolo Neurobaby</span>
                    </h2>
                    <p className="max-w-2xl mx-auto text-slate-500 font-medium md:text-lg">
                        Um método estruturado para pais que buscam a excelência no desenvolvimento dos seus filhos.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {inclusions.map((item, i) => (
                        <div key={i} className="group p-10 rounded-[2.5rem] bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-500 flex flex-col items-start gap-8">
                            <div className={`w-16 h-16 ${item.bg} rounded-3xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}>
                                <item.icon className={`w-8 h-8 ${item.color}`} strokeWidth={2} />
                            </div>
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <span className="text-[10px] font-black uppercase tracking-widest text-primary/40 leading-none">{item.tag}</span>
                                    <h3 className="text-2xl font-bold text-slate-900 leading-tight">
                                        {item.title}
                                    </h3>
                                </div>
                                <p className="text-slate-600 font-medium leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    ))}

                    {/* Visual CTA Card */}
                    <div className="p-10 rounded-[2.5rem] bg-primary text-white flex flex-col justify-center gap-6 shadow-2xl shadow-primary/20 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl translate-x-8 -translate-y-8" />
                        <h3 className="text-2xl font-bold leading-tight relative z-10 uppercase">Comece a transformar o futuro hoje.</h3>
                        <p className="font-medium text-white/80 relative z-10">Junte-se às famílias que escolheram a ciência para guiar seus bebês.</p>
                        <a href="#pricing" className="mt-4 bg-white text-primary px-8 py-4 rounded-2xl font-bold uppercase tracking-wide text-center group-hover:bg-blue-50 transition-colors relative z-10">
                            Ver Planos
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
