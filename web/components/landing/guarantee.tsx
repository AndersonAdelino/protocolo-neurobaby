import { ShieldCheck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function GuaranteeSection() {
    return (
        <section className="py-24 bg-gradient-to-b from-white to-green-50/50" id="guarantee">
            <div className="container px-4 md:px-6 mx-auto text-center">
                <div className="max-w-3xl mx-auto space-y-8">
                    <div className="mx-auto w-24 h-24 bg-green-100 rounded-full flex items-center justify-center animate-pulse ring-8 ring-green-50">
                        <ShieldCheck className="w-12 h-12 text-green-600" />
                    </div>

                    <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-slate-900">
                        Risco Zero: Garantia de 7 Dias
                    </h2>

                    <div className="bg-white p-8 rounded-3xl border border-green-100 shadow-xl shadow-green-100/50">
                        <p className="text-slate-600 md:text-xl font-medium leading-relaxed">
                            Nós assumimos o risco. Baixe o <strong className="text-slate-900">Protocolo NeuroBaby</strong>, aplique por uma semana.
                            <br /><br />
                            Se você não notar seu bebê mais atento, mais calmo e reagindo melhor aos estímulos, nós devolveremos <span className="text-green-600 font-bold underline decoration-2 decoration-green-200">100% do seu dinheiro</span>. Sem letras miúdas.
                        </p>
                    </div>

                    <p className="text-red-500 font-bold text-lg">O único risco que você corre é o de não fazer nada e se arrepender daqui a 5 anos.</p>

                    <div className="pt-8">
                        <Button size="xl" variant="cta" className="w-full sm:w-auto text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-105" asChild>
                            <a href="#pricing">
                                SIM! QUERO CRIAR UM GÊNIO AGORA <ArrowRight className="ml-2 w-6 h-6" />
                            </a>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
