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

  const ADMIN_PASSCODE = "piyu143";

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get("admin") === "true") {
      setIsAdmin(true);
    }

    const saved = localStorage.getItem("wedding_wishes_marathi_v1");
    if (saved) {
      setMessages(JSON.parse(saved));
    } else {
      setMessages([
        {
          id: 1,
          name: "मोहन व सीमाबाई सोनार",
          text: "💐 सागर आणि प्रियंका तुम्हा दोघांनाही वैवाहिक आयुष्याच्या मनःपूर्वक शुभेच्छा! तुमचा संसार सुख-समृद्धीने नांदो 🎉, जोडी अशीच सदैव आनंदी राहो ✨",
          emoji: "❤️",
          date: "०१ नोव्हेंबर",
        }
      ]);
    }
  }, []);

  const saveMessages = (newList) => {
    setMessages(newList);
    localStorage.setItem("wedding_wishes_marathi_v1", JSON.stringify(newList));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !wishes.trim()) return;

    const newMessage = {
      id: Date.now(),
      name: name.trim(),
      text: `${selectedEmoji} ${wishes.trim()}`,
      emoji: selectedEmoji,
      date: new Date().toLocaleDateString("mr-IN", { month: "short", day: "numeric" }),
    };

    saveMessages([newMessage, ...messages]);
    setName("");
    setWishes("");

    confetti({ particleCount: 90, spread: 70, origin: { y: 0.75 } });
  };

  const handleDelete = (id) => {
    if (confirm("तुम्हाला हा संदेश खरोखर डिलीट करायचा आहे का?")) {
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
      alert("पासकोड चुकीचा आहे, पुन्हा प्रयत्न करा!(हा अधिकार फक्त ऍडमीन साठी आहे)");
    }
  };

  return (
    <section className="py-20 px-6 max-w-5xl mx-auto bg-cream-50 text-rani-900">
      <div className="text-center mb-12">
        <p className="text-gold-600 font-script text-3xl mb-2">अभिप्राय व सदिच्छा संदेश 🎉💐❤️</p>
        <h2 className="text-3xl md:text-5xl font-serif text-rani-gradient font-bold">
          💐 शुभेच्छा (पाहुण्यांची नोंदवही) ❤️
        </h2>
        
        <div className="mt-4 flex items-center justify-center gap-2">
          {isAdmin ? (
            <span className="inline-flex items-center gap-1.5 text-xs bg-rani-600/10 text-rani-900 border border-rani-600/30 px-3 py-1 rounded-full font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-rani-600" /> क्रिएटर मोड सुरू आहे (डिलीट अधिकार उपलब्ध)
            </span>
          ) : (
            <button
              onClick={() => setShowAdminLogin(!showAdminLogin)}
              className="text-xs text-rani-800/60 hover:text-rani-900 underline flex items-center gap-1"
            >
              <Key className="w-3 h-3" /> क्रिएटर लॉगिन
            </button>
          )}
        </div>

        {showAdminLogin && !isAdmin && (
          <form onSubmit={handleAdminAuth} className="mt-4 max-w-xs mx-auto flex gap-2">
            <input
              type="password"
              placeholder="पासकोड टाका"
              value={passcode}
              onChange={(e) => setPasscode(e.target.value)}
              className="bg-cream-100 border border-gold-500/50 rounded-lg px-3 py-1.5 text-xs text-rani-900 focus:outline-none"
            />
            <button type="submit" className="px-3 py-1.5 bg-rani-600 text-cream-50 font-bold text-xs rounded-lg">
              अनलॉक
            </button>
          </form>
        )}
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        <form onSubmit={handleSubmit} className="bg-glass-light p-6 md:p-8 rounded-3xl border border-gold-500/30 space-y-4 shadow-md">
          <h3 className="text-xl font-serif text-rani-900 font-semibold mb-2 flex items-center gap-2">
            तुमची शुभेच्छुक प्रतिक्रिया लिहा ✨
          </h3>

          <div>
            <label className="block text-xs uppercase tracking-wider text-rani-800/80 mb-1 font-semibold">तुमचे नाव</label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-cream-100 border border-gold-500/40 rounded-xl p-3 text-sm text-rani-900 focus:outline-none focus:border-rani-600"
            />
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider text-rani-800/80 mb-2 font-semibold">इमोजी निवडा</label>
            <div className="flex flex-wrap gap-2">
              {EMOJI_OPTIONS.map((emoji) => (
                <button
                  key={emoji}
                  type="button"
                  onClick={() => setSelectedEmoji(emoji)}
                  className={`text-lg p-2 rounded-xl transition ${
                    selectedEmoji === emoji ? "bg-gold-500/20 border-2 border-gold-500 scale-110" : "bg-cream-200/60 border border-transparent hover:bg-cream-200"
                  }`}
                >
                  {emoji}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider text-rani-800/80 mb-1 font-semibold">संदेश 🎁</label>
            <textarea
              required
              rows="3"
              value={wishes}
              onChange={(e) => setWishes(e.target.value)}
              placeholder="सागर आणि प्रियंका यांच्यासाठी तुमचे आशीर्वाद लिहा..."
              className="w-full bg-cream-100 border border-gold-500/40 rounded-xl p-3 text-sm text-rani-900 focus:outline-none focus:border-rani-600"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3.5 bg-gradient-to-r from-rani-600 to-rani-700 text-rani-800/80 font-bold rounded-xl flex items-center justify-center gap-2 shadow-lg hover:brightness-110 transition"
          >
            <Send className="w-4 h-4" /> शुभेच्छा पाठवा 🎉
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
                className="bg-glass-light p-4 rounded-2xl border border-gold-500/20 text-left relative group shadow-sm"
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-serif text-sm font-bold text-rani-900 flex items-center gap-1.5">
                    {msg.name}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] text-rani-800/60 font-medium">{msg.date}</span>
                    {isAdmin && (
                      <button
                        onClick={() => handleDelete(msg.id)}
                        className="text-rose-600 hover:text-rose-800 p-1 bg-rose-50 rounded-md transition"
                        title="हा मेसेज डिलीट करा"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                </div>
                <p className="text-xs text-rani-900/90 leading-relaxed font-sans">{msg.text}</p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
