import { useState } from "react";
import Modal from "../ui/Modal";

export default function RequestModal({ volunteer, onClose }) {
  const [duration, setDuration] = useState(1);
  const [sent, setSent] = useState(false);

  const total = volunteer.price * duration;

  const handleSend = () => {
    setSent(true);
    setTimeout(onClose, 2000);
  };

  return (
    <Modal onClose={onClose}>
      {!sent ? (
        <div className="flex flex-col gap-5">
          <div>
            <h3 className="text-white font-bold text-lg">Request Volunteer</h3>
            <p className="text-gray-400 text-sm mt-1">
              Sending request to <span className="text-violet-400 font-semibold">{volunteer.name}</span>
            </p>
          </div>

          {/* Duration picker */}
          <div>
            <label className="text-xs text-gray-400 mb-2 block">Duration (hours)</label>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setDuration((d) => Math.max(1, d - 1))}
                className="w-9 h-9 rounded-xl bg-white/5 hover:bg-white/10 text-white font-bold transition-colors"
              >
                −
              </button>
              <span className="text-2xl font-black text-white w-8 text-center">{duration}</span>
              <button
                onClick={() => setDuration((d) => Math.min(8, d + 1))}
                className="w-9 h-9 rounded-xl bg-white/5 hover:bg-white/10 text-white font-bold transition-colors"
              >
                +
              </button>
            </div>
          </div>

          {/* Cost summary */}
          <div className="bg-[#1a2235] rounded-xl p-4 flex items-center justify-between border border-white/5">
            <div>
              <p className="text-gray-400 text-xs">Estimated Cost</p>
              <p className="text-white font-black text-xl">₹{total}</p>
            </div>
            <div className="text-right">
              <p className="text-gray-400 text-xs">Rate</p>
              <p className="text-violet-400 text-sm font-semibold">₹{volunteer.price}/hr</p>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3">
            <button
              onClick={onClose}
              className="flex-1 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 text-sm font-semibold transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleSend}
              className="flex-1 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-700 text-white text-sm font-semibold transition-colors"
            >
              Send Request
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center gap-3 py-4">
          <div className="w-14 h-14 rounded-full bg-green-500/20 flex items-center justify-center text-3xl">
            ✅
          </div>
          <p className="text-white font-bold text-lg">Request Sent!</p>
          <p className="text-gray-400 text-sm text-center">
            {volunteer.name} will arrive at your location shortly.
          </p>
        </div>
      )}
    </Modal>
  );
}
