"use client";
import { useState } from "react";
import Hero from "@/components/Hero";
import Countdown from "@/components/Countdown";
import Couple from "@/components/Couple";
import Events from "@/components/Events";
import Invitees from "@/components/Invitees";
import Location from "@/components/Location";
import GuestBook from "@/components/GuestBook";
import RsvpModal from "@/components/RsvpModal";
import AudioPlayer from "@/components/AudioPlayer";
import FloatingPetals from "@/components/FloatingPetals";

export default function Home() {
  const [isRsvpOpen, setIsRsvpOpen] = useState(false);

  return (
    <main className="relative min-h-screen overflow-hidden bg-cream-50">
      <FloatingPetals />
      <Hero onOpenRsvp={() => setIsRsvpOpen(true)} />
      <Countdown />
      <Couple />
      <Events />
      <Invitees />
      <Location />
      <GuestBook />

      {/* फुटर - `#E30B5C` थीम आणि पूर्ण मराठीत */}
      <footer className="py-8 text-center text-xs md:text-sm text-cream-50 font-semibold border-t border-gold-400/40 bg-[#E30B5C]">
        <p> 🙏 सस्नेह सहर्ष स्वागत 🌸🌼• सोनार परिवार 🙏 </p>
        <p className="mt-1 text-gold-300">सागर आणि प्रियंका यांच्या शुभविवाह सोहळ्याकरिता निमंत्रित 💌✨</p>
      </footer>

      <RsvpModal isOpen={isRsvpOpen} onClose={() => setIsRsvpOpen(false)} />
      <AudioPlayer />
    </main>
  );
}
