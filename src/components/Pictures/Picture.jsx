import styles from "@/components/Pictures/Pictures.module.css";
import {BsArrowRight} from 'react-icons/bs';
import Image from "next/image";

function Picture({ img, heading, creator, width, height }) {
  return (
    <div className={styles.picture}>
      <Image src={img} alt={"laptop"} placeholder="blur" width={width} height={height} blurDataURL={width!= null && img}/>
      <div className={styles.picture__wrapper}>
        <div className={styles.picture__content}>
          <div className={styles.picture__heading}>
            <h2>{heading}</h2>
            <p>{creator}</p>
          </div>
          <div>
            <button>
              <span>{"Read Story"}</span>
              <BsArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Picture;
