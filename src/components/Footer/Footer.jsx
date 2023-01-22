import styles from "@/components/Footer/Footer.module.css";
import {AiFillFacebook} from 'react-icons/ai';
import {AiFillYoutube} from 'react-icons/ai';
import {AiOutlineTwitter} from 'react-icons/ai';
import {AiOutlineInstagram} from 'react-icons/ai';
import { FiArrowRight } from "react-icons/fi";
import {TfiPinterest} from 'react-icons/tfi';


function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__logo_icons}>
        <div className={styles.footer__logo}>PHOTOSNAP</div>
        <div className={styles.footer__icons}>
            <AiFillFacebook fontSize={25}/>
            <AiFillYoutube fontSize={25}/>
            <AiOutlineTwitter fontSize={25}/>
            <TfiPinterest fontSize={25}/>
            <AiOutlineInstagram fontSize={25}/>
        </div>
      </div>
      <div className={styles.footer__menu}>
            <ul>
                <li>Home</li>
                <li>Stories</li>
                <li>Features</li>
                <li>Pricing</li>
            </ul>
      </div>
      <div className={styles.footer_copyright}>
        <button>Get an invite <FiArrowRight /></button>
        <p>Copyright 2023. All Rights Reserved</p>
      </div>
    </footer>
  );
}

function Icon() {}

export default Footer;
