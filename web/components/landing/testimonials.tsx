import { Quote, Star, User } from "lucide-react";

export default function TestimonialsSection() {
    return (
        <section className="py-24 bg-white" id="testimonials">
            <div className="container px-4 md:px-6 mx-auto max-w-7xl">
                <div className="text-center mb-20 space-y-6">
                    <div className="inline-block bg-blue-50 text-blue-600 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                        Histórias Reais de Sucesso
                    </div>
                    <h2 className="text-3xl font-extrabold tracking-tight md:text-5xl text-slate-900">
                        O que acontece quando você <br /> <span className="text-primary italic">aplica a neurociência?</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Testimonial 1 */}
                    <div className="bg-slate-50/50 p-12 rounded-[3rem] border border-slate-100 relative group hover:bg-white hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500">
                        <Quote className="absolute top-10 right-10 w-12 h-12 text-blue-500/10" />
                        <div className="space-y-8 relative z-10">
                            <div className="flex text-amber-400 gap-1">
                                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                            </div>
                            <p className="text-xl text-slate-700 font-medium leading-relaxed italic">
                                "A pediatra ficou chocada. No teste de acompanhamento visual e reflexos, ela disse que nunca viu um bebê de 4 meses tão 'conectado'. O Protocolo não é luxo, é obrigação para quem quer o melhor pro filho."
                            </p>
                            <div className="flex items-center gap-4 pt-6">
                                <div className="w-14 h-14 rounded-2xl bg-white border border-slate-100 flex items-center justify-center">
                                    <User className="w-6 h-6 text-slate-300" />
                                </div>
                                <div>
                                    <p className="font-bold text-slate-900 text-lg">Mariana G.</p>
                                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Mãe do Pedro (4 meses)</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Testimonial 2 */}
                    <div className="bg-slate-50/50 p-12 rounded-[3rem] border border-slate-100 relative group hover:bg-white hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500">
                        <Quote className="absolute top-10 right-10 w-12 h-12 text-blue-500/10" />
                        <div className="space-y-8 relative z-10">
                            <div className="flex text-amber-400 gap-1">
                                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                            </div>
                            <p className="text-xl text-slate-700 font-medium leading-relaxed italic">
                                "Me sentia perdida e culpada por não saber como brincar com a Liz. Agora, os 15 minutos do ritual de neuroestimulação são o ponto alto do nosso dia. Me sinto uma Super Mãe segura do que está fazendo."
                            </p>
                            <div className="flex items-center gap-4 pt-6">
                                <div className="w-14 h-14 rounded-2xl bg-white border border-slate-100 flex items-center justify-center">
                                    <User className="w-6 h-6 text-slate-300" />
                                </div>
                                <div>
                                    <p className="font-bold text-slate-900 text-lg">Carlos e Bia</p>
                                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Pais da Liz (10 meses)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
