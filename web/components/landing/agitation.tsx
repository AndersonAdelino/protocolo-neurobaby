import { Timer, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AgitationSection() {
    return (
        <section className="py-24 bg-slate-950 text-white overflow-hidden relative" id="agitation">
            {/* Background red glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] bg-red-900/20 blur-[100px] rounded-full pointer-events-none" />

            <div className="container px-4 md:px-6 mx-auto relative z-10 text-center space-y-12">
                <div className="space-y-6">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl flex flex-col md:flex-row justify-center items-center gap-4 leading-tight">
                        <Timer className="w-12 h-12 text-red-500 animate-pulse shrink-0" />
                        <span>A "Janela de Ouro" <br className="hidden sm:block" /> está se fechando.</span>
                    </h2>

                    <p className="mx-auto max-w-[800px] text-slate-300 text-lg md:text-xl/relaxed font-light leading-relaxed">
                        O cérebro do seu bebê forma <strong className="text-white font-bold decoration-red-500/50 underline decoration-2 underline-offset-4">80% das conexões neurais</strong> nos dois primeiros anos de vida. <br />Chama-se <span className="text-red-200 italic">Neuroplasticidade</span>.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto text-left">
                    <div className="bg-white/5 p-8 rounded-3xl border border-white/10 hover:border-red-500/30 transition-all hover:bg-white/10 group">
                        <h3 className="text-xl font-bold text-red-400 mb-3 group-hover:text-red-300 transition-colors">O Tempo Não Volta</h3>
                        <p className="text-slate-400 leading-relaxed">Cada dia que seu filho passa olhando para o teto, sem o estímulo correto, é um dia perdido que <strong className="text-white font-medium">não volta mais</strong>.</p>
                    </div>
                    <div className="bg-white/5 p-8 rounded-3xl border border-white/10 hover:border-red-500/30 transition-all hover:bg-white/10 group">
                        <h3 className="text-xl font-bold text-red-400 mb-3 group-hover:text-red-300 transition-colors">Correndo Atrás do Prejuízo</h3>
                        <p className="text-slate-400 leading-relaxed">Se você não estimular a visão no Mês 1, o tato no Mês 3 e a causalidade no Mês 6, seu filho terá dificuldades na escola pelo resto da vida.</p>
                    </div>
                </div>

                <div className="mt-16 relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-900/20 to-transparent blur-xl"></div>
                    <div className="relative bg-black/40 backdrop-blur-sm inline-block p-8 rounded-[2rem] border border-white/10 max-w-3xl">
                        <p className="text-xl md:text-3xl font-bold mb-4 text-white">
                            Você quer criar um filho que se destaca ou um filho que tem dificuldades?
                        </p>
                        <p className="text-red-400 font-bold text-lg uppercase tracking-wide">A escolha é sua, e ela precisa ser feita HOJE.</p>
                    </div>
                </div>

                <div className="pt-8 animate-bounce">
                    <ArrowDown className="w-8 h-8 text-slate-500 mx-auto" />
                </div>
            </div>
        </section>
    );
}
