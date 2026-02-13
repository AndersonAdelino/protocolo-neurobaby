import { ShieldCheck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function GuaranteeSection() {
    return (
        <section className="py-24 bg-slate-50 relative overflow-hidden" id="guarantee">
            {/* Subtle background circle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-100/30 rounded-full blur-3xl opacity-50 pointer-events-none" />

            <div className="container px-4 md:px-6 mx-auto relative z-10">
                <div className="max-w-5xl mx-auto flex flex-col items-center">

                    <div className="bg-white p-12 md:p-20 rounded-[4rem] shadow-2xl border border-slate-100 flex flex-col items-center text-center space-y-10 group">

                        <div className="w-24 h-24 bg-emerald-50 rounded-[2.5rem] flex items-center justify-center border border-emerald-100 group-hover:scale-110 transition-transform duration-500">
                            <ShieldCheck className="w-12 h-12 text-emerald-600" />
                        </div>

                        <div className="space-y-6">
                            <h2 className="text-3xl font-extrabold tracking-tight md:text-5xl text-slate-900 leading-tight">
                                Sua Satisfação é Nossa <br /> <span className="text-emerald-600 italic">Prioridade Máxima</span>
                            </h2>
                            <p className="max-w-3xl mx-auto text-lg md:text-xl text-slate-600 font-medium leading-relaxed">
                                "O risco é todo nosso. O futuro é todo dele."
                                <br /> <br />
                                Teste o Checklist do Bebê Esperto (0-12m) por 7 dias. Se você não notar uma mudança real na atenção e interação do seu bebê, nós devolveremos 100% do seu investimento. Sem burocracia, com o respeito que sua família merece.
                            </p>
                        </div>

                        <div className="pt-6 w-full max-w-md">
                            <Button size="xl" variant="cta" className="w-full h-16 text-lg font-bold shadow-xl shadow-red-500/20 bg-red-600 hover:bg-red-700 text-white rounded-2xl transition-all" asChild>
                                <a href="#pricing">
                                    QUERO GARANTIR O FUTURO <ArrowRight className="ml-2 w-5 h-5" />
                                </a>
                            </Button>
                        </div>
                    </div>

                    <p className="mt-12 text-slate-400 font-bold uppercase tracking-widest text-[11px]">
                        Garantia de 7 Dias • Pagamento Seguro • Download Imediato
                    </p>
                </div>
            </div>
        </section>
    );
}
