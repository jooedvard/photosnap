import Image from "next/image";
import styles from "@/components/Stories/Featured.module.css";
import { BsArrowRight } from "react-icons/bs";
import { useEffect, useState } from "react";
import Picture from "../Pictures/Picture";

const API_KEY = "33059658-8a1fcafabbd31d09bccb159b7";
const PIXABAY = " https://pixabay.com/api/?key=";
const Featured = ({ img, title, postingDate, author, text }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    let request = fetch(PIXABAY + API_KEY);
    request.then((data) => data.json()).then((data) => setData(data));
  }, []);

  if (data == null) return;

  return (
    <>
      <div className={styles.full_section}>
        <Image
          priority={true}
          src={img}
          alt="featured"
          fill={true}
          objectFit={"cover"}
          style={{ filter: "brightness(50%)" }}
        />
        <div className={styles.featured_content}>
          <p>Today's Featured Story</p>
          <h2>{title}</h2>
          <p>
            {postingDate} by {author}
          </p>
          <p className={styles.full_section_text}>{text}</p>
          <button>
            Read the story <BsArrowRight />
          </button>
        </div>
      </div>
      <div className={styles.picture_list}>
        {data.hits.map((picture, index) => {
          return (
            <Picture
              key={"picture__list" + index}
              img={picture.largeImageURL}
              width={picture.imageWidth}
              height={picture.imageHeight}
              creator={picture.user}
            />
          );
        })}
      </div>
    </>
  );
};

export default Featured;
