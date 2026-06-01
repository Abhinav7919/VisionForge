const steps = [
  {
    number: 1,
    icon: "🙋",
    title: "Request Help",
    desc: "Choose duration and send request",
    color: "#8B5CF6",
  },
  {
    number: 2,
    icon: "✅",
    title: "Volunteer Accepts",
    desc: "Volunteer comes to your location",
    color: "#3B82F6",
  },
  {
    number: 3,
    icon: "🤝",
    title: "Get Assistance",
    desc: "Get help and pay as per time spent",
    color: "#10B981",
  },
];

export default function RequestSteps() {
  return (
    <div className="flex flex-col sm:flex-row gap-4">
      {steps.map((step, idx) => (
        <div key={step.number} className="flex-1 flex items-start gap-3 bg-[#111827] border border-white/5 rounded-xl p-4">
          {/* Number badge */}
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-black text-white shrink-0"
            style={{ backgroundColor: step.color }}
          >
            {step.number}
          </div>
          <div>
            <p className="text-white text-sm font-semibold">{step.title}</p>
            <p className="text-gray-500 text-xs mt-0.5 leading-relaxed">{step.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
