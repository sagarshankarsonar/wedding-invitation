"use client";
import { motion } from "framer-motion";
import { weddingDetails } from "@/data/weddingData";
import { Users } from "lucide-react";

export default function Invitees() {
  return (
    <section className="py-16 px-6 max-w-4xl mx-auto text-center">
      <div className="flex justify-center mb-3">
        <Users className="w-8 h-8 text-gold-400" />
      </div>
      <p className="text-cream-200 font-script text-3xl mb-1"> सस्नेह शुभेच्छुक 💐</p>
      <h2 className="text-2xl md:text-4xl font-serif text-cream-gradient font-bold mb-10">
         स्वागतकर्ता परिवार व यजमान 🤗 
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {weddingDetails.invitees[0].members.map((person, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="p-6 bg-glass-rani rounded-2xl border border-gold-500/30 shadow-lg text-center"
          >
            <p className="text-base md:text-lg font-serif text-cream-100 font-medium">
              {person}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
