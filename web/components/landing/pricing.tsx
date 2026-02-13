"use client";

import { Check, X, AlertCircle, Star, Gift } from "lucide-react";
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
import CountdownTimer from "./countdown-timer";

export default function PricingSection() {
    const [showHint, setShowHint] = useState(false);
    const [showUpsell, setShowUpsell] = useState(false);

    return (
        <section className="py-24 bg-slate-50 relative overflow-hidden" id="pricing">
            {/* Background elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-100/20 rounded-full blur-3xl opacity-50 pointer-events-none" />

            {/* Upsell Modal */}
            {showUpsell && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-300">
                    <div className="bg-white rounded-[2.5rem] shadow-2xl p-8 md:p-12 max-w-xl w-full text-center space-y-8 animate-in zoom-in-95 duration-300">
                        <div className="w-20 h-20 bg-amber-50 rounded-full flex items-center justify-center mx-auto">
                            <AlertCircle className="w-10 h-10 text-amber-500" />
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-2xl md:text-3xl font-black text-slate-900 leading-tight">Espere! Você vai levar apenas metade do caminho?</h3>
                            <p className="text-slate-600 font-medium">94% dos pais escolhem o <span className="text-primary font-bold">Plano Bebê Brilhante (0 a 3 anos)</span> para garantir que o bebê não pare de evoluir após os 12 meses. Por apenas <span className="text-slate-900 font-bold">R$ 17,00 a mais</span>, você destrava todo o futuro do seu filho.</p>
                        </div>
                        <div className="flex flex-col gap-4 pt-4">
                            <Button size="xl" className="h-16 rounded-2xl text-lg font-bold bg-primary hover:bg-blue-700 text-white shadow-xl shadow-blue-500/20" asChild>
                                <a href="#checkout-master" onClick={() => setShowUpsell(false)}>SIM, QUERO O PLANO COMPLETO</a>
                            </Button>
                            <button
                                onClick={() => {
                                    setShowUpsell(false);
                                    window.location.href = "#checkout-basic";
                                }}
                                className="text-slate-400 hover:text-slate-600 font-bold text-sm uppercase tracking-widest transition-colors py-2"
                            >
                                Não, quero continuar com o básico
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <div className="container px-4 md:px-6 mx-auto max-w-6xl relative z-10">

                <div className="text-center mb-16 flex flex-col items-center gap-8">
                    <CountdownTimer />

                    <h2 className="text-3xl font-extrabold tracking-tight md:text-5xl text-slate-900 leading-tight">
                        Escolha o plano ideal para <br /> <span className="text-primary italic">o futuro do seu bebê</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8 items-stretch max-w-5xl mx-auto">

                    {/* Plano Básico */}
                    <Card className="border border-slate-200 shadow-sm rounded-[2rem] bg-white flex flex-col hover:border-slate-300 transition-all">
                        <CardHeader className="p-8 space-y-2">
                            <CardTitle className="text-2xl font-bold text-slate-900">Plano Básico</CardTitle>
                            <CardDescription className="font-medium text-slate-500 uppercase text-xs tracking-wider">O Essencial para o Primeiro Ano</CardDescription>
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
                                <li className="flex items-center gap-3 text-slate-700 font-bold text-sm">
                                    <Check className="w-4 h-4 text-emerald-500" strokeWidth={3} /> Checklist do Bebê Esperto (0-12m)
                                </li>
                                <li className="flex items-center gap-3 text-slate-700 font-bold text-sm">
                                    <Check className="w-4 h-4 text-emerald-500" strokeWidth={3} /> 7 Dias de Garantia
                                </li>
                                <li className="flex items-center gap-3 text-slate-700 font-bold text-sm">
                                    <Check className="w-4 h-4 text-emerald-500" strokeWidth={3} /> Acesso Imediato
                                </li>
                                <li className="flex items-center gap-3 text-slate-400 font-medium text-sm">
                                    <X className="w-4 h-4 text-slate-300" /> Checklist Salto da Fala (1-2 Anos)
                                </li>
                                <li className="flex items-center gap-3 text-slate-400 font-medium text-sm">
                                    <X className="w-4 h-4 text-slate-300" /> Checklist Lógica e Temperamento (2-3 Anos)
                                </li>
                                <li className="flex items-center gap-3 text-slate-400 font-medium text-sm">
                                    <X className="w-4 h-4 text-slate-300" /> 50 Itens para um Bebê mais Esperto
                                </li>
                            </ul>
                        </CardContent>
                        <CardFooter className="p-8 pt-0 flex flex-col gap-4">
                            <div onMouseEnter={() => setShowHint(true)} className="w-full">
                                <Button
                                    variant="outline"
                                    className="w-full h-14 rounded-xl border-slate-200 font-bold hover:bg-slate-50 hover:text-slate-900 transition-all cursor-pointer"
                                    onClick={() => setShowUpsell(true)}
                                >
                                    Quero o Plano Básico
                                </Button>
                            </div>
                            {showHint && (
                                <p className="text-primary font-bold text-[10px] uppercase tracking-widest text-center animate-in fade-in slide-in-from-top-1 duration-300">
                                    💡 94% dos pais escolhem o Plano Bebê Brilhante.
                                </p>
                            )}
                        </CardFooter>
                    </Card>

                    {/* Plano Completo */}
                    <Card className="border-2 border-primary shadow-2xl shadow-blue-500/10 rounded-[2rem] bg-white flex flex-col transform md:scale-105 relative z-10 overflow-hidden">
                        <div className="absolute top-0 right-0 bg-primary text-white px-6 py-2 rounded-bl-2xl font-bold uppercase text-[10px] tracking-widest">
                            Recomendado
                        </div>
                        <CardHeader className="p-10 space-y-2">
                            <CardTitle className="text-3xl font-black text-slate-900 leading-none text-balance">Plano Bebê Brilhante <br /> <span className="text-sm font-bold text-primary">(0 a 3 anos)</span></CardTitle>
                            <CardDescription className="font-bold text-primary uppercase text-xs tracking-widest">O Caminho do Desenvolvimento Total</CardDescription>
                        </CardHeader>
                        <CardContent className="p-10 pt-0 space-y-8 flex-grow">
                            <div className="space-y-1">
                                <p className="text-xs font-bold text-slate-400 line-through uppercase tracking-wider">De R$ 197,00 por</p>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-sm font-bold text-primary">R$</span>
                                    <span className="text-6xl font-extrabold text-primary">27</span>
                                    <span className="text-sm font-bold text-primary">,00</span>
                                    <span className="text-[10px] font-black text-primary/40 ml-1 uppercase">Pagamento Único</span>
                                </div>
                                <p className="text-emerald-600 font-bold text-[10px] uppercase tracking-widest mt-2">✨ Economia de mais de R$ 170,00 + bônus</p>
                            </div>

                            {/* Social Proof Card */}
                            <div className="bg-primary/5 border border-primary/10 rounded-2xl p-3 flex items-center gap-3 mb-6">
                                <div className="flex -space-x-2">
                                    {[
                                        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&h=100&auto=format&fit=crop",
                                        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&h=100&auto=format&fit=crop",
                                        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&h=100&auto=format&fit=crop"
                                    ].map((url, i) => (
                                        <div key={i} className="w-7 h-7 rounded-full border-2 border-white overflow-hidden bg-slate-200">
                                            <img src={url} alt="Usuário Escolheu" className="w-full h-full object-cover" />
                                        </div>
                                    ))}
                                </div>
                                <span className="text-[11px] font-bold text-slate-900 leading-tight">
                                    Mais de 1.234 pais escolheram essa oferta
                                </span>
                            </div>

                            <div className="space-y-4">
                                {[
                                    { text: "Checklist do Bebê Esperto (0-12m)", type: 'main' },
                                    { text: "BÔNUS: Checklist Salto da Fala (1-2 Anos)", type: 'bonus' },
                                    { text: "BÔNUS: Checklist Lógica e Temperamento (2-3 Anos)", type: 'bonus' },
                                    { text: "BÔNUS: 50 Itens para um Bebê mais Esperto", type: 'bonus' },
                                    { text: "7 Dias de Garantia + Acesso Imediato", type: 'trust' },
                                    { text: "Acesso Vitalício + Atualizações", type: 'regular' }
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        {item.type === 'main' ? (
                                            <>
                                                <div className="bg-amber-50 p-1 rounded-full">
                                                    <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" strokeWidth={3} />
                                                </div>
                                                <span className="text-sm font-black text-amber-600">{item.text}</span>
                                            </>
                                        ) : item.type === 'bonus' ? (
                                            <>
                                                <div className="bg-emerald-50 p-1 rounded-full">
                                                    <Gift className="w-3.5 h-3.5 text-emerald-600" strokeWidth={3} />
                                                </div>
                                                <span className="text-sm font-bold text-emerald-600">{item.text}</span>
                                            </>
                                        ) : (
                                            <>
                                                <div className="bg-emerald-50 p-1 rounded-full">
                                                    <Check className="w-3.5 h-3.5 text-emerald-600" strokeWidth={3} />
                                                </div>
                                                <span className={`text-sm ${item.type === 'trust' ? 'font-bold text-slate-900' : 'font-medium text-slate-600'}`}>{item.text}</span>
                                            </>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                        <CardFooter className="p-10 pt-0">
                            <Button size="xl" variant="default" className="w-full h-16 text-lg font-bold shadow-xl shadow-blue-500/20 bg-primary hover:bg-blue-700 text-white rounded-2xl transition-all" asChild>
                                <a href="#checkout-master">
                                    Quero o Plano Bebê Brilhante
                                </a>
                            </Button>
                        </CardFooter>
                    </Card>
                </div>

                <div className="mt-20 text-center flex flex-col items-center gap-6">
                    <p className="text-slate-400 font-bold uppercase tracking-widest text-[10px]">🔒 Transação 100% Segura e Criptografada</p>
                    <div className="flex justify-center items-center gap-12 text-slate-300">
                        <div className="flex flex-col items-center gap-2">
                            <Check className="w-8 h-8 text-emerald-500/50" />
                            <span className="text-xs font-bold uppercase tracking-tighter">SSL Seguro</span>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <Check className="w-8 h-8 text-emerald-500/50" />
                            <span className="text-xs font-bold uppercase tracking-tighter">Dados Protegidos</span>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <Check className="w-8 h-8 text-emerald-500/50" />
                            <span className="text-xs font-bold uppercase tracking-tighter">Pague com PIX</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
