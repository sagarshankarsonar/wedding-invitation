"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { weddingDetails } from "@/data/weddingData";

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date(weddingDetails.weddingDate).getTime();
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const diff = targetDate - now;
      if (diff > 0) {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / 1000 / 60) % 60),
          seconds: Math.floor((diff / 1000) % 60),
        });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const items = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <section className="py-16 bg-rani-900/40 border-y border-gold-500/20 text-center">
      <h2 className="text-cream-200 font-script text-3xl mb-2">Counting Down To Forever ⏳</h2>
      <p className="text-xs uppercase tracking-widest text-cream-300/70 mb-8">Every Moment Brings Us Closer ✨</p>
      
      <div className="flex flex-wrap justify-center gap-4 md:gap-8 max-w-4xl mx-auto px-4">
        {items.map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: index * 0.1 }}
            className="flex flex-col items-center justify-center w-20 h-24 md:w-28 md:h-32 bg-glass-rani rounded-2xl border border-gold-500/30 shadow-xl"
          >
            <span className="text-2xl md:text-4xl font-serif font-bold text-cream-gradient">
              {String(item.value).padStart(2, "0")}
            </span>
            <span className="text-[10px] md:text-xs text-cream-200 uppercase tracking-widest mt-1">
              {item.label}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
