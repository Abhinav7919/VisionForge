export default function Spinner({ size = "md", color = "violet" }) {
  const sizes = { sm: "w-4 h-4", md: "w-8 h-8", lg: "w-12 h-12" };
  const colors = {
    violet: "border-violet-500",
    white: "border-white",
    gray: "border-gray-500",
  };

  return (
    <div
      className={`${sizes[size]} ${colors[color]} rounded-full border-2 border-t-transparent animate-spin`}
    />
  );
}
