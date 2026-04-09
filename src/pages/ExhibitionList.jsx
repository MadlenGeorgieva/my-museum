// Import the JSON file — Vite turns it into a JS array automatically
import { useState } from "react";
import ExhibitCard from "../components/ExhibitCard";

export default function ExhibitionList({ exhibitions }) {
  const [selectedTags, setSelectedTags] = useState([]); // array of active tags

  // Toggle a tag: add it if not selected, remove it if already selected
  const toggleTag = (tag) => {
    setSelectedTags((prev) =>
      prev.includes(tag)
        ? prev.filter((t) => t !== tag) // remove it
        : [...prev, tag] // add it
    );
  };

  // Get all unique tags from all exhibitions
  const allTags = [...new Set(exhibitions.flatMap((exhibit) => exhibit.tags || []))];

  // Filter: show all if no tags selected, otherwise show plants that have ANY of the selected tags
  const filtered = exhibitions.filter((exhibit) =>
    selectedTags.length === 0 ||
    selectedTags.some((tag) => exhibit.tags?.includes(tag))
  );

  return (
    <div>
      {/* Tag Filter Section */}
      <div style={{ marginBottom: "2rem", textAlign: "center" }}>
        <h3 style={{ marginBottom: "1rem", color: "#2c3e50" }}>Filter by Tags</h3>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", justifyContent: "center" }}>
          {allTags.map((tag) => (
            <button
              key={tag}
              className={selectedTags.includes(tag) ? "tag active" : "tag"}
              onClick={() => toggleTag(tag)}
              style={{
                padding: "0.5rem 1rem",
                border: "2px solid #30502c",
                borderRadius: "20px",
                backgroundColor: selectedTags.includes(tag) ? "#30502c" : "white",
                color: selectedTags.includes(tag) ? "white" : "#30502c",
                cursor: "pointer",
                fontSize: "0.9rem",
                fontWeight: "500",
                transition: "all 0.2s ease",
              }}
            >
              {tag}
            </button>
          ))}
        </div>
        {selectedTags.length > 0 && (
          <p style={{ marginTop: "1rem", color: "#7f8c8d", fontSize: "0.9rem" }}>
            Showing {filtered.length} of {exhibitions.length} plants
            <button
              onClick={() => setSelectedTags([])}
              style={{
                marginLeft: "1rem",
                padding: "0.3rem 0.8rem",
                backgroundColor: "#30502c",
                color: "white",
                border: "none",
                borderRadius: "15px",
                cursor: "pointer",
                fontSize: "0.8rem",
              }}
            >
              Clear All
            </button>
          </p>
        )}
      </div>

      {/* Exhibition Grid */}
      <div className="grid">
        {filtered.map((exhibit) => (
          <ExhibitCard key={exhibit.id} exhibit={exhibit} />
        ))}
      </div>
    </div>
  );
}
