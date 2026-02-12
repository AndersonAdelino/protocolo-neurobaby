import { AlertTriangle, X } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function ProblemSection() {
    return (
        <section className="py-24 bg-white" id="problem">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="mx-auto max-w-[850px] text-center space-y-10">
                    <div className="inline-flex items-center rounded-full bg-red-50 px-4 py-1.5 text-sm font-bold text-red-600 border border-red-100 shadow-sm">
                        <AlertTriangle className="mr-2 h-4 w-4" />
                        Alerta Importante para Pais
                    </div>

                    <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl text-slate-900 leading-tight">
                        Você ama seu filho, mas pode estar cometendo um <span className="text-red-500 underline decoration-4 decoration-red-200 underline-offset-4">erro silencioso</span>.
                    </h2>

                    <p className="text-slate-600 md:text-xl font-medium leading-relaxed max-w-2xl mx-auto">
                        A maioria dos pais acredita que "amor e carinho" são suficientes. Ou pior: acham que encher o quarto de brinquedos barulhentos vai deixar a criança inteligente.
                    </p>

                    <div className="bg-slate-50 border border-slate-100 rounded-[2.5rem] p-8 md:p-12 space-y-8 text-left shadow-xl shadow-slate-100/50 relative overflow-hidden">
                        {/* Decorative blob */}
                        <div className="absolute -top-24 -right-24 w-64 h-64 bg-red-50 rounded-full blur-3xl opacity-60 pointer-events-none"></div>

                        <h3 className="text-2xl font-bold text-slate-900 border-b border-slate-200 pb-6 relative z-10 flex items-center gap-3">
                            <span className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-600 font-black text-lg">!</span>
                            A Neurociência prova o contrário:
                        </h3>

                        <ul className="space-y-6 relative z-10">
                            <li className="flex items-start gap-5 group">
                                <div className="bg-white border border-red-100 p-2 rounded-xl mt-1 shadow-sm group-hover:border-red-200 transition-colors">
                                    <X className="w-5 h-5 text-red-500" strokeWidth={2.5} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg text-slate-900 mb-1">Excesso de Estímulos Errados</h4>
                                    <p className="text-slate-500 leading-relaxed font-medium">Luzes piscando, telas e barulhos caóticos não educam. Eles causam <strong className="text-red-500">sobrecarga sensorial</strong>.</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-5 group">
                                <div className="bg-white border border-red-100 p-2 rounded-xl mt-1 shadow-sm group-hover:border-red-200 transition-colors">
                                    <X className="w-5 h-5 text-red-500" strokeWidth={2.5} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg text-slate-900 mb-1">Ansiedade e Falta de Foco</h4>
                                    <p className="text-slate-500 leading-relaxed font-medium">Bebês expostos a esse caos desenvolvem dificuldades de atenção e, muitas vezes, <strong className="text-red-500">atrasos na fala</strong>.</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-5 group">
                                <div className="bg-white border border-red-100 p-2 rounded-xl mt-1 shadow-sm group-hover:border-red-200 transition-colors">
                                    <X className="w-5 h-5 text-red-500" strokeWidth={2.5} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg text-slate-900 mb-1">A Culpa Silenciosa</h4>
                                    <p className="text-slate-500 leading-relaxed font-medium">Enquanto isso, você se sente exausto(a), se perguntando: <em>"Por que o bebê da vizinha já senta e o meu não?"</em></p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <p className="font-bold text-slate-800 text-lg md:text-xl max-w-2xl mx-auto">
                        A verdade dói, mas precisa ser dita: <br /><span className="text-red-500">Sem a direção certa, você está deixando o potencial do seu filho na mesa.</span>
                    </p>
                </div>
            </div>
        </section>
    );
}
