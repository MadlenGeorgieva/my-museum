import { useState } from 'react';
import styles from './VisitPage.module.css';

export default function VisitPage() {
  const [formData, setFormData] = useState({ date: '', time: '10:00' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className={styles.visitPage}>
      <section className={styles.visitSection}>
        <div className={styles.visitFormCard}>
          <div className={styles.visitHeader}>
            <div>
              <h2>Book your visit</h2>
              <p>Choose a day and time for your museum visit.</p>
            </div>
          </div>

          <form className={styles.visitForm} onSubmit={handleSubmit}>
            <label className={styles.formField}>
              <span>Date</span>
              <input type="date" name="date" value={formData.date} onChange={handleChange} required />
            </label>
            <label className={styles.formField}>
              <span>Time</span>
              <input type="time" name="time" value={formData.time} onChange={handleChange} required />
            </label>
            <div className={styles.formActions}>
              <button type="submit" className={styles.submitButton}>
                Confirm booking
              </button>
            </div>
          </form>

          {submitted && (
            <div className={styles.successMessage}>
              Thanks! Your visit is planned for <strong>{formData.date}</strong> at <strong>{formData.time}</strong>.
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
