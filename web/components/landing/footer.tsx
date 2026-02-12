export default function Footer() {
    return (
        <footer className="py-12 bg-slate-900 border-t border-slate-800 text-slate-400 text-sm" id="footer">
            <div className="container px-4 md:px-6 mx-auto text-center space-y-4">
                <div className="flex justify-center gap-6 font-medium">
                    <a href="#" className="hover:text-white transition-colors">Políticas de Privacidade</a>
                    <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
                    <a href="#" className="hover:text-white transition-colors">Contato</a>
                </div>
                <p>© {new Date().getFullYear()} Protocolo NeuroBaby. Todos os direitos reservados.</p>
                <p className="text-xs text-slate-600 max-w-sm mx-auto">
                    Este produto não substitui o parecer médico profissional. Sempre consulte um pediatra para questões de saúde do seu bebê.
                </p>
            </div>
        </footer>
    );
}
