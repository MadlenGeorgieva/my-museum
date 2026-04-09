import exhibitions from "../data/museum.json";
import ExhibitCard from "../components/ExhibitCard";

export default function ExhibitionList() {
  return (
    <div className={styles.list}>
      {exhibitions.map(exhibit => (
        <ExhibitCard key={exhibit.id} exhibit={exhibit} />
      ))}
    </div>
  );
}