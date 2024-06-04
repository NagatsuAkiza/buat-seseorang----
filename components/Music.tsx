import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { FaVolumeUp, FaVolumeMute } from "react-icons/fa";

const Music: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="fixed top-4 right-4">
      <motion.button
        onClick={toggleMusic}
        className="bg-gray-800 text-white px-4 py-2 rounded-full flex items-center"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}>
        {isPlaying ? <FaVolumeUp size={20} /> : <FaVolumeMute size={20} />}
      </motion.button>
      <audio ref={audioRef} loop>
        <source src="/music.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default Music;
