const commands = [
  { id: 1, text: "Take me to the nearest grocery store", time: "10:30 AM" },
  { id: 2, text: "Is there a hospital nearby?", time: "10:25 AM" },
  { id: 3, text: "How is the traffic ahead?", time: "10:20 AM" },
  { id: 4, text: "Where is the ATM?", time: "10:15 AM" },
  { id: 5, text: "Navigate to Park Street", time: "10:10 AM" },
  { id: 6, text: "What's around me?", time: "10:05 AM" },
];

export default function CommandHistory() {
  return (
    <div className="flex flex-col gap-2 overflow-y-auto max-h-[380px] pr-1">
      {commands.map((cmd) => (
        <div
          key={cmd.id}
          className="flex items-start gap-3 p-3 rounded-xl bg-[#1a2235] border border-white/5 hover:border-violet-500/20 transition-colors cursor-pointer group"
        >
          {/* Mic icon */}
          <div className="w-7 h-7 rounded-lg bg-violet-600/20 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-violet-600/30 transition-colors">
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#a78bfa"
              strokeWidth="2.5"
            >
              <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
              <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
            </svg>
          </div>

          {/* Text + time */}
          <div className="flex-1 min-w-0">
            <p className="text-gray-300 text-xs leading-relaxed line-clamp-2">
              {cmd.text}
            </p>
            <p className="text-gray-600 text-xs mt-1">{cmd.time}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
