import { useState, useEffect } from 'react';
import styles from "./ExhibitCard.module.css";

export default function ExhibitCard({ exhibit }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Get images array or fallback to single image or placeholder
  const images = exhibit.images || (exhibit.image ? [exhibit.image] : []);

  // Auto-cycle through images every 3 seconds
  useEffect(() => {
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        (prevIndex + 1) % images.length
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);


  // Create tags from available data
  const tags = [
    exhibit.plant_type?.split(' ')[0],
    exhibit.native_region?.split(',')[0],
    exhibit.category
  ].filter(Boolean);

  const currentImage = images.length > 0 ? images[currentImageIndex] : getPlaceholderImage(exhibit.title);

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img
          src={currentImage}
          alt={exhibit.title}
          className={styles.image}
        />
        {images.length > 1 && (
          <div className={styles.imageIndicators}>
            {images.map((_, index) => (
              <span
                key={index}
                className={`${styles.indicator} ${index === currentImageIndex ? styles.active : ''}`}
              />
            ))}
          </div>
        )}
      </div>

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