"use client";
import { motion } from "framer-motion";
import { weddingDetails } from "@/data/weddingData";
import { Heart } from "lucide-react";

export default function Couple() {
  const { groom, bride } = weddingDetails;

  return (
    <section className="py-20 px-6 max-w-5xl mx-auto text-center">
      <p className="text-cream-200 font-script text-3xl mb-2">Two Souls, One Heart ❤️</p>
      <h2 className="text-3xl md:text-5xl font-serif text-cream-gradient font-bold mb-12">
        The Groom & Bride 💐
      </h2>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Groom - Cream Sherwani Theme */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-glass-rani p-6 rounded-3xl border-2 border-cream-200/40 text-center flex flex-col items-center relative overflow-hidden"
        >
          <div className="absolute top-3 right-3 text-xs bg-cream-200/20 text-cream-100 px-3 py-1 rounded-full border border-cream-200/40">
            Cream Sherwani 🧥
          </div>

          <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-cream-200 shadow-2xl mb-6 relative bg-rani-950 flex items-center justify-center">
            <img src={groom.image} alt={groom.name} className="w-full h-full object-cover" onError={(e) => { e.target.style.display = 'none'; }} />
            <span className="absolute text-cream-200 font-serif font-bold text-5xl">S</span>
          </div>
          <h3 className="text-2xl font-serif text-cream-100 font-bold mb-1">{groom.name}</h3>
          <p className="text-sm text-gold-400 font-medium mb-2">{groom.title}</p>
          <p className="text-xs text-cream-300/70">{groom.parents}</p>
        </motion.div>

        {/* Bride - Royal Rani Lehenga Theme */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-glass-rani p-6 rounded-3xl border-2 border-rani-500/60 text-center flex flex-col items-center relative overflow-hidden"
        >
          <div className="absolute top-3 right-3 text-xs bg-rani-600/30 text-cream-100 px-3 py-1 rounded-full border border-rani-500/40">
            Rani Lehenga 🎀
          </div>

          <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-rani-500 shadow-2xl mb-6 relative bg-rani-950 flex items-center justify-center">
            <img src={bride.image} alt={bride.name} className="w-full h-full object-cover" onError={(e) => { e.target.style.display = 'none'; }} />
            <span className="absolute text-rani-400 font-serif font-bold text-5xl">P</span>
          </div>
          <h3 className="text-2xl font-serif text-cream-100 font-bold mb-1">{bride.name}</h3>
          <p className="text-sm text-gold-400 font-medium mb-2">{bride.title}</p>
          <p className="text-xs text-cream-300/70">{bride.parents}</p>
        </motion.div>
      </div>

      <div className="mt-12 flex items-center justify-center gap-2 text-cream-200">
        <Heart className="w-5 h-5 fill-rani-600 animate-pulse" />
        <span className="font-script text-2xl">Together Forever 🎉</span>
        <Heart className="w-5 h-5 fill-rani-600 animate-pulse" />
      </div>
    </section>
  );
}
