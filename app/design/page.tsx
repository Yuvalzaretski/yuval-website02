import styles from "./page.module.css";

export default function HeroSection() {
  return (
    <>
      {/* HERO */}
      <div className={styles.heroContainer}>
        <div className={styles.heroImageBox}>
          <div className={styles.textOverlay}>
            <h1 className={styles.title}>מַשְׁרִישִׁים</h1>
            <p className={styles.subtitle}>אפליקציה להחלפת ייחורים</p>
          </div>
        </div>
      </div>

      {/* סקשן מידע ראשון (A) */}
      <section className={styles.infoSectionA}>
        <div className={styles.infoWrapperA}>
          <div className={styles.imageContainerA}>
            <img
              src="/images/plant-mirror.png"
              alt="משתמשת עם צמח"
              className={styles.imageA}
            />
          </div>

          <div className={styles.textBoxA}>
            <p className={styles.textA}>
משרישים היא אפליקציה קהילתית להחלפה של ייחורים וצמחים בין אנשים באותו אזור. כל משתמש יוצר פרופיל אישי, מציע את הצמחים שברשותו, גולש בין הצעות של אחרים, וכשהאלגוריתם מזהה מאצ’ - מתואמת החלפה. האפליקציה יוצרת חיבור בין חובבי צמחים, ומעודדת קהילה.            </p>

            <img
              src="/images/leaf-hands.png"
              alt="אייקון עלים"
              className={styles.iconA}
            />
          </div>
        </div>
      </section>

      {/* סקשן מידע שני (B) — אותו עיצוב, צדדים הפוכים */}
      <section className={styles.infoSectionB}>
        <div className={styles.infoWrapperB}>

          <div className={styles.imageContainerB}>
            <img
              src="/images/michal.png"
              alt="משתמשת עם צמחים"
              className={styles.imageB}
            />
          </div>

          <div className={styles.textBoxB}>
            <p className={styles.subtitleTextB}>
              <span className={styles.boldTextB}>לכל משתמש יש פרופיל אישי - כי מאחורי כל החלפה יש פנים.</span>
            </p>

            <p className={styles.textB}>
              כל משתמש באפליקציה יוצר פרופיל אישי, מעלה תמונות של הצמחים אותם רוצה להחליף
              מסתכל על אילו צמחים קיימים לאחרים, וכשיש התאמה בין שני הצדדים, נוצר מאצ והצדדים יכולים לתאם מועד החלפה נוח.
            </p>

            <img
              src="/images/leaf-hands2.png"
              alt="אייקון עלים"
              className={styles.iconB}
            />
          </div>

        </div>
      </section>

      <section className={styles.infoSectionC}>
        <div className={styles.infoWrapperC}>

          <div className={styles.imageContainerC}>
            <img
              src="/images/daria.png"
              alt="משתמשת עם צמחים"
              className={styles.imageC}
            />
          </div>

          <div className={styles.textBoxC}>
          <p className={styles.subtitleTextC}>
            נהנית מההחלפה? 
            <br />
            דרג ופרגן למי שעשה לך טוב.
          </p>

            <p className={styles.textC}>
באפליקציה יש אפשרות לדרג משתמשים אחרי החלפת צמחים — כך אפשר לראות פידבק חיובי או שלילי ממי שכבר החלפתם איתו, ולקבל תחושת ביטחון ואמינות בקהילה.            </p>

          </div>

        </div>
      </section>

<section className={styles.communitySection}>
  <h2 className={styles.communityTitle}>בואו להיות חלק מקהילה צומחת</h2>

  <div className={styles.galleryGrid}>
    <img src="/images/gallery1.png" alt="תמונה 1" className={styles.galleryImage} />
    <img src="/images/gallery2.png" alt="תמונה 2" className={styles.galleryImage} />
    <img src="/images/gallery3.png" alt="תמונה 3" className={styles.galleryImage} />
    <img src="/images/gallery4.png" alt="תמונה 4" className={styles.galleryImage} />
    <img src="/images/gallery5.png" alt="תמונה 5" className={styles.galleryImage} />
    <img src="/images/gallery6.png" alt="תמונה 6" className={styles.galleryImage} />
  </div>
</section>

<section className={styles.reviewsSection}>
  <h2 className={styles.reviewsTitle}>חברי הקהילה שלנו מספרים</h2>

  <div className={styles.reviewsGrid}>
    <img src="/images/review3.png" alt="ביקורת 1" className={styles.reviewCard} />
    <img src="/images/review2.png" alt="ביקורת 2" className={styles.reviewCard} />
    <img src="/images/review1.png" alt="ביקורת 3" className={styles.reviewCard} />
  </div>

  <div className={styles.reviewsIcons}>
    <img src="/images/icon3.png" alt="אייקון עלים 1" className={styles.reviewIcon} />
    <img src="/images/icon2.png" alt="אייקון עלים 2" className={styles.reviewIcon} />
    <img src="/images/icon1.png" alt="אייקון עלים 3" className={styles.reviewIcon} />
  </div>
</section>
    </>
  );
}