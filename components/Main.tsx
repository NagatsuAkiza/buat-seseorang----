"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import Music from "@/components/Music";

const Main: React.FC = () => {
  const [showInput, setShowInput] = useState(false);
  const [showTypewriter, setShowTypewriter] = useState(true);
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [showButtons, setShowButtons] = useState(false);
  const [response, setResponse] = useState<string | null>(null);
  const [gakButtonDisabled, setGakButtonDisabled] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setShowTypewriter(false);
    setShowInput(false);
  };

  const handleResponse = (userResponse: string) => {
    setResponse(userResponse);
    setShowButtons(false);
    setShowTypewriter(false);
    setSubmitted(false);
    setGakButtonDisabled(true); // Disable the "Gak" button
  };

  const handleGakButtonClick = () => {
    setGakButtonDisabled(true); // Disable the "Gak" button
    // Randomize position of "Gak" button
    const newX = Math.random() * (window.innerWidth - 200);
    const newY = Math.random() * (window.innerHeight - 200);
    const button = document.getElementById("gak-button");
    if (button) {
      button.style.position = "absolute";
      button.style.left = `${newX}px`;
      button.style.top = `${newY}px`;
    }
  };

  const nama = "Ivan";
  const emote = {
    emote1: "/(*￣︶￣)/",
    emote2: "^0^",
    emote3: "( •̀ ω •́ )",
    emote4: "`(*>﹏<*)′",
    emote5: "",
    emote6: "",
    emote7: ""
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.5, type: "tween" }}
      className="max-w-[44rem]">
      <Music />
      <div className="flex justify-center items-center flex-col text-2xl font-semibold text-center text-wrap">
        {showTypewriter && !submitted && (
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString(`Haloo!!, Aku ${nama} ${emote.emote1}`)
                .pauseFor(1500)
                .deleteAll()
                .typeString("Salam kenal yaa👋")
                .pauseFor(1500)
                .deleteAll()
                .typeString(`Owh iya ketik nama kamu disini dong ${emote.emote2}`)
                .changeDelay(100)
                .pauseFor(1000)
                .callFunction(() => setShowInput(true))
                .start();
            }}
          />
        )}
        {showInput && (
          <motion.form
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 20 }}
            transition={{ delay: 1, duration: 1, type: "tween", stiffness: 100 }}
            onSubmit={handleSubmit}
            className="mt-4 flex flex-col items-center">
            <input
              type="text"
              id="nama"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="rounded-md px-5 py-3 mb-4"
              required
            />
            <button type="submit" className="rounded-md bg-blue-500 text-white px-5 py-3">
              Submit
            </button>
          </motion.form>
        )}
        {submitted && (
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString(`Halo ${name}, jadi aku buat ini spesial buat kamu ${emote.emote3}`)
                .pauseFor(1500)
                .deleteAll()
                .typeString("Aku tau ini mungkin terlalu cepat 👉👈")
                .pauseFor(1500)
                .deleteAll()
                .typeString("Tapi ada yang bilang kalo mendem perasaan terlalu lama")
                .pauseFor(1500)
                .deleteAll()
                .typeString("Nanti bakalan nyesel")
                .pauseFor(1500)
                .deleteAll()
                .typeString(`Maka dari itu, aku mau confess hari ini ${emote.emote4}`)
                .pauseFor(1500)
                .deleteAll()
                .typeString("Jadi..., maukah kamu jadi pacarku > <")
                .callFunction(() => setShowButtons(true))
                .start();
            }}
          />
        )}
        {showButtons && (
          <div className="flex mt-4">
            <button
              onClick={() => handleResponse("iya")}
              className="rounded-md bg-green-500 text-white px-5 py-3 mx-2">
              Iya
            </button>
            <button
              id="gak-button"
              onClick={() => handleResponse("gak")}
              className="rounded-md bg-red-500 text-white px-5 py-3 mx-2"
              disabled={gakButtonDisabled} // Disable button based on state
            >
              Gak
            </button>
          </div>
        )}
        {response && (
          <div className="flex flex-col items-center">
            <Typewriter
              onInit={(typewriter) => {
                if (response === "iya") {
                  typewriter
                    .typeString("YEYYYY!!!! ☆*: .｡. o(≧▽≦)o .｡.:*☆")
                    .pauseFor(1500)
                    .deleteAll()
                    .typeString("aku ada di discord, aku mau ngomong langsung")
                    .start();
                } else {
                  typewriter.typeString("NT BRO, coba lagi nanti wkwkwk").start();
                }
              }}
            />
            {response === "iya" ? (
              <img
                src="https://tandarandom24.wordpress.com/wp-content/uploads/2019/10/tenor-77.gif"
                alt="Happy GIF"
                className="mt-4"
              />
            ) : (
              <img
                src="https://i.pinimg.com/originals/e1/64/7b/e1647b7fd330918520b12076a8a2dfcd.gif"
                alt="Sad GIF"
                className="mt-4"
              />
            )}
          </div>
        )}
      </div>
    </motion.section>
  );
};

export default Main;
