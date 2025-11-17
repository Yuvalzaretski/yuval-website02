import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";

const assignments = [
  {
    id: 1,
    title: "React Tic-Tac-Toe",
    description:
      'הטמעתי משחק X-O רספונסיבי עם הדגשת רצפים וחגיגת ניצחון. תרגול מעולה ל-state ו-JSX.',
    href: "/tic-tac-toe",
    image: "/images/Tic-Tac-Toe.png",
  },
  {
    id: 2,
    title: "Met Art Explorer",
    description:
      "דף דינמי שמביא יצירות אקראיות מהמטרופוליטן, מטפל בשגיאות ומציג נתונים עשירים.",
    href: "/art",
    image: "/images/Art.png",
  },
  {
    id: 3,
    title: "From Figma to Code",
    description:
      "המרת עיצוב מלא לעמוד רספונסיבי כולל התאמות מובייל-דסקטופ ושפה גרפית עקבית.",
    href: "/design",
    image: "/images/Design.png",
  },
];

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <p className={styles.kicker}>Digital Product Jam · Due Nov 19</p>
        <h1>Digital Product Jam assignment 2</h1>
        <div className={styles.logoRow}>
          <Image
            src="/huji.svg"
            alt="HUJI Logo"
            width={90}
            height={90}
            priority
          />
          <Image
            src="/bezalel.svg"
            alt="Bezalel Logo"
            width={90}
            height={90}
            priority
          />
        </div>
      </section>

      <section className={styles.assignments}>
        <h2 className={styles.assignmentsTitle}>Tasks</h2>
        <div className={styles.assignmentGrid}>
          {assignments
            .slice()
            .reverse()
            .map((assignment, position) => {
              const partNumber = assignments.length - position;
              return (
            <article key={assignment.id} className={styles.assignmentCard}>
              <div className={styles.assignmentImageWrapper}>
                <Image
                  src={assignment.image}
                  alt={assignment.title}
                  width={320}
                  height={200}
                  className={styles.assignmentImage}
                />
                <span className={styles.assignmentBadge}>
                  חלק {partNumber}
                </span>
              </div>
              <div className={styles.assignmentBody}>
                <h3>{assignment.title}</h3>
                <p>{assignment.description}</p>
                <Link href={assignment.href} className={styles.assignmentLink}>
                  למעבר לחלק {partNumber}
                </Link>
              </div>
            </article>
          );
        })}
        </div>
      </section>
    </main>
  );
}
