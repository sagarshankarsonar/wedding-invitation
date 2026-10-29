"use client";
import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";

export default function Hero({ onOpenRsvp }) {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center p-6 overflow-hidden bg-gradient-to-b from-cream-100 via-cream-200 to-amber-50 text-rani-950">
      {/* १. श्री गणेशाय नमः (Top Header) */}
      <motion.p 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-gold-700 font-serif text-2xl md:text-3xl font-extrabold mb-4 tracking-wide"
      >
        <p className="text-gold-600 font-script text-3xl md:text-4xl mb-2">🙏 श्री गणेशाय नमः 🙏</p>
      </motion.p>

      {/* २. श्री गणेश प्रतिमा (Middle Image) */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="mb-4"
      >
        <div className="w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-gold-500 shadow-xl mx-auto bg-white flex items-center justify-center">
          <img 
            src="/images/ganesh.jpeg" 
            alt="Shree Ganesh" 
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
          <div className="hidden absolute inset-0 items-center justify-center text-rani-900 font-serif text-3xl font-bold">
            ॐ
          </div>
        </div>
      </motion.div>

      {/* ३. गणेश श्लोक (Quote Below Image) */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mb-6 max-w-md mx-auto"
      >
        <p className="text-gold-800 font-serif text-sm md:text-base font-bold leading-relaxed px-4 py-2 border-y border-gold-400/50 bg-gold-50/40 rounded-lg shadow-sm">
          || वक्रतुंड महाकाय सूर्यकोटि समप्रभ || <br />
          निर्विघ्नं कुरुमेदेव सर्वकार्येषुसर्वदा ||
        </p>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="z-10 max-w-3xl">
        <p className="uppercase tracking-[0.3em] text-xs md:text-sm text-rani-800/80 mb-6 font-semibold">
          आपणास सस्नेह निमंत्रण 🎉
        </p>

        <h1 className="text-4xl md:text-7xl font-serif text-rani-gradient font-bold mb-4 leading-tight">
          सागर <span className="font-script text-gold-600 text-5xl md:text-8xl px-2">&</span>  प्रियंका
        </h1>

        <div className="w-32 h-[2px] bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto my-6" />

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-sm md:text-base text-rani-900 mb-8 font-medium">
          <div className="flex items-center gap-2 bg-glass-light px-4 py-2 rounded-full border border-gold-500/40 shadow-sm">
            <Calendar className="w-4 h-4 text-rani-600" />
            <span>२५ नोव्हेंबर २०२६ 🎺🎷</span>
          </div>
          <div className="flex items-center gap-2 bg-glass-light px-4 py-2 rounded-full border border-gold-500/40 shadow-sm">
            <MapPin className="w-4 h-4 text-rani-600" />
            <span>जयस्वाल लॉन्स, मुक्ताईनगर</span>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={onOpenRsvp}
            className="px-8 py-3 bg-gradient-to-r from-rani-600 to-rani-700 text-rani-800/80 font-bold rounded-full shadow-lg hover:brightness-110 transition duration-300 transform hover:scale-105"
          >
            उपस्थिती कळवा (RSVP) 💌
          </button>
          <a
            href="#events"
            className="px-8 py-3 bg-glass-light text-rani-900 font-semibold rounded-full border border-gold-500/50 hover:bg-cream-100 transition duration-300 shadow-sm"
          >
            कार्यक्रम पत्रिका 📃
          </a>
        </div>
      </motion.div>
    </section>
  );
}
