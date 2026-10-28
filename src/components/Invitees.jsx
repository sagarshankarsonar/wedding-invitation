"use client";
import { motion } from "framer-motion";
import { weddingDetails } from "@/data/weddingData";
import { Users } from "lucide-react";

export default function Invitees() {
  return (
    <section className="py-16 px-6 max-w-4xl mx-auto text-center text-rani-950 bg-cream-50">
      <div className="flex justify-center mb-3">
        <Users className="w-8 h-8 text-gold-600" />
      </div>
      <p className="text-gold-600 font-script text-3xl mb-1 font-bold">सस्नेह निमंत्रक / स्वागतुक 💐</p>
      <h2 className="text-2xl md:text-4xl font-serif text-rani-950 font-extrabold mb-10">
         स्वागतकर्ता परिवार व यजमान 💐🤗
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {weddingDetails.invitees[0].members.map((person, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="p-6 bg-white rounded-2xl border border-gold-500/40 shadow-md text-center"
          >
            <p className="text-base md:text-lg font-serif text-rani-950 font-bold">
              {person}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
