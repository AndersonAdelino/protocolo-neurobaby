import Link from "next/link";

export const metadata = {
    title: "Termos de Uso | Checklist do Bebê Esperto",
    description: "Termos de Uso do Checklist do Bebê Esperto.",
};

export default function TermosPage() {
    return (
        <main className="min-h-screen bg-background">
            <div className="container max-w-3xl mx-auto px-6 py-16 space-y-10">
                <div className="space-y-2">
                    <Link href="/" className="text-primary text-sm font-bold hover:underline">← Voltar para o início</Link>
                    <h1 className="text-3xl font-heading font-extrabold text-foreground mt-4">Termos de Uso</h1>
                    <p className="text-muted-foreground text-sm">Última atualização: {new Date().toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" })}</p>
                </div>

                <div className="prose prose-slate max-w-none space-y-8 text-foreground/80 leading-relaxed">
                    <section className="space-y-3">
                        <h2 className="text-xl font-bold text-foreground">1. Aceitação dos Termos</h2>
                        <p>Ao acessar e utilizar este site, você concorda com estes Termos de Uso. Caso não concorde com qualquer parte, pedimos que não utilize nossos serviços.</p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-xl font-bold text-foreground">2. Sobre o Produto</h2>
                        <p>O <strong>Checklist do Bebê Esperto</strong> é um produto digital educacional voltado ao desenvolvimento infantil nos primeiros anos de vida. O conteúdo é baseado em boas práticas de estimulação e tem caráter informativo e educacional.</p>
                        <p><strong>Este produto não substitui o acompanhamento médico ou de profissionais de saúde.</strong> Sempre consulte um pediatra ou especialista para questões de saúde do seu filho.</p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-xl font-bold text-foreground">3. Licença de Uso</h2>
                        <p>Ao adquirir o produto, você recebe uma licença pessoal, intransferível e não exclusiva para uso do material. É expressamente proibido:</p>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>Reproduzir, distribuir ou revender o conteúdo;</li>
                            <li>Compartilhar o acesso com terceiros;</li>
                            <li>Utilizar o material para fins comerciais sem autorização expressa.</li>
                        </ul>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-xl font-bold text-foreground">4. Política de Reembolso</h2>
                        <p>Oferecemos garantia de 7 dias a contar da data da compra. Caso não esteja satisfeito, solicite o reembolso integral através da plataforma Kiwify ou entrando em contato conosco.</p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-xl font-bold text-foreground">5. Propriedade Intelectual</h2>
                        <p>Todo o conteúdo deste site e dos produtos — incluindo textos, imagens, design e estrutura — é de propriedade exclusiva dos criadores do Checklist do Bebê Esperto, protegido pelas leis de direitos autorais brasileiras.</p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-xl font-bold text-foreground">6. Limitação de Responsabilidade</h2>
                        <p>Os criadores do produto não se responsabilizam por resultados individuais, uma vez que estes dependem de fatores externos como dedicação, contexto familiar e características individuais de cada criança.</p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-xl font-bold text-foreground">7. Alterações</h2>
                        <p>Reservamos o direito de modificar estes termos a qualquer momento. As alterações entram em vigor imediatamente após a publicação nesta página.</p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-xl font-bold text-foreground">8. Lei Aplicável</h2>
                        <p>Estes termos são regidos pelas leis da República Federativa do Brasil. Para resolver qualquer disputa, fica eleito o foro da comarca do domicílio do consumidor.</p>
                    </section>
                </div>
            </div>
        </main>
    );
}
