import { useState } from "react";
import VolunteerCard from "./VolunteerCard";
import RequestModal from "./RequestModal";

const volunteers = [
  { id: 1, name: "Rohit Singh", rating: 4.8, distance: "2.5 km", price: 120, available: true },
  { id: 2, name: "Priya Mehta", rating: 4.9, distance: "1.9 km", price: 150, available: true },
  { id: 3, name: "Aman Verma", rating: 4.7, distance: "3.2 km", price: 100, available: true },
  { id: 4, name: "Sneha Nair", rating: 4.6, distance: "0.8 km", price: 130, available: false },
  { id: 5, name: "Kabir Patel", rating: 4.5, distance: "4.1 km", price: 90,  available: true },
  { id: 6, name: "Divya Rao",   rating: 4.8, distance: "2.0 km", price: 140, available: false },
];

export default function VolunteerGrid() {
  const [selected, setSelected] = useState(null);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {volunteers.map((v) => (
          <VolunteerCard
            key={v.id}
            {...v}
            onRequest={() => setSelected(v)}
          />
        ))}
      </div>

      {selected && (
        <RequestModal
          volunteer={selected}
          onClose={() => setSelected(null)}
        />
      )}
    </>
  );
}
