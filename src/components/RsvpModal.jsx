"use client";
import { useState } from "react";
import { X, Check, MessageSquare } from "lucide-react";

export default function RsvpModal({ isOpen, onClose }) {
  const [name, setName] = useState("");
  const [eventChoice, setEventChoice] = useState("सर्व कार्यक्रम (हळदी व विवाह)");
  const [guestsCount, setGuestsCount] = useState("1");
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;

    // व्हॉट्सॲप नंबर (8855009016) वर मेसेज पाठवण्यासाठी मजकूर तयार करणे
    const phoneNumber = "918855009016"; // भारताचा कोड 91 सह
    const message = `✨ *नवीन RSVP (उपस्थिती नोंदणी)* ✨\n\n👤 *नाव:* ${name}\n🎯 *कार्यक्रम:* ${eventChoice}\n👥 *पाहुण्यांची संख्या:* ${guestsCount}\n\nमाझी उपस्थिती निश्चित आहे! 🙏`;

    // व्हॉट्सॲप युआरएल तयार करणे
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    // युजरला व्हॉट्सॲपवर रीडायरेक्ट करणे
    window.open(whatsappUrl, "_blank");

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setName("");
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
      <div className="bg-white border-2 border-gold-500 rounded-3xl p-6 md:p-8 max-w-md w-full relative shadow-2xl text-rani-950">
        <button onClick={onClose} className="absolute top-4 right-4 text-rani-900 hover:text-black">
          <X className="w-6 h-6" />
        </button>

        {submitted ? (
          <div className="text-center py-8">
            <div className="w-12 h-12 bg-green-100 text-green-700 rounded-full flex items-center justify-center mx-auto mb-4 border border-green-500">
              <Check className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-serif text-rani-950 font-bold mb-2">खूप खूप धन्यवाद! 🎉</h3>
            <p className="text-sm text-rani-900 font-medium">तुमची माहिती व्हॉट्सॲपद्वारे पाठवली जात आहे...</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <h3 className="text-2xl font-serif text-rani-950 font-extrabold text-center mb-1">
              उपस्थिती नोंदणी (RSVP) 💌
            </h3>
            <p className="text-xs text-center text-rani-900 font-medium mb-4">कृपया आपल्या उपस्थितीची माहिती द्या</p>

            <div>
              <label className="block text-xs uppercase tracking-wider text-rani-900 font-bold mb-1">पूर्ण नाव</label>
              <input 
                required 
                type="text" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="उदा. रमेश पाटील" 
                className="w-full bg-cream-50 border border-gold-500/60 rounded-xl p-3 text-sm text-rani-950 font-medium focus:outline-none focus:border-rani-700" 
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-rani-900 font-bold mb-1">कोणत्या कार्यक्रमास उपस्थित राहणार?</label>
              <select 
                value={eventChoice}
                onChange={(e) => setEventChoice(e.target.value)}
                className="w-full bg-cream-50 border border-gold-500/60 rounded-xl p-3 text-sm text-rani-950 font-medium focus:outline-none focus:border-rani-700"
              >
                <option value="सर्व कार्यक्रम (हळदी व विवाह)">सर्व कार्यक्रम (हळदी व विवाह)</option>
                <option value="फक्त विवाह सोहळा (२५ नोव्हेंबर)">फक्त विवाह सोहळा (२५ नोव्हेंबर)</option>
                <option value="फक्त हळदी सोहळा (२४ नोव्हेंबर)">फक्त हळदी सोहळा (२४ नोव्हेंबर)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-rani-900 font-bold mb-1">पाहुण्यांची संख्या (एकूण व्यक्ती)</label>
              <input 
                type="number" 
                min="1" 
                value={guestsCount}
                onChange={(e) => setGuestsCount(e.target.value)}
                className="w-full bg-cream-50 border border-gold-500/60 rounded-xl p-3 text-sm text-rani-950 font-medium focus:outline-none focus:border-rani-700" 
              />
            </div>

            <button type="submit" className="w-full py-3.5 bg-rani-700 text-white font-bold rounded-xl shadow-lg hover:bg-rani-800 transition mt-2 flex items-center justify-center gap-2">
              <MessageSquare className="w-4 h-4" /> उपस्थिती कन्फर्म करा ✅
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
