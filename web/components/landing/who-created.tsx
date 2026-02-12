export default function WhoCreatedSection() {
    return (
        <section className="py-24 bg-slate-900 overflow-hidden relative" id="about">
            {/* Dark Mode Elegance */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-900 to-slate-900" />

            <div className="container px-4 md:px-6 mx-auto max-w-7xl relative z-10">
                <div className="grid lg:grid-cols-2 gap-20 items-center">

                    {/* Visual - Elegant Dark Frame */}
                    <div className="relative order-2 lg:order-1 flex justify-center">
                        <div className="relative w-full max-w-[450px] aspect-[4/5] bg-slate-800 rounded-[3rem] border border-white/5 shadow-2xl overflow-hidden flex items-center justify-center p-8">
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent opacity-60"></div>
                            <span className="text-slate-500 font-bold uppercase tracking-widest text-sm text-center">
                                Espaço para Foto Profissional <br /> (Anderson Adelino)
                            </span>
                        </div>
                        {/* Decorative Badge */}
                        <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-[2rem] shadow-2xl border border-slate-100 hidden md:block">
                            <p className="text-slate-900 font-black text-4xl italic">1.2k+</p>
                            <p className="text-slate-400 font-bold text-[10px] uppercase tracking-widest mt-1">Alunos Ativos</p>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="space-y-10 order-1 lg:order-2">
                        <div className="space-y-4">
                            <h2 className="text-3xl font-extrabold tracking-tight md:text-5xl text-white leading-tight">
                                Quem está por trás <br /> <span className="text-primary italic">do método?</span>
                            </h2>
                            <div className="h-1.5 w-24 bg-primary rounded-full"></div>
                        </div>

                        <div className="space-y-8 text-slate-300 text-lg md:text-xl font-medium leading-relaxed">
                            <p>
                                <strong className="text-white text-3xl block mb-6 font-black tracking-tight underline-offset-8 decoration-primary/30 decoration-4">Anderson Adelino</strong>
                            </p>
                            <p>
                                Pai dedicado e entusiasta da neurociência aplicada, Anderson decidiu transformar o complexo mundo acadêmico em algo prático e acessível.
                            </p>
                            <p>
                                O <span className="text-white font-bold italic">Protocolo NeuroBaby</span> nasceu da busca incessante pelo estímulo ideal para garantir que seu próprio filho tivesse a melhor base cognitiva possível.
                            </p>
                            <p>
                                O que começou como uma necessidade familiar, hoje é um movimento que ajuda centenas de pais a recuperarem a confiança e a clareza sobre como educar gênio na era das distrações.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
