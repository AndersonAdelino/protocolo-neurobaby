"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Stage1, Stage2, Stage3, Stage4, type QuizData } from "./quiz-stages";

export default function QuizFlow() {
    const [stage, setStage] = useState(1);
    const [data, setData] = useState<QuizData>({
        babyName: "",
        ageRange: "0-6",
        distractionMethod: "",
        symptomResponse: "",
        limitedMovement: "",
        irritationScreen: "",
        focusLock: "",
    });

    const nextStage = () => setStage((prev: number) => prev + 1);
    const prevStage = () => setStage((prev: number) => Math.max(1, prev - 1));

    const updateData = (newData: Partial<QuizData>) => {
        setData((prev: QuizData) => ({ ...prev, ...newData }));
    };

    return (
        <div className="min-h-[600px] w-full max-w-2xl mx-auto px-4 py-8 flex flex-col justify-center">
            {/* Progress Bar */}
            {stage < 4 && (
                <div className="w-full h-2 bg-muted rounded-full mb-8 overflow-hidden">
                    <motion.div
                        className="h-full bg-primary"
                        initial={{ width: "0%" }}
                        animate={{ width: `${(stage / 3) * 100}%` }}
                        transition={{ duration: 0.5 }}
                    />
                </div>
            )}

            <AnimatePresence mode="wait">
                {stage === 1 && (
                    <motion.div
                        key="stage1"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                    >
                        <Stage1 data={data} updateData={updateData} onNext={nextStage} />
                    </motion.div>
                )}

                {stage === 2 && (
                    <motion.div
                        key="stage2"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                    >
                        <Stage2 data={data} updateData={updateData} onNext={nextStage} onBack={prevStage} />
                    </motion.div>
                )}

                {stage === 3 && (
                    <motion.div
                        key="stage3"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <Stage3 data={data} onNext={nextStage} />
                    </motion.div>
                )}

                {stage === 4 && (
                    <motion.div
                        key="stage4"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                    >
                        <Stage4 data={data} />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
