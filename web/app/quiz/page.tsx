"use client";

import QuizFlow from "@/components/quiz/quiz-flow";
import { FadeIn } from "@/components/ui/motion-wrapper";

export default function QuizPage() {
    return (
        <main className="min-h-screen bg-background selection:bg-primary/30 selection:text-primary flex items-center justify-center p-4">
            <div className="container mx-auto py-12">
                <FadeIn>
                    <div className="max-w-3xl mx-auto">
                        <QuizFlow />
                    </div>
                </FadeIn>
            </div>
        </main>
    );
}
