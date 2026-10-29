"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { Send, Sparkles, Trash2, Edit3, ShieldCheck, Key, X, Check } from "lucide-react";
import { supabase } from "@/utils/supabase";

const EMOJI_OPTIONS = ["❤️", "💐", "🎉", "🎊", "✨", "💌", "🎁", "🙌", "🎀", "🙂"];

export default function GuestBook() {
  const [messages, setMessages] = useState([]);
  const [name, setName] = useState("");
  const [wishes, setWishes] = useState("");
  const [selectedEmoji, setSelectedEmoji] = useState("💐");
  const [isAdmin, setIsAdmin] = useState(false);
  const [showAdminLogin, setShowAdminLogin] = useState(false);
  const [passcode, setPasscode] = useState("");

  // Edit states
  const [editingId, setEditingId] = useState(null);
  const [editName, setEditName] = useState("");
  const [editWishes, setEditWishes] = useState("");

  const ADMIN_PASSCODE = "piyu143";

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get("admin") === "true") {
      setIsAdmin(true);
    }
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    const { data, error } = await supabase
      .from("wedding_wishes")
      .select("*")
      .order("id", { ascending: false });

    if (error) {
      console.error("Error fetching messages:", error);
    } else {
      setMessages(data || []);
    }
  };

  const handleAdminAuth = (e) => {
    e.preventDefault();
    if (passcode === ADMIN_PASSCODE) {
      setIsAdmin(true);
      setShowAdminLogin(false);
      setPasscode("");
    } else {
      alert("चुकीचा पासकोड! कृपया पुन्हा प्रयत्न करा. (नोंद: हा अधिकार फक्त ऍडमीन यूजर साठी आहे)");

    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim() || !wishes.trim()) return;

    const now = new Date();
    const formattedDate = now.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }) + ", " + now.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    }).toLowerCase();

    const newMessage = {
      name: name.trim(),
      text: `${selectedEmoji} ${wishes.trim()}`,
      emoji: selectedEmoji,
      date: formattedDate,
    };

    const { error } = await supabase.from("wedding_wishes").insert([newMessage]);

    if (error) {
      console.error("Error posting wish:", error);
      alert("संदेश पाठवण्यात अडचण आली. कृपया पुन्हा प्रयत्न करा.");
    } else {
      setName("");
      setWishes("");
      confetti({ particleCount: 90, spread: 70, origin: { y: 0.75 } });
      fetchMessages();
    }
  };

  // Start editing a message
  const startEditing = (msg) => {
    setEditingId(msg.id);
    setEditName(msg.name);
    // Remove emoji prefix if present for clean editing
    const cleanText = msg.text.replace(/^[❤️💐🎉🎊✨💌🎁🙌🎀🙂]\s*/, "");
    setEditWishes(cleanText);
  };

  // Save updated message
  const handleUpdate = async (id) => {
    if (!editName.trim() || !editWishes.trim()) return;

    const updatedText = `✨ ${editWishes.trim()}`;

    const { error } = await supabase
      .from("wedding_wishes")
      .update({ name: editName.trim(), text: updatedText })
      .eq("id", id);

    if (error) {
      console.error("Error updating message:", error);
      alert("अपडेट करताना अडचण आली.");
    } else {
      setEditingId(null);
      fetchMessages();
    }
  };

  const handleDelete = async (id) => {
    if (confirm("तुम्हाला हा संदेश खरोखर डिलीट करायचा आहे का?")) {
      const { error } = await supabase
        .from("wedding_wishes")
        .delete()
        .eq("id", id);

      if (error) {
        console.error("Error deleting message:", error);
        alert("डिलिट करताना अडचण आली: ");
      } else {
        setMessages((prevMessages) => prevMessages.filter((msg) => msg.id !== id));
      }
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
              <ShieldCheck className="w-3.5 h-3.5 text-rani-600" /> क्रिएटर मोड सुरू आहे
            </span>
          ) : (
            <button
              onClick={() => setShowAdminLogin(!showAdminLogin)}
              className="text-xs text-rani-800/60 hover:text-rani-900 underline flex items-center gap-1 mx-auto"
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
              className="bg-cream-100 border border-gold-500/50 rounded-lg px-3 py-1.5 text-xs text-rani-900 focus:outline-none w-full"
            />
            <button type="submit" className="px-4 py-1.5 bg-rani-800 text-white font-bold text-xs rounded-lg whitespace-nowrap hover:bg-rani-800">
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
            className="w-full py-3.5 bg-gradient-to-r from-rani-600 to-rani-700 bg-rani-800 text-white font-bold rounded-xl flex items-center justify-center gap-2 shadow-lg hover:bg-rani-800 hover:brightness-110 transition"
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
                {editingId === msg.id ? (
                  /* Edit Mode */
                  <div className="space-y-3">
                    <input
                      type="text"
                      value={editName}
                      onChange={(e) => setEditName(e.target.value)}
                      className="w-full bg-white border border-gold-500 rounded-lg p-2 text-xs text-rani-900 focus:outline-none"
                      placeholder="नाव"
                    />
                    <textarea
                      rows="2"
                      value={editWishes}
                      onChange={(e) => setEditWishes(e.target.value)}
                      className="w-full bg-white border border-gold-500 rounded-lg p-2 text-xs text-rani-900 focus:outline-none"
                      placeholder="संदेश"
                    />
                    <div className="flex justify-end gap-2">
                      <button
                        onClick={() => setEditingId(null)}
                        className="px-3 py-1 bg-gray-200 text-gray-700 text-xs rounded-lg flex items-center gap-1"
                      >
                        <X className="w-3 h-3" /> रద్దు करा
                      </button>
                      <button
                        onClick={() => handleUpdate(msg.id)}
                        className="px-3 py-1 bg-rani-700 text-white text-xs rounded-lg flex items-center gap-1"
                      >
                        <Check className="w-3 h-3" /> सेव्ह करा
                      </button>
                    </div>
                  </div>
                ) : (
                  /* Normal View Mode */
                  <>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="font-serif text-sm font-bold text-rani-900 flex items-center gap-1.5">
                        {msg.name}
                      </span>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] text-rani-800/60 font-medium">{msg.date}</span>
                        
                        {/* Edit Button (Visible to everyone for their comments or Admin) */}
                        <button
                          onClick={() => startEditing(msg)}
                          className="text-blue-600 hover:text-blue-800 p-1 bg-blue-50 rounded-md transition"
                          title="मेसेज एडिट करा"
                        >
                          <Edit3 className="w-3.5 h-3.5" />
                        </button>

                        {/* Delete Button (Visible if Admin or Owner) */}
                        {(isAdmin || editingId === msg.id) && (
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
                  </>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
