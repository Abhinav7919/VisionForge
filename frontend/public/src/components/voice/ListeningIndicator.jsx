export default function ListeningIndicator() {
  return (
    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20">
      <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
      <span className="text-violet-300 text-xs font-medium">
        Tap mic to start listening
      </span>
    </div>
  );
}
