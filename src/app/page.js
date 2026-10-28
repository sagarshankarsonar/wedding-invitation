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
    <main className="relative min-h-screen overflow-hidden">
      <FloatingPetals />
      <Hero onOpenRsvp={() => setIsRsvpOpen(true)} />
      <Countdown />
      <Couple />
      <Events />
      <Invitees />
      <Location />
      <GuestBook />

      <footer className="py-8 text-center text-xs text-cream-200/60 border-t border-gold-500/10 bg-rani-950">
        <p>With Warm Regards from Sonar Family • Muktainagar</p>
        <p className="mt-1">Designed for Sagar & Priyanka's Wedding 2026 💍✨</p>
      </footer>

      <RsvpModal isOpen={isRsvpOpen} onClose={() => setIsRsvpOpen(false)} />
      <AudioPlayer />
    </main>
  );
}
