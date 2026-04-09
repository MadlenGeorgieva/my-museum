import { useState } from "react";
import exhibitions from "../data/exhibitions.json";
function ExhibitionList() {
const [searchTerm, setSearchTerm] = useState("");
// Filter: keep items where title OR description matches
const filtered = exhibitions.filter((exhibit) =>
exhibit.title.toLowerCase().includes(
searchTerm.toLowerCase()
) ||
exhibit.description.toLowerCase().includes(
searchTerm.toLowerCase()
)
);
return (
<div>
<input
type="text"
placeholder="Search exhibitions..."
value={searchTerm} // React controls the value
onChange={(e) => setSearchTerm(e.target.value)} // update on every keystroke
/>
<p>Showing {filtered.length} of {exhibitions.length} exhibitions</p>
{filtered.map((exhibit) => (
<ExhibitCard key={exhibit.id} exhibit={exhibit} />
))}
</div>
);
}