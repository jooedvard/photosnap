import styles from "./Section.module.css";

function Section({ img, type, bg, heading, text, gradient }) {
  return (
    <section
      className={`${styles.section__left} ${
        type === "section__white" && styles.flex_col
      }`}
    >
      {type === "section__black" && (
        <div
          className={`${styles.section__black} ${
            bg === "white" && styles.bg_white
          }`}
        >
          {gradient && <div className={styles.section__gradient}></div>}
          <div>
            {heading}
            {text}
            <div>
              <button>GET AN INVITE</button>
            </div>
          </div>
        </div>
      )}
      <div className={styles.shrink}>
        <img src={img.src} />
      </div>
      {type === "section__white" && (
        <div className={styles.section__white}>
          <div>
            {heading}
            {text}

            <div>
              <button>View the stories</button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Section;
