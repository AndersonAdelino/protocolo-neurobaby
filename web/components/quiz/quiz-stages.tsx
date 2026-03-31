"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight, ChevronLeft, Loader2, AlertCircle, Baby, Speech, BrainCircuit } from "lucide-react";
import Link from "next/link";

export type QuizData = {
    babyName: string;
    ageRange: "0-6" | "7-12" | "1-2" | "2+";
    distractionMethod: string;
    symptomResponse: string;
    limitedMovement: string;
    irritationScreen: string;
    focusLock: string;
};

// Stage 1: Capture Variables
export function Stage1({
    data,
    updateData,
    onNext,
}: {
    data: QuizData;
    updateData: (d: Partial<QuizData>) => void;
    onNext: () => void;
}) {
    const [error, setError] = useState("");

    const handleNext = () => {
        if (!data.babyName.trim()) {
            setError("Por favor, digite o nome do bebê.");
            return;
        }
        onNext();
    };

    return (
        <div className="space-y-8">
            <div className="text-center space-y-4">
                <h2 className="text-3xl font-heading text-primary leading-tight">
                    Qual é o primeiro nome do seu bebê?
                </h2>
                <p className="text-muted-foreground text-lg italic">
                    A partir daqui, vamos personalizar todo o diagnóstico para o futuro dele.
                </p>
            </div>

            <div className="space-y-4 max-w-sm mx-auto">
                <input
                    type="text"
                    value={data.babyName}
                    onChange={(e) => {
                        updateData({ babyName: e.target.value });
                        setError("");
                    }}
                    placeholder="Nome do bebê"
                    className="w-full px-6 py-4 text-xl rounded-2xl border-2 border-muted focus:border-primary outline-none transition-all shadow-sm bg-card text-foreground"
                    autoFocus
                />
                {error && <p className="text-destructive text-sm font-medium">{error}</p>}
            </div>

            <div className="space-y-4">
                <p className="text-center font-medium text-foreground">Qual a idade do {data.babyName || "seu bebê"}?</p>
                <div className="grid grid-cols-2 gap-4">
                    {[
                        { id: "0-6", label: "0 a 6 meses" },
                        { id: "7-12", label: "7 a 12 meses" },
                        { id: "1-2", label: "1 a 2 anos" },
                        { id: "2+", label: "Mais de 2 anos" },
                    ].map((age) => (
                        <button
                            key={age.id}
                            onClick={() => updateData({ ageRange: age.id as any })}
                            className={`p-6 rounded-2xl border-2 transition-all text-left flex items-start space-x-3 ${data.ageRange === age.id
                                ? "border-primary bg-primary/10 ring-2 ring-primary/20"
                                : "border-muted hover:border-primary/50 bg-card"
                                }`}
                        >
                            <div className={`mt-1 h-3 w-3 rounded-full border-2 ${data.ageRange === age.id ? "border-primary bg-primary" : "border-muted"}`} />
                            <span className="font-semibold">{age.label}</span>
                        </button>
                    ))}
                </div>
            </div>

            <Button onClick={handleNext} className="w-full py-8 text-xl rounded-2xl clay-button group">
                Continuar para o Diagnóstico
                <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
        </div>
    );
}

// Stage 2: Behavioral Questions
export function Stage2({
    data,
    updateData,
    onNext,
    onBack,
}: {
    data: QuizData;
    updateData: (d: Partial<QuizData>) => void;
    onNext: () => void;
    onBack: () => void;
}) {
    const [step, setStep] = useState(1);

    const distractionOptions = [
        { id: "telas", label: "Telas / Vídeos (ex: Galinha Pintadinha)" },
        { id: "brinquedos-luz", label: "Brinquedos de plástico com luzes/sons" },
        { id: "chao", label: "Deixo no chão explorando sozinho" },
    ];

    const symptomQuestion =
        data.ageRange === "0-6" || data.ageRange === "7-12"
            ? {
                text: `O ${data.babyName} já consegue acompanhar um objeto cruzando a linha média da visão dele sem perder o foco?`,
                options: ["Sim", "Não", "Não sei avaliar"],
            }
            : {
                text: `O ${data.babyName} já está juntando duas palavras para formar frases curtas, como 'quero água'?`,
                options: ["Sim", "Não", "Só resmunga"],
            };

    const q5Options = [
        { id: "muito", label: "Mais de 2 horas/dia" },
        { id: "medio", label: "Cerca de 1 hora/dia" },
        { id: "livre", label: "Priorizo o chão / exploração livre" },
    ];

    const q6Options = [
        { id: "sim", label: "Sim, é uma briga constante" },
        { id: "as-vezes", label: "Às vezes reclama, mas logo para" },
        { id: "nao", label: "Não, ele(a) quase não usa telas" },
    ];

    const q7Options = [
        { id: "muito", label: "Sim, acontece com frequência" },
        { id: "raro", label: "Raramente, ele(a) atende rápido" },
        { id: "nunca", label: "Nunca notei isso" },
    ];

    const handleNextStep = () => {
        if (step < 5) {
            setStep(step + 1);
        } else {
            onNext();
        }
    };

    const isStepValid = () => {
        if (step === 1) return !!data.distractionMethod;
        if (step === 2) return !!data.symptomResponse;
        if (step === 3) return !!data.limitedMovement;
        if (step === 4) return !!data.irritationScreen;
        if (step === 5) return !!data.focusLock;
        return false;
    };

    return (
        <div className="space-y-8">
            <AnimatePresence mode="wait">
                {step === 1 && (
                    <motion.div
                        key="q1"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-6"
                    >
                        <div className="text-center space-y-4">
                            <span className="bg-secondary/20 text-secondary-foreground px-4 py-1 rounded-full text-sm font-bold tracking-wider uppercase">
                                Análise Comportamental
                            </span>
                            <h2 className="text-3xl font-heading text-primary">
                                Como você costuma acalmar ou distrair o {data.babyName} quando precisa de tempo?
                            </h2>
                        </div>
                        <div className="space-y-3">
                            {distractionOptions.map((opt) => (
                                <button
                                    key={opt.id}
                                    onClick={() => updateData({ distractionMethod: opt.label })}
                                    className={`w-full p-5 rounded-2xl border-2 transition-all text-left flex items-center space-x-4 ${data.distractionMethod === opt.label
                                        ? "border-primary bg-primary/10"
                                        : "border-muted hover:border-primary/50 bg-card"
                                        }`}
                                >
                                    <div className={`h-5 w-5 rounded-full border-2 flex items-center justify-center ${data.distractionMethod === opt.label ? "border-primary" : "border-muted"}`}>
                                        {data.distractionMethod === opt.label && <div className="h-2.5 w-2.5 rounded-full bg-primary" />}
                                    </div>
                                    <span className="text-lg font-medium">{opt.label}</span>
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}

                {step === 2 && (
                    <motion.div
                        key="q2"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-6"
                    >
                        <div className="text-center space-y-4">
                            <span className="bg-primary/20 text-primary px-4 py-1 rounded-full text-sm font-bold tracking-wider uppercase">
                                Marco de Desenvolvimento
                            </span>
                            <h2 className="text-3xl font-heading text-primary leading-tight">
                                {symptomQuestion.text}
                            </h2>
                        </div>
                        <div className="space-y-3">
                            {symptomQuestion.options.map((opt) => (
                                <button
                                    key={opt}
                                    onClick={() => updateData({ symptomResponse: opt })}
                                    className={`w-full p-5 rounded-2xl border-2 transition-all text-left flex items-center space-x-4 ${data.symptomResponse === opt
                                        ? "border-primary bg-primary/10"
                                        : "border-muted hover:border-primary/50 bg-card"
                                        }`}
                                >
                                    <div className={`h-5 w-5 rounded-full border-2 flex items-center justify-center ${data.symptomResponse === opt ? "border-primary" : "border-muted"}`}>
                                        {data.symptomResponse === opt && <div className="h-2.5 w-2.5 rounded-full bg-primary" />}
                                    </div>
                                    <span className="text-lg font-medium">{opt}</span>
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}

                {step === 3 && (
                    <motion.div
                        key="q3"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-6"
                    >
                        <div className="text-center space-y-4">
                            <h2 className="text-3xl font-heading text-primary">
                                Quanto tempo o {data.babyName} passa em suportes que limitam o movimento (cadeirinhas, andajás ou cercados)?
                            </h2>
                        </div>
                        <div className="space-y-3">
                            {q5Options.map((opt) => (
                                <button
                                    key={opt.id}
                                    onClick={() => updateData({ limitedMovement: opt.label })}
                                    className={`w-full p-5 rounded-2xl border-2 transition-all text-left flex items-center space-x-4 ${data.limitedMovement === opt.label
                                        ? "border-primary bg-primary/10"
                                        : "border-muted hover:border-primary/50 bg-card"
                                        }`}
                                >
                                    <div className={`h-5 w-5 rounded-full border-2 flex items-center justify-center ${data.limitedMovement === opt.label ? "border-primary" : "border-muted"}`}>
                                        {data.limitedMovement === opt.label && <div className="h-2.5 w-2.5 rounded-full bg-primary" />}
                                    </div>
                                    <span className="text-lg font-medium">{opt.label}</span>
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}

                {step === 4 && (
                    <motion.div
                        key="q4"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-6"
                    >
                        <div className="text-center space-y-4">
                            <h2 className="text-3xl font-heading text-primary">
                                O {data.babyName} apresenta irritação excessiva ou chora quando você retira o acesso às telas/celular?
                            </h2>
                        </div>
                        <div className="space-y-3">
                            {q6Options.map((opt) => (
                                <button
                                    key={opt.id}
                                    onClick={() => updateData({ irritationScreen: opt.label })}
                                    className={`w-full p-5 rounded-2xl border-2 transition-all text-left flex items-center space-x-4 ${data.irritationScreen === opt.label
                                        ? "border-primary bg-primary/10"
                                        : "border-muted hover:border-primary/50 bg-card"
                                        }`}
                                >
                                    <div className={`h-5 w-5 rounded-full border-2 flex items-center justify-center ${data.irritationScreen === opt.label ? "border-primary" : "border-muted"}`}>
                                        {data.irritationScreen === opt.label && <div className="h-2.5 w-2.5 rounded-full bg-primary" />}
                                    </div>
                                    <span className="text-lg font-medium">{opt.label}</span>
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}

                {step === 5 && (
                    <motion.div
                        key="q5"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-6"
                    >
                        <div className="text-center space-y-4">
                            <h2 className="text-3xl font-heading text-primary">
                                Você já notou o {data.babyName} "vidrado" em telas, a ponto de não responder quando é chamado(a)?
                            </h2>
                        </div>
                        <div className="space-y-3">
                            {q7Options.map((opt) => (
                                <button
                                    key={opt.id}
                                    onClick={() => updateData({ focusLock: opt.label })}
                                    className={`w-full p-5 rounded-2xl border-2 transition-all text-left flex items-center space-x-4 ${data.focusLock === opt.label
                                        ? "border-primary bg-primary/10"
                                        : "border-muted hover:border-primary/50 bg-card"
                                        }`}
                                >
                                    <div className={`h-5 w-5 rounded-full border-2 flex items-center justify-center ${data.focusLock === opt.label ? "border-primary" : "border-muted"}`}>
                                        {data.focusLock === opt.label && <div className="h-2.5 w-2.5 rounded-full bg-primary" />}
                                    </div>
                                    <span className="text-lg font-medium">{opt.label}</span>
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="flex gap-4">
                <Button variant="outline" onClick={() => (step === 1 ? onBack() : setStep(step - 1))} className="flex-1 py-7 rounded-2xl border-muted">
                    <ChevronLeft className="mr-2" />
                    Voltar
                </Button>
                <Button onClick={handleNextStep} disabled={!isStepValid()} className="flex-[2] py-7 text-lg rounded-2xl clay-button">
                    {step < 5 ? "Próxima Pergunta" : "Gerar Diagnóstico"}
                    <ChevronRight className="ml-2" />
                </Button>
            </div>
        </div>
    );
}

// Stage 3: The Algorithm Theater
export function Stage3({ data, onNext }: { data: QuizData; onNext: () => void }) {
    const [messageIndex, setMessageIndex] = useState(0);
    const messages = [
        `Analisando marcos de desenvolvimento de ${data.babyName}...`,
        `Comparando com a curva neural esperada para ${data.ageRange.replace("-", " a ").replace("+", " ou mais")} meses...`,
        "Cruzando dados com o protocolo de neuro-estímulo...",
        "Gerando prescrição de atividades personalizadas...",
    ];

    useEffect(() => {
        const messageInterval = setInterval(() => {
            setMessageIndex((prev) => (prev < messages.length - 1 ? prev + 1 : prev));
        }, 1200);

        const completeTimeout = setTimeout(() => {
            onNext();
        }, 5000);

        return () => {
            clearInterval(messageInterval);
            clearTimeout(completeTimeout);
        };
    }, [onNext, messages.length]);

    return (
        <div className="flex flex-col items-center justify-center space-y-12 py-12 text-center">
            <div className="relative">
                <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full scale-150 animate-pulse" />
                <Loader2 className="h-24 w-24 text-primary animate-spin relative z-10" />
            </div>

            <div className="space-y-4 max-w-md">
                <AnimatePresence mode="wait">
                    <motion.p
                        key={messageIndex}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="text-2xl font-semibold text-foreground min-h-[4rem]"
                    >
                        {messages[messageIndex]}
                    </motion.p>
                </AnimatePresence>
                <div className="w-full bg-muted h-1.5 rounded-full overflow-hidden">
                    <motion.div
                        className="bg-primary h-full"
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 5, ease: "linear" }}
                    />
                </div>
                <p className="text-muted-foreground animate-pulse">Não feche esta página</p>
            </div>
        </div>
    );
}

// Stage 4: Result Page
export function Stage4({ data }: { data: QuizData }) {
    const isBebesPequenos = data.ageRange === "0-6" || data.ageRange === "7-12";

    const diagnosico = isBebesPequenos ? {
        titulo: "Alerta de Poda Neural Precoce",
        intro: `O cérebro do ${data.babyName} está na fase de maior plasticidade da vida dele.`,
        aviso: `Como você mencionou que usa ${data.distractionMethod}, você está correndo um risco grave de causar poda neural precoce.`,
        consequencia: "O foco dele está sendo treinado para ser passivo. O excesso de estímulo artificial queima as sinapses que deveriam estar sendo usadas para o controle motor.",
        prescricao: "Para evitar atrasos motores e visuais, você precisa substituir o entretenimento barato por estímulo neuro-ativo de 15 minutos. Este é o protocolo exato para a idade dele.",
        links: { label: "Plano Bebê Brilhante (0-12m)", href: "/v2#pricing" }
    } : {
        titulo: "Bloqueio de Destravamento Verbal",
        intro: `O ${data.babyName} já passou da fase de fundação motora. A Janela de Ouro agora é a Linguagem e a Lógica.`,
        aviso: data.symptomResponse === "Sim"
            ? `Embora ele já apresente marcos iniciais, o uso de ${data.distractionMethod} pode estagnar esse progresso.`
            : `Se ele ainda ${data.symptomResponse.toLowerCase()}, o uso contínuo de telas vai agravar atrasos na fala e aumentar as birras por frustração de comunicação.`,
        consequencia: "Nesta fase, o cérebro precisa de interação bidirecional. O conteúdo passivo atrofia a área de Broca (fala) e Wernicke (compreensão).",
        prescricao: "Brinquedos não vão resolver isso. Você precisa do protocolo de Destravamento Verbal e Lógica Imediata.",
        links: { label: "Plano Salto da Fala e Lógica (1-3 anos)", href: "/v2#pricing" }
    };

    const observations = [];
    if (data.limitedMovement?.includes("Mais de 2 horas")) {
        observations.push("Restrição Motora Severa: O uso excessivo de suportes está atrofiando a musculatura estabilizadora.");
    }
    if (data.irritationScreen?.includes("Sim")) {
        observations.push("Dependência de Dopamina: A irritação ao remover telas indica um início de desregulação do sistema de recompensa.");
    }
    if (data.focusLock?.includes("Sim")) {
        observations.push("Estado de Hipnose Digital: O 'vidrado' é um sinal de que o cérebro está desligando o córtex pré-frontal.");
    }

    return (
        <div className="space-y-10 py-6 max-w-2xl mx-auto">
            <div className="bg-destructive/10 border-2 border-destructive/30 p-6 rounded-3xl flex items-start space-x-4 animate-in fade-in slide-in-from-top-4 duration-700">
                <AlertCircle className="h-8 w-8 text-destructive shrink-0 mt-1" />
                <div className="space-y-1">
                    <h3 className="text-xl font-bold font-heading text-destructive">{diagnosico.titulo}</h3>
                    <p className="text-foreground leading-relaxed">Resultado Prioritário para <strong>{data.babyName}</strong></p>
                </div>
            </div>

            <div className="space-y-8">
                <div className="space-y-4">
                    <h2 className="text-3xl font-heading text-primary leading-tight">O Diagnóstico</h2>
                    <p className="text-xl leading-relaxed text-foreground/90">
                        {diagnosico.intro} <span className="font-bold underline decoration-primary/50 underline-offset-4">{diagnosico.aviso}</span>
                    </p>

                    {observations.length > 0 && (
                        <div className="space-y-3">
                            {observations.map((obs, i) => (
                                <div key={i} className="flex items-center space-x-3 text-destructive font-semibold bg-destructive/5 p-3 rounded-xl border border-destructive/10">
                                    <div className="h-2 w-2 rounded-full bg-destructive" />
                                    <span>{obs}</span>
                                </div>
                            ))}
                        </div>
                    )}

                    <div className="p-6 bg-card rounded-2xl border-2 border-muted shadow-sm">
                        <p className="italic text-lg text-muted-foreground leading-relaxed">
                            "{diagnosico.consequencia}"
                        </p>
                    </div>
                </div>

                <div className="space-y-4 pt-4">
                    <div className="flex items-center space-x-2 text-secondary-foreground uppercase tracking-widest text-sm font-bold">
                        <div className="h-px bg-secondary flex-1" />
                        <span>A Prescrição</span>
                        <div className="h-px bg-secondary flex-1" />
                    </div>
                    <p className="text-2xl font-bold font-heading text-center leading-tight">
                        {diagnosico.prescricao}
                    </p>
                </div>

                <div className="bg-primary/5 p-8 rounded-[2rem] border-2 border-primary/20 space-y-6 text-center shadow-xl shadow-primary/5">
                    <div className="space-y-2">
                        <h4 className="text-2xl font-bold font-heading text-primary">Próximo Passo Imediato:</h4>
                        <p className="text-muted-foreground">Recupere o tempo perdido com o protocolo validado.</p>
                    </div>

                    <div className="flex flex-col space-y-3">
                        <Link href={diagnosico.links.href} className="w-full">
                            <Button size="lg" className="w-full py-10 text-xl font-bold rounded-2xl clay-button shadow-primary/20 shadow-lg group">
                                Acessar {diagnosico.links.label}
                                <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </Link>
                        <p className="text-sm font-semibold text-muted-foreground uppercase flex items-center justify-center space-x-2">
                            <span className="h-2 w-2 rounded-full bg-primary" />
                            <span>Acesso imediato • Apenas R$ 27,00</span>
                        </p>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-6">
                <div className="flex flex-col items-center space-y-2 text-center p-3">
                    <div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center">
                        <Baby className="h-6 w-6 text-primary" />
                    </div>
                    <p className="text-xs font-bold uppercase text-muted-foreground tracking-tighter">Neuro-Motricidade</p>
                </div>
                <div className="flex flex-col items-center space-y-2 text-center p-3">
                    <div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center">
                        <Speech className="h-6 w-6 text-primary" />
                    </div>
                    <p className="text-xs font-bold uppercase text-muted-foreground tracking-tighter">Conexão Verbal</p>
                </div>
                <div className="flex flex-col items-center space-y-2 text-center p-3">
                    <div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center">
                        <BrainCircuit className="h-6 w-6 text-primary" />
                    </div>
                    <p className="text-xs font-bold uppercase text-muted-foreground tracking-tighter">Foco Inteligente</p>
                </div>
            </div>
        </div>
    );
}
