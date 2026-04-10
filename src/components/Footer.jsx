import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.contact}>
          <p>Address: Peter Holms Vej8000 Aarhus C, Denmark</p>
          <p>Email: sm@au.dk</p>
          <p>Phone: +45 87 15 54 15</p>
        </div>
        <p className={styles.copy}>© 2026 BotanicalGarden. All rights reserved.</p>
      </div>
    </footer>
  );
}