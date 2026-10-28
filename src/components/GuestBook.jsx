"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { Send, Sparkles, Trash2, ShieldCheck, Key } from "lucide-react";

const EMOJI_OPTIONS = ["❤️", "💐", "🎉", "🎊", "✨", "💌", "🎁", "🙌", "🎀", "🙂"];

export default function GuestBook() {
  const [messages, setMessages] = useState([]);
  const [name, setName] = useState("");
  const [wishes, setWishes] = useState("");
  const [selectedEmoji, setSelectedEmoji] = useState("💐");
  const [isAdmin, setIsAdmin] = useState(false);
  const [showAdminLogin, setShowAdminLogin] = useState(false);
  const [passcode, setPasscode] = useState("");

  const ADMIN_PASSCODE = "sagar2026";

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get("admin") === "true") {
      setIsAdmin(true);
    }

    const saved = localStorage.getItem("wedding_wishes_v2");
    if (saved) {
      setMessages(JSON.parse(saved));
    } else {
      setMessages([
        {
          id: 1,
          name: "Sunil & Meerabai Sonar",
          text: "💐 Heartiest congratulations Sagar & Priyanka! May your journey be filled with joy and blessings 🎉",
          emoji: "💐",
          date: "Nov 24, 2026",
        },
        {
          id: 2,
          name: "Mohan & Seemabai Sonar",
          text: "❤️ Wishing you a happy and prosperous married life together ✨",
          emoji: "❤️",
          date: "Nov 24, 2026",
        },
      ]);
    }
  }, []);

  const saveMessages = (newList) => {
    setMessages(newList);
    localStorage.setItem("wedding_wishes_v2", JSON.stringify(newList));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !wishes.trim()) return;

    const newMessage = {
      id: Date.now(),
      name: name.trim(),
      text: `${selectedEmoji} ${wishes.trim()}`,
      emoji: selectedEmoji,
      date: new Date().toLocaleDateString("en-IN", { month: "short", day: "numeric" }),
    };

    saveMessages([newMessage, ...messages]);
    setName("");
    setWishes("");

    confetti({ particleCount: 90, spread: 70, origin: { y: 0.75 } });
  };

  const handleDelete = (id) => {
    if (confirm("Are you sure you want to delete this comment?")) {
      saveMessages(messages.filter((msg) => msg.id !== id));
    }
  };

  const handleAdminAuth = (e) => {
    e.preventDefault();
    if (passcode === ADMIN_PASSCODE) {
      setIsAdmin(true);
      setShowAdminLogin(false);
      setPasscode("");
    } else {
      alert("Invalid Admin Passcode!");
    }
  };

  return (
    <section className="py-20 px-6 max-w-5xl mx-auto">
      <div className="text-center mb-12">
        <p className="text-cream-200 font-script text-3xl mb-2">Festive Blessings 🎉💐❤️</p>
        <h2 className="text-3xl md:text-5xl font-serif text-cream-gradient font-bold">
          Congratulations & Wishes Wall 💌
        </h2>
        
        <div className="mt-4 flex items-center justify-center gap-2">
          {isAdmin ? (
            <span className="inline-flex items-center gap-1.5 text-xs bg-gold-500/20 text-cream-100 border border-gold-500/40 px-3 py-1 rounded-full">
              <ShieldCheck className="w-3.5 h-3.5 text-gold-400" /> Creator Mode (Delete privileges active)
            </span>
          ) : (
            <button
              onClick={() => setShowAdminLogin(!showAdminLogin)}
              className="text-xs text-cream-300/60 hover:text-cream-200 underline flex items-center gap-1"
            >
              <Key className="w-3 h-3" /> Creator Login
            </button>
          )}
        </div>

        {showAdminLogin && !isAdmin && (
          <form onSubmit={handleAdminAuth} className="mt-4 max-w-xs mx-auto flex gap-2">
            <input
              type="password"
              placeholder="Passcode (sagar2026)"
              value={passcode}
              onChange={(e) => setPasscode(e.target.value)}
              className="bg-rani-950 border border-gold-500/40 rounded-lg px-3 py-1.5 text-xs text-cream-50 focus:outline-none"
            />
            <button type="submit" className="px-3 py-1.5 bg-gold-500 text-rani-950 font-bold text-xs rounded-lg">
              Unlock
            </button>
          </form>
        )}
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        <form onSubmit={handleSubmit} className="bg-glass-rani p-6 md:p-8 rounded-3xl border border-gold-500/30 space-y-4">
          <h3 className="text-xl font-serif text-cream-100 font-semibold mb-2 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-gold-400" /> Send Warm Blessings ✨
          </h3>

          <div>
            <label className="block text-xs uppercase tracking-wider text-cream-300/80 mb-1">Your Name</label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your full name"
              className="w-full bg-rani-950/80 border border-gold-500/30 rounded-xl p-3 text-sm text-cream-50 focus:outline-none focus:border-cream-200"
            />
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider text-cream-300/80 mb-2">Pick an Emoji Tag</label>
            <div className="flex flex-wrap gap-2">
              {EMOJI_OPTIONS.map((emoji) => (
                <button
                  key={emoji}
                  type="button"
                  onClick={() => setSelectedEmoji(emoji)}
                  className={`text-lg p-2 rounded-xl transition ${
                    selectedEmoji === emoji ? "bg-gold-500/30 border-2 border-gold-400 scale-110" : "bg-rani-900/60 border border-transparent hover:bg-rani-800"
                  }`}
                >
                  {emoji}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider text-cream-300/80 mb-1">Your Message 🎁</label>
            <textarea
              required
              rows="3"
              value={wishes}
              onChange={(e) => setWishes(e.target.value)}
              placeholder="Write your wishes for Sagar & Priyanka..."
              className="w-full bg-rani-950/80 border border-gold-500/30 rounded-xl p-3 text-sm text-cream-50 focus:outline-none focus:border-cream-200"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3.5 bg-gradient-to-r from-cream-200 via-gold-400 to-cream-300 text-rani-950 font-bold rounded-xl flex items-center justify-center gap-2 shadow-lg hover:brightness-110 transition"
          >
            <Send className="w-4 h-4" /> Post Wish 🎉
          </button>
        </form>

        <div className="space-y-4 max-h-[460px] overflow-y-auto pr-2">
          <AnimatePresence>
            {messages.map((msg) => (
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, x: -50 }}
                className="bg-glass-rani p-4 rounded-2xl border border-gold-500/20 text-left relative group"
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-serif text-sm font-semibold text-cream-100 flex items-center gap-1.5">
                    {msg.name}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] text-cream-300/60">{msg.date}</span>
                    {isAdmin && (
                      <button
                        onClick={() => handleDelete(msg.id)}
                        className="text-rose-400 hover:text-rose-200 p-1 bg-rose-950/50 rounded-md transition"
                        title="Delete this comment"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                </div>
                <p className="text-xs text-cream-200/90 leading-relaxed font-sans">{msg.text}</p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
          }
