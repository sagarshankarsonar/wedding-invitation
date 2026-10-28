"use client";
import { useState, useRef } from "react";
import { Music, VolumeX } from "lucide-react";

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const toggleAudio = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <audio ref={audioRef} loop src="https://assets.mixkit.co/music/preview/mixkit-indian-classical-flute-1188.mp3" />
      <button
        onClick={toggleAudio}
        className="p-3.5 bg-glass-rani border border-gold-500/40 rounded-full text-cream-200 shadow-2xl hover:scale-110 transition duration-300 flex items-center justify-center"
        title={isPlaying ? "Mute Background Music" : "Play Background Music"}
      >
        {isPlaying ? <Music className="w-5 h-5 animate-spin" /> : <VolumeX className="w-5 h-5" />}
      </button>
    </div>
  );
}
