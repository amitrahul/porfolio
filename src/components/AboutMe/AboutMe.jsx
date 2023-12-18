import React from "react";
import styles from "./AboutMe.module.css";
import Button from "../Button/Button";
import ProfileImg from "../../assets/RahulImage.jpg";
import { Link } from "react-router-dom";
const resume =
  "https://drive.google.com/file/d/1qIuyiM2nr998X5ZoPFdvnBPZIt_sNYec/view";
const AboutMe = () => {
  return (
    <div className={styles.aboutMeWrapper} id="about">
      <section className={styles.imageWrapper}>
        <img src={ProfileImg} alt="profilepic" className={styles.image} />
      </section>
      <article className={styles.aboutMeContent}>
        <h2 className={styles.aboutHeader}>About Me</h2>
        <p className={styles.about}>
          I'm a skilled Software developer with experience (~2 years) in
          Software development and Software testing. I have expertise in
          JavaScript, and frameworks like React, Node.js. I'm a quick learner
          and collaborate closely with clients to create efficient, scalable,
          and user-friendly solutions that solve real-world problems
        </p>
        <Link to={resume} target="_blank">
          <Button btnText={"Resume"} />
        </Link>
      </article>
    </div>
  );
};

export default AboutMe;
