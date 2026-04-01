import { HelpCircle, Clock, AlertTriangle } from "lucide-react";

export default function AgitationSection() {
    return (
        <section className="py-16 lg:py-24 bg-card" id="agitation">
            <div className="container px-6 md:px-6 mx-auto max-w-7xl text-center space-y-16 lg:space-y-24">

                <div className="space-y-4 max-w-3xl mx-auto">
                    <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight md:text-5xl text-foreground text-balance">
                        Você sente que deveria estar fazendo mais... <br className="hidden md:block" /> <span className="text-primary italic">mas não sabe exatamente o quê?</span>
                    </h2>
                    <p className="text-muted-foreground font-medium text-base md:text-lg px-2 text-pretty">
                        Se você já sentiu isso, não está sozinha. Esse sentimento tem um nome: a janela do desenvolvimento está aberta — e ela fecha para sempre.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-10 lg:gap-16 text-left">
                    <div className="space-y-4 lg:space-y-6 group">
                        <div className="w-12 h-12 lg:w-14 lg:h-14 bg-secondary/20 text-secondary-foreground rounded-2xl flex items-center justify-center border border-secondary/30 group-hover:bg-secondary group-hover:text-white transition-all duration-300 shadow-sm">
                            <HelpCircle className="w-5 h-5 lg:w-6 lg:h-6" />
                        </div>
                        <div className="space-y-2 lg:space-y-3">
                            <h3 className="text-lg lg:text-xl font-bold text-foreground">A Culpa de Não Saber</h3>
                            <p className="text-muted-foreground font-medium leading-relaxed text-sm lg:text-base">
                                Você olha para o seu bebê e não sabe se está fazendo as atividades certas. Todo mundo dá um conselho diferente e você acaba improvizando — e se sentindo mal por isso.
                            </p>
                        </div>
                    </div>

                    <div className="space-y-4 lg:space-y-6 group">
                        <div className="w-12 h-12 lg:w-14 lg:h-14 bg-secondary/20 text-secondary-foreground rounded-2xl flex items-center justify-center border border-secondary/30 group-hover:bg-secondary group-hover:text-white transition-all duration-300 shadow-sm">
                            <Clock className="w-5 h-5 lg:w-6 lg:h-6" />
                        </div>
                        <div className="space-y-2 lg:space-y-3">
                            <h3 className="text-lg lg:text-xl font-bold text-foreground">O Medo de Perder o Momento</h3>
                            <p className="text-muted-foreground font-medium leading-relaxed text-sm lg:text-base">
                                O primeiro ano molda 85% do cérebro do seu filho. Cada mês que passa sem estimulação direcionada é uma oportunidade que não volta — e você sente esse peso todos os dias.
                            </p>
                        </div>
                    </div>

                    <div className="space-y-4 lg:space-y-6 group">
                        <div className="w-12 h-12 lg:w-14 lg:h-14 bg-secondary/20 text-secondary-foreground rounded-2xl flex items-center justify-center border border-secondary/30 group-hover:bg-secondary group-hover:text-white transition-all duration-300 shadow-sm">
                            <AlertTriangle className="w-5 h-5 lg:w-6 lg:h-6" />
                        </div>
                        <div className="space-y-2 lg:space-y-3">
                            <h3 className="text-lg lg:text-xl font-bold text-foreground">A Confusão de Informação</h3>
                            <p className="text-muted-foreground font-medium leading-relaxed text-sm lg:text-base">
                                YouTube, Instagram, pediatra, sogra — cada um fala uma coisa. Você consome conteúdo infinito sobre desenvolvimento infantil e sai mais confusa do que entrou.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bridge to solution */}
                <div className="max-w-4xl mx-auto py-10 lg:py-16 px-6 lg:px-8 rounded-3xl lg:rounded-[3rem] bg-background border border-border relative overflow-hidden shadow-sm">
                    <div className="absolute top-0 left-0 w-2 h-full bg-primary/20" />
                    <p className="text-lg md:text-2xl font-semibold text-foreground leading-relaxed italic text-balance">
                        "A diferença entre um bebê que desenvolve o potencial máximo e um que fica aquém não é sorte. É método. E método se aprende."
                    </p>
                </div>

            </div>
        </section>
    );
}
