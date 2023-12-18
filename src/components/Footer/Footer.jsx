import React from "react";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";
import { HiMiniCodeBracket } from "react-icons/hi2";
import { FaReact, FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.footerWrapper}>
      <header className={styles.footerHeader}>Get In Touch</header>
      <section className={styles.footerText}>
        {`I'm currently looking for full-time React Developer/Frontend Developer
        opportunities! If you know of any positions available, if you have any
        questions, or if you just want to say hi, please feel free to email me
        at` + ", "}
        <Link to="mailto:amitrahul217@gmail.com" target="_blank">
          amitrahul217@gmail.com
        </Link>
        .
      </section>
      <div className={styles.footerLink}>
        <HiMiniCodeBracket size={30} />
        <span>With</span>
        <FaHeart size={30} />
        <span>by</span>
        <Link target="_blank" to={"https://github.com/amitrahul"}>
          <span className="badge bg-dark">Rahul Raj</span>
        </Link>
        <span>using</span>
        <FaReact size={30} />
      </div>
    </footer>
  );
};

export default Footer;
