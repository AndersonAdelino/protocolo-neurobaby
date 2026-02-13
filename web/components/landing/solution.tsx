import { Brain, Target, Rocket, Shield, PiggyBank } from "lucide-react";
import { FadeIn, ScaleIn } from "@/components/ui/motion-wrapper";

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
        color: "text-rose-600",
        bg: "bg-rose-50"
    },
    {
        icon: Rocket,
        title: "Marcos do Desenvolvimento",
        tag: "Aceleração",
        desc: "Técnicas para firmar o pescoço, sentar e engatinhar com mais firmeza e segurança através de estímulos corretos.",
        color: "text-amber-600",
        bg: "bg-amber-50"
    },
    {
        icon: Shield,
        title: "Blindagem Contra Telas",
        tag: "Prevenção",
        desc: "Substitua o celular por atividades sensoriais que o bebê ama e que constroem conexões neurais saudáveis.",
        color: "text-emerald-600",
        bg: "bg-emerald-50"
    },
    {
        icon: PiggyBank,
        title: "Economia Inteligente",
        tag: "Guia de Compra",
        desc: "Pare de gastar com brinquedos inúteis. Use o que você tem em casa e compre apenas o que realmente importa.",
        color: "text-teal-600",
        bg: "bg-teal-50"
    }
];

export default function SolutionSection() {
    return (
        <section className="py-16 lg:py-24 bg-background/50" id="solution">
            <div className="container px-6 md:px-6 mx-auto max-w-7xl">
                <div className="text-center mb-12 lg:mb-20 space-y-4">
                    <FadeIn>
                        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight md:text-5xl text-foreground leading-tight text-balance">
                            O que você recebe no <span className="text-primary italic">Protocolo Neurobaby</span>
                        </h2>
                        <p className="max-w-2xl mx-auto text-muted-foreground font-medium text-base md:text-lg px-2 text-pretty mt-4">
                            Um método estruturado para pais que buscam a excelência no desenvolvimento dos seus filhos.
                        </p>
                    </FadeIn>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {inclusions.map((item, i) => (
                        <ScaleIn key={i} delay={i * 0.1}>
                            <div className="group p-6 lg:p-10 rounded-3xl lg:rounded-[2.5rem] bg-card border border-border shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 flex flex-col items-start gap-6 lg:gap-8 h-full">
                                <div className={`w-14 h-14 lg:w-16 lg:h-16 ${item.bg.replace('bg-', 'bg-')}/20 rounded-2xl lg:rounded-3xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}>
                                    <item.icon className={`w-7 h-7 lg:w-8 lg:h-8 ${item.color}`} strokeWidth={2} />
                                </div>
                                <div className="space-y-3 lg:space-y-4">
                                    <div className="space-y-2">
                                        <span className="text-[10px] font-black uppercase tracking-widest text-primary/60 leading-none">{item.tag}</span>
                                        <h3 className="text-xl lg:text-2xl font-bold text-foreground leading-tight">
                                            {item.title}
                                        </h3>
                                    </div>
                                    <p className="text-muted-foreground font-medium leading-relaxed text-sm lg:text-base">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        </ScaleIn>
                    ))}

                    {/* Visual CTA Card */}
                    <ScaleIn delay={0.6} className="h-full">
                        <div className="p-6 lg:p-10 rounded-3xl lg:rounded-[2.5rem] bg-heading text-background flex flex-col justify-center gap-6 shadow-2xl shadow-primary/20 relative overflow-hidden group bg-foreground h-full">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl translate-x-8 -translate-y-8" />
                            <h3 className="text-xl lg:text-2xl font-bold leading-tight relative z-10 uppercase text-white">Comece a transformar o futuro hoje.</h3>
                            <p className="font-medium text-white/80 relative z-10 text-sm lg:text-base">Junte-se às famílias que escolheram a ciência para guiar seus bebês.</p>
                            <a href="#pricing" className="mt-2 lg:mt-4 bg-primary text-black px-6 py-3 lg:px-8 lg:py-4 rounded-xl lg:rounded-2xl font-bold uppercase tracking-wide text-center group-hover:bg-primary/90 transition-colors relative z-10 text-sm lg:text-base cursor-pointer">
                                Ver Planos
                            </a>
                        </div>
                    </ScaleIn>
                </div>
            </div>
        </section>
    );
}
