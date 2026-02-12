import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Check } from "lucide-react";

export default function HeroSection() {
    return (
        <section className="relative pt-20 pb-20 lg:pt-32 lg:pb-32 bg-white overflow-hidden">
            {/* Soft decorative background element */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50 rounded-full blur-3xl opacity-40 -translate-y-1/2 translate-x-1/4 pointer-events-none" />

            <div className="container relative z-10 mx-auto px-4 md:px-6 max-w-7xl">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left: Text Content */}
                    <div className="flex flex-col space-y-10 text-center lg:text-left">
                        <div className="space-y-6">
                            <div className="inline-flex items-center rounded-full bg-blue-50 px-4 py-1.5 text-xs font-bold text-blue-600 uppercase tracking-wider w-fit mx-auto lg:mx-0 border border-blue-100">
                                ⭐ Método Científico de Neuroestimulação
                            </div>

                            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-slate-900 leading-[1.1]">
                                Transforme seu bebê no <span className="text-primary italic">aluno mais inteligente</span> da turma antes de falar.
                            </h1>

                            <p className="mx-auto lg:mx-0 max-w-2xl text-slate-600 text-lg md:text-xl font-medium leading-relaxed">
                                A maioria dos pais apenas "distrai" seus filhos. Descubra como <strong className="text-slate-900">ativar a inteligência real</strong> do seu bebê em apenas 15 minutos por dia com um protocolo prático e validado.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Button size="xl" variant="cta" className="w-full sm:w-auto h-16 text-lg font-bold shadow-lg bg-red-600 hover:bg-red-700 text-white rounded-2xl transition-all" asChild>
                                <a href="#pricing">
                                    BAIXAR MEU CHECKLIST AGORA <ArrowRight className="ml-2 w-5 h-5" />
                                </a>
                            </Button>
                        </div>

                        {/* Trust Badges */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 border-t border-slate-100">
                            {[
                                "Baseado em Ciência",
                                "0 a 12 Meses",
                                "Passo a Passo",
                                "Acesso Imediato"
                            ].map((label, i) => (
                                <div key={i} className="flex flex-col items-center lg:items-start gap-1.5">
                                    <div className="bg-emerald-50 p-1 rounded-full">
                                        <Check className="w-4 h-4 text-emerald-600" />
                                    </div>
                                    <span className="text-xs font-bold text-slate-500 uppercase tracking-tight">{label}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Modern Mockup & VSL */}
                    <div className="relative flex flex-col items-center">
                        {/* VSL Mini Context or Layout Element */}
                        <div className="relative w-full max-w-[480px] aspect-video bg-slate-900 rounded-[2rem] shadow-2xl border-8 border-white overflow-hidden group cursor-pointer ring-1 ring-slate-100">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 group-hover:scale-110 transition-transform duration-300">
                                    <Play className="w-8 h-8 text-white fill-current ml-1" />
                                </div>
                            </div>
                            <div className="absolute bottom-6 left-6 text-white">
                                <p className="text-xs font-bold uppercase tracking-widest text-white/70 mb-1">Vídeo Explicativo</p>
                                <p className="text-lg font-bold">O Segredo da Neuroestimulação</p>
                            </div>
                        </div>

                        {/* Phone Mockup Floating partially over */}
                        <div className="absolute -bottom-16 -right-8 w-[240px] hidden md:block transform rotate-6 hover:rotate-0 transition-transform duration-500">
                            <div className="aspect-[9/19.5] bg-slate-900 rounded-[2.5rem] border-[6px] border-slate-800 shadow-2xl p-2 relative overflow-hidden">
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 h-4 w-20 bg-slate-800 rounded-b-xl z-10"></div>
                                <div className="relative h-full w-full bg-white rounded-[2rem] overflow-hidden p-4 pt-8">
                                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-xs mb-4">👶</div>
                                    <div className="space-y-3">
                                        <div className="h-3 w-3/4 bg-slate-100 rounded"></div>
                                        <div className="h-3 w-1/2 bg-slate-100 rounded"></div>
                                        <div className="pt-4 space-y-2">
                                            {[1, 2, 3].map(i => (
                                                <div key={i} className="h-10 w-full bg-blue-50/50 rounded-xl border border-blue-50"></div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
