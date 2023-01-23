import responsive from "@/assets/icon (1).svg";
import infinite from "@/assets/icon (2).svg";
import shout from "@/assets/icon (3).svg";
import styles from "@/components/Features/Features.module.css";
import Image from "next/image";

const features = [
  {
    img: shout,
    feature: "Responsive",
    text: "Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go.",
  },
  {
    img: responsive,
    feature: "No Photo Upload Limit",
    text: "No matter which the device you're on your site is fully responsive and stories look beautiful on any screen.",
  },
  {
    img: infinite,
    feature: "Avaible to Embed",
    text: "Embed Tweets, Facebook posts, Instagram media, Vimeo or Youtube videos, Google Maps, and more.",
  },
];

function Features() {
  return (
    <div className={styles.feature}>
      {features.map(({ img, feature, text }, index) => {
        return <Feature img={img} feature={feature} text={text} key={"feature" + index}/>;
      })}
    </div>
  );
}

export default Features;

function Feature({ img, feature, text }) {
  return (
    <div>
      <img src={img.src} alt="svg"/>
      <h2>{feature}</h2>
      <p>{text}</p>
    </div>
  );
}
