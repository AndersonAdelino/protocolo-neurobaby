import { CheckCircle2, FileText, Play, Download, ThumbsUp } from "lucide-react";

export default function SolutionSection() {
    return (
        <section className="py-24 bg-white" id="solution">
            <div className="container px-4 md:px-6 mx-auto max-w-7xl">
                <div className="grid items-center gap-16 lg:grid-cols-2">
                    {/* Left Content */}
                    <div className="space-y-10">
                        <div className="space-y-4">
                            <div className="inline-block px-4 py-1.5 bg-blue-50 text-blue-700 rounded-full text-sm font-bold tracking-wide">
                                MÉTODO COMPROVADO
                            </div>
                            <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl text-slate-900 leading-[1.15]">
                                Pare de Adivinhar. <br /> <span className="text-primary">Comece a Executar.</span>
                            </h2>
                            <p className="max-w-[600px] text-slate-600 md:text-xl font-medium leading-relaxed">
                                Esqueça livros de 300 páginas que você nunca vai ler. Esqueça cursos teóricos. O NeuroBaby é uma <strong>FERRAMENTA PRÁTICA</strong> de ação imediata.
                            </p>
                        </div>

                        <div className="grid gap-4">
                            {[
                                { title: "MÊS 1 a 3", desc: "Foco visual, pescoço e mãos", color: "bg-blue-100 text-blue-700 border-blue-200" },
                                { title: "MÊS 4 a 6", desc: "Rolar, sentar, introdução aos sons", color: "bg-purple-100 text-purple-700 border-purple-200" },
                                { title: "MÊS 7 a 9", desc: "Engatinhar, pinça fina e objetos", color: "bg-orange-100 text-orange-700 border-orange-200" },
                                { title: "MÊS 10 a 12", desc: "Andar, falar e resolver problemas", color: "bg-emerald-100 text-emerald-700 border-emerald-200" }
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-5 p-4 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md hover:border-slate-200 transition-all group">
                                    <div className={`px-4 py-2 rounded-xl text-xs font-bold ${item.color} shrink-0 border uppercase tracking-wider group-hover:scale-105 transition-transform`}>
                                        {item.title}
                                    </div>
                                    <span className="text-slate-700 font-semibold text-sm md:text-base">{item.desc}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Content: How it works timeline */}
                    <div className="bg-slate-50/80 backdrop-blur-sm p-8 md:p-12 rounded-[2.5rem] border border-slate-200/60 shadow-xl shadow-slate-200/40 relative overflow-hidden">
                        {/* Decorative gradient overlay */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

                        <h3 className="text-2xl font-bold mb-10 text-slate-900 text-center relative z-10">Como funciona na prática?</h3>

                        <div className="space-y-12 relative z-10">
                            {/* Vertical Line */}
                            <div className="absolute left-8 top-4 bottom-4 w-0.5 bg-slate-200 md:left-1/2 md:-ml-px hidden md:block"></div>

                            {[
                                { icon: Download, title: "1. Baixe no Celular", desc: "Acesso offline imediato.", color: "text-blue-600", bg: "bg-blue-50 border-blue-100" },
                                { icon: FileText, title: "2. Leia Rapidamente", desc: "Leitura de 2 minutos.", color: "text-purple-600", bg: "bg-purple-50 border-purple-100" },
                                { icon: Play, title: "3. Aplique Brincando", desc: "15 min na troca de fralda.", color: "text-orange-600", bg: "bg-orange-50 border-orange-100" },
                                { icon: ThumbsUp, title: "4. Pronto!", desc: "Missão cumprida.", color: "text-emerald-600", bg: "bg-emerald-50 border-emerald-100" }
                            ].map((step, i) => (
                                <div key={i} className={`relative flex items-center md:justify-between ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                                    {/* Icon Bubble */}
                                    <div className={`absolute left-0 md:static bg-white border-4 border-slate-50 w-16 h-16 flex items-center justify-center rounded-full shadow-lg z-10 ${i % 2 === 0 ? 'md:mr-[-32px]' : 'md:ml-[-32px]'} shrink-0 ring-4 ring-slate-100/50`}>
                                        <step.icon className={`w-7 h-7 ${step.color}`} strokeWidth={2.5} />
                                    </div>

                                    {/* Content Card */}
                                    <div className={`ml-20 md:ml-0 bg-white p-6 rounded-3xl border border-slate-100 shadow-sm w-full md:w-[45%] hover:-translate-y-1 transition-transform duration-300 ${i % 2 === 0 ? 'md:mr-10' : 'md:ml-10'}`}>
                                        <h4 className="font-bold text-slate-900 text-lg mb-1">{step.title}</h4>
                                        <p className="text-slate-500 font-medium text-sm">{step.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
