"use client";
import { motion } from "framer-motion";
import { weddingDetails } from "@/data/weddingData";
import { MapPin, Navigation } from "lucide-react";

export default function Location() {
  const { venue } = weddingDetails;

  return (
    <section className="py-20 px-6 bg-rani-900/30">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-cream-200 font-script text-3xl mb-2"> स्थळ व पत्ता 📍</p>
        <h2 className="text-3xl md:text-5xl font-serif text-cream-gradient font-bold mb-4">
          आमच्या आनंदसोहळ्याचे ठिकाण 🏤
        </h2>
        <p className="text-sm text-cream-200/90 max-w-md mx-auto mb-8 flex items-center justify-center gap-2">
          <MapPin className="w-4 h-4 text-gold-400 shrink-0" />
          {venue.name}, {venue.address}
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="rounded-3xl overflow-hidden border-2 border-gold-500/30 shadow-2xl bg-rani-950 mb-6"
        >
          <iframe
            title="Wedding Venue Location"
            src={venue.embedUrl}
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            className="grayscale contrast-125 opacity-90 hover:grayscale-0 transition duration-500"
          />
        </motion.div>

        <a
          href={venue.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-cream-200 via-gold-400 to-cream-300 text-rani-950 font-bold rounded-full shadow-lg hover:brightness-110 transition"
        >
          <Navigation className="w-4 h-4" /> Google Maps वर मार्ग पहा 🗺️
        </a>
      </div>
    </section>
  );
}
