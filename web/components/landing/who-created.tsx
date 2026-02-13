export default function WhoCreatedSection() {
    return (
        <section className="py-24 bg-slate-900 overflow-hidden relative" id="about">
            {/* Dark Mode Elegance */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-900 to-slate-900" />

            <div className="container px-4 md:px-6 mx-auto max-w-7xl relative z-10">
                <div className="grid lg:grid-cols-2 gap-20 items-center">

                    {/* Visual - Elegant Dark Frame */}
                    <div className="relative order-2 lg:order-1 flex justify-center">
                        <div className="relative w-full max-w-[450px] aspect-[4/5] bg-slate-800 rounded-[3rem] border border-white/5 shadow-2xl overflow-hidden">
                            <img
                                src="/luciana-family.png"
                                alt="Luciana Barbosa e sua Família"
                                className="w-full h-full object-cover opacity-100 group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>

                            {/* Stats Overlay on Visual */}
                            <div className="absolute bottom-8 left-8 right-8 grid grid-cols-2 gap-4">
                                <div className="bg-white/10 backdrop-blur-md p-4 rounded-3xl border border-white/10 text-center">
                                    <p className="text-primary font-black text-2xl">+10</p>
                                    <p className="text-white font-bold text-[8px] uppercase tracking-widest">Anos de Experiência</p>
                                </div>
                                <div className="bg-white/10 backdrop-blur-md p-4 rounded-3xl border border-white/10 text-center">
                                    <p className="text-primary font-black text-2xl">+10k</p>
                                    <p className="text-white font-bold text-[8px] uppercase tracking-widest">Famílias Ajudadas</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="space-y-10 order-1 lg:order-2">
                        <div className="space-y-4">
                            <p className="text-primary font-bold uppercase tracking-widest text-sm">Sobre a Autora</p>
                            <h2 className="text-4xl font-extrabold tracking-tight md:text-6xl text-white leading-tight">
                                Luciana Barbosa
                            </h2>
                            <p className="text-slate-400 font-bold text-lg italic">Entusiasta em Desenvolvimento Cognitivo Infantil</p>
                            <div className="h-1.5 w-24 bg-primary rounded-full"></div>
                        </div>

                        <div className="space-y-8 text-slate-300 text-lg md:text-xl font-medium leading-relaxed italic">
                            <p className="relative">
                                <span className="absolute -top-6 -left-4 text-primary opacity-20 text-8xl font-serif">"</span>
                                "A inteligência não é um dom, é um estímulo. Meu papel é dar aos pais o mapa para não deixarem o futuro dos filhos ao acaso."
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
