"use client";

import { Check, X, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { useState } from "react";

export default function PricingSection() {
    const [showHint, setShowHint] = useState(false);

    return (
        <section className="py-24 bg-slate-50 relative overflow-hidden" id="pricing">
            {/* Background elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-100/20 rounded-full blur-3xl opacity-50 pointer-events-none" />

            <div className="container px-4 md:px-6 mx-auto max-w-6xl relative z-10">

                <div className="text-center mb-16 space-y-6">
                    <div className="inline-block bg-white border border-red-200 text-red-600 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-sm">
                        ⏳ Oferta por tempo limitado
                    </div>
                    <h2 className="text-3xl font-extrabold tracking-tight md:text-5xl text-slate-900 leading-tight">
                        Escolha o plano ideal para <br /> <span className="text-primary italic">o futuro do seu bebê</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8 items-stretch max-w-5xl mx-auto">

                    {/* Plano Essencial */}
                    <Card className="border border-slate-200 shadow-sm rounded-[2rem] bg-white flex flex-col hover:border-slate-300 transition-all">
                        <CardHeader className="p-8 space-y-2">
                            <CardTitle className="text-2xl font-bold text-slate-900">Plano Essencial</CardTitle>
                            <CardDescription className="font-medium text-slate-500 uppercase text-xs tracking-wider">Apenas o Checklist Principal</CardDescription>
                        </CardHeader>
                        <CardContent className="p-8 pt-0 space-y-8 flex-grow">
                            <div className="space-y-1">
                                <p className="text-xs font-bold text-slate-400 line-through uppercase tracking-wider">De R$ 47,00 por</p>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-sm font-bold text-slate-900">R$</span>
                                    <span className="text-5xl font-extrabold text-slate-900">10</span>
                                    <span className="text-sm font-bold text-slate-900">,00</span>
                                </div>
                            </div>

                            <ul className="space-y-4">
                                <li className="flex items-center gap-3 text-slate-400 font-medium text-sm">
                                    <X className="w-4 h-4 text-slate-300" /> Checklist 1 a 2 Anos
                                </li>
                                <li className="flex items-center gap-3 text-slate-400 font-medium text-sm">
                                    <X className="w-4 h-4 text-slate-300" /> Checklist 2 a 3 Anos
                                </li>
                                <li className="flex items-center gap-3 text-slate-400 font-medium text-sm">
                                    <X className="w-4 h-4 text-slate-300" /> Lista de Enxoval Inteligente
                                </li>
                                <li className="flex items-center gap-3 text-slate-700 font-bold text-sm">
                                    <Check className="w-4 h-4 text-emerald-500" strokeWidth={3} /> Protocolo Completo (0-12m)
                                </li>
                            </ul>
                        </CardContent>
                        <CardFooter className="p-8 pt-0 flex flex-col gap-4">
                            <div onMouseEnter={() => setShowHint(true)} className="w-full">
                                <Button variant="outline" className="w-full h-14 rounded-xl border-slate-200 font-bold hover:bg-slate-50 hover:text-slate-900 transition-all" asChild>
                                    <a href="#checkout-basic">Quero o essencial</a>
                                </Button>
                            </div>
                            {showHint && (
                                <p className="text-primary font-bold text-[10px] uppercase tracking-widest text-center animate-in fade-in slide-in-from-top-1 duration-300">
                                    💡 94% dos pais escolhem o Plano Mestre.
                                </p>
                            )}
                        </CardFooter>
                    </Card>

                    {/* Plano Mestre */}
                    <Card className="border-2 border-primary shadow-2xl shadow-blue-500/10 rounded-[2rem] bg-white flex flex-col transform md:scale-105 relative z-10 overflow-hidden">
                        <div className="absolute top-0 right-0 bg-primary text-white px-6 py-2 rounded-bl-2xl font-bold uppercase text-[10px] tracking-widest">
                            Recomendado
                        </div>
                        <CardHeader className="p-10 space-y-2">
                            <CardTitle className="text-3xl font-black text-slate-900 leading-none">Plano Mestre</CardTitle>
                            <CardDescription className="font-bold text-primary uppercase text-xs tracking-widest">O Caminho do Desenvolvimento Total</CardDescription>
                        </CardHeader>
                        <CardContent className="p-10 pt-0 space-y-8 flex-grow">
                            <div className="space-y-1">
                                <p className="text-xs font-bold text-slate-400 line-through uppercase tracking-wider">De R$ 197,00 por</p>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-sm font-bold text-primary">R$</span>
                                    <span className="text-6xl font-extrabold text-primary">27</span>
                                    <span className="text-sm font-bold text-primary">,00</span>
                                </div>
                                <p className="text-emerald-600 font-bold text-[10px] uppercase tracking-widest mt-2">✨ Economia de mais de R$ 170,00</p>
                            </div>

                            <div className="space-y-4">
                                {[
                                    { text: "Checklist Completo 0 a 12 meses", strong: true },
                                    { text: "BÔNUS: Checklist 1 a 2 Anos (Fala)", strong: false },
                                    { text: "BÔNUS: Checklist 2 a 3 Anos (Lógica)", strong: false },
                                    { text: "BÔNUS: Lista Enxoval Inteligente", strong: false },
                                    { text: "Acesso Vitalício + Atualizações", strong: false }
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <div className="bg-emerald-50 p-1 rounded-full">
                                            <Check className="w-3.5 h-3.5 text-emerald-600" strokeWidth={3} />
                                        </div>
                                        <span className={`text-sm ${item.strong ? 'font-bold text-slate-900' : 'font-medium text-slate-600'}`}>{item.text}</span>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                        <CardFooter className="p-10 pt-0">
                            <Button size="xl" variant="default" className="w-full h-16 text-lg font-bold shadow-xl shadow-blue-500/20 bg-primary hover:bg-blue-700 text-white rounded-2xl transition-all" asChild>
                                <a href="#checkout-master">
                                    Quero o Pacote Completo
                                </a>
                            </Button>
                        </CardFooter>
                    </Card>
                </div>

                <div className="mt-20 text-center flex flex-col items-center gap-6">
                    <p className="text-slate-400 font-bold uppercase tracking-widest text-[10px]">🔒 Transação 100% Segura e Criptografada</p>
                    <div className="flex justify-center items-center gap-8 opacity-30 grayscale saturate-0">
                        {/* Fake Payment Logos */}
                        <div className="w-16 h-8 bg-slate-400 rounded"></div>
                        <div className="w-16 h-8 bg-slate-400 rounded"></div>
                        <div className="w-16 h-8 bg-slate-400 rounded"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
