import styles from "@/components/Pictures/Pictures.module.css";
import picture0 from "@/assets/picture.jpg";
import picture1 from "@/assets/picture (1).jpg";
import picture2 from "@/assets/picture (2).jpg";
import picture3 from "@/assets/picture (3).jpg";
import Image from "next/image";

import {BsArrowRight} from 'react-icons/bs';

const pictures = [
  {
    img: picture2,
    heading: "The Mountains",
    creator: "John Appleseed"
  },
  {
    img: picture3,
    heading: "City Nights",
    creator: "Benjamin Cruz"
  },
  {
    img: picture0,
    heading: "18 Days Voyage",
    creator: "Alexei Borodin"
  },
  {
    img: picture1,
    heading: "Architecturals",
    creator: "Samantha Brooke"
  },
];

function Pictures() {
  return (
    <div className={styles.pictures}>
      {pictures.map((picture, index) => {
          return <Picture img={picture.img} heading={picture.heading} creator={"by " + picture.creator} key={"picture" + index} />
      })}
    </div>
  );
}

export default Pictures;

function Picture({ img, heading, creator }) {
  return (
    <div className={styles.picture}>
      <Image src={img} alt={"laptop"} placeholder="blur"/>
      <div className={styles.picture__wrapper}>
        <div className={styles.picture__content}>
          <div className={styles.picture__heading}>
            <h2>{heading}</h2>
            <p>{creator}</p>
          </div>
          <div>
            <button><span>{"Read Story"}</span><BsArrowRight /></button>
          </div>
        </div>
      </div>
    </div>
  );
}
