"use client";
import { motion } from "framer-motion";
import { weddingDetails } from "@/data/weddingData";
import { Heart } from "lucide-react";

export default function Couple() {
  const { groom, bride } = weddingDetails;

  return (
    <section className="py-20 px-6 max-w-5xl mx-auto text-center bg-cream-50 text-rani-900">
      <p className="text-gold-600 font-script text-3xl mb-2">दोन पवित्र आत्म्यांची मिलनगाथा ❤️</p>
      <h2 className="text-3xl md:text-5xl font-serif text-rani-gradient font-bold mb-12">
        वर आणि वधू परिचय 💐
      </h2>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* वर - क्रीम शेरवानी */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-glass-light p-6 rounded-3xl border-2 border-gold-500/40 text-center flex flex-col items-center relative overflow-hidden shadow-lg"
        >
          

          <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-gold-500 shadow-xl mb-6 relative bg-cream-200 flex items-center justify-center">
            <img src={groom.image} alt={groom.name} className="w-full h-full object-cover" onError={(e) => { e.target.style.display = 'none'; }} />
            <span className="absolute text-rani-900 font-serif font-bold text-5xl">S</span>
          </div>
          <h3 className="text-2xl font-serif text-rani-900 font-bold mb-1">{groom.name}</h3>
          <p className="text-sm text-gold-600 font-semibold mb-2">{groom.title}</p>
          <p className="text-xs text-rani-800/80">{groom.parents}</p>
        </motion.div>

        {/* वधू - रानी लेहंगा */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-glass-light p-6 rounded-3xl border-2 border-rani-600/50 text-center flex flex-col items-center relative overflow-hidden shadow-lg"
        >
          

          <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-rani-600 shadow-xl mb-6 relative bg-cream-200 flex items-center justify-center">
            <img src={bride.image} alt={bride.name} className="w-full h-full object-cover" onError={(e) => { e.target.style.display = 'none'; }} />
            <span className="absolute text-rani-600 font-serif font-bold text-5xl">P</span>
          </div>
          <h3 className="text-2xl font-serif text-rani-900 font-bold mb-1">{bride.name}</h3>
          <p className="text-sm text-gold-600 font-semibold mb-2">{bride.title}</p>
          <p className="text-xs text-rani-800/80">{bride.parents}</p>
        </motion.div>
      </div>

      <div className="mt-12 flex items-center justify-center gap-2 text-rani-800">
        <Heart className="w-5 h-5 fill-rani-600 animate-pulse" />
        <span className="font-script text-2xl text-gold-600">शुभाशीर्वाद सहर्ष स्वीकार्य 🎉</span>
        <Heart className="w-5 h-5 fill-rani-600 animate-pulse" />
      </div>
    </section>
  );
}
