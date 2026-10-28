"use client";
import { motion } from "framer-motion";
import { weddingDetails } from "@/data/weddingData";
import { Sun, Heart, CalendarPlus } from "lucide-react";

export default function Events() {
  const downloadIcs = (event) => {
    const icsData = `BEGIN:VCALENDAR\nVERSION:2.0\nBEGIN:VEVENT\nSUMMARY:${event.title} - Sagar & Priyanka\nDESCRIPTION:${event.description}\nLOCATION:${weddingDetails.venue.name}, ${weddingDetails.venue.address}\nDTSTART:20261125T060000Z\nDTEND:20261125T120000Z\nEND:VEVENT\nEND:VCALENDAR`;
    const blob = new Blob([icsData], { type: "text/calendar;charset=utf-8" });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", `${event.id}-wedding.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="events" className="py-20 px-6 bg-rani-900/30">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-cream-200 font-script text-3xl mb-2">Celebration Schedule 🎊</p>
        <h2 className="text-3xl md:text-5xl font-serif text-cream-gradient font-bold mb-12">
          Wedding Events ✨
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {weddingDetails.events.map((evt, i) => (
            <motion.div
              key={evt.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="bg-glass-rani rounded-3xl p-8 border border-gold-500/30 text-left flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-gold-500/10 rounded-2xl border border-gold-500/30 text-gold-400">
                    {evt.icon === "Sun" ? <Sun className="w-6 h-6" /> : <Heart className="w-6 h-6" />}
                  </div>
                  <span className="text-xs uppercase tracking-widest text-gold-400 bg-gold-500/10 px-3 py-1 rounded-full border border-gold-500/20">
                    {evt.date.split(",")[0]}
                  </span>
                </div>

                <h3 className="text-2xl font-serif font-bold text-cream-100 mb-2">{evt.title}</h3>
                <p className="text-sm font-semibold text-gold-400 mb-3">{evt.date} • {evt.time}</p>
                <p className="text-xs text-cream-200/80 leading-relaxed mb-6">{evt.description}</p>
              </div>

              <button
                onClick={() => downloadIcs(evt)}
                className="w-full py-2.5 rounded-xl border border-gold-500/40 text-cream-100 text-xs font-semibold flex items-center justify-center gap-2 hover:bg-gold-500 hover:text-rani-950 transition"
              >
                <CalendarPlus className="w-4 h-4" /> Add to Calendar 📅
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
