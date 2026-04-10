import React from 'react';
import styles from './HomePage.module.css';
import heroImage from '../assets/hero-image.jpg';
import mediterraneanImg from '../assets/mediterranean.jpg';
import rainforestImg from '../assets/rainforest.jpg';
import humidImg from '../assets/humid.jpg';
import desertImg from '../assets/desert.jpg';

export default function HomePage({ onNavigate }) {
  const climateCards = [
    {
      image: mediterraneanImg,
      alt: "Mediterranean",
      title: "Mediterranean Climate",
      tag: "Mediterranean climate",
    },
    {
      image: rainforestImg,
      alt: "Tropical",
      title: "Tropical Rainforest",
      tag: "Tropical rainforest",
    },
    {
      image: humidImg,
      alt: "Humid Mountain Forest",
      title: "Humid Mountain Forest",
      tag: "Humid mountain forest",
    },
    {
      image: desertImg,
      alt: "Desert",
      title: "Dry Desert",
      tag: "Dry desert",
    },
  ];

  return (
    <div className={styles.homepage}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroImage}>
          <img src={heroImage} alt="Botanical Garden" />
          <div className={styles.heroText}>
            <p>
              Explore exotic plants in the middle of Aarhus C by travelling all around the world. start in the Mediterranean climate, move into the dry desert, the humid mountain forests and end the journey in the tropical rainforest.
            </p>
            <button
              type="button"
              className={styles.heroButton}
              onClick={() => onNavigate?.("visit")}
            >
              Plan your visit
            </button>
          </div>
        </div>
      </section>

      {/* Featured Cards */}
      <section className={styles.featured}>
        <div className={styles.cardsGrid}>
          {climateCards.map((card) => (
            <button
              key={card.tag}
              type="button"
              className={styles.card}
              onClick={() => onNavigate?.("plants", card.tag)}
              style={{ border: "none", padding: 0, background: "none", cursor: "pointer" }}
            >
              <img src={card.image} alt={card.alt} />
              <div className={styles.cardOverlay}>
                <h3>{card.title}</h3>
              </div>
            </button>
          ))}
        </div>
      </section>

      <section className={styles.climates}>
        <div className={styles.climateSection}>
          <div className={styles.climateImage}>
            <img src={mediterraneanImg} alt="Mediterranean Climate" />
          </div>
          <div className={styles.climateText}>
            <h3>Mediterranean Climate</h3>
            <p>The Mediterranean climate is characterized by hot, dry summers and mild, wet winters. This region is home to iconic plants like olive trees, lavender, and rosemary that have adapted to survive with minimal water during the summer months.</p>
          </div>
        </div>

        <div className={styles.climateSection}>
          <div className={styles.climateImage}>
            <img src={rainforestImg} alt="Tropical Rainforest" />
          </div>
          <div className={styles.climateText}>
            <h3>Tropical Rainforest</h3>
            <p>Tropical rainforests receive abundant rainfall throughout the year and feature incredibly diverse plant life. Orchids, mahogany trees, and banana plants thrive in this humid, warm environment with rich soil and constant moisture.</p>
          </div>
        </div>

        <div className={styles.climateSection}>
          <div className={styles.climateImage}>
            <img src={humidImg} alt="Humid Mountain Forest" />
          </div>
          <div className={styles.climateText}>
            <h3>Humid Mountain Forest</h3>
            <p>Mountain forests in humid regions experience cool temperatures and high moisture levels. Coniferous trees like firs, along with mosses and rhododendrons, dominate these misty, elevated landscapes.</p>
          </div>
        </div>

        <div className={styles.climateSection}>
          <div className={styles.climateImage}>
            <img src={desertImg} alt="Dry Desert" />
          </div>
          <div className={styles.climateText}>
            <h3>Dry Desert</h3>
            <p>Desert climates are extremely arid with very little rainfall. Cacti, aloe, and other succulents have evolved remarkable adaptations to store water and survive in these harsh, dry conditions.</p>
          </div>
        </div>
      </section>
    </div>
  );
}