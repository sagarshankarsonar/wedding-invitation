"use client";
import { useState, useRef, useEffect } from "react";
import { Music, VolumeX } from "lucide-react";

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.5;
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((error) => {
        console.log("Autoplay blocked by browser policy, waiting for interaction:", error);
      });
    }
  }, []);

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
      <audio ref={audioRef} loop src="/audio/sangeet.mp3" />
      <button
        onClick={toggleAudio}
        className="p-3.5 bg-rani-900 border-2 border-gold-500 rounded-full text-gold-300 shadow-2xl hover:scale-110 transition duration-300 flex items-center justify-center"
        title={isPlaying, "संगीत बंद करा / चालू करा"}
      >
        {isPlaying ? <Music className="w-5 h-5 animate-spin" /> : <VolumeX className="w-5 h-5" />}
      </button>
    </div>
  );
}
