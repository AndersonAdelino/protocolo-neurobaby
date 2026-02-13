import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Check } from "lucide-react";
import { FadeIn, ScaleIn } from "@/components/ui/motion-wrapper";

export default function HeroSection() {
    return (
        <section className="relative pt-12 pb-16 lg:pt-32 lg:pb-32 bg-background overflow-hidden">
            {/* Soft decorative background element */}
            <div className="absolute top-0 right-0 w-[300px] h-[300px] lg:w-[600px] lg:h-[600px] bg-secondary/20 rounded-full blur-3xl opacity-60 -translate-y-1/2 translate-x-1/4 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[200px] h-[200px] lg:w-[400px] lg:h-[400px] bg-primary/20 rounded-full blur-3xl opacity-40 translate-y-1/3 -translate-x-1/4 pointer-events-none" />

            <div className="container relative z-10 mx-auto px-6 md:px-6 max-w-7xl">
                <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-8 lg:space-y-12">
                    {/* Main Content */}
                    <div className="flex flex-col space-y-8 lg:space-y-10 items-center w-full">
                        <FadeIn className="space-y-4 lg:space-y-6">
                            <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight text-foreground leading-[1.1] text-balance">
                                O Checklist do <span className="text-primary italic relative inline-block whitespace-nowrap">
                                    Bebê Esperto:
                                    <svg className="absolute w-full h-2 lg:h-3 -bottom-1 left-0 text-primary/30 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                                        <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                                    </svg>
                                </span> <br className="hidden md:block" /> Como incentivar a inteligência do seu filho dos 0 aos 12 meses.
                            </h1>

                            <p className="mx-auto max-w-2xl text-muted-foreground text-base sm:text-lg md:text-xl font-sans font-medium leading-relaxed px-2 text-pretty">
                                O guia prático de 15 minutos para pais que querem ver o bebê se desenvolvendo mais rápido através de estímulos simples e validados.
                            </p>
                        </FadeIn>

                        {/* Video moved here and centered - Portrait Mode */}
                        <ScaleIn delay={0.2} className="relative w-[75%] sm:w-full max-w-[320px] aspect-[9/16] bg-black rounded-2xl lg:rounded-[2.5rem] shadow-clay border-4 lg:border-8 border-card overflow-hidden group cursor-pointer mx-auto">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-16 h-16 lg:w-20 lg:h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                    <Play className="w-8 h-8 lg:w-9 lg:h-9 text-white fill-current ml-1" />
                                </div>
                            </div>
                            <div className="absolute bottom-6 left-0 right-0 text-white text-center px-6">
                                <p className="text-lg lg:text-xl font-heading font-black leading-tight drop-shadow-lg">
                                    Aperte o play e veja o checklist
                                </p>
                            </div>
                        </ScaleIn>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto px-4 sm:px-0">
                            <FadeIn delay={0.4} className="w-full sm:w-auto">
                                <Button size="xl" variant="cta" className="w-full sm:w-auto text-base lg:text-lg h-14 lg:h-16" asChild>
                                    <a href="#pricing">
                                        BAIXAR MEU CHECKLIST AGORA <ArrowRight className="ml-2 w-5 h-5 lg:w-6 lg:h-6" />
                                    </a>
                                </Button>
                            </FadeIn>
                        </div>

                        {/* Trust Badges centered */}
                        <FadeIn delay={0.6} className="flex flex-wrap justify-center gap-x-6 gap-y-4 lg:gap-x-12 lg:gap-y-6 pt-8 lg:pt-10 border-t border-border w-full px-2">
                            {[
                                "Baseado em Ciência",
                                "0 a 12 Meses",
                                "Passo a Passo",
                                "Acesso Imediato"
                            ].map((label, i) => (
                                <div key={i} className="flex flex-col items-center gap-2 w-[45%] sm:w-auto">
                                    <div className="bg-secondary/20 p-2 rounded-full">
                                        <Check className="w-4 h-4 lg:w-5 lg:h-5 text-secondary-foreground" strokeWidth={3} />
                                    </div>
                                    <span className="text-xs sm:text-sm font-bold text-muted-foreground uppercase tracking-tight text-center">{label}</span>
                                </div>
                            ))}
                        </FadeIn>
                    </div>
                </div>
            </div>
        </section>
    );
}
