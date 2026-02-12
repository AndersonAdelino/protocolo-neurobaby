import { Quote, User, Star } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function TestimonialsSection() {
    return (
        <section className="py-24 bg-slate-50 relative overflow-hidden" id="testimonials">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>

            <div className="container px-4 md:px-6 mx-auto relative z-10">
                <div className="text-center mb-16 space-y-4">
                    <div className="inline-block px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm font-bold mb-2 border border-yellow-200">
                        HISTÓRIAS REAIS
                    </div>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-slate-900 leading-tight">
                        O que acontece quando você <br className="hidden md:block" /> aplica a Neurociência?
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {/* Card 1 */}
                    <Card className="border-none shadow-xl shadow-slate-200/50 bg-white relative rounded-[2rem] overflow-hidden hover:translate-y-[-4px] transition-transform duration-300">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-yellow-50 rounded-bl-[4rem] -mr-4 -mt-4 z-0"></div>
                        <Quote className="absolute top-6 right-6 w-10 h-10 text-yellow-200 z-10" />

                        <CardHeader className="flex flex-row items-center gap-5 relative z-10 pb-4 pt-8 px-8">
                            <div className="w-14 h-14 rounded-full bg-slate-100 flex items-center justify-center border-2 border-slate-50 shadow-sm shrink-0">
                                <User className="w-7 h-7 text-slate-400" />
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-900 text-lg">Mariana G.</h3>
                                <p className="text-sm text-slate-500 font-medium">Mãe do Pedro (4 meses)</p>
                                <div className="flex text-yellow-400 mt-1 gap-0.5">
                                    <Star className="w-4 h-4 fill-current" />
                                    <Star className="w-4 h-4 fill-current" />
                                    <Star className="w-4 h-4 fill-current" />
                                    <Star className="w-4 h-4 fill-current" />
                                    <Star className="w-4 h-4 fill-current" />
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent className="relative z-10 text-slate-600 italic px-8 pb-8 leading-relaxed text-lg">
                            "A pediatra não acreditou. Na consulta de 4 meses, o Pedro já estava tentando sentar e seguia objetos com uma rapidez que a médica disse ser de um bebê de 6 meses. Ela me perguntou o que eu estava fazendo e eu mostrei o checklist. Ela disse: <span className="font-bold text-slate-800 bg-yellow-100 px-1 rounded">'Continue, ele vai voar na escola'</span>."
                        </CardContent>
                    </Card>

                    {/* Card 2 */}
                    <Card className="border-none shadow-xl shadow-slate-200/50 bg-white relative rounded-[2rem] overflow-hidden hover:translate-y-[-4px] transition-transform duration-300">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-yellow-50 rounded-bl-[4rem] -mr-4 -mt-4 z-0"></div>
                        <Quote className="absolute top-6 right-6 w-10 h-10 text-yellow-200 z-10" />

                        <CardHeader className="flex flex-row items-center gap-5 relative z-10 pb-4 pt-8 px-8">
                            <div className="w-14 h-14 rounded-full bg-slate-100 flex items-center justify-center border-2 border-slate-50 shadow-sm shrink-0">
                                <User className="w-7 h-7 text-slate-400" />
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-900 text-lg">Ricardo e Bia</h3>
                                <p className="text-sm text-slate-500 font-medium">Pais da Liz (10 meses)</p>
                                <div className="flex text-yellow-400 mt-1 gap-0.5">
                                    <Star className="w-4 h-4 fill-current" />
                                    <Star className="w-4 h-4 fill-current" />
                                    <Star className="w-4 h-4 fill-current" />
                                    <Star className="w-4 h-4 fill-current" />
                                    <Star className="w-4 h-4 fill-current" />
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent className="relative z-10 text-slate-600 italic px-8 pb-8 leading-relaxed text-lg">
                            "Economizei dinheiro e ganhei paz. Eu ia comprar um andador de 400 reais. O Guia do Enxoval Inteligente (que vem no plano completo) me explicou por que isso faria mal. Comprei os itens certos, gastei menos e ela já está dando os primeiros passos sozinha aos 10 meses."
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}
