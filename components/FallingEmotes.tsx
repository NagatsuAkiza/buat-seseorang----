import React from "react";

const FallingEmotes: React.FC = () => {
  return (
    <div className="snowflakes" aria-hidden="true">
      {Array.from({ length: 10 }).map((_, index) => (
        <div key={index} className={`snowflake`}>
          ❤️
        </div>
      ))}
      <style jsx>{`
        body {
          background: white;
        }
        .snowflakes {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          overflow: hidden;
          z-index: 10;
        }
        .snowflake {
          color: red; /* Changed to red for the emote color */
          font-family: Arial;
          text-shadow: 0 0 1px #000;
          position: fixed;
          top: -10%;
          z-index: 9999;
          user-select: none;
          cursor: default;
          animation-name: snowflakes-fall, snowflakes-shake;
          animation-duration: 10s, 3s;
          animation-timing-function: linear, ease-in-out;
          animation-iteration-count: infinite, infinite;
          animation-play-state: running, running;
        }
        @keyframes snowflakes-fall {
          0% {
            top: -10%;
          }
          100% {
            top: 100%;
          }
        }
        @keyframes snowflakes-shake {
          0% {
            transform: translateX(0px);
          }
          50% {
            transform: translateX(80px);
          }
          100% {
            transform: translateX(0px);
          }
        }
        .snowflake:nth-of-type(1) {
          left: 1%;
          animation-delay: 0s, 0s;
          font-size: 1.5rem;
        }
        .snowflake:nth-of-type(2) {
          left: 10%;
          animation-delay: 1s, 1s;
          font-size: 2rem;
        }
        .snowflake:nth-of-type(3) {
          left: 20%;
          animation-delay: 6s, 0.5s;
          font-size: 1.2rem;
        }
        .snowflake:nth-of-type(4) {
          left: 30%;
          animation-delay: 4s, 2s;
          font-size: 1.8rem;
        }
        .snowflake:nth-of-type(5) {
          left: 40%;
          animation-delay: 2s, 2s;
          font-size: 1.6rem;
        }
        .snowflake:nth-of-type(6) {
          left: 50%;
          animation-delay: 8s, 3s;
          font-size: 1.4rem;
        }
        .snowflake:nth-of-type(7) {
          left: 60%;
          animation-delay: 6s, 2s;
          font-size: 2.2rem;
        }
        .snowflake:nth-of-type(8) {
          left: 70%;
          animation-delay: 2.5s, 1s;
          font-size: 1.3rem;
        }
        .snowflake:nth-of-type(9) {
          left: 80%;
          animation-delay: 1s, 0s;
          font-size: 2.1rem;
        }
        .snowflake:nth-of-type(10) {
          left: 90%;
          animation-delay: 3s, 1.5s;
          font-size: 1.7rem;
        }
      `}</style>
    </div>
  );
};

export default FallingEmotes;
