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
    <section id="events" className="py-20 px-6 bg-[#E30B5C] text-cream-50 shadow-inner">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-gold-300 font-script text-3xl mb-2 font-bold">उत्सव कार्यक्रम 🎊</p>
        <h2 className="text-3xl md:text-5xl font-serif text-cream-50 font-extrabold mb-12">
          लग्न सोहळा व कार्यक्रम ✨
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {weddingDetails.events.map((evt, i) => (
            <motion.div
              key={evt.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="bg-cream-100 rounded-3xl p-8 border-2 border-gold-500 text-left flex flex-col justify-between shadow-2xl text-rani-950"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-rani-50 rounded-2xl border border-gold-500/60 text-rani-700 shadow-sm">
                    {evt.icon === "Sun" ? <Sun className="w-6 h-6" /> : <Heart className="w-6 h-6" />}
                  </div>
                  <span className="text-xs uppercase tracking-wider text-rani-900 font-bold bg-gold-200 px-3 py-1 rounded-full border border-gold-400">
                    {evt.date.split(",")[0]}
                  </span>
                </div>

                <h3 className="text-2xl font-serif font-bold text-rani-950 mb-2">{evt.title}</h3>
                <p className="text-sm font-bold text-gold-700 mb-3">{evt.date} • {evt.time}</p>
                <p className="text-xs text-rani-900 leading-relaxed mb-6 font-medium">{evt.description}</p>
              </div>

              <button
                onClick={() => downloadIcs(evt)}
                className="w-full py-3.5 rounded-xl bg-rani-700 text-rani-800/80 text-xs font-bold flex items-center justify-center gap-2 hover:bg-rani-800 transition shadow-md"
              >
                <CalendarPlus className="w-4 h-4" /> कॅलेंडरमध्ये सेव्ह करा 📅
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
