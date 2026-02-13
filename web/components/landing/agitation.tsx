import { Star, Heart, Moon } from "lucide-react";
import { FadeIn, ScaleIn } from "@/components/ui/motion-wrapper";

export default function AgitationSection() {
    return (
        <section className="py-16 lg:py-24 bg-card" id="agitation">
            <div className="container px-6 md:px-6 mx-auto max-w-7xl text-center space-y-16 lg:space-y-24">

                <FadeIn className="space-y-4 max-w-3xl mx-auto">
                    <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight md:text-5xl text-foreground text-balance">
                        Por que famílias inteligentes <br className="hidden md:block" /> <span className="text-primary italic">já escolheram o Checklist do Bebê Esperto?</span>
                    </h2>
                    <p className="text-muted-foreground font-medium text-base md:text-lg px-2 text-pretty">
                        O desenvolvimento infantil é uma janela única que não se repete.
                    </p>
                </FadeIn>

                <div className="grid md:grid-cols-3 gap-10 lg:gap-16 text-left">
                    <FadeIn delay={0.2} className="space-y-4 lg:space-y-6 group">
                        <div className="w-12 h-12 lg:w-14 lg:h-14 bg-secondary/20 text-secondary-foreground rounded-2xl flex items-center justify-center border border-secondary/30 group-hover:bg-secondary group-hover:text-white transition-all duration-300 shadow-sm">
                            <Star className="w-5 h-5 lg:w-6 lg:h-6" />
                        </div>
                        <div className="space-y-2 lg:space-y-3">
                            <h3 className="text-lg lg:text-xl font-bold text-foreground">Desenvolvimento em Destaque</h3>
                            <p className="text-muted-foreground font-medium leading-relaxed text-sm lg:text-base">
                                Seu filho estará mais atento, focado e absorvendo o mundo com mais facilidade, tornando-se uma referência de desenvolvimento saudável.
                            </p>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.4} className="space-y-4 lg:space-y-6 group">
                        <div className="w-12 h-12 lg:w-14 lg:h-14 bg-secondary/20 text-secondary-foreground rounded-2xl flex items-center justify-center border border-secondary/30 group-hover:bg-secondary group-hover:text-white transition-all duration-300 shadow-sm">
                            <Heart className="w-5 h-5 lg:w-6 lg:h-6" />
                        </div>
                        <div className="space-y-2 lg:space-y-3">
                            <h3 className="text-lg lg:text-xl font-bold text-foreground">Vínculo e Conexão Real</h3>
                            <p className="text-muted-foreground font-medium leading-relaxed text-sm lg:text-base">
                                Transforme o tempo de cuidado em momentos de mentoria e amor. O vínculo emocional criado nesta fase é a base para a vida toda.
                            </p>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.6} className="space-y-4 lg:space-y-6 group">
                        <div className="w-12 h-12 lg:w-14 lg:h-14 bg-secondary/20 text-secondary-foreground rounded-2xl flex items-center justify-center border border-secondary/30 group-hover:bg-secondary group-hover:text-white transition-all duration-300 shadow-sm">
                            <Moon className="w-5 h-5 lg:w-6 lg:h-6" />
                        </div>
                        <div className="space-y-2 lg:space-y-3">
                            <h3 className="text-lg lg:text-xl font-bold text-foreground">Qualidade de Sono e Rotina</h3>
                            <p className="text-muted-foreground font-medium leading-relaxed text-sm lg:text-base">
                                Um bebê estimulado corretamente gasta sua energia mental de forma saudável, resultando em noites mais tranquilas para toda a família.
                            </p>
                        </div>
                    </FadeIn>
                </div>

                {/* Elegant Quote Block */}
                <ScaleIn delay={0.8} className="max-w-4xl mx-auto py-10 lg:py-16 px-6 lg:px-8 rounded-3xl lg:rounded-[3rem] bg-background border border-border relative group overflow-hidden shadow-sm">
                    <div className="absolute top-0 left-0 w-2 h-full bg-primary/20" />
                    <p className="text-lg md:text-2xl font-semibold text-foreground leading-relaxed italic text-balance">
                        "O desenvolvimento do seu filho não pode esperar. É uma janela biológica poderosa que se molda a cada novo estímulo diário."
                    </p>
                </ScaleIn>

            </div>
        </section>
    );
}
