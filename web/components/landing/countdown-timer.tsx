"use client";

import { useEffect, useState } from "react";

interface TimeLeft {
    hours: number;
    minutes: number;
    seconds: number;
}

export default function CountdownTimer() {
    const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

    useEffect(() => {
        const STORAGE_KEY = "neurobaby_offer_deadline";
        const TWO_HOURS = 2 * 60 * 60 * 1000;

        let deadline = localStorage.getItem(STORAGE_KEY);

        if (!deadline) {
            const newDeadline = new Date().getTime() + TWO_HOURS;
            localStorage.setItem(STORAGE_KEY, newDeadline.toString());
            deadline = newDeadline.toString();
        }

        const target = parseInt(deadline);

        const calculateTime = () => {
            const now = new Date().getTime();
            const difference = target - now;

            if (difference <= 0) {
                // When finished, we could reset or just stay at 0
                return { hours: 0, minutes: 0, seconds: 0 };
            }

            return {
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        };

        setTimeLeft(calculateTime());

        const timer = setInterval(() => {
            const updated = calculateTime();
            setTimeLeft(updated);
            if (updated.hours === 0 && updated.minutes === 0 && updated.seconds === 0) {
                clearInterval(timer);
            }
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    if (!timeLeft) return null;

    const TimeUnit = ({ value, label }: { value: number; label: string }) => (
        <div className="flex flex-col items-center bg-white rounded-xl md:rounded-2xl p-2 md:p-3 min-w-[65px] md:min-w-[80px] shadow-sm border border-red-100">
            <span className="text-xl md:text-2xl font-black text-red-600 tabular-nums">
                {value.toString().padStart(2, '0')}
            </span>
            <span className="text-[8px] md:text-[10px] font-black text-slate-400 uppercase tracking-widest mt-0.5">
                {label}
            </span>
        </div>
    );

    return (
        <div className="inline-flex flex-col items-center bg-gradient-to-br from-red-500 to-orange-600 p-4 md:p-6 rounded-[2rem] md:rounded-[2.5rem] shadow-xl shadow-red-500/20 border border-white/20">
            <div className="flex items-center gap-2 mb-4">
                <span className="text-lg md:text-xl">⏰</span>
                <span className="text-white text-[10px] md:text-xs font-black uppercase tracking-[0.15em]">
                    Esta oferta especial expira em:
                </span>
            </div>
            <div className="flex gap-2 md:gap-3">
                <TimeUnit value={timeLeft.hours} label="Horas" />
                <TimeUnit value={timeLeft.minutes} label="Min" />
                <TimeUnit value={timeLeft.seconds} label="Seg" />
            </div>
        </div>
    );
}
