// Import the JSON file — Vite turns it into a JS array automatically
import exhibitions from "../data/exhibitions.json";
function ExhibitionList() {
// You can use exhibitions directly — no useState or useEffect needed!
return (
<div className="grid">
{exhibitions.map((exhibit) => (
<ExhibitCard key={exhibit.id} exhibit={exhibit} />
))}
</div>
);
}