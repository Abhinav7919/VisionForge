import { useState } from "react";

const settings = [
  {
    key: "language",
    icon: "🌐",
    label: "English",
    sub: "Language",
    options: ["English", "Hindi", "Bengali", "Tamil"],
  },
  {
    key: "volume",
    icon: "🔊",
    label: "High Volume",
    sub: "Voice Mode",
    options: ["Normal", "High Volume", "Low Volume"],
  },
  {
    key: "haptic",
    icon: "📳",
    label: "Vibration",
    sub: "Haptic Feedback",
    options: ["On", "Off"],
  },
  {
    key: "voice",
    icon: "👩",
    label: "Female Voice",
    sub: "Voice Type",
    options: ["Female Voice", "Male Voice"],
  },
];

export default function VoiceSettingsBar() {
  const [selected, setSelected] = useState({
    language: "English",
    volume: "High Volume",
    haptic: "On",
    voice: "Female Voice",
  });

  const cycle = (key, options) => {
    const idx = options.indexOf(selected[key]);
    setSelected((prev) => ({
      ...prev,
      [key]: options[(idx + 1) % options.length],
    }));
  };

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full max-w-lg">
      {settings.map((s) => (
        <button
          key={s.key}
          onClick={() => cycle(s.key, s.options)}
          className="flex flex-col items-center gap-1.5 p-3 rounded-xl bg-[#1a2235] border border-white/5 hover:border-violet-500/30 transition-all"
        >
          <span className="text-xl">{s.icon}</span>
          <p className="text-white text-xs font-semibold leading-tight">
            {selected[s.key]}
          </p>
          <p className="text-gray-500 text-xs">{s.sub}</p>
        </button>
      ))}
    </div>
  );
}
