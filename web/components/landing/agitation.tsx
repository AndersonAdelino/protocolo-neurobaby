import { Star, Heart, Moon } from "lucide-react";

export default function AgitationSection() {
    return (
        <section className="py-24 bg-white" id="agitation">
            <div className="container px-4 md:px-6 mx-auto max-w-7xl text-center space-y-24">

                <div className="space-y-4 max-w-3xl mx-auto">
                    <h2 className="text-3xl font-extrabold tracking-tight md:text-5xl text-slate-900">
                        Por que famílias inteligentes <br /> <span className="text-primary italic">já escolheram este método?</span>
                    </h2>
                    <p className="text-slate-500 font-medium md:text-lg">
                        O desenvolvimento infantil é uma janela única que não se repete.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-16 text-left">
                    <div className="space-y-6 group">
                        <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center border border-blue-100 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                            <Star className="w-6 h-6" />
                        </div>
                        <div className="space-y-3">
                            <h3 className="text-xl font-bold text-slate-900">Desenvolvimento em Destaque</h3>
                            <p className="text-slate-600 font-medium leading-relaxed">
                                Seu filho estará mais atento, focado e absorvendo o mundo com mais facilidade, tornando-se uma referência de desenvolvimento saudável.
                            </p>
                        </div>
                    </div>

                    <div className="space-y-6 group">
                        <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center border border-blue-100 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                            <Heart className="w-6 h-6" />
                        </div>
                        <div className="space-y-3">
                            <h3 className="text-xl font-bold text-slate-900">Vínculo e Conexão Real</h3>
                            <p className="text-slate-600 font-medium leading-relaxed">
                                Transforme o tempo de cuidado em momentos de mentoria e amor. O vínculo emocional criado nesta fase é a base para a vida toda.
                            </p>
                        </div>
                    </div>

                    <div className="space-y-6 group">
                        <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center border border-blue-100 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                            <Moon className="w-6 h-6" />
                        </div>
                        <div className="space-y-3">
                            <h3 className="text-xl font-bold text-slate-900">Qualidade de Sono e Rotina</h3>
                            <p className="text-slate-600 font-medium leading-relaxed">
                                Um bebê estimulado corretamente gasta sua energia mental de forma saudável, resultando em noites mais tranquilas para toda a família.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Elegant Quote Block */}
                <div className="max-w-4xl mx-auto py-16 px-8 rounded-[3rem] bg-slate-50 border border-slate-100 relative group overflow-hidden">
                    <div className="absolute top-0 left-0 w-2 h-full bg-primary/20" />
                    <p className="text-xl md:text-2xl font-semibold text-slate-800 leading-relaxed italic">
                        "O desenvolvimento do seu filho não pode esperar. É uma janela biológica poderosa que se molda a cada novo estímulo diário."
                    </p>
                </div>

            </div>
        </section>
    );
}
