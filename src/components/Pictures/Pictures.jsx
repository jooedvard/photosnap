import styles from "@/components/Pictures/Pictures.module.css";
import picture0 from "@/assets/picture.jpg";
import picture1 from "@/assets/picture (1).jpg";
import picture2 from "@/assets/picture (2).jpg";
import picture3 from "@/assets/picture (3).jpg";
import Picture from "./Picture";

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


