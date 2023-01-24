import Image from "next/image";
import styles from "@/components/Stories/Featured.module.css";
import { BsArrowRight } from "react-icons/bs";
import { useEffect, useState } from "react";
import Picture from "../Pictures/Picture";



const Featured = ({ img, title, postingDate, author, text, images }) => {
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
        {images?.hits.map((picture, index) => {
          return (
            <Picture
              key={"picture__list" + index}
              img={picture.largeImageURL}
              width={picture.imageWidth}
              height={picture.imageHeight}
              creator={"posted by " + picture.user}
            />
          );
        })}
      </div>
    </>
  );
};

export default Featured;
