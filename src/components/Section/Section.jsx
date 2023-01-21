import styles from './Section.module.css';

function Section({img, type}) {
  return (
    <section className={styles.section__left}>
      <div className={styles.section__black}>
      <div className={styles.section__gradient}></div>  
        <h1>CREATE AND<br />SHARE YOUR PHOTO STORIES.</h1>
        <p>
          Photosnap is a platform for photographers and visual storytellers. We
          make it easy to share photos, tell stories and connect with others.
        </p>
        <div>
          <button>GET AN INVITE</button>
        </div>
      </div>
      <div> 
        <img src={img.src}/>
      </div>
    </section>
  );
}

export default Section;
