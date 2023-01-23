import { useState } from "react";
import styles from "./Nav.module.css";
import {FiMenu} from "react-icons/fi";
import { VscClose } from "react-icons/vsc";
import Link from "next/link";

console.log(styles)

export default function Nav() {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <nav className={styles.nav}>
        <h1><Link href="/">PHOTOSNAP</Link></h1>
        <ul>
          <li>
            <Link href="/stories">STORIES</Link>
          </li>
          <li>
            <a>FEATURES</a>
          </li>
          <li>
            <a>PRICING</a>
          </li>
        </ul>
        <div className={styles.nav_invite_button}>GET AN INVITE</div>
      </nav>
      <nav className={styles.mobile_nav}>
        <h1>PHOTOSNAP</h1>
        <div
          onClick={() => {
            setToggle(true);
          }}
        >
          <FiMenu fontSize={"1.5rem"}/>
        </div>
        {toggle && (
          <div className={styles.mobile_nav_wrapper}>
            <div className={styles.mobile_nav_close} onClick={() => setToggle(false)}><VscClose fontSize={"1.5rem"}/></div>
            <ul>
              <li>
                <a>STORIES</a>
              </li>
              <li>
                <a>FEATURES</a>
              </li>
              <li>
                <a>PRICING</a>
              </li>
              <div className={styles.nav_invite_button}>GET AN INVITE</div>
            </ul>
            
          </div>
        )}
      </nav>
    </>
  );
}
