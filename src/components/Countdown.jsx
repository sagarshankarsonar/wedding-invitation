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
    { label: "दिवस", value: timeLeft.days },
    { label: "तास", value: timeLeft.hours },
    { label: "मििटे", value: timeLeft.minutes },
    { label: "सेकंद", value: timeLeft.seconds },
  ];

  return (
    <section className="py-16 bg-[#E30B5C] text-cream-50 border-y border-gold-400/40 text-center shadow-inner">
      <h2 className="text-gold-300 font-script text-3xl mb-2 font-bold">अनंतकाळाच्या दिशेने वाटचाल ⏰⏳</h2>
      <p className="text-xs uppercase tracking-widest text-cream-100/90 mb-8 font-semibold">प्रत्येक क्षण आम्हाला एकमेकांच्या अधिक जवळ घेऊन येत आहे ✨</p>
      
      <div className="flex flex-wrap justify-center gap-4 md:gap-8 max-w-4xl mx-auto px-4">
        {items.map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: index * 0.1 }}
            className="flex flex-col items-center justify-center w-20 h-24 md:w-28 md:h-32 bg-rani-950/40 rounded-2xl border-2 border-gold-400/60 shadow-xl backdrop-blur-sm"
          >
            <span className="text-2xl md:text-4xl font-serif font-extrabold text-gold-300">
              {String(item.value).padStart(2, "0")}
            </span>
            <span className="text-[10px] md:text-xs text-cream-50 uppercase tracking-widest mt-1 font-bold">
              {item.label}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
