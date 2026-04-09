// Import the JSON file — Vite turns it into a JS array automatically
import ExhibitCard from "../components/ExhibitCard";

export default function ExhibitionList({ exhibitions }) {
  // You can use exhibitions directly — no useState or useEffect needed!
  return (
    <div className="grid">
      {exhibitions.map((exhibit) => (
        <ExhibitCard key={exhibit.id} exhibit={exhibit} />
      ))}
    </div>
  );
}
