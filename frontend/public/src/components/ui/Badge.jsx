export default function Badge({ children, color = "gray" }) {
  const colors = {
    gray:   "bg-white/5 text-gray-400",
    violet: "bg-violet-500/15 text-violet-400",
    green:  "bg-green-500/15 text-green-400",
    blue:   "bg-blue-500/15 text-blue-400",
    amber:  "bg-amber-500/15 text-amber-400",
    red:    "bg-red-500/15 text-red-400",
  };

  return (
    <span className={`inline-block text-xs px-2 py-0.5 rounded-full font-medium ${colors[color]}`}>
      {children}
    </span>
  );
}
