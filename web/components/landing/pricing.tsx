import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function PricingSection() {
    return (
        <section className="py-24 bg-slate-50 relative overflow-hidden" id="pricing">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-100/30 rounded-full blur-3xl opacity-50 pointer-events-none" />

            <div className="container px-4 md:px-6 mx-auto max-w-5xl relative z-10">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-slate-900">
                        Escolha o Futuro do Seu Filho Agora
                    </h2>
                    <p className="mx-auto max-w-[700px] text-slate-500 md:text-xl/relaxed font-medium">
                        Não deixe para depois. A <span className="text-red-500 font-bold">janela neurológica</span> não espera.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 items-center max-w-4xl mx-auto">
                    {/* Option 1: Basic - Ghosted/De-emphasized */}
                    <Card className="border-slate-200 shadow-sm hover:shadow-md transition-shadow bg-slate-50/50 rounded-3xl opacity-80 hover:opacity-100 scale-95 origin-right lg:mr-[-20px] z-0">
                        <CardHeader>
                            <CardTitle className="text-xl font-bold text-slate-500">
                                O Curioso (Básico)
                            </CardTitle>
                            <CardDescription>Para quem quer apenas testar.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex items-center gap-2">
                                <span className="text-sm text-slate-400 line-through">
                                    R$ 97,00
                                </span>
                                <span className="text-3xl font-bold text-slate-700">
                                    R$ 10,00
                                </span>
                            </div>
                            <ul className="space-y-3 text-slate-500 text-sm">
                                <li className="flex items-center gap-2">
                                    <Check className="h-4 w-4 text-slate-400" /> Checklist 0 a 12 Meses
                                </li>
                                <li className="flex items-center gap-2 text-slate-400/70">
                                    <X className="h-4 w-4" /> Sem Continuidade
                                </li>
                                <li className="flex items-center gap-2 text-slate-400/70">
                                    <X className="h-4 w-4" /> Sem Brinquedos (Guia)
                                </li>
                                <li className="flex items-center gap-2 text-slate-400/70">
                                    <X className="h-4 w-4" /> Acesso Padrão
                                </li>
                            </ul>
                        </CardContent>
                        <CardFooter>
                            <Button variant="outline" className="w-full rounded-xl border-slate-300 text-slate-500 hover:text-slate-700 hover:bg-slate-100" asChild>
                                <a href="#checkout-basic">QUERO APENAS O BÁSICO</a>
                            </Button>
                        </CardFooter>
                    </Card>

                    {/* Option 2: Complete (Recommended) - Hero Card */}
                    <Card className="border-2 border-primary shadow-2xl relative bg-white transform md:scale-110 z-10 rounded-[2rem] overflow-visible ring-4 ring-primary/5">
                        <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-full text-center">
                            <Badge className="px-6 py-1.5 text-sm font-bold uppercase tracking-wider bg-primary text-primary-foreground hover:bg-primary shadow-lg rounded-full border-4 border-slate-50">
                                ⭐ Recomendado pelos Pais
                            </Badge>
                        </div>
                        <CardHeader className="pt-10 pb-2 text-center">
                            <CardTitle className="text-2xl font-bold text-slate-900">
                                O Pai/Mãe Inteligente
                            </CardTitle>
                            <CardDescription className="text-emerald-600 font-bold bg-emerald-50 inline-block px-3 py-1 rounded-full text-xs mt-2">
                                Economia de R$ 500+ em brinquedos
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="flex items-center justify-center gap-3 bg-slate-50 py-4 rounded-2xl border border-slate-100 mb-2">
                                <span className="text-sm text-slate-400 line-through font-medium">
                                    R$ 197,00
                                </span>
                                <div className="flex flex-col items-start leading-none">
                                    <span className="text-5xl font-extrabold text-primary">
                                        R$ 27<small className="text-2xl">,00</small>
                                    </span>
                                </div>
                            </div>

                            <p className="text-center text-xs text-slate-500 font-medium">
                                Oferta limitada: 7x mais conteúdo por + R$ 17
                            </p>

                            <div className="space-y-3 text-slate-700 text-sm font-medium px-2">
                                <div className="flex items-center gap-3">
                                    <div className="bg-primary/10 p-1 rounded-full"><Check className="h-4 w-4 text-primary shrink-0" /></div>
                                    <span>Checklist 0 a 12 Meses</span>
                                </div>
                                <div className="flex items-center gap-3 bg-blue-50/50 p-2 rounded-xl -mx-2 border border-blue-100/50">
                                    <div className="bg-blue-100 p-1 rounded-full"><Check className="h-4 w-4 text-primary shrink-0" /></div>
                                    <span>
                                        <strong>BÔNUS:</strong> Checklist 1 a 2 Anos (Fala)
                                    </span>
                                </div>
                                <div className="flex items-center gap-3 bg-blue-50/50 p-2 rounded-xl -mx-2 border border-blue-100/50">
                                    <div className="bg-blue-100 p-1 rounded-full"><Check className="h-4 w-4 text-primary shrink-0" /></div>
                                    <span>
                                        <strong>BÔNUS:</strong> Checklist 2 a 3 Anos (Lógica)
                                    </span>
                                </div>
                                <div className="flex items-center gap-3 bg-emerald-50 p-2 rounded-xl -mx-2 border border-emerald-100">
                                    <div className="bg-emerald-100 p-1 rounded-full"><Check className="h-4 w-4 text-emerald-600 shrink-0" /></div>
                                    <span>
                                        <strong>Guia do Enxoval Inteligente</strong> (Brinquedos)
                                    </span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="bg-primary/10 p-1 rounded-full"><Check className="h-4 w-4 text-primary shrink-0" /></div>
                                    <span>Acesso Vitalício + Atualizações</span>
                                </div>
                            </div>
                        </CardContent>
                        <CardFooter className="pb-8 pt-2">
                            <Button size="xl" variant="cta" className="w-full text-base shadow-red-200" asChild>
                                <a href="#checkout-complete">QUERO O PACOTE COMPLETO</a>
                            </Button>
                        </CardFooter>
                    </Card>
                </div>

                {/* Guarantee Seal below pricing */}
                <div className="mt-16 text-center">
                    <div className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full border shadow-sm text-sm text-slate-600 hover:shadow-md transition-shadow">
                        <div className="bg-green-100 p-1 rounded-full"><Check className="w-4 h-4 text-green-600" /></div>
                        <span className="font-semibold">Garantia de 7 dias incondicional</span> — Risco Zero
                    </div>
                </div>
            </div>
        </section>
    );
}
