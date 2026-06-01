import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function VoiceOrb() {
  const [listening, setListening] = useState(false);

  return (
    <div className="flex flex-col items-center gap-4">
      {/* Orb */}
      <div className="relative flex items-center justify-center w-40 h-40">
        {/* Outer pulse rings */}
        <AnimatePresence>
          {listening && (
            <>
              {[1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  className="absolute rounded-full border border-violet-500/30"
                  initial={{ width: 80, height: 80, opacity: 0.6 }}
                  animate={{ width: 80 + i * 40, height: 80 + i * 40, opacity: 0 }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.3, ease: "easeOut" }}
                />
              ))}
            </>
          )}
        </AnimatePresence>

        {/* Main orb button */}
        <motion.button
          onClick={() => setListening((prev) => !prev)}
          className={`relative z-10 w-24 h-24 rounded-full flex items-center justify-center shadow-2xl transition-colors ${
            listening
              ? "bg-violet-600 shadow-violet-500/50"
              : "bg-[#1e2433] border border-violet-500/30"
          }`}
          whileTap={{ scale: 0.93 }}
          animate={listening ? { scale: [1, 1.05, 1] } : { scale: 1 }}
          transition={listening ? { duration: 1.2, repeat: Infinity } : {}}
        >
          <svg
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="none"
            stroke={listening ? "white" : "#a78bfa"}
            strokeWidth="2"
          >
            <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
            <path d="M19 10v2a7 7 0 0 1-14 0v-2M12 19v4M8 23h8" />
          </svg>
        </motion.button>
      </div>

      {/* Waveform bars */}
      <div className="flex items-center gap-1 h-10">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="w-1 rounded-full bg-violet-500"
            animate={
              listening
                ? {
                    height: [4, Math.random() * 28 + 8, 4],
                    opacity: [0.4, 1, 0.4],
                  }
                : { height: 4, opacity: 0.3 }
            }
            transition={
              listening
                ? {
                    duration: 0.6 + Math.random() * 0.4,
                    repeat: Infinity,
                    delay: i * 0.05,
                    ease: "easeInOut",
                  }
                : {}
            }
          />
        ))}
      </div>

      {/* Status text */}
      <p className="text-sm text-gray-400">
        {listening ? (
          <span className="text-violet-300 font-medium animate-pulse">Listening...</span>
        ) : (
          "Tap the mic to start"
        )}
      </p>
    </div>
  );
}
