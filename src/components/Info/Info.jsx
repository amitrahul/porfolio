import React from "react";
import styles from "./Info.module.css";
import Button from "../Button/Button";
import Typist from "react-typist";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { BsMedium } from "react-icons/bs";
import { HashLink as Link } from "react-router-hash-link";

const gitHub = "https://github.com/amitrahul";
const linkedin = "https://www.linkedin.com/in/rahul-raj-a6a21a125/";
const leetcode = "https://leetcode.com/Rahul_217/";
const medium = "https://medium.com/@raj.rahul686";
const Info = () => {
  return (
    <div className={styles.infowrapper} id="info">
      <div className={styles.star}></div>
      <div className={styles.infoContentWrapper}>
        <h2 className={styles.name}>Rahul Raj</h2>
        <div className={styles.infoText}>
          Passionate about changing the world with technology.
        </div>
        <div className={styles.socialMedia}>
          <Link to={gitHub} target="_blank">
            <FaGithub size={55} className={styles.socialicons} />
          </Link>
          <Link to={medium} target="_blank">
            <BsMedium size={55} className={styles.socialicons} />
          </Link>
          <Link to={leetcode} target="_blank">
            <SiLeetcode size={55} className={styles.socialicons} />
          </Link>
          <Link to={linkedin} target="_blank">
            <FaLinkedin size={55} className={styles.socialicons} />
          </Link>
        </div>
        <Link to="#about" smooth>
          <Button btnText={"More about me"} />
        </Link>
      </div>
    </div>
  );
};

export default Info;
