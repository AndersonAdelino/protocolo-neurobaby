import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";

export default function HeroSection() {
    return (
        <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
            {/* Background decoration - Soft blobs */}
            <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-3xl opacity-30 -translate-y-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-red-100/40 rounded-full blur-3xl opacity-30 translate-y-1/2 pointer-events-none" />

            <div className="container relative z-10 mx-auto px-4 md:px-6 max-w-7xl">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    <div className="flex flex-col space-y-8 text-center lg:text-left">
                        <div className="space-y-6">
                            <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-red-100 text-red-700 w-fit mx-auto lg:mx-0">
                                <span className="relative flex h-2 w-2 mr-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                                </span>
                                Oferta Especial de Lançamento
                            </div>
                            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-slate-900 leading-[1.1]">
                                Baixe o Checklist Diário de{" "}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">Neuroestimulação</span> <br />
                                <span className="text-3xl sm:text-4xl text-slate-500 font-bold">(0 a 12 Meses)</span>
                            </h1>
                            <p className="mx-auto max-w-[600px] text-slate-600 text-lg md:text-xl lg:mx-0 font-medium leading-relaxed">
                                Ative a inteligência do seu bebê em <span className="text-primary font-bold">15 minutos por dia</span>.
                                Não é curso teórico. É um <strong>Plano de Ação Prático</strong> usado por mais de 1.200 pais inteligentes.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Button size="xl" variant="cta" className="w-full sm:w-auto shadow-2xl hover:shadow-red-500/40 transition-all text-white border-b-4 border-red-700 active:border-b-0 active:translate-y-1" asChild>
                                <a href="#pricing">
                                    BAIXAR MEU CHECKLIST AGORA <ArrowRight className="ml-2 w-6 h-6" />
                                </a>
                            </Button>
                        </div>

                        <div className="flex items-center justify-center lg:justify-start gap-4 text-xs font-bold text-slate-400 uppercase tracking-widest">
                            <span className="flex items-center gap-1">🔒 Seguro</span>
                            <span className="flex items-center gap-1">⚡ Imediato</span>
                            <span className="flex items-center gap-1">⭐ 5 Estrelas</span>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs sm:text-sm text-slate-600 font-semibold mt-4 border-t border-slate-100 pt-6">
                            {[
                                "Baseado em Ciência",
                                "Passo a Passo",
                                "0 a 12 Meses",
                                "Prático e Viral"
                            ].map((label, i) => (
                                <div key={i} className="flex flex-col items-center lg:items-start gap-1">
                                    <Check className="w-5 h-5 text-green-500 bg-green-100 rounded-full p-1" />
                                    <span>{label}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Realistic CSS Phone Mockup - Com Animação e Inclinação */}
                    <div className="relative mx-auto lg:ml-auto lg:mr-0 w-full max-w-[320px] md:max-w-[360px] h-[640px] bg-slate-900 rounded-[3.5rem] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.4)] border-[10px] border-slate-900 overflow-hidden transition-all duration-700 ring-1 ring-slate-900/50 transform rotate-2 hover:rotate-0 animate-float">
                        {/* Notch */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-7 w-36 bg-slate-900 rounded-b-2xl z-20"></div>

                        {/* Status Bar */}
                        <div className="absolute top-3 left-8 right-8 flex justify-between z-20 text-[10px] text-white font-medium opacity-80">
                            <span>9:41</span>
                            <div className="flex gap-1.5 items-center">
                                <div className="w-3 h-2 bg-white/20 rounded-[1px]"></div>
                                <div className="w-4 h-3 bg-white rounded-[2px]"></div>
                            </div>
                        </div>

                        {/* Screen Content */}
                        <div className="absolute inset-x-0 bottom-0 top-0 bg-white pt-12 px-5 overflow-hidden">
                            <div className="flex items-center justify-between mb-8">
                                <div className="text-[10px] font-black text-primary/40 tracking-tighter uppercase">Protocolo Neurobaby</div>
                                <div className="w-10 h-10 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-xs">👶</div>
                            </div>

                            <h3 className="text-2xl font-black text-slate-900 mb-6 leading-tight">Olá, Mamãe! ❤️ <br /><span className="text-primary text-sm font-bold bg-blue-50 px-3 py-1 rounded-full border border-blue-100 mt-2 inline-block">Mês 3: Atividades de Hoje</span></h3>

                            <div className="space-y-4">
                                {[
                                    { title: "Estímulo Visual", min: "5 min", done: true },
                                    { title: "Tempo de Barriga", min: "3 min", done: true },
                                    { title: "Toque Sensorial", min: "2 min", done: false },
                                    { title: "Conversa Ativa", min: "5 min", done: false },
                                ].map((item, i) => (
                                    <div key={i} className={`p-4 rounded-[1.5rem] border-2 flex items-center justify-between transition-all ${item.done ? 'bg-green-50/50 border-green-100 opacity-60' : 'bg-white border-slate-100 shadow-sm'}`}>
                                        <div className="flex items-center gap-4">
                                            <div className={`w-8 h-8 rounded-full flex items-center justify-center shadow-inner ${item.done ? 'bg-green-500 text-white' : 'bg-slate-50 border-2 border-slate-100'}`}>
                                                {item.done ? <Check className="w-4 h-4" strokeWidth={3} /> : <div className="w-2.5 h-2.5 rounded-full bg-slate-200"></div>}
                                            </div>
                                            <div>
                                                <div className={`font-bold text-sm ${item.done ? 'text-slate-500 line-through' : 'text-slate-800'}`}>{item.title}</div>
                                                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-tight">{item.min} • Áudio Explicativo</div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Player Bar */}
                            <div className="absolute bottom-6 left-5 right-5 bg-slate-900 text-white p-5 rounded-[2rem] shadow-2xl flex items-center gap-4">
                                <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-md">
                                    <div className="w-0 h-0 border-t-[7px] border-t-transparent border-l-[12px] border-l-white border-b-[7px] border-b-transparent ml-1"></div>
                                </div>
                                <div className="overflow-hidden">
                                    <div className="text-sm font-black truncate">Como começar hoje</div>
                                    <div className="text-[10px] text-white/50 font-bold uppercase tracking-wider">Tocando Agora...</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
