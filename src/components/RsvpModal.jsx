"use client";
import { useState } from "react";
import { X, Check } from "lucide-react";

export default function RsvpModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="bg-rani-900 border-2 border-gold-500/40 rounded-3xl p-6 md:p-8 max-w-md w-full relative shadow-2xl">
        <button onClick={onClose} className="absolute top-4 right-4 text-cream-200 hover:text-cream-50">
          <X className="w-6 h-6" />
        </button>

        {submitted ? (
          <div className="text-center py-8">
            <div className="w-12 h-12 bg-gold-500/20 text-gold-400 rounded-full flex items-center justify-center mx-auto mb-4 border border-gold-500">
              <Check className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-serif text-cream-100 font-bold mb-2">Thank You! 🎉</h3>
            <p className="text-sm text-cream-200/80">Your response has been registered successfully.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <h3 className="text-2xl font-serif text-cream-gradient font-bold text-center mb-1">
              Wedding RSVP 💌
            </h3>
            <p className="text-xs text-center text-cream-300/70 mb-4">Please confirm your presence</p>

            <div>
              <label className="block text-xs uppercase tracking-wider text-cream-300/80 mb-1">Full Name</label>
              <input required type="text" placeholder="e.g. Ramesh Patil" className="w-full bg-rani-950 border border-gold-500/30 rounded-xl p-3 text-sm text-cream-50 focus:outline-none focus:border-gold-500" />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-cream-300/80 mb-1">Attending Events</label>
              <select className="w-full bg-rani-950 border border-gold-500/30 rounded-xl p-3 text-sm text-cream-50 focus:outline-none focus:border-gold-500">
                <option value="all">All Events (Haldi & Wedding)</option>
                <option value="wedding">Wedding Only (25 Nov)</option>
                <option value="haldi">Haldi Only (24 Nov)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-cream-300/80 mb-1">Number of Guests</label>
              <input type="number" min="1" defaultValue="1" className="w-full bg-rani-950 border border-gold-500/30 rounded-xl p-3 text-sm text-cream-50 focus:outline-none focus:border-gold-500" />
            </div>

            <button type="submit" className="w-full py-3 bg-gradient-to-r from-cream-200 via-gold-400 to-cream-300 text-rani-950 font-bold rounded-xl shadow-lg hover:brightness-110 transition mt-2">
              Confirm Attendance ✨
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
