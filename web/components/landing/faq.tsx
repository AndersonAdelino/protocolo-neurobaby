import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
    {
        q: "Quanto tempo preciso dedicar por dia?",
        a: "Apenas 15 minutos. O método foi desenhado para ser integrado à sua rotina atual (troca de fralda, banho ou brincadeira), focando em qualidade, não em quantidade de tempo."
    },
    {
        q: "O material serve para recém-nascidos?",
        a: "Sim! O checklist começa no Mês 0. Quanto mais cedo você iniciar os estímulos de visão, reflexo e audição, melhor será a fundação cerebral do bebê."
    },
    {
        q: "Como é feito o envio do acesso?",
        a: "O acesso é imediato. Assim que o pagamento for confirmado, você recebe um e-mail com o link de download do PDF digital para ler no celular, tablet ou computador."
    },
    {
        q: "Existe alguma garantia de satisfação?",
        a: "Com certeza. Você tem 7 dias de garantia incondicional. Se por qualquer motivo sentir que o material não agregou valor, devolvemos 100% do seu investimento."
    }
];

export default function FAQSection() {
    return (
        <section className="py-24 bg-white" id="faq">
            <div className="container px-4 md:px-6 mx-auto max-w-4xl">

                <div className="text-center mb-20 space-y-6">
                    <div className="inline-block bg-slate-50 border border-slate-100 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-slate-400">
                        Central de Apoio
                    </div>
                    <h2 className="text-3xl font-extrabold tracking-tight md:text-5xl text-slate-900">
                        Dúvidas <span className="text-primary italic">Frequentes</span>
                    </h2>
                    <p className="text-slate-500 font-medium">Tudo o que você precisa saber antes de começar.</p>
                </div>

                <Accordion type="single" collapsible className="w-full space-y-4">
                    {faqs.map((faq, i) => (
                        <AccordionItem key={i} value={`item-${i}`} className="border border-slate-100 rounded-[2rem] px-8 bg-slate-50/50 data-[state=open]:bg-white data-[state=open]:shadow-xl data-[state=open]:shadow-slate-200/40 transition-all duration-300">
                            <AccordionTrigger className="text-left font-bold text-slate-800 hover:text-primary hover:no-underline py-6 text-lg tracking-tight">
                                {faq.q}
                            </AccordionTrigger>
                            <AccordionContent className="text-slate-600 font-medium leading-relaxed pb-8 text-base border-t border-slate-50 pt-6">
                                {faq.a}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>

                <div className="mt-16 text-center">
                    <p className="text-sm text-slate-400 font-medium">
                        Ainda tem alguma dúvida? Fale conosco via WhatsApp clicando <a href="#" className="text-primary font-bold underline underline-offset-4 hover:text-blue-700 transition-colors">aqui</a>.
                    </p>
                </div>
            </div>
        </section>
    );
}
