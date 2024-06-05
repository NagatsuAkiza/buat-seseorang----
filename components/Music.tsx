import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { FaPlay, FaPause, FaPlus, FaMinus } from "react-icons/fa";

const Music: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5); // Initial volume set to 50%
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

  const increaseVolume = () => {
    if (audioRef.current && volume < 1) {
      const newVolume = Math.min(volume + 0.1, 1); // Increase volume by 10%
      setVolume(newVolume);
      audioRef.current.volume = newVolume;
    }
  };

  const decreaseVolume = () => {
    if (audioRef.current && volume > 0) {
      const newVolume = Math.max(volume - 0.1, 0); // Decrease volume by 10%
      setVolume(newVolume);
      audioRef.current.volume = newVolume;
    }
  };

  return (
    <div className="fixed top-4 right-4">
      <motion.button
        onClick={toggleMusic}
        className="bg-gray-800 text-white px-4 py-2 rounded-full flex items-center"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}>
        {isPlaying ? <FaPause size={20} /> : <FaPlay size={20} />}
      </motion.button>
      <motion.button
        onClick={increaseVolume}
        className="bg-gray-800 text-white px-4 py-2 rounded-full flex items-center mt-2"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}>
        <FaPlus size={20} />
      </motion.button>
      <motion.button
        onClick={decreaseVolume}
        className="bg-gray-800 text-white px-4 py-2 rounded-full flex items-center mt-2"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}>
        <FaMinus size={20} />
      </motion.button>
      <audio ref={audioRef} loop>
        <source src="./music.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default Music;
