import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const FallingEmotes: React.FC = () => {
  const [emotes, setEmotes] = useState<number[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setEmotes((prev) => [...prev, Math.random()]);
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="falling-emotes-container">
      {emotes.map((_, index) => {
        const left = `${Math.random() * 100}vw`;
        const fontSize = `${Math.random() * 2 + 1}rem`;

        return (
          <motion.div
            key={index}
            className="falling-emote"
            initial={{ y: -100 }}
            animate={{ y: "100vh" }}
            transition={{ duration: 5, delay: index * 0.1, ease: "linear" }}
            style={{
              left,
              fontSize
            }}>
            ❤️
          </motion.div>
        );
      })}
      <style jsx>{`
        .falling-emotes-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          overflow: hidden;
          z-index: 10;
        }
        .falling-emote {
          position: absolute;
          color: red;
          user-select: none;
        }
      `}</style>
    </div>
  );
};

export default FallingEmotes;
