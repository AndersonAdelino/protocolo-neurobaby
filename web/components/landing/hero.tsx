import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Check } from "lucide-react";

export default function HeroSection() {
    return (
        <section className="relative pt-20 pb-20 lg:pt-32 lg:pb-32 bg-background overflow-hidden">
            {/* Soft decorative background element */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary/20 rounded-full blur-3xl opacity-60 -translate-y-1/2 translate-x-1/4 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/20 rounded-full blur-3xl opacity-40 translate-y-1/3 -translate-x-1/4 pointer-events-none" />

            <div className="container relative z-10 mx-auto px-4 md:px-6 max-w-7xl">
                <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-12">
                    {/* Main Content */}
                    <div className="flex flex-col space-y-10 items-center">
                        <div className="space-y-6">
                            <h1 className="text-4xl font-heading font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-foreground leading-[1.1]">
                                Transforme seu bebê no <span className="text-primary italic relative inline-block">
                                    aluno mais inteligente
                                    <svg className="absolute w-full h-3 -bottom-1 left-0 text-primary/30 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                                        <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                                    </svg>
                                </span> da turma antes de falar.
                            </h1>

                            <p className="mx-auto max-w-2xl text-muted-foreground text-lg md:text-xl font-sans font-medium leading-relaxed">
                                A maioria dos pais apenas "distrai" seus filhos. Descubra como <strong className="text-foreground">ativar a inteligência real</strong> do seu bebê em apenas 15 minutos por dia com um protocolo prático e validado.
                            </p>
                        </div>

                        {/* Video moved here and centered */}
                        <div className="relative w-full max-w-[800px] aspect-video bg-black rounded-[2rem] shadow-clay border-8 border-card overflow-hidden group cursor-pointer">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-24 h-24 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                    <Play className="w-10 h-10 text-white fill-current ml-1" />
                                </div>
                            </div>
                            <div className="absolute bottom-8 left-8 text-white text-left">
                                <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">Vídeo Explicativo</p>
                                <p className="text-2xl font-heading font-bold">O Segredo da Neuroestimulação</p>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto">
                            <Button size="xl" variant="cta" className="w-full sm:w-auto" asChild>
                                <a href="#pricing">
                                    BAIXAR MEU CHECKLIST AGORA <ArrowRight className="ml-2 w-6 h-6" />
                                </a>
                            </Button>
                        </div>

                        {/* Trust Badges centered */}
                        <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 pt-10 border-t border-border w-full">
                            {[
                                "Baseado em Ciência",
                                "0 a 12 Meses",
                                "Passo a Passo",
                                "Acesso Imediato"
                            ].map((label, i) => (
                                <div key={i} className="flex flex-col items-center gap-2">
                                    <div className="bg-secondary/20 p-2 rounded-full">
                                        <Check className="w-5 h-5 text-secondary-foreground" strokeWidth={3} />
                                    </div>
                                    <span className="text-sm font-bold text-muted-foreground uppercase tracking-tight">{label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
