import React from 'react';
import styles from './HomePage.module.css';

export default function HomePage() {
  return (
    <div className={styles.homepage}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroImage}>
          <img src="/images/hero-image.jpg" alt="Botanical Garden" />
          <div className={styles.heroText}>
            <p> explore exotic plants in the middle of Aarhus C by travelling all around the world. start in the Mediterranean climate,  move into the dry desert , the humid mountain forests and end the journey in the tropical rainforest.</p>
          </div>
        </div>
      </section>

      {/* Featured Cards */}
      <section className={styles.featured}>
        <div className={styles.cardsGrid}>
          <div className={styles.card}>
            <img src="/images/mediterranean.jpg" alt="Mediterranean" />
            <div className={styles.cardOverlay}>
              <h3>Mediterranean Climate</h3>
            </div>
          </div>
          <div className={styles.card}>
            <img src="/images/rainforest.jpg" alt="Tropical" />
            <div className={styles.cardOverlay}>
              <h3>Tropical Rainforest</h3>
            </div>
          </div>
          <div className={styles.card}>
            <img src="/images/humid.jpg" alt="Humid Mountain Forest" />
            <div className={styles.cardOverlay}>
              <h3>Humid Mountain Forest</h3>
            </div>
          </div>
          <div className={styles.card}>
            <img src="/images/desert.jpg" alt="Desert" />
            <div className={styles.cardOverlay}>
              <h3>Dry Desert</h3>
            </div>
          </div>
        </div>
      </section>

      
      <section className={styles.climates}>
        <div className={styles.climateSection}>
          <div className={styles.climateImage}>
            <img src="/images/mediterranean.jpg" alt="Mediterranean Climate" />
          </div>
          <div className={styles.climateText}>
            <h3>Mediterranean Climate</h3>
            <p>The Mediterranean climate is characterized by hot, dry summers and mild, wet winters. This region is home to iconic plants like olive trees, lavender, and rosemary that have adapted to survive with minimal water during the summer months.</p>
          </div>
        </div>

        <div className={styles.climateSection}>
          <div className={styles.climateImage}>
            <img src="/images/rainforest.jpg" alt="Tropical Rainforest" />
          </div>
          <div className={styles.climateText}>
            <h3>Tropical Rainforest</h3>
            <p>Tropical rainforests receive abundant rainfall throughout the year and feature incredibly diverse plant life. Orchids, mahogany trees, and banana plants thrive in this humid, warm environment with rich soil and constant moisture.</p>
          </div>
        </div>

        <div className={styles.climateSection}>
          <div className={styles.climateImage}>
            <img src="/images/humid.jpg" alt="Humid Mountain Forest" />
          </div>
          <div className={styles.climateText}>
            <h3>Humid Mountain Forest</h3>
            <p>Mountain forests in humid regions experience cool temperatures and high moisture levels. Coniferous trees like firs, along with mosses and rhododendrons, dominate these misty, elevated landscapes.</p>
          </div>
        </div>

        <div className={styles.climateSection}>
          <div className={styles.climateImage}>
            <img src="/images/desert.jpg" alt="Dry Desert" />
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