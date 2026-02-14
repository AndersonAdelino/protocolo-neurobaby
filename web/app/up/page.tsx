"use client";

import Link from "next/link";
import { Check, Star, Moon, Brain, Zap, ShieldCheck, ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function UpsellPage() {
    const fadeInUp = {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 }
    };

    return (
        <div className="min-h-screen bg-background pb-20 overflow-x-hidden">
            {/* High-Urgency Header */}
            <motion.div
                initial={{ y: -50 }}
                animate={{ y: 0 }}
                className="bg-red-600 text-white py-3 px-4 text-center font-bold text-xs md:text-sm tracking-widest uppercase sticky top-0 z-50 shadow-lg"
            >
                ⚠️ Oferta Exclusiva: Não recarregue ou feche esta página
            </motion.div>

            <main className="container max-w-2xl mx-auto px-6 py-12 md:py-20 space-y-16">
                {/* Elite Headline Section */}
                <motion.div
                    {...fadeInUp}
                    className="text-center space-y-8"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest border border-primary/20">
                        <Sparkles className="w-3 h-3 animate-pulse" /> Acesso Liberado para Novos Alunos
                    </div>

                    <h1 className="font-heading text-4xl md:text-6xl font-extrabold text-foreground leading-[1.1] tracking-tight text-balance">
                        Estimular sem o Sono <br />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60 italic">
                            é como construir na areia.
                        </span>
                    </h1>

                    <p className="text-xl text-muted-foreground leading-relaxed max-w-xl mx-auto">
                        Os estímulos que você comprou são a semente. O <span className="text-foreground font-bold">Protocolo NeuroSleep</span> é o solo onde ela cresce.
                    </p>
                </motion.div>

                {/* The "Neural Save" Concept - Minimalist Card with Hover Effect */}
                <motion.section
                    {...fadeInUp}
                    className="relative group"
                >
                    <div className="absolute inset-0 bg-primary/10 rounded-[2.5rem] blur-2xl opacity-50 group-hover:opacity-100 transition-opacity" />
                    <div className="relative clay-card p-8 md:p-12 bg-card border border-primary/10 space-y-8 overflow-hidden">
                        <div className="flex items-center gap-4 text-primary">
                            <div className="p-3 bg-primary/10 rounded-2xl">
                                <Brain className="w-10 h-10" />
                            </div>
                            <h2 className="font-heading text-2xl md:text-3xl font-bold">A Ciência da Consolidação</h2>
                        </div>

                        <p className="text-lg md:text-xl leading-relaxed text-foreground/80">
                            O cérebro do seu bebê não aprende enquanto brinca. O aprendizado real — a transformação de estímulo em <span className="text-primary font-black">Inteligência Permanente</span> — ocorre apenas em uma fase específica do <span className="underline decoration-primary decoration-4 underline-offset-8">Sono Profundo</span>.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="p-6 bg-red-50/50 dark:bg-red-950/10 rounded-2xl space-y-3">
                                <div className="text-red-600 font-black flex items-center gap-2 text-sm uppercase tracking-tighter">
                                    <span className="w-2 h-2 rounded-full bg-red-600" /> O Risco Biológico
                                </div>
                                <p className="text-sm text-muted-foreground leading-snug">Se o sono falha, o Cortisol alto destrói as conexões neurais feitas durante o dia.</p>
                            </div>
                            <div className="p-6 bg-primary-50/50 dark:bg-primary-950/10 rounded-2xl space-y-3">
                                <div className="text-primary font-black flex items-center gap-2 text-sm uppercase tracking-tighter">
                                    <span className="w-2 h-2 rounded-full bg-primary" /> O Resultado
                                </div>
                                <p className="text-sm text-muted-foreground leading-snug">Sincronização bioquímica que &quot;carimba&quot; o conhecimento no cérebro.</p>
                            </div>
                        </div>
                    </div>
                </motion.section>

                {/* Interactive Benefits List */}
                <section className="space-y-12">
                    <motion.h3
                        {...fadeInUp}
                        className="font-heading text-center text-3xl font-bold"
                    >
                        O que você vai dominar em 15 minutos:
                    </motion.h3>

                    <div className="grid gap-4">
                        {[
                            {
                                title: "Janelas Bioquímicas",
                                desc: "O timing milimétrico para o berço sem lutas.",
                                icon: Moon
                            },
                            {
                                title: "O Ritual de Pavlov",
                                desc: "Sequência de indução de Melatonina testada.",
                                icon: Zap
                            },
                            {
                                title: "Blindagem de Laboratório",
                                desc: "Controle ambiental para evitar despertares.",
                                icon: Star
                            }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="flex items-center gap-6 p-6 rounded-[2rem] bg-card border border-border hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 transition-all group cursor-default"
                            >
                                <div className="bg-primary/10 p-4 rounded-2xl text-primary group-hover:scale-110 transition-transform">
                                    <item.icon className="w-7 h-7" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-xl">{item.title}</h4>
                                    <p className="text-muted-foreground">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* The Offer - High Impact with Animate Glow */}
                <motion.section
                    {...fadeInUp}
                    className="relative"
                >
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary/50 to-primary/20 rounded-[3rem] blur opacity-25" />
                    <div className="relative bg-foreground text-background p-10 md:p-16 rounded-[2.5rem] text-center space-y-10 shadow-2xl">
                        <div className="space-y-3">
                            <span className="text-primary font-black uppercase tracking-[0.2em] text-xs">Acesso Vitalício + Tabelas</span>
                            <h2 className="font-heading text-4xl md:text-5xl font-extrabold leading-tight">
                                Noites de Paz. <br />
                                <span className="text-primary">Evolução Máxima.</span>
                            </h2>
                        </div>

                        <div className="flex flex-col items-center">
                            <span className="text-muted-foreground line-through text-2xl font-medium">R$ 97,00</span>
                            <div className="flex items-start gap-1">
                                <span className="text-2xl font-bold mt-2">R$</span>
                                <span className="text-8xl font-black text-white tracking-tighter">29</span>
                                <span className="text-3xl font-bold mt-10">,90</span>
                            </div>
                        </div>

                        <div className="space-y-8">
                            <button className="w-full group relative overflow-hidden bg-primary text-white font-heading font-black text-2xl py-8 rounded-[1.5rem] shadow-[0_20px_40px_-15px_rgba(34,197,94,0.5)] transition-all hover:scale-[1.03] active:scale-[0.98]">
                                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />
                                <span className="relative flex items-center justify-center gap-4">
                                    SIM, GARANTIR O SONO <ArrowRight className="w-8 h-8" />
                                </span>
                            </button>

                            <Link
                                href="/"
                                className="block text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold text-muted-foreground hover:text-white transition-colors border-b border-transparent hover:border-muted-foreground w-max mx-auto uppercase"
                            >
                                Ignorar oferta e correr o risco do cortisol
                            </Link>
                        </div>

                        <div className="grid grid-cols-3 gap-4 pt-10 border-t border-white/5 text-[10px] uppercase font-black tracking-widest text-muted-foreground">
                            <div className="space-y-2">
                                <ShieldCheck className="w-5 h-5 mx-auto text-primary" />
                                <span>Garantia</span>
                            </div>
                            <div className="space-y-2">
                                <Check className="w-5 h-5 mx-auto text-primary" />
                                <span>PDF Único</span>
                            </div>
                            <div className="space-y-2">
                                <Check className="w-5 h-5 mx-auto text-primary" />
                                <span>Seguro</span>
                            </div>
                        </div>
                    </div>
                </motion.section>

                {/* Minimal High-Level FAQ */}
                <motion.section
                    {...fadeInUp}
                    className="text-center space-y-8 py-10"
                >
                    <div className="w-12 h-1 bg-border mx-auto rounded-full" />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left max-w-xl mx-auto">
                        <div className="space-y-3">
                            <h5 className="font-black text-sm uppercase tracking-widest text-primary">Para qual idade?</h5>
                            <p className="text-sm text-muted-foreground leading-relaxed">Desenvolvido especificamente para a janela crítica de 0 a 24 meses, onde a plasticidade neural é máxima.</p>
                        </div>
                        <div className="space-y-3">
                            <h5 className="font-black text-sm uppercase tracking-widest text-primary">Entrega?</h5>
                            <p className="text-sm text-muted-foreground leading-relaxed">Acesso imediato após o clique. Manual digital de alta densidade + tabelas práticas de aplicação.</p>
                        </div>
                    </div>
                </motion.section>
            </main>
        </div>
    );
}
