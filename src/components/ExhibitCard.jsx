import styles from "./ExhibitCard.module.css";

export default function ExhibitCard({ exhibit }) {
  return (
    <div className={styles.card}>
      <img
        src={exhibit.image}
        alt={exhibit.title}
        className={styles.image}
      />

      <div className={styles.content}>
        <h2 className={styles.title}>{exhibit.title}</h2>
        <p className={styles.category}>{exhibit.category}</p>
        <p className={styles.description}>{exhibit.description}</p>

        <div className={styles.tags}>
          {exhibit.tags.map((tag, index) => (
            <span key={index} className={styles.tag}>
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}