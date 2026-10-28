"use client";
import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";

export default function Hero({ onOpenRsvp }) {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center p-6 overflow-hidden bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-rani-900 via-rani-950 to-black">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute w-[600px] h-[600px] border border-gold-500/10 rounded-full pointer-events-none flex items-center justify-center"
      >
        <div className="w-[450px] h-[450px] border border-gold-500/20 rounded-full border-dashed" />
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="z-10 max-w-3xl">
        <p className="text-gold-400 font-script text-3xl md:text-4xl mb-2">|| Shree Ganeshay Namah || 💐</p>
        <p className="uppercase tracking-[0.3em] text-xs md:text-sm text-cream-200/80 mb-6">
          We Cordially Invite You To Celebrate Our Wedding 🎉
        </p>

        <h1 className="text-4xl md:text-7xl font-serif text-cream-gradient font-bold mb-4 leading-tight">
          Sagar <span className="font-script text-gold-400 text-5xl md:text-8xl">&</span> Priyanka
        </h1>

        <div className="w-32 h-[2px] bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto my-6" />

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-sm md:text-base text-cream-100 mb-8">
          <div className="flex items-center gap-2 bg-glass-rani px-4 py-2 rounded-full border border-gold-500/30">
            <Calendar className="w-4 h-4 text-gold-400" />
            <span>25th November 2026</span>
          </div>
          <div className="flex items-center gap-2 bg-glass-rani px-4 py-2 rounded-full border border-gold-500/30">
            <MapPin className="w-4 h-4 text-gold-400" />
            <span>Jaiswal Lawns, Muktainagar</span>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={onOpenRsvp}
            className="px-8 py-3 bg-gradient-to-r from-cream-200 via-gold-400 to-cream-300 text-rani-950 font-bold rounded-full shadow-lg hover:brightness-110 transition duration-300 transform hover:scale-105"
          >
            RSVP Now 💌
          </button>
          <a
            href="#events"
            className="px-8 py-3 bg-glass-rani text-cream-100 font-semibold rounded-full border border-gold-500/40 hover:bg-rani-800 transition duration-300"
          >
            View Schedule 📅
          </a>
        </div>
      </motion.div>
    </section>
  );
}
