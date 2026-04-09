import styles from "./ExhibitCard.module.css";

export default function ExhibitCard({ exhibit }) {
  // Generate a placeholder image based on plant type
  const getPlaceholderImage = (title) => {
    return `https://via.placeholder.com/400x300?text=${encodeURIComponent(title)}`;
  };

  // Create tags from available data
  const tags = [
    exhibit.plant_type?.split(' ')[0],
    exhibit.native_region?.split(',')[0],
    exhibit.category
  ].filter(Boolean);

  return (
    <div className={styles.card}>
      <img
        src={exhibit.image || getPlaceholderImage(exhibit.title)}
        alt={exhibit.title}
        className={styles.image}
      />

      <div className={styles.content}>
        <h2 className={styles.title}>{exhibit.title}</h2>
        <p className={styles.category}>{exhibit.category}</p>
        <p className={styles.scientific}><em>{exhibit.scientific_name}</em></p>
        <p className={styles.description}>{exhibit.description}</p>

        <div className={styles.tags}>
          {tags.map((tag, index) => (
            <span key={index} className={styles.tag}>
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}