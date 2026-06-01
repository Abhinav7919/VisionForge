import Avatar from "../ui/Avatar";
import StarRating from "../ui/StarRating";
import Badge from "../ui/Badge";

export default function VolunteerCard({ name, rating, distance, price, available = true, onRequest }) {
  return (
    <div className="bg-[#111827] border border-white/5 rounded-2xl p-4 flex flex-col gap-4 hover:border-violet-500/20 transition-all">
      {/* Top: avatar + info */}
      <div className="flex items-center gap-3">
        <Avatar name={name} size="lg" />
        <div className="flex-1">
          <p className="text-white font-semibold text-sm">{name}</p>
          <StarRating rating={rating} />
          <div className="flex items-center gap-2 mt-1">
            <Badge color="blue">{distance} away</Badge>
            {available ? (
              <Badge color="green">Available</Badge>
            ) : (
              <Badge color="gray">Busy</Badge>
            )}
          </div>
        </div>
        <div className="text-right">
          <p className="text-white font-bold text-sm">₹{price}</p>
          <p className="text-gray-500 text-xs">/hr</p>
        </div>
      </div>

      {/* Request button */}
      <button
        onClick={onRequest}
        disabled={!available}
        className={`w-full py-2.5 rounded-xl text-sm font-semibold transition-all ${
          available
            ? "bg-violet-600 hover:bg-violet-700 text-white"
            : "bg-white/5 text-gray-500 cursor-not-allowed"
        }`}
      >
        {available ? "Request" : "Unavailable"}
      </button>
    </div>
  );
}
