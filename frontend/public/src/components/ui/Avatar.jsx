const sizes = {
  sm: "w-8 h-8 text-xs",
  md: "w-10 h-10 text-sm",
  lg: "w-12 h-12 text-base",
  xl: "w-20 h-20 text-2xl",
};

const colors = [
  "bg-violet-600",
  "bg-blue-600",
  "bg-green-600",
  "bg-amber-600",
  "bg-pink-600",
  "bg-cyan-600",
];

export default function Avatar({ name = "U", size = "md", src }) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  const colorIndex =
    name.charCodeAt(0) % colors.length;

  if (src) {
    return (
      <img
        src={src}
        alt={name}
        className={`${sizes[size]} rounded-full object-cover border-2 border-white/10`}
      />
    );
  }

  return (
    <div
      className={`${sizes[size]} ${colors[colorIndex]} rounded-full flex items-center justify-center font-bold text-white border-2 border-white/10 shrink-0`}
    >
      {initials}
    </div>
  );
}
