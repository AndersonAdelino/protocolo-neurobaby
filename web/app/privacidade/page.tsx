import Link from "next/link";

export const metadata = {
    title: "Política de Privacidade | Checklist do Bebê Esperto",
    description: "Política de Privacidade do Checklist do Bebê Esperto.",
};

export default function PrivacidadePage() {
    return (
        <main className="min-h-screen bg-background">
            <div className="container max-w-3xl mx-auto px-6 py-16 space-y-10">
                <div className="space-y-2">
                    <Link href="/" className="text-primary text-sm font-bold hover:underline">← Voltar para o início</Link>
                    <h1 className="text-3xl font-heading font-extrabold text-foreground mt-4">Política de Privacidade</h1>
                    <p className="text-muted-foreground text-sm">Última atualização: {new Date().toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" })}</p>
                </div>

                <div className="prose prose-slate max-w-none space-y-8 text-foreground/80 leading-relaxed">
                    <section className="space-y-3">
                        <h2 className="text-xl font-bold text-foreground">1. Informações que Coletamos</h2>
                        <p>Ao utilizar nosso site e adquirir nossos produtos, podemos coletar as seguintes informações:</p>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>Nome e endereço de e-mail (fornecidos no momento da compra);</li>
                            <li>Dados de navegação (páginas visitadas, tempo de permanência, origem do acesso);</li>
                            <li>Dados de dispositivo e navegador para fins de análise de desempenho.</li>
                        </ul>
                        <p>Não coletamos dados sensíveis como informações bancárias diretamente — todos os pagamentos são processados pela plataforma Kiwify, sujeita à política de privacidade própria.</p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-xl font-bold text-foreground">2. Como Usamos Suas Informações</h2>
                        <p>As informações coletadas são utilizadas para:</p>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>Processar e entregar o produto adquirido;</li>
                            <li>Enviar comunicações relacionadas ao produto (atualizações, suporte);</li>
                            <li>Melhorar a experiência do nosso site;</li>
                            <li>Exibir anúncios relevantes por meio de plataformas como Meta (Facebook/Instagram) e Google Ads.</li>
                        </ul>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-xl font-bold text-foreground">3. Cookies e Rastreamento</h2>
                        <p>Utilizamos cookies e tecnologias de rastreamento, incluindo:</p>
                        <ul className="list-disc pl-6 space-y-1">
                            <li><strong>Google Analytics:</strong> para análise de tráfego e comportamento no site;</li>
                            <li><strong>Meta Pixel:</strong> para medir a eficácia de anúncios e exibir publicidade personalizada;</li>
                            <li><strong>UTMify:</strong> para rastreamento de origem das visitas.</li>
                        </ul>
                        <p>Você pode desativar cookies nas configurações do seu navegador, o que pode afetar algumas funcionalidades do site.</p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-xl font-bold text-foreground">4. Compartilhamento de Dados</h2>
                        <p>Não vendemos seus dados pessoais. Podemos compartilhar informações com terceiros apenas nas seguintes situações:</p>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>Plataformas de pagamento (Kiwify) para processamento da compra;</li>
                            <li>Ferramentas de análise e publicidade (Google, Meta) de forma anonimizada;</li>
                            <li>Quando exigido por lei ou autoridade competente.</li>
                        </ul>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-xl font-bold text-foreground">5. Seus Direitos (LGPD)</h2>
                        <p>Em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018), você tem direito a:</p>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>Confirmar a existência de tratamento dos seus dados;</li>
                            <li>Acessar, corrigir ou solicitar a exclusão dos seus dados;</li>
                            <li>Revogar o consentimento a qualquer momento;</li>
                            <li>Solicitar a portabilidade dos seus dados.</li>
                        </ul>
                        <p>Para exercer esses direitos, entre em contato pelo e-mail disponível em nossa página de contato.</p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-xl font-bold text-foreground">6. Segurança</h2>
                        <p>Adotamos medidas de segurança adequadas para proteger suas informações contra acesso não autorizado, alteração, divulgação ou destruição.</p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-xl font-bold text-foreground">7. Alterações nesta Política</h2>
                        <p>Podemos atualizar esta política periodicamente. Recomendamos que você a revise regularmente. O uso continuado do site após alterações indica sua aceitação da política atualizada.</p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-xl font-bold text-foreground">8. Contato</h2>
                        <p>Em caso de dúvidas sobre esta Política de Privacidade, entre em contato conosco através da nossa <Link href="/contato" className="text-primary hover:underline font-semibold">página de contato</Link>.</p>
                    </section>
                </div>
            </div>
        </main>
    );
}
