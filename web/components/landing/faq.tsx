import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

export default function FAQSection() {
    return (
        <section className="py-24 bg-white relative" id="faq">
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-slate-50 rounded-full blur-3xl opacity-50 pointer-events-none translate-y-1/2 translate-x-1/2" />

            <div className="container px-4 md:px-6 mx-auto max-w-3xl relative z-10">
                <div className="text-center mb-16 space-y-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-slate-100 rounded-full text-slate-500 mb-4">
                        <HelpCircle className="w-6 h-6" />
                    </div>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-slate-900">
                        Perguntas Frequentes
                    </h2>
                    <p className="text-slate-500">Tire suas dúvidas antes de começar.</p>
                </div>

                <Accordion type="single" collapsible className="w-full space-y-4">
                    <AccordionItem value="item-1" className="bg-slate-50 border border-slate-100 rounded-2xl px-6 data-[state=open]:bg-white data-[state=open]:shadow-md data-[state=open]:border-slate-200 transition-all duration-300">
                        <AccordionTrigger className="text-left font-bold text-slate-800 hover:text-primary hover:no-underline py-5 text-lg">Preciso comprar materiais caros?</AccordionTrigger>
                        <AccordionContent className="text-slate-600 leading-relaxed pb-6 text-base">
                            Não. 90% das atividades usam o que você já tem em casa (almofadas, potes, espelhos). O foco é na interação, não no objeto.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-2" className="bg-slate-50 border border-slate-100 rounded-2xl px-6 data-[state=open]:bg-white data-[state=open]:shadow-md data-[state=open]:border-slate-200 transition-all duration-300">
                        <AccordionTrigger className="text-left font-bold text-slate-800 hover:text-primary hover:no-underline py-5 text-lg">Quanto tempo leva por dia?</AccordionTrigger>
                        <AccordionContent className="text-slate-600 leading-relaxed pb-6 text-base">
                            15 minutos por dia. O método foi desenhado especificamente para pais ocupados que querem qualidade de tempo, não quantidade.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-3" className="bg-slate-50 border border-slate-100 rounded-2xl px-6 data-[state=open]:bg-white data-[state=open]:shadow-md data-[state=open]:border-slate-200 transition-all duration-300">
                        <AccordionTrigger className="text-left font-bold text-slate-800 hover:text-primary hover:no-underline py-5 text-lg">Como recebo o acesso?</AccordionTrigger>
                        <AccordionContent className="text-slate-600 leading-relaxed pb-6 text-base">
                            Imediatamente no seu e-mail após a confirmação do pagamento. Você recebe um link para baixar o PDF no seu celular, tablet ou computador.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-4" className="bg-slate-50 border border-slate-100 rounded-2xl px-6 data-[state=open]:bg-white data-[state=open]:shadow-md data-[state=open]:border-slate-200 transition-all duration-300">
                        <AccordionTrigger className="text-left font-bold text-slate-800 hover:text-primary hover:no-underline py-5 text-lg">Serve para qual idade?</AccordionTrigger>
                        <AccordionContent className="text-slate-600 leading-relaxed pb-6 text-base">
                            O Protocolo cobre do nascimento (0 meses) até os 12 meses completos. O pacote "Pai/Mãe Inteligente" inclui bônus até os 3 anos.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </section>
    );
}
